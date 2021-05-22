(function(global){

let queue = [];

function enqueue(promise){
	queue.push(promise);
	if(queue.length === 1){
		next(promise);
	}
	
	function next(promise){
		promise(() => move());
	}
	
	function move(){
		queue.shift();
		if(queue.length > 0){
			let node = queue[0];
			next(node);
		}
	}
}

function pushNode(node){
	enqueue(done => {
		node.onload = () => done();
		node.onerror = () => done();
		document.head.insertBefore(node, document.head.lastElementChild);
	});
}

let Common = global.Common = {};

Common.getBaseDirectory = function(){
	let scriptNodes = document.querySelectorAll("script");
	let exePath = scriptNodes[scriptNodes.length - 1].src;
	if(!exePath){
		exePath = location.href;
	}
	let i = exePath.lastIndexOf('/');
	exePath = exePath.substring(0, i + 1);
	return exePath;
}

Common.import = function(path){
	let base = this.getBaseDirectory();
	if(path.startsWith('/')){
		path = path.substring(1);
	}
	
	let src = base + path;
	
	let node;
	//js
	if(src.endsWith(".js")){
		node = document.createElement("script");
		node.src = src;
	}
	//css
	else if(src.endsWith(".css")){
		node = document.createElement("link");
		node.href = src;
		node.rel = "stylesheet";
		node.type = "text/css";
	}
	else{
		node = document.createElement("script");
		node.src = src;
	}
	
	pushNode(node);
}

global.$ = function(action){
	enqueue(done => {
		action();
		done();
	});
}

})(window);


//jquery
Common.import("lib/thirdparty/jquery/jquery.min.js");

//bootstrap
Common.import("lib/thirdparty/bootstrap-3.3.7-dist/css/bootstrap.min.css");
Common.import("lib/thirdparty/bootstrap-3.3.7-dist/js/bootstrap.min.js");

//vue
Common.import("lib/thirdparty/vue/vue.min.js");

//element-ui
Common.import("lib/thirdparty/element-ui/index.css");
Common.import("lib/thirdparty/element-ui/index.js");


Common.import("lib/array.js");
