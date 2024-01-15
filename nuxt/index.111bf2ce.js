import{T as h,H as _}from"./components.f3fa7ca8.js";import{a as f,r as a,b as g,e as o,w as s,u as n,a9 as v,o as S,f as t,P as i,h as e,j as b}from"./entry.5a5681a3.js";import{v as r}from"./vue-prism-component.common.0901c70b.js";import{_ as y}from"./sidebar.vue_vue_type_script_setup_true_lang.8473573b.js";import"./composables.f5b69d13.js";const U=""+new URL("cover3.6b368ee3.jpg",import.meta.url).href,C={class:"uu-content"},w=v('<div class="uu-cover align-items-center"><img class="uu-cover-image" alt="cover" src="'+U+'"><div class="uu-cover-copyright"> Photo by <a href="https://unsplash.com/es/@lievemax?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Lieve Ransijn</a> on <a href="https://unsplash.com/photos/WunbySkHf54?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></div><div class="uu-cover-hero" id="index"><h1>UU-Bootstrap</h1></div></div>',1),x=e("h2",null,"Navigation",-1),T=e("ul",{class:"nav"},[e("li",{class:"nav-item"},[e("a",{href:"#index",class:"nav-link"}," Home ")]),e("li",{class:"nav-item"},[e("a",{href:"#getting-started",class:"nav-link"}," Getting started "),e("ul",{class:"nav"},[e("li",{class:"nav-item"},[e("a",{href:"#CSS",class:"nav-link"}," CSS "),e("ul",{class:"nav"},[e("li",{class:"nav-item"},[e("a",{href:"#using-SCSS",class:"nav-link"}," Using SCSS ")]),e("li",{class:"nav-item"},[e("a",{href:"#using-CSS",class:"nav-link"}," Using pre-compiled CSS ")])])]),e("li",{class:"nav-item"},[e("a",{href:"#fonts",class:"nav-link"}," Fonts ")]),e("li",{class:"nav-item"},[e("a",{href:"#js",class:"nav-link"}," JavaScript ")]),e("li",{class:"nav-item"},[e("a",{href:"#partial-import",class:"nav-link"}," (Advanced) Reducing bundle size ")])])])],-1),k=e("h2",{class:"mt-4"},"Copyright",-1),B=e("p",{class:"mt-2"}," All files with a copyright header are available under the EUPL v1.2 license. ",-1),I=e("p",null,"Welcome to the docs (/dev environment) for UU-Bootstrap!",-1),j=e("p",null," This documentation can be used to review changes from standard Bootstrap, extra components and more! ",-1),N=e("h2",{id:"getting-started",class:"hdr-underlined"},"Getting started",-1),H=e("p",null," The theme can be used as part of your larger SCSS setup, or standalone using pre-compiled CSS. ",-1),P=e("p",null," Bootstrap 5 is included in this library (either as a dependency or bundled), you don't need to import it's CSS separately. The JS side does need manual loading, more info down below. ",-1),A=e("h2",{id:"CSS",class:"hdr-underlined"},"CSS",-1),L=e("h3",{id:"using-SCSS",class:"mt-3"},"Using SCSS (recommended)",-1),z=e("p",null,"Using SCSS is recommended for easily extending and overriding variables.",-1),V=e("p",null,[t(" Add the library using yarn, replacing "),e("code",null,"<tag>"),t(" with the latest release tag. (Or leave out the tag to track develop) ")],-1),G=e("p",{class:"mt-3"},"Then, in your main SASS file, include the main file:",-1),J=e("p",{class:"mt-3"}," This will import the entire project into your SCSS setup. If you use a bundler and are not planning on adding and/or customizing anything, you can also insert the file above directly into your bundler SCSS settings. ",-1),O=e("p",null,[t(" If you only want to use parts of the project, please see "),e("a",{href:"#partial-import"}," this section ")],-1),R=e("h3",{id:"using-CSS",class:"mt-4"},"Using pre-compiled CSS",-1),W=e("p",null,[t(" If you don't want to SASS, you can simply download the compiled versions from the "),e("a",{href:"https://github.com/UtrechtUniversity/UU-Bootstrap/releases"}," releases page "),t(" on GitHub. ")],-1),$=e("p",null," There are 2 variants included, 'full' and 'lite'. The lite version does not include the components listed under 'UU-Layout', and is intended to be used for projects that don't use the full UU-style website layout. ",-1),q=e("h2",{id:"fonts",class:"mt-3 hdr-underlined"},"Fonts",-1),E=e("p",null,[t(" By default, we expect fonts to be hosted from "),e("code",null,"/fonts/{font-name}"),t(". This can be overriden by the "),e("code",null,"$merriweather-font-dir"),t(" and "),e("code",null,"$open-sans-font-dir"),t(" Sass variables. ")],-1),F=e("h2",{id:"js",class:"hdr-underlined"},"JavaScript",-1),Y=e("p",null,[t(" The Bootstrap javascript files aren't bundled with this project. You'll either have to retrieve them from "),e("code",null,"node_modules"),t(" (if using sass/yarn), or download them from Bootstrap's website. ")],-1),D=e("h2",{id:"partial-import",class:"hdr-underlined"},"(Advanced) reducing bundle size",-1),M=e("p",null," If you want more control over what is included inside the final compiled CSS, you can also create a custom import file that only includes the parts you want. This is mostly useful to reduce bundle size. ",-1),ne=f({__name:"index",setup(K){const l=a(`# Using SSH
yarn add "git+ssh://git@github.com:UtrechtUniversity/UU-Bootstrap.git#&lt;tag&gt;"
# Using HTTPS
yarn add "git+https://github.com/UtrechtUniversity/UU-Bootstrap.git#&lt;tag&gt;"`),d=a(`// Put any variable overrides here

// Import the library
@import "node_modules/uu-bootstrap/scss/bootstrap";`),c=a(`// 1. Import banners for copyright notices
@import "node_modules/bootstrap/scss/mixins/banner";
@include bsBanner("");

// 2. Import the configuration data
@import "node_modules/uu-bootstrap/scss/configuration";

// 3. Include any config overrides here

// 4. Import font configuration
@import "node_modules/uu-bootstrap/scss/fonts";

// 5. Include remainder of required Bootstrap files
@import "node_modules/bootstrap/scss/helpers";
@import "node_modules/bootstrap/scss/utilities/api";

// 6. Optionally include any components here

// Note: this imports the entirety of bootstrap, you can replace further
// reduce that. See 'scss/components/bootstrap/_index.scss'
@import "node_modules/uu-bootstrap/scss/components/bootstrap";

@import "node_modules/uu-bootstrap/scss/components/text";
@import "node_modules/uu-bootstrap/scss/components/code";
@import "node_modules/uu-bootstrap/scss/components/stepper";
@import "node_modules/uu-bootstrap/scss/components/tiles";
@import "node_modules/uu-bootstrap/scss/components/modal-nav-tabs";

// Note: this imports the entirety of uu-layout, you can replace further
// reduce that. See 'scss/components/uu-layout/_index.scss
@import "node_modules/uu-bootstrap/scss/components/uu-layout";
`);return(Q,X)=>{const u=h,p=_,m=b;return S(),g("div",C,[o(p,null,{default:s(()=>[o(u,null,{default:s(()=>[t("UU-Bootstrap docs")]),_:1})]),_:1}),w,o(n(y),{id:"content",placement:"left","mobile-placement":"bottom","sticky-sidebar":!0},{"sidebar-button":s(()=>[t(" Navigation ")]),sidebar:s(()=>[x,T,k,B]),default:s(()=>[I,j,N,H,P,A,L,z,V,o(n(r),{language:"bash",class:"w-100"},{default:s(()=>[t(i(n(l)),1)]),_:1}),G,o(n(r),{language:"scss",class:"w-100"},{default:s(()=>[t(i(n(d)),1)]),_:1}),J,O,R,W,$,q,e("p",null,[t(" We don't ship the required fonts (Open Sans and Merriweather) with this library. Please supply them yourself. "),o(m,{to:"https://google-webfonts-helper.herokuapp.com/fonts",target:"_blank"},{default:s(()=>[t(" You can download them easily here. ")]),_:1})]),E,F,Y,D,M,e("p",null,[o(n(r),{language:"scss"},{default:s(()=>[t(i(n(c)),1)]),_:1})])]),_:1})])}}});export{ne as default};
