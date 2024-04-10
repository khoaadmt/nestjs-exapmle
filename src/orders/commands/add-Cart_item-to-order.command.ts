export class AddCartItemToOrderCommand {
  constructor(
    public readonly user_id: string,
    public readonly payment: string,
    public readonly cart_item_id: number,
  ) {}
}
