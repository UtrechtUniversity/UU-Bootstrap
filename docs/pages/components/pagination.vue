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

const currentPage = ref(1);
const totalPages = ref(10);

const items = computed(() => {
    const delta = 1;
    const left = currentPage.value - delta;
    const right = currentPage.value + delta + 1;
    const range = [];
    const rangeWithDots = [];
    let l;

    for (let i = 1; i <= totalPages.value; i++) {
        if (i === 1 || i === totalPages.value || (i >= left && i < right)) range.push(i);
    }

    for (const i of range) {
        if (l) {
            if (i - l === 2) rangeWithDots.push(l + 1);
            else if (i - l !== 1) rangeWithDots.push("ELLIPSIS");
        }
        rangeWithDots.push(i);
        l = i;
    }

    return rangeWithDots;
});

function changePage(page: number) {
    currentPage.value = Math.min(Math.max(page, 1), totalPages.value);
}
</script>

<template>
    <div class="uu-content">
        <Head>
            <Title>Pagination | UU-Bootstrap docs</Title>
        </Head>
        <Sidebar id="buttons" placement="right" mobile-placement="bottom">
            <template #sidebar-button> Variables </template>
            <template #sidebar>
                <h1 class="uu-sidebar-header-linked d-lg-block d-none">Variables</h1>
                <Prism language="scss">
                    <pre>
$pagination-gap:            .625rem;
$pagination-size:           2.5rem;
$pagination-button-bg:      $black;
$pagination-ellipsis-color: $gray-700;
                    </pre>
                </Prism>
                <p>
                    Not listed, but also added are dark variants of all 'bg' and 'color' variables.
                    (Using the <code>-dark</code> postfix).
                </p>
                <p>These variables are in addition to Bootstrap's pagination vars.</p>
                <h2>See also</h2>
                <ul class="nav">
                    <li class="nav-item">
                        <NuxtLink
                            class="nav-link"
                            to="https://getbootstrap.com/docs/5.2/components/pagination/"
                            target="_blank"
                        >
                            Bootstrap pagination docs
                        </NuxtLink>
                    </li>
                </ul>
            </template>
            <h1 class="uu-sidebar-header-linked">Pagination</h1>
            <p>
                Pagination are mostly untouched aside from UU styling. Just a couple of small
                additions and notes;
            </p>
            <ul class="pagination justify-content-center" role="navigation" aria-label="pagination">
                <li class="page-item page-button" :class="currentPage === 1 ? 'disabled' : ''">
                    <a class="page-link" @click="changePage(currentPage - 1)"> Previous </a>
                </li>
                <li
                    v-for="item in items"
                    :key="item"
                    class="page-item"
                    :class="
                        (item === 'ELLIPSIS' ? 'page-ellipsis ' : '') +
                        (item === currentPage ? 'active' : '')
                    "
                >
                    <a class="page-link" @click="item !== 'ELLIPSIS' ? changePage(item) : 0">
                        {{ item }}
                    </a>
                </li>
                <li
                    class="page-item page-button"
                    :class="currentPage === totalPages ? 'disabled' : ''"
                >
                    <a class="page-link" @click="changePage(currentPage + 1)"> Next </a>
                </li>
            </ul>

            <h2 class="hdr-underlined">Ellipsis</h2>
            <p>
                To display ellipsis (the three dots), add the
                <code>.page-ellipsis</code> class to a <code>.page-item</code>. The item's content
                will automatically be hidden and replaced by the three dots.
            </p>
            <p>
                Please note that you still have to include an element with the
                <code>.page-link</code> class to make this work. This can be an <code>a</code> or a
                <code>span</code> element.
            </p>
            <h2 class="hdr-underlined">Pagination Button</h2>
            <p>
                The prev/next buttons should be decorated by a
                <code>.page-button</code> class. It will make it look pretty, but most importantly
                it will not force the item to be square.
            </p>
            <h3>Datatables</h3>
            <p>
                There's some custom CSS to make Datatables' buttons work correctly; if you find
                them, please don't use them.
            </p>
        </Sidebar>
    </div>
</template>
