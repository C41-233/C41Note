Common.import("/lib/url.js");

$(function(){
    Common.import("/lib/thirdparty/xml-js/xml-js.min.js");
    Common.import("base/index.vue");
});

$(function(){
    
let defaultAction = Common.URL.getParameter("action");
if(!defaultAction){
    defaultAction = "基本单词";
}

let app = new Vue({
    el: "main",
    data(){
        return {
            defaultAction: defaultAction,
            action: defaultAction
        }
    },
    methods: {
        Select(value){
            Common.URL.clearParameters();
            Common.URL.setParameter("action", value);
            this.action = value;
        }
    }
});

});