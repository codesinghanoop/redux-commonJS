Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=







configureServiceStore;var _redux=require('redux');var _reduxBatchedActions=require('redux-batched-actions');var _reduxThunk=require('redux-thunk');var _reduxThunk2=_interopRequireDefault(_reduxThunk);var _reducers=require('../reducers');var _reducers2=_interopRequireDefault(_reducers);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function configureServiceStore(preloadedState,appReducer,errorHandler){
var baseReducer=(0,_redux.combineReducers)(_extends({},_reducers2.default,appReducer));
return(0,_redux.createStore)(
(0,_reduxBatchedActions.enableBatching)(baseReducer),
preloadedState,
(0,_redux.applyMiddleware)(_reduxThunk2.default,errorHandler));

}