<script lang="ts" setup>
import Prism from 'vue-prism-component';
import Sidebar from '@/components/sidebar';
import UuLayoutNav from "~/components/uu-layout-nav.vue";

const minimalExample = ref(`<div class="uu-cover">
    <img class="uu-cover-image" alt="cover" src="img/cover.png" />
</div>`);
const copyrightExample = ref(`<div class="uu-cover">
    <img class="uu-cover-image" alt="cover" src="img/cover.png" />
    <div class="uu-cover-copyright">
        Cover by John Doe
    </div>
</div>`);
const heroExample = ref(`<div class="uu-cover">
    <img class="uu-cover-image" alt="cover" src="img/cover.png" />
    <div class="uu-cover-hero">
        <h1>Page title</h1>
    </div>
</div>`);
</script>
<template>
    <div class="uu-content">
        <Head>
            <Title>
                Cover | UU Layout | Portaldev Bootstrap theme docs
            </Title>
        </Head>

        <div class="uu-cover h-100 align-items-center">
            <img class="uu-cover-image" alt="cover" src="~/assets/cover.png" />
            <div class="uu-cover-copyright uu-cover-copyright-right uu-cover-copyright-top">
                Cover by Simona Evsatieva
            </div>
            <div class="uu-cover-hero uu-cover-hero-left">
                <h1>UU Layout Cover</h1>
            </div>
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
$uu-cover-default-height:             400px;
$uu-cover-copyright-padding-x:        .625rem;
$uu-cover-copyright-padding-y:        .625rem;
$uu-cover-copyright-text-size:        0.8rem;
$uu-cover-copyright-text-color:       $gray-300;
$uu-cover-copyright-background-color: rgba(0,0,0, 0.5);
                    </pre>
                </Prism>
            </template>
            <p>
                The cover is an image at the start of the page, below the header and navbar, often seen on UU site
                homepages and sometimes seen on other UU site pages as well. They server to provide (contextual)
                imagery/eye candy for the site/app to make it feel more appealing to humans.
            </p>
            <p>
                This component provides an easy to add, responsive, implementation of the cover:
            </p>
            <Prism lang="html" class="w-100">
                <pre>{{ minimalExample }}</pre>
            </Prism>
            <h2 class="mt-4">
                Responsiveness, sizing and positioning
            </h2>
            <p>
                For optimal results, use an image that is 1600px wide and 400px tall. Bigger images are possible, but
                it is not recommended to go smaller. Bigger images might be cropped to fit.
            </p>
            <p>
                The component will try prioritise showing the full height of the image up until breakpoint
                <code>md</code>, after which it will prioritise showing the full <i>width</i> of the image. Parts of
                the image that do not fit will be cropped (see <NuxtLink to="#cropping">
                    Controlling cropping
                </NuxtLink>).
            </p>
            <h3>Vertical height</h3>
            <p>
                By default, the cover is limited to a maximum height of 400 pixels. Any images larger than that will be
                cropped in height to fit. (Even in breakpoints lower than <code>md</code>). See <NuxtLink to="#cropping">
                    Controlling cropping
                </NuxtLink>.
            </p>
            <p>
                This can be overriden either
                globally by changing the default height variable, or on a specific cover by using one of 4 height
                classes. These height classes also have breakpoint specific versions.
            </p>
            <ul>
                <li v-for="i in [200, 300, 400, 500]" :key="i">
                    <code>h-{{ i }}</code> or <code>h-{sm|md|lg|xl|xxl}-{{ i }}</code> for a max height of {{ i }}px
                </li>
            </ul>
            <div class="alert alert-warning">
                Unlike most breakpoint specific classes, these modifiers work <i>down</i>. So <code>.h-md-200</code>
                sets the height to a maximum to 200px from <code>xs</code> up to and including <code>md</code> instead of
                from <code>md</code> and wider.
            </div>
            <div class="alert alert-info">
                In most cases it's advised to limit the 'mobile' version's height to 200px using the
                <code class="text-nowrap">.h-md-200</code> class. Feel free to experiment with what looks right tho.
            </div>
            <h3 id="cropping" class="mt-4">
                Controlling cropping
            </h3>
            <p>
                As stated above, there are many situation where an image will be cropped. By default both sides of the
                to-be-cropped axis will be cropped. (In other words, the center of the image is prioritized).
            </p>
            <p>
                As this is done by using flexbox, this can be controlled by using Bootstrap's
                <code class="text-nowrap">.justify-content-{}</code> (horizontal positioning) and
                <code class="text-nowrap">.align-items-{}</code> (vertical positioning) classes.
            </p>
            <p>
                For example, adding
                <code class="text-nowrap">.align-items-start</code> will prioritize the top of the image, ensuring only
                the bottom of the image will be cropped.
            </p>
            <h2>Copyright</h2>
            <p>
                Many images in the UU Image Library require attribution to the photographer/maker. For this purpose
                you can use <code class="text-nowrap">.uu-cover-copyright</code>:
            </p>
            <Prism lang="html" class="w-100">
                <pre>{{ copyrightExample }}</pre>
            </Prism>
            <h3 class="mt-3">
                Placement
            </h3>
            <p>
                By default, the attribution will be placed in the bottom left corner. This can be changed by adding the
                <code class="text-nowrap">.uu-cover-copyright-top</code> and
                <code class="text-nowrap">.uu-cover-copyright-right</code> classes respectively.
            </p>
            <h2>Cover Hero</h2>
            <p>
                When your page uses a <NuxtLink to="/uu-layout/sidebar">
                    Sidebar
                </NuxtLink> for it's main content, you can opt to use a Cover Hero instead of a regular fullwidth
                <NuxtLink to="/uu-layout/hero">
                    Hero
                </NuxtLink>. This will limit the width of the hero to the content portion of the Sidebar component for
                a nice visual effect:
            </p>
            <Prism lang="html" class="w-100">
                <pre>{{ heroExample }}</pre>
            </Prism>
            <p>
                By default the hero will be placed on the right side of the page, as the default placement of the
                sidebar is on the left. If you use the sidebar on the right, add the
                <code class="text-nowrap">uu-cover-hero-left</code> class to the Cover Hero.
            </p>
            <div class="alert alert-warning">
                If you want a fullwidth Hero instead, use a regular Hero <i>outside</i> of the cover element. The Cover
                component does not handle the regular Hero well.
            </div>
        </Sidebar>
    </div>
</template>
