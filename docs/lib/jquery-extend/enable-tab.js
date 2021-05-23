$.prototype.enableTab = function(){
    this.on("keydown", function(e){
        if(e.key !== "Tab"){
            return;
        }
        
        let start = this.selectionStart;
        let end = this.selectionEnd;

        let $this = $(this);
        let value = $this.val();

        $this.val(value.substring(0, start) + "\t" + value.substring(end));
        this.selectionStart = this.selectionEnd = start + 1;

        e.preventDefault();
        return false;
    });
}