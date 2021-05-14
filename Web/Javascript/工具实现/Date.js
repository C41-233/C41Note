Date.prototype.format = function(fmt){
    var o = {
    "M+" : this.getMonth()+1,                 //月份
    "d+" : this.getDate(),                    //日
    "h+" : this.getHours(),                   //小时
    "m+" : this.getMinutes(),                 //分
    "s+" : this.getSeconds(),                 //秒
    "q+" : Math.floor((this.getMonth()+3)/3), //季度
    "S+"  : this.getMilliseconds()             //毫秒
    };

    if(/(y+)/.test(fmt)){
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
        
    for(var k in o){
        if(new RegExp("("+ k +")").test(fmt)){
            let s = o[k].toString();
            if(RegExp.$1.length > 1){
                for(let i=0; i<RegExp.$1.length-s.length; i++){
                    s = "0" + s;
                }
            }
            fmt = fmt.replace(
                RegExp.$1, 
                s
            );  
        }       
    }

    return fmt;
};


Date.prototype.addMonth = function(offset) {
    offset = parseInt(offset);

    let sYear = this.getFullYear();
    let sMonth = this.getMonth() + 1;
    let sDay = this.getDate();

    let eYear = sYear;
    let eMonth = sMonth + offset;
    let eDay = sDay;
    
    while (eMonth > 12) {
        eYear++;
        eMonth -= 12;
    }

    let eDate = new Date(eYear, eMonth - 1, eDay, this.getHours(), this.getMinutes(), this.getSeconds(), this.getMilliseconds());

    while (eDate.getMonth() != eMonth - 1) {
        eDay--;
        eDate = new Date(eYear, eMonth - 1, eDay);
    }

    return eDate;
};