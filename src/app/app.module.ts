import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SsFooterComponent } from './ss-footer/ss-footer.component';
import { SsHomeComponent } from './ss-home/ss-home.component';
import { SsHomeAboutComponent } from './ss-home-about/ss-home-about.component';
import { SsHomeBenefitsComponent } from './ss-home-benefits/ss-home-benefits.component';
import { SsHomeCarrosselComponent } from './ss-home-carrossel/ss-home-carrossel.component';
import { SSHomeCategorysComponent } from './ss-home-categorys/ss-home-categorys.component';
import { SsHomeEventsComponent } from './ss-home-events/ss-home-events.component';
import { SsHomeLocationComponent } from './ss-home-location/ss-home-location.component';
import { SsHomeSpaceComponent } from './ss-home-space/ss-home-space.component';
import { SsLayoutComponent } from './ss-layout/ss-layout.component';
import { SsNavbarComponent } from './ss-navbar/ss-navbar.component';
import { SsNotFoundComponent } from './ss-not-found/ss-not-found.component';
import { SsPageAboutComponent } from './ss-page-about/ss-page-about.component';
import { SsPageSpaceComponent } from './ss-page-space/ss-page-space.component';
import { MkScriptDraggableComponent } from './mk-script-draggable/mk-script-draggable.component';

@NgModule({
  declarations: [
    AppComponent,
    SsFooterComponent,
    SsHomeComponent,
    SsHomeAboutComponent,
    SsHomeBenefitsComponent,
    SsHomeCarrosselComponent,
    SSHomeCategorysComponent,
    SsHomeEventsComponent,
    SsHomeLocationComponent,
    SsHomeSpaceComponent,
    SsLayoutComponent,
    SsNavbarComponent,
    SsNotFoundComponent,
    SsPageAboutComponent,
    SsPageSpaceComponent,
    MkScriptDraggableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
