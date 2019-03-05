import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {Routes, RouterModule} from '@angular/router';
import {CoreModule} from '../../core/core.module';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ModalBasicsComponent} from "../../modal-basics/modal-basics.component";
import {NgbdTableSortable} from "../../ngbd-table-sortable/ngbd-table-sortable.component";

const ROUTES: Routes = [
    { path: '', component: HomeComponent }
];

@NgModule({
    declarations: [
        HomeComponent,
        ModalBasicsComponent,
        NgbdTableSortable
    ],
    imports: [
        RouterModule.forChild(ROUTES),
        CommonModule,
        CoreModule,
        NgbModule
    ],
    entryComponents: [

    ],
    providers: [

    ],
})
export class HomeModule {
    constructor() {
    }
}
