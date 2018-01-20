import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent }

]