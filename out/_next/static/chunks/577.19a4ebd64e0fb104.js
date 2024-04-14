"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[577],{2264:function(e,t,n){n.d(t,{M:function(){return AnimatePresence}});var r=n(959),o=n(4866),i=n(1170),u=n(6917),s=n(5317);let PopChildMeasure=class PopChildMeasure extends r.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}};function PopChild({children:e,isPresent:t}){let n=(0,r.useId)(),o=(0,r.useRef)(null),i=(0,r.useRef)({width:0,height:0,top:0,left:0});return(0,r.useInsertionEffect)(()=>{let{width:e,height:r,top:u,left:s}=i.current;if(t||!o.current||!e||!r)return;o.current.dataset.motionPopId=n;let a=document.createElement("style");return document.head.appendChild(a),a.sheet&&a.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            top: ${u}px !important;
            left: ${s}px !important;
          }
        `),()=>{document.head.removeChild(a)}},[t]),r.createElement(PopChildMeasure,{isPresent:t,childRef:o,sizeRef:i},r.cloneElement(e,{ref:o}))}let PresenceChild=({children:e,initial:t,isPresent:n,onExitComplete:o,custom:i,presenceAffectsLayout:a,mode:l})=>{let c=(0,s.h)(newChildrenMap),f=(0,r.useId)(),d=(0,r.useMemo)(()=>({id:f,initial:t,isPresent:n,custom:i,onExitComplete:e=>{for(let t of(c.set(e,!0),c.values()))if(!t)return;o&&o()},register:e=>(c.set(e,!1),()=>c.delete(e))}),a?void 0:[n]);return(0,r.useMemo)(()=>{c.forEach((e,t)=>c.set(t,!1))},[n]),r.useEffect(()=>{n||c.size||!o||o()},[n]),"popLayout"===l&&(e=r.createElement(PopChild,{isPresent:n},e)),r.createElement(u.O.Provider,{value:d},e)};function newChildrenMap(){return new Map}var a=n(9803),l=n(1941),c=n(8981);let getChildKey=e=>e.key||"",AnimatePresence=({children:e,custom:t,initial:n=!0,onExitComplete:u,exitBeforeEnter:s,presenceAffectsLayout:f=!0,mode:d="sync"})=>{s&&(d="wait");let[m]=(0,o.N)(),p=(0,r.useContext)(a.p).forceRender;p&&(m=p);let h=(0,i.t)(),g=function(e){let t=[];return r.Children.forEach(e,e=>{(0,r.isValidElement)(e)&&t.push(e)}),t}(e),y=g,v=new Set,E=(0,r.useRef)(y),C=(0,r.useRef)(new Map).current,w=(0,r.useRef)(!0);if((0,l.L)(()=>{w.current=!1,function(e,t){e.forEach(e=>{let n=getChildKey(e);t.set(n,e)})}(g,C),E.current=y}),(0,c.z)(()=>{w.current=!0,C.clear(),v.clear()}),w.current)return r.createElement(r.Fragment,null,y.map(e=>r.createElement(PresenceChild,{key:getChildKey(e),isPresent:!0,initial:!!n&&void 0,presenceAffectsLayout:f,mode:d},e)));y=[...y];let M=E.current.map(getChildKey),S=g.map(getChildKey),x=M.length;for(let e=0;e<x;e++){let t=M[e];-1===S.indexOf(t)&&v.add(t)}return"wait"===d&&v.size&&(y=[]),v.forEach(e=>{if(-1!==S.indexOf(e))return;let n=C.get(e);if(!n)return;let o=M.indexOf(e);y.splice(o,0,r.createElement(PresenceChild,{key:getChildKey(n),isPresent:!1,onExitComplete:()=>{C.delete(e),v.delete(e);let t=E.current.findIndex(t=>t.key===e);if(E.current.splice(t,1),!v.size){if(E.current=g,!1===h.current)return;m(),u&&u()}},custom:t,presenceAffectsLayout:f,mode:d},n))}),y=y.map(e=>{let t=e.key;return v.has(t)?e:r.createElement(PresenceChild,{key:getChildKey(e),isPresent:!0,presenceAffectsLayout:f,mode:d},e)}),r.createElement(r.Fragment,null,v.size?y:y.map(e=>(0,r.cloneElement)(e)))}},6577:function(e,t,n){let r,o;n.r(t),n.d(t,{AnimatePresence:function(){return l.M},AnimateSharedLayout:function(){return AnimateSharedLayout},AnimationType:function(){return eF.r},DeprecatedLayoutGroupContext:function(){return p},DragControls:function(){return DragControls},FlatTree:function(){return ez.E},LayoutGroup:function(){return LayoutGroup},LayoutGroupContext:function(){return m.p},LazyMotion:function(){return LazyMotion},MotionConfig:function(){return MotionConfig},MotionConfigContext:function(){return y._},MotionContext:function(){return eI.v},MotionValue:function(){return A.H},PresenceContext:function(){return eL.O},Reorder:function(){return T},SwitchLayoutGroupContext:function(){return eV.g},VisualElement:function(){return em.l},addPointerEvent:function(){return ej.a},addPointerInfo:function(){return eU.s},addScaleCorrector:function(){return ep.B},animate:function(){return eu.j},animateVisualElement:function(){return er.d5},animationControls:function(){return animationControls},animations:function(){return P.s},anticipate:function(){return eO.L},backIn:function(){return eT.G2},backInOut:function(){return eT.XL},backOut:function(){return eT.CG},buildTransform:function(){return eg.P},calcLength:function(){return eG.JO},checkTargetForNewValues:function(){return eo.GJ},circIn:function(){return eP.Z7},circInOut:function(){return eP.X7},circOut:function(){return eP.Bn},clamp:function(){return ey.u},createBox:function(){return eW.dO},createDomMotionComponent:function(){return i.F},createMotionComponent:function(){return ef.F},cubicBezier:function(){return ek._},delay:function(){return ev.g},distance:function(){return eE.T},distance2D:function(){return eE.y},domAnimation:function(){return z},domMax:function(){return _},easeIn:function(){return eR.YQ},easeInOut:function(){return eR.mZ},easeOut:function(){return eR.Vv},filterProps:function(){return v.L},frameData:function(){return ew.frameData},isBrowser:function(){return eH.j},isDragActive:function(){return eN.gD},isMotionComponent:function(){return isMotionComponent},isMotionValue:function(){return V.i},isValidMotionProp:function(){return es.Z},m:function(){return a},makeUseVisualState:function(){return eD.t},mix:function(){return S.C},motion:function(){return i.E},motionValue:function(){return A.B},optimizedAppearDataAttribute:function(){return eS.M},pipe:function(){return eC.z},resolveMotionValue:function(){return F.b},spring:function(){return eb.S},startOptimizedAppearAnimation:function(){return startOptimizedAppearAnimation},sync:function(){return I.Z_},transform:function(){return transform},unwrapMotionComponent:function(){return unwrapMotionComponent},useAnimation:function(){return ei},useAnimationControls:function(){return useAnimationControls},useAnimationFrame:function(){return useAnimationFrame},useCycle:function(){return useCycle},useDeprecatedAnimatedState:function(){return useAnimatedState},useDeprecatedInvertedScale:function(){return useInvertedScale},useDomEvent:function(){return ec.p},useDragControls:function(){return useDragControls},useElementScroll:function(){return useElementScroll},useForceUpdate:function(){return h.N},useInView:function(){return useInView},useInstantLayoutTransition:function(){return useInstantLayoutTransition},useInstantTransition:function(){return useInstantTransition},useIsPresent:function(){return ea.hO},useIsomorphicLayoutEffect:function(){return L.L},useMotionTemplate:function(){return useMotionTemplate},useMotionValue:function(){return useMotionValue},useMotionValueEvent:function(){return useMotionValueEvent},usePresence:function(){return ea.oO},useReducedMotion:function(){return useReducedMotion},useReducedMotionConfig:function(){return useReducedMotionConfig},useResetProjection:function(){return useResetProjection},useScroll:function(){return useScroll},useSpring:function(){return useSpring},useTime:function(){return useTime},useTransform:function(){return useTransform},useUnmountEffect:function(){return eK.z},useVelocity:function(){return useVelocity},useViewportScroll:function(){return useViewportScroll},useVisualElementContext:function(){return eI.B},useWillChange:function(){return useWillChange},wrap:function(){return wrap_wrap}});var i=n(4871),u=n(2995),s=n(9860);let a=(0,u.D)(s.w);var l=n(2264),c=n(9806),f=n(959),d=n(5317),m=n(9803);let p=(0,f.createContext)(null);var h=n(4866);let notify=e=>!e.isLayoutDirty&&e.willUpdate(!1),shouldInheritGroup=e=>!0===e,shouldInheritId=e=>shouldInheritGroup(!0===e)||"id"===e,LayoutGroup=({children:e,id:t,inheritId:n,inherit:r=!0})=>{void 0!==n&&(r=n);let o=(0,f.useContext)(m.p),i=(0,f.useContext)(p),[u,s]=(0,h.N)(),a=(0,f.useRef)(null),l=o.id||i;null===a.current&&(shouldInheritId(r)&&l&&(t=t?l+"-"+t:l),a.current={id:t,group:shouldInheritGroup(r)&&o.group||function(){let e=new Set,t=new WeakMap,dirtyAll=()=>e.forEach(notify);return{add:n=>{e.add(n),t.set(n,n.addEventListener("willUpdate",dirtyAll))},remove:n=>{var r;e.delete(n),null===(r=t.get(n))||void 0===r||r(),t.delete(n),dirtyAll()},dirty:dirtyAll}}()});let c=(0,f.useMemo)(()=>({...a.current,forceRender:u}),[s]);return f.createElement(m.p.Provider,{value:c},e)},g=0,AnimateSharedLayout=({children:e})=>(f.useEffect(()=>{(0,c.K)(!1,"AnimateSharedLayout is deprecated: https://www.framer.com/docs/guide-upgrade/##shared-layout-animations")},[]),f.createElement(LayoutGroup,{id:(0,d.h)(()=>`asl-${g++}`)},e));var y=n(8768),v=n(5962);function MotionConfig({children:e,isValidProp:t,...n}){t&&(0,v.K)(t),(n={...(0,f.useContext)(y._),...n}).isStatic=(0,d.h)(()=>n.isStatic);let r=(0,f.useMemo)(()=>n,[JSON.stringify(n.transition),n.transformPagePoint,n.reducedMotion]);return f.createElement(y._.Provider,{value:r},e)}var E=n(1071),C=n(6863);function LazyMotion({children:e,features:t,strict:n=!1}){let[,r]=(0,f.useState)(!isLazyBundle(t)),o=(0,f.useRef)(void 0);if(!isLazyBundle(t)){let{renderer:e,...n}=t;o.current=e,(0,C.K)(n)}return(0,f.useEffect)(()=>{isLazyBundle(t)&&t().then(({renderer:e,...t})=>{(0,C.K)(t),o.current=e,r(!0)})},[]),f.createElement(E.u.Provider,{value:{renderer:o.current,strict:n}},e)}function isLazyBundle(e){return"function"==typeof e}let w=(0,f.createContext)(null);var M=n(8726),S=n(2031);let x=(0,f.forwardRef)(function({children:e,as:t="ul",axis:n="y",onReorder:r,values:o,...u},s){let a=(0,d.h)(()=>(0,i.E)(t)),l=[],m=(0,f.useRef)(!1);return(0,c.k)(!!o,"Reorder.Group must be provided a values prop"),(0,f.useEffect)(()=>{m.current=!1}),f.createElement(a,{...u,ref:s},f.createElement(w.Provider,{value:{axis:n,registerItem:(e,t)=>{t&&-1===l.findIndex(t=>e===t.value)&&(l.push({value:e,layout:t[n]}),l.sort(compareMin))},updateOrder:(e,t,n)=>{if(m.current)return;let i=function(e,t,n,r){if(!r)return e;let o=e.findIndex(e=>e.value===t);if(-1===o)return e;let i=r>0?1:-1,u=e[o+i];if(!u)return e;let s=e[o],a=u.layout,l=(0,S.C)(a.min,a.max,.5);return 1===i&&s.layout.max+n>l||-1===i&&s.layout.min+n<l?(0,M.uo)(e,o,o+i):e}(l,e,t,n);l!==i&&(m.current=!0,r(i.map(getValue).filter(e=>-1!==o.indexOf(e))))}}},e))});function getValue(e){return e.value}function compareMin(e,t){return e.layout.min-t.layout.min}var A=n(4701);function useMotionValue(e){let t=(0,d.h)(()=>(0,A.B)(e)),{isStatic:n}=(0,f.useContext)(y._);if(n){let[,n]=(0,f.useState)(e);(0,f.useEffect)(()=>t.on("change",n),[])}return t}var b=n(903);let isCustomValueType=e=>"object"==typeof e&&e.mix,getMixer=e=>isCustomValueType(e)?e.mix:void 0;function transform(...e){let t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],o=e[1+n],i=e[2+n],u=e[3+n],s=(0,b.s)(o,i,{mixer:getMixer(i[0]),...u});return t?s(r):s}var I=n(2146),L=n(1941);function useCombineMotionValues(e,t){let n=useMotionValue(t()),updateValue=()=>n.set(t());return updateValue(),(0,L.L)(()=>{let scheduleUpdate=()=>I.Z_.update(updateValue,!1,!0),t=e.map(e=>e.on("change",scheduleUpdate));return()=>{t.forEach(e=>e()),I.qY.update(updateValue)}}),n}function useTransform(e,t,n,r){let o="function"==typeof t?t:transform(t,n,r);return Array.isArray(e)?useListTransform(e,o):useListTransform([e],([e])=>o(e))}function useListTransform(e,t){let n=(0,d.h)(()=>[]);return useCombineMotionValues(e,()=>{n.length=0;let r=e.length;for(let t=0;t<r;t++)n[t]=e[t].get();return t(n)})}var V=n(671);function useDefaultMotionValue(e,t=0){return(0,V.i)(e)?e:useMotionValue(t)}let O=(0,f.forwardRef)(function({children:e,style:t={},value:n,as:r="li",onDrag:o,layout:u=!0,...s},a){let l=(0,d.h)(()=>(0,i.E)(r)),m=(0,f.useContext)(w),p={x:useDefaultMotionValue(t.x),y:useDefaultMotionValue(t.y)},h=useTransform([p.x,p.y],([e,t])=>e||t?1:"unset"),g=(0,f.useRef)(null);(0,c.k)(!!m,"Reorder.Item must be a child of Reorder.Group");let{axis:y,registerItem:v,updateOrder:E}=m;return(0,f.useEffect)(()=>{v(n,g.current)},[m]),f.createElement(l,{drag:y,...s,dragSnapToOrigin:!0,style:{...t,x:p.x,y:p.y,zIndex:h},layout:u,onDrag:(e,t)=>{let{velocity:r}=t;r[y]&&E(n,p[y].get(),r[y]),o&&o(e,t)},onLayoutMeasure:e=>{g.current=e},ref:a},e)}),T={Group:x,Item:O};var P=n(4834),R=n(9306),k=n(6899);let z={renderer:k.b,...P.s,...R.E};var D=n(1859),W=n(3989),B=n(9598);let _={...z,...D.o,...W.U,projectionNodeConstructor:B.u};function useMotionTemplate(e,...t){let n=e.length;return useCombineMotionValues(t.filter(V.i),function(){let r="";for(let o=0;o<n;o++){r+=e[o];let n=t[o];n&&(r+=(0,V.i)(n)?n.get():n)}return r})}var F=n(826),G=n(6515);function useSpring(e,t={}){let{isStatic:n}=(0,f.useContext)(y._),r=(0,f.useRef)(null),o=useMotionValue((0,V.i)(e)?e.get():e),stopAnimation=()=>{r.current&&r.current.stop()};return(0,f.useInsertionEffect)(()=>o.attach((e,i)=>n?i(e):(stopAnimation(),r.current=(0,G.jt)({keyframes:[o.get(),e],velocity:o.getVelocity(),type:"spring",...t,onUpdate:i}),o.get()),stopAnimation),[JSON.stringify(t)]),(0,L.L)(()=>{if((0,V.i)(e))return e.on("change",e=>o.set(parseFloat(e)))},[o]),o}function useVelocity(e){let t=useMotionValue(e.getVelocity());return(0,f.useEffect)(()=>e.on("velocityChange",e=>{t.set(e)}),[e]),t}function resolveElements(e,t){var n;return"string"==typeof e?t?(null!==(n=t[e])&&void 0!==n||(t[e]=document.querySelectorAll(e)),e=t[e]):e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}"function"==typeof SuppressedError&&SuppressedError;let N=new WeakMap;function notifyTarget({target:e,contentRect:t,borderBoxSize:n}){var r;null===(r=N.get(e))||void 0===r||r.forEach(r=>{r({target:e,contentSize:t,get size(){return function(e,t){if(t){let{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,n)}})})}function notifyAll(e){e.forEach(notifyTarget)}let j=new Set,isFunction=e=>"function"==typeof e,progress=(e,t,n)=>t-e==0?1:(n-e)/(t-e),createAxisInfo=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),createScrollInfo=()=>({time:0,x:createAxisInfo(),y:createAxisInfo()}),U={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function updateAxisInfo(e,t,n,r){var o;let i=n[t],{length:u,position:s}=U[t],a=i.current,l=n.time;i.current=e["scroll"+s],i.scrollLength=e["scroll"+u]-e["client"+u],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=progress(0,i.scrollLength,i.current);let c=r-l;i.velocity=c>50?0:(o=i.current-a,c?o*(1e3/c):0)}let noopReturn=e=>e,mix_es_mix=(e,t,n)=>-n*e+n*t+e;function fillOffset(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let o=progress(0,t,r);e.push(mix_es_mix(n,1,o))}}function defaultOffset(e){let t=[0];return fillOffset(t,e-1),t}let isNumber=e=>"number"==typeof e,isEasingList=e=>Array.isArray(e)&&!isNumber(e[0]),wrap=(e,t,n)=>{let r=t-e;return((n-e)%r+r)%r+e},clamp=(e,t,n)=>Math.min(Math.max(n,e),t),H={All:[[0,0],[1,1]]},isString=e=>"string"==typeof e,K={start:0,center:.5,end:1};function resolveEdge(e,t,n=0){let r=0;if(void 0!==K[e]&&(e=K[e]),isString(e)){let t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return isNumber(e)&&(r=t*e),n+r}let Y=[0,0],Z={x:0,y:0},$=new WeakMap,J=new WeakMap,X=new WeakMap,getEventTarget=e=>e===document.documentElement?window:e;function refWarning(e,t){(0,c.K)(!!(!t||t.current),`You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}let createScrollMotionValues=()=>({scrollX:(0,A.B)(0),scrollY:(0,A.B)(0),scrollXProgress:(0,A.B)(0),scrollYProgress:(0,A.B)(0)});function useScroll({container:e,target:t,layoutEffect:n=!0,...i}={}){let u=(0,d.h)(createScrollMotionValues),s=n?L.L:f.useEffect;return s(()=>(refWarning("target",t),refWarning("container",e),function(e,t={}){var{container:n=document.documentElement}=t,i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}(t,["container"]);let u=X.get(n);u||(u=new Set,X.set(n,u));let s=createScrollInfo(),a=function(e,t,n,r={}){var o;let i=r.axis||"y";return{measure:()=>(function(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!=e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight})(e,r.target,n),update:t=>{updateAxisInfo(e,"x",n,t),updateAxisInfo(e,"y",n,t),n.time=t,(r.offset||r.target)&&function(e,t,n){let{offset:r=H.All}=n,{target:o=e,axis:i="y"}=n,u="y"===i?"height":"width",s=o!==e?function(e,t){let n={x:0,y:0},r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r instanceof SVGGraphicsElement&&"getBBox"in r){let{top:e,left:t}=r.getBBox();for(n.x+=t,n.y+=e;r&&"svg"!==r.tagName;)r=r.parentNode}return n}(o,e):Z,a=o===e?{width:e.scrollWidth,height:e.scrollHeight}:{width:o.clientWidth,height:o.clientHeight},l={width:e.clientWidth,height:e.clientHeight};t[i].offset.length=0;let c=!t[i].interpolate,f=r.length;for(let e=0;e<f;e++){let n=function(e,t,n,r){let o=Array.isArray(e)?e:Y,i=0;return isNumber(e)?o=[e,e]:isString(e)&&(o=(e=e.trim()).includes(" ")?e.split(" "):[e,K[e]?e:"0"]),resolveEdge(o[0],n,r)-resolveEdge(o[1],t)}(r[e],l[u],a[u],s[i]);c||n===t[i].interpolatorOffsets[e]||(c=!0),t[i].offset[e]=n}c&&(t[i].interpolate=function(e,t=defaultOffset(e.length),n=noopReturn){let r=e.length,o=r-t.length;return o>0&&fillOffset(t,o),o=>{var i;let u=0;for(;u<r-2&&!(o<t[u+1]);u++);let s=clamp(0,1,progress(t[u],t[u+1],o)),a=(i=u,isEasingList(n)?n[wrap(0,n.length,i)]:n);return s=a(s),mix_es_mix(e[u],e[u+1],s)}}(defaultOffset(f),t[i].offset),t[i].interpolatorOffsets=[...t[i].offset]),t[i].progress=t[i].interpolate(t[i].current)}(e,n,r)},notify:isFunction(t)?()=>t(n):(o=n[i],t.pause(),t.forEachNative((e,{easing:t})=>{var n,r;if(e.updateDuration)t||(e.easing=noopReturn),e.updateDuration(1);else{let o={duration:1e3};t||(o.easing="linear"),null===(r=null===(n=e.effect)||void 0===n?void 0:n.updateTiming)||void 0===r||r.call(n,o)}}),()=>{t.currentTime=o.progress})}}(n,e,s,i);if(u.add(a),!$.has(n)){let listener=()=>{let e=performance.now();for(let e of u)e.measure();for(let t of u)t.update(e);for(let e of u)e.notify()};$.set(n,listener);let e=getEventTarget(n);window.addEventListener("resize",listener,{passive:!0}),n!==document.documentElement&&J.set(n,isFunction(n)?(j.add(n),o||(o=()=>{let e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};j.forEach(e=>e(t))},window.addEventListener("resize",o)),()=>{j.delete(n),!j.size&&o&&(o=void 0)}):function(e,t){r||"undefined"==typeof ResizeObserver||(r=new ResizeObserver(notifyAll));let n=resolveElements(e);return n.forEach(e=>{let n=N.get(e);n||(n=new Set,N.set(e,n)),n.add(t),null==r||r.observe(e)}),()=>{n.forEach(e=>{let n=N.get(e);null==n||n.delete(t),(null==n?void 0:n.size)||null==r||r.unobserve(e)})}}(n,listener)),e.addEventListener("scroll",listener,{passive:!0})}let l=$.get(n),c=requestAnimationFrame(l);return()=>{var t;"function"!=typeof e&&e.stop(),cancelAnimationFrame(c);let r=X.get(n);if(!r||(r.delete(a),r.size))return;let o=$.get(n);$.delete(n),o&&(getEventTarget(n).removeEventListener("scroll",o),null===(t=J.get(n))||void 0===t||t(),window.removeEventListener("resize",o))}}(({x:e,y:t})=>{u.scrollX.set(e.current),u.scrollXProgress.set(e.progress),u.scrollY.set(t.current),u.scrollYProgress.set(t.progress)},{...i,container:(null==e?void 0:e.current)||void 0,target:(null==t?void 0:t.current)||void 0})),[]),u}function useElementScroll(e){return useScroll({container:e})}function useViewportScroll(){return useScroll()}function useAnimationFrame(e){let t=(0,f.useRef)(0),{isStatic:n}=(0,f.useContext)(y._);(0,f.useEffect)(()=>{if(n)return;let provideTimeSinceStart=({timestamp:n,delta:r})=>{t.current||(t.current=n),e(n-t.current,r)};return I.Z_.update(provideTimeSinceStart,!0),()=>I.qY.update(provideTimeSinceStart)},[e])}function useTime(){let e=useMotionValue(0);return useAnimationFrame(t=>e.set(t)),e}var q=n(1848),Q=n(1373),ee=n(6022);let WillChangeMotionValue=class WillChangeMotionValue extends A.H{constructor(){super(...arguments),this.members=[],this.transforms=new Set}add(e){let t;Q.G.has(e)?(this.transforms.add(e),t="transform"):e.startsWith("origin")||(0,q.o)(e)||"willChange"===e||(t=(0,ee.D)(e)),t&&((0,M.y4)(this.members,t),this.update())}remove(e){Q.G.has(e)?(this.transforms.delete(e),this.transforms.size||(0,M.cl)(this.members,"transform")):(0,M.cl)(this.members,(0,ee.D)(e)),this.update()}update(){this.set(this.members.length?this.members.join(", "):"auto")}};function useWillChange(){return(0,d.h)(()=>new WillChangeMotionValue("auto"))}function useMotionValueEvent(e,t,n){(0,f.useInsertionEffect)(()=>e.on(t,n),[e,t,n])}var et=n(5537),en=n(566);function useReducedMotion(){en.O.current||(0,et.A)();let[e]=(0,f.useState)(en.n.current);return e}function useReducedMotionConfig(){let e=useReducedMotion(),{reducedMotion:t}=(0,f.useContext)(y._);return"never"!==t&&("always"===t||e)}var er=n(7719),eo=n(8090);function animationControls(){let e=!1,t=new Set,n={subscribe:e=>(t.add(e),()=>void t.delete(e)),start(n,r){(0,c.k)(e,"controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");let o=[];return t.forEach(e=>{o.push((0,er.d5)(e,n,{transitionOverride:r}))}),Promise.all(o)},set:n=>((0,c.k)(e,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),t.forEach(e=>{(0,eo.gg)(e,n)})),stop(){t.forEach(e=>{(0,er.p_)(e)})},mount:()=>(e=!0,()=>{e=!1,n.stop()})};return n}function useAnimationControls(){let e=(0,d.h)(animationControls);return(0,L.L)(e.mount,[]),e}let ei=useAnimationControls;var eu=n(2554);let wrap_wrap=(e,t,n)=>{let r=t-e;return((n-e)%r+r)%r+e};function useCycle(...e){let t=(0,f.useRef)(0),[n,r]=(0,f.useState)(e[t.current]),o=(0,f.useCallback)(n=>{t.current="number"!=typeof n?wrap_wrap(0,e.length,t.current+1):n,r(e[t.current])},[e.length,...e]);return[n,o]}var es=n(8115),ea=n(6877);let el={any:0,all:1};function useInView(e,{root:t,margin:n,amount:r,once:o=!1}={}){let[i,u]=(0,f.useState)(!1);return(0,f.useEffect)(()=>{if(!e.current||o&&i)return;let s={root:t&&t.current||void 0,margin:n,amount:"some"===r?"any":r};return function(e,t,{root:n,margin:r,amount:o="any"}={}){if("undefined"==typeof IntersectionObserver)return()=>{};let i=resolveElements(e),u=new WeakMap,s=new IntersectionObserver(e=>{e.forEach(e=>{let n=u.get(e.target);if(!!n!==e.isIntersecting){if(e.isIntersecting){let n=t(e);isFunction(n)?u.set(e.target,n):s.unobserve(e.target)}else n&&(n(e),u.delete(e.target))}})},{root:n,rootMargin:r,threshold:"number"==typeof o?o:el[o]});return i.forEach(e=>s.observe(e)),()=>s.disconnect()}(e.current,()=>(u(!0),o?void 0:()=>u(!1)),s)},[t,e,n,o]),i}let DragControls=class DragControls{constructor(){this.componentControls=new Set}subscribe(e){return this.componentControls.add(e),()=>this.componentControls.delete(e)}start(e,t){this.componentControls.forEach(n=>{n.start(e.nativeEvent||e,t)})}};let createDragControls=()=>new DragControls;function useDragControls(){return(0,d.h)(createDragControls)}var ec=n(1394),ef=n(4105),ed=n(966);function isMotionComponent(e){return null!==e&&"object"==typeof e&&ed.a in e}function unwrapMotionComponent(e){if(isMotionComponent(e))return e[ed.a]}var em=n(2740),ep=n(9665);function useInstantLayoutTransition(){return startTransition}function startTransition(e){B.J.current&&(B.J.current.isUpdating=!1,B.J.current.blockUpdate(),e&&e())}var eh=n(7747);function useInstantTransition(){let[e,t]=(0,h.N)();return(0,f.useEffect)(()=>{I.Z_.postRender(()=>I.Z_.postRender(()=>eh.c.current=!1))},[t]),t=>{startTransition(()=>{eh.c.current=!0,e(),t()})}}function useResetProjection(){let e=f.useCallback(()=>{let e=B.J.current;e&&e.resetTree()},[]);return e}var eg=n(6781),ey=n(3604),ev=n(904),eE=n(7576),eC=n(9132),ew=n(3376);let appearStoreId=(e,t)=>`${e}: ${t}`;var eM=n(993),eS=n(6959);let ex=new Map;function handoffOptimizedAppearAnimation(e,t,n,r){let o=appearStoreId(e,Q.G.has(t)?"transform":t),i=ex.get(o);if(!i)return 0;let{animation:u,startTime:s}=i,cancelOptimisedAnimation=()=>{ex.delete(o);try{u.cancel()}catch(e){}};if(null===s)return cancelOptimisedAnimation(),0;{let e=performance.now();return r.update(()=>{n.animation&&(n.animation.currentTime=performance.now()-e)}),r.render(cancelOptimisedAnimation),e-s||0}}var eA=n(2054);function startOptimizedAppearAnimation(e,t,n,r,o){let i=e.dataset[eS.t];if(!i)return;window.HandoffAppearAnimations=handoffOptimizedAppearAnimation;let u=appearStoreId(i,t),s=(0,eM.p)(e,t,[n[0],n[0]],{duration:1e4,ease:"linear"});ex.set(u,{animation:s,startTime:null});let startAnimation=()=>{s.cancel();let i=(0,eM.p)(e,t,n,r);document.timeline&&(i.startTime=document.timeline.currentTime),ex.set(u,{animation:i,startTime:performance.now()}),o&&o(i)};s.ready?s.ready.then(startAnimation).catch(eA.Z):startAnimation()}var eb=n(8896),eI=n(4671),eL=n(6917),eV=n(7244),eO=n(6525),eT=n(413),eP=n(8349),eR=n(9150),ek=n(8657),ez=n(878),eD=n(5335),eW=n(5980);let createObject=()=>({});let StateVisualElement=class StateVisualElement extends em.l{build(){}measureInstanceViewportBox(){return(0,eW.dO)()}resetTransform(){}restoreTransform(){}removeValueFromRenderState(){}renderInstance(){}scrapeMotionValuesFromProps(){return createObject()}getBaseTargetFromProps(){}readValueFromInstance(e,t,n){return n.initialState[t]||0}sortInstanceNodePosition(){return 0}makeTargetAnimatableFromInstance({transition:e,transitionEnd:t,...n}){let r=(0,eo.P$)(n,e||{},this);return(0,eo.GJ)(this,n,r),{transition:e,transitionEnd:t,...n}}};let eB=(0,eD.t)({scrapeMotionValuesFromProps:createObject,createRenderState:createObject});function useAnimatedState(e){let[t,n]=(0,f.useState)(e),r=eB({},!1),o=(0,d.h)(()=>new StateVisualElement({props:{},visualState:r},{initialState:e}));(0,f.useEffect)(()=>(o.mount({}),()=>o.unmount()),[o]),(0,f.useEffect)(()=>{o.setProps({onUpdate:e=>{n({...e})}})},[n,o]);let i=(0,d.h)(()=>e=>(0,er.d5)(o,e));return[t,i]}let invertScale=e=>e>.001?1/e:1e5,e_=!1;function useInvertedScale(e){let t=useMotionValue(1),n=useMotionValue(1),r=(0,eI.B)();(0,c.k)(!!(e||r),"If no scale values are provided, useInvertedScale must be used within a child of another motion component."),(0,c.K)(e_,"useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead."),e_=!0,e?(t=e.scaleX||t,n=e.scaleY||n):r&&(t=r.getValue("scaleX",1),n=r.getValue("scaleY",1));let o=useTransform(t,invertScale),i=useTransform(n,invertScale);return{scaleX:o,scaleY:i}}var eF=n(8286),eG=n(7545),eN=n(6384),ej=n(7251),eU=n(1988),eH=n(5927),eK=n(8981)},4866:function(e,t,n){n.d(t,{N:function(){return useForceUpdate}});var r=n(2146),o=n(959),i=n(1170);function useForceUpdate(){let e=(0,i.t)(),[t,n]=(0,o.useState)(0),u=(0,o.useCallback)(()=>{e.current&&n(t+1)},[t]),s=(0,o.useCallback)(()=>r.Z_.postRender(u),[u]);return[s,t]}},1170:function(e,t,n){n.d(t,{t:function(){return useIsMounted}});var r=n(959),o=n(1941);function useIsMounted(){let e=(0,r.useRef)(!1);return(0,o.L)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}}}]);