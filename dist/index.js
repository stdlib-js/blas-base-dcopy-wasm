"use strict";var d=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var h=d(function(J,f){
var T=require("path").resolve,B=require('@stdlib/fs-read-wasm/dist').sync,V=B(T(__dirname,"..","src","main.wasm"));f.exports=V
});var l=d(function(K,M){
var g=require('@stdlib/assert-is-wasm-memory/dist'),m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=require('@stdlib/utils-inherit/dist'),w=require('@stdlib/wasm-module-wrapper/dist'),z=require('@stdlib/error-tools-fmtprodmsg/dist'),D=h();function u(e){if(!(this instanceof u))return new u(e);if(!g(e))throw new TypeError(z('nullH0',e));return w.call(this,D,e,{env:{memory:e}}),this}j(u,w);m(u.prototype,"main",function(r,s,i,a,t){return this._instance.exports.c_dcopy(r,s,i,a,t),a});m(u.prototype,"ndarray",function(r,s,i,a,t,c,p){return this._instance.exports.c_dcopy_ndarray(r,s,i,a,t,c,p),t});M.exports=u
});var b=d(function(Q,R){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),L=require('@stdlib/utils-inherit/dist'),_=require('@stdlib/strided-base-stride2offset/dist'),P=require('@stdlib/strided-base-read-dataview/dist').ndarray,k=require('@stdlib/wasm-memory/dist'),C=require('@stdlib/wasm-base-arrays2ptrs/dist'),x=require('@stdlib/wasm-base-strided2object/dist'),q=l();function o(){return this instanceof o?(q.call(this,new k({initial:0})),this):new o}L(o,q);E(o.prototype,"main",function(r,s,i,a,t){return this.ndarray(r,s,i,_(r,i),a,t,_(r,t))});E(o.prototype,"ndarray",function(r,s,i,a,t,c,p){var y,v,n;return y=C(this,[x(r,s,i,a),x(r,t,c,p)]),v=y[0],n=y[1],q.prototype.ndarray.call(this,r,v.ptr,v.stride,v.offset,n.ptr,n.stride,n.offset),n.copy&&P(r,this.view,n.stride*n.BYTES_PER_ELEMENT,n.ptr,t,c,p,!0),t});R.exports=o
});var O=d(function(U,A){
var F=b(),W=new F;W.initializeSync();A.exports=W
});var G=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),S=O(),H=l();G(S,"Module",H);module.exports=S;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
