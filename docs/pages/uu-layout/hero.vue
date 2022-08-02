<script lang="ts" setup>
import Prism from 'vue-prism-component';
import Sidebar from '@/components/sidebar';
import UuLayoutNav from "~/components/uu-layout-nav.vue";

const example_list = ref([
    `<header class="uu-hero">
    <h1>Basic usage</h1>
</header>`,
    `<header class="uu-hero text-bg-red">
    <h1>This hero is red through .text-bg-red</h1>
</header>`,
    `<div class="uu-hero flex-column">
    <h1>Hero with a title</h1>
    <h2>and a subtitle</h2>
</div>`,
    `<div class="uu-hero flex-column vh-100 justify-content-center">
    <h1>Fullpage hero</h1>
    <p>This takes up an entire page</p>
</div>`,
    `<div class="uu-hero align-items-center">
    <h1>Action hero</h1>
    <span class="ps-3 me-auto">(Get it?)</span>
    <button class="btn btn-secondary btn-arrow-right">Do something</button>
</div>`,
    `<div class="uu-hero text-bg-secondary">
    <div class="col-12">
        <h1>Content block hero</h1>
        <p>
            You can also use this element as a UU container with a colored background. In fact, you could say a
            UU hero is just such a container with a color background applied to it by default. It kinda is, kinda
            isn't; mostly it isn't because it serves different function, but to be honest that's semantics. However,
            semantics matter! Or so I've been told. And yes, I'm padding.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis porttitor ante, eu malesuada dui
             convallis eget. Sed euismod id turpis eget vehicula. Vestibulum id justo a nisi finibus dapibus. Donec
             scelerisque efficitur ante, in blandit elit ornare vel. Morbi tempus neque facilisis feugiat maximus.
             Aliquam ut turpis nunc. Sed sed lectus nisi. Nunc et justo eu sapien accumsan consectetur.
         </p>
    </div>
</div>`,
]);

</script>
<template>
    <div class="uu-content">
        <Head>
            <Title>
                Hero | UU Layout | Portaldev Bootstrap theme docs
            </Title>
        </Head>
        <div class="uu-hero">
            <h1>UU Layout Hero</h1>
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
$uu-hero-bg:          $yellow;
$uu-hero-color:       color-contrast($uu-hero-bg);
$uu-hero-padding-y:   1rem;
$uu-hero-font-weight: 400;
                    </pre>
                </Prism>
            </template>
            <p>
                The UU Layout Hero is basically a colored banner. It's very simple, but also very versatile.
            </p>
            <p>
                Once again, it's internal layouting is similar to <code>.row</code>, thus you can customize to your
                hart's content.
            </p>
            <p>
                Some examples of how you can use this element are at the bottom of this page.
            </p>
        </Sidebar>
        <div v-for="example in example_list" class="uu-content">
            <div class="uu-content" v-html="example" />
            <div class="uu-container">
                <prism language="html" class="w-100">
                    {{ example }}
                </prism>
            </div>
        </div>
    </div>
</template>
