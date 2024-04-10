export class GetAllProducts {
  constructor(
    public readonly page: number,
    public readonly limit: number,
    public readonly start: string,
  ) {}
}
