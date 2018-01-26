import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './forms/general/general.component';
import { AdvancedComponent } from './forms/advanced/advanced.component';
import { EditorsComponent } from './forms/editors/editors.component';
import { ButtonsComponent } from './UI/buttons/buttons.component';
import { GeneralUiComponent } from './UI/general-ui/general-ui.component';
import { IconsComponent } from './UI/icons/icons.component';
import { ModalsComponent } from './UI/modals/modals.component';
import { TimelineComponent } from './UI/timeline/timeline.component';
import { SlidersComponent } from './UI/sliders/sliders.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ChartjsComponent } from './charts/chartjs/chartjs.component';
import { FlotComponent } from './charts/flot/flot.component';
import { InlineComponent } from './charts/inline/inline.component';
import { MorrisComponent } from './charts/morris/morris.component';
import { Page404Component } from './examples/page-404/page-404.component';
import { Page500Component } from './examples/page-500/page-500.component';
import { BlankComponent } from './examples/blank/blank.component';
import { InvoiceComponent } from './examples/invoice/invoice.component';
import { LockscreenComponent } from './examples/lockscreen/lockscreen.component';
import { LoginComponent } from './examples/login/login.component';
import { PaceComponent } from './examples/pace/pace.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { RegisterComponent } from './examples/register/register.component';
import { BoxedComponent } from './layout/boxed/boxed.component';
import { CollapsedSidebarComponent } from './layout/collapsed-sidebar/collapsed-sidebar.component';
import { FixedComponent } from './layout/fixed/fixed.component';
import { TopNavComponent } from './layout/top-nav/top-nav.component';
import { ComposeComponent } from './mailbox/compose/compose.component';
import { ReadMailComponent } from './mailbox/read-mail/read-mail.component';
import { MailboxComponent } from './mailbox/mailbox/mailbox.component';
import { DataComponent } from './tables/data/data.component';
import { SimpleComponent } from './tables/simple/simple.component';
import { WidgetsComponent } from './widgets/widgets.component';

export const ROUTES: Routes = [
    { path: 'pages/forms/general', component: GeneralComponent },
    { path: 'pages/forms/advanced', component: AdvancedComponent },
    { path: 'pages/forms/editors', component: EditorsComponent },
    { path: 'pages/UI/buttons', component: ButtonsComponent},
    { path: 'pages/UI/general', component: GeneralUiComponent},
    { path: 'pages/UI/icons', component: IconsComponent},
    { path: 'pages/UI/modals', component: ModalsComponent},
    { path: 'pages/UI/sliders', component: SlidersComponent},
    { path: 'pages/UI/timeline', component: TimelineComponent},
    { path: 'pages/calendar', component: CalendarComponent},
    { path: 'pages/charts/chartjs', component: ChartjsComponent},
    { path: 'pages/charts/flot', component: FlotComponent},
    { path: 'pages/charts/inline', component: InlineComponent},
    { path: 'pages/charts/morris', component: MorrisComponent},
    { path: 'pages/examples/404', component: Page404Component},
    { path: 'pages/examples/500', component: Page500Component},
    { path: 'pages/examples/blank', component: BlankComponent},
    { path: 'pages/examples/invoice', component: InvoiceComponent},
    { path: 'pages/examples/lockscreen', component: LockscreenComponent},
    { path: 'pages/examples/login', component: LoginComponent},
    { path: 'pages/examples/pace', component: PaceComponent},
    { path: 'pages/examples/profile', component: ProfileComponent},
    { path: 'pages/examples/register', component: RegisterComponent},
    { path: 'pages/layout/boxed', component: BoxedComponent},
    { path: 'pages/layout/collapsed-sidebar', component: CollapsedSidebarComponent},
    { path: 'pages/layout/fixed', component: FixedComponent},
    { path: 'pages/layout/top-nav', component: TopNavComponent},
    { path: 'pages/mailbox/compose', component: ComposeComponent},
    { path: 'pages/mailbox/mailbox', component: MailboxComponent},
    { path: 'pages/mailbox/read-mail', component: ReadMailComponent},
    { path: 'pages/tables/data', component: DataComponent},
    { path: 'pages/tables/simple', component: SimpleComponent},
    { path: 'pages/widgets', component: WidgetsComponent}

]