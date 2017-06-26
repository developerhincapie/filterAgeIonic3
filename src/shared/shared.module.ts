import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';


import { AgePipe } from './pipes/agepipe';

@NgModule({
    imports: [
        IonicModule
    ],
    declarations: [
        AgePipe
    ],
    exports: [
        AgePipe
    ]
})
export class SharedModule { }