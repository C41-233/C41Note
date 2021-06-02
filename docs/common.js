(function(global){

let waited = [];

function pushNodeAsync(node){
	let promise = new Promise((resolve, reject) => {
		node.onload = () => resolve();
		node.onerror = e => reject(e);
	});
	waited.push(promise);
	return promise;
}

function pushNode(node){
	document.head.insertBefore(node, document.head.lastElementChild);
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

const RootDirectory = Common.getBaseDirectory();

Common.import = async function(path, deps){
	let src;
	if(path.startsWith('/')){
		src = RootDirectory + path;
	}
	else{
		src = this.getBaseDirectory() + path;
	}
	
	let node;
	//js
	if(src.endsWith(".js")){
		node = document.createElement("script");
		node.src = src;
		node.type = "text/javascript";
	}
	//css
	else if(src.endsWith(".css")){
		node = document.createElement("link");
		node.href = src;
		node.rel = "stylesheet";
		node.type = "text/css";
		//css不需要排队
		return pushNode(node);
	}
	else{
		node = document.createElement("script");
		node.src = src;
	}
	
	return await pushNodeAsync(node, deps);
}

global.$ = function(action){
	let len = waited.length;
	let promise = (async () => {
		for(let i=0; i<len; i++){
			await waited[i];
		}
		await action();
	})();
	waited.push(promise);
	return promise;
}

})(window);

{
	//jquery
	let jq = Common.import("/lib/thirdparty/jquery/jquery.min.js");
	
	//bootstrap
	Common.import("/lib/thirdparty/bootstrap-3.3.7-dist/css/bootstrap.min.css");
	Common.import("/lib/thirdparty/bootstrap-3.3.7-dist/js/bootstrap.min.js", [jq]);
	
	//vue
	let vue = Common.import("/lib/thirdparty/vue/vue.min.js");
	
	//element-ui
	Common.import("/lib/thirdparty/element-ui/index.css");
	Common.import("/lib/thirdparty/element-ui/index.js", [vue]);
	
	Common.import("/lib/array.js");
	Common.import("/lib/url.js");
}
