import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-customer-dashboard-layout',
  templateUrl: './customer-dashboard-layout.component.html',
  styleUrls: ['./customer-dashboard-layout.component.scss']
})
export class CustomerDashboardLayoutComponent {
  constructor(
    private router: Router,
    private appState: AppStateService,
  ) {

  }

  doSignOut() {
    this.appState.setOnToLoading(4000);

    this.router.navigate(['/']);
  }

  goBackToSite() {
    this.appState.setOnToLoading(3000);
    this.router.navigate(['/']);
  }
}
