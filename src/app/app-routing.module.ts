import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './views/home-page/home-page.component';
import { ContactDetailsComponent } from './views/contact-details/contact-details.component';
import { StatisticsPageComponent } from './views/statistics-page/statistics-page.component';
import { ContactIndexComponent } from './views/contact-index/contact-index.component';
import { contactResolver } from './services/contact.resolver';
import { authGuard } from './guards/auth-guard';


// import { GoogleChartsModule } from 'angular-google-charts';
// import { ChartComponent } from './cmps/chart/chart.component';
import { ContactEditComponent } from './views/contact-edit/contact-edit.component'
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { ChartsComponent } from './views/charts/charts.component';

const routes: Routes = [
  {
    path: 'contact/:id',
    component: ContactDetailsComponent,
    resolve: { contact: contactResolver },
    canActivate: [authGuard]
  },

  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  {
    path: 'Contacts', component: ContactIndexComponent, children: [
      { path: 'edit/:id', component: ContactEditComponent, resolve: { contact: contactResolver } },
      { path: 'edit', component: ContactEditComponent },
    ]

  },

  {
    path: 'Home', component: HomePageComponent,
    canActivate: [authGuard]
  },

  { path: 'signup', component: SignUpComponent, },

  { path: 'Statistic', component: ChartsComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


