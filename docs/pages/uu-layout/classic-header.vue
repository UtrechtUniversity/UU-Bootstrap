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
import Prism from "vue-prism-component";
import Sidebar from "@/components/sidebar";
import UuLayoutNav from "~/components/uu-layout-nav.vue";

// As a var because stuff breaks otherwise
const headerCode = ref(`<div class="uu-header">
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
<!--navbar, see below-->`);

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
const headerFlexSpaced = ref(`<div class="uu-header justify-content-between">
    <div class="uu-header-row">
        <div class="uu-logo">
            <img src="/uu-logo-en.svg"/>
        </div>
        <div class="border-left text-muted text-uppercase">
            <a href="change-lang/en/">
                Nederlands
            </a>
        </div>
    </div>
</div>`);
const headerGridSpaced = ref(`<div class="uu-header">
    <div class="uu-header-row">
        <div class="col-4 uu-logo">
            <img src="/uu-logo-en.svg"/>
        </div>
        <div class="col-5" />
        <div class="col-3 border-left text-muted text-uppercase">
            <a href="change-lang/en/">
                Nederlands
            </a>
        </div>
    </div>
</div>`);

// As a var because stuff breaks otherwise
const navbar_example = ref(`<nav class="navbar uu-navbar">
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
</nav>`);
</script>
<template>
    <div class="uu-content">
        <Head>
            <Title> Classic header & Navbar | UU Layout | Portaldev Bootstrap theme docs </Title>
        </Head>
        <div class="uu-hero">
            <h1>UU Layout Classic Header & Navbar</h1>
        </div>
        <Sidebar placement="right" :sticky-sidebar="true" :mobile-sticky-sidebar="true">
            <template #sidebar-button> See also </template>
            <template #sidebar>
                <uu-layout-nav />
            </template>
            <p>
                The classic header and navbar replicates the most common layout found on UU
                websites. (And is the default header used for this documentation.)
            </p>
            <p>
                It consists of a desktop-only header (with 1 or more 'rows') with a black menu bar
                below. On mobile the header disappears, and the navbar takes over it's duty.
            </p>
            <p>
                While named 'classic', it is considered up to date and still fully supported by this
                project. Alternatively you can use the
                <NuxtLink to="/uu-layout/unified-header/">Unified Header</NuxtLink>.
            </p>
        </Sidebar>
        <Sidebar placement="right" mobile-placement="bottom" :mobile-sticky-sidebar="true">
            <template #sidebar-button> Variables </template>
            <template #sidebar>
                <h2 class="uu-sidebar-header-linked">Variables</h2>
                <prism language="scss" class="w-100">
                    <pre>
$uu-header-padding-y: 0.7rem;
$uu-header-font-size: 0.9rem;
$uu-header-title-color: #094D8E;
$uu-header-border-gap: 1.2rem;
// Also the header breakpoint
$uu-navbar-breakpoint: md;
                    </pre>
                </prism>
            </template>
            <h2 class="uu-sidebar-header-linked">Header</h2>
            <p>
                The header refers to all the space above the navbar. It's setup to be fairly
                modular, but <i>should</i>
                at the very least contain the UU logo. Other elements often found inside the header
                are: langauge switcher, app name title, search box and a login/logout link.
            </p>
            <p>
                It is important to note that the header is only visible above a certain breakpoint
                (<code>md</code> by default). Below that breakpoint, the navbar takes over as the
                topmost element. Thus, make sure you provide alternatives for mobile users for
                anything functional in the header.
            </p>
            <p>
                A header consists of a <code>div.uu-header</code> containing one or more
                <code>div.uu-header-row</code> elements. These rows are flex containers, so you have
                the option to use Bootstrap's flexbox helpers to layout your header, or using
                Bootstrap's columns (<code>.col-4</code> etc)
            </p>
            <p>An example of a header implementation:</p>

            <prism language="html" class="w-100">
                {{ headerCode }}
            </prism>
            <p>Some spacing method options:</p>
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
                    <div
                        id="collapseOne"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                    >
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
                    <div
                        id="collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                    >
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
                    <div
                        id="collapseThree"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                    >
                        <div class="accordion-body">
                            <prism language="html">
                                {{ headerGridSpaced }}
                            </prism>
                        </div>
                    </div>
                </div>
            </div>
        </Sidebar>
    </div>
    <Sidebar placement="right">
        <template #sidebar-button> Sidebar </template>
        <template #sidebar>
            <h2 class="uu-sidebar-header-linked">Variables</h2>
            <Prism language="scss" class="w-100">
                <pre>
$uu-navbar-breakpoint: md;
$uu-navbar-mobile-height: 3.125rem;
$uu-navbar-navlink-padding-x: .75rem;
$uu-navbar-navlink-padding-y: .75rem;
                    </pre
                >
            </Prism>
        </template>
        <h2 class="uu-sidebar-header-linked">Navbar</h2>
        <p>
            The UU layout navbar is mostly identical to the regular Bootstrap navbar (which it
            extends); the only differences are:
        </p>
        <ul>
            <li>It has a <code>.uu-navbar</code> class on the <code>.navbar</code> element.</li>
            <li>
                The internal container must be a
                <code>.uu-navbar-container</code>.
            </li>
            <li>
                You don't need to use
                <code>.navbar-expand{-sm|-md|-lg|-xl|-xxl}</code> on the <code>.navbar</code>. The
                UU navbar has all the CSS normally provided by those classes.
                <ul>
                    <li>
                        If you want it to 'expand' on a different breakpoint, change the
                        <code>$uu-navbar-breakpoint</code> SCSS variable.
                    </li>
                </ul>
            </li>
            <li>
                The <code>.navbar-brand</code> must only contain an <code>img</code> (of the UU
                logo). (Optionally wrapped in a link)
            </li>
        </ul>
        <p>The rest is identical in use to the normal Navbar</p>
        <p>Full example:</p>
        <prism language="html" class="w-100">
            {{ navbar_example }}
        </prism>
    </Sidebar>
</template>
