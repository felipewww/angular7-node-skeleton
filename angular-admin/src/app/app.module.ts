import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbDatepickerModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';

import { HeaderComponent } from './default/header/header.component';
import { MenuComponent } from './default/menu/menu.component';
import {FormsModule} from "@angular/forms";
import {LoginModule} from "@app/modules/login/login.module";
import {CoreModule} from "@app/core/core.module";
import {HomeComponent} from "@app/modules/home/home.component";
import {ProductsService} from "@app/services/products.service";
import { HttpClientModule } from "@angular/common/http";
import {TokenGuard, Session} from "@app/guards/auth.guard";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MenuComponent,
        HomeComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        NgbDatepickerModule,
        BrowserAnimationsModule,
        LoginModule,
        HttpClientModule,
        CoreModule.forRoot()
    ],
    exports: [
        NgbModule,
        NgbDatepickerModule,
        FormsModule
    ],
    providers: [
      // LogginStatus,
      TokenGuard,
      Session,
      ProductsService,
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
