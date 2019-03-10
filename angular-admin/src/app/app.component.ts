import {Component, Injectable, Output, ViewChild} from '@angular/core';
import * as jQuery from 'jquery'
import {AuthGuard} from "@app/_guards/auth.guard";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.css'
    ]
})

@Injectable()
export class AppComponent {

    @ViewChild('pageContent') pageContent;
    @ViewChild('sidebarMenu') sidebarMenu;
    @ViewChild('pageWrapper') pageWrapper;

    @Output('guard') guard: AuthGuard;

    constructor(public authGuard: AuthGuard) {

    }

    ngOnInit(){

        jQuery(($) => {

            $(".sidebar-dropdown > a").click(function() {
                $(".sidebar-submenu").slideUp(200);
                if (
                    $(this)
                        .parent()
                        .hasClass("active")
                ) {
                    $(".sidebar-dropdown").removeClass("active");
                    $(this)
                        .parent()
                        .removeClass("active");
                } else {
                    $(".sidebar-dropdown").removeClass("active");
                    $(this)
                        .next(".sidebar-submenu")
                        .slideDown(200);
                    $(this)
                        .parent()
                        .addClass("active");
                }
            });

        });
    }

    toggleSidebar(){
        this.pageWrapper.nativeElement.classList.toggle('toggled');
    }
}
