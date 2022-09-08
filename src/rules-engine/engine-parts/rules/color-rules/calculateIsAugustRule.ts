import IColorRule from '../../interfaces/color-rule.interface';

export default class CalculateIsAugustRule implements IColorRule {
  calculateColor(
    today: Date,
    _: string,
    month: string,
    baseColor: number,
  ): number {
    let color = baseColor;

    if (month === 'August') {
      if (today.getDate() % 2 === 0) {
        color += 0x040040;
      } else {
        color += 0x020020;
      }
    }

    return color;
  }
}
