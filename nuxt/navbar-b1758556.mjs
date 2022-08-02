import{a as u,r as c,q as t,o as p,b as v,e as l,w as e,u as o,i as n,t as b,f as a,v as s}from"./entry-8282b18e.mjs";import{_ as m}from"./sidebar-4d53d4ae.mjs";import{U as h}from"./uu-layout-nav-49984768.mjs";const _={class:"uu-content"},g=n(" Navbar | UU Layout | Portaldev Bootstrap theme docs "),f=a("div",{class:"uu-hero"},[a("h1",null,"UU Layout Navbar")],-1),w=n(" Sidebar "),x=a("h2",{class:"mt-3"}," Variables ",-1),y=a("pre",null,`$uu-navbar-breakpoint: md;
$uu-navbar-mobile-height: 50px;
$uu-navbar-navlink-padding-x: 12px;
$uu-navbar-navlink-padding-y: 12px;
                    `,-1),U=a("p",null," The UU layout navbar is mostly identical to the regular Bootstrap navbar (which it extends); the only differences are: ",-1),k=a("ul",null,[a("li",null,[n(" It has a "),a("code",null,".uu-navbar"),n(" class on the "),a("code",null,".navbar"),n(" element. ")]),a("li",null,[n(" The internal container must be a "),a("code",null,".uu-navbar-container"),n(". ")]),a("li",null,[n(" You don't need to use "),a("code",null,".navbar-expand{-sm|-md|-lg|-xl|-xxl}"),n(" on the "),a("code",null,".navbar"),n(". The UU navbar has all the CSS normally provided by those classes. "),a("ul",null,[a("li",null,[n(" If you want it to 'expand' on a different breakpoint, change the "),a("code",null,"$uu-navbar-breakpoint"),n(" SCSS variable. ")])])]),a("li",null,[n(" The "),a("code",null,".navbar-brand"),n(" must only contain an "),a("code",null,"img"),n(" (of the UU logo). (Optionally wrapped in a link) ")])],-1),T=a("p",null," The rest is identical in use to the normal Navbar ",-1),D=a("p",null," Full example: ",-1),H=u({__name:"navbar",setup(N){const r=c(`<nav class="navbar uu-navbar">
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
</nav>`);return(S,C)=>{const i=t("Title"),d=t("Head");return p(),v("div",_,[l(d,null,{default:e(()=>[l(i,null,{default:e(()=>[g]),_:1})]),_:1}),f,l(o(m),{placement:"right"},{"sidebar-button":e(()=>[w]),sidebar:e(()=>[l(h),x,l(o(s),{language:"scss",class:"w-100"},{default:e(()=>[y]),_:1})]),default:e(()=>[U,k,T,D,l(o(s),{language:"html",class:"w-100"},{default:e(()=>[n(b(r.value),1)]),_:1})]),_:1})])}}});export{H as default};
