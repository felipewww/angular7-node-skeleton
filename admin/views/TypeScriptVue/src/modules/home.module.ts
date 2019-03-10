import VueModule from "../core/VueModule";
import Vue from "vue";

class HomeModule extends VueModule {

    constructor() {
        super('#home-module');
        this.getHomeData();
        this.setVue();
    }

    getHomeData(){
        this.data.title = 'Homepage title!';
    }

    setVue(){

        this.data.dataTeste = 'testando!';

        this.Vue = new Vue({
            el: this.$el,
            data: this.data,
            mounted(){
                console.log(this.dataTeste);
                console.log(this.title);
            },
            methods: {
                someMethod(){
                    console.log(this.dataTeste);
                }
            }
        })
    }

}

new HomeModule();

// 4
// https://preview.themeforest.net/item/vuesax-vuejs-admin-dashboard-template/full_screen_preview/23328599?_ga=2.261017613.1418237849.1552139368-1295036265.1549538045

// 4
//https://preview.themeforest.net/item/architectui-vuejs-bootstrap-admin-ui-dashboard-template/full_screen_preview/23392319?_ga=2.261017613.1418237849.1552139368-1295036265.1549538045

//2
// http://preview.themeforest.net/item/cubic-vuejs-admin-template/full_screen_preview/22404654?_ga=2.164945215.1418237849.1552139368-1295036265.1549538045

//2
//https://piaf-vue.coloredstrategies.com/app/ui/alerts

//ANGULAR

//4
// http://preview.themeforest.net/item/lucid-angular-7-admin-template/full_screen_preview/23294743?_ga=2.99087774.1418237849.1552139368-1295036265.1549538045
