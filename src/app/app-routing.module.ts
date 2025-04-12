import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SsNotFoundComponent } from './ss-not-found/ss-not-found.component';
import { SsLayoutComponent } from './ss-layout/ss-layout.component';
import { SsHomeComponent } from './ss-home/ss-home.component';
import { SsPageSpaceComponent } from './ss-page-space/ss-page-space.component';
import { SsPageAboutComponent } from './ss-page-about/ss-page-about.component';


const routes: Routes = [
    {
      path: '',
      component: SsLayoutComponent,
      children: [
        { path: '', component: SsHomeComponent, pathMatch: 'full' },
        { path: 'espaco', component: SsPageSpaceComponent },
        { path: 'sobre-nos', component: SsPageAboutComponent },
      ],
    },

    { path: '**', component: SsNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


