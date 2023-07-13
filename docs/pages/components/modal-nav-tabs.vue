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

const tab = ref(1);

const example = ref(`<div class="modal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <ul class="nav nav-tabs modal-nav-tabs">
                    <li class="nav-item">
                        <a href="#" class="nav-link active">
                            Active
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            Inactive
                        </a>
                    </li>
                </ul>
            </div>
            <div class="modal-body">
                <p>Modal body text goes here.</p>
            </div>
        </div>
    </div>
</div>`);
</script>

<template>
    <div class="uu-content">
        <Head>
            <Title>Modal Nav Tabs | Portaldev Bootstrap theme docs</Title>
        </Head>
        <div class="uu-hero">
            <h1>Modal Nav Tabs</h1>
        </div>
        <Sidebar
            id="buttons"
            placement="right"
            mobile-placement="bottom"
        >
            <template #sidebar-button>
                Variables
            </template>
            <template #sidebar>
                <h2 class="d-lg-block d-none">
                    Variables
                </h2>
                <Prism language="scss" class="w-100">
                    <pre>
$modal-nav-tabs-gap: 0.625rem;
$modal-nav-tabs-color: inherit;
$modal-nav-tabs-bg: none;
$modal-nav-tabs-active-color: var(--bs-modal-color);
$modal-nav-tabs-active-bg: var(--bs-modal-bg);
$modal-nav-tabs-hover-color: $black;
$modal-nav-tabs-hover-bg: $gray-100;
                    </pre>
                </Prism>
                <h3 class="mt-3">
                    See also
                </h3>
                <ul class="nav">
                    <li class="nav-item">
                        <NuxtLink
                            class="nav-link"
                            to="https://getbootstrap.com/docs/5.2/components/modal/"
                            target="_blank"
                        >
                            Bootstrap modal docs
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink
                            class="nav-link"
                            to="https://getbootstrap.com/docs/5.2/components/navs-tabs/"
                            target="_blank"
                        >
                            Bootstrap nav tabs docs
                        </NuxtLink>
                    </li>
                </ul>
            </template>
            <p>
                Modal Nav Tabs is a variant of Bootstrap Nav Tabs for use in
                a Modal's header, creating a tabbed-modal effect.
            </p>
            <p>
                Creating it is as simple as adding
                <code class="text-nowrap">.modal-nav-tabs</code> to a
                <code class="text-nowrap">.nav.nav-tabs</code> inside the modal
                header. It will automatically use the right background/text
                colors (header bg for inactive tabs, content bg for active tabs).
            </p>
            <div class="mt-3 mb-3">
                <div class="modal position-static d-block" tabindex="-1">
                    <div class="modal-dialog mt-0 mb-0">
                        <div class="modal-content">
                            <div class="modal-header">
                                <ul class="nav nav-tabs modal-nav-tabs">
                                    <li class="nav-item">
                                        <a
                                            href="#"
                                            class="nav-link"
                                            :class="tab === 1 ? 'active' :''"
                                            @click.prevent="tab = 1"
                                        >
                                            Tab 1
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a
                                            href="#"
                                            class="nav-link"
                                            :class="tab === 2 ? 'active' :''"
                                            @click.prevent="tab = 2"
                                        >
                                            Tab 2
                                        </a>
                                    </li>
                                </ul>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div class="modal-body">
                                <p v-if="tab === 1">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed ac tempor orci, et
                                    imperdiet ipsum. Suspendisse hendrerit
                                    turpis id quam sagittis, eget rhoncus dui
                                    tincidunt. Praesent ullamcorper interdum
                                    aliquam. Etiam placerat, augue id venenatis
                                    laoreet, enim risus consectetur risus, sed
                                    accumsan massa dui at dui. Phasellus
                                    condimentum mi vitae turpis consectetur, non
                                    dapibus arcu sollicitudin. Sed eget congue
                                    justo. Curabitur tristique pharetra orci ac
                                    sollicitudin. Praesent malesuada dui quis
                                    tristique sollicitudin. Pellentesque nisi
                                    massa, ullamcorper id gravida sed, lacinia
                                    eget quam.
                                </p>
                                <p v-if="tab === 2">
                                    Nullam sit amet quam sed nisi luctus
                                    pretium. Integer mattis non justo eget
                                    molestie. Nullam vestibulum libero sit amet
                                    maximus aliquam. Donec feugiat ante eu odio
                                    commodo eleifend id id nisl. Suspendisse
                                    rutrum leo et elit egestas dapibus.
                                    Vestibulum augue orci, interdum in
                                    sagittis sit amet, imperdiet a quam.
                                    Maecenas a tempor dui.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Prism language="html">
                {{ example }}
            </Prism>

        </Sidebar>
    </div>
</template>
