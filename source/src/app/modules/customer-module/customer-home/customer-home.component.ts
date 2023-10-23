import { Component } from '@angular/core';
import { Product } from 'src/app/shared/models';
import { MathUtils } from 'src/app/utils';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.scss']
})
export class CustomerHomeComponent {

  products: Product[] = [];

  constructor() {
    this.getProducts();
  }

  async getProducts() {
    for (let i = 0; i < 16; i++) {
      let random = Math.floor(Math.random() * 1000 - 1);
      let randomAmount = MathUtils.getRandomFloat(280.80, 15.99, 2);

      this.products.push(new Product(
        String(random),
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        5,
        randomAmount,
        [`https://picsum.photos/id/${random}/900/1250`],
        'lorem-ipsum-dolor-sit-amet-consectetur-adipisicing-elit',
      ));
    }
  }
}
