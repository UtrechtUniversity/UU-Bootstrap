import{a as f,k as c,o as p,b as m,f as i,u as d,l as u,h as b}from"./entry-2055ce85.mjs";var r,g=new Uint8Array(16);function y(){if(!r&&(r=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!r))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(g)}var v=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function h(t){return typeof t=="string"&&v.test(t)}var s=[];for(var l=0;l<256;++l)s.push((l+256).toString(16).substr(1));function _(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,o=(s[t[e+0]]+s[t[e+1]]+s[t[e+2]]+s[t[e+3]]+"-"+s[t[e+4]]+s[t[e+5]]+"-"+s[t[e+6]]+s[t[e+7]]+"-"+s[t[e+8]]+s[t[e+9]]+"-"+s[t[e+10]]+s[t[e+11]]+s[t[e+12]]+s[t[e+13]]+s[t[e+14]]+s[t[e+15]]).toLowerCase();if(!h(o))throw TypeError("Stringified UUID is invalid");return o}function S(t,e,o){t=t||{};var n=t.random||(t.rng||y)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,e){o=o||0;for(var a=0;a<16;++a)e[o+a]=n[a];return e}return _(n)}const k={class:"uu-sidebar"},C=["data-bs-target"],R=["id"],V={class:"uu-sidebar-content"},B=f({__name:"sidebar",props:{id:{default:null},placement:{default:"left"},mobilePlacement:{default:"top"},stickySidebar:{type:Boolean,default:!1},mobileStickySidebar:{type:Boolean,default:!1}},setup(t){const e=t,o=c(()=>e.id!==null?e.id:"id_"+S().toString().replace(/-/g,"")),n=c(()=>{let a="";return e.placement==="right"&&(a+="uu-sidebar-right "),e.mobilePlacement==="bottom"&&(a+="uu-sidebar-mobile-bottom "),e.stickySidebar&&(a+="uu-sidebar-sticky "),e.mobileStickySidebar&&(a+="uu-sidebar-mobile-sticky "),a});return(a,x)=>(p(),m("div",{class:b(["uu-sidebar-container",d(n)])},[i("aside",k,[i("button",{class:"uu-sidebar-toggle",type:"button","data-bs-toggle":"collapse","data-bs-target":"#"+d(o),"aria-expanded":"false"},[u(a.$slots,"sidebar-button")],8,C),i("div",{id:d(o),class:"uu-sidebar-collapse collapse"},[u(a.$slots,"sidebar")],8,R)]),i("div",V,[u(a.$slots,"default")])],2))}});export{B as _};
