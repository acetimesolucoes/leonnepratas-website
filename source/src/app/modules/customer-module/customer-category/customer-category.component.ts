import { AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-category',
  templateUrl: './customer-category.component.html',
  styleUrls: ['./customer-category.component.scss']
})
export class CustomerCategoryComponent implements DoCheck {

  breadcrumbs: any = [];

  constructor(private activatedRoute: ActivatedRoute,) {

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
