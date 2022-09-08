export interface IColorRule {
  calculateColor(
    today: Date,
    day: string,
    month: string,
    baseColor: number,
  ): number;
}

export default IColorRule;
