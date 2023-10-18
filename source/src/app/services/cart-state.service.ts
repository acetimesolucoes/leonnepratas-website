import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../shared/models';
import { Cart } from '../shared/models/cart';
import { LocalstorageService } from './localstorage.service';
import { AppStateService } from './app-state.service';

@Injectable({
  providedIn: 'root'
})
export class CartStateService {

  cartSubject = new BehaviorSubject<Cart>(this.getCart());

  constructor(private localstorageService: LocalstorageService, private appState: AppStateService,) { }

  getCart() {
    let storageCart = JSON.parse(this.localstorageService.getItem('cart') || '');
    return new Cart(storageCart.id, storageCart.user_id, storageCart.items);
  }

  changeCart(cart: Cart) {
    this.localstorageService.setItem('cart', JSON.stringify(cart));
    this.cartSubject.next(cart);
  }

  createCartEmitterEvent(cart: Cart) {
    this.localstorageService.setItem('cart', JSON.stringify(cart));
    this.changeCart(cart);
  }

  addItemToCart(cartItem: CartItem) {
    this.appState.setOnToLoading();
    let cart = this.getCart();
    cart.addItemToCart(cartItem);
    this.changeCart(cart);
  }

  updateItemToCart(cartItemId: string, cartItem: CartItem) {
    this.appState.setOnToLoading();
    let cart = this.getCart();
    cart.updateItemToCart(cartItem);
    this.changeCart(cart);
  }

  removeItemToCart(cartItemId: string) {
    this.appState.setOnToLoading();
    let cart = this.getCart();
    cart.deleteItemToCart(cartItemId);
    this.changeCart(cart);
  }

  decreaseItemToCart(cartItemId: string) {
    this.appState.setOnToLoading();
    let cart = this.getCart();
    cart.decreaseItemToCart(cartItemId);
    this.changeCart(cart);
  }

  increaseItemToCart(cartItemId: string) {
    this.appState.setOnToLoading();
    let cart = this.getCart();
    cart.increaseItemToCart(cartItemId);
    this.changeCart(cart);
  }
}
