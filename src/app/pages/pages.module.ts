;
import { Page500Component } from './examples/page-500/page-500.component';
import { Page404Component } from './examples/page-404/page-404.component';

import { GeneralUiComponent } from './UI/general-ui/general-ui.component';
import { PaceComponent } from './examples/pace/pace.component';
import { BlankComponent } from './examples/blank/blank.component';
import { NgModule } from "@angular/core";
import { GeneralComponent } from "./forms/general/general.component";
import { RouterModule } from "@angular/router";
import { ROUTES } from "../pages/page.route";
import { AdvancedComponent } from './forms/advanced/advanced.component';
import { EditorsComponent } from './forms/editors/editors.component';
import { TopNavComponent } from './layout/top-nav/top-nav.component';
import { BoxedComponent } from './layout/boxed/boxed.component';
import { FixedComponent } from './layout/fixed/fixed.component';
import { CollapsedSidebarComponent } from './layout/collapsed-sidebar/collapsed-sidebar.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { ChartjsComponent } from './charts/chartjs/chartjs.component';
import { MorrisComponent } from './charts/morris/morris.component';
import { FlotComponent } from './charts/flot/flot.component';
import { InlineComponent } from './charts/inline/inline.component';
import { IconsComponent } from './UI/icons/icons.component';
import { ButtonsComponent } from './UI/buttons/buttons.component';
import { SlidersComponent } from './UI/sliders/sliders.component';
import { TimelineComponent } from './UI/timeline/timeline.component';
import { ModalsComponent } from './UI/modals/modals.component';
import { SimpleComponent } from './tables/simple/simple.component';
import { DataComponent } from './tables/data/data.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MailboxComponent } from './mailbox/mailbox/mailbox.component';
import { ComposeComponent } from './mailbox/compose/compose.component';
import { ReadMailComponent } from './mailbox/read-mail/read-mail.component';
import { InvoiceComponent } from './examples/invoice/invoice.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { LoginComponent } from './examples/login/login.component';
import { RegisterComponent } from './examples/register/register.component';
import { LockscreenComponent } from './examples/lockscreen/lockscreen.component';

@NgModule({
    declarations: [
        GeneralComponent,
        AdvancedComponent,
        EditorsComponent,
        TopNavComponent,
        BoxedComponent,
        FixedComponent,
        CollapsedSidebarComponent,
        WidgetsComponent,
        ChartjsComponent,
        MorrisComponent,
        FlotComponent,
        InlineComponent,
        IconsComponent,
        ButtonsComponent,
        SlidersComponent,
        TimelineComponent,
        ModalsComponent,
        SimpleComponent,
        DataComponent,
        CalendarComponent,
        MailboxComponent,
        ComposeComponent,
        ReadMailComponent,
        InvoiceComponent,
        ProfileComponent,
        LoginComponent,
        RegisterComponent,
        LockscreenComponent,
        BlankComponent,
        PaceComponent,
        GeneralUiComponent,
        Page404Component,
        Page500Component,
        TopNavComponent
    ],
    imports: [
        RouterModule.forRoot(ROUTES)
    ],
    exports: [
    ]
})

export class PagesModule { }