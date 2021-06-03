Common.import("/lib/url.js");

$(function(){

let defaultAction = Common.URL.getParameter("action");
if(!defaultAction){
    defaultAction = "基本单词";
}

let app = new Vue({
    el: "main",
    data(){
        return {
            defaultAction: defaultAction
        }
    },
    methods: {
        Select(value){
            Common.URL.setParameter("action", value);
        }
    }
});

});