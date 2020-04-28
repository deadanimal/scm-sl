import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  BsDropdownModule, 
  ProgressbarModule, 
  TooltipModule, 
  BsDatepickerModule,
  ModalModule,
  AccordionModule
} from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as mapbox from 'mapbox-gl';
(mapbox as any).accessToken = environment.mapbox.accessToken

import { AdminRoutes } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ManagementComponent } from './management/management.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ReportComponent } from './report/report.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { MediaMonitoringComponent } from './media-monitoring/media-monitoring.component';
import { SocialAnalysisComponent } from './social-analysis/social-analysis.component';
import { CrisisDetectionComponent } from './crisis-detection/crisis-detection.component';
import { ReputationComponent } from './reputation/reputation.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ManagementComponent,
    AnalyticsComponent,
    ReportComponent,
    ProfileComponent,
    SettingsComponent,
    MediaMonitoringComponent,
    SocialAnalysisComponent,
    CrisisDetectionComponent,
    ReputationComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    RouterModule.forChild(AdminRoutes),
    HttpClientModule,
    LeafletModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule.forRoot()
  ]
})
export class AdminModule { }
