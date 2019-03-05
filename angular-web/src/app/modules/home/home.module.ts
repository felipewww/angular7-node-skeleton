import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import {Routes, RouterModule} from '@angular/router';
import {CoreModule} from '../../core/core.module';

const ROUTES: Routes = [
    { path: '', component: HomeComponent }
];

@NgModule({
    declarations: [

    ],
    imports: [
        RouterModule.forChild(ROUTES),
        CoreModule
    ],
})
export class HomeModule {
    constructor() {
    }
}
