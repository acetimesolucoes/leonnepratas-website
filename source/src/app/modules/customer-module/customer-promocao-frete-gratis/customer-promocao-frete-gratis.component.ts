import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-promocao-frete-gratis',
  templateUrl: './customer-promocao-frete-gratis.component.html',
  styleUrls: ['./customer-promocao-frete-gratis.component.scss']
})
export class CustomerPromocaoFreteGratisComponent {
  constructor(private route: ActivatedRoute, private title: Title, private meta: Meta,) {
    this.route.data.subscribe((data: any) => {
      if (data.title) {
        this.title.setTitle(data.title);
        this.meta.updateTag({ name: 'description', content: 'Aqui você conta com a promoção frete grátis.' });
      }
    });
  }
}
