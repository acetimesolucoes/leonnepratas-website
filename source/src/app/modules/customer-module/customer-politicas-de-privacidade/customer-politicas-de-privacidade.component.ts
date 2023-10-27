import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-politicas-de-privacidade',
  templateUrl: './customer-politicas-de-privacidade.component.html',
  styleUrls: ['./customer-politicas-de-privacidade.component.scss']
})
export class CustomerPoliticasDePrivacidadeComponent {
  constructor(private route: ActivatedRoute, private title: Title,) {
    this.route.data.subscribe((data: any) => {
      if (data.title) {
        this.title.setTitle(data.title);
      }
    });
  }
}
