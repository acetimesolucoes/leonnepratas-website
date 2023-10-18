export class CartItem {
    constructor(
        product_id: string,
        product_title: string,
        quantity: number,
        unit_price: number,
        product_picture_url: string,
    ) {
        this.product_id = product_id;
        this.product_title = product_title;
        this.quantity = quantity;
        this.unit_price = unit_price;
        this.product_picture_url = product_picture_url;

        this.total_price = this.getTotalPrice;
    }

    product_id: string;
    product_title: string;
    quantity: number;
    unit_price: number;
    total_price: Function;
    product_picture_url: string;

    getTotalPrice = () => {
        return this.unit_price * this.quantity;
    }
}