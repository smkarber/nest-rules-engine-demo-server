import IColorRule from '../../interfaces/color-rule.interface';

export default class CalculateIsFridayRule implements IColorRule {
  calculateColor(
    today: Date,
    day: string,
    _: string,
    baseColor: number,
  ): number {
    let color = baseColor;

    if (day === 'Friday') {
      if (today.getDate() % 2 === 0) {
        color += 0x444444;
      } else {
        color += 0x222222;
      }
    }

    return color;
  }
}
