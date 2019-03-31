import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {Routes, RouterModule} from '@angular/router';
import {CoreModule} from '@app/core/core.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ModalBasicsComponent} from '@app/modal-basics/modal-basics.component';
import {NgbdTableSortable} from '@app/ngbd-table-sortable/ngbd-table-sortable.component';
// import {Session} from '@app/core/session';

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
      // Session
    ],
})
export class HomeModule {
    constructor() {
    }
}
