import IColorRule from '../../interfaces/color-rule.interface';

export default class CalculateIsMayRule implements IColorRule {
  calculateColor(
    today: Date,
    _: string,
    month: string,
    baseColor: number,
  ): number {
    let color = baseColor;

    if (month === 'May') {
      if (today.getDate() % 2 === 0) {
        color += 0x000040;
      } else {
        color += 0x000020;
      }
    }

    return color;
  }
}
