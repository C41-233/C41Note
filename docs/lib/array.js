Array.prototype.contains = function(e){
	return this.indexOf(e) >= 0;
}

Array.prototype.remove = function(e){
	let i = this.indexOf(e);
	if(i < 0){
		return false;
	}
	this.splice(i, 1);
	return true;
}