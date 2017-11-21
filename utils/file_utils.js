Object.defineProperty(exports,"__esModule",{value:true});exports.






getFormattedFileSize=getFormattedFileSize;exports.

















getFileType=getFileType;exports.
































lookupMimeType=lookupMimeType;var _mimeDb=require('mime-db');var _mimeDb2=_interopRequireDefault(_mimeDb);var _constants=require('../constants');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function getFormattedFileSize(file){var bytes=file.size;var fileSizes=[['TB',1024*1024*1024*1024],['GB',1024*1024*1024],['MB',1024*1024],['KB',1024]];var size=fileSizes.find(function(unitAndMinBytes){var minBytes=unitAndMinBytes[1];return bytes>minBytes;});if(size){return Math.floor(bytes/size[1])+' '+size[0];}return bytes+' B';}function getFileType(file){var fileExt=file.extension.toLowerCase();var fileTypes=['image','code','pdf','video','audio','spreadsheet','word','presentation','patch'];return fileTypes.find(function(fileType){var constForFileTypeExtList=(fileType+'_types').toUpperCase();var fileTypeExts=_constants.Constants[constForFileTypeExtList];return fileTypeExts.indexOf(fileExt)>-1;})||'other';}var extToMime=void 0;function buildExtToMime(){extToMime={};Object.keys(_mimeDb2.default).forEach(function(key){var mime=_mimeDb2.default[key];if(mime.extensions){mime.extensions.forEach(function(ext){extToMime[ext]=key;});}});}function lookupMimeType(filename){
if(!extToMime){
buildExtToMime();
}

var ext=filename.split('.').pop();

return extToMime[ext]||'application/octet-stream';
}