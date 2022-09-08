import IColorRule from '../../interfaces/color-rule.interface';

export default class CalculateIsNovemberRule implements IColorRule {
  calculateColor(
    today: Date,
    _: string,
    month: string,
    baseColor: number,
  ): number {
    let color = baseColor;

    if (month === 'November') {
      if (today.getDate() % 2 === 0) {
        color += 0x040404;
      } else {
        color += 0x020202;
      }
    }

    return color;
  }
}
