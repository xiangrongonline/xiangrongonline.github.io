function _createForOfIteratorHelper(t,e){var r=typeof Symbol!=="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=_unsupportedIterableToArray(t))||e&&t&&typeof t.length==="number"){if(r)t=r;var n=0;var i=function t(){};return{s:i,n:function e(){if(n>=t.length)return{done:true};return{done:false,value:t[n++]}},e:function t(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o=true,a=false,u;return{s:function e(){r=r.call(t)},n:function t(){var e=r.next();o=e.done;return e},e:function t(e){a=true;u=e},f:function t(){try{if(!o&&r.return!=null)r.return()}finally{if(a)throw u}}}}function _unsupportedIterableToArray(t,e){if(!t)return;if(typeof t==="string")return _arrayLikeToArray(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor)r=t.constructor.name;if(r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(t,e)}function _arrayLikeToArray(t,e){if(e==null||e>t.length)e=t.length;for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var searcher={init:function t(e){var r=this;this.composition=false;window.addEventListener("load",(function(){r.input=document.getElementsByClassName("search-bar")[0];r.timeline=document.getElementsByClassName("timeline");r.input.addEventListener("input",(function(){return r.composition||r.update()}));r.input.addEventListener("compositionstart",(function(){return r.composition=true}));r.input.addEventListener("compositionend",(function(){r.update();r.composition=false}));fetch(e).then((function(t){return t.json()})).then((function(t){r.data=t}))}))},rstr:function t(e){if(!e)return"";return e.toLowerCase().replace(/\s+/gm,"")},match:function t(e,r){return e.indexOf(r)!=-1},update:function t(){var e=this;var r=[],n=this.rstr(this.input.value);if(n)r=this.data.filter((function(t){return e.match(t.odata,n)})).map((function(t){return t.path}));else r=this.data.map((function(t){return t.path}));var i=_createForOfIteratorHelper(this.timeline),o;try{for(i.s();!(o=i.n()).done;){var a=o.value;if(r.indexOf(a.getAttribute("path"))==-1){a.style.opacity=0;a.style.pointerEvents="none";a.style.marginTop=-a.offsetHeight-30+"px"}else{a.style.opacity=1;a.style.pointerEvents="";a.style.marginTop=""}}}catch(t){i.e(t)}finally{i.f()}}};