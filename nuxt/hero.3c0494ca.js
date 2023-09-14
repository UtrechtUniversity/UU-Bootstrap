import{T as h,H as p}from"./components.da906116.js";import{v as u}from"./vue-prism-component.common.6933ebda.js";import{_ as m}from"./sidebar.vue_vue_type_script_setup_true_lang.41bd9a76.js";import{U as _}from"./uu-layout-nav.4089922f.js";import{a as g,r as f,b as i,e as s,w as t,u as a,U as b,aH as v,h as e,o as n,f as o,P as y}from"./entry.21858a4c.js";import"./composables.e4889afb.js";import"./_plugin-vue_export-helper.af303bb4.js";const U={class:"uu-content"},w=e("div",{class:"uu-hero"},[e("h1",null,"UU Layout Hero")],-1),x=e("h2",{class:"mt-3"},"Variables",-1),H=e("pre",null,`$uu-hero-bg:          $yellow;
$uu-hero-color:       color-contrast($uu-hero-bg);
$uu-hero-padding-y:   1rem;
$uu-hero-font-weight: 400;
                    `,-1),T=e("p",null," The UU Layout Hero is basically a colored banner. It's very simple, but also very versatile. ",-1),L=e("p",null,[o(" Once again, it's internal layouting is similar to "),e("code",null,".row"),o(", thus you can customize to your hart's content. ")],-1),k=e("p",null,"Some examples of how you can use this element are at the bottom of this page.",-1),$={class:"uu-content"},B=["innerHTML"],N={class:"uu-container"},I=g({__name:"hero",setup(S){const l=f([`<header class="uu-hero">
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
            You can also use this element as a UU container with a colored background. You could
            even say a UU hero is just such a container with a color background applied to it by
            default. This is not entirely correct however, as UU containers have special padding
            rules to avoid excessive padding.
        </p>
        <p>
            If you were to use a UU container with a color helper class, the padding will probably
            look weird. Using the UU Hero for this purposes avoids this issue, and is thus preferred.
        </p>
        <p>
            And now for some text-padding;
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis porttitor ante, eu malesuada dui
             convallis eget. Sed euismod id turpis eget vehicula. Vestibulum id justo a nisi finibus dapibus. Donec
             scelerisque efficitur ante, in blandit elit ornare vel. Morbi tempus neque facilisis feugiat maximus.
             Aliquam ut turpis nunc. Sed sed lectus nisi. Nunc et justo eu sapien accumsan consectetur.
         </p>
    </div>
</div>`]);return(V,j)=>{const c=h,d=p;return n(),i("div",U,[s(d,null,{default:t(()=>[s(c,null,{default:t(()=>[o(" Hero | UU Layout | Portaldev Bootstrap theme docs ")]),_:1})]),_:1}),w,s(a(m),{placement:"right"},{"sidebar-button":t(()=>[o(" Sidebar ")]),sidebar:t(()=>[s(_),x,s(a(u),{language:"scss",class:"w-100"},{default:t(()=>[H]),_:1})]),default:t(()=>[T,L,k]),_:1}),(n(!0),i(b,null,v(a(l),r=>(n(),i("div",$,[e("div",{class:"uu-content",innerHTML:r},null,8,B),e("div",N,[s(a(u),{language:"html",class:"w-100"},{default:t(()=>[o(y(r),1)]),_:2},1024)])]))),256))])}}});export{I as default};
