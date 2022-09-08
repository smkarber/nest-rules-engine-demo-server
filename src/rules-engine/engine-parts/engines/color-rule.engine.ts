import { IColorRule } from '../interfaces/color-rule.interface';

export default class ColorRuleEngine {
  private _rules: IColorRule[];

  constructor(rules: IColorRule[]) {
    this._rules = rules;
  }

  public calculateBackgroundColor(): string {
    const today = new Date();
    const day = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(
      today,
    );
    const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(
      today,
    );

    let baseColor = 0x000000;

    this._rules.forEach((rule) => {
      baseColor = rule.calculateColor(today, day, month, baseColor);
    });

    return baseColor.toString(16).toUpperCase().padStart(6, '0');
  }
}
