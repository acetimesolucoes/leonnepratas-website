import { CartItem } from "./cart-item";

export class Cart {
    constructor(id: string, user_id: string, cartItems?: CartItem[]) {
        this.id = id;
        this.user_id = user_id;
        this.items = (cartItems) ? cartItems : new Array();
    }

    id: string | null;
    user_id: string | null;
    items: CartItem[];

    addItemToCart(cartItem: CartItem) {
        let index = this.items.findIndex((i) => i.product_id == cartItem.product_id);

        if (index != -1) {
            this.items[index].quantity += cartItem.quantity;
        } else {
            this.items.push(cartItem);
        }
    }

    updateItemToCart(cartItem: CartItem) {
        let itemIndex = this.items.findIndex((i) => i.product_id == cartItem.product_id);

        this.items[itemIndex] = cartItem;
    }

    deleteItemToCart(product_id: string) {
        let itemIndex = this.items.findIndex((i) => i.product_id == product_id);

        this.items.splice(itemIndex, 1);
    }

    decreaseItemToCart(product_id: string) {
        let itemIndex = this.items.findIndex((i) => i.product_id == product_id);

        if (this.items[itemIndex].quantity == 1) {
            this.deleteItemToCart(product_id);
        } else {
            this.items[itemIndex].quantity--;
        }
    }

    increaseItemToCart(product_id: string) {
        let itemIndex = this.items.findIndex((i) => i.product_id == product_id);

        this.items[itemIndex].quantity++;
    }
}