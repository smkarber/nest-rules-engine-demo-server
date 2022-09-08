import { Body, Controller, Get, Post } from '@nestjs/common';
import RulesEngineRequest from './engine-parts/interfaces/rules-engine-request.interface';
import { RulesEngineService } from './rules-engine.service';

@Controller('rules-engine')
export class RulesEngineController {
  constructor(private readonly rulesEngineService: RulesEngineService) {}

  @Get()
  async getAllRules(): Promise<string[]> {
    return await this.rulesEngineService.getAllRules();
  }

  @Get('/color')
  async getColor(): Promise<string> {
    return await this.rulesEngineService.decideColor();
  }

  @Post('/wi-home-visit-eligibility')
  async decideWIHomeVisitEligibility(
    @Body() rulesEngineRequest: RulesEngineRequest[],
  ): Promise<{ name: string; eligible: boolean }[]> {
    return await this.rulesEngineService.decideWIHomeVisitEligibility(
      rulesEngineRequest,
    );
  }
}
