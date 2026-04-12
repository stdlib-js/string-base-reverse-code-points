"use strict";var F=function(u,r){return function(){return r||u((r={exports:{}}).exports,r),r.exports}};var v=F(function(o,s){
var n=/[\uDC00-\uDFFF]/,R=/[\uD800-\uDBFF]/;function _(u){var r,e,a,i,t;for(r=u.length,e="",t=0;t<r;t++)if(a=u[t],R.test(a)){if(t===r-1){e=a+e;break}i=u[t+1],n.test(i)?(e=a+i+e,t+=1):e=a+e}else e=a+e;return e}s.exports=_
});var c=v();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
