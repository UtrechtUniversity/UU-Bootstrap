import{T as d,H as u}from"./components.f3fa7ca8.js";import{v as t}from"./vue-prism-component.common.0901c70b.js";import{_ as c}from"./sidebar.vue_vue_type_script_setup_true_lang.8473573b.js";import{U as p}from"./uu-layout-nav.e41ed40b.js";import{a as m,r as b,b as v,e as l,w as e,u as o,h as a,o as h,f as n,P as _}from"./entry.5a5681a3.js";import"./composables.f5b69d13.js";import"./_plugin-vue_export-helper.af303bb4.js";const f={class:"uu-content"},g=a("div",{class:"uu-hero"},[a("h1",null,"UU Layout Navbar")],-1),w=a("h2",{class:"mt-3"},"Variables",-1),x=a("pre",null,`$uu-navbar-breakpoint: md;
$uu-navbar-mobile-height: 3.125rem;
$uu-navbar-navlink-padding-x: .75rem;
$uu-navbar-navlink-padding-y: .75rem;
                    `,-1),y=a("p",null," The UU layout navbar is mostly identical to the regular Bootstrap navbar (which it extends); the only differences are: ",-1),U=a("ul",null,[a("li",null,[n("It has a "),a("code",null,".uu-navbar"),n(" class on the "),a("code",null,".navbar"),n(" element.")]),a("li",null,[n(" The internal container must be a "),a("code",null,".uu-navbar-container"),n(". ")]),a("li",null,[n(" You don't need to use "),a("code",null,".navbar-expand{-sm|-md|-lg|-xl|-xxl}"),n(" on the "),a("code",null,".navbar"),n(". The UU navbar has all the CSS normally provided by those classes. "),a("ul",null,[a("li",null,[n(" If you want it to 'expand' on a different breakpoint, change the "),a("code",null,"$uu-navbar-breakpoint"),n(" SCSS variable. ")])])]),a("li",null,[n(" The "),a("code",null,".navbar-brand"),n(" must only contain an "),a("code",null,"img"),n(" (of the UU logo). (Optionally wrapped in a link) ")])],-1),k=a("p",null,"The rest is identical in use to the normal Navbar",-1),T=a("p",null,"Full example:",-1),I=m({__name:"navbar",setup(D){const s=b(`<nav class="navbar uu-navbar">
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
</nav>`);return(N,S)=>{const r=d,i=u;return h(),v("div",f,[l(i,null,{default:e(()=>[l(r,null,{default:e(()=>[n(" Navbar | UU Layout | UU-Bootstrap docs ")]),_:1})]),_:1}),g,l(o(c),{placement:"right"},{"sidebar-button":e(()=>[n(" Sidebar ")]),sidebar:e(()=>[l(p),w,l(o(t),{language:"scss",class:"w-100"},{default:e(()=>[x]),_:1})]),default:e(()=>[y,U,k,T,l(o(t),{language:"html",class:"w-100"},{default:e(()=>[n(_(o(s)),1)]),_:1})]),_:1})])}}});export{I as default};
