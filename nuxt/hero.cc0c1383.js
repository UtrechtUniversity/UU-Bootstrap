import{a as m,r as p,b as r,o as a,e as n,f as s,w as t,u as i,F as _,s as b,j as o,h as e,v as l,t as f}from"./entry.b65621f5.js";import{_ as g}from"./sidebar.vue_vue_type_script_setup_true_lang.fbbb2804.js";import{U as v}from"./uu-layout-nav.bfc7dcc8.js";const y={class:"uu-content"},w=o(" Hero | UU Layout | Portaldev Bootstrap theme docs "),U=e("div",{class:"uu-hero"},[e("h1",null,"UU Layout Hero")],-1),x=o(" Sidebar "),H=e("h2",{class:"mt-3"}," Variables ",-1),k=e("pre",null,`$uu-hero-bg:          $yellow;
$uu-hero-color:       color-contrast($uu-hero-bg);
$uu-hero-padding-y:   1rem;
$uu-hero-font-weight: 400;
                    `,-1),L=e("p",null," The UU Layout Hero is basically a colored banner. It's very simple, but also very versatile. ",-1),T=e("p",null,[o(" Once again, it's internal layouting is similar to "),e("code",null,".row"),o(", thus you can customize to your hart's content. ")],-1),$=e("p",null," Some examples of how you can use this element are at the bottom of this page. ",-1),j={class:"uu-content"},B=["innerHTML"],C={class:"uu-container"},A=m({__name:"hero",setup(I){const c=p([`<header class="uu-hero">
    <h1>Basic usage</h1>
</header>`,`<header class="uu-hero text-bg-red">
    <h1>This hero is red through .text-bg-red</h1>
</header>`,`<div class="uu-hero flex-column">
    <h1>Hero with a title</h1>
    <h2>and a subtitle</h2>
</div>`,`<div class="uu-hero flex-column vh-100 justify-content-center">
    <h1>Fullpage hero</h1>
    <p>This takes up an entire page</p>
</div>`,`<div class="uu-hero align-items-center">
    <h1>Action hero</h1>
    <span class="ps-3 me-auto">(Get it?)</span>
    <button class="btn btn-secondary btn-arrow-right">Do something</button>
</div>`,`<div class="uu-hero text-bg-secondary">
    <div class="col-12">
        <h1>Content block hero</h1>
        <p>
            You can also use this element as a UU container with a colored background. In fact, you could say a
            UU hero is just such a container with a color background applied to it by default. It kinda is, kinda
            isn't; mostly it isn't because it serves different function, but to be honest that's semantics. However,
            semantics matter! Or so I've been told. And yes, I'm padding.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis porttitor ante, eu malesuada dui
             convallis eget. Sed euismod id turpis eget vehicula. Vestibulum id justo a nisi finibus dapibus. Donec
             scelerisque efficitur ante, in blandit elit ornare vel. Morbi tempus neque facilisis feugiat maximus.
             Aliquam ut turpis nunc. Sed sed lectus nisi. Nunc et justo eu sapien accumsan consectetur.
         </p>
    </div>
</div>`]);return(N,S)=>{const d=r("Title"),h=r("Head");return a(),n("div",y,[s(h,null,{default:t(()=>[s(d,null,{default:t(()=>[w]),_:1})]),_:1}),U,s(i(g),{placement:"right"},{"sidebar-button":t(()=>[x]),sidebar:t(()=>[s(v),H,s(i(l),{language:"scss",class:"w-100"},{default:t(()=>[k]),_:1})]),default:t(()=>[L,T,$]),_:1}),(a(!0),n(_,null,b(c.value,u=>(a(),n("div",j,[e("div",{class:"uu-content",innerHTML:u},null,8,B),e("div",C,[s(i(l),{language:"html",class:"w-100"},{default:t(()=>[o(f(u),1)]),_:2},1024)])]))),256))])}}});export{A as default};
