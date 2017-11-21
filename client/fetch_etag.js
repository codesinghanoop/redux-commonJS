Object.defineProperty(exports,"__esModule",{value:true});


var data={};
var etags={};exports.default=

function(){var url=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{headers:{}};
url=url||options.url;

if(options.method==='GET'||!options.method){
var etag=etags[url];
var cachedResponse=data[''+url+etag];
if(etag){
options.headers['If-None-Match']=etag;
}

return fetch(url,options).
then(function(response){
if(response.status===304){
return cachedResponse.clone();
}

if(response.status===200){
var responseEtag=response.headers.get('Etag');

if(responseEtag){
data[''+url+responseEtag]=response.clone();
etags[url]=responseEtag;
}
}

return response;
});
}


return Reflect.apply(fetch,undefined,[url,options]);
};