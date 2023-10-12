import { Component } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-b2b-product-card',
  templateUrl: './b2b-product-card.component.html',
  styleUrls: ['./b2b-product-card.component.scss']
})
export class B2bProductCardComponent {
  currentRate = 3;

  constructor(config: NgbRatingConfig) {
    // customize default values of ratings used by this component tree
    config.max = 5;
    config.readonly = true;
  }
}
