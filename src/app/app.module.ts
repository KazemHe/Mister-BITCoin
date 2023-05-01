import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { ContactIndexComponent } from './views/contact-index/contact-index.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './views/home-page/home-page.component';
import { ContactDetailsComponent } from './views/contact-details/contact-details.component';
import { StatisticsPageComponent } from './views/statistics-page/statistics-page.component';
// import { GoogleChartsModule } from 'angular-google-charts';
import { ChartComponent } from './cmps/chart/chart.component';
import { ContactEditComponent } from './views/contact-edit/contact-edit.component';
import { MovesListComponent } from './cmps/moves-list/moves-list.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { ChartsComponent } from './views/charts/charts.component'
import { NgChartsModule } from 'ng2-charts';

@NgModule({
    declarations: [
        AppComponent,
        ContactIndexComponent,
        ContactListComponent,
        ContactPreviewComponent,
        ContactFilterComponent,
        HomePageComponent,
        ContactDetailsComponent,
        StatisticsPageComponent,
        ChartComponent,
        ContactEditComponent,
        MovesListComponent,
        SignUpComponent,
        TransferFundComponent,
        ChartsComponent
    ],
    imports: [
        // GoogleChartsModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        NgChartsModule,

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
