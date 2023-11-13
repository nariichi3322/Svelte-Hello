import{n as D,s as F,r as X,c as Y}from"../chunks/scheduler.cbf234a0.js";import{S as K,i as W,g as w,s as E,m as P,h as y,j as L,y as j,c as H,n as R,f as M,k as v,l as U,a as A,A as u,B as q,o as z,r as Z,C as ee,u as te,v as se,d as ne,t as oe,w as re}from"../chunks/index.200976ee.js";import{w as ae}from"../chunks/index.14349a18.js";const x=typeof window<"u";let V=x?()=>window.performance.now():()=>Date.now(),J=x?e=>requestAnimationFrame(e):D;const S=new Set;function Q(e){S.forEach(t=>{t.c(e)||(S.delete(t),t.f())}),S.size!==0&&J(Q)}function le(e){let t;return S.size===0&&J(Q),{promise:new Promise(s=>{S.add(t={c:e,f:s})}),abort(){S.delete(t)}}}const ie=!0,we=Object.freeze(Object.defineProperty({__proto__:null,prerender:ie},Symbol.toStringTag,{value:"Module"}));function G(e){return Object.prototype.toString.call(e)==="[object Date]"}function B(e,t,s,r){if(typeof s=="number"||G(s)){const a=r-s,n=(s-t)/(e.dt||1/60),o=e.opts.stiffness*a,l=e.opts.damping*n,m=(o-l)*e.inv_mass,c=(n+m)*e.dt;return Math.abs(c)<e.opts.precision&&Math.abs(a)<e.opts.precision?r:(e.settled=!1,G(s)?new Date(s.getTime()+c):s+c)}else{if(Array.isArray(s))return s.map((a,n)=>B(e,t[n],s[n],r[n]));if(typeof s=="object"){const a={};for(const n in s)a[n]=B(e,t[n],s[n],r[n]);return a}else throw new Error(`Cannot spring ${typeof s} values`)}}function ce(e,t={}){const s=ae(e),{stiffness:r=.15,damping:a=.8,precision:n=.01}=t;let o,l,m,c=e,d=e,f=1,i=0,h=!1;function b(k,T={}){d=k;const C=m={};return e==null||T.hard||g.stiffness>=1&&g.damping>=1?(h=!0,o=V(),c=k,s.set(e=d),Promise.resolve()):(T.soft&&(i=1/((T.soft===!0?.5:+T.soft)*60),f=0),l||(o=V(),h=!1,l=le(_=>{if(h)return h=!1,l=null,!1;f=Math.min(f+i,1);const p={inv_mass:f,opts:g,settled:!0,dt:(_-o)*60/1e3},$=B(p,c,e,d);return o=_,c=e,s.set(e=$),p.settled&&(l=null),!p.settled})),new Promise(_=>{l.promise.then(()=>{C===m&&_()})}))}const g={set:b,update:(k,T)=>b(k(d,e),T),subscribe:s.subscribe,stiffness:r,damping:a,precision:n};return g}function de(e){let t,s,r='<svg aria-hidden="true" viewBox="0 0 1 1" class="svelte-1l8gi41"><path d="M0,0.5 L1,0.5" class="svelte-1l8gi41"></path></svg>',a,n,o,l,m=Math.floor(e[1]+1)+"",c,d,f,i=Math.floor(e[1])+"",h,b,g,k='<svg aria-hidden="true" viewBox="0 0 1 1" class="svelte-1l8gi41"><path d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" class="svelte-1l8gi41"></path></svg>',T,C;return{c(){t=w("div"),s=w("button"),s.innerHTML=r,a=E(),n=w("div"),o=w("div"),l=w("strong"),c=P(m),d=E(),f=w("strong"),h=P(i),b=E(),g=w("button"),g.innerHTML=k,this.h()},l(_){t=y(_,"DIV",{class:!0});var p=L(t);s=y(p,"BUTTON",{"aria-label":!0,class:!0,"data-svelte-h":!0}),j(s)!=="svelte-bok9p8"&&(s.innerHTML=r),a=H(p),n=y(p,"DIV",{class:!0});var $=L(n);o=y($,"DIV",{class:!0,style:!0});var O=L(o);l=y(O,"STRONG",{class:!0,"aria-hidden":!0});var I=L(l);c=R(I,m),I.forEach(M),d=H(O),f=y(O,"STRONG",{class:!0});var N=L(f);h=R(N,i),N.forEach(M),O.forEach(M),$.forEach(M),b=H(p),g=y(p,"BUTTON",{"aria-label":!0,class:!0,"data-svelte-h":!0}),j(g)!=="svelte-t7flcw"&&(g.innerHTML=k),p.forEach(M),this.h()},h(){v(s,"aria-label","Decrease the counter by one"),v(s,"class","svelte-1l8gi41"),v(l,"class","hidden svelte-1l8gi41"),v(l,"aria-hidden","true"),v(f,"class","svelte-1l8gi41"),v(o,"class","counter-digits svelte-1l8gi41"),U(o,"transform","translate(0, "+100*e[2]+"%)"),v(n,"class","counter-viewport svelte-1l8gi41"),v(g,"aria-label","Increase the counter by one"),v(g,"class","svelte-1l8gi41"),v(t,"class","counter svelte-1l8gi41")},m(_,p){A(_,t,p),u(t,s),u(t,a),u(t,n),u(n,o),u(o,l),u(l,c),u(o,d),u(o,f),u(f,h),u(t,b),u(t,g),T||(C=[q(s,"click",e[4]),q(g,"click",e[5])],T=!0)},p(_,[p]){p&2&&m!==(m=Math.floor(_[1]+1)+"")&&z(c,m),p&2&&i!==(i=Math.floor(_[1])+"")&&z(h,i),p&4&&U(o,"transform","translate(0, "+100*_[2]+"%)")},i:D,o:D,d(_){_&&M(t),T=!1,X(C)}}}function fe(e,t){return(e%t+t)%t}function pe(e,t,s){let r,a,n=0;const o=ce();Y(e,o,c=>s(1,a=c));const l=()=>s(0,n-=1),m=()=>s(0,n+=1);return e.$$.update=()=>{e.$$.dirty&1&&o.set(n),e.$$.dirty&2&&s(2,r=fe(a,1))},[n,a,r,o,l,m]}class ue extends K{constructor(t){super(),W(this,t,pe,de,F,{})}}const me=""+new URL("../assets/svelte-welcome.c18bcf5a.webp",import.meta.url).href,he=""+new URL("../assets/svelte-welcome.6c300099.png",import.meta.url).href;function _e(e){let t,s,r,a,n=`<span class="welcome svelte-1edb75n"><picture><source srcset="${me}" type="image/webp"/> <img src="${he}" alt="Welcome" class="svelte-1edb75n"/></picture></span>

        to your new<br/>SvelteKit app`,o,l,m="try editing <strong>src/routes/+page.svelte</strong>",c,d,f;return d=new ue({}),{c(){t=w("meta"),s=E(),r=w("section"),a=w("h1"),a.innerHTML=n,o=E(),l=w("h2"),l.innerHTML=m,c=E(),Z(d.$$.fragment),this.h()},l(i){const h=ee("svelte-s9d471",document.head);t=y(h,"META",{name:!0,content:!0}),h.forEach(M),s=H(i),r=y(i,"SECTION",{class:!0});var b=L(r);a=y(b,"H1",{class:!0,"data-svelte-h":!0}),j(a)!=="svelte-190e4l2"&&(a.innerHTML=n),o=H(b),l=y(b,"H2",{"data-svelte-h":!0}),j(l)!=="svelte-1qamapf"&&(l.innerHTML=m),c=H(b),te(d.$$.fragment,b),b.forEach(M),this.h()},h(){document.title="Home",v(t,"name","description"),v(t,"content","Svelte demo app"),v(a,"class","svelte-1edb75n"),v(r,"class","svelte-1edb75n")},m(i,h){u(document.head,t),A(i,s,h),A(i,r,h),u(r,a),u(r,o),u(r,l),u(r,c),se(d,r,null),f=!0},p:D,i(i){f||(ne(d.$$.fragment,i),f=!0)},o(i){oe(d.$$.fragment,i),f=!1},d(i){i&&(M(s),M(r)),M(t),re(d)}}}class ye extends K{constructor(t){super(),W(this,t,null,_e,F,{})}}export{ye as component,we as universal};
