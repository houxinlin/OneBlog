import{i as t}from"./axiso.1289b27a.js";function a(){return t({url:"/api/blog/listDiary",method:"get"})}function r(a){return t({url:"/api/blog/list",method:"get",params:a})}function i(a){return t({url:"/api/blog/detail",method:"get",params:a})}function o(){return t({url:"/api/classify/listClassify",method:"get"})}function e(a){return t({url:"/api/admin/add",method:"post",data:a})}function s(a,r){return t({url:"/api/blog/search",method:"get",params:{q:a,from:r}})}function n(){return t({url:"/api/blog/getConfigs",method:"get"})}export{i as a,a as b,n as c,e as d,r as g,o as l,s};
