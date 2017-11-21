Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}


var MAX_WEBSOCKET_FAILS=7;
var MIN_WEBSOCKET_RETRY_TIME=3000;
var MAX_WEBSOCKET_RETRY_TIME=300000;

var Socket=void 0;var

WebSocketClient=function(){
function WebSocketClient(){_classCallCheck(this,WebSocketClient);
this.conn=null;
this.connectionUrl=null;
this.token=null;
this.sequence=1;
this.connectFailCount=0;
this.eventCallback=null;
this.firstConnectCallback=null;
this.reconnectCallback=null;
this.errorCallback=null;
this.closeCallback=null;
this.connectingCallback=null;
this.dispatch=null;
this.getState=null;
this.stop=false;
this.platform='';
}_createClass(WebSocketClient,[{key:'initialize',value:function initialize(

token,dispatch,getState,opts){var _this=this;
var defaults={
forceConnection:true,
connectionUrl:this.connectionUrl,
webSocketConnector:WebSocket};var _Object$assign=


_extends({},defaults,opts),connectionUrl=_Object$assign.connectionUrl,forceConnection=_Object$assign.forceConnection,webSocketConnector=_Object$assign.webSocketConnector,platform=_Object$assign.platform;

if(platform){
this.platform=platform;
}

if(forceConnection){
this.stop=false;
}

return new Promise(function(resolve,reject){
if(_this.conn){
resolve();
return;
}

if(connectionUrl==null){
console.log('websocket must have connection url');
reject('websocket must have connection url');
return;
}

if(!dispatch){
console.log('websocket must have a dispatch');
reject('websocket must have a dispatch');
return;
}

if(_this.connectFailCount===0){
console.log('websocket connecting to '+connectionUrl);
}

Socket=webSocketConnector;
if(_this.connectingCallback){
_this.connectingCallback(dispatch,getState);
}

var regex=/^(?:https?|wss?):\/\/[^/]*/;
var captured=regex.exec(connectionUrl);
var origin=captured[0];
if(platform==='android'){


var split=origin.split(':');
var port=split[2];
if(port==='80'||port==='443'){
origin=split[0]+':'+split[1];
}
}

_this.conn=new Socket(connectionUrl,null,{origin:origin});
_this.connectionUrl=connectionUrl;
_this.token=token;
_this.dispatch=dispatch;
_this.getState=getState;

_this.conn.onopen=function(){
if(token){
_this.sendMessage('authentication_challenge',{token:token});
}

if(_this.connectFailCount>0){
console.log('websocket re-established connection');
if(_this.reconnectCallback){
_this.reconnectCallback(_this.dispatch,_this.getState);
}
}else if(_this.firstConnectCallback){
_this.firstConnectCallback(_this.dispatch,_this.getState);
resolve();
}

_this.connectFailCount=0;
};

_this.conn.onclose=function(){
_this.conn=null;
_this.sequence=1;

if(_this.connectFailCount===0){
console.log('websocket closed');
}

_this.connectFailCount++;

if(_this.closeCallback){
_this.closeCallback(_this.connectFailCount,_this.dispatch,_this.getState);
}

var retryTime=MIN_WEBSOCKET_RETRY_TIME;


if(_this.connectFailCount>MAX_WEBSOCKET_FAILS){
retryTime=MIN_WEBSOCKET_RETRY_TIME*_this.connectFailCount;
if(retryTime>MAX_WEBSOCKET_RETRY_TIME){
retryTime=MAX_WEBSOCKET_RETRY_TIME;
}
}

setTimeout(
function(){
if(_this.stop){
return;
}
_this.initialize(token,dispatch,getState,_extends({},opts,{forceConnection:true}));
},
retryTime);

};

_this.conn.onerror=function(evt){
if(_this.connectFailCount<=1){
console.log('websocket error');
console.log(evt);
}

if(_this.errorCallback){
_this.errorCallback(evt,_this.dispatch,_this.getState);
}
};

_this.conn.onmessage=function(evt){
var msg=JSON.parse(evt.data);
if(msg.seq_reply){
if(msg.error){
console.log(msg);
}
}else if(_this.eventCallback){
_this.eventCallback(msg,_this.dispatch,_this.getState);
}
};
});
}},{key:'setConnectingCallback',value:function setConnectingCallback(

callback){
this.connectingCallback=callback;
}},{key:'setEventCallback',value:function setEventCallback(

callback){
this.eventCallback=callback;
}},{key:'setFirstConnectCallback',value:function setFirstConnectCallback(

callback){
this.firstConnectCallback=callback;
}},{key:'setReconnectCallback',value:function setReconnectCallback(

callback){
this.reconnectCallback=callback;
}},{key:'setErrorCallback',value:function setErrorCallback(

callback){
this.errorCallback=callback;
}},{key:'setCloseCallback',value:function setCloseCallback(

callback){
this.closeCallback=callback;
}},{key:'close',value:function close()

{var stop=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;
this.stop=stop;
this.connectFailCount=0;
this.sequence=1;
if(this.conn&&this.conn.readyState===Socket.OPEN){
this.conn.onclose=function(){};
this.conn.close();
this.conn=null;
console.log('websocket closed');
}
}},{key:'sendMessage',value:function sendMessage(

action,data){
var msg={
action:action,
seq:this.sequence++,
data:data};


if(this.conn&&this.conn.readyState===Socket.OPEN){
this.conn.send(JSON.stringify(msg));
}else if(!this.conn||this.conn.readyState===Socket.CLOSED){
this.conn=null;
this.initialize(this.token,this.dispatch,this.getState,{forceConnection:true,platform:this.platform});
}
}},{key:'userTyping',value:function userTyping(

channelId,parentId){
this.sendMessage('user_typing',{
channel_id:channelId,
parent_id:parentId});

}},{key:'getStatuses',value:function getStatuses()

{
this.sendMessage('get_statuses',null);
}},{key:'getStatusesByIds',value:function getStatusesByIds(

userIds){
this.sendMessage('get_statuses_by_ids',{
user_ids:userIds});

}}]);return WebSocketClient;}();exports.default=


new WebSocketClient();