import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import '@angular/localize/init';
import { BehaviorSubject } from 'rxjs';
import { AppStateService } from './services/app-state.service';
import { ToastService } from './services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  static isBrowser = new BehaviorSubject<boolean>(false);

  loading: boolean = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private appStateService: AppStateService,
    public toastService: ToastService,
  ) {
    AppComponent.isBrowser.next(isPlatformBrowser(platformId));

    this.getInLoading();
  }

  ngOnInit(): void {
    // this.appStateService.setOnToLoading(0);
  }

  getInLoading() {
    this.appStateService.inLoading.subscribe((loadingState) => {
      this.loading = loadingState;
    })
  }

  showStandard() {
    this.toastService.show('I am a standard toast');
  }

  showSuccess() {
    this.toastService.show('I am a success toast', { classname: 'bg-success text-light', delay: 10000 });
  }

  showDanger(dangerTpl: any) {
    this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 15000 });
  }

  ngOnDestroy(): void {
    this.toastService.clear();
    this.appStateService.setOffToLoading();
  }
}
