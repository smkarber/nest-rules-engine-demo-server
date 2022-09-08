import IEligibilityRule from '../../interfaces/eligibility-rule.interface';
import IMember from '../../interfaces/member.interface';

export default class HasMedicareRule implements IEligibilityRule {
  calculateEligibility(member: IMember): boolean {
    return member.hasMedicare;
  }
}
