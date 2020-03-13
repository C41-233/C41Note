String.prototype.format = function() {
    let str = this;
    if (!arguments.length){
        return str;
    }
    let args = typeof arguments[0];
    args = ("string" === args || "number" === args) ? arguments : arguments[0];
    for (arg in args){
        str = str.replace(RegExp("\\{" + arg + "\\}", "gi"), args[arg]);
    }
    return str;
};

String.prototype.containsIgnoreCase = function(str){
    return this.toLowerCase().indexOf(str.toLowerCase()) >= 0;
}
