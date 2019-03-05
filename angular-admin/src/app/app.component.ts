import {Component, Injectable, ViewChild} from '@angular/core';
import * as jQuery from 'jquery'
import {AuthenticationService} from "@app/_services/authentication.service";
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

    loggedIn: boolean = false;

    @ViewChild('pageContent') pageContent;
    @ViewChild('sidebarMenu') sidebarMenu;
    @ViewChild('pageWrapper') pageWrapper;

    constructor(auth: AuthenticationService, private authGuard: AuthGuard) {
      console.log('constructing AppComponent!')
    }

    ngOnInit(){
      console.log('OnInit AppComponent!')
      console.log(this.authGuard);

      this.authGuard.auth.subscribe(ob => {
        console.warn('OB!')
        console.warn(ob);
      });

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
