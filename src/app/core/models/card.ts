export class Card {
  constructor(
    public id: number | undefined = undefined,
    public name: string = '',
    public year: number = 0,
    public description: string = '',
    public genre: number[] = []
  ) {}
}
