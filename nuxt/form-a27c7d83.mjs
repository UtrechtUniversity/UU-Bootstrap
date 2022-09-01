import{a as f,r as l,b as r,o as h,e as _,f as s,w as t,u as a,h as e,j as o,t as u,k as w,v as n}from"./entry-0ccd6c11.mjs";import{_ as b}from"./sidebar-ab5239ce.mjs";import{U as g}from"./uu-layout-nav-79b233eb.mjs";const x={class:"uu-content"},v=o(" Form | UU Layout | Portaldev Bootstrap theme docs "),y=e("div",{class:"uu-hero"},[e("h1",null,"UU Layout Form")],-1),$=o(" Sidebar "),U=e("h2",{class:"mt-3"}," Variables ",-1),T=e("pre",null,`$uu-form-breakpoint: lg;
$uu-form-column-gap: 2rem;
$uu-form-row-gap: 1.5rem;
$uu-form-field-padding-x: 1.5rem;
$uu-form-field-padding-y: 1.3rem;
$uu-form-field-padding-y-compensation: 5px;
$uu-form-field-bg: colors.$light;
$uu-form-field-input-group-bg: colors.$gray-050;
$uu-form-aside-font-size: 0.9rem;
$uu-form-aside-color: bootstrap.$text-muted;
$uu-form-help-padding-x: 0;
$uu-form-help-padding-y: .5rem;
                    `,-1),k=e("p",null," The UU Layout Form is a mobile friendly layout component for forms, used for new (and retrofitted) 'form-centric applications'. ",-1),B={class:"alert alert-info"},N=o(" For formatting reasons there are no visual examples on this page. Please see the "),L=o(" form example page "),S=o(" for an interactive example. "),V=e("h2",{class:"mt-3"}," Basic layout ",-1),C=e("p",null,[o(" A UU form is created by adding "),e("code",{class:"text-nowrap"},".uu-form"),o(" to a "),e("code",null,"form"),o(" (or "),e("code",null,"div"),o("). Each field gets it's own "),e("code",{class:"text-nowrap"},".uu-form-row"),o(" container containing a "),e("code",{class:"text-nowrap"},".uu-form-field"),o(" and (optionally) a "),e("code",{class:"text-nowrap"},".uu-form-help"),o(". ")],-1),E=e("p",null,[e("code",{class:"text-nowrap"},".uu-form-field"),o(" can contain any Bootstrap form element, and needs no special formatting. ")],-1),F=e("p",null," Any buttons should be outside any form row, in the example below we use a simple row/col-12 combo, but it's not required. ",-1),q=e("h2",{class:"mt-3"}," Text ",-1),A=e("p",null,[o(" A variant of the "),e("code",{class:"text-nowrap"},".uu-form-row"),o(" is the "),e("code",{class:"text-nowrap"},".uu-form-text-row"),o(". This class can be used to display text inside the same column structure as fields, but without the visual container. ")],-1),I=e("p",null," The aside can be used for general help/side content. If you don't need an aside, you should probably use a row/col-12 combo or equivalent. ",-1),P=e("div",{class:"alert alert-warning"}," You can use this element anywhere inside the form element, but you probably want to play with the margins if you don't use this as the topmost element. ",-1),H=e("h2",{class:"mt-3"}," Variants ",-1),j=e("h3",null," No gap ",-1),z=e("p",null,[e("code",{class:"text-nowrap"},".uu-form-no-gap"),o(" can be used to remove the gap between field rows, for an visually contiguous block. This class can be added to "),e("code",null,".uu-form"),o(" to remove gaps globally or "),e("code",{class:"text-nowrap"},".uu-form-row"),o(" for a single row (removes the gap below only). ")],-1),D=e("h3",null," No help/no aside ",-1),Y=e("p",null,[e("code",{class:"text-nowrap"},".uu-form-no-help"),o(" and "),e("code",{class:"text-nowrap"},".uu-form-no-aside"),o(" can be used to completely remove the help or aside column respectively. It can be added to "),e("code",null,".uu-form"),o(" to remove globally or "),e("code",{class:"text-nowrap"},".uu-form-row"),o("/"),e("code",{class:"text-nowrap"},".uu-form-text-row"),o(" to remove it on a single row. ")],-1),G=e("p",null,[o(" This is intended for pages that want a help column that uncoupled from specific questions. In which case one should wrap the form inside a "),e("code",null,".col-8"),o(" for example. ")],-1),W=f({__name:"form",setup(J){const i=l(`<form class="uu-form">
    <!--Every field has it's own uu-form-row-->
    <div class="uu-form-row">
        <div class="uu-form-field">
            <label for="example1" class="form-label">Example</label>
            <input class="form-control" />
        </div>
        <aside class="uu-form-help">
            Blablablabla
        </aside>
    </div>
    <div class="row">
        <div class="col-12">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </div>
</form>`),c=l(`<div class="uu-form-text-row">
    <div class="uu-form-text">
        Some information....
    </div>
    <aside class="uu-form-text-aside">
        See these links: ...
    </aside>
</div>`);return(K,M)=>{const d=r("Title"),m=r("Head"),p=w;return h(),_("div",x,[s(m,null,{default:t(()=>[s(d,null,{default:t(()=>[v]),_:1})]),_:1}),y,s(a(b),{placement:"right"},{"sidebar-button":t(()=>[$]),sidebar:t(()=>[s(g),U,s(a(n),{language:"scss",class:"w-100"},{default:t(()=>[T]),_:1})]),default:t(()=>[k,e("div",B,[N,s(p,{to:"/examples/forms"},{default:t(()=>[L]),_:1}),S]),V,C,E,F,s(a(n),{language:"html"},{default:t(()=>[o(u(i.value),1)]),_:1}),q,A,I,s(a(n),{language:"html"},{default:t(()=>[o(u(c.value),1)]),_:1}),P,H,j,z,D,Y,G]),_:1})])}}});export{W as default};
