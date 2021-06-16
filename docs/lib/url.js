(()=>{
    function parseSeach(search){
        const rst = {};
        if(!search){
            return rst;
        }
        search = search.substring(1);
        const pairs = search.split("&");
        for(let pair of pairs){
            const tokens = pair.split("=", 2);
            const name = tokens[0];
            const value = tokens.length < 2 ? null : tokens[1];

            let list = rst[name];
            if(list === undefined){
                list = rst[name] = [];
            }
            list.push(value);
        }
        return rst;
    }

    function toSearch(array){
        let s = "?";
        let and = false;
        for(let name in array){
            for(let value of array[name]){
                if(and){
                    s += '&';
                }
                and = true;
                s += `${name}=${value}`;
            }
        }
        return s;
    }

    Common.URL = {
        setParameter(name, value){
            let oldSearch = decodeURIComponent(location.search);
            const array = parseSeach(oldSearch);
            array[name] = [value];

            search = toSearch(array);
            if(oldSearch !== search){
                history.pushState(null, 0, location.pathname + search);
            }
        },
        getParameter(name){
            let oldSearch = decodeURIComponent(location.search);
            const array = parseSeach(oldSearch);
            if(array[name]){
                return array[name][0];
            }
            return undefined;
        },
        clearParameters(){
            history.pushState(null, 0, location.pathname);
        }
    };
})();
