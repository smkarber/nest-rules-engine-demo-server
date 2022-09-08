import IColorRule from '../../interfaces/color-rule.interface';

export default class CalculateIsThursdayRule implements IColorRule {
  calculateColor(
    today: Date,
    day: string,
    _: string,
    baseColor: number,
  ): number {
    let color = baseColor;

    if (day === 'Thursday') {
      if (today.getDate() % 2 === 0) {
        color += 0x440044;
      } else {
        color += 0x220022;
      }
    }

    return color;
  }
}
