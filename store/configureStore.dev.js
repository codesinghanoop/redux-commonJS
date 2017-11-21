Object.defineProperty(exports,"__esModule",{value:true});exports.default=










configureServiceStore;var _redux=require('redux');var _reduxBatchedActions=require('redux-batched-actions');var _remoteReduxDevtools=require('remote-redux-devtools');var _remoteReduxDevtools2=_interopRequireDefault(_remoteReduxDevtools);var _reduxThunk=require('redux-thunk');var _reduxThunk2=_interopRequireDefault(_reduxThunk);var _reducers=require('../reducers');var _reducers2=_interopRequireDefault(_reducers);var _deep_freeze=require('../utils/deep_freeze');var _deep_freeze2=_interopRequireDefault(_deep_freeze);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function configureServiceStore(preloadedState,appReducer,getAppReducer,errorHandler){
var store=(0,_redux.createStore)(
createReducer(_reducers2.default,appReducer),
preloadedState,
(0,_redux.compose)(
(0,_redux.applyMiddleware)(_reduxThunk2.default,errorHandler),
(0,_remoteReduxDevtools2.default)({
name:'Mattermost',
hostname:'localhost',
port:5678})));




if(module.hot){

module.hot.accept(function(){
var nextServiceReducer=require('../reducers').default;
var nextAppReducer=void 0;
if(getAppReducer){
nextAppReducer=getAppReducer();
}
store.replaceReducer(createReducer(nextServiceReducer,nextAppReducer));
});
}

return store;
}

function createReducer(){for(var _len=arguments.length,reducers=Array(_len),_key=0;_key<_len;_key++){reducers[_key]=arguments[_key];}
var baseReducer=(0,_redux.combineReducers)(Object.assign.apply(Object,[{}].concat(reducers)));

return enableFreezing((0,_reduxBatchedActions.enableBatching)(baseReducer));
}

function enableFreezing(reducer){
return function(state,action){
var nextState=reducer(state,action);

if(nextState!==state){
(0,_deep_freeze2.default)(nextState);
}

return nextState;
};
}