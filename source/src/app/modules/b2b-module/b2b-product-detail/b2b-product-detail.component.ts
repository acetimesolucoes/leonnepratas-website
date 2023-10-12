import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-b2b-product-detail',
  templateUrl: './b2b-product-detail.component.html',
  styleUrls: ['./b2b-product-detail.component.scss']
})
export class B2bProductDetailComponent implements OnInit {

  product: any;

  constructor(private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer,) {
    activatedRoute.data.forEach(d => {
      console.log('d => ', d);
    });

    activatedRoute.queryParamMap.forEach(p => {
      console.log('p => ', p);
    });
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    let random_picture_id = Math.floor(Math.random() * (500 - 1)) + 1;
    let randomUnitPrice = this.getRandomFloat(280.80, 15.99, 2);

    this.product = {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      picture_url: `https://picsum.photos/id/${random_picture_id}/1900/1900`,
      unit_price: randomUnitPrice,
      categories: [
        {
          id: '123456',
          title: 'aneis',
        },
      ]
    };
  }

  getRandomFloat(min: number, max: number, decimals: number) {
    const str = (Math.random() * (max - min) + min).toFixed(
      decimals,
    );

    return parseFloat(str);
  }

  pictureUrlToSanitize(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
