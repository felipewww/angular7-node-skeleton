import {Component, Injectable, Output, ViewChild, OnInit} from '@angular/core';
import * as jQuery from 'jquery'
import {AuthGuard, Session} from "@app/guards/auth.guard";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.css'
    ]
})

@Injectable()
export class AppComponent implements OnInit{

    @ViewChild('pageContent') pageContent;
    @ViewChild('sidebarMenu') sidebarMenu;
    @ViewChild('pageWrapper') pageWrapper;

    @Output('guard') guard: AuthGuard;

    constructor(public authGuard: AuthGuard) {

    }

    ngOnInit(){

      this.authGuard.Session.$subject.subscribe((session: Session) => this.loginDataChanged(session));

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

    loginDataChanged(session: Session){
      if (session.status) {
        console.log('Logado corretamente!')
        console.log(session);
      }
    }

    toggleSidebar(){
        this.pageWrapper.nativeElement.classList.toggle('toggled');
    }
}
