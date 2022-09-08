import IColorRule from '../../interfaces/color-rule.interface';

export default class CalculateIsJanuaryRule implements IColorRule {
  calculateColor(
    today: Date,
    _: string,
    month: string,
    baseColor: number,
  ): number {
    let color = baseColor;

    if (month === 'January') {
      if (today.getDate() % 2 === 0) {
        color += 0x400000;
      } else {
        color += 0x200000;
      }
    }

    return color;
  }
}
