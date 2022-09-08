import IColorRule from '../../interfaces/color-rule.interface';

export default class CalculateIsTuesdayRule implements IColorRule {
  calculateColor(
    today: Date,
    day: string,
    _: string,
    baseColor: number,
  ): number {
    let color = baseColor;

    if (day === 'Tuesday') {
      if (today.getDate() % 2 === 0) {
        color += 0x004400;
      } else {
        color += 0x002200;
      }
    }

    return color;
  }
}
