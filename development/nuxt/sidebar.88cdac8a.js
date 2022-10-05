import{a as p,r as b,b as i,o as _,e as m,f as o,w as s,u as a,h as e,t as g,j as t,k as f,v as d}from"./entry.3abd7c6f.js";import{_ as l}from"./sidebar.vue_vue_type_script_setup_true_lang.193f980a.js";import y from"./uu-layout-nav.778605d5.js";const v={class:"uu-content"},w=t(" Sidebar | UU Layout | Portaldev Bootstrap theme docs "),k=t(" Sidebar "),x=e("h2",{class:"mt-3"}," Variables ",-1),S=e("pre",null,`$uu-sidebar-width: 350px;
$uu-sidebar-gap: 100px;
$uu-sidebar-background: $gray-200;
$uu-sidebar-breakpoint: lg;
$uu-sidebar-padding-x: 20px;
$uu-sidebar-padding-y: 20px;
$uu-sidebar-mobile-padding-y: 10px;
$uu-sidebar-header-padding-y: 10px;
$uu-sidebar-header-font-weight: 200;
$uu-sidebar-nav-padding-y: 7px;
$uu-sidebar-nav-padding-x: 0;
$uu-sidebar-nav-disabled-color: $gray-600;
$uu-sidebar-nav-active-font-weight: 600;
                    `,-1),T=e("h1",{class:"hdr-underlined"}," UU Layout Sidebar ",-1),$=e("p",null," The Sidebar is a responsive implementation of the sidebar seen on most UU sites. ",-1),C=e("p",null,[t(" The sidebar consists of a container containing the sidebar and the content. It's recommended to use the "),e("code",null,"aside"),t(" tag for the sidebar. The order of the tags inside the container do not matter, as they are positioned using CSS. ")],-1),N=e("h3",{class:"mt-3"}," Collapse and alternatives ",-1),B=t(" The example above uses a "),U=t(" Bootstrap Collapse "),I=t(" to hide the sidebar behind a toolbar button on smaller screens. This is the recommended usecase, but there are some situations where you might not want to use it for some reason. "),A=t(" There are two main alternatives: plain and offcanvas. Plain simply means you'd use nothing and display everything all the time. In this case, it's recommended to place the sidebar on the bottom in mobile. See "),L=t(" Modifiers. "),E=t(" Alternatively, you can wrap the sidebar content in an "),H=t(" OffCanvas. "),M=t(" This is an hypothetical alternative, and would probably involve some extra (S)CSS to make work nicely. "),P=e("h3",null,"Width",-1),V=e("p",null," The default width (and gap) of the sidebar is meant for regular (text) content. This might not be ideal for content that is wider (big tables for example). ",-1),W=e("p",null,[t(" If you need to make more space available for content, it's recommended to create a new CSS class that overrides the "),e("code",{class:"text-nowrap"},"--bs-uu-sidebar-width"),t(" and/or "),e("code",{class:"text-nowrap"},"--bs-uu-sidebar-gap"),t(" CSS variables. For example: ")],-1),D=e("pre",null,`.compact-sidebar {
    --bs-uu-sidebar-width: 250px;
    --bs-uu-sidebar-gap: 40px;
}`,-1),q=e("h2",{id:"modifiers",class:"mt-3"}," Modifiers ",-1),F=e("h3",null,"Placement",-1),j=e("p",null,[t(" By default, the sidebar will be placed on the left on 'desktop' and on the top on 'mobile'. This can be changed by adding "),e("code",{class:"text-nowrap"},".uu-sidebar-right"),t(" and "),e("code",{class:"text-nowrap"},".uu-sidebar-mobile-bottom"),t(" to the "),e("code",{class:"text-nowrap"},".uu-sidebar-container"),t(" element respectively. ")],-1),z=e("h3",null,"Sticky",-1),O=t(" The sidebar is setup to allow "),G=t(" 'sticky' behaviour "),J=t(" during scrolling. "),K=e("p",null," There are two of 'sticky' modifier classes, one for 'desktop' and one for 'mobile'. These classes do not affect the other variant, thus if you want both variants to 'stick' you need to add both! ",-1),Q=e("strong",null,"Desktop",-1),R=e("p",null,[t(" If you want the sidebar's content to 'stick' to the top when scrolling down the page, you can add "),e("code",{class:"text-nowrap"},".uu-sidebar-sticky"),t(" to the "),e("code",{class:"text-nowrap"},".uu-sidebar-container"),t(" element. ")],-1),X=e("div",{class:"alert alert-warning"},[t(" When using this class, you are required to wrap the sidebar's content in a single element under "),e("code",{class:"text-nowrap"},".uu-sidebar"),t(". If you use the recommended collapse method, this is already the case. ")],-1),Y={class:"alert alert-info"},Z=t(" Using "),ee=t(" linked headers "),te=t(" with this class looks a bit silly, I'd recommend against it. "),se=e("strong",{class:"d-block mt-3"},"Mobile",-1),oe=e("p",null,[t(" For mobile, one adds "),e("code",{class:"text-nowrap"},".uu-sidebar-mobile-sticky"),t(" to the "),e("code",{class:"text-nowrap"},".uu-sidebar-container"),t(" element. ")],-1),ae=e("p",null," This class works with both top and bottom positioning, which will stick the item top or bottom. ",-1),ne=e("div",{class:"alert alert-danger"}," Do not use this class if you don't use any way of hiding the sidebar's content on mobile! ",-1),ie=e("h3",{class:"mt-3"}," Hide on mobile ",-1),de=e("p",null,[t(" Not really a build-in modifier, but if so desired you can hide the sidebar on mobile by adding "),e("code",{class:"text-nowrap"},".d-none d-lg-block"),t(" to the "),e("code",{class:"text-nowrap"},".uu-sidebar"),t(" element. The component will cope. ")],-1),le=t(" See also "),re=e("h2",{class:"uu-sidebar-header-linked"}," See also ",-1),ce={class:"nav"},he={class:"nav-item"},ue=t(" Bootstrap Nav docs "),pe=e("h2",{class:"uu-sidebar-header-linked"}," Sidebar Nav ",-1),be=e("p",null," The sidebar also has custom styles applied to Bootstrap Nav components. They should be applied automatically, so you'll only have to follow the Bootstrap documentation (linked in the sidebar) ",-1),_e=e("p",null," The only caveat is that, for proper formatting, they should be directly preceded by a header element. ",-1),me=t(" Example header "),ge=e("h2",{class:"uu-sidebar-header-linked"}," Example header ",-1),fe=e("p",null," Nothing to see here, really. ",-1),ye=e("h2",{id:"linked-headers",class:"uu-sidebar-header-linked"},[t(" Linked headers "),e("span",{class:"badge rounded-pill bg-blue fs-6"},"Site-layout only")],-1),ve=e("p",null," Linked headers are 2 headers connected with a common underline crossing the gap between the content and the sidebar. ",-1),we=e("p",null,[t(" To achieve this effect, add the "),e("code",{class:"text-nowrap"},".uu-sidebar-header-linked"),t(" class to both headers (the content and sidebar headers). It is important that both elements have the same vertical position and height. ")],-1),ke=e("p",null,[t(" This is commonly achieved by using the same header tag (e.g. "),e("code",null,"h2"),t("). However, if your content header is and "),e("code",null,"h1"),t(" element, it's recommended you don't use the "),e("code",null,"h1"),t(" tag in the element. (As there should only be one per page)."),e("br"),t(" Instead, use a "),e("code",null,"h2"),t("/"),e("code",null,"div"),t(" with the "),e("code",null,".h1"),t(" class for the sidebar instead. ")],-1),xe=e("h3",null,"Multiple linked headers",-1),Se=e("p",null," As both elements need to have the same vertical position in the page, this effect is mostly limited to the first header of the sidebar. ",-1),Te=e("p",null," The easiest way to have multiple linked headers, is to have multiple Sidebar elements. (Which is what we do on this page). A potential downside is that you'll have multiple sidebar toggles on mobile. Although, it can actually work nicely in some cases. ",-1),$e=e("p",null,[t(" An alternative would be to somehow ensure the content above the second linked header is equal in height to the corresponding sidebar section. This documentation does not have an idea on exactly "),e("i",null,"how"),t(" you would do such a thing. ")],-1),Le=p({__name:"sidebar",setup(Ce){const r=b(`<div class="uu-sidebar-container">
    <aside class="uu-sidebar">
        <button class="uu-sidebar-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#exampleSidebar" aria-expanded="false">
            Show sidebar
        </button>
        <div id="exampleSidebar" class="collapse uu-sidebar-collapse">
            <h2>Sidebar</h2>
        </div>
    </aside>
    <div class="uu-sidebar-content">
        <p>This is content</p>
    </div>
</div>`);return(Ne,Be)=>{const c=i("Title"),h=i("Head"),u=i("Nuxtlink"),n=f;return _(),m("div",v,[o(h,null,{default:s(()=>[o(c,null,{default:s(()=>[w]),_:1})]),_:1}),o(a(l),{placement:"right","sticky-sidebar":!0,"mobile-sticky-sidebar":!0},{"sidebar-button":s(()=>[k]),sidebar:s(()=>[o(y),x,o(a(d),{language:"scss",class:"w-100"},{default:s(()=>[S]),_:1})]),default:s(()=>[T,$,C,o(a(d),{language:"html",class:"w-100"},{default:s(()=>[e("pre",null,g(r.value),1)]),_:1}),N,e("p",null,[B,o(u,{to:"https://getbootstrap.com/docs/5.2/components/collapse/",target:"_blank"},{default:s(()=>[U]),_:1}),I]),e("p",null,[A,o(n,{to:"#modifiers"},{default:s(()=>[L]),_:1})]),e("p",null,[E,o(n,{to:"https://getbootstrap.com/docs/5.2/components/offcanvas/",target:"_blank"},{default:s(()=>[H]),_:1}),M]),P,V,W,o(a(d),{language:"css",class:"w-100"},{default:s(()=>[D]),_:1}),q,F,j,z,e("p",null,[O,o(n,{to:"https://developer.mozilla.org/en-US/docs/Web/CSS/position#sticky",target:"_blank"},{default:s(()=>[G]),_:1}),J]),K,Q,R,X,e("div",Y,[Z,o(n,{to:"#linked-headers"},{default:s(()=>[ee]),_:1}),te]),se,oe,ae,ne,ie,de]),_:1}),o(a(l),{placement:"right","mobile-sticky-sidebar":!0},{"sidebar-button":s(()=>[le]),sidebar:s(()=>[re,e("ul",ce,[e("li",he,[o(n,{to:"https://getbootstrap.com/docs/5.2/components/navs-tabs/",target:"_blank",class:"nav-link"},{default:s(()=>[ue]),_:1})])])]),default:s(()=>[pe,be,_e]),_:1}),o(a(l),{placement:"right","mobile-sticky-sidebar":!0},{"sidebar-button":s(()=>[me]),sidebar:s(()=>[ge,fe]),default:s(()=>[ye,ve,we,ke,xe,Se,Te,$e]),_:1})])}}});export{Le as default};
