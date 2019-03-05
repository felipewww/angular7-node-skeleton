import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MenuComponent} from '../menu/menu.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: [
        './header.component.scss',
        '../../default/assets/radar-notify/radar-notify.scss',
    ]
})
export class HeaderComponent implements OnInit {

    @Input('main') main;
    // @Input('color') color;

    constructor() { }

    ngOnInit() {
        // if ( this.color ) {
        // }
        // console.log("COLOR");
        // console.log(this.color);
    }

    menuAction($btn): void {
        // console.log(this.main);
        // console.log(this.menu);
        if ( !this.main.classList.contains('menu-hidden') ) {
            this.main.classList.remove('menu-showing');
            this.main.classList.add('menu-hidden');
            $btn.classList.remove('is-active');
        } else {
            $btn.classList.add('is-active');
            this.main.classList.remove('menu-hidden');
            this.main.classList.add('menu-showing');
        }
    }
}
