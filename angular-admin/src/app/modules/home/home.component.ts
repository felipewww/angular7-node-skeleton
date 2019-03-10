import {Component, Injectable, Input, OnInit} from '@angular/core';
import {ModalBasicsComponent} from "../../modal-basics/modal-basics.component";

@Component({
    selector: 'app-page',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})

@Injectable()
export class HomeComponent implements OnInit {

    @Input('content') modal: ModalBasicsComponent;

    constructor(){

    }

    ngOnInit() {

    }
}
