import { AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/models';
import { MathUtils } from 'src/app/utils';

@Component({
  selector: 'app-customer-category',
  templateUrl: './customer-category.component.html',
  styleUrls: ['./customer-category.component.scss']
})
export class CustomerCategoryComponent implements DoCheck {

  breadcrumbs: any = [];
  products: Product[] = [];

  constructor(private activatedRoute: ActivatedRoute,) {
    this.getProducts();
  }

  getProducts() {
    for (let i = 0; i < 8; i++) {
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

  ngDoCheck(): void {
    this.getBreadcrumbs();
  }

  getBreadcrumbs() {
    this.breadcrumbs = [];

    this.activatedRoute.url.forEach(urlSegments => {
      urlSegments.forEach((urlSegment, index, selfArray) => {
        let isActualPath = (index == selfArray.length - 1) ? true : false;

        this.breadcrumbs.push({
          path: urlSegment.path,
          isActualPath,
        });
      });
    });
  }
}
