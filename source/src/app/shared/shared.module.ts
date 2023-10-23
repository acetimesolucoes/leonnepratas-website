import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgbCarouselConfig, NgbCarouselModule, NgbRatingModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarCategoriesComponent } from './components/navbar-categories/navbar-categories.component';
import { NavbarCartComponent } from './components/navbar-cart/navbar-cart.component';
import { NavbarDashboardComponent } from './components/navbar-dashboard/navbar-dashboard.component';
import { HomeCarouselComponent } from './components/home-carousel/home-carousel.component';
import { DisplayHomeIconsComponent } from './components/display-home-icons/display-home-icons.component';
import { HomeCategoriesListComponent } from './components/home-categories-list/home-categories-list.component';
import { CarouselProductItensComponent } from './components/carousel-product-itens/carousel-product-itens.component';
import { ActionSectionComponent } from './components/action-section/action-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartStateService } from '../services/cart-state.service';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';
import { ToastContainerComponent } from './components/toast-container/toast-container.component';
import { ZoomPictureComponent } from './components/zoom-picture/zoom-picture.component';
import { FooterCartComponent } from './components/footer-cart/footer-cart.component';
import { CustomerProductCardComponent } from './components/customer-product-card/customer-product-card.component';

@NgModule({
  declarations: [
    NavbarComponent,
    NavbarCategoriesComponent,
    HomeCarouselComponent,
    NavbarCartComponent,
    NavbarDashboardComponent,
    DisplayHomeIconsComponent,
    HomeCategoriesListComponent,
    CarouselProductItensComponent,
    ActionSectionComponent,
    FooterComponent,
    CustomerProductCardComponent,
    LoadingOverlayComponent,
    ToastContainerComponent,
    ZoomPictureComponent,
    FooterCartComponent,
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
    NavbarCartComponent,
    NavbarDashboardComponent,
    HomeCarouselComponent,
    DisplayHomeIconsComponent,
    HomeCategoriesListComponent,
    CarouselProductItensComponent,
    ActionSectionComponent,
    FooterComponent,
    CustomerProductCardComponent,
    LoadingOverlayComponent,
    ToastContainerComponent,
    ZoomPictureComponent,
    FooterCartComponent,
  ],
  providers: [
    NgbCarouselConfig,
    CartStateService,
  ]
})
export class SharedModule { }
