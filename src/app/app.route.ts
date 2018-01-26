import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './pages/forms/general/general.component';
import { DashboardV1Component } from './dashboard/dashboard-v1/dashboard-v1.component';
import { DashboardV2Component } from './dashboard/dashboard-v2/dashboard-v2.component';

export const ROUTES: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'dashboard-v1', component: DashboardV1Component},
    { path: 'dashboard-v2', component: DashboardV2Component}
]