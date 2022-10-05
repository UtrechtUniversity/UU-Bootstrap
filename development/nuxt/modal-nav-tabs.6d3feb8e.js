import{a as k,r,b as m,o as n,e as l,f as e,w as t,u as d,h as a,i as u,p as v,q as _,j as s,t as x,k as q,v as b}from"./entry.3abd7c6f.js";import{_ as C}from"./sidebar.vue_vue_type_script_setup_true_lang.193f980a.js";const N={class:"uu-content"},$=s("Modal Nav Tabs | Portaldev Bootstrap theme docs"),y=a("div",{class:"uu-hero"},[a("h1",null,"Modal Nav Tabs")],-1),T=s(" Variables "),w=a("h2",{class:"d-lg-block d-none"}," Variables ",-1),B=a("pre",null,`$modal-nav-tabs-color: inherit;
$modal-nav-tabs-bg: none;
$modal-nav-tabs-active-color: var(--bs-modal-color);
$modal-nav-tabs-active-bg: var(--bs-modal-bg);
$modal-nav-tabs-hover-color: $black;
$modal-nav-tabs-hover-bg: $gray-100;
                    `,-1),M=a("h3",{class:"mt-3"}," See also ",-1),V={class:"nav"},P={class:"nav-item"},S=s(" Bootstrap modal docs "),j={class:"nav-item"},I=s(" Bootstrap nav tabs docs "),D=a("p",null," Modal Nav Tabs is a variant of Bootstrap Nav Tabs for use in a Modal's header, creating a tabbed-modal effect. ",-1),E=a("p",null,[s(" Creating it is as simple as adding "),a("code",{class:"text-nowrap"},".modal-nav-tabs"),s(" to a "),a("code",{class:"text-nowrap"},".nav.nav-tabs"),s(" inside the modal header. It will automatically use the right background/text colors (header bg for inactive tabs, content bg for active tabs). ")],-1),H={class:"mt-3 mb-3"},L={class:"modal position-static d-block",tabindex:"-1"},z={class:"modal-dialog mt-0 mb-0"},A={class:"modal-content"},F={class:"modal-header"},G={class:"nav nav-tabs modal-nav-tabs"},J={class:"nav-item"},K={class:"nav-item"},O=a("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),Q={class:"modal-body"},R={key:0},U={key:1},aa=k({__name:"modal-nav-tabs",setup(W){const o=r(1),p=r(`<div class="modal" tabindex="-1">
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
</div>`);return(X,i)=>{const h=m("Title"),g=m("Head"),c=q;return n(),l("div",N,[e(g,null,{default:t(()=>[e(h,null,{default:t(()=>[$]),_:1})]),_:1}),y,e(d(C),{id:"buttons",placement:"right","mobile-placement":"bottom"},{"sidebar-button":t(()=>[T]),sidebar:t(()=>[w,e(d(b),{language:"scss",class:"w-100"},{default:t(()=>[B]),_:1}),M,a("ul",V,[a("li",P,[e(c,{class:"nav-link",to:"https://getbootstrap.com/docs/5.2/components/modal/",target:"_blank"},{default:t(()=>[S]),_:1})]),a("li",j,[e(c,{class:"nav-link",to:"https://getbootstrap.com/docs/5.2/components/navs-tabs/",target:"_blank"},{default:t(()=>[I]),_:1})])])]),default:t(()=>[D,E,a("div",H,[a("div",L,[a("div",z,[a("div",A,[a("div",F,[a("ul",G,[a("li",J,[a("a",{href:"#",class:u(["nav-link",o.value===1?"active":""]),onClick:i[0]||(i[0]=v(f=>o.value=1,["prevent"]))}," Tab 1 ",2)]),a("li",K,[a("a",{href:"#",class:u(["nav-link",o.value===2?"active":""]),onClick:i[1]||(i[1]=v(f=>o.value=2,["prevent"]))}," Tab 2 ",2)])]),O]),a("div",Q,[o.value===1?(n(),l("p",R," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac tempor orci, et imperdiet ipsum. Suspendisse hendrerit turpis id quam sagittis, eget rhoncus dui tincidunt. Praesent ullamcorper interdum aliquam. Etiam placerat, augue id venenatis laoreet, enim risus consectetur risus, sed accumsan massa dui at dui. Phasellus condimentum mi vitae turpis consectetur, non dapibus arcu sollicitudin. Sed eget congue justo. Curabitur tristique pharetra orci ac sollicitudin. Praesent malesuada dui quis tristique sollicitudin. Pellentesque nisi massa, ullamcorper id gravida sed, lacinia eget quam. ")):_("",!0),o.value===2?(n(),l("p",U," Nullam sit amet quam sed nisi luctus pretium. Integer mattis non justo eget molestie. Nullam vestibulum libero sit amet maximus aliquam. Donec feugiat ante eu odio commodo eleifend id id nisl. Suspendisse rutrum leo et elit egestas dapibus. Vestibulum augue orci, interdum in sagittis sit amet, imperdiet a quam. Maecenas a tempor dui. ")):_("",!0)])])])])]),e(d(b),{language:"html"},{default:t(()=>[s(x(p.value),1)]),_:1})]),_:1})])}}});export{aa as default};
