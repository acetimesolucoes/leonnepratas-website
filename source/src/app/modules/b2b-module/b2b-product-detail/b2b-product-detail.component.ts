import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-b2b-product-detail',
  templateUrl: './b2b-product-detail.component.html',
  styleUrls: ['./b2b-product-detail.component.scss']
})
export class B2bProductDetailComponent {
  constructor(activatedRoute: ActivatedRoute) {
    activatedRoute.data.forEach(d => {
      console.log('d => ', d);
    });

    activatedRoute.queryParamMap.forEach(p => {
      console.log('p => ', p);
    });
  }
}
