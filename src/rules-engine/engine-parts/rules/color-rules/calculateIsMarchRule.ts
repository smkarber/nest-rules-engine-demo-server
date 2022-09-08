import IColorRule from '../../interfaces/color-rule.interface';

export default class CalculateIsMarchRule implements IColorRule {
  calculateColor(
    today: Date,
    _: string,
    month: string,
    baseColor: number,
  ): number {
    let color = baseColor;

    if (month === 'March') {
      if (today.getDate() % 2 === 0) {
        color += 0x004000;
      } else {
        color += 0x002000;
      }
    }

    return color;
  }
}
