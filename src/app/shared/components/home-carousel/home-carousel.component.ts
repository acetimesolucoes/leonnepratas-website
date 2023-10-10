import { Component, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-carousel',
  // standalone: true,
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.scss'],
})
export class HomeCarouselComponent {
  images = [700, 533, 807, 124].map((n) => {
    return {
      xs: `https://picsum.photos/id/${n}/400/500`,
      sm: `https://picsum.photos/id/${n}/700/800`,
      md: `https://picsum.photos/id/${n}/900/750`,
      lg: `https://picsum.photos/id/${n}/1280/900`,
      xl: `https://picsum.photos/id/${n}/2800/900`,
    }
  });

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', { static: true })
  carousel!: NgbCarousel;

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    // config.wrap = false;
    // config.keyboard = false;
    // config.pauseOnHover = false;
  }

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    this.carousel.interval = 100000;

    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

}
