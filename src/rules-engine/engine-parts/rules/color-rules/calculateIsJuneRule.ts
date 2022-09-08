import IColorRule from '../../interfaces/color-rule.interface';

export default class CalculateIsJuneRule implements IColorRule {
  calculateColor(
    today: Date,
    _: string,
    month: string,
    baseColor: number,
  ): number {
    let color = baseColor;

    if (month === 'June') {
      if (today.getDate() % 2 === 0) {
        color += 0x000004;
      } else {
        color += 0x000002;
      }
    }

    return color;
  }
}
