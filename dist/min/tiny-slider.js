!function(){"use strict";var t,e,n,i,r=window,o=document,a=Object,l=null,s=!0,u=!1,d=" ",c="Element",f="create"+c,v="DOMTokenList",m="__defineGetter__",h="defineProperty",p="class",b="List",g=p+b,y="rel",w=y+b,A="div",E="length",L="contains",x="apply",C="HTML",M=("item "+L+" add remove toggle toString toLocaleString").split(d),T=M[2],S=M[3],N=M[4],k="prototype",P=h in a||m in a[k]||l,D=function(t,e,n,i){a[h]?a[h](t,e,{configurable:u===P?s:!!i,get:n}):t[m](e,n)},W=function(e,n){var i=this,r=[],o={},l=0,c=0,f=function(){if(l>=c)for(;c<l;++c)(function(t){D(i,t,function(){return v(),r[t]},u)})(c)},v=function(){var t,i,a=arguments,u=/\s+/;if(a[E])for(i=0;i<a[E];++i)if(u.test(a[i]))throw t=new SyntaxError('String "'+a[i]+'" '+L+" an invalid character"),t.code=5,t.name="InvalidCharacterError",t;for(r=(""+e[n]).replace(/^\s+|\s+$/g,"").split(u),""===r[0]&&(r=[]),o={},i=0;i<r[E];++i)o[r[i]]=s;l=r[E],f()};return v(),D(i,E,function(){return v(),l}),i[M[6]]=i[M[5]]=function(){return v(),r.join(d)},i.item=function(t){return v(),r[t]},i[L]=function(t){return v(),!!o[t]},i[T]=function(){v[x](i,t=arguments);for(var t,a,u=0,c=t[E];u<c;++u)a=t[u],o[a]||(r.push(a),o[a]=s);l!==r[E]&&(l=r[E]>>>0,e[n]=r.join(d),f())},i[S]=function(){v[x](i,t=arguments);for(var t,a={},u=0,c=[];u<t[E];++u)a[t[u]]=s,delete o[t[u]];for(u=0;u<r[E];++u)a[r[u]]||c.push(r[u]);r=c,l=c[E]>>>0,e[n]=r.join(d),f()},i[N]=function(e,n){return v[x](i,[e]),t!==n?n?(i[T](e),s):(i[S](e),u):o[e]?(i[S](e),u):(i[T](e),s)},function(t,e){if(e)for(var n=0;n<7;++n)e(t,M[n],{enumerable:u})}(i,a[h]),i},O=function(t,e,n){D(t[k],e,function(){var t,i=this,r=m+h+e;if(i[r])return t;if(i[r]=s,u===P){for(var a,l=O.mirror=O.mirror||o[f](A),d=l.childNodes,c=d[E],v=0;v<c;++v)if(d[v]._R===i){a=d[v];break}a||(a=l.appendChild(o[f](A))),t=W.call(a,i,n)}else t=new W(i,n);return D(i,e,function(){return t}),delete i[r],t},s)};if(r[v])e=o[f](A)[g],k=r[v][k],e[T][x](e,M),2>e[E]&&(n=k[T],i=k[S],k[T]=function(){for(var t=0,e=arguments;t<e[E];++t)n.call(this,e[t])},k[S]=function(){for(var t=0,e=arguments;t<e[E];++t)i.call(this,e[t])}),e[N](b,u)&&(k[N]=function(e,n){var i=this;return i[(n=t===n?!i[L](e):n)?T:S](e),!!n});else{if(P)try{D({},"support")}catch(t){P=u}W.polyfill=s,r[v]=W,O(r[c],g,p+"Name"),O(r[C+"Link"+c],w,y),O(r[C+"Anchor"+c],w,y),O(r[C+"Area"+c],w,y)}}(),Date.now||(Date.now=function(){return(new Date).getTime()}),function(){"use strict";for(var t=["webkit","moz"],e=0;e<t.length&&!window.requestAnimationFrame;++e){var n=t[e];window.requestAnimationFrame=window[n+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n+"CancelAnimationFrame"]||window[n+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var i=0;window.requestAnimationFrame=function(t){var e=Date.now(),n=Math.max(i+16,e);return setTimeout(function(){t(i=n)},n-e)},window.cancelAnimationFrame=clearTimeout}}(),function(){"use strict";"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}();var gn=function(t){return t}(window.gn||{});gn.extend=function(){for(var t,e,n,i=arguments[0]||{},r=1,o=arguments.length;r<o;r++)if(null!==(t=arguments[r]))for(e in t)n=t[e],i!==n&&void 0!==n&&(i[e]=n);return i},gn.isInViewport=function(t){var e=t.getBoundingClientRect();return e.bottom>0&&e.right>0&&e.top<document.documentElement.clientHeight&&e.left<document.documentElement.clientWidth},gn.indexOf=function(t,e){for(var n=0;n<t.length;n++)if(t[n]===e)return n;return-1},gn.getSupportedProp=function(t){for(var e=document.documentElement,n=0;n<t.length;n++)if(t[n]in e.style)return t[n]},gn.ready=function(t){if("function"==typeof t)return"complete"===document.readyState?t():void document.addEventListener("DOMContentLoaded",t,!1)},gn.isNodeList=function(t){return"undefined"!=typeof t.item},gn.append=function(t,e){var n,i=gn.isNodeList(t)?t:[t];if("undefined"!=typeof e.nodeType&&1===e.nodeType)for(n=i.length;n--;)i[n].appendChild(e);else if("string"==typeof e)for(n=i.length;n--;)i[n].insertAdjacentHTML("beforeend",e);else if(gn.isNodeList(e)){var r=document.createDocumentFragment();for(n=e.length;n--;)r.insertBefore(e[n],r.firstChild);for(var o=i.length;o--;)i[o].appendChild(r)}},gn.wrap=function(t,e){for(var n=gn.isNodeList(t)?t:[t],i=n.length;i--;){var r=i>0?e.cloneNode(!0):e,o=n[i],a=o.parentNode,l=o.nextSibling;r.appendChild(o),l?a.insertBefore(r,l):a.appendChild(r)}},gn.unwrap=function(t){for(var e=gn.isNodeList(t)?t:[t],n=e.length;n--;){for(var i=e[n],r=i.parentNode;i.firstChild;)r.insertBefore(i.firstChild,i);r.removeChild(i)}};var tinySlider=function(){"use strict";function t(t){function s(){tt.style.width=U*rt+"px";var t=wt?_*U:0,e="marginLeft"===at?ot:0,n=t+e;0!==n&&(tt.style.marginLeft=-n+"px");for(var i=rt;i--;)nt[i].style.width=U-ot+"px",0!==ot&&(nt[i].style[at]=ot+"px")}function u(t){return"boolean"==typeof t.complete?t.complete:"number"==typeof t.naturalWidth?0!==t.naturalWidth:void 0}function d(t){for(var e=t.length;e--;)u(t[e])&&t.splice(e,1);0===t.length?c():setTimeout(function(){d(t)},16)}function c(){for(var t,e=_t(),n=[],i=rt;i--;)i>=e&&i<e+X&&n.push(nt[i].offsetHeight);t=Math.max.apply(null,n),o&&(tt.style[o]=mt/1e3+"s"),tt.style.height=t+"px",Tt=!0,setTimeout(function(){o&&(tt.style[o]="0s"),Tt=!1},mt)}function f(){navigator.msMaxTouchPoints&&(et.style.msScrollSnapPointsX="snapInterval(0%, "+U+")")}function v(){for(var t=$;t--;){var e=Y[t];t<J?e.hasAttribute("hidden")&&e.removeAttribute("hidden"):e.hasAttribute("hidden")||e.setAttribute("hidden","")}}function m(){X=zt(),U=Bt(),J=Ut(),s(),f(),ct&&!t.navContainer&&v(),g(),p()}function h(t){tt.setAttribute("aria-busy","true"),b(t),g(),setTimeout(function(){wt&&y(),p(),Tt=!1,tt.setAttribute("aria-busy","false")},mt*t)}function p(){w(),ct&&A(),st&&!wt&&E(),Lt&&L(),At&&x()}function b(t){o&&(tt.style[o]=mt*t/1e3+"s",Tt=!0)}function g(){var t=et.clientWidth;Ot=-U*Mt,lt&&!wt&&(Ot=Math.max(Ot,-Math.abs(it*U-ot-t))),a?tt.style[a]="translate3d("+Ot+"px, 0, 0)":tt.style.left=Ot+"px"}function y(){var t=Et?Mt<X-_:Mt<=-_,e=Et?Mt>it+_-2*X-1:Mt>=it+_-X;lt&&_&&!Et&&(e=Mt>=it+_-X-1),t&&(Mt+=it),e&&(Mt-=it),o&&(tt.style[o]="0s"),g()}function w(){for(var t=rt;t--;){var e=_t(),n=nt[t];t>=e&&t<e+X?n.hasAttribute("aria-hidden")&&"true"!==n.getAttribute("aria-hidden")||n.setAttribute("aria-hidden","false"):n.hasAttribute("aria-hidden")&&"false"!==n.getAttribute("aria-hidden")||n.setAttribute("aria-hidden","true")}}function A(){var e;if(Ct===-1){var n=Mt<0?Mt+it:Mt>=it?Mt-it:Mt;if(e=t.navContainer?n:Math.floor(n/X),!wt&&!t.navContainer){var i=/^-?[0-9]+$/,r=i.test(it/X);r||Mt!==it-X||(e+=1)}}else e=Ct,Ct=-1;for(var o=J;o--;){var a=Y[o];o===e?"false"===a.getAttribute("aria-selected")&&(a.setAttribute("tabindex","0"),a.setAttribute("aria-selected","true")):"true"===a.getAttribute("aria-selected")&&(a.setAttribute("tabindex","-1"),a.setAttribute("aria-selected","false"))}}function E(){it>X?(0===Mt?(K.disabled=!0,O(K,V)):K.disabled=!1,Mt!==it-X||yt?V.disabled=!1:(V.disabled=!0,O(V,K))):(0!==Mt&&(Mt=0,g()),K.disabled=!0,V.disabled=!0,K.setAttribute("tabindex","-1"),V.setAttribute("tabindex","-1"),K===document.activeElement&&K.blur(),V===document.activeElement&&V.blur())}function L(){if(gn.isInViewport(tt)){var t=tt.querySelectorAll('[aria-hidden="false"] .tiny-lazy');if(0!==t.length)for(var e=0,n=t.length;e<n;e++)t[e].classList.contains("loaded")||(t[e].src=t[e].getAttribute("data-src"),t[e].classList.add("loaded"))}}function x(){for(var t=_t(),e=[],n=rt;n--;)if(n>=t&&n<t+X)for(var i=nt[n].querySelectorAll("img"),r=i.length;r--;)e.push(i[r]);0===e.length?c():d(e)}function C(t){if(!Tt){t=Et?t*X:t;var e=Math.abs(t);Mt=wt?Mt+t:Math.max(0,Math.min(Mt+t,it-X)),h(e)}}function M(){C(-1)}function T(){C(Mt===it-X&&yt?-it+X:1)}function S(e){if(!Tt){for(var n,i=e.target||e.srcElement;gn.indexOf(Y,i)===-1;)i=i.parentNode;Ct=n=Number(i.getAttribute("data-slide"));var r,o;r=t.navContainer?n:n*X,r=wt?r:Math.min(r,it-X),o=Math.abs(r-Mt),Mt=r,h(o)}}function N(){Nt=setInterval(function(){C(bt)},pt),kt.setAttribute("data-action","stop"),kt.innerHTML="<span hidden>Stop Animation</span>"+gt[1],Pt=!0}function k(){clearInterval(Nt),kt.setAttribute("data-action","start"),kt.innerHTML="<span hidden>Stop Animation</span>"+gt[0],Pt=!1}function P(){Pt?k():N()}function D(){Pt&&k()}function W(t){t=t||window.event,t.keyCode===l.LEFT?C(-1):t.keyCode===l.RIGHT&&C(1)}function O(t,e){"object"==typeof t&&"object"==typeof e&&t===document.activeElement&&(t.blur(),e.focus())}function F(t){t=t||window.event;var e=t.keyCode,n=document.activeElement;e!==l.LEFT&&e!==l.UP&&e!==l.HOME&&e!==l.PAGEUP||n!==K&&K.disabled!==!0&&O(n,K),e!==l.RIGHT&&e!==l.DOWN&&e!==l.END&&e!==l.PAGEDOWN||n!==V&&V.disabled!==!0&&O(n,V),e!==l.ENTER&&e!==l.SPACE||(n===V?T():M())}function q(t){t=t||window.event;var e=t.keyCode,n=document.activeElement;e!==l.LEFT&&e!==l.PAGEUP||n.getAttribute("data-slide")>0&&O(n,n.previousElementSibling),e!==l.UP&&e!==l.HOME||0!==n.getAttribute("data-slide")&&O(n,Y[0]),e!==l.RIGHT&&e!==l.PAGEDOWN||n.getAttribute("data-slide")<J-1&&O(n,n.nextElementSibling),e!==l.DOWN&&e!==l.END||n.getAttribute("data-slide")<J-1&&O(n,Y[J-1]),e!==l.ENTER&&e!==l.SPACE||S(t)}function I(){tt.style[o]="0s",tt.style.transform="translate3d(-"+-tt.scrollLeft()+"px,0,0)"}function H(t){var e=t.changedTouches[0];Dt=parseInt(e.clientX),Wt=parseInt(e.clientY)}function j(t){var e=t.changedTouches[0];Ft=parseInt(e.clientX)-Dt,qt=parseInt(e.clientY)-Wt;var r=n(Math.atan2(qt,Ft)),l=i(r,15);if("horizontal"===l&&Tt===!1&&(It=!0),It){o&&(tt.style[o]="0s");var s=wt?-(it+_-X)*U:-(it-X)*U,u=wt?_*U:0;!wt&&lt&&(s=-(it*U-et.clientWidth)),Ot=-Mt*U+Ft,Ot=Math.max(s,Math.min(Ot,u)),a?tt.style[a]="translate3d("+Ot+"px, 0, 0)":tt.style.left=Ot+"px",t.preventDefault()}}function R(t){var e=t.changedTouches[0];if(Ft=parseInt(e.clientX)-Dt,It&&0!==Ft){t.preventDefault(),It=!1,Ot=-Mt*U+Ft;var n,i=wt?-_:0,r=wt?it+_-X:it-X;n=-(Ot/U),n=Ft<0?Math.ceil(n):Math.floor(n),n=Math.max(i,Math.min(n,r)),Mt=n,h(1)}}function z(){clearTimeout(Q),Q=setTimeout(function(){m()},100)}function G(){St||window.requestAnimationFrame(function(){Lt&&L(),St=!1}),St=!0}if(t=gn.extend({container:document.querySelector(".slider"),transform:"horizontal",items:1,gutter:0,gutterPosition:"right",fixedWidth:!1,maxContainerWidth:!1,slideByPage:!1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,arrowKeys:!1,speed:250,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],loop:!0,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,rewind:!1},t||{}),"object"!=typeof t.container||null===t.container)return{init:function(){},destory:function(){}};var B,U,_,X,K,V,Y,$,J,Q,Z=t.transform,tt=t.container,et=document.createElement("div"),nt=tt.children,it=nt.length,rt=nt.length,ot=t.gutter,at="right"===t.gutterPosition?"marginRight":"marginLeft",lt=t.fixedWidth,st=t.controls,ut=t.controlsText,dt=!!t.controlsContainer&&t.controlsContainer,ct=t.nav,ft=!!t.navContainer&&t.navContainer,vt=t.arrowKeys,mt=o?t.speed:0,ht=t.autoplay,pt=t.autoplayTimeout,bt="forward"===t.autoplayDirection?1:-1,gt=t.autoplayText,yt=t.rewind,wt=!(yt||lt&&!t.maxContainerWidth)&&t.loop,At=t.autoHeight,Et=t.slideByPage,Lt=t.lazyload,xt=t.touch,Ct=-1,Mt=0,Tt=!1,St=!1;if(ht)var Nt,kt,Pt=!1;if(xt)var Dt=0,Wt=0,Ot=0,Ft=0,qt=0,It=!1;var Ht=!lt&&t.responsive,jt="object"==typeof Ht&&Object.keys(Ht),Rt=r(Ht),zt=function(){return lt?function(){return Math.max(Math.min(it,Math.floor(et.clientWidth/lt)),1)}:function(){var e,n=document.documentElement.clientWidth;if(void 0!==jt.length&&void 0!==Rt&&jt.length===Rt.length)if(n<jt[0])e=t.items;else if(n>=jt[jt.length-1])e=Rt[Rt.length-1];else for(var i=0;i<jt.length-1;i++)n>=jt[i]&&n<=jt[i+1]&&(e=Rt[i]);else e=t.items;return Math.max(Math.min(it,e),1)}}(),Gt=function(){var e;return e=lt?!!t.maxContainerWidth&&Math.ceil(t.maxContainerWidth/lt):void 0!==Rt.length?Math.max.apply(Math,Rt):t.items,e?Math.min(it,e):e},Bt=function(){return function(){return lt?lt+ot:(et.clientWidth+ot)/X}}(),Ut=function(){return function(){return t.navContainer?it:Math.ceil(it/X)}}(),_t=function(){return function(){return wt?Mt+_:Mt}}();return _=Gt(),{init:function(){tt.classList.add("tiny-content",Z),0===tt.id.length?tt.id=B=e():B=tt.id,et.className="tiny-slider",gn.wrap(tt,et),navigator.msMaxTouchPoints&&(et.classList.add("ms-touch"),et.addEventListener("scroll",I,!1));for(var n=0;n<it;n++)nt[n].id=B+"item"+n;if(wt){for(var i=document.createDocumentFragment(),r=document.createDocumentFragment(),o=_;o--;){var a=nt[o].cloneNode(!0),l=nt[it-1-o].cloneNode(!0);a.id="",l.id="",i.insertBefore(a,i.firstChild),r.appendChild(l)}tt.appendChild(i),tt.insertBefore(r,tt.firstChild),rt=tt.children.length,nt=tt.children}if(ct){if(!t.navContainer){for(var s="",u=0;u<it;u++)s+='<button data-slide="'+u+'" tabindex="-1" aria-selected="false" aria-controls="'+B+"item"+u+'" type="button"></button>';ht&&(s+='<button data-action="stop" type="button"><span hidden>Stop Animation</span>'+gt[0]+"</button>"),s='<div class="tiny-nav" aria-label="Carousel Pagination">'+s+"</div>",gn.append(et,s),ft=et.querySelector(".tiny-nav")}if(Y=ft.querySelectorAll("[data-slide]"),$=Y.length,!ft.hasAttribute("aria-label")){ft.setAttribute("aria-label","Carousel Pagination");for(var d=0;d<$;d++){var c=Y[d];c.setAttribute("tabindex","-1"),c.setAttribute("aria-selected","false"),c.setAttribute("aria-controls",B+"item"+d)}}}if(st&&(t.controlsContainer||(gn.append(et,'<div class="tiny-controls" aria-label="Carousel Navigation"><button data-controls="prev" tabindex="-1" aria-controls="'+B+'" type="button">'+ut[0]+'</button><button data-controls="next" tabindex="0" aria-controls="'+B+'" type="button">'+ut[1]+"</button></div>"),dt=et.querySelector(".tiny-controls")),K=dt.querySelector('[data-controls="prev"]'),V=dt.querySelector('[data-controls="next"]'),dt.hasAttribute("tabindex")||(dt.setAttribute("aria-label","Carousel Navigation"),K.setAttribute("aria-controls",B),V.setAttribute("aria-controls",B),K.setAttribute("tabindex","-1"),V.setAttribute("tabindex","0"))),ht&&(ft||(gn.append(et,'<div class="tiny-nav" aria-label="Carousel Pagination"><button data-action="stop" type="button"><span hidden>Stop Animation</span>'+gt[0]+"</button></div>"),ft=et.querySelector(".tiny-nav")),kt=ft.querySelector("[data-action]")),m(),xt&&(tt.addEventListener("touchstart",H,!1),tt.addEventListener("touchmove",j,!1),tt.addEventListener("touchend",R,!1),tt.addEventListener("touchcancel",R,!1)),st&&(wt||E(),K.addEventListener("click",M,!1),V.addEventListener("click",T,!1),K.addEventListener("keydown",F,!1),V.addEventListener("keydown",F,!1)),ct)for(var f=Y.length;f--;)Y[f].addEventListener("click",S,!1),Y[f].addEventListener("keydown",q,!1);if(ht&&(N(),kt.addEventListener("click",P,!1),st&&(K.addEventListener("click",D,!1),V.addEventListener("click",D,!1)),ct))for(var v=0;v<$;v++)Y[v].addEventListener("click",D,!1);vt&&document.addEventListener("keydown",W,!1),window.addEventListener("resize",z,!1),window.addEventListener("scroll",G,!1)},destory:function(){if(tt.classList.remove("tiny-content"),tt.style.width="",tt.style[o]="",tt.style.transform="",tt.style.marginLeft="",tt.style.left="",gn.unwrap(et),wt)for(var e=_;e--;)nt[0].remove(),nt[nt.length-1].remove();if(void 0!==B){B=null,tt.removeAttribute("id");for(var n=it;n--;)nt[n].removeAttribute("id"),nt[n].removeAttribute("aria-hidden"),nt[n].style.width=""}if(xt&&(tt.removeEventListener("touchstart",H,!1),tt.removeEventListener("touchmove",j,!1),tt.removeEventListener("touchend",R,!1),tt.removeEventListener("touchcancel",R,!1)),st&&(t.controlsContainer?(dt.removeAttribute("aria-label"),K.removeAttribute("aria-controls"),K.removeAttribute("tabindex"),K.removeEventListener("click",M,!1),K.removeEventListener("keydown",F,!1),V.removeAttribute("aria-controls"),V.removeAttribute("tabindex"),V.removeEventListener("click",T,!1),V.removeEventListener("keydown",F,!1)):(dt.remove(),dt=null,K=null,V=null)),ct){if(t.navContainer){ft.removeAttribute("aria-label");for(var i=Y.length;i--;)Y[i].removeAttribute("aria-selected"),Y[i].removeAttribute("aria-controls"),Y[i].removeEventListener("click",S,!1),Y[i].removeEventListener("keydown",q,!1)}else ft.remove(),ft=null;Y=null,$=null}if(ht)if(t.navContainer||null===ft){if(kt.removeEventListener("click",P,!1),kt=null,st&&t.controlsContainer&&(K.removeEventListener("click",D,!1),V.removeEventListener("click",D,!1)),ct&&t.navContainer)for(var r=0;r<$;r++)Y[r].removeEventListener("click",D,!1)}else ft.remove(),ft=null;vt&&document.removeEventListener("keydown",vt,!1),window.removeEventListener("resize",z,!1),window.removeEventListener("scroll",G,!1)}}}function e(){return void 0===window.tinySliderNumber?window.tinySliderNumber=1:window.tinySliderNumber++,"tinySlider"+window.tinySliderNumber}function n(t){return t*(180/Math.PI)}function i(t,e){return Math.abs(90-Math.abs(t))>=90-e?"horizontal":Math.abs(90-Math.abs(t))<=e&&"vertical"}function r(t){if("object"==typeof t){for(var e=[],n=Object.keys(t),i=0,r=n.length;i<r;i++){var o=n[i];e.push(t[o])}return e}return!1}var o=gn.getSupportedProp(["transitionDuration","WebkitTransitionDuration","MozTransitionDuration","OTransitionDuration"]),a=gn.getSupportedProp(["transform","WebkitTransform","MozTransform","OTransform"]),l={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40};return t}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map