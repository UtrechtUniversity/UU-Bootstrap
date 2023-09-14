import{T as d,H as u}from"./components.da906116.js";import{v as t}from"./vue-prism-component.common.6933ebda.js";import{_ as c}from"./sidebar.vue_vue_type_script_setup_true_lang.41bd9a76.js";import{U as p}from"./uu-layout-nav.4089922f.js";import{a as m,r as v,b,e as l,w as n,u as o,h as a,o as h,f as e,P as _}from"./entry.21858a4c.js";import"./composables.e4889afb.js";import"./_plugin-vue_export-helper.af303bb4.js";const f={class:"uu-content"},g=a("div",{class:"uu-hero"},[a("h1",null,"UU Layout Navbar")],-1),w=a("h2",{class:"mt-3"},"Variables",-1),x=a("pre",null,`$uu-navbar-breakpoint: md;
$uu-navbar-mobile-height: 3.125rem;
$uu-navbar-navlink-padding-x: .75rem;
$uu-navbar-navlink-padding-y: .75rem;
                    `,-1),y=a("p",null," The UU layout navbar is mostly identical to the regular Bootstrap navbar (which it extends); the only differences are: ",-1),U=a("ul",null,[a("li",null,[e("It has a "),a("code",null,".uu-navbar"),e(" class on the "),a("code",null,".navbar"),e(" element.")]),a("li",null,[e(" The internal container must be a "),a("code",null,".uu-navbar-container"),e(". ")]),a("li",null,[e(" You don't need to use "),a("code",null,".navbar-expand{-sm|-md|-lg|-xl|-xxl}"),e(" on the "),a("code",null,".navbar"),e(". The UU navbar has all the CSS normally provided by those classes. "),a("ul",null,[a("li",null,[e(" If you want it to 'expand' on a different breakpoint, change the "),a("code",null,"$uu-navbar-breakpoint"),e(" SCSS variable. ")])])]),a("li",null,[e(" The "),a("code",null,".navbar-brand"),e(" must only contain an "),a("code",null,"img"),e(" (of the UU logo). (Optionally wrapped in a link) ")])],-1),k=a("p",null,"The rest is identical in use to the normal Navbar",-1),T=a("p",null,"Full example:",-1),E=m({__name:"navbar",setup(D){const s=v(`<nav class="navbar uu-navbar">
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
</nav>`);return(N,S)=>{const r=d,i=u;return h(),b("div",f,[l(i,null,{default:n(()=>[l(r,null,{default:n(()=>[e(" Navbar | UU Layout | Portaldev Bootstrap theme docs ")]),_:1})]),_:1}),g,l(o(c),{placement:"right"},{"sidebar-button":n(()=>[e(" Sidebar ")]),sidebar:n(()=>[l(p),w,l(o(t),{language:"scss",class:"w-100"},{default:n(()=>[x]),_:1})]),default:n(()=>[y,U,k,T,l(o(t),{language:"html",class:"w-100"},{default:n(()=>[e(_(o(s)),1)]),_:1})]),_:1})])}}});export{E as default};
