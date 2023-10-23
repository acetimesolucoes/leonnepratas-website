import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppStateService } from 'src/app/services/app-state.service';
import { CartStateService } from 'src/app/services/cart-state.service';
import { CartItem } from 'src/app/shared/models';
import { Cart } from 'src/app/shared/models/cart';

@Component({
  selector: 'app-customer-cart-start',
  templateUrl: './customer-cart-start.component.html',
  styleUrls: ['./customer-cart-start.component.scss']
})
export class CustomerCartStartComponent {
  cart: Cart | null = null;

  constructor(
    private appState: AppStateService,
    private cartState: CartStateService,
    private router: Router,
  ) {
    this.getCart();
  }

  increaseProduct(cartItemId: string) {
    // if (this.getMaxQuantityProductToDecrease()) {
    this.cartState.increaseItemToCart(cartItemId);
    // }
  }

  decreaseProduct(cartItemId: string) {
    // if (this.getMinQuantityProductToDecrease()) {
    this.cartState.decreaseItemToCart(cartItemId);
    // }
  }

  getMinQuantityProductToDecrease() {
    // if (this.quantityProductToCart > 1) {
    //   return true;
    // } else {
    //   return false;
    // }
  }

  getMaxQuantityProductToDecrease() {
    // if (this.quantityProductToCart < 5) {
    //   return true;
    // } else {
    //   return false;
    // }
  }

  getCart() {
    this.cartState.cartSubject.subscribe(c => {
      this.appState.setOnToLoading(2000);
      this.cart = c;
    });
  }

  calculateUnitItemTotalPrice(quantity: number, unit_price: number) {
    return quantity * unit_price;
  }

  calculateCartSubTotal(): number {
    if (this.cart) {
      return this.cart.items.reduce(
        (accumulator, currentItem) =>
          accumulator + this.calculateUnitItemTotalPrice(currentItem.unit_price, currentItem.quantity),
        0)
    } else {
      return 0;
    }
  }

  calculateFreigth() {
    return 15.50;
  }

  calculateCartTotal(): number {
    let cartSubtotal = this.calculateCartSubTotal();
    let freigth = this.calculateFreigth();

    return cartSubtotal + freigth;
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
