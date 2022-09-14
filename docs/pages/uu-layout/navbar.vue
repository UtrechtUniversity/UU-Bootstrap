<script lang="ts" setup>
import Prism from 'vue-prism-component';
import Sidebar from '@/components/sidebar';
import UuLayoutNav from "~/components/uu-layout-nav.vue";

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
            <Title>
                Navbar | UU Layout | Portaldev Bootstrap theme docs
            </Title>
        </Head>
        <div class="uu-hero">
            <h1>UU Layout Navbar</h1>
        </div>
        <Sidebar placement="right">
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
$uu-navbar-breakpoint: md;
$uu-navbar-mobile-height: 3.125rem;
$uu-navbar-navlink-padding-x: .75rem;
$uu-navbar-navlink-padding-y: .75rem;
                    </pre>
                </Prism>
            </template>
            <p>
                The UU layout navbar is mostly identical to the regular Bootstrap navbar (which it extends);
                the only differences are:
            </p>
            <ul>
                <li>
                    It has a <code>.uu-navbar</code> class on the <code>.navbar</code> element.
                </li>
                <li>
                    The internal container must be a <code>.uu-navbar-container</code>.
                </li>
                <li>
                    You don't need to use <code>.navbar-expand{-sm|-md|-lg|-xl|-xxl}</code> on the <code>.navbar</code>.
                    The UU navbar has all the CSS normally provided by those classes.
                    <ul>
                        <li>
                            If you want it to 'expand' on a different breakpoint, change the
                            <code>$uu-navbar-breakpoint</code> SCSS variable.
                        </li>
                    </ul>
                </li>
                <li>
                    The <code>.navbar-brand</code> must only contain an <code>img</code> (of the UU logo). (Optionally
                    wrapped in a link)
                </li>
            </ul>
            <p>
                The rest is identical in use to the normal Navbar
            </p>
            <p>
                Full example:
            </p>
            <prism language="html" class="w-100">
                {{ navbar_example }}
            </prism>
        </Sidebar>
    </div>
</template>
