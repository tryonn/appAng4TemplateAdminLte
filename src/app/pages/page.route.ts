import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './forms/general/general.component';
import { AdvancedComponent } from './forms/advanced/advanced.component';
import { EditorsComponent } from './forms/editors/editors.component';

export const ROUTES: Routes = [
    { path: 'pages/forms/general', component: GeneralComponent },
    { path: 'pages/forms/advanced', component: AdvancedComponent },
    { path: 'pages/forms/editors', component: EditorsComponent}

]