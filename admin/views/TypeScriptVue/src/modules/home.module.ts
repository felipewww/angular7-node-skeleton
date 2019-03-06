import VueModule from "../core/VueModule";

class HomeModule extends VueModule {
    constructor() {
        super('#home-module');
    }

    Vue(){
        console.log('***********************')
        console.log('vuw method from child');
    }
}

new HomeModule();