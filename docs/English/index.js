$(function(){

let app = new Vue({
    el: "main",
    data(){
        return {
            component: "基本单词"
        }
    },
    watch:{
        component: {
            immediate: true,
            handler(val){
                console.error(val);
            }
        }
    }
});

});