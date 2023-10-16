import { Component, TemplateRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

class CartProduct {
  constructor(id: string, title: string, quantity: number, price: number, picture_url: string,) {
    this.id = id;
    this.title = title;
    this.quantity = quantity;
    this.price = price;
    this.picture_url = picture_url;
  }

  id: string;
  title: string;
  quantity: number;
  price: number;
  picture_url: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  closeResult: string | undefined;

  cart_products_picture: SafeUrl[] = [];

  cart_products: CartProduct[] = [];

  constructor(private offcanvasService: NgbOffcanvas, private sanitizer: DomSanitizer, private router: Router) {
    this.getProductsToCart();
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

  getProductsToCart() {
    let random = Math.floor(Math.random() * 15);

    this.cart_products = [];

    for (let i = 0; i < random; i++) {
      let random_picture_id = Math.floor(Math.random() * (500 - 1)) + 1;
      let randomQuantity = Math.floor(Math.random() * (5 - 1)) + 1;
      let randomUnitPrice = this.getRandomFloat(280.80, 15.99, 2);

      this.cart_products.push(
        {
          id: String(Math.floor(Math.random() * 999999)),
          title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          quantity: randomQuantity,
          price: randomUnitPrice * randomQuantity,
          picture_url: `https://picsum.photos/id/${random_picture_id}/75/75`,
        }
      );
    }
  }

  getRandomFloat(min: number, max: number, decimals: number) {
    const str = (Math.random() * (max - min) + min).toFixed(
      decimals,
    );

    return parseFloat(str);
  }

  getTotalCart() {
    let total = 0;

    for (let i = 0; i < this.cart_products.length; i++) {
      const product = this.cart_products[i];
      total += product.price
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
    let index = this.cart_products.findIndex((cp => cp.id == productId));

    this.cart_products.splice(index, 1);
  }
}
