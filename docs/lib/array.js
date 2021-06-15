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

Array.sequence = function(from, to){
	let array = [];
	if(typeof(from) === "string" && typeof(to) === "string"){
		from = from.charCodeAt(0);
		to = to.charCodeAt(0);
		for(let i=from; i<=to; i++){
			array.push(String.fromCharCode(i));
		}
	}
	else{
		for(let i=from; i<=to; i++){
			array.push(i);
		}
	}
	return array;
}