import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-b2b-product-card',
  templateUrl: './b2b-product-card.component.html',
  styleUrls: ['./b2b-product-card.component.scss']
})
export class B2bProductCardComponent {
  currentRate = 3;

  random = Math.floor(Math.random() * 1000 - 1);

  images = [this.random].map((n) => `https://picsum.photos/id/${n}/900/1250`);

  constructor(private config: NgbRatingConfig, private sanitizer: DomSanitizer,) {
    // customize default values of ratings used by this component tree
    config.max = 5;
    config.readonly = true;
  }

  getProductSafePicture(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
