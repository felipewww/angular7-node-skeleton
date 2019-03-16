import {Component, Injectable, Output, ViewChild, OnInit} from '@angular/core';
import * as jQuery from 'jquery'
import {AuthGuard} from "@app/guards/auth.guard";
import {AccessModules, Session} from "@app/core/session";

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

  public accessModules: AccessModules;

  constructor(public authGuard: AuthGuard) {

  }

  ngOnInit(){
    this.authGuard.Session.$subject.subscribe((session: Session) => this.loginDataChanged(session));
  }

  jqueryMenu(){
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
      this.accessModules = session.user.accessModules;
      setTimeout(() => {this.jqueryMenu();}, 200)
    }
  }

  toggleSidebar(){
      this.pageWrapper.nativeElement.classList.toggle('toggled');
  }
}
