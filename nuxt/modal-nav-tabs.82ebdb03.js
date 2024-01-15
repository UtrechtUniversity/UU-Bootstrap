import{T as f,H as k}from"./components.f3fa7ca8.js";import{a as x,r,b as l,e as o,w as t,u as s,h as a,o as d,f as e,i as m,br as u,a4 as v,P as $,j as N}from"./entry.5a5681a3.js";import{v as b}from"./vue-prism-component.common.0901c70b.js";import{_ as q}from"./sidebar.vue_vue_type_script_setup_true_lang.8473573b.js";import"./composables.f5b69d13.js";const C={class:"uu-content"},T=a("div",{class:"uu-hero"},[a("h1",null,"Modal Nav Tabs")],-1),y=a("h2",{class:"d-lg-block d-none"},"Variables",-1),w=a("pre",null,`$modal-nav-tabs-gap: 0.625rem;
$modal-nav-tabs-color: inherit;
$modal-nav-tabs-bg: none;
$modal-nav-tabs-active-color: var(--bs-modal-color);
$modal-nav-tabs-active-bg: var(--bs-modal-bg);
$modal-nav-tabs-hover-color: $black;
$modal-nav-tabs-hover-bg: $gray-100;
                    `,-1),B=a("h3",{class:"mt-3"},"See also",-1),M={class:"nav"},V={class:"nav-item"},P={class:"nav-item"},S=a("p",null," Modal Nav Tabs is a variant of Bootstrap Nav Tabs for use in a Modal's header, creating a tabbed-modal effect. ",-1),j=a("p",null,[e(" Creating it is as simple as adding "),a("code",{class:"text-nowrap"},".modal-nav-tabs"),e(" to a "),a("code",{class:"text-nowrap"},".nav.nav-tabs"),e(" inside the modal header. It will automatically use the right background/text colors (header bg for inactive tabs, content bg for active tabs). ")],-1),H={class:"mt-3 mb-3"},I={class:"modal position-static d-block",tabindex:"-1"},D={class:"modal-dialog mt-0 mb-0"},E={class:"modal-content"},L={class:"modal-header"},U={class:"nav nav-tabs modal-nav-tabs"},z={class:"nav-item"},A={class:"nav-item"},F=a("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),G={class:"modal-body"},J={key:0},K={key:1},aa=x({__name:"modal-nav-tabs",setup(O){const i=r(1),_=r(`<div class="modal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <ul class="nav nav-tabs modal-nav-tabs">
                    <li class="nav-item">
                        <a href="#" class="nav-link active">
                            Active
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            Inactive
                        </a>
                    </li>
                </ul>
            </div>
            <div class="modal-body">
                <p>Modal body text goes here.</p>
            </div>
        </div>
    </div>
</div>`);return(Q,n)=>{const p=f,h=k,c=N;return d(),l("div",C,[o(h,null,{default:t(()=>[o(p,null,{default:t(()=>[e("Modal Nav Tabs | UU-Bootstrap docs")]),_:1})]),_:1}),T,o(s(q),{id:"buttons",placement:"right","mobile-placement":"bottom"},{"sidebar-button":t(()=>[e(" Variables ")]),sidebar:t(()=>[y,o(s(b),{language:"scss",class:"w-100"},{default:t(()=>[w]),_:1}),B,a("ul",M,[a("li",V,[o(c,{class:"nav-link",to:"https://getbootstrap.com/docs/5.2/components/modal/",target:"_blank"},{default:t(()=>[e(" Bootstrap modal docs ")]),_:1})]),a("li",P,[o(c,{class:"nav-link",to:"https://getbootstrap.com/docs/5.2/components/navs-tabs/",target:"_blank"},{default:t(()=>[e(" Bootstrap nav tabs docs ")]),_:1})])])]),default:t(()=>[S,j,a("div",H,[a("div",I,[a("div",D,[a("div",E,[a("div",L,[a("ul",U,[a("li",z,[a("a",{href:"#",class:m(["nav-link",s(i)===1?"active":""]),onClick:n[0]||(n[0]=u(g=>i.value=1,["prevent"]))}," Tab 1 ",2)]),a("li",A,[a("a",{href:"#",class:m(["nav-link",s(i)===2?"active":""]),onClick:n[1]||(n[1]=u(g=>i.value=2,["prevent"]))}," Tab 2 ",2)])]),F]),a("div",G,[s(i)===1?(d(),l("p",J," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac tempor orci, et imperdiet ipsum. Suspendisse hendrerit turpis id quam sagittis, eget rhoncus dui tincidunt. Praesent ullamcorper interdum aliquam. Etiam placerat, augue id venenatis laoreet, enim risus consectetur risus, sed accumsan massa dui at dui. Phasellus condimentum mi vitae turpis consectetur, non dapibus arcu sollicitudin. Sed eget congue justo. Curabitur tristique pharetra orci ac sollicitudin. Praesent malesuada dui quis tristique sollicitudin. Pellentesque nisi massa, ullamcorper id gravida sed, lacinia eget quam. ")):v("",!0),s(i)===2?(d(),l("p",K," Nullam sit amet quam sed nisi luctus pretium. Integer mattis non justo eget molestie. Nullam vestibulum libero sit amet maximus aliquam. Donec feugiat ante eu odio commodo eleifend id id nisl. Suspendisse rutrum leo et elit egestas dapibus. Vestibulum augue orci, interdum in sagittis sit amet, imperdiet a quam. Maecenas a tempor dui. ")):v("",!0)])])])])]),o(s(b),{language:"html"},{default:t(()=>[e($(s(_)),1)]),_:1})]),_:1})])}}});export{aa as default};
