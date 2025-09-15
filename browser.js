// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e=/[\uDC00-\uDFFF]/,t=/[\uD800-\uDBFF]/;return function(n){var o,f,i,r,u;for(o=n.length,f="",u=0;u<o;u++)if(i=n[u],t.test(i)){if(u===o-1){f=i+f;break}r=n[u+1],e.test(r)?(f=i+r+f,u+=1):f=i+f}else f=i+f;return f}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).reverseCodePoints=t();
//# sourceMappingURL=browser.js.map
