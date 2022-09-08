import IColorRule from '../../interfaces/color-rule.interface';

export default class CalculateIsWednesdayRule implements IColorRule {
  calculateColor(
    today: Date,
    day: string,
    _: string,
    baseColor: number,
  ): number {
    let color = baseColor;

    if (day === 'Wednesday') {
      if (today.getDate() % 2 === 0) {
        color += 0x000044;
      } else {
        color += 0x000022;
      }
    }

    return color;
  }
}
