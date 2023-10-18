import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeCarouselComponent } from './components/home-carousel/home-carousel.component';
import { NgbCarouselConfig, NgbCarouselModule, NgbRatingModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { DisplayHomeIconsComponent } from './components/display-home-icons/display-home-icons.component';
import { HomeCategoriesListComponent } from './components/home-categories-list/home-categories-list.component';
import { CarouselProductItensComponent } from './components/carousel-product-itens/carousel-product-itens.component';
import { ActionSectionComponent } from './components/action-section/action-section.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarCategoriesComponent } from './components/navbar-categories/navbar-categories.component';
import { RouterModule } from '@angular/router';
import { B2bProductCardComponent } from './components/b2b-product-card/b2b-product-card.component';
import { CartStateService } from '../services/cart-state.service';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';
import { ToastContainerComponent } from './components/toast-container/toast-container.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HomeCarouselComponent,
    DisplayHomeIconsComponent,
    HomeCategoriesListComponent,
    CarouselProductItensComponent,
    ActionSectionComponent,
    FooterComponent,
    NavbarCategoriesComponent,
    B2bProductCardComponent,
    LoadingOverlayComponent,
    ToastContainerComponent,
  ],
  imports: [
    CommonModule,
    NgIf,
    NgbCarouselModule,
    NgbRatingModule,
    NgFor,
    FormsModule,
    RouterModule,
    NgbToastModule,
    NgTemplateOutlet,
  ],
  exports: [
    NavbarComponent,
    HomeCarouselComponent,
    DisplayHomeIconsComponent,
    HomeCategoriesListComponent,
    CarouselProductItensComponent,
    ActionSectionComponent,
    FooterComponent,
    B2bProductCardComponent,
    LoadingOverlayComponent,
    ToastContainerComponent,
  ],
  providers: [
    NgbCarouselConfig,
    CartStateService,
  ]
})
export class SharedModule { }
