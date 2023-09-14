import{T as g,H as _}from"./components.da906116.js";import{a as f,r as n,b as w,h as e,e as t,w as o,u as s,U as y,o as x,f as a,P as d,j as k}from"./entry.21858a4c.js";import{v as l}from"./vue-prism-component.common.6933ebda.js";import{_ as i}from"./sidebar.vue_vue_type_script_setup_true_lang.41bd9a76.js";import{U as T}from"./uu-layout-nav.4089922f.js";import"./composables.e4889afb.js";import"./_plugin-vue_export-helper.af303bb4.js";const U={class:"uu-content"},N=e("div",{class:"uu-hero"},[e("h1",null,"UU Layout Classic Header & Navbar")],-1),S=e("p",null," The classic header and navbar replicates the most common layout found on UU websites. (And is the default header used for this documentation.) ",-1),$=e("p",null," It consists of a desktop-only header (with 1 or more 'rows') with a black menu bar below. On mobile the header disappears, and the navbar takes over it's duty. ",-1),C=e("h2",{class:"uu-sidebar-header-linked"},"Variables",-1),D=e("pre",null,`$uu-header-padding-y: 0.7rem;
$uu-header-font-size: 0.9rem;
$uu-header-title-color: #094D8E;
$uu-header-border-gap: 1.2rem;
// Also the header breakpoint
$uu-navbar-breakpoint: md;
                    `,-1),B=e("h2",{class:"uu-sidebar-header-linked"},"Header",-1),O=e("p",null,[a(" The header refers to all the space above the navbar. It's setup to be fairly modular, but "),e("i",null,"should"),a(" at the very least contain the UU logo. Other elements often found inside the header are: langauge switcher, app name title, search box and a login/logout link. ")],-1),H=e("p",null,[a(" It is important to note that the header is only visible above a certain breakpoint ("),e("code",null,"md"),a(" by default). Below that breakpoint, the navbar takes over as the topmost element. Thus, make sure you provide alternatives for mobile users for anything functional in the header. ")],-1),A=e("p",null,[a(" A header consists of a "),e("code",null,"div.uu-header"),a(" containing one or more "),e("code",null,"div.uu-header-row"),a(" elements. These rows are flex containers, so you have the option to use Bootstrap's flexbox helpers to layout your header, or using Bootstrap's columns ("),e("code",null,".col-4"),a(" etc) ")],-1),V=e("p",null,"An example of a header implementation:",-1),F=e("p",null,"Some spacing method options:",-1),I={class:"accordion"},L={class:"accordion-item"},j=e("h2",{id:"headingOne",class:"accordion-header"},[e("button",{class:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}," Margin spaced example ")],-1),E={id:"collapseOne",class:"accordion-collapse collapse","aria-labelledby":"headingOne"},P={class:"accordion-body"},M={class:"accordion-item"},W=e("h2",{id:"headingTwo",class:"accordion-header"},[e("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"}," Flex spaced ")],-1),z={id:"collapseTwo",class:"accordion-collapse collapse","aria-labelledby":"headingTwo"},G={class:"accordion-body"},J={class:"accordion-item"},Y=e("h2",{id:"headingThree",class:"accordion-header"},[e("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"}," Column spaced ")],-1),q={id:"collapseThree",class:"accordion-collapse collapse","aria-labelledby":"headingThree"},K={class:"accordion-body"},Q=e("h2",{class:"uu-sidebar-header-linked"},"Variables",-1),R=e("pre",null,`$uu-navbar-breakpoint: md;
$uu-navbar-mobile-height: 3.125rem;
$uu-navbar-navlink-padding-x: .75rem;
$uu-navbar-navlink-padding-y: .75rem;
                    `,-1),X=e("h2",{class:"uu-sidebar-header-linked"},"Navbar",-1),Z=e("p",null," The UU layout navbar is mostly identical to the regular Bootstrap navbar (which it extends); the only differences are: ",-1),ee=e("ul",null,[e("li",null,[a("It has a "),e("code",null,".uu-navbar"),a(" class on the "),e("code",null,".navbar"),a(" element.")]),e("li",null,[a(" The internal container must be a "),e("code",null,".uu-navbar-container"),a(". ")]),e("li",null,[a(" You don't need to use "),e("code",null,".navbar-expand{-sm|-md|-lg|-xl|-xxl}"),a(" on the "),e("code",null,".navbar"),a(". The UU navbar has all the CSS normally provided by those classes. "),e("ul",null,[e("li",null,[a(" If you want it to 'expand' on a different breakpoint, change the "),e("code",null,"$uu-navbar-breakpoint"),a(" SCSS variable. ")])])]),e("li",null,[a(" The "),e("code",null,".navbar-brand"),a(" must only contain an "),e("code",null,"img"),a(" (of the UU logo). (Optionally wrapped in a link) ")])],-1),ae=e("p",null,"The rest is identical in use to the normal Navbar",-1),oe=e("p",null,"Full example:",-1),pe=f({__name:"classic-header",setup(se){const r=n(`<div class="uu-header">
    <!--First row contains the UU logo and a language switcher-->
    <div class="uu-header-row">
        <div class="me-auto uu-logo">
            <img src="/uu-logo-en.svg"/>
        </div>
        <div class="border-left text-muted text-uppercase ms-auto">
            <a href="change-lang/en/">
                Nederlands
            </a>
        </div>
    </div>
    <!--Second row has the app title and a user info/login box-->
    <div class="uu-header-row">
        <div class="me-auto uu-header-title">
            App name
        </div>
        <div class="ms-auto">
            Welcome, John Doe (Log out)
        </div>
    </div>
</div>
<!--navbar, see below-->`),c=n(`<div class="uu-header">
    <div class="uu-header-row">
        <div class="me-auto uu-logo">
            <img src="/uu-logo-en.svg"/>
        </div>
        <div class="border-left text-muted text-uppercase ms-auto">
            <a href="change-lang/en/">
                Nederlands
            </a>
        </div>
    </div>
</div>`),u=n(`<div class="uu-header justify-content-between">
    <div class="uu-header-row">
        <div class="uu-logo">
            <img src="/uu-logo-en.svg"/>
        </div>
        <div class="border-left text-muted text-uppercase">
            <a href="change-lang/en/">
                Nederlands
            </a>
        </div>
    </div>
</div>`),h=n(`<div class="uu-header">
    <div class="uu-header-row">
        <div class="col-4 uu-logo">
            <img src="/uu-logo-en.svg"/>
        </div>
        <div class="col-5" />
        <div class="col-3 border-left text-muted text-uppercase">
            <a href="change-lang/en/">
                Nederlands
            </a>
        </div>
    </div>
</div>`),p=n(`<nav class="navbar uu-navbar">
    <div class="uu-navbar-container">
        <a href="https://www.uu.nl" class="navbar-brand">
            <img src="uu-logo-en.svg" />
        </a>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-content"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon" />
        </button>
        <div id="navbar-content" class="collapse navbar-collapse">
            <ul class="navbar-nav me-auto">
                <li class="nav-item">
                    <a href="/" class="nav-link">
                        Home
                    </a>
                </li>
                <li class="nav-item">
                    <a href="/example/" class="nav-link">
                        Example
                    </a>
                </li>
                <li class="nav-item dropdown">
                    <a
                        id="exampleDropdown"
                        class="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Dropdown
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="exampleDropdown">
                        <li>
                            <a href="/dropdown-1/" class="dropdown-item">
                                Dropdown item 1
                            </a>
                        </li>
                        <li><hr class="dropdown-divider" /></li>
                        <li>
                            <a href="/dropdown-1/" class="dropdown-item">
                                Dropdown item 2
                            </a>
                        </li>
                        <li>
                            <a href="/dropdown-1/" class="dropdown-item">
                                Dropdown item 3
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>`);return(te,le)=>{const b=g,v=_,m=k;return x(),w(y,null,[e("div",U,[t(v,null,{default:o(()=>[t(b,null,{default:o(()=>[a(" Classic header & Navbar | UU Layout | Portaldev Bootstrap theme docs ")]),_:1})]),_:1}),N,t(s(i),{placement:"right","sticky-sidebar":!0,"mobile-sticky-sidebar":!0},{"sidebar-button":o(()=>[a(" See also ")]),sidebar:o(()=>[t(T)]),default:o(()=>[S,$,e("p",null,[a(" While named 'classic', it is considered up to date and still fully supported by this project. Alternatively you can use the "),t(m,{to:"/uu-layout/unified-header/"},{default:o(()=>[a("Unified Header")]),_:1}),a(". ")])]),_:1}),t(s(i),{placement:"right","mobile-placement":"bottom","mobile-sticky-sidebar":!0},{"sidebar-button":o(()=>[a(" Variables ")]),sidebar:o(()=>[C,t(s(l),{language:"scss",class:"w-100"},{default:o(()=>[D]),_:1})]),default:o(()=>[B,O,H,A,V,t(s(l),{language:"html",class:"w-100"},{default:o(()=>[a(d(s(r)),1)]),_:1}),F,e("div",I,[e("div",L,[j,e("div",E,[e("div",P,[t(s(l),{language:"html"},{default:o(()=>[a(d(s(c)),1)]),_:1})])])]),e("div",M,[W,e("div",z,[e("div",G,[t(s(l),{language:"html"},{default:o(()=>[a(d(s(u)),1)]),_:1})])])]),e("div",J,[Y,e("div",q,[e("div",K,[t(s(l),{language:"html"},{default:o(()=>[a(d(s(h)),1)]),_:1})])])])])]),_:1})]),t(s(i),{placement:"right"},{"sidebar-button":o(()=>[a(" Sidebar ")]),sidebar:o(()=>[Q,t(s(l),{language:"scss",class:"w-100"},{default:o(()=>[R]),_:1})]),default:o(()=>[X,Z,ee,ae,oe,t(s(l),{language:"html",class:"w-100"},{default:o(()=>[a(d(s(p)),1)]),_:1})]),_:1})],64)}}});export{pe as default};
