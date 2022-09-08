import IEligibilityRule from '../../interfaces/eligibility-rule.interface';
import IMember from '../../interfaces/member.interface';

export default class HasMedicaidRule implements IEligibilityRule {
  calculateEligibility(member: IMember): boolean {
    return member.hasMedicaid;
  }
}
