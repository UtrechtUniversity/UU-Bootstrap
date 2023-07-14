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

// As a var because stuff breaks otherwise
const full_page_code = ref(`<body>
    <div class="uu-root-container">
        <!--header, see header pages-->
        <!--navbar, see navbar page-->
        <div class="uu-content">
            <!--content-->
        </div>
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
</body>`);
</script>
<template>
    <div class="uu-content">
        <Head>
            <Title>
                Overview | UU Layout | Portaldev Bootstrap theme docs
            </Title>
        </Head>
        <div class="uu-hero">
            <h1>UU Layout overview</h1>
        </div>
        <Sidebar placement="right" :sticky-sidebar="true" :mobile-sticky-sidebar="true">
            <template #sidebar-button>
                See also
            </template>
            <template #sidebar>
                <uu-layout-nav />
            </template>
            <p>
                This library provides a set of classes/components that allow you to easily create a page that passes as
                a UU website. This page will cover the basics, with some larger sub-components having their own page.
            </p>
            <p>
                You can use the rest of this library without UU layout if you just want the component stylings.
                However, all components under the UU layout section (identified by the <code>uu-</code> prefix) do
                require that you use the UU layout.
            </p>
            <p>
                Full example for a page:
            </p>
            <prism language="html" class="w-100">
                {{ full_page_code }}
            </prism>
        </Sidebar>
        <Sidebar
            placement="right"
            mobile-placement="bottom"
            :mobile-sticky-sidebar="true"
        >
            <template #sidebar-button>
                Variables
            </template>
            <template #sidebar>
                <h2 class="uu-sidebar-header-linked">
                    Variables
                </h2>
                <prism language="scss">
                    <pre>
$uu-container-width: 100rem; // 1600px
$uu-border-color: $gray-400;
$uu-border-color-light: $gray-200;
$uu-border-color-dark: $gray-800;
                    </pre>
                </prism>
                <p>
                    Container width refers to the <i>maximum width</i> of the container. The border variables set
                    color to various borders used in a UU layout.
                </p>
            </template>
            <h2 class="uu-sidebar-header-linked">
                Root container
            </h2>
            <p>
                The root element for all UU layout pages is the <i>root container</i>, which should be a child div
                below the body tag.
            </p>
            <p>
                It's is a very simple flexbox with a max-width and white background. However, it also acts as the
                namespace for all components in the UU layout. Thus, all <code>uu-</code> prefixed classes only work
                inside one of these containers.
            </p>
        </Sidebar>
        <Sidebar
            placement="right"
            mobile-placement="bottom"
            :mobile-sticky-sidebar="true"
        >
            <template #sidebar-button>
                Variables
            </template>
            <template #sidebar>
                <h2 class="uu-sidebar-header-linked">
                    Links
                </h2>
                <ul class="nav">
                    <li class="nav-item">
                        <NuxtLink to="/uu-layout/classic-header/" class="nav-link">
                            Classic Header
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="/uu-layout/unified-header/" class="nav-link">
                            Unified Header
                        </NuxtLink>
                    </li>
                </ul>
            </template>
            <h2 class="uu-sidebar-header-linked">
                Header
            </h2>
            <p>
                This project provides two distinct <em>styles</em> of header:
                classic and unified. The classic style implements the most common
                style found on UU sites.
                The unified style is a smaller alternative, used mostly by new
                internal 'tool' websites.
            </p>
            <p>
                By default, this documentation uses the 'classic' header, but
                the classic can be previewed by selecting it under 'theme settings'.
            </p>
            <p>
                Please refer to the linked pages for more information.
            </p>
        </Sidebar>
        <Sidebar
            placement="right"
            mobile-placement="bottom"
            :mobile-sticky-sidebar="true"
        >
            <template #sidebar-button>
                Variables
            </template>
            <template #sidebar>
                <h2 class="uu-sidebar-header-linked">
                    Variables
                </h2>
                <p>
                    None
                </p>
            </template>
            <h2 class="uu-sidebar-header-linked">
                Content
            </h2>
            <p>
                An div with <code class="text-nowrap">.uu-content</code> that should contain all <em>content elements</em>.
                This div will automatically grow to fill the page if the actual content is not long enough.
            </p>
            <p>
                An overview of <em>content elements</em>:
            </p>
            <h3>UU Container</h3>
            <p>
                Your main <i>content element</i> is <code>.uu-container</code>. This is a generic container similar to
                Bootstrap's <code>.row</code>, and should be used as such. It is recommended to use Bootstrap's
                <code>.col-*</code> classes inside of this element for layouting, but any other flexbox based layouting
                is supported too.
            </p>
            <p>
                Tip: you can use Bootstrap's flex helpers like <code>.flex-column</code> and
                <code>.justify-content-*</code> on the container element for advanced flexbox stuff.
            </p>
            <h3>Fullwidth container</h3>
            <p>
                The regular UU Layout container has the nice 'spaced' code applied to it, limiting it to
                <code class="text-nowrap">$content-width</code>. If you have an interface which for whatever reason
                needs more width, you can use <code class="text-nowrap">.uu-fullwidth-container</code> instead. This
                container class will give you the entire width of the root container.
            </p>
            <div class="alert alert-warning">
                Note: using this class is admitting your interface is not responsive and thus broken on smaller
                screens. It is recommended you explore responsive options before using this as a last-resort option.
            </div>
            <h3>Other <i>content elements</i></h3>
            <p>
                Other content elements are <NuxtLink to="/uu-layout/cover/">
                    Cover
                </NuxtLink>,
                <NuxtLink to="/uu-layout/hero/">
                    Hero
                </NuxtLink> and
                <NuxtLink to="/uu-layout/sidebar/">
                    Sidebar
                </NuxtLink>.
            </p>
        </Sidebar>
        <Sidebar
            placement="right"
            mobile-placement="bottom"
            :mobile-sticky-sidebar="true"
        >
            <template #sidebar-button>
                Variables
            </template>
            <template #sidebar>
                <h2 class="uu-sidebar-header-linked">
                    Variables
                </h2>
                <prism language="scss">
                    <pre>
$uu-footer-padding-y: 2.5rem;
$uu-footer-color: $gray-400;
$uu-footer-background-color: $gray-850;
                    </pre>
                </prism>
            </template>
            <h2 class="uu-sidebar-header-linked">
                Footer
            </h2>
            <p>
                I'm tired, so a short summary:
            </p>
            <ul>
                <li>It's a footer</li>
                <li>Use <code>.uu-footer</code> on a <code>div</code> or (preferably) a <code>footer</code> element</li>
                <li>It's a flexbox thing, same layouting requirements as basically every other element described on this page</li>
                <li>
                    It's convention to use the white/black UU logo as the leftmost element, but not required
                    <ul>
                        <li>For example, the corporate site has a sitemap there instead</li>
                    </ul>
                </li>
            </ul>
        </Sidebar>
    </div>
</template>
