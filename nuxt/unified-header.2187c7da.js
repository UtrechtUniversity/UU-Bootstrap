import{T as f,H as _}from"./components.da906116.js";import{a as w,r as i,b as x,e as n,w as s,h as e,u as l,o as y,f as a,P as d,j as k}from"./entry.21858a4c.js";import{v as t}from"./vue-prism-component.common.6933ebda.js";import{U as T}from"./uu-layout-nav.4089922f.js";import{_ as $}from"./sidebar.vue_vue_type_script_setup_true_lang.41bd9a76.js";import"./composables.e4889afb.js";import"./_plugin-vue_export-helper.af303bb4.js";const B={class:"uu-content"},D=e("div",{class:"uu-hero",id:"intro"},[e("h1",null,"UU Layout Unified Header")],-1),U=e("h2",{class:"mt-3"},"On this page",-1),H={class:"nav"},E={class:"nav-item"},I={class:"nav-item"},L={class:"nav-item"},N={class:"nav-item"},S={class:"nav-item"},C={class:"nav-item"},A=e("h2",{class:"mt-3"},"Variables",-1),M=e("pre",null,`$uu-navbar-breakboint: md;
$uu-header-font-size;
$uu-unified-header-height: 4.5rem;
$uu-unified-header-mobile-height: 3rem;
$uu-unified-header-border-size: 0.0625rem;
$uu-unified-header-padding-x: 2rem;
$uu-unified-header-padding-mobile-x: 1rem;
$uu-unified-header-navlink-indicator-height: 0.3125rem;
$uu-unified-header-navlink-mobile-bg: $black;
$uu-unified-header-navlink-mobile-color: $white;
$uu-brand-padding-x: 2.5rem;
$uu-brand-padding-y: 1rem;
$uu-brand-logo-padding-x: 0.5rem;
$uu-brand-logo-padding-y: 0;
$uu-brand-sender-bg: $primary;
$uu-brand-sender-color: $black;
$uu-brand-sender-min-width: 220px;
$uu-brand-sender-max-width: 300px;
                    `,-1),P=e("p",null," The unified header and navbar is an alternative to the more common classic header, mostly used in (newer) UU web-tools. However, a variation is also used on informational websites. ",-1),V=e("p",null," As the name suggests, it combines the header and navbar into once component. It is more similar to Bootstrap's approach to the navbar, and in general behaves like a pre-styled version of one. ",-1),z=e("h3",{id:"basic-usage"},"Basic usage",-1),W=e("p",null," The HTML for the unified-header is very similar to Bootstrap's Navbar, but uses some other classes. ",-1),j=e("ul",null,[e("li",null,[a(" It has a "),e("code",null,".uu-unified-navbar"),a(" class on the "),e("code",null,".navbar"),a(" element. ")]),e("li",null,[a(" The internal container must be a "),e("code",null,".uu-unified-header-container"),a(". ")]),e("li",null,[a(" You don't need to use "),e("code",null,".navbar-expand{-sm|-md|-lg|-xl|-xxl}"),a(" on the "),e("code",null,".navbar"),a(". The UU navbar has all the CSS normally provided by those classes. "),e("ul",null,[e("li",null,[a(" If you want it to 'expand' on a different breakpoint, change the "),e("code",null,"$uu-navbar-breakpoint"),a(" SCSS variable. ")])])]),e("li",null,[a("The "),e("code",null,".navbar-brand"),a(" is somewhat different, see below.")])],-1),F=e("h3",{id:"brand",class:"mt-4"},"Brand",-1),Y=e("h4",null,"Basic",-1),O=e("p",null," Basic usage for the navbar brand is as shown below. This is a simple UU logo wrapped in a link. ",-1),q=e("h4",null,"Sender-blocks",-1),G=e("p",null," A variation on the normal navbar brand adds the 'sender-block'. This emulates the now common 'sender block' system used at the UU. This variation is intended for 'informational' websites. ",-1),J=e("p",null,[a(" Simply add a "),e("code",{class:"text-nowrap"},".uu-sender"),a(" element after "),e("code",{class:"text-nowrap"},".uu-logo"),a(". By default, the sender block will be yellow. This can be changed using Bootstrap's "),e("code",{class:"text-nowrap"},".text-bg-{color}"),a(" helpers. ")],-1),K=e("p",null," It is recommended that longer senders are spread over 2 lines using a break. However, more than two lines are not recommended. ",-1),Q=e("h3",{id:"text-elements",class:"mt-4"},"Text elements",-1),R=e("p",null,[a(" You can use "),e("code",null,".navbar-text"),a(" just like normal Bootstrap Navbars. Two common use-cases are 'app-names' and language switchers. ")],-1),X=e("p",null,[a(" Case should be given to responsiveness. By default, these elements are always visible. Use the Bootstrap visibility helpers to control when elements appear/disappear. Please note that the value of "),e("code",null,"display"),a(" should be "),e("code",null,"flex"),a(" or "),e("code",null,"none"),a(". ")],-1),Z=e("h4",null,"App name example",-1),ee=e("p",null,[a(" In this example, we only show the app name if we are at or above the "),e("code",null,"xl"),a(" breakpoint, to make sure we always have enough room for the menu. ")],-1),ae=e("p",null,"We also use a larger, black font to make it stand out from the menu.",-1),se=e("h4",null,"Language switcher example",-1),ne=e("p",null,"In this example, we always show the item, even on mobile viewports.",-1),le=e("h3",{class:"mt-4",id:"width-usage"},"Width usage",-1),te=e("p",null," The example above uses the normal version of the header. This means similar margins as the other UU Layout elements are used, to make sure the header is similarly aligned. ",-1),oe=e("p",null,[a(" In some cases, it might be preferable to use the 'full width' version, which takes all the horizontal space available. To do so, use the "),e("code",{class:"text-nowrap"},".uu-fullwidth-unified-header"),a(" class instead of "),e("code",{class:"text-nowrap"},"uu-unified-header")],-1),ie=e("div",{class:"alert alert-warning"}," This should only be done for design considerations, not space issues. If you are running into space issues, you are probably adding too much content to your header. Please consider using the classic header, nesting menu items or simplifying your header. ",-1),de=e("div",{class:"uu-hero text-bg-secondary",id:"examples"},[e("h2",null,"Examples")],-1),re=e("div",{class:"uu-container"},[e("h3",null,"Informational websites example")],-1),ue=["innerHTML"],ce={class:"uu-container"},he=e("p",null,"A full example for informational websites.",-1),pe=e("div",{class:"uu-container"},[e("h3",null,"Tool/web-app example")],-1),me=["innerHTML"],ve={class:"uu-container"},be=e("p",null,"A full example for online tools/webapps.",-1),De=w({__name:"unified-header",setup(ge){const c=i(`<div class="uu-unified-header navbar">
    <div class="uu-unified-header-container">
        <div class="navbar-brand uu-brand">
            <div class="uu-logo">
                <img src="uu-logo-en.svg"/>
            </div>
        </div>

        <div id="unified-header-nav" class="collapse navbar-collapse">
            <ul class="navbar-nav ms-auto">
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

        <button
            class="navbar-toggler border-left"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#unified-header-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"/>
        </button>
    </div>
</div>`),h=i(`<div class="navbar-brand uu-brand">
    <a href="http://www.uu.nl/" target="_blank" class="uu-logo">
        <img src="~/assets/uu-logo-en.svg"/>
    </a>
</div>`),p=i(`<div class="navbar-brand uu-brand">
    <a href="http://www.uu.nl/" target="_blank" class="uu-logo">
        <img src="~/assets/uu-logo-en.svg"/>
    </a>
    <div class="uu-sender text-bg-secondary">
        Centre For<br/>Digital Humanities
    </div>
</div>`),m=i(`<div
    class="navbar-text fs-4 text-black d-none d-lg-flex text-nowrap pe-4"
>
    Bootstrap theme
</div>`),v=i(`<a
    href="[..]"
    class="navbar-text border-left text-muted text-uppercase text-decoration-none"
>
    Nederlands
</a>`),r=i(`<div class="uu-unified-header navbar">
    <div class="uu-unified-header-container">
        <div class="navbar-brand uu-brand">
            <div class="uu-logo">
                <img src="/nuxt/assets/uu-logo-en.svg"/>
            </div>
            <div class="uu-sender text-bg-secondary">
                Centre For<br/>Digital Humanities
            </div>
        </div>

        <div id="unified-header-nav" class="collapse navbar-collapse">
            <ul class="navbar-nav ms-auto">
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

        <a
            href="[..]"
            class="navbar-text border-left text-muted text-uppercase text-decoration-none ms-4"
        >
            Nederlands
        </a>

        <button
            class="navbar-toggler border-left"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#unified-header-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"/>
        </button>
    </div>
</div>`),u=i(`<div class="uu-unified-header navbar">
    <div class="uu-unified-header-container">
        <div class="navbar-brand uu-brand me-0">
            <div class="uu-logo">
                <img src="/nuxt/assets/uu-roundel.svg"/>
            </div>
        </div>
        <div
            class="navbar-text fs-4 text-black d-none d-lg-flex text-nowrap pe-4"
        >
            Example portal
        </div>

        <div id="unified-header-nav" class="collapse navbar-collapse">
            <ul class="navbar-nav ms-auto me-auto">
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

        <a
            href="[..]"
            class="navbar-text border-left text-muted text-uppercase text-decoration-none ms-4"
        >
            Account
        </a>
        <a
            href="[..]"
            class="navbar-text border-left text-muted text-uppercase text-decoration-none ms-4"
        >
            Nederlands
        </a>

        <button
            class="navbar-toggler border-left"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#unified-header-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"/>
        </button>
    </div>
</div>`);return(fe,_e)=>{const b=f,g=_,o=k;return y(),x("div",B,[n(g,null,{default:s(()=>[n(b,null,{default:s(()=>[a(" Unified header | UU Layout | Portaldev Bootstrap theme docs ")]),_:1})]),_:1}),D,n($,{placement:"right","sticky-sidebar":!0,"mobile-sticky-sidebar":!0},{"sidebar-button":s(()=>[a(" See also ")]),sidebar:s(()=>[n(T),U,e("ul",H,[e("li",E,[n(o,{to:"#intro",class:"nav-link","exact-active-class":"-"},{default:s(()=>[a(" Intro ")]),_:1})]),e("li",I,[n(o,{to:"#basic-usage",class:"nav-link","exact-active-class":"-"},{default:s(()=>[a(" Basic usage ")]),_:1})]),e("li",L,[n(o,{to:"#brand",class:"nav-link","exact-active-class":"-"},{default:s(()=>[a(" Brand ")]),_:1})]),e("li",N,[n(o,{to:"#text-elements",class:"nav-link","exact-active-class":"-"},{default:s(()=>[a(" Text elements ")]),_:1})]),e("li",S,[n(o,{to:"#width-usage",class:"nav-link","exact-active-class":"-"},{default:s(()=>[a(" Width usage ")]),_:1})]),e("li",C,[n(o,{to:"#examples",class:"nav-link","exact-active-class":"-"},{default:s(()=>[a(" Examples ")]),_:1})])]),A,n(l(t),{language:"scss",class:"w-100"},{default:s(()=>[M]),_:1})]),default:s(()=>[P,V,e("p",null,[a(" Alternatively you can use the "),n(o,{to:"/uu-layout/classic-header/"},{default:s(()=>[a("Classic Header")]),_:1}),a(". By default, this documentation uses the classic header, but the unified header can be set using the 'Theme settings'. ")]),z,W,j,n(l(t),{language:"html",class:"w-100"},{default:s(()=>[a(d(l(c)),1)]),_:1}),F,Y,O,n(l(t),{language:"html",class:"w-100"},{default:s(()=>[a(d(l(h)),1)]),_:1}),q,G,J,K,n(l(t),{language:"html",class:"w-100"},{default:s(()=>[a(d(l(p)),1)]),_:1}),Q,R,X,Z,ee,ae,n(l(t),{language:"html",class:"w-100"},{default:s(()=>[a(d(l(m)),1)]),_:1}),se,ne,n(l(t),{language:"html",class:"w-100"},{default:s(()=>[a(d(l(v)),1)]),_:1}),le,te,oe,ie]),_:1}),de,re,e("div",{class:"w-100",innerHTML:l(r)},null,8,ue),e("div",ce,[he,n(l(t),{language:"html",class:"w-100"},{default:s(()=>[a(d(l(r)),1)]),_:1})]),pe,e("div",{class:"w-100",innerHTML:l(u)},null,8,me),e("div",ve,[be,n(l(t),{language:"html",class:"w-100"},{default:s(()=>[a(d(l(u)),1)]),_:1})])])}}});export{De as default};
