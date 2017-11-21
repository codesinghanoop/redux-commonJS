Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};


var Constants={
CONFIG_CHANGED:'config_changed',

POST_CHUNK_SIZE:60,
PROFILE_CHUNK_SIZE:100,
CHANNELS_CHUNK_SIZE:50,
SEARCH_TIMEOUT_MILLISECONDS:100,
STATUS_INTERVAL:60000,

MENTION:'mention',

OFFLINE:'offline',
AWAY:'away',
ONLINE:'online',

DEFAULT_CHANNEL:'town-square',
DM_CHANNEL:'D',
GM_CHANNEL:'G',
OPEN_CHANNEL:'O',
PRIVATE_CHANNEL:'P',

POST_DELETED:'DELETED',
SYSTEM_MESSAGE_PREFIX:'system_',

CATEGORY_DIRECT_CHANNEL_SHOW:'direct_channel_show',
CATEGORY_DISPLAY_SETTINGS:'display_settings',
CATEGORY_FAVORITE_CHANNEL:'favorite_channel',
DISPLAY_PREFER_NICKNAME:'nickname_full_name',
DISPLAY_PREFER_FULL_NAME:'full_name',

START_OF_NEW_MESSAGES:'start-of-new-messages',

POST_HEADER_CHANGE:'system_header_change',
POST_PURPOSE_CHANGE:'system_purpose_change',

PUSH_NOTIFY_APPLE_REACT_NATIVE:'apple_rn',
PUSH_NOTIFY_ANDROID_REACT_NATIVE:'android_rn'};


var FileConstants={
AUDIO_TYPES:['mp3','wav','wma','m4a','flac','aac','ogg'],
CODE_TYPES:['as','applescript','osascript','scpt','bash','sh','zsh','clj','boot','cl2','cljc','cljs','cljs.hl','cljscm','cljx','hic','coffee','_coffee','cake','cjsx','cson','iced','cpp','c','cc','h','c++','h++','hpp','cs','csharp','css','d','di','dart','delphi','dpr','dfm','pas','pascal','freepascal','lazarus','lpr','lfm','diff','django','jinja','dockerfile','docker','erl','f90','f95','fsharp','fs','gcode','nc','go','groovy','handlebars','hbs','html.hbs','html.handlebars','hs','hx','java','jsp','js','jsx','json','jl','kt','ktm','kts','less','lisp','lua','mk','mak','md','mkdown','mkd','matlab','m','mm','objc','obj-c','ml','perl','pl','php','php3','php4','php5','php6','ps','ps1','pp','py','gyp','r','ruby','rb','gemspec','podspec','thor','irb','rs','scala','scm','sld','scss','st','sql','swift','tex','txt','vbnet','vb','bas','vbs','v','veo','xml','html','xhtml','rss','atom','xsl','plist','yaml'],
IMAGE_TYPES:['jpg','gif','bmp','png','jpeg'],
PATCH_TYPES:['patch'],
PDF_TYPES:['pdf'],
PRESENTATION_TYPES:['ppt','pptx'],
SPREADSHEET_TYPES:['xlsx','csv'],
VIDEO_TYPES:['mp4','avi','webm','mkv','wmv','mpg','mov','flv'],
WORD_TYPES:['doc','docx']};


var PostsTypes={
ADD_REMOVE:'system_add_remove',
ADD_TO_CHANNEL:'system_add_to_channel',
CHANNEL_DELETED:'system_channel_deleted',
DISPLAYNAME_CHANGE:'system_displayname_change',
EPHEMERAL:'system_ephemeral',
HEADER_CHANGE:'system_header_change',
JOIN_CHANNEL:'system_join_channel',
JOIN_LEAVE:'system_join_leave',
LEAVE_CHANNEL:'system_leave_channel',
PURPOSE_CHANGE:'system_purpose_change',
REMOVE_FROM_CHANNEL:'system_remove_from_channel'};


var Permissions={
PERMISSIONS_ALL:'all',
PERMISSIONS_DELETE_POST_ALL:'all',
PERMISSIONS_DELETE_POST_TEAM_ADMIN:'team_admin',
PERMISSIONS_DELETE_POST_SYSTEM_ADMIN:'system_admin',

TEAM_USER_ROLE:'team_user',
TEAM_ADMIN_ROLE:'team_admin',

CHANNEL_USER_ROLE:'channel_user',
CHANNEL_ADMIN_ROLE:'channel_admin',

SYSTEM_USER_ROLE:'system_user',
SYSTEM_ADMIN_ROLE:'system_admin',

ALLOW_EDIT_POST_ALWAYS:'always',
ALLOW_EDIT_POST_NEVER:'never',
ALLOW_EDIT_POST_TIME_LIMIT:'time_limit',
DEFAULT_POST_EDIT_TIME_LIMIT:300};exports.default=_extends({},



Constants,
FileConstants,
PostsTypes,
Permissions,{
IGNORE_POST_TYPES:[
PostsTypes.ADD_REMOVE,
PostsTypes.ADD_TO_CHANNEL,
PostsTypes.CHANNEL_DELETED,
PostsTypes.JOIN_LEAVE,
PostsTypes.JOIN_CHANNEL,
PostsTypes.LEAVE_CHANNEL,
PostsTypes.REMOVE_FROM_CHANNEL]});