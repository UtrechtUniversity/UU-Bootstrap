<!--
Copyright 2022, 2023 Utrecht University

Licensed under the EUPL, Version 1.2 only
You may not use this work except in compliance with the
Licence.
A copy of the Licence is provided in the 'LICENCE' file in this project.
You may also obtain a copy of the Licence at:

https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12

Unless required by applicable law or agreed to in
writing, software distributed under the Licence is
distributed on an "AS IS" basis,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.
See the Licence for the specific language governing
permissions and limitations under the Licence.
-->
<script lang="ts" setup>
import Prism from 'vue-prism-component';
import Sidebar from '@/components/sidebar';
import UuLayoutNav from "~/components/uu-layout-nav.vue";

const minimalExample = ref(`<div class="uu-sidebar-container">
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
</div>`);
</script>
<template>
    <div class="uu-content">
        <Head>
            <Title>
                Sidebar | UU Layout | Portaldev Bootstrap theme docs
            </Title>
        </Head>
        <div class="uu-hero">
            <h1>UU Layout Sidebar</h1>
        </div>

        <Sidebar
            placement="right"
            :sticky-sidebar="true"
            :mobile-sticky-sidebar="true"
        >
            <template #sidebar-button>
                Sidebar
            </template>
            <template #sidebar>
                <uu-layout-nav />
                <h2 class="mt-3">
                    Variables
                </h2>
                <Prism language="scss" class="w-100">
                    <pre>
$uu-sidebar-width: 21.875rem;
$uu-sidebar-gap: 6.25rem;
$uu-sidebar-background: $gray-200;
$uu-sidebar-breakpoint: lg;
$uu-sidebar-padding-x: 1.25rem;
$uu-sidebar-padding-y: 1.25rem;
$uu-sidebar-mobile-padding-y: .625rem;
$uu-sidebar-header-padding-y: .625rem;
$uu-sidebar-header-font-weight: 200;
$uu-sidebar-nav-padding-y: .4375rem;
$uu-sidebar-nav-padding-x: 0;
$uu-sidebar-nav-disabled-color: $gray-600;
$uu-sidebar-nav-active-font-weight: 600;
                    </pre>
                </Prism>
            </template>
            <p>
                The Sidebar is a responsive implementation of the sidebar seen
                on most UU sites.
            </p>
            <p>
                The sidebar consists of a container containing the sidebar and
                the content. It's recommended to use the <code>aside</code> tag
                for the sidebar. The order of the tags inside the container do
                not matter, as they are positioned using CSS.
            </p>
            <Prism language="html" class="w-100">
                <pre>{{ minimalExample }}</pre>
            </Prism>
            <h3 class="mt-3">
                Collapse and alternatives
            </h3>
            <p>
                The example above uses a
                <Nuxtlink
                    to="https://getbootstrap.com/docs/5.2/components/collapse/"
                    target="_blank"
                >
                    Bootstrap Collapse
                </Nuxtlink>
                to hide the sidebar behind a toolbar button on smaller screens.
                This is the recommended usecase, but there are some situations
                where you might not want to use it for some reason.
            </p>
            <p>
                There are two main alternatives: plain and offcanvas. Plain
                simply means you'd use nothing and display everything all the
                time. In this case, it's recommended to place the sidebar on
                the bottom in mobile. See <NuxtLink to="#modifiers">
                    Modifiers.
                </NuxtLink>
            </p>
            <p>
                Alternatively, you can wrap the sidebar content in an <NuxtLink
                    to="https://getbootstrap.com/docs/5.2/components/offcanvas/"
                    target="_blank"
                >
                    OffCanvas.
                </NuxtLink>
                This is an hypothetical alternative, and would probably involve
                some extra (S)CSS to make work nicely.
            </p>
            <h3>Width</h3>
            <p>
                The default width (and gap) of the sidebar is meant for regular
                (text) content. This might not be ideal for content that is
                wider (big tables for example).
            </p>
            <p>
                If you need to make more space available for content, it's
                recommended to create a new CSS class that overrides the
                <code class="text-nowrap">--bs-uu-sidebar-width</code> and/or
                <code class="text-nowrap">--bs-uu-sidebar-gap</code> CSS
                variables. For example:
            </p>
            <Prism language="css" class="w-100">
                <pre>
.compact-sidebar {
    --bs-uu-sidebar-width: 16rem;
    --bs-uu-sidebar-gap: 2.5rem;
}</pre>
            </Prism>
            <h2 id="modifiers" class="mt-3">
                Modifiers
            </h2>
            <h3>Placement</h3>
            <p>
                By default, the sidebar will be placed on the left on 'desktop'
                and on the top on 'mobile'. This can be changed by adding
                <code class="text-nowrap">.uu-sidebar-right</code> and
                <code class="text-nowrap">.uu-sidebar-mobile-bottom</code>
                to the <code class="text-nowrap">.uu-sidebar-container</code>
                element respectively.
            </p>
            <h3>Sticky</h3>
            <p>
                The sidebar is setup to allow <NuxtLink
                    to="https://developer.mozilla.org/en-US/docs/Web/CSS/position#sticky"
                    target="_blank"
                >
                    'sticky' behaviour
                </NuxtLink> during scrolling.
            </p>
            <p>
                There are two of 'sticky' modifier classes, one for 'desktop'
                and one for 'mobile'. These classes do not affect the other
                variant, thus if you want both variants to 'stick' you need to
                add both!
            </p>
            <strong>Desktop</strong>
            <p>
                If you want the sidebar's content to 'stick' to the top when
                scrolling down the page, you can add
                <code class="text-nowrap">.uu-sidebar-sticky</code> to the
                <code class="text-nowrap">.uu-sidebar-container</code>
                element.
            </p>
            <div class="alert alert-warning">
                When using this class, you are required to wrap the sidebar's
                content in a single element under
                <code class="text-nowrap">.uu-sidebar</code>. If you use the
                recommended collapse method, this is already the case.
            </div>
            <div class="alert alert-info">
                Using <NuxtLink to="#linked-headers">
                    linked headers
                </NuxtLink> with this class looks a bit silly, I'd recommend
                against it.
            </div>
            <strong class="d-block mt-3">Mobile</strong>
            <p>
                For mobile, one adds
                <code class="text-nowrap">.uu-sidebar-mobile-sticky</code> to
                the <code class="text-nowrap">.uu-sidebar-container</code>
                element.
            </p>
            <p>
                This class works with both top and bottom positioning, which
                will stick the item top or bottom.
            </p>
            <div class="alert alert-danger">
                Do not use this class if you don't use any way of hiding the
                sidebar's content on mobile!
            </div>
            <h3 class="mt-3">
                Hide on mobile
            </h3>
            <p>
                Not really a build-in modifier, but if so desired you can hide
                the sidebar on mobile by adding
                <code class="text-nowrap">.d-none d-lg-block</code>
                to the <code class="text-nowrap">.uu-sidebar</code> element.
                The component will cope.
            </p>
        </Sidebar>
        <Sidebar
            placement="right"
            :mobile-sticky-sidebar="true"
        >
            <template #sidebar-button>
                See also
            </template>
            <template #sidebar>
                <h2 class="uu-sidebar-header-linked">
                    See also
                </h2>
                <ul class="nav">
                    <li class="nav-item">
                        <NuxtLink
                            to="https://getbootstrap.com/docs/5.2/components/navs-tabs/"
                            target="_blank"
                            class="nav-link"
                        >
                            Bootstrap Nav docs
                        </NuxtLink>
                    </li>
                </ul>
            </template>
            <h2 class="uu-sidebar-header-linked">
                Sidebar Nav
            </h2>
            <p>
                The sidebar also has custom styles applied to Bootstrap Nav
                components. They should be applied automatically, so you'll
                only have to follow the Bootstrap documentation (linked in the
                sidebar)
            </p>
            <p>
                The only caveat is that, for proper formatting, they should be
                directly preceded by a header element.
            </p>
        </Sidebar>
        <Sidebar
            placement="right"
            :mobile-sticky-sidebar="true"
        >
            <template #sidebar-button>
                Example header
            </template>
            <template #sidebar>
                <h2 class="uu-sidebar-header-linked">
                    Example header
                </h2>
                <p>
                    Nothing to see here, really.
                </p>
            </template>
            <h2 id="linked-headers" class="uu-sidebar-header-linked">
                Linked headers
            </h2>
            <p>
                Linked headers are 2 headers connected with a common underline
                crossing the gap between the content and the sidebar.
            </p>
            <p>
                To achieve this effect, add the
                <code class="text-nowrap">.uu-sidebar-header-linked</code> class
                to both headers (the content and sidebar headers). It is
                important that both elements have the same vertical position and
                height.
            </p>
            <p>
                This is commonly achieved by using the same header tag (e.g.
                <code>h2</code>). However, if your content header is and
                <code>h1</code> element, it's recommended you don't use the
                <code>h1</code> tag in the element. (As there should only be one
                per page).<br />
                Instead, use a <code>h2</code>/<code>div</code> with the
                <code>.h1</code> class for the sidebar instead.
            </p>
            <h3>Multiple linked headers</h3>
            <p>
                As both elements need to have the same vertical position in the
                page, this effect is mostly limited to the first header of the
                sidebar.
            </p>
            <p>
                The easiest way to have multiple linked headers, is to have
                multiple Sidebar elements. (Which is what we do on this page).
                A potential downside is that you'll have multiple sidebar
                toggles on mobile. Although, it can actually work nicely in
                some cases.
            </p>
            <p>
                An alternative would be to somehow ensure the content above
                the second linked header is equal in height to the corresponding
                sidebar section. This documentation does not have an idea on
                exactly <i>how</i> you would do such a thing.
            </p>
        </Sidebar>
    </div>
</template>
