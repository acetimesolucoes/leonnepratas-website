import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { CartStateService } from 'src/app/services/cart-state.service';
import { CartItem, Product } from '../../models';
import { ToastService } from 'src/app/services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-product-card',
  templateUrl: './customer-product-card.component.html',
  styleUrls: ['./customer-product-card.component.scss']
})
export class CustomerProductCardComponent {

  random = Math.floor((Math.random() * 7) + 1);

  @Input() product: Product | null = null;

  currentRate = 3;

  constructor(
    private config: NgbRatingConfig,
    private sanitizer: DomSanitizer,
    private cartStateService: CartStateService,
    public toastService: ToastService,
    private router: Router,
  ) {
    // customize default values of ratings used by this component tree
    config.max = 5;
    config.readonly = true;

  }

  getProductSafePicture(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  addProductToCart() {
    this.cartStateService.addItemToCart(
      new CartItem(
        String(this.random),
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        1,
        158.90,
        // `https://picsum.photos/id/${this.random}/75/75`,
        `../../assets/products/compressed-${this.random}.jpg`,
        'lorem-ipsum-dolor-sit-amet-consectetur-adipisicing-elit'
      )
    );

    this.showAlert('Produto adicionado ao carrinho!');
  }

  showAlert(message: string) {
    this.toastService.show(message, { classname: 'bg-primary text-light', delay: 10000 });
  }

  doOpenDetail() {
    if (this.product) {
      this.router.navigate([this.product.url], { queryParams: {} });
    }
  }
}
