import { Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';

import ColorRuleEngine from './engine-parts/engines/color-rule.engine';
import IColorRule from './engine-parts/interfaces/color-rule.interface';

import EligibilityEngine from './engine-parts/engines/eligibility.engine';
import FromWisconsinRule from './engine-parts/rules/eligibility-rules/fromWisconsinRule';
import HasMedicaidRule from './engine-parts/rules/eligibility-rules/hasMedicaidRule';
import HasMedicareRule from './engine-parts/rules/eligibility-rules/hasMedicareRule';
import IsVeteranRule from './engine-parts/rules/eligibility-rules/isVeteranRule';
import IMember from './engine-parts/interfaces/member.interface';
import RulesEngineRequest from './engine-parts/interfaces/rules-engine-request.interface';

@Injectable()
export class RulesEngineService {
  async getAllRules(): Promise<string[]> {
    let files;
    await fs.readdir('src/rules-engine/engine-parts/rules/color-rules').then(
      (filenames) =>
        (files = filenames.map((fname) => {
          return fname.split('.')[0];
        })),
    );
    return files;
  }

  async decideColor(): Promise<string> {
    const ruleNames = await this.getAllRules();

    const promises: Promise<IColorRule>[] = ruleNames.map(async (ruleName) => {
      let rule: IColorRule;

      await import(`./engine-parts/rules/color-rules/${ruleName}`).then(
        (ruleModule) => {
          rule = new ruleModule.default();
        },
      );

      return rule;
    });

    let color;

    await Promise.all(promises)
      .then((resolvedPromises) => {
        return resolvedPromises;
      })
      .then((rules) => {
        const engine = new ColorRuleEngine(rules);
        color = engine.calculateBackgroundColor();
      });

    return color;
  }

  async decideWIHomeVisitEligibility(
    requests: RulesEngineRequest[],
  ): Promise<{ name: string; eligible: boolean }[]> {
    const rules = [
      { rules: [new FromWisconsinRule()], requirement: true },
      { rules: [new IsVeteranRule()], requirement: false },
      {
        rules: [new HasMedicaidRule(), new HasMedicareRule()],
        requirement: true,
        or: true,
      },
    ];
    const engine = new EligibilityEngine(rules);

    return requests.map((r) => {
      return {
        name: `${r.member.firstName} ${r.member.lastName}`,
        eligible: engine.calculateEligibility(r.member),
      };
    });
  }
}
