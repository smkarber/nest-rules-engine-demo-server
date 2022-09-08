import IColorRule from '../../interfaces/color-rule.interface';

export default class CalculateIsJulyRule implements IColorRule {
  calculateColor(
    today: Date,
    _: string,
    month: string,
    baseColor: number,
  ): number {
    let color = baseColor;

    if (month === 'July') {
      if (today.getDate() % 2 === 0) {
        color += 0x400004;
      } else {
        color += 0x200002;
      }
    }

    return color;
  }
}
