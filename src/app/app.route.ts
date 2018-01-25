import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './pages/forms/general/general.component';

export const ROUTES: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent }
]