import IColorRule from '../../interfaces/color-rule.interface';

export default class CalculateIsDecemberRule implements IColorRule {
  calculateColor(
    today: Date,
    _: string,
    month: string,
    baseColor: number,
  ): number {
    let color = baseColor;

    if (month === 'December') {
      if (today.getDate() % 2 === 0) {
        color += 0x444444;
      } else {
        color += 0x222222;
      }
    }

    return color;
  }
}
