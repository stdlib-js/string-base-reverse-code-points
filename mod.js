// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e=/[\uDC00-\uDFFF]/,t=/[\uD800-\uDBFF]/;function r(r){var u,a,f,F,n;for(u=r.length,a="",n=0;n<u;n++)if(f=r[n],t.test(f)){if(n===u-1){a=f+a;break}F=r[n+1],e.test(F)?(a=f+F+a,n+=1):a=f+a}else a=f+a;return a}export{r as default};
//# sourceMappingURL=mod.js.map
