!function(r){function t(r,t,e){if(e||(e={}),e.trail||(e.trail="…"),r.length>t){if(r=r.substring(0,t),e.atChar){var n=r.lastIndexOf(e.atChar);-1!=n&&(r=r.substr(0,n))}e.trail&&(r+=e.trail)}return r}function e(r){for(var t="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZ-_abcdefghijklmnopqrstuvwxyz0123456789",n=r||8,a=0;n>a;a++)t+=e.charAt(Math.floor(Math.random()*e.length));return t}if("function"==typeof require){var n=require("underscore.string"),a=require("anymatch");n.anymatch=function(r,t){return a(t,r)},"undefined"!=typeof exports&&"undefined"!=typeof module&&module.exports&&(module.exports=n)}else var n=r.s;n.truncate=t,n.random=e}(Function("return this")());