<script lang="ts" setup>
import Prism from 'vue-prism-component';
import Sidebar from '@/components/sidebar';
import UuLayoutNav from "~/components/uu-layout-nav.vue";

// As a var because stuff breaks otherwise
const full_page_code = ref(`<body>
    <div class="uu-root-container">
        <div class="uu-header">
            <!--First row contains the UU logo and a language switcher-->
            <div class="uu-header-row">
                <div class="me-auto uu-logo">
                    <img src="/uu-logo-en.svg"/>
                </div>
                <div class="border-left text-muted text-uppercase ms-auto">
                    <a href="change-lang/en/">
                        Nederlands
                    </a>
                </div>
            </div>
            <!--Second row has the app title and a user info/login box-->
            <div class="uu-header-row">
                <div class="me-auto uu-header-title">
                    App name
                </div>
                <div class="ms-auto">
                    Welcome, John Doe (Log out)
                </div>
            </div>
        </div>
        <!--navbar, see navbar page-->
        <!--content-->
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

const headerMarginSpaced = ref(`<div class="uu-header">
    <div class="uu-header-row">
        <div class="me-auto uu-logo">
            <img src="/uu-logo-en.svg"/>
        </div>
        <div class="border-left text-muted text-uppercase ms-auto">
            <a href="change-lang/en/">
                Nederlands
            </a>
        </div>
    </div>
</div>`);
const headerFlexSpaced = ref(``);
const headerGridSpaced = ref(``);
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
        <Sidebar placement="right">
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
$uu-container-width: 1600px;
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
        >
            <template #sidebar-button>
                Variables
            </template>
            <template #sidebar>
                <h2 class="uu-sidebar-header-linked">
                    Variables
                </h2>
                <prism language="scss" class="w-100">
                    <pre>
$uu-header-padding-y: 10px;
$uu-header-font-size: 14px;
$uu-header-title-color: #094D8E;
$uu-header-border-gap: 20px;
// Also the header breakpoint
$uu-navbar-breakpoint: md;
                    </pre>
                </prism>
            </template>
            <h2 class="uu-sidebar-header-linked">
                Header
            </h2>
            <p>
                The header refers to all the space above the navbar. It's setup to be fairly modular, but <i>should</i>
                at the very least contain the UU logo. Other elements often found inside the header are: langauge
                switcher, app name title, search box and a login/logout link.
            </p>
            <p>
                It is important to note that the header is only visible above a certain breakpoint (<code>md</code> by
                default). Below that breakpoint, the navbar takes over as the topmost element. Thus, make sure you
                provide alternatives for mobile users for anything functional in the header.
            </p>
            <p>
                A header consists of a <code>div.uu-header</code> containing one or more <code>div.uu-header-row</code>
                elements. These rows are flex containers, so you have the option to use Bootstrap's flexbox helpers to
                layout your header, or using Bootstrap's columns (<code>.col-4</code> etc)
            </p>

            <div class="accordion">
                <div class="accordion-item">
                    <h2 id="headingOne" class="accordion-header">
                        <button
                            class="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            Margin spaced example
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne">
                        <div class="accordion-body">
                            <prism language="html">
                                {{ headerMarginSpaced }}
                            </prism>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 id="headingTwo" class="accordion-header">
                        <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            Flex spaced
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo">
                        <div class="accordion-body">
                            <prism language="html">
                                {{ headerFlexSpaced }}
                            </prism>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 id="headingThree" class="accordion-header">
                        <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            Column spaced
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree">
                        <div class="accordion-body">
                            <prism language="html">
                                {{ headerGridSpaced }}
                            </prism>
                        </div>
                    </div>
                </div>
            </div>
        </Sidebar>
        <Sidebar
            placement="right"
            mobile-placement="bottom"
        >
            <template #sidebar-button>
                Variables
            </template>
            <template #sidebar>
                <h2 class="uu-sidebar-header-linked">
                    Variables
                </h2>
            </template>
            <h2 class="uu-sidebar-header-linked">
                Content
            </h2>
        </Sidebar>
        <Sidebar
            placement="right"
            mobile-placement="bottom"
        >
            <template #sidebar-button>
                Variables
            </template>
            <template #sidebar>
                <h2 class="uu-sidebar-header-linked">
                    Variables
                </h2>
            </template>
            <h2 class="uu-sidebar-header-linked">
                Footer
            </h2>
        </Sidebar>
    </div>
</template>
