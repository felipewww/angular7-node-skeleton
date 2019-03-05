import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
})
export class CoreModule {

    constructor() {

    }

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
        };
    }
}
