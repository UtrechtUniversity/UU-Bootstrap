import{a as g,r as n,b as r,o as f,e as y,f as a,w as t,h as e,u as s,j as o,t as i,k as w,v as l}from"./entry.3abd7c6f.js";import{_ as d}from"./sidebar.vue_vue_type_script_setup_true_lang.193f980a.js";import x from"./uu-layout-nav.778605d5.js";const k={class:"uu-content"},T=o(" Overview | UU Layout | Portaldev Bootstrap theme docs "),U=e("div",{class:"uu-hero"},[e("h1",null,"UU Layout overview")],-1),$=o(" See also "),C=e("p",null," This library provides a set of classes/components that allow you to easily create a page that passes as a UU website. This page will cover the basics, with some larger sub-components having their own page. ",-1),N=e("p",null,[o(" Starting from version 1.4.0, a preview of a second layout format for "),e("i",null,"web-tools"),o(" is also available. This layout uses the same HTML for all components, but some components aren't available. This will be clearly marked in the documentation. ")],-1),S=e("p",null,[o(" You can use the rest of this library without UU layout if you just want the component stylings. However, all components under the UU layout section (identified by the "),e("code",null,"uu-"),o(" prefix) do require that you use the UU layout. ")],-1),L=e("p",null," Full examples: ",-1),V={class:"accordion"},B={class:"accordion-item"},I=e("h2",{id:"siteLayout",class:"accordion-header"},[e("button",{class:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#siteCollapse","aria-expanded":"false","aria-controls":"siteCollapse"}," Site layout ")],-1),O={id:"siteCollapse",class:"accordion-collapse collapse","aria-labelledby":"siteLayout"},F={class:"accordion-body"},H={class:"accordion-item"},A=e("h2",{id:"toolLayout",class:"accordion-header"},[e("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#toolCollapse","aria-expanded":"false","aria-controls":"toolCollapse"}," Tool layout ")],-1),j={id:"toolCollapse",class:"accordion-collapse collapse","aria-labelledby":"toolLayout"},q={class:"accordion-body"},D=o(" Variables "),M=e("h2",{class:"uu-sidebar-header-linked"}," Variables ",-1),P=e("pre",null,`$uu-container-width: 1600px;
$uu-border-color: $gray-400;
$uu-border-color-light: $gray-200;
$uu-border-color-dark: $gray-800;
                    `,-1),E=e("p",null,[o(" Container width refers to the "),e("i",null,"maximum width"),o(" of the container. The border variables set color to various borders used in a UU layout. ")],-1),Y=e("h2",{class:"uu-sidebar-header-linked"}," Root container ",-1),z=e("p",null,[o(" The root element for all UU layout pages is the "),e("i",null,"root container"),o(", which should be a child div below the body tag with either the "),e("code",{class:"text-nowrap"},".uu-site-container"),o(" or "),e("code",{class:"text-nowrap"},".uu-tool-container"),e("br"),o(" The choice between "),e("em",null,"site-layout"),o(" and "),e("em",null,"tool-layout"),o(" is fully dictated by the chosen class. ")],-1),G=e("p",null,[o(" It's is a very simple container. However, it also acts as the namespace for all components in the UU layout. Thus, all "),e("code",null,"uu-"),o(" prefixed classes only work inside one of these containers. ")],-1),J=e("div",{class:"alert alert-info"},[o(" Previously, this component used the "),e("code",{class:"text-nowrap"},".uu-root-container"),o(" class. This is now replaced by "),e("code",{class:"text-nowrap"},".uu-site-container"),o(". The original class is now an alias for the new one, but will be removed in version 2.0. ")],-1),R=e("div",{class:"alert alert-warning"}," The tool layout is very much a preview, not all components have been updated to work with it gracefully. ",-1),W=o(" Variables "),K=e("h2",{class:"uu-sidebar-header-linked"}," Variables ",-1),Q=e("pre",null,`$uu-header-padding-y: 10px;
$uu-header-font-size: 14px;
$uu-header-title-color: #094D8E;
$uu-header-border-gap: 20px;
// Also the header breakpoint
$uu-navbar-breakpoint: md;
                    `,-1),X=e("h2",{class:"uu-sidebar-header-linked"},[o(" Header "),e("span",{class:"badge rounded-pill bg-blue fs-6"},"Site-layout only")],-1),Z=e("p",null,[o(" The header refers to all the space above the navbar. It's setup to be fairly modular, but "),e("i",null,"should"),o(" at the very least contain the UU logo. Other elements often found inside the header are: langauge switcher, app name title, search box and a login/logout link. ")],-1),ee=e("p",null,[o(" It is important to note that the header is only visible above a certain breakpoint ("),e("code",null,"md"),o(" by default). Below that breakpoint, the navbar takes over as the topmost element. Thus, make sure you provide alternatives for mobile users for anything functional in the header. ")],-1),oe=e("p",null,[o(" A header consists of a "),e("code",null,"div.uu-header"),o(" containing one or more "),e("code",null,"div.uu-header-row"),o(" elements. These rows are flex containers, so you have the option to use Bootstrap's flexbox helpers to layout your header, or using Bootstrap's columns ("),e("code",null,".col-4"),o(" etc) ")],-1),te={class:"accordion"},ae={class:"accordion-item"},se=e("h2",{id:"headingOne",class:"accordion-header"},[e("button",{class:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}," Margin spaced example ")],-1),le={id:"collapseOne",class:"accordion-collapse collapse","aria-labelledby":"headingOne"},ne={class:"accordion-body"},ie={class:"accordion-item"},de=e("h2",{id:"headingTwo",class:"accordion-header"},[e("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"}," Flex spaced ")],-1),ce={id:"collapseTwo",class:"accordion-collapse collapse","aria-labelledby":"headingTwo"},re={class:"accordion-body"},ue={class:"accordion-item"},he=e("h2",{id:"headingThree",class:"accordion-header"},[e("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"}," Column spaced ")],-1),pe={id:"collapseThree",class:"accordion-collapse collapse","aria-labelledby":"headingThree"},_e={class:"accordion-body"},be=e("div",{class:"alert alert-blue"}," Not available in the tool-layout, as all it's functions should be fulfilled by the navbar. ",-1),me=o(" Variables "),ve=e("h2",{class:"uu-sidebar-header-linked"}," Variables ",-1),ge=e("p",null," None ",-1),fe=e("h2",{class:"uu-sidebar-header-linked"}," Content ",-1),ye=e("p",null,[o(" An div with "),e("code",{class:"text-nowrap"},".uu-content"),o(" that should contain all "),e("em",null,"content elements"),o(". This div will automatically grow to fill the page if the actual content is not long enough. ")],-1),we=e("p",null,[o(" An overview of "),e("em",null,"content elements"),o(": ")],-1),xe=e("h3",null,"UU Container",-1),ke=e("p",null,[o(" Your main "),e("i",null,"content element"),o(" is "),e("code",null,".uu-container"),o(". This is a generic container similar to Bootstrap's "),e("code",null,".row"),o(", and should be used as such. It is recommended to use Bootstrap's "),e("code",null,".col-*"),o(" classes inside of this element for layouting, but any other flexbox based layouting is supported too. ")],-1),Te=e("p",null,[o(" Tip: you can use Bootstrap's flex helpers like "),e("code",null,".flex-column"),o(" and "),e("code",null,".justify-content-*"),o(" on the container element for advanced flexbox stuff. ")],-1),Ue=e("h3",null,"Fullwidth container",-1),$e=e("p",null,[o(" The regular UU Layout container has the nice 'spaced' code applied to it, limiting it to "),e("code",{class:"text-nowrap"},"$content-width"),o(". If you have an interface which for whatever reason needs more width, you can use "),e("code",{class:"text-nowrap"},".uu-fullwidth-container"),o(" instead. This container class will give you the entire width of the root container. ")],-1),Ce=e("div",{class:"alert alert-warning"}," Note: using this class is admitting your interface is not responsive and thus broken on smaller screens. It is recommended you explore responsive options before using this as a last-resort option. ",-1),Ne=e("h3",null,[o("Other "),e("i",null,"content elements")],-1),Se=o(" Other content elements are "),Le=o(" Cover "),Ve=o(", "),Be=o(" Hero "),Ie=o(" and "),Oe=o(" Sidebar "),Fe=o(". "),He=o(" Variables "),Ae=e("h2",{class:"uu-sidebar-header-linked"}," Variables ",-1),je=e("pre",null,`$uu-footer-padding-y: 40px;
$uu-footer-color: $gray-400;
$uu-footer-background-color: $gray-850;
                    `,-1),qe=e("h2",{class:"uu-sidebar-header-linked"},[o(" Footer "),e("span",{class:"badge rounded-pill bg-blue fs-6"},"Site-layout only")],-1),De=e("p",null," I'm tired, so a short summary: ",-1),Me=e("ul",null,[e("li",null,"It's a footer"),e("li",null,[o("Use "),e("code",null,".uu-footer"),o(" on a "),e("code",null,"div"),o(" or (preferably) a "),e("code",null,"footer"),o(" element")]),e("li",null,"It's a flexbox thing, same layouting requirements as basically every other element described on this page"),e("li",null,[o(" It's convention to use the white/black UU logo as the leftmost element, but not required "),e("ul",null,[e("li",null,"For example, the corporate site has a sitemap there instead")])])],-1),Re=g({__name:"index",setup(Pe){const u=n(`<body>
    <div class="uu-site-container">
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
</body>`),h=n(`<body>
    <div class="uu-tool-container">
        <!--navbar, see navbar page-->
        <div class="uu-content">
            <!--content-->
        </div>
    </div>
</body>`),p=n(`<div class="uu-header">
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
</div>`),_=n(`<div class="uu-header justify-content-between">
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
</div>`),b=n(`<div class="uu-header">
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
</div>`);return(Ee,Ye)=>{const m=r("Title"),v=r("Head"),c=w;return f(),y("div",k,[a(v,null,{default:t(()=>[a(m,null,{default:t(()=>[T]),_:1})]),_:1}),U,a(s(d),{placement:"right","sticky-sidebar":!0,"mobile-sticky-sidebar":!0},{"sidebar-button":t(()=>[$]),sidebar:t(()=>[a(x)]),default:t(()=>[C,N,S,L,e("div",V,[e("div",B,[I,e("div",O,[e("div",F,[a(s(l),{language:"html"},{default:t(()=>[o(i(u.value),1)]),_:1})])])]),e("div",H,[A,e("div",j,[e("div",q,[a(s(l),{language:"html"},{default:t(()=>[o(i(h.value),1)]),_:1})])])])])]),_:1}),a(s(d),{placement:"right","mobile-placement":"bottom","mobile-sticky-sidebar":!0},{"sidebar-button":t(()=>[D]),sidebar:t(()=>[M,a(s(l),{language:"scss"},{default:t(()=>[P]),_:1}),E]),default:t(()=>[Y,z,G,J,R]),_:1}),a(s(d),{placement:"right","mobile-placement":"bottom","mobile-sticky-sidebar":!0},{"sidebar-button":t(()=>[W]),sidebar:t(()=>[K,a(s(l),{language:"scss",class:"w-100"},{default:t(()=>[Q]),_:1})]),default:t(()=>[X,Z,ee,oe,e("div",te,[e("div",ae,[se,e("div",le,[e("div",ne,[a(s(l),{language:"html"},{default:t(()=>[o(i(p.value),1)]),_:1})])])]),e("div",ie,[de,e("div",ce,[e("div",re,[a(s(l),{language:"html"},{default:t(()=>[o(i(_.value),1)]),_:1})])])]),e("div",ue,[he,e("div",pe,[e("div",_e,[a(s(l),{language:"html"},{default:t(()=>[o(i(b.value),1)]),_:1})])])])]),be]),_:1}),a(s(d),{placement:"right","mobile-placement":"bottom","mobile-sticky-sidebar":!0},{"sidebar-button":t(()=>[me]),sidebar:t(()=>[ve,ge]),default:t(()=>[fe,ye,we,xe,ke,Te,Ue,$e,Ce,Ne,e("p",null,[Se,a(c,{to:"/uu-layout/cover/"},{default:t(()=>[Le]),_:1}),Ve,a(c,{to:"/uu-layout/hero/"},{default:t(()=>[Be]),_:1}),Ie,a(c,{to:"/uu-layout/sidebar/"},{default:t(()=>[Oe]),_:1}),Fe])]),_:1}),a(s(d),{placement:"right","mobile-placement":"bottom","mobile-sticky-sidebar":!0},{"sidebar-button":t(()=>[He]),sidebar:t(()=>[Ae,a(s(l),{language:"scss"},{default:t(()=>[je]),_:1})]),default:t(()=>[qe,De,Me]),_:1})])}}});export{Re as default};
