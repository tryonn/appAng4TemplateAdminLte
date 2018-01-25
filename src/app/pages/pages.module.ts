import { NgModule } from "@angular/core";
import { GeneralComponent } from "./forms/general/general.component";
import { RouterModule } from "@angular/router";
import { ROUTES } from "../pages/page.route";
import { AdvancedComponent } from './forms/advanced/advanced.component';
import { EditorsComponent } from './forms/editors/editors.component';

@NgModule({
    declarations: [
        GeneralComponent,
        AdvancedComponent,
        EditorsComponent
    ],
    imports: [
        RouterModule.forRoot(ROUTES)
    ],
    exports: [
    ]
})

export class PagesModule { }