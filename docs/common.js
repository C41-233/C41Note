(function(global){

const Common = global.Common = {};

Common.http = {
	get(url){
		return new Promise((resolve, reject) => {
			$.get(url, function(data){
				resolve(data);
			});
		});
	}
}

Common.vue = function(name, vue){
	let options = Object.assign({
		template: $(`template[name="${name}"]`)[0]
	}, vue);
	return Vue.component(name, options);
}

Common.wait = function(time = 0){
	return new Promise((resolve) => {
		global.setTimeout(resolve, time);
	});
}

Common.getBaseDirectory = function(){
	const scriptNodes = document.querySelectorAll("script");
	let exePath = scriptNodes[scriptNodes.length - 1].src;
	if(!exePath){
		exePath = location.href;
	}
	const i = exePath.lastIndexOf('/');
	exePath = exePath.substring(0, i + 1);
	return exePath;
}

const RootDirectory = Common.getBaseDirectory();

{
	const waited = [];

	function enqueue(name, action){
		const promise = (async () => await action())();
		promise.name = name;
		waited.push(promise);
		return promise;
	}
	
	Common.import = function(path, deps){
		function pushNode(node){
			document.head.insertBefore(node, document.head.lastElementChild);
		}
	
		function pushNodeAsync(node){
			let promise = new Promise((resolve, reject) => {
				node.onload = () => resolve();
				node.onerror = e => reject(e);
			});
			pushNode(node);
			return promise;
		}
		
		let src;
		if(path.startsWith('/')) {
			src = RootDirectory + path;
		}
		else {
			src = this.getBaseDirectory() + path;
		}
	
		return enqueue(src, async () =>{
			if(deps){
				for(let wait of deps){
					await wait;
				}
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
			//vue
			else if(src.endsWith(".vue")){
				node = $(await Common.http.get(src));
				$(document.head).append(node);
				return;
			}
			else{
				node = document.createElement("script");
				node.src = src;
			}
			return await pushNodeAsync(node);
		});
	}
	
	global.$ = async function(action){
		for(let wait of waited){
			await wait;
		}
		return await enqueue("<action>", async () => await action());
	}
}
})(window);

{
	//jquery
	const jq = Common.import("/lib/thirdparty/jquery/jquery.min.js");
	
	//bootstrap
	Common.import("/lib/thirdparty/bootstrap-3.3.7-dist/css/bootstrap.min.css");
	Common.import("/lib/thirdparty/bootstrap-3.3.7-dist/js/bootstrap.min.js", [jq]);
	
	//vue
	const vue = Common.import("/lib/thirdparty/vue/vue.min.js");
	
	//element-ui
	Common.import("/lib/thirdparty/element-ui/index.css");
	Common.import("/lib/thirdparty/element-ui/index.js", [vue]);
	
	Common.import("/lib/array.js");

	Common.import("/lib/style/common.css");
}
