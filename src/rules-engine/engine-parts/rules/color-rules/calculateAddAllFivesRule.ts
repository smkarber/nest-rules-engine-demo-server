import IColorRule from '../../interfaces/color-rule.interface';

export default class CalculateAddAllFivesRule implements IColorRule {
  calculateColor(_1: Date, _2: string, _3: string, baseColor: number): number {
    return (baseColor += 0x555555);
  }
}
