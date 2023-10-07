import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeCarouselComponent } from './components/home-carousel/home-carousel.component';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { DisplayHomeIconsComponent } from './components/display-home-icons/display-home-icons.component';
import { HomeCategoriesListComponent } from './components/home-categories-list/home-categories-list.component';
import { CarouselProductItensComponent } from './components/carousel-product-itens/carousel-product-itens.component';
import { ActionSectionComponent } from './components/action-section/action-section.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HomeCarouselComponent,
    DisplayHomeIconsComponent,
    HomeCategoriesListComponent,
    CarouselProductItensComponent,
    ActionSectionComponent,
  ],
  imports: [
    CommonModule,
    NgbCarouselModule,
    NgIf,
  ],
  exports: [
    NavbarComponent,
    HomeCarouselComponent,
    DisplayHomeIconsComponent,
    HomeCategoriesListComponent,
    CarouselProductItensComponent,
    ActionSectionComponent,
  ],
  providers: [
    NgbCarouselConfig
  ]
})
export class SharedModule { }
