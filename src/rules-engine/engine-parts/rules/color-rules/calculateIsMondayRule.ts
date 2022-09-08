import IColorRule from '../../interfaces/color-rule.interface';

export default class CalculateIsMondayRule implements IColorRule {
  calculateColor(
    today: Date,
    day: string,
    _: string,
    baseColor: number,
  ): number {
    let color = baseColor;

    if (day === 'Monday') {
      if (today.getDate() % 2 === 0) {
        color += 0x440000;
      } else {
        color += 0x220000;
      }
    }
    return color;
  }
}
