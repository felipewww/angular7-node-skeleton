import {Component, Injectable, Input, OnInit} from '@angular/core';
import {ModalBasicsComponent} from "../../modal-basics/modal-basics.component";
import {Session} from "@app/core/session";

@Component({
    selector: 'app-page',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
  providers: [Session]
})

@Injectable()
export class HomeComponent implements OnInit {

    @Input('content') modal: ModalBasicsComponent;

    constructor(public session: Session) {

    }

    ngOnInit() {

    }
}
