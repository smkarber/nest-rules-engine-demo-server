import IColorRule from '../../interfaces/color-rule.interface';

export default class CalculateIsOctoberRule implements IColorRule {
  calculateColor(
    today: Date,
    _: string,
    month: string,
    baseColor: number,
  ): number {
    let color = baseColor;

    if (month === 'October') {
      if (today.getDate() % 2 === 0) {
        color += 0x404040;
      } else {
        color += 0x202020;
      }
    }

    return color;
  }
}
