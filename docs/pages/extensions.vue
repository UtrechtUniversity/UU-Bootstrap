<script lang="ts" setup>
import Prism from 'vue-prism-component';
import Sidebar from '@/components/sidebar';
</script>
<template>
    <div class="w-100">
        <Head>
            <Title>Extensions | Portaldev Bootstrap theme docs</Title>
        </Head>
        <div class="uu-hero">
            <h1>Extensions</h1>
        </div>
        <Sidebar
            id="color"
            placement="right"
            mobile-placement="bottom"
        >
            <template #sidebar-button>
                Variables
            </template>
            <template #sidebar>
                <h1 class="uu-sidebar-header-linked d-lg-block d-none">
                    Variables
                </h1>
                <prism language="scss" class="w-100">
                    <pre>//// UU Color palette
// Primary colors
$yellow:              #FFCD00;
$red:                 #C00A35;
$black:               #000000;
$white:               #ffffff;
// Secondary colors
$cream:               #FFE6AB;
$orange:              #F3965E;
$bordeaux-red:        #AA1555;
$brown:               #6E3B23;
// Actually UU Green, but it looks teal
$teal:                #24A793;
$blue:                #5287C6;
$dark-blue:           #001240;
$purple:              #5B2182;
// Bootstrap defaults
$indigo:              #6610f2;
$pink:                #d63384;
$green:               #198754;
$cyan:                #0dcaf0;
// Theme colors
$primary:             $yellow;
$secondary:           $black;
$success:             $green;
$info:                $cyan;
$warning:             $orange;
$danger:              $red;
$light:               $gray-100;
$dark:                $gray-900;
</pre>
                </prism>
                <p>
                    Shade variants are not included in the overview
                    above as they're calculated on the fly.
                </p>
                <h3>See also</h3>
                <ul class="nav">
                    <li class="nav-item">
                        <NuxtLink
                            class="nav-link"
                            to="https://getbootstrap.com/docs/5.2/customize/color/"
                            target="_blank"
                        >
                            Bootstrap docs
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink
                            class="nav-link"
                            to="https://www.uu.nl/en/organisation/corporate-identity/brand-policy/colour"
                            target="_blank"
                        >
                            UU Brand policy colour page
                        </NuxtLink>
                    </li>
                </ul>
            </template>

            <h1 class="uu-sidebar-header-linked">
                Colors
            </h1>
            <p>
                All colors from the
                <NuxtLink
                    to="https://www.uu.nl/en/organisation/corporate-identity/brand-policy/colour"
                    target="_blank"
                >
                    UU Colour Palette
                </NuxtLink>
                are added to <code>$colors</code>. In addition,
                <code>$theme-colors</code> are extended with all colors in
                <code>$colors</code>, thus ensuring that they are present in
                all dynamic Bootstrap classes as well. (For example,
                <code>.text-red</code> and <code>.bg-teal</code> are now also
                available).
            </p>
            <h3 class="hdr-underlined mt-3">
                Hover backgrounds
            </h3>
            <p>
                A new set of helper classes for backgrounds on
                hover are added: <code>.text-bg-hover-{color}</code>. For
                example:
            </p>
            <p>
                (note: animation is added on this page, it's not standard)
            </p>

            <div class="row fw-bold pb-4">
                <div class="col-6 color-demo-box text-bg-dark text-bg-hover-indigo">
                    <p>.text-bg-dark</p>
                    <p>.text-bg-hover-indigo</p>
                </div>
                <div class="col-6 color-demo-box text-bg-info text-bg-hover-purple">
                    <p>.text-bg-info</p>
                    <p>.text-bg-hover-purple</p>
                </div>
                <div class="col-6 color-demo-box text-bg-hover-dark-blue">
                    <p>.text-bg-hover-dark-blue</p>
                </div>
                <div class="col-6 color-demo-box text-bg-brown text-bg-hover-orange">
                    <p>.text-bg-brown</p>
                    <p>.text-bg-hover-orange</p>
                </div>
            </div>
        </Sidebar>
        <Sidebar
            id="text"
            placement="right"
            mobile-placement="bottom"
        >
            <template #sidebar-button />
            <template #sidebar />
            <h1 class="uu-sidebar-header-linked">
                Text
            </h1>
            <p>
                Just 2 small additions:
            </p>
            <ul>
                <li><code>h{i}.hdr-underlined</code> adds an underline to headers; see all the headers on this page.</li>
                <li class="font-serif">
                    <code>.font-serif</code> sets font to a serif font. (Merriweather)
                </li>
            </ul>
        </Sidebar>
    </div>
</template>

<style lang="scss" scoped>
.color-demo-box {
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: background-color 0.5s ease;
    p {
        margin: 0;
    }
}
</style>
