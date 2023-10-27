import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-politicas-de-garantia',
  templateUrl: './customer-politicas-de-garantia.component.html',
  styleUrls: ['./customer-politicas-de-garantia.component.scss']
})
export class CustomerPoliticasDeGarantiaComponent {
  constructor(private route: ActivatedRoute, private title: Title,) {
    this.route.data.subscribe((data: any) => {
      if (data.title) {
        this.title.setTitle(data.title);
      }
    });
  }
}
