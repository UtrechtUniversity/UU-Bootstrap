import{T as p,H as f}from"./components.da906116.js";import{a as h,r as l,b as _,e as s,w as t,u as a,h as o,o as w,f as e,P as r,j as b}from"./entry.21858a4c.js";import{v as n}from"./vue-prism-component.common.6933ebda.js";import{_ as g}from"./sidebar.vue_vue_type_script_setup_true_lang.41bd9a76.js";import{U as x}from"./uu-layout-nav.4089922f.js";import"./composables.e4889afb.js";import"./_plugin-vue_export-helper.af303bb4.js";const v={class:"uu-content"},y=o("div",{class:"uu-hero"},[o("h1",null,"UU Layout Form")],-1),$=o("h2",{class:"mt-3"},"Variables",-1),T=o("pre",null,`$uu-form-breakpoint: lg;
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
                    `,-1),U=o("p",null," The UU Layout Form is a mobile friendly layout component for forms, used for new (and retrofitted) 'form-centric applications'. ",-1),B={class:"alert alert-info"},N=o("h2",{class:"mt-3"},"Basic layout",-1),k=o("p",null,[e(" A UU form is created by adding "),o("code",{class:"text-nowrap"},".uu-form"),e(" to a "),o("code",null,"form"),e(" (or "),o("code",null,"div"),e("). Each field gets it's own "),o("code",{class:"text-nowrap"},".uu-form-row"),e(" container containing a "),o("code",{class:"text-nowrap"},".uu-form-field"),e(" and (optionally) a "),o("code",{class:"text-nowrap"},".uu-form-help"),e(". ")],-1),L=o("p",null,[o("code",{class:"text-nowrap"},".uu-form-field"),e(" can contain any Bootstrap form element, and needs no special formatting. ")],-1),S=o("p",null," Any buttons should be outside any form row, in the example below we use a simple row/col-12 combo, but it's not required. ",-1),V=o("h2",{class:"mt-3"},"Text",-1),E=o("p",null,[e(" A variant of the "),o("code",{class:"text-nowrap"},".uu-form-row"),e(" is the "),o("code",{class:"text-nowrap"},".uu-form-text-row"),e(". This class can be used to display text inside the same column structure as fields, but without the visual container. ")],-1),F=o("p",null," The aside can be used for general help/side content. If you don't need an aside, you should probably use a row/col-12 combo or equivalent. ",-1),P=o("div",{class:"alert alert-warning"}," You can use this element anywhere inside the form element, but you probably want to play with the margins if you don't use this as the topmost element. ",-1),q=o("h2",{class:"mt-3"},"Variants",-1),A=o("h3",null,"No gap",-1),C=o("p",null,[o("code",{class:"text-nowrap"},".uu-form-no-gap"),e(" can be used to remove the gap between field rows, for an visually contiguous block. This class can be added to "),o("code",null,".uu-form"),e(" to remove gaps globally or "),o("code",{class:"text-nowrap"},".uu-form-row"),e(" for a single row (removes the gap below only). ")],-1),H=o("h3",null,"No help/no aside",-1),I=o("p",null,[o("code",{class:"text-nowrap"},".uu-form-no-help"),e(" and "),o("code",{class:"text-nowrap"},".uu-form-no-aside"),e(" can be used to completely remove the help or aside column respectively. It can be added to "),o("code",null,".uu-form"),e(" to remove globally or "),o("code",{class:"text-nowrap"},".uu-form-row"),e("/"),o("code",{class:"text-nowrap"},".uu-form-text-row"),e(" to remove it on a single row. ")],-1),j=o("p",null,[e(" This is intended for pages that want a help column that uncoupled from specific questions. In which case one should wrap the form inside a "),o("code",null,".col-8"),e(" for example. ")],-1),W=h({__name:"form",setup(z){const u=l(`<form class="uu-form">
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
</form>`),i=l(`<div class="uu-form-text-row">
    <div class="uu-form-text">
        Some information....
    </div>
    <aside class="uu-form-text-aside">
        See these links: ...
    </aside>
</div>`);return(D,Y)=>{const c=p,d=f,m=b;return w(),_("div",v,[s(d,null,{default:t(()=>[s(c,null,{default:t(()=>[e(" Form | UU Layout | Portaldev Bootstrap theme docs ")]),_:1})]),_:1}),y,s(a(g),{placement:"right"},{"sidebar-button":t(()=>[e(" Sidebar ")]),sidebar:t(()=>[s(x),$,s(a(n),{language:"scss",class:"w-100"},{default:t(()=>[T]),_:1})]),default:t(()=>[U,o("div",B,[e(" For formatting reasons there are no visual examples on this page. Please see the "),s(m,{to:"/examples/forms"},{default:t(()=>[e(" form example page ")]),_:1}),e(" for an interactive example. ")]),N,k,L,S,s(a(n),{language:"html"},{default:t(()=>[e(r(a(u)),1)]),_:1}),V,E,F,s(a(n),{language:"html"},{default:t(()=>[e(r(a(i)),1)]),_:1}),P,q,A,C,H,I,j]),_:1})])}}});export{W as default};
