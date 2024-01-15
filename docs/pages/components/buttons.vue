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

const loading = ref(false);
</script>

<template>
    <div class="uu-content">
        <Head>
            <Title>Buttons | UU-Bootstrap docs</Title>
        </Head>
        <Sidebar id="buttons" placement="right" mobile-placement="bottom">
            <template #sidebar-button> Variables </template>
            <template #sidebar>
                <h1 class="uu-sidebar-header-linked d-lg-block d-none">Variables</h1>
                <Prism language="scss" class="w-100">
                    <pre>$btn-group-gap: .5rem;</pre>
                </Prism>
                <h3 class="mt-3">See also</h3>
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
            <h1 class="uu-sidebar-header-linked">Buttons</h1>
            <p>
                Buttons are mostly untouched. Just a couple of small additions; Remember to set a
                button variant (coloring) class!
            </p>
            <h3 class="hdr-underlined">Button arrows</h3>
            <p>One addition is the 'navigation' arrows commonly used on UU websites.</p>
            <p>
                Add <code>.btn-arrow-left</code> or <code>.btn-arrow-right</code> to your
                <code>.btn</code>. Note: while it does work with outlined buttons, it doesn't look
                good.
            </p>
            <div class="btn-group">
                <button class="btn btn-secondary btn-arrow-left">Previous page</button>
                <button class="btn btn-primary btn-arrow-right">Next page</button>
            </div>
            <h3 class="hdr-underlined mt-4">Button group</h3>
            <p>
                Button groups in Bootstrap normally join buttons together. We've introduced a new
                variable (<code class="text-nowrap">$btn-group-gap</code>) that set's the flexbox's
                gap parameter.
            </p>
            <div class="btn-group">
                <button class="btn btn-primary">Save</button>
                <button class="btn btn-secondary">Cancel</button>
                <button class="btn btn-secondary">Reset</button>
            </div>
            <h3 class="hdr-underlined mt-3">Loading</h3>
            <p>
                If you've got some action bound to a button that might take a a few seconds, you can
                add the <code>.btn-loading</code> class that will display a nice spinner inside the
                button. For example:
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
            <h3 class="hdr-underlined mt-3">Radio/checkbox toggle buttons</h3>
            <p>
                Bootstrap uses the active button variant for radio/checkbox toggle buttons. However,
                in the UU style you might want more flexibility in the 'active' color. To accomplish
                this, a new button modifier was added:
            </p>
            <p>
                <code class="text-nowrap">.btn-checked-{variant}</code> and
                <code class="text-nowrap">.btn-checked-outline-{variant}</code>
            </p>
            <p>
                These are identical in options and styles to the normal button variant classes, but
                are only added when used with Bootstrap's toggle buttons when it's toggled on.
            </p>
            <div class="btn-group">
                <input
                    id="option1"
                    type="radio"
                    class="btn-check"
                    name="options"
                    autocomplete="off"
                    checked
                />
                <label class="btn btn-outline-secondary btn-checked-primary" for="option1"
                    >Checked</label
                >

                <input
                    id="option2"
                    type="radio"
                    class="btn-check"
                    name="options"
                    autocomplete="off"
                />
                <label class="btn btn-outline-secondary btn-checked-outline-danger" for="option2"
                    >Radio</label
                >

                <input
                    id="option3"
                    type="radio"
                    class="btn-check"
                    name="options"
                    autocomplete="off"
                    disabled
                />
                <label class="btn btn-outline-secondary btn-checked-red" for="option3"
                    >Disabled</label
                >

                <input
                    id="option4"
                    type="radio"
                    class="btn-check"
                    name="options"
                    autocomplete="off"
                />
                <label class="btn btn-outline-secondary btn-checked-green" for="option4"
                    >Radio</label
                >
            </div>
        </Sidebar>
    </div>
</template>
