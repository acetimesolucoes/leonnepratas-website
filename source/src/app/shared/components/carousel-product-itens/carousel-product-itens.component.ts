import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../../models';

@Component({
  selector: 'app-carousel-product-itens',
  templateUrl: './carousel-product-itens.component.html',
  styleUrls: ['./carousel-product-itens.component.scss']
})
export class CarouselProductItensComponent {

  @Input() title: string | null = null;
  @Input() products: Product[] | null = null;

  constructor() {

  }
}
