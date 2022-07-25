import{_ as b,b as p,c as m,f as e,e as t,w as o,i as a,j as g,d as f,r as i,a as _,v as y,t as d}from"./entry-84b004f5.mjs";import{S as w}from"./sidebar-adebce67.mjs";const x={},k={class:"w-100"},U=e("h2",null," UU Layout ",-1),T={class:"nav"},S={class:"nav-item"},$=a(" Overview "),V={class:"nav-item"},P=a(" Navbar "),N={class:"nav-item"},O=a(" Cover "),C={class:"nav-item"},B=a(" Hero "),L={class:"nav-item"},F=a(" Sidebar ");function H(c,r){const l=g;return p(),m("div",k,[U,e("ul",T,[e("li",S,[t(l,{to:"/uu-layout/",class:"nav-link"},{default:o(()=>[$]),_:1})]),e("li",V,[t(l,{to:"/uu-layout/navbar/",class:"nav-link"},{default:o(()=>[P]),_:1})]),e("li",N,[t(l,{to:"/uu-layout/cover/",class:"nav-link"},{default:o(()=>[O]),_:1})]),e("li",C,[t(l,{to:"/uu-layout/hero/",class:"nav-link"},{default:o(()=>[B]),_:1})]),e("li",L,[t(l,{to:"/uu-layout/sidebar/",class:"nav-link"},{default:o(()=>[F]),_:1})])])])}var j=b(x,[["render",H]]);const A=f({__name:"index",setup(c,{expose:r}){r();const l=i(`<body>
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
</body>`),s=i(`<div class="uu-header">
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
</div>`),u=i(""),h=i(""),n={full_page_code:l,headerMarginSpaced:s,headerFlexSpaced:u,headerGridSpaced:h,Prism:y,Sidebar:w,UuLayoutNav:j};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),D={class:"uu-content"},I=a(" Overview | UU Layout | Portaldev Bootstrap theme docs "),M=e("div",{class:"uu-hero"},[e("h1",null,"UU Layout overview")],-1),E=a(" See also "),G=e("p",null," This library provides a set of classes/components that allow you to easily create a page that passes as a UU website. This page will cover the basics, with some larger sub-components having their own page. ",-1),q=e("p",null,[a(" You can use the rest of this library without UU layout if you just want the component stylings. However, all components under the UU layout section (identified by the "),e("code",null,"uu-"),a(" prefix) do require that you use the UU layout. ")],-1),z=e("p",null," Full example for a page: ",-1),J=a(" Variables "),R=e("h2",{class:"uu-sidebar-header-linked"}," Variables ",-1),W=e("pre",null,`$uu-container-width: 1600px;
$uu-border-color: $gray-400;
$uu-border-color-light: $gray-200;
$uu-border-color-dark: $gray-800;
                    `,-1),Y=e("p",null,[a(" Container width refers to the "),e("i",null,"maximum width"),a(" of the container. The border variables set color to various borders used in a UU layout. ")],-1),K=e("h2",{class:"uu-sidebar-header-linked"}," Root container ",-1),Q=e("p",null,[a(" The root element for all UU layout pages is the "),e("i",null,"root container"),a(", which should be a child div below the body tag. ")],-1),X=e("p",null,[a(" It's is a very simple flexbox with a max-width and white background. However, it also acts as the namespace for all components in the UU layout. Thus, all "),e("code",null,"uu-"),a(" prefixed classes only work inside one of these containers. ")],-1),Z=a(" Variables "),ee=e("h2",{class:"uu-sidebar-header-linked"}," Variables ",-1),ae=e("pre",null,`$uu-header-padding-y: 10px;
$uu-header-font-size: 14px;
$uu-header-title-color: #094D8E;
$uu-header-border-gap: 20px;
// Also the header breakpoint
$uu-navbar-breakpoint: md;
                    `,-1),oe=e("h2",{class:"uu-sidebar-header-linked"}," Header ",-1),te=e("p",null,[a(" The header refers to all the space above the navbar. It's setup to be fairly modular, but "),e("i",null,"should"),a(" at the very least contain the UU logo. Other elements often found inside the header are: langauge switcher, app name title, search box and a login/logout link. ")],-1),se=e("p",null,[a(" It is important to note that the header is only visible above a certain breakpoint ("),e("code",null,"md"),a(" by default). Below that breakpoint, the navbar takes over as the topmost element. Thus, make sure you provide alternatives for mobile users for anything functional in the header. ")],-1),le=e("p",null,[a(" A header consists of a "),e("code",null,"div.uu-header"),a(" containing one or more "),e("code",null,"div.uu-header-row"),a(" elements. These rows are flex containers, so you have the option to use Bootstrap's flexbox helpers to layout your header, or using Bootstrap's columns ("),e("code",null,".col-4"),a(" etc) ")],-1),ne={class:"accordion"},ie={class:"accordion-item"},de=e("h2",{id:"headingOne",class:"accordion-header"},[e("button",{class:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}," Margin spaced example ")],-1),re={id:"collapseOne",class:"accordion-collapse collapse","aria-labelledby":"headingOne"},ce={class:"accordion-body"},ue={class:"accordion-item"},he=e("h2",{id:"headingTwo",class:"accordion-header"},[e("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"}," Flex spaced ")],-1),_e={id:"collapseTwo",class:"accordion-collapse collapse","aria-labelledby":"headingTwo"},be={class:"accordion-body"},pe={class:"accordion-item"},me=e("h2",{id:"headingThree",class:"accordion-header"},[e("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"}," Column spaced ")],-1),ve={id:"collapseThree",class:"accordion-collapse collapse","aria-labelledby":"headingThree"},ge={class:"accordion-body"},fe=a(" Variables "),ye=e("h2",{class:"uu-sidebar-header-linked"}," Variables ",-1),we=e("h2",{class:"uu-sidebar-header-linked"}," Content ",-1),xe=a(" Variables "),ke=e("h2",{class:"uu-sidebar-header-linked"}," Variables ",-1),Ue=e("h2",{class:"uu-sidebar-header-linked"}," Footer ",-1);function Te(c,r,l,s,u,h){const n=_("Title"),v=_("Head");return p(),m("div",D,[t(v,null,{default:o(()=>[t(n,null,{default:o(()=>[I]),_:1})]),_:1}),M,t(s.Sidebar,{placement:"right"},{"sidebar-button":o(()=>[E]),sidebar:o(()=>[t(s.UuLayoutNav)]),default:o(()=>[G,q,z,t(s.Prism,{language:"html",class:"w-100"},{default:o(()=>[a(d(s.full_page_code),1)]),_:1})]),_:1}),t(s.Sidebar,{placement:"right","mobile-placement":"bottom"},{"sidebar-button":o(()=>[J]),sidebar:o(()=>[R,t(s.Prism,{language:"scss"},{default:o(()=>[W]),_:1}),Y]),default:o(()=>[K,Q,X]),_:1}),t(s.Sidebar,{placement:"right","mobile-placement":"bottom"},{"sidebar-button":o(()=>[Z]),sidebar:o(()=>[ee,t(s.Prism,{language:"scss",class:"w-100"},{default:o(()=>[ae]),_:1})]),default:o(()=>[oe,te,se,le,e("div",ne,[e("div",ie,[de,e("div",re,[e("div",ce,[t(s.Prism,{language:"html"},{default:o(()=>[a(d(s.headerMarginSpaced),1)]),_:1})])])]),e("div",ue,[he,e("div",_e,[e("div",be,[t(s.Prism,{language:"html"},{default:o(()=>[a(d(s.headerFlexSpaced),1)]),_:1})])])]),e("div",pe,[me,e("div",ve,[e("div",ge,[t(s.Prism,{language:"html"},{default:o(()=>[a(d(s.headerGridSpaced),1)]),_:1})])])])])]),_:1}),t(s.Sidebar,{placement:"right","mobile-placement":"bottom"},{"sidebar-button":o(()=>[fe]),sidebar:o(()=>[ye]),default:o(()=>[we]),_:1}),t(s.Sidebar,{placement:"right","mobile-placement":"bottom"},{"sidebar-button":o(()=>[xe]),sidebar:o(()=>[ke]),default:o(()=>[Ue]),_:1})])}var Ve=b(A,[["render",Te]]);export{Ve as default};
