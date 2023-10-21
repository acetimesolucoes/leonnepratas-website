import { Component, TemplateRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { CartItem } from '../../models/cart-item';
import { CartStateService } from 'src/app/services/cart-state.service';
import { AppStateService } from 'src/app/services/app-state.service';
import { ToastService } from 'src/app/services/toast.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  closeResult: string | undefined;

  cart_products_picture: SafeUrl[] = [];

  cart_items: CartItem[] = [];

  constructor(
    private offcanvasService: NgbOffcanvas,
    private sanitizer: DomSanitizer,
    private router: Router,
    private cartStateService: CartStateService,
    private toastService: ToastService,
    private appState: AppStateService,
  ) {
    this.getCart();
  }

  openCartModal(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }

  closeCartModal() {
    this.offcanvasService.dismiss();
  }

  pictureUrlToSanitize(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  getCart() {
    this.cartStateService.cartSubject.subscribe((cart) => {
      this.cart_items = cart.items;
    })
  }

  getTotalCart() {
    let total = 0;

    for (let i = 0; i < this.cart_items.length; i++) {
      const item = this.cart_items[i];
      total += item.unit_price * item.quantity;
    }

    return total;
  }

  getParcelaMaximaSemJuros() {
    return 3;
  }

  getValorParcelasSemJuros() {
    let parcelaMaximaSemJuros = this.getParcelaMaximaSemJuros();
    let valorParcelasSemJuros = (this.getTotalCart() / parcelaMaximaSemJuros).toFixed(2);

    return valorParcelasSemJuros;
  }

  navigateToProductDetail(productTitle: string) {
    let productUrl = productTitle.replaceAll(" ", "-").replaceAll(',', '').replaceAll('.', '');

    this.closeCartModal();
    this.router.navigate([productUrl]);
  }

  removeProductToCart(productId: string) {
    this.cartStateService.removeItemToCart(productId);
    this.showAlert('Produto removido do carrinho!');
  }

  calculateTotalPrice(quantity: number, unit_price: number) {
    return quantity * unit_price;
  }

  decreaseCartItem(productId: string) {
    this.cartStateService.decreaseItemToCart(productId);
    this.showAlert('Produto removido do carrinho!');
  }

  increaseCartItem(productId: string) {
    this.cartStateService.increaseItemToCart(productId);
    this.showAlert('Produto adicionado ao carrinho!');
  }

  showAlert(message: string) {
    this.toastService.show(message, { classname: 'bg-primary text-light', delay: 10000 });
  }

  onBuyClick() {
    this.appState.setOnToLoading(3000);
    this.closeCartModal();

    this.router.navigate(['checkout']);
  }

  onClickProfile() {
    this.router.navigate(['auth']);
  }
}
