import { AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-b2b-category',
  templateUrl: './b2b-category.component.html',
  styleUrls: ['./b2b-category.component.scss']
})
export class B2bCategoryComponent implements DoCheck {

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
