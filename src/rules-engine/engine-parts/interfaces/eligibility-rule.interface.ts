import IMember from './member.interface';

export interface IEligibilityRule {
  calculateEligibility(member: IMember): boolean;
}

export default IEligibilityRule;
