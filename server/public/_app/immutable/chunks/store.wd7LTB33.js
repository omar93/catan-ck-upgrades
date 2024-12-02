import{a6 as E,Q as T,a7 as V,z as m,a8 as C,a9 as Y,aa as j,C as q,ab as N,a3 as B,ac as P,ad as $,ae as S,G as y,F as D,a as z,L as v,af as F,ag as G,ah as J,ai as Q,aj as x,ak as K,a2 as U,J as X,p as Z,h as R,l as ee,c as re,al as O,d as te,a1 as ae,g as ne,x as se}from"./runtime.CqTjfmqV.js";import{b as ie}from"./disclose-version.BV2sXPmg.js";function ue(e){var r=V,n=m;E(null),T(null);try{return e()}finally{E(r),T(n)}}const oe=new Set,I=new Set;function ce(e,r,n,a){function s(t){if(a.capture||p.call(r,t),!t.cancelBubble)return ue(()=>n.call(this,t))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Y(()=>{r.addEventListener(e,s,a)}):r.addEventListener(e,s,a),s}function ve(e,r,n,a,s){var t={capture:a,passive:s},o=ce(e,r,n,t);(r===document.body||r===window||r===document)&&C(()=>{r.removeEventListener(e,o,t)})}function p(e){var A;var r=this,n=r.ownerDocument,a=e.type,s=((A=e.composedPath)==null?void 0:A.call(e))||[],t=s[0]||e.target,o=0,h=e.__root;if(h){var l=s.indexOf(h);if(l!==-1&&(r===document||r===window)){e.__root=r;return}var d=s.indexOf(r);if(d===-1)return;l<=d&&(o=l)}if(t=s[o]||e.target,t!==r){j(e,"currentTarget",{configurable:!0,get(){return t||n}});var L=V,c=m;E(null),T(null);try{for(var i,u=[];t!==null;){var f=t.assignedSlot||t.parentNode||t.host||null;try{var _=t["__"+a];if(_!==void 0&&!t.disabled)if(q(_)){var[M,...W]=_;M.apply(t,[e,...W])}else _.call(t,e)}catch(g){i?u.push(g):i=g}if(e.cancelBubble||f===r||f===null)break;t=f}if(i){for(let g of u)queueMicrotask(()=>{throw g});throw i}}finally{e.__root=r,delete e.currentTarget,E(L),T(c)}}}const fe=["touchstart","touchmove"];function le(e){return fe.includes(e)}function pe(e,r){var n=r==null?"":typeof r=="object"?r+"":r;n!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=n,e.nodeValue=n==null?"":n+"")}function de(e,r){return H(e,r)}function ge(e,r){N(),r.intro=r.intro??!1;const n=r.target,a=R,s=v;try{for(var t=B(n);t&&(t.nodeType!==8||t.data!==P);)t=$(t);if(!t)throw S;y(!0),D(t),z();const o=H(e,{...r,anchor:t});if(v===null||v.nodeType!==8||v.data!==F)throw G(),S;return y(!1),o}catch(o){if(o===S)return r.recover===!1&&J(),N(),Q(n),y(!1),de(e,r);throw o}finally{y(a),D(s)}}const b=new Map;function H(e,{target:r,anchor:n,props:a={},events:s,context:t,intro:o=!0}){N();var h=new Set,l=c=>{for(var i=0;i<c.length;i++){var u=c[i];if(!h.has(u)){h.add(u);var f=le(u);r.addEventListener(u,p,{passive:f});var _=b.get(u);_===void 0?(document.addEventListener(u,p,{passive:f}),b.set(u,1)):b.set(u,_+1)}}};l(x(oe)),I.add(l);var d=void 0,L=K(()=>{var c=n??r.appendChild(U());return X(()=>{if(t){Z({});var i=re;i.c=t}s&&(a.$$events=s),R&&ie(c,null),d=e(c,a)||{},R&&(m.nodes_end=v),t&&ee()}),()=>{var f;for(var i of h){r.removeEventListener(i,p);var u=b.get(i);--u===0?(document.removeEventListener(i,p),b.delete(i)):b.set(i,u)}I.delete(l),k.delete(d),c!==n&&((f=c.parentNode)==null||f.removeChild(c))}});return k.set(d,L),d}let k=new WeakMap;function ye(e){const r=k.get(e);r&&r()}function _e(e,r,n){if(e==null)return r(void 0),O;const a=te(()=>e.subscribe(r,n));return a.unsubscribe?()=>a.unsubscribe():a}let w=!1;function we(e,r,n){const a=n[r]??(n[r]={store:null,source:ae(void 0),unsubscribe:O});if(a.store!==e)if(a.unsubscribe(),a.store=e??null,e==null)a.source.v=void 0,a.unsubscribe=O;else{var s=!0;a.unsubscribe=_e(e,t=>{s?a.source.v=t:se(a.source,t)}),s=!1}return ne(a.source)}function Ee(){const e={};return C(()=>{for(var r in e)e[r].unsubscribe()}),e}function Te(e){var r=w;try{return w=!1,[e(),w]}finally{w=r}}export{pe as a,we as b,Te as c,ve as e,ge as h,de as m,Ee as s,ye as u};