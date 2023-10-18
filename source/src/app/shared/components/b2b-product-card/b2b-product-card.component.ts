import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { CartStateService } from 'src/app/services/cart-state.service';
import { CartItem } from '../../models';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-b2b-product-card',
  templateUrl: './b2b-product-card.component.html',
  styleUrls: ['./b2b-product-card.component.scss']
})
export class B2bProductCardComponent {
  currentRate = 3;

  random = Math.floor(Math.random() * 1000 - 1);

  images = [this.random].map((n) => `https://picsum.photos/id/${n}/900/1250`);

  constructor(
    private config: NgbRatingConfig,
    private sanitizer: DomSanitizer,
    private cartStateService: CartStateService,
    public toastService: ToastService,
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
        `https://picsum.photos/id/${this.random}/75/75`
      )
    );

    this.showAlert('Produto adicionado ao carrinho!');
  }

  showAlert(message: string) {
    this.toastService.show(message, { classname: 'bg-primary text-light', delay: 10000 });
  }
}
