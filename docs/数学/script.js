(function(){

/* bootstrap */
class AsyncQueue{
	
	constructor(){
		this._queue = []
	}
	
	enqueue(action){
		let self = this
		let queue = this._queue
		
		function done(){
			queue.shift()
			if(queue.length > 0){
				queue[0]()
			}
			else if(self._cb){
				let cb = self._cb
				delete self._cb
				cb()
			}
		}
		
		queue.push(() => action(done))
		
		if(queue.length === 1){
			queue[0]()
		}
	}
	
	set callback(value){
		if(this._queue.length === 0){
			value()
		}
		else{
			this._cb = value
		}
	}
	
}

let requireQueue = new AsyncQueue()

function require(src){
	let suffix
	
	let iq = src.lastIndexOf("?")
	let idot = src.lastIndexOf(".")
	if(iq > idot){
		suffix = src.substring(idot, iq)
	}
	else{
		suffix = src.substring(idot)
	}
	
	let node
	if(suffix === ".js"){
		node = document.createElement("script")
		node.setAttribute("src", src)
		node.setAttribute("type", "text/javascript")
		node.setAttribute("type", "text/javascript")
	}
	else if(suffix === ".css"){
		node = document.createElement("link")
		node.setAttribute("href", src)
		node.setAttribute("rel", "stylesheet")
		node.setAttribute("type", "text/css")
	}
	else{
		throw "unexpected ref = " + src
	}
	if(node){
		var head = document.getElementsByTagName("head")[0]
		requireQueue.enqueue(done => {
			head.appendChild(node)
			node.onload = done
		})
	}
}

//css
require("https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css")
require("style.css")

//js
require("https://cdn.staticfile.org/jquery/2.1.1/jquery.min.js")
require("https://cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js")
require("https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML")

requireQueue.callback = function(){
	initMathJax()
}

function initMathJax(){
  window.MathJax.Hub.Config({
    showProcessingMessages: false, //关闭js加载过程信息
    showMathMenu: false,
	messageStyle: "none",
    jax: ["input/TeX", "output/HTML-CSS"],
    tex2jax: {
		//行内公式选择符
		inlineMath: [["$", "$"], ["\\(", "\\)"]], 
		//段内公式选择符
		displayMath: [["$$", "$$"], ["\\[", "\\]"]], 
		//避开某些标签
		skipTags: ["script", "noscript", "style", "textarea", "pre", "code", "a"] 
    },
	MathMenu: {
		showRenderer: false,
		showContext: false,
	},
    "HTML-CSS": {
		//可选字体
		availableFonts: ["STIX", "TeX"], 
		//关闭右击菜单显示
		showMathMenu: false 
    }
  });
}

})();