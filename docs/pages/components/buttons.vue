<script lang="ts" setup>
import Prism from 'vue-prism-component';
import Sidebar from '@/components/sidebar';

const loading = ref(false);
</script>

<template>
    <div class="uu-content">
        <Sidebar
            id="buttons"
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
                <Prism language="scss" class="w-100">
                    <pre>$btn-group-gap: .5rem;</pre>
                </Prism>
                <h3 class="mt-3">
                    See also
                </h3>
                <ul class="nav">
                    <li class="nav-item">
                        <NuxtLink
                            class="nav-link"
                            to="https://getbootstrap.com/docs/5.2/components/buttons/"
                            target="_blank"
                        >
                            Bootstrap button docs
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink
                            class="nav-link"
                            to="https://getbootstrap.com/docs/5.2/components/button-group/"
                            target="_blank"
                        >
                            Bootstrap button group docs
                        </NuxtLink>
                    </li>
                </ul>
            </template>
            <h1 class="uu-sidebar-header-linked">
                Buttons
            </h1>
            <p>
                Buttons are mostly untouched. Just a couple of small additions;
                Remember to set a coloring class!
            </p>
            <h3 class="hdr-underlined">
                Button arrows
            </h3>
            <p>
                Fancy arrows added to a button! As seen on uu.nl!
            </p>
            <p>
                Just add <code>.btn-arrow-left</code> or <code>.btn-arrow-right</code>
                to your <code>.btn</code>.
                Note: while working with outlined buttons, it doesn't look good.
            </p>
            <div class="btn-group">
                <button class="btn btn-secondary btn-arrow-left">
                    Previous page
                </button>
                <button class="btn btn-primary btn-arrow-right">
                    Next page
                </button>
            </div>
            <h3 class="hdr-underlined mt-4">
                Button group
            </h3>
            <p>
                Button groups in Bootstrap normally join buttons together. We've
                introduced a new variable that set's the flexbox's gap parameter.
            </p>
            <p>
                Nothing fancy, but it looks nicer:
            </p>
            <div class="btn-group">
                <button class="btn btn-primary">
                    Save
                </button>
                <button class="btn btn-secondary">
                    Cancel
                </button>
                <button class="btn btn-secondary">
                    Reset
                </button>
            </div>
            <h3 class="hdr-underlined mt-3">
                Loading
            </h3>
            <p>
                If you've got some action bound to a button that might take a
                sec, you can add the <code>.btn-loading</code> class that will
                display a nice spinner inside the button. Try it out:
            </p>
            <div class="btn-group">
                <button
                    class="btn btn-primary"
                    :class="loading ? 'btn-loading' : ''"
                    @click="loading = !loading"
                >
                    Do something that takes a while
                </button>
            </div>
        </Sidebar>
    </div>
</template>
