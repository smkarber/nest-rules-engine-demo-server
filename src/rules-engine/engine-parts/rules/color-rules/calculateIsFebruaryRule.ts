import IColorRule from '../../interfaces/color-rule.interface';

export default class CalculateIsFebruaryRule implements IColorRule {
  calculateColor(
    today: Date,
    _: string,
    month: string,
    baseColor: number,
  ): number {
    let color = baseColor;

    if (month === 'February') {
      if (today.getDate() % 2 === 0) {
        color += 0x040000;
      } else {
        color += 0x020000;
      }
    }

    return color;
  }
}
