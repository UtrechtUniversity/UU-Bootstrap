import{a as g,r as i,q as c,o as v,b as f,e as a,w as t,u as s,i as o,t as r,f as e,j as y,v as n}from"./entry-973ce1f8.mjs";import{_ as l}from"./sidebar-59c6cc6e.mjs";import{U as w}from"./uu-layout-nav-46a4ee06.mjs";const x={class:"uu-content"},k=o(" Overview | UU Layout | Portaldev Bootstrap theme docs "),U=e("div",{class:"uu-hero"},[e("h1",null,"UU Layout overview")],-1),T=o(" See also "),$=e("p",null," This library provides a set of classes/components that allow you to easily create a page that passes as a UU website. This page will cover the basics, with some larger sub-components having their own page. ",-1),V=e("p",null,[o(" You can use the rest of this library without UU layout if you just want the component stylings. However, all components under the UU layout section (identified by the "),e("code",null,"uu-"),o(" prefix) do require that you use the UU layout. ")],-1),C=e("p",null," Full example for a page: ",-1),I=o(" Variables "),N=e("h2",{class:"uu-sidebar-header-linked"}," Variables ",-1),B=e("pre",null,`$uu-container-width: 1600px;
$uu-border-color: $gray-400;
$uu-border-color-light: $gray-200;
$uu-border-color-dark: $gray-800;
                    `,-1),S=e("p",null,[o(" Container width refers to the "),e("i",null,"maximum width"),o(" of the container. The border variables set color to various borders used in a UU layout. ")],-1),O=e("h2",{class:"uu-sidebar-header-linked"}," Root container ",-1),F=e("p",null,[o(" The root element for all UU layout pages is the "),e("i",null,"root container"),o(", which should be a child div below the body tag. ")],-1),H=e("p",null,[o(" It's is a very simple flexbox with a max-width and white background. However, it also acts as the namespace for all components in the UU layout. Thus, all "),e("code",null,"uu-"),o(" prefixed classes only work inside one of these containers. ")],-1),L=o(" Variables "),j=e("h2",{class:"uu-sidebar-header-linked"}," Variables ",-1),q=e("pre",null,`$uu-header-padding-y: 10px;
$uu-header-font-size: 14px;
$uu-header-title-color: #094D8E;
$uu-header-border-gap: 20px;
// Also the header breakpoint
$uu-navbar-breakpoint: md;
                    `,-1),A=e("h2",{class:"uu-sidebar-header-linked"}," Header ",-1),D=e("p",null,[o(" The header refers to all the space above the navbar. It's setup to be fairly modular, but "),e("i",null,"should"),o(" at the very least contain the UU logo. Other elements often found inside the header are: langauge switcher, app name title, search box and a login/logout link. ")],-1),Y=e("p",null,[o(" It is important to note that the header is only visible above a certain breakpoint ("),e("code",null,"md"),o(" by default). Below that breakpoint, the navbar takes over as the topmost element. Thus, make sure you provide alternatives for mobile users for anything functional in the header. ")],-1),E=e("p",null,[o(" A header consists of a "),e("code",null,"div.uu-header"),o(" containing one or more "),e("code",null,"div.uu-header-row"),o(" elements. These rows are flex containers, so you have the option to use Bootstrap's flexbox helpers to layout your header, or using Bootstrap's columns ("),e("code",null,".col-4"),o(" etc) ")],-1),M={class:"accordion"},P={class:"accordion-item"},z=e("h2",{id:"headingOne",class:"accordion-header"},[e("button",{class:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}," Margin spaced example ")],-1),G={id:"collapseOne",class:"accordion-collapse collapse","aria-labelledby":"headingOne"},J={class:"accordion-body"},R={class:"accordion-item"},W=e("h2",{id:"headingTwo",class:"accordion-header"},[e("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"}," Flex spaced ")],-1),K={id:"collapseTwo",class:"accordion-collapse collapse","aria-labelledby":"headingTwo"},Q={class:"accordion-body"},X={class:"accordion-item"},Z=e("h2",{id:"headingThree",class:"accordion-header"},[e("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"}," Column spaced ")],-1),ee={id:"collapseThree",class:"accordion-collapse collapse","aria-labelledby":"headingThree"},oe={class:"accordion-body"},te=o(" Variables "),ae=e("h2",{class:"uu-sidebar-header-linked"}," Variables ",-1),se=e("p",null," None ",-1),ne=e("h2",{class:"uu-sidebar-header-linked"}," Content ",-1),le=e("p",null,[o(" Your main content goes here. Unlike the other elements, this is not an element in itself but rather a category of elements ("),e("i",null,"content elements"),o(") that go here. These "),e("i",null,"content elements"),o(" can and should be placed as a direct child of "),e("code",null,".uu-root-container"),o(". ")],-1),ie=e("h3",null,"UU Container",-1),re=e("p",null,[o(" Your main "),e("i",null,"content element"),o(" is "),e("code",null,".uu-container"),o(". This is a generic container similar to Bootstrap's "),e("code",null,".row"),o(", and should be used as such. It is recommended to use Bootstrap's "),e("code",null,".col-*"),o(" classes inside of this element for layouting, but any other flexbox based layouting is supported too. ")],-1),de=e("p",null,[o(" Tip: you can use Bootstrap's flex helpers like "),e("code",null,".flex-column"),o(" and "),e("code",null,".justify-content-*"),o(" on the container element for advanced flexbox stuff. ")],-1),ce=e("h3",null,"Fullwidth container",-1),ue=e("p",null,[o(" The regular UU Layout container has the nice 'spaced' code applied to it, limiting it to "),e("code",{class:"text-nowrap"},"$content-width"),o(". If you have an interface which for whatever reason needs more width, you can use "),e("code",{class:"text-nowrap"},".uu-fullwidth-container"),o(" instead. This container class will give you the entire width of the root container. ")],-1),he=e("div",{class:"alert alert-warning"}," Note: using this class is admitting your interface is not responsive and thus broken on smaller screens. It is recommended you explore responsive options before using this as a last-resort option. ",-1),pe=e("h3",null,[o("Other "),e("i",null,"content elements")],-1),_e=o(" Other content elements are "),me=o(" Cover "),be=o(", "),ge=o(" Hero "),ve=o(" and "),fe=o(" Sidebar "),ye=o(". "),we=e("h3",{class:"mt-3"}," Content container ",-1),xe=e("p",null,[o(" If for whatever reason you cannot actually place all your "),e("i",null,"content elements"),o(" directly under "),e("code",{class:"text-nowrap"},".uu-root-container"),o("*, you can use the "),e("code",{class:"text-nowrap"},".uu-content"),o(" class as an intermediate container. ")],-1),ke=e("p",null,[o(" This element sets just enough CSS rules to make sure the "),e("i",null,"content elements"),o(" still display correctly. ")],-1),Ue=e("p",null,[o(" * for example, if your framework needs one root element per page ("),e("i",null,"*cough* Vue *cough*"),o(") ")],-1),Te=o(" Variables "),$e=e("h2",{class:"uu-sidebar-header-linked"}," Variables ",-1),Ve=e("pre",null,`$uu-footer-padding-y: 40px;
$uu-footer-color: $gray-400;
$uu-footer-background-color: $gray-850;
                    `,-1),Ce=e("h2",{class:"uu-sidebar-header-linked"}," Footer ",-1),Ie=e("p",null," I'm tired, so a short summary: ",-1),Ne=e("ul",null,[e("li",null,"It's a footer"),e("li",null,[o("Use "),e("code",null,".uu-footer"),o(" on a "),e("code",null,"div"),o(" or (preferably) a "),e("code",null,"footer"),o(" element")]),e("li",null,"It's a flexbox thing, same layouting requirements as basically every other element described on this page"),e("li",null,[o(" It's convention to use the white/black UU logo as the leftmost element, but not required "),e("ul",null,[e("li",null,"For example, the corporate site has a sitemap there instead")])])],-1),je=g({__name:"index",setup(Be){const u=i(`<body>
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
        <!--content-->
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
</div>`),p=i(`<div class="uu-header justify-content-between">
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
</div>`),_=i(`<div class="uu-header">
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
</div>`);return(Se,Oe)=>{const m=c("Title"),b=c("Head"),d=y;return v(),f("div",x,[a(b,null,{default:t(()=>[a(m,null,{default:t(()=>[k]),_:1})]),_:1}),U,a(s(l),{placement:"right","sticky-sidebar":!0,"mobile-sticky-sidebar":!0},{"sidebar-button":t(()=>[T]),sidebar:t(()=>[a(w)]),default:t(()=>[$,V,C,a(s(n),{language:"html",class:"w-100"},{default:t(()=>[o(r(u.value),1)]),_:1})]),_:1}),a(s(l),{placement:"right","mobile-placement":"bottom","mobile-sticky-sidebar":!0},{"sidebar-button":t(()=>[I]),sidebar:t(()=>[N,a(s(n),{language:"scss"},{default:t(()=>[B]),_:1}),S]),default:t(()=>[O,F,H]),_:1}),a(s(l),{placement:"right","mobile-placement":"bottom","mobile-sticky-sidebar":!0},{"sidebar-button":t(()=>[L]),sidebar:t(()=>[j,a(s(n),{language:"scss",class:"w-100"},{default:t(()=>[q]),_:1})]),default:t(()=>[A,D,Y,E,e("div",M,[e("div",P,[z,e("div",G,[e("div",J,[a(s(n),{language:"html"},{default:t(()=>[o(r(h.value),1)]),_:1})])])]),e("div",R,[W,e("div",K,[e("div",Q,[a(s(n),{language:"html"},{default:t(()=>[o(r(p.value),1)]),_:1})])])]),e("div",X,[Z,e("div",ee,[e("div",oe,[a(s(n),{language:"html"},{default:t(()=>[o(r(_.value),1)]),_:1})])])])])]),_:1}),a(s(l),{placement:"right","mobile-placement":"bottom","mobile-sticky-sidebar":!0},{"sidebar-button":t(()=>[te]),sidebar:t(()=>[ae,se]),default:t(()=>[ne,le,ie,re,de,ce,ue,he,pe,e("p",null,[_e,a(d,{to:"/uu-layout/cover/"},{default:t(()=>[me]),_:1}),be,a(d,{to:"/uu-layout/hero/"},{default:t(()=>[ge]),_:1}),ve,a(d,{to:"/uu-layout/sidebar/"},{default:t(()=>[fe]),_:1}),ye]),we,xe,ke,Ue]),_:1}),a(s(l),{placement:"right","mobile-placement":"bottom","mobile-sticky-sidebar":!0},{"sidebar-button":t(()=>[Te]),sidebar:t(()=>[$e,a(s(n),{language:"scss"},{default:t(()=>[Ve]),_:1})]),default:t(()=>[Ce,Ie,Ne]),_:1})])}}});export{je as default};
