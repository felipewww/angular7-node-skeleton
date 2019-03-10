import {Subject} from "rxjs";

export class AccessModules {
  moduleName:string;
  name: string;
  href: string;
  icon: string;
  children: Array<AccessModules>
}

export class Session {
  token: string;
  status: string;
  user: {
    id: number
    username: string
    name: string
    lastname: string
    role: string
    rules: {}
    accessModules: AccessModules
    // accessModules: [{
    //   moduleName:string
    //   name: string
    //   href: string
    //   icon: string
    //   children: [{
    //     moduleName:string
    //     name: string
    //     href: string
    //     icon: string
    //     children: [{
    //       moduleName:string
    //       name: string
    //       href: string
    //       icon: string
    //     }]
    //   }]
    // }]
  };

  public $subject: Subject<Session>;

  constructor() {
    this.$subject = new Subject();
    this.$subject.subscribe((value) => {
      this.token = value.token;
      this.status = value.status;
      this.user = value.user;
    })
  }
}
