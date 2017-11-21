Object.defineProperty(exports,"__esModule",{value:true});


var _redux=require('redux');

var _channels=require('./channels');var _channels2=_interopRequireDefault(_channels);
var _general=require('./general');var _general2=_interopRequireDefault(_general);
var _users=require('./users');var _users2=_interopRequireDefault(_users);
var _teams=require('./teams');var _teams2=_interopRequireDefault(_teams);
var _posts=require('./posts');var _posts2=_interopRequireDefault(_posts);
var _files=require('./files');var _files2=_interopRequireDefault(_files);
var _preferences=require('./preferences');var _preferences2=_interopRequireDefault(_preferences);
var _typing=require('./typing');var _typing2=_interopRequireDefault(_typing);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

(0,_redux.combineReducers)({
general:_general2.default,
users:_users2.default,
teams:_teams2.default,
channels:_channels2.default,
posts:_posts2.default,
files:_files2.default,
preferences:_preferences2.default,
typing:_typing2.default});