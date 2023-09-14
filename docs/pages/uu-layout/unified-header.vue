<script setup lang="ts">
import Prism from "vue-prism-component";
import UuLayoutNav from "~/components/uu-layout-nav.vue";
import Sidebar from "~/components/sidebar.vue";

const basicExample = ref(`<div class="uu-unified-header navbar">
    <div class="uu-unified-header-container">
        <div class="navbar-brand uu-brand">
            <div class="uu-logo">
                <img src="uu-logo-en.svg"/>
            </div>
        </div>

        <div id="unified-header-nav" class="collapse navbar-collapse">
            <ul class="navbar-nav ms-auto">
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

        <button
            class="navbar-toggler border-left"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#unified-header-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"/>
        </button>
    </div>
</div>`);

const basicBrandExample = ref(`<div class="navbar-brand uu-brand">
    <a href="http://www.uu.nl/" target="_blank" class="uu-logo">
        <img src="~/assets/uu-logo-en.svg"/>
    </a>
</div>`);

const senderBlockBrandExample = ref(`<div class="navbar-brand uu-brand">
    <a href="http://www.uu.nl/" target="_blank" class="uu-logo">
        <img src="~/assets/uu-logo-en.svg"/>
    </a>
    <div class="uu-sender text-bg-secondary">
        Centre For<br/>Digital Humanities
    </div>
</div>`);

const appNameExample = ref(`<div
    class="navbar-text fs-4 text-black d-none d-lg-flex text-nowrap pe-4"
>
    Bootstrap theme
</div>`);

const languageSwitchExample = ref(`<a
    href="[..]"
    class="navbar-text border-left text-muted text-uppercase text-decoration-none"
>
    Nederlands
</a>`);

const fullInformationalExample = ref(`<div class="uu-unified-header navbar">
    <div class="uu-unified-header-container">
        <div class="navbar-brand uu-brand">
            <div class="uu-logo">
                <img src="/nuxt/assets/uu-logo-en.svg"/>
            </div>
            <div class="uu-sender text-bg-secondary">
                Centre For<br/>Digital Humanities
            </div>
        </div>

        <div id="unified-header-nav" class="collapse navbar-collapse">
            <ul class="navbar-nav ms-auto">
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

        <a
            href="[..]"
            class="navbar-text border-left text-muted text-uppercase text-decoration-none ms-4"
        >
            Nederlands
        </a>

        <button
            class="navbar-toggler border-left"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#unified-header-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"/>
        </button>
    </div>
</div>`);

const toolExample = ref(`<div class="uu-unified-header navbar">
    <div class="uu-unified-header-container">
        <div class="navbar-brand uu-brand me-0">
            <div class="uu-logo">
                <img src="/nuxt/assets/uu-roundel.svg"/>
            </div>
        </div>
        <div
            class="navbar-text fs-4 text-black d-none d-lg-flex text-nowrap pe-4"
        >
            Example portal
        </div>

        <div id="unified-header-nav" class="collapse navbar-collapse">
            <ul class="navbar-nav ms-auto me-auto">
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

        <a
            href="[..]"
            class="navbar-text border-left text-muted text-uppercase text-decoration-none ms-4"
        >
            Account
        </a>
        <a
            href="[..]"
            class="navbar-text border-left text-muted text-uppercase text-decoration-none ms-4"
        >
            Nederlands
        </a>

        <button
            class="navbar-toggler border-left"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#unified-header-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"/>
        </button>
    </div>
</div>`);
</script>

<template>
    <div class="uu-content">
        <Head>
            <Title> Unified header | UU Layout | Portaldev Bootstrap theme docs </Title>
        </Head>
        <div class="uu-hero" id="intro">
            <h1>UU Layout Unified Header</h1>
        </div>
        <Sidebar placement="right" :sticky-sidebar="true" :mobile-sticky-sidebar="true">
            <template #sidebar-button> See also </template>
            <template #sidebar>
                <uu-layout-nav />
                <h2 class="mt-3">On this page</h2>
                <ul class="nav">
                    <li class="nav-item">
                        <NuxtLink to="#intro" class="nav-link" exact-active-class="-">
                            Intro
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="#basic-usage" class="nav-link" exact-active-class="-">
                            Basic usage
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="#brand" class="nav-link" exact-active-class="-">
                            Brand
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="#text-elements" class="nav-link" exact-active-class="-">
                            Text elements
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="#width-usage" class="nav-link" exact-active-class="-">
                            Width usage
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="#examples" class="nav-link" exact-active-class="-">
                            Examples
                        </NuxtLink>
                    </li>
                </ul>
                <h2 class="mt-3">Variables</h2>
                <Prism language="scss" class="w-100">
                    <pre>
$uu-navbar-breakboint: md;
$uu-header-font-size;
$uu-unified-header-height: 4.5rem;
$uu-unified-header-mobile-height: 3rem;
$uu-unified-header-border-size: 0.0625rem;
$uu-unified-header-padding-x: 2rem;
$uu-unified-header-padding-mobile-x: 1rem;
$uu-unified-header-navlink-indicator-height: 0.3125rem;
$uu-unified-header-navlink-mobile-bg: $black;
$uu-unified-header-navlink-mobile-color: $white;
$uu-brand-padding-x: 2.5rem;
$uu-brand-padding-y: 1rem;
$uu-brand-logo-padding-x: 0.5rem;
$uu-brand-logo-padding-y: 0;
$uu-brand-sender-bg: $primary;
$uu-brand-sender-color: $black;
$uu-brand-sender-min-width: 220px;
$uu-brand-sender-max-width: 300px;
                    </pre>
                </Prism>
            </template>
            <p>
                The unified header and navbar is an alternative to the more common classic header,
                mostly used in (newer) UU web-tools. However, a variation is also used on
                informational websites.
            </p>
            <p>
                As the name suggests, it combines the header and navbar into once component. It is
                more similar to Bootstrap's approach to the navbar, and in general behaves like a
                pre-styled version of one.
            </p>
            <p>
                Alternatively you can use the
                <NuxtLink to="/uu-layout/classic-header/">Classic Header</NuxtLink>. By default,
                this documentation uses the classic header, but the unified header can be set using
                the 'Theme settings'.
            </p>
            <h3 id="basic-usage">Basic usage</h3>
            <p>
                The HTML for the unified-header is very similar to Bootstrap's Navbar, but uses some
                other classes.
            </p>
            <ul>
                <li>
                    It has a <code>.uu-unified-navbar</code> class on the
                    <code>.navbar</code> element.
                </li>
                <li>
                    The internal container must be a
                    <code>.uu-unified-header-container</code>.
                </li>
                <li>
                    You don't need to use
                    <code>.navbar-expand{-sm|-md|-lg|-xl|-xxl}</code> on the <code>.navbar</code>.
                    The UU navbar has all the CSS normally provided by those classes.
                    <ul>
                        <li>
                            If you want it to 'expand' on a different breakpoint, change the
                            <code>$uu-navbar-breakpoint</code> SCSS variable.
                        </li>
                    </ul>
                </li>
                <li>The <code>.navbar-brand</code> is somewhat different, see below.</li>
            </ul>
            <prism language="html" class="w-100">
                {{ basicExample }}
            </prism>
            <h3 id="brand" class="mt-4">Brand</h3>
            <h4>Basic</h4>
            <p>
                Basic usage for the navbar brand is as shown below. This is a simple UU logo wrapped
                in a link.
            </p>
            <prism language="html" class="w-100">
                {{ basicBrandExample }}
            </prism>
            <h4>Sender-blocks</h4>
            <p>
                A variation on the normal navbar brand adds the 'sender-block'. This emulates the
                now common 'sender block' system used at the UU. This variation is intended for
                'informational' websites.
            </p>
            <p>
                Simply add a <code class="text-nowrap">.uu-sender</code> element after
                <code class="text-nowrap">.uu-logo</code>. By default, the sender block will be
                yellow. This can be changed using Bootstrap's
                <code class="text-nowrap">.text-bg-{color}</code>
                helpers.
            </p>
            <p>
                It is recommended that longer senders are spread over 2 lines using a break.
                However, more than two lines are not recommended.
            </p>
            <prism language="html" class="w-100">
                {{ senderBlockBrandExample }}
            </prism>
            <h3 id="text-elements" class="mt-4">Text elements</h3>
            <p>
                You can use <code>.navbar-text</code> just like normal Bootstrap Navbars. Two common
                use-cases are 'app-names' and language switchers.
            </p>
            <p>
                Case should be given to responsiveness. By default, these elements are always
                visible. Use the Bootstrap visibility helpers to control when elements
                appear/disappear. Please note that the value of <code>display</code> should be
                <code>flex</code> or <code>none</code>.
            </p>
            <h4>App name example</h4>
            <p>
                In this example, we only show the app name if we are at or above the
                <code>xl</code> breakpoint, to make sure we always have enough room for the menu.
            </p>
            <p>We also use a larger, black font to make it stand out from the menu.</p>
            <prism language="html" class="w-100">
                {{ appNameExample }}
            </prism>
            <h4>Language switcher example</h4>
            <p>In this example, we always show the item, even on mobile viewports.</p>
            <prism language="html" class="w-100">
                {{ languageSwitchExample }}
            </prism>
            <h3 class="mt-4" id="width-usage">Width usage</h3>
            <p>
                The example above uses the normal version of the header. This means similar margins
                as the other UU Layout elements are used, to make sure the header is similarly
                aligned.
            </p>
            <p>
                In some cases, it might be preferable to use the 'full width' version, which takes
                all the horizontal space available. To do so, use the
                <code class="text-nowrap">.uu-fullwidth-unified-header</code>
                class instead of
                <code class="text-nowrap">uu-unified-header</code>
            </p>
            <div class="alert alert-warning">
                This should only be done for design considerations, not space issues. If you are
                running into space issues, you are probably adding too much content to your header.
                Please consider using the classic header, nesting menu items or simplifying your
                header.
            </div>
        </Sidebar>
        <div class="uu-hero text-bg-secondary" id="examples">
            <h2>Examples</h2>
        </div>
        <div class="uu-container">
            <h3>Informational websites example</h3>
        </div>
        <div class="w-100" v-html="fullInformationalExample" />
        <div class="uu-container">
            <p>A full example for informational websites.</p>

            <prism language="html" class="w-100">
                {{ fullInformationalExample }}
            </prism>
        </div>
        <div class="uu-container">
            <h3>Tool/web-app example</h3>
        </div>
        <div class="w-100" v-html="toolExample" />
        <div class="uu-container">
            <p>A full example for online tools/webapps.</p>

            <prism language="html" class="w-100">
                {{ toolExample }}
            </prism>
        </div>
    </div>
</template>
