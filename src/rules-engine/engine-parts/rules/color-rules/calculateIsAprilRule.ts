import IColorRule from '../../interfaces/color-rule.interface';

export default class CalculateIsAprilRule implements IColorRule {
  calculateColor(
    today: Date,
    _: string,
    month: string,
    baseColor: number,
  ): number {
    let color = baseColor;

    if (month === 'April') {
      if (today.getDate() % 2 === 0) {
        color += 0x000400;
      } else {
        color += 0x000200;
      }
    }

    return color;
  }
}
