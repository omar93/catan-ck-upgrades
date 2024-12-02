var Dt=Array.isArray,Ot=Array.from,It=Object.defineProperty,_n=Object.getOwnPropertyDescriptor,$n=Object.getOwnPropertyDescriptors,kt=Object.prototype,Nt=Array.prototype,Zn=Object.getPrototypeOf;const Ct=()=>{};function bt(n){return n()}function zn(n){for(var t=0;t<n.length;t++)n[t]()}const y=2,dn=4,Y=8,en=16,T=32,Z=64,J=128,x=256,V=512,h=1024,R=2048,j=4096,k=8192,C=16384,Wn=32768,En=65536,Pt=1<<17,Xn=1<<19,yn=1<<20,cn=Symbol("$state"),Ft=Symbol("legacy props"),qt=Symbol("");function wn(n){return n===this.v}function Jn(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function Tn(n){return!Jn(n,this.v)}function Qn(n){throw new Error("effect_in_teardown")}function nt(){throw new Error("effect_in_unowned_derived")}function tt(n){throw new Error("effect_orphan")}function rt(){throw new Error("effect_update_depth_exceeded")}function Lt(){throw new Error("hydration_failed")}function Mt(n){throw new Error("props_invalid_value")}function Yt(){throw new Error("state_descriptors_fixed")}function jt(){throw new Error("state_prototype_fixed")}function et(){throw new Error("state_unsafe_local_read")}function st(){throw new Error("state_unsafe_mutation")}let z=!1;function Ht(){z=!0}function sn(n){return{f:0,v:n,reactions:null,equals:wn,version:0}}function Bt(n){return mn(sn(n))}function lt(n,t=!1){var e;const r=sn(n);return t||(r.equals=Tn),z&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function Ut(n,t=!1){return mn(lt(n,t))}function mn(n){return u!==null&&u.f&y&&(w===null?wt([n]):w.push(n)),n}function Vt(n,t){return u!==null&&on()&&u.f&(y|en)&&(w===null||!w.includes(n))&&st(),at(n,t)}function at(n,t){return n.equals(t)||(n.v=t,n.version=Hn(),An(n,R),on()&&o!==null&&o.f&h&&!(o.f&T)&&(v!==null&&v.includes(n)?(m(o,R),X(o)):g===null?Tt([n]):g.push(n))),t}function An(n,t){var r=n.reactions;if(r!==null)for(var e=on(),s=r.length,l=0;l<s;l++){var a=r[l],i=a.f;i&R||!e&&a===o||(m(a,t),i&(h|x)&&(i&y?An(a,j):X(a)))}}const Gt=1,Kt=2,$t=16,Zt=1,zt=2,Wt=4,Xt=8,Jt=16,Qt=1,nr=2,ot="[",ut="[!",it="]",gn={},tr=Symbol();function Rn(n){console.warn("hydration_mismatch")}let N=!1;function rr(n){N=n}let A;function q(n){if(n===null)throw Rn(),gn;return A=n}function er(){return q(b(A))}function sr(n){if(N){if(b(A)!==null)throw Rn(),gn;A=n}}function lr(){for(var n=0,t=A;;){if(t.nodeType===8){var r=t.data;if(r===it){if(n===0)return t;n-=1}else(r===ot||r===ut)&&(n+=1)}var e=b(t);t.remove(),t=e}}var vn,Sn,xn;function ar(){if(vn===void 0){vn=window;var n=Element.prototype,t=Node.prototype;Sn=_n(t,"firstChild").get,xn=_n(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function Q(n=""){return document.createTextNode(n)}function nn(n){return Sn.call(n)}function b(n){return xn.call(n)}function or(n,t){if(!N)return nn(n);var r=nn(A);if(r===null)r=A.appendChild(Q());else if(t&&r.nodeType!==3){var e=Q();return r==null||r.before(e),q(e),e}return q(r),r}function ur(n,t){if(!N){var r=nn(n);return r instanceof Comment&&r.data===""?b(r):r}return A}function ir(n,t=1,r=!1){let e=N?A:n;for(var s;t--;)s=e,e=b(e);if(!N)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var a=Q();return e===null?s==null||s.after(a):e.before(a),q(a),a}return q(e),e}function fr(n){n.textContent=""}function ft(n){var t=y|R;o===null?t|=x:o.f|=yn;var r=u!==null&&u.f&y?u:null;const e={children:null,ctx:f,deps:null,equals:wn,f:t,fn:n,reactions:null,v:null,version:0,parent:r??o};return r!==null&&(r.children??(r.children=[])).push(e),e}function _r(n){const t=ft(n);return t.equals=Tn,t}function Dn(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var e=t[r];e.f&y?ln(e):F(e)}}}function _t(n){for(var t=n.parent;t!==null;){if(!(t.f&y))return t;t=t.parent}return null}function On(n){var t,r=o;$(_t(n));try{Dn(n),t=Bn(n)}finally{$(r)}return t}function In(n){var t=On(n),r=(D||n.f&x)&&n.deps!==null?j:h;m(n,r),n.equals(t)||(n.v=t,n.version=Hn())}function ln(n){Dn(n),M(n,0),m(n,C),n.v=n.children=n.deps=n.ctx=n.reactions=null}function kn(n){o===null&&u===null&&tt(),u!==null&&u.f&x&&nt(),an&&Qn()}function ct(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function P(n,t,r,e=!0){var s=(n&Z)!==0,l=o,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|R,first:null,fn:t,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=O;try{pn(!0),W(a),a.f|=Wn}catch(_){throw F(a),_}finally{pn(i)}}else t!==null&&X(a);var p=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&yn)===0;if(!p&&!s&&e&&(l!==null&&ct(a,l),u!==null&&u.f&y)){var d=u;(d.children??(d.children=[])).push(a)}return a}function cr(n){const t=P(Y,null,!1);return m(t,h),t.teardown=n,t}function vr(n){kn();var t=o!==null&&(o.f&T)!==0&&f!==null&&!f.m;if(t){var r=f;(r.e??(r.e=[])).push({fn:n,effect:o,reaction:u})}else{var e=Nn(n);return e}}function pr(n){return kn(),vt(n)}function hr(n){const t=P(Z,n,!0);return()=>{F(t)}}function Nn(n){return P(dn,n,!1)}function vt(n){return P(Y,n,!0)}function dr(n){return pt(n)}function pt(n,t=0){return P(Y|en|t,n,!0)}function Er(n,t=!0){return P(Y|T,n,!0,t)}function Cn(n){var t=n.teardown;if(t!==null){const r=an,e=u;hn(!0),K(null);try{t.call(null)}finally{hn(r),K(e)}}}function bn(n){var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)ln(t[r])}}function Pn(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;F(r,t),r=e}}function ht(n){for(var t=n.first;t!==null;){var r=t.next;t.f&T||F(t),t=r}}function F(n,t=!0){var r=!1;if((t||n.f&Xn)&&n.nodes_start!==null){for(var e=n.nodes_start,s=n.nodes_end;e!==null;){var l=e===s?null:b(e);e.remove(),e=l}r=!0}Pn(n,t&&!r),bn(n),M(n,0),m(n,C);var a=n.transitions;if(a!==null)for(const p of a)p.stop();Cn(n);var i=n.parent;i!==null&&i.first!==null&&Fn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=null}function Fn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function yr(n,t){var r=[];qn(n,r,!0),dt(r,()=>{F(n),t&&t()})}function dt(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var s of n)s.out(e)}else t()}function qn(n,t,r){if(!(n.f&k)){if(n.f^=k,n.transitions!==null)for(const a of n.transitions)(a.is_global||r)&&t.push(a);for(var e=n.first;e!==null;){var s=e.next,l=(e.f&En)!==0||(e.f&T)!==0;qn(e,t,l?r:!1),e=s}}}function wr(n){Ln(n,!0)}function Ln(n,t){if(n.f&k){H(n)&&W(n),n.f^=k;for(var r=n.first;r!==null;){var e=r.next,s=(r.f&En)!==0||(r.f&T)!==0;Ln(r,s?t:!1),r=e}if(n.transitions!==null)for(const l of n.transitions)(l.is_global||t)&&l.in()}}let G=!1,tn=[];function Mn(){G=!1;const n=tn.slice();tn=[],zn(n)}function Tr(n){G||(G=!0,queueMicrotask(Mn)),tn.push(n)}function Et(){G&&Mn()}const Yn=0,yt=1;let B=!1,U=Yn,L=!1,O=!1,an=!1;function pn(n){O=n}function hn(n){an=n}let S=[],I=0;let u=null;function K(n){u=n}let o=null;function $(n){o=n}let w=null;function wt(n){w=n}let v=null,E=0,g=null;function Tt(n){g=n}let jn=0,D=!1,f=null;function Hn(){return++jn}function on(){return!z||f!==null&&f.l===null}function H(n){var a,i;var t=n.f;if(t&R)return!0;if(t&j){var r=n.deps,e=(t&x)!==0;if(r!==null){var s;if(t&V){for(s=0;s<r.length;s++)((a=r[s]).reactions??(a.reactions=[])).push(n);n.f^=V}for(s=0;s<r.length;s++){var l=r[s];if(H(l)&&In(l),e&&o!==null&&!D&&!((i=l==null?void 0:l.reactions)!=null&&i.includes(n))&&(l.reactions??(l.reactions=[])).push(n),l.version>n.version)return!0}}e||m(n,h)}return!1}function mt(n,t){for(var r=t;r!==null;){if(r.f&J)try{r.fn(n);return}catch{r.f^=J}r=r.parent}throw B=!1,n}function At(n){return(n.f&C)===0&&(n.parent===null||(n.parent.f&J)===0)}function un(n,t,r,e){if(B){if(r===null&&(B=!1),At(t))throw n;return}r!==null&&(B=!0);{mt(n,t);return}}function Bn(n){var fn;var t=v,r=E,e=g,s=u,l=D,a=w,i=f,p=n.f;v=null,E=0,g=null,u=p&(T|Z)?null:n,D=!O&&(p&x)!==0,w=null,f=n.ctx;try{var d=(0,n.fn)(),_=n.deps;if(v!==null){var c;if(M(n,E),_!==null&&E>0)for(_.length=E+v.length,c=0;c<v.length;c++)_[E+c]=v[c];else n.deps=_=v;if(!D)for(c=E;c<_.length;c++)((fn=_[c]).reactions??(fn.reactions=[])).push(n)}else _!==null&&E<_.length&&(M(n,E),_.length=E);return d}finally{v=t,E=r,g=e,u=s,D=l,w=a,f=i}}function gt(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[e]=r[s],r.pop())}}r===null&&t.f&y&&(v===null||!v.includes(t))&&(m(t,j),t.f&(x|V)||(t.f^=V),M(t,0))}function M(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)gt(n,r[e])}function W(n){var t=n.f;if(!(t&C)){m(n,h);var r=o,e=f;o=n;try{t&en?ht(n):Pn(n),bn(n),Cn(n);var s=Bn(n);n.teardown=typeof s=="function"?s:null,n.version=jn}catch(l){un(l,n,r,e||n.ctx)}finally{o=r}}}function Un(){I>1e3&&(I=0,rt()),I++}function Vn(n){var t=n.length;if(t!==0){Un();var r=O;O=!0;try{for(var e=0;e<t;e++){var s=n[e];s.f&h||(s.f^=h);var l=[];Gn(s,l),Rt(l)}}finally{O=r}}}function Rt(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];if(!(e.f&(C|k)))try{H(e)&&(W(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Fn(e):e.fn=null))}catch(s){un(s,e,null,e.ctx)}}}function St(){if(L=!1,I>1001)return;const n=S;S=[],Vn(n),L||(I=0)}function X(n){U===Yn&&(L||(L=!0,queueMicrotask(St)));for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&(Z|T)){if(!(r&h))return;t.f^=h}}S.push(t)}function Gn(n,t){var r=n.first,e=[];n:for(;r!==null;){var s=r.f,l=(s&T)!==0,a=l&&(s&h)!==0,i=r.next;if(!a&&!(s&k))if(s&Y){if(l)r.f^=h;else try{H(r)&&W(r)}catch(c){un(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else s&dn&&e.push(r);if(i===null){let c=r.parent;for(;c!==null;){if(n===c)break n;var d=c.next;if(d!==null){r=d;continue n}c=c.parent}}r=i}for(var _=0;_<e.length;_++)p=e[_],t.push(p),Gn(p,t)}function Kn(n){var t=U,r=S;try{Un();const s=[];U=yt,S=s,L=!1,Vn(r);var e=n==null?void 0:n();return Et(),(S.length>0||s.length>0)&&Kn(),I=0,e}finally{U=t,S=r}}async function mr(){await Promise.resolve(),Kn()}function Ar(n){var _;var t=n.f,r=(t&y)!==0;if(r&&t&C){var e=On(n);return ln(n),e}if(u!==null){w!==null&&w.includes(n)&&et();var s=u.deps;v===null&&s!==null&&s[E]===n?E++:v===null?v=[n]:v.push(n),g!==null&&o!==null&&o.f&h&&!(o.f&T)&&g.includes(n)&&(m(o,R),X(o))}else if(r&&n.deps===null)for(var l=n,a=l.parent,i=l;a!==null;)if(a.f&y){var p=a;i=p,a=p.parent}else{var d=a;(_=d.deriveds)!=null&&_.includes(i)||(d.deriveds??(d.deriveds=[])).push(i);break}return r&&(l=n,H(l)&&In(l)),n.v}function gr(n){const t=u;try{return u=null,n()}finally{u=t}}const xt=~(R|j|h);function m(n,t){n.f=n.f&xt|t}function Rr(n,t=!1,r){f={p:f,c:null,e:null,m:!1,s:n,x:null,l:null},z&&!t&&(f.l={s:null,u:null,r1:[],r2:sn(!1)})}function Sr(n){const t=f;if(t!==null){const a=t.e;if(a!==null){var r=o,e=u;t.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];$(l.effect),K(l.reaction),Nn(l.fn)}}finally{$(r),K(e)}}f=t.p,t.m=!0}return{}}function xr(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(cn in n)rn(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&cn in r&&rn(r)}}}function rn(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{rn(n[e],t)}catch{}const r=Zn(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=$n(r);for(let s in e){const l=e[s].get;if(l)try{l.call(n)}catch{}}}}}export{Zt as $,jt as A,Zn as B,Dt as C,pt as D,lr as E,q as F,rr as G,ut as H,wr as I,Er as J,yr as K,A as L,En as M,Mt as N,Pt as O,T as P,$ as Q,Z as R,cn as S,z as T,tr as U,zt as V,Xt as W,Ft as X,_r as Y,Wt as Z,Tn as _,er as a,Jt as a0,lt as a1,Q as a2,nn as a3,Qt as a4,nr as a5,K as a6,u as a7,cr as a8,Tr as a9,mr as aA,Bt as aB,Jn as aC,It as aa,ar as ab,ot as ac,b as ad,gn as ae,it as af,Rn as ag,Lt as ah,fr as ai,Ot as aj,hr as ak,Ct as al,k as am,at as an,qn as ao,dt as ap,F as aq,Kt as ar,Gt as as,$t as at,qt as au,$n as av,Ut as aw,Nn as ax,vt as ay,Kn as az,vr as b,f as c,gr as d,Ht as e,ur as f,Ar as g,N as h,bt as i,xr as j,ft as k,Sr as l,or as m,sr as n,kt as o,Rr as p,Nt as q,zn as r,ir as s,dr as t,pr as u,sn as v,Yt as w,Vt as x,_n as y,o as z};