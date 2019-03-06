export default class VueModule {

    constructor($el: string){
        this.__init__();
    }

    __init__(){
        // console.warn("__init__ from super");
        this.Vue();
    }

    Vue(): void {
        throw Error('VueModule class should have a method called Vue()');
    }

    methods: {[key: string]: any} = {};

    /**
     * Adiciona dinamicamente os métodos da classe ao objecto "methods" do Vuejs
     */
    setMethods(){

        const ignore = [
            'constructor',
            'data',
            // 'el',
            'setMethods',
            'computed',
            'beforeCreate',
            'created',
            'beforeMount',
            'mounted',
            'beforeUpdate',
            'updated',
            'activated',
            'deactivated',
            'beforeDestroy',
            'destroyed',
            'errorCaptured',
        ];

        for(let idx in this){
            if (ignore.indexOf(idx) < 0 && typeof this[idx] === 'function') {
                this.methods[idx] = this[idx];
            }
        }
    }
}