import{a as g,r as i,b as c,o as v,e as f,f as a,w as t,u as s,j as o,t as d,h as e,k as y,v as l}from"./entry.ce066766.js";import{_ as n}from"./sidebar.vue_vue_type_script_setup_true_lang.8fbd809d.js";import{U as w}from"./uu-layout-nav.910e517f.js";const x={class:"uu-content"},k=o(" Overview | UU Layout | Portaldev Bootstrap theme docs "),U=e("div",{class:"uu-hero"},[e("h1",null,"UU Layout overview")],-1),T=o(" See also "),$=e("p",null," This library provides a set of classes/components that allow you to easily create a page that passes as a UU website. This page will cover the basics, with some larger sub-components having their own page. ",-1),N=e("p",null,[o(" You can use the rest of this library without UU layout if you just want the component stylings. However, all components under the UU layout section (identified by the "),e("code",null,"uu-"),o(" prefix) do require that you use the UU layout. ")],-1),V=e("p",null," Full example for a page: ",-1),B=o(" Variables "),I=e("h2",{class:"uu-sidebar-header-linked"}," Variables ",-1),C=e("pre",null,`$uu-container-width: 100rem; // 1600px
$uu-border-color: $gray-400;
$uu-border-color-light: $gray-200;
$uu-border-color-dark: $gray-800;
                    `,-1),O=e("p",null,[o(" Container width refers to the "),e("i",null,"maximum width"),o(" of the container. The border variables set color to various borders used in a UU layout. ")],-1),S=e("h2",{class:"uu-sidebar-header-linked"}," Root container ",-1),F=e("p",null,[o(" The root element for all UU layout pages is the "),e("i",null,"root container"),o(", which should be a child div below the body tag. ")],-1),H=e("p",null,[o(" It's is a very simple flexbox with a max-width and white background. However, it also acts as the namespace for all components in the UU layout. Thus, all "),e("code",null,"uu-"),o(" prefixed classes only work inside one of these containers. ")],-1),L=o(" Variables "),A=e("h2",{class:"uu-sidebar-header-linked"}," Variables ",-1),j=e("pre",null,`$uu-header-padding-y: 0.7rem;
$uu-header-font-size: 0.9rem;
$uu-header-title-color: #094D8E;
$uu-header-border-gap: 1.2rem;
// Also the header breakpoint
$uu-navbar-breakpoint: md;
                    `,-1),q=e("h2",{class:"uu-sidebar-header-linked"}," Header ",-1),D=e("p",null,[o(" The header refers to all the space above the navbar. It's setup to be fairly modular, but "),e("i",null,"should"),o(" at the very least contain the UU logo. Other elements often found inside the header are: langauge switcher, app name title, search box and a login/logout link. ")],-1),E=e("p",null,[o(" It is important to note that the header is only visible above a certain breakpoint ("),e("code",null,"md"),o(" by default). Below that breakpoint, the navbar takes over as the topmost element. Thus, make sure you provide alternatives for mobile users for anything functional in the header. ")],-1),M=e("p",null,[o(" A header consists of a "),e("code",null,"div.uu-header"),o(" containing one or more "),e("code",null,"div.uu-header-row"),o(" elements. These rows are flex containers, so you have the option to use Bootstrap's flexbox helpers to layout your header, or using Bootstrap's columns ("),e("code",null,".col-4"),o(" etc) ")],-1),P={class:"accordion"},Y={class:"accordion-item"},z=e("h2",{id:"headingOne",class:"accordion-header"},[e("button",{class:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}," Margin spaced example ")],-1),G={id:"collapseOne",class:"accordion-collapse collapse","aria-labelledby":"headingOne"},J={class:"accordion-body"},R={class:"accordion-item"},W=e("h2",{id:"headingTwo",class:"accordion-header"},[e("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"}," Flex spaced ")],-1),K={id:"collapseTwo",class:"accordion-collapse collapse","aria-labelledby":"headingTwo"},Q={class:"accordion-body"},X={class:"accordion-item"},Z=e("h2",{id:"headingThree",class:"accordion-header"},[e("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"}," Column spaced ")],-1),ee={id:"collapseThree",class:"accordion-collapse collapse","aria-labelledby":"headingThree"},oe={class:"accordion-body"},te=o(" Variables "),ae=e("h2",{class:"uu-sidebar-header-linked"}," Variables ",-1),se=e("p",null," None ",-1),le=e("h2",{class:"uu-sidebar-header-linked"}," Content ",-1),ne=e("p",null,[o(" An div with "),e("code",{class:"text-nowrap"},".uu-content"),o(" that should contain all "),e("em",null,"content elements"),o(". This div will automatically grow to fill the page if the actual content is not long enough. ")],-1),ie=e("p",null,[o(" An overview of "),e("em",null,"content elements"),o(": ")],-1),de=e("h3",null,"UU Container",-1),re=e("p",null,[o(" Your main "),e("i",null,"content element"),o(" is "),e("code",null,".uu-container"),o(". This is a generic container similar to Bootstrap's "),e("code",null,".row"),o(", and should be used as such. It is recommended to use Bootstrap's "),e("code",null,".col-*"),o(" classes inside of this element for layouting, but any other flexbox based layouting is supported too. ")],-1),ce=e("p",null,[o(" Tip: you can use Bootstrap's flex helpers like "),e("code",null,".flex-column"),o(" and "),e("code",null,".justify-content-*"),o(" on the container element for advanced flexbox stuff. ")],-1),ue=e("h3",null,"Fullwidth container",-1),he=e("p",null,[o(" The regular UU Layout container has the nice 'spaced' code applied to it, limiting it to "),e("code",{class:"text-nowrap"},"$content-width"),o(". If you have an interface which for whatever reason needs more width, you can use "),e("code",{class:"text-nowrap"},".uu-fullwidth-container"),o(" instead. This container class will give you the entire width of the root container. ")],-1),_e=e("div",{class:"alert alert-warning"}," Note: using this class is admitting your interface is not responsive and thus broken on smaller screens. It is recommended you explore responsive options before using this as a last-resort option. ",-1),pe=e("h3",null,[o("Other "),e("i",null,"content elements")],-1),me=o(" Other content elements are "),be=o(" Cover "),ge=o(", "),ve=o(" Hero "),fe=o(" and "),ye=o(" Sidebar "),we=o(". "),xe=o(" Variables "),ke=e("h2",{class:"uu-sidebar-header-linked"}," Variables ",-1),Ue=e("pre",null,`$uu-footer-padding-y: 2.5rem;
$uu-footer-color: $gray-400;
$uu-footer-background-color: $gray-850;
                    `,-1),Te=e("h2",{class:"uu-sidebar-header-linked"}," Footer ",-1),$e=e("p",null," I'm tired, so a short summary: ",-1),Ne=e("ul",null,[e("li",null,"It's a footer"),e("li",null,[o("Use "),e("code",null,".uu-footer"),o(" on a "),e("code",null,"div"),o(" or (preferably) a "),e("code",null,"footer"),o(" element")]),e("li",null,"It's a flexbox thing, same layouting requirements as basically every other element described on this page"),e("li",null,[o(" It's convention to use the white/black UU logo as the leftmost element, but not required "),e("ul",null,[e("li",null,"For example, the corporate site has a sitemap there instead")])])],-1),Fe=g({__name:"index",setup(Ve){const u=i(`<body>
    <div class="uu-root-container">
        <div class="uu-header">
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
        <!--navbar, see navbar page-->
        <div class="uu-content">
            <!--content-->
        </div>
        <footer class="uu-footer">
            <div class="col-12 col-md-4">
                <img src="/uu-logo-en-white.svg" />
            </div>
            <div class="col-12 col-md-8 text-md-end">
                <p>
                    Some stuff, like contact info, copyright, code source or a menu
                </p>
            </div>
        </footer>
    </div>
</body>`),h=i(`<div class="uu-header">
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
</div>`),_=i(`<div class="uu-header justify-content-between">
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
</div>`),p=i(`<div class="uu-header">
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
</div>`);return(Be,Ie)=>{const m=c("Title"),b=c("Head"),r=y;return v(),f("div",x,[a(b,null,{default:t(()=>[a(m,null,{default:t(()=>[k]),_:1})]),_:1}),U,a(s(n),{placement:"right","sticky-sidebar":!0,"mobile-sticky-sidebar":!0},{"sidebar-button":t(()=>[T]),sidebar:t(()=>[a(w)]),default:t(()=>[$,N,V,a(s(l),{language:"html",class:"w-100"},{default:t(()=>[o(d(u.value),1)]),_:1})]),_:1}),a(s(n),{placement:"right","mobile-placement":"bottom","mobile-sticky-sidebar":!0},{"sidebar-button":t(()=>[B]),sidebar:t(()=>[I,a(s(l),{language:"scss"},{default:t(()=>[C]),_:1}),O]),default:t(()=>[S,F,H]),_:1}),a(s(n),{placement:"right","mobile-placement":"bottom","mobile-sticky-sidebar":!0},{"sidebar-button":t(()=>[L]),sidebar:t(()=>[A,a(s(l),{language:"scss",class:"w-100"},{default:t(()=>[j]),_:1})]),default:t(()=>[q,D,E,M,e("div",P,[e("div",Y,[z,e("div",G,[e("div",J,[a(s(l),{language:"html"},{default:t(()=>[o(d(h.value),1)]),_:1})])])]),e("div",R,[W,e("div",K,[e("div",Q,[a(s(l),{language:"html"},{default:t(()=>[o(d(_.value),1)]),_:1})])])]),e("div",X,[Z,e("div",ee,[e("div",oe,[a(s(l),{language:"html"},{default:t(()=>[o(d(p.value),1)]),_:1})])])])])]),_:1}),a(s(n),{placement:"right","mobile-placement":"bottom","mobile-sticky-sidebar":!0},{"sidebar-button":t(()=>[te]),sidebar:t(()=>[ae,se]),default:t(()=>[le,ne,ie,de,re,ce,ue,he,_e,pe,e("p",null,[me,a(r,{to:"/uu-layout/cover/"},{default:t(()=>[be]),_:1}),ge,a(r,{to:"/uu-layout/hero/"},{default:t(()=>[ve]),_:1}),fe,a(r,{to:"/uu-layout/sidebar/"},{default:t(()=>[ye]),_:1}),we])]),_:1}),a(s(n),{placement:"right","mobile-placement":"bottom","mobile-sticky-sidebar":!0},{"sidebar-button":t(()=>[xe]),sidebar:t(()=>[ke,a(s(l),{language:"scss"},{default:t(()=>[Ue]),_:1})]),default:t(()=>[Te,$e,Ne]),_:1})])}}});export{Fe as default};
