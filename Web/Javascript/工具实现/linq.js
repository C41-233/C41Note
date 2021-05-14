(function(){

class Enumerator{
	constructor(it){
		this.it = it;
	}
	next(){
		return this.it.next();
	}
}

class Enumerable{
	constructor(it){
		this[Symbol.iterator] = function(){
			return new Enumerator(it());
		};
	}
}

function define(name, func){
	if(!Enumerable.prototype[name]){
		Enumerable.prototype[name] = func;
	}
	if(!Array.prototype[name]){
		Array.prototype[name] = func;
	}
}

// take
define("take", function(n){
	let self = this;
	return new Enumerable(function*(){
		let i = n;
		for(let e of self){
			if(i > 0){
				yield e;
				i--;
			}
		}
	});
});

// toArray
Array.prototype.toArray = function(){
	return this.slice();
}

define("toArray", function(){
	let array = [];
	for(let e of this){
		array.push(e);
	}
	return array;
});

// select
define("select", function(map){
	let self = this;
	return new Enumerable(function*(){
		for(let e of self){
			yield map(e);
		}
	});
});

// selectArray
define("selectArray", function(map){
	let array = [];
	for(let e of this){
		array.push(map(e));
	}
	return array;
});

// where
define("where", function(pred){
	let self = this;
	return new Enumerable(function*(){
		for(let e of self){
			if(pred(e)){
				yield e;
			}
		}
	});
});

// any
define("any", function(pred){
	for(let e of this){
		if(pred(e)){
			return true;
		}
	}
	return false;
});

// all
define("all", function(pred){
	for(let e of this){
		if(!pred(e)){
			return false;
		}
	}
	return true;
});

// first
function firstInternal(pred){
	for(let e of this){
		if(!pred || pred(e)){
			return e;
		}
	}
	return undefined;
}

Array.prototype.first = function(pred){
	if(!pred){
		if(this.length > 0){
			return this[0];
		}
		return undefined;
	}
	return firstInternal.apply(this, arguments);
}

define("first", firstInternal);

// last
Array.prototype.last = function(pred){
	for(let i=this.length-1; i>=0; i--){
		let e = this[i];
		if(!pred || pred(e)){
			return e;
		}
	}
	return undefined;
}

define("last", function(pred){
	let last = undefined;
	for(let e of this){
		if(!pred || pred(e)){
			last = e;
		}
	}
	return last;
});

// count
function countInternal(pred){
	let count = 0;
	for(let e of this){
		if(!pred || pred(e)){
			count++;
		}
	}
	return count;
}

Array.prototype.count = function(pred){
	if(!pred){
		return this.length;
	}
	return countInternal.apply(this, arguments);
}

define("count", countInternal);

// orderBy
define("orderBy", function(map){
	let array = this.toArray();
	array.sort(function(x, y) {
		if(map){
			x = map(x);
			y = map(y);
		}

		if (x && x.localCompare) {
			return x.localCompare(y);
		}

		if (x > y) {
			return 1;
		}
		if (x < y) {
			return -1;
		}
		return 0;
	});
	return array;
});

})();
