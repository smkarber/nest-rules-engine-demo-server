import IColorRule from '../../interfaces/color-rule.interface';

export default class CalculateIsSeptemberRule implements IColorRule {
  calculateColor(
    today: Date,
    _: string,
    month: string,
    baseColor: number,
  ): number {
    let color = baseColor;

    if (month === 'September') {
      if (today.getDate() % 2 === 0) {
        color += 0x004400;
      } else {
        color += 0x002200;
      }
    }

    return color;
  }
}
