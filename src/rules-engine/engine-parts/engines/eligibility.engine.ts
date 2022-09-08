import IEligibilityRule from '../interfaces/eligibility-rule.interface';
import IMember from '../interfaces/member.interface';

export default class EligibilityEngine {
  private _rulesAndRequirements: {
    rules: IEligibilityRule[];
    requirement: boolean;
    or?: boolean;
  }[];

  constructor(
    rulesAndRequirements: {
      rules: IEligibilityRule[];
      requirement: boolean;
      or?: boolean;
    }[],
  ) {
    this._rulesAndRequirements = rulesAndRequirements;
  }

  public calculateEligibility(member: IMember): boolean {
    const requirmentsMet = this._rulesAndRequirements.map((rr) => {
      const { rules, requirement } = rr;

      const conditions = [];

      rules.forEach((rule) => {
        conditions.push(rule.calculateEligibility(member) === requirement);
      });

      if (rr.or) {
        return conditions.includes(true);
      }

      return !conditions.includes(false);
    });

    return !requirmentsMet.includes(false);
  }
}
