import Vue from 'vue';

export default class VueModule {

    public Vue?: Vue;
    protected data: {[key: string]: any} = {};

    constructor(
        public $el: string
    ){

    }
}