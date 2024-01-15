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

function pickRandom(array: string[]) {
    return array[Math.floor(Math.random() * array.length)];
}

const fakeTableData = computed(() => {
    const firstnames = [
        "John",
        "Jane",
        "Tim",
        "Agnes",
        "Boy",
        "Karin",
        "Margaret",
        "Boris",
        "Mark",
        "Sigrid",
        "Dick",
        "K.C.",
    ];
    const lastnames = [
        "Doe",
        "Thatcher",
        "Johnson",
        "Jameson",
        "Fos",
        "Marks",
        "Thijs",
        "Janssen",
        "Denton",
    ];

    const data = [];

    for (let i = 0; i < 40; i++) {
        data.push({
            firstname: pickRandom(firstnames),
            lastname: pickRandom(lastnames),
            age: Math.floor(Math.random() * 100),
        });
    }

    return data;
});
</script>
<template>
    <div class="w-100">
        <Head>
            <Title>Extensions | UU-Bootstrap docs</Title>
        </Head>
        <div class="uu-hero">
            <h1>Extensions</h1>
        </div>
        <Sidebar id="color" placement="right" mobile-placement="bottom">
            <template #sidebar-button> Variables </template>
            <template #sidebar>
                <h1 class="uu-sidebar-header-linked d-lg-block d-none">Variables</h1>
                <prism language="scss" class="w-100">
                    <pre>
//// UU Color palette
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
</pre
                    >
                </prism>
                <p>
                    Shade variants are not included in the overview above as they're calculated on
                    the fly.
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

            <h1 class="uu-sidebar-header-linked">Colors</h1>
            <p>
                All colors from the
                <NuxtLink
                    to="https://www.uu.nl/en/organisation/corporate-identity/brand-policy/colour"
                    target="_blank"
                >
                    UU Colour Palette
                </NuxtLink>
                are added to <code>$colors</code>. In addition, <code>$theme-colors</code> are
                extended with all colors in <code>$colors</code>, thus ensuring that they are
                present in all dynamic Bootstrap classes as well. (For example,
                <code>.text-red</code> and <code>.bg-teal</code> are now also available).
            </p>
            <h3 class="hdr-underlined mt-3">Hover backgrounds</h3>
            <p>
                A new set of helper classes for backgrounds on hover are added:
                <code>.text-bg-hover-{color}</code>. For example:
            </p>
            <p>(note: animation is added on this page, it's not standard)</p>

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
        <Sidebar id="table" placement="right" mobile-placement="bottom">
            <template #sidebar-button> Links </template>
            <template #sidebar>
                <h1 class="uu-sidebar-header-linked d-lg-block d-none">Links</h1>
                <ul class="nav">
                    <li class="nav-item">
                        <NuxtLink
                            href="https://getbootstrap.com/docs/5.2/content/tables/"
                            target="_blank"
                            class="nav-link"
                        >
                            Bootstrap Table docs
                        </NuxtLink>
                    </li>
                </ul>
            </template>
            <h1 class="uu-sidebar-header-linked">Table sticky header/footer</h1>
            <p>
                For big tables it might be handy to have the table header 'stick' to the top (or the
                footer to the bottom). For this usecase,
                <code class="text-nowrap">.table-sticky-header</code> and
                <code class="text-nowrap">.table-sticky-footer</code> have been added as modifiers
                for <code class="text-nowrap">table.table</code>.
            </p>
            <p>
                By default tables have their background set to
                <code>transparant</code>; as a consequence, the sticky header/footer will have no
                background resulting the table content being visible behind the sticky
                header/footer.<br />
                Thus, it is highly recommended you apply a table variant to the
                <code>table</code> or the 'sticky' <code>thead</code>/<code>tfoot</code>.
            </p>
            <div class="alert alert-warning">
                <p>
                    If the table is used inside an UU layout container, the header will
                    automatically compensate for the sticky navbar to make sure the table header is
                    just below the navbar.
                </p>
                <p>
                    This can cause problems if the
                    <em>nearest scrolling ancestor</em> of the table is not the UU layout root
                    container. In which case, you should add
                    <code class="text-nowrap">.table-sticky-header-top-0</code>
                    on the table to force the table to never compensate.
                </p>
                <p>
                    There are also similar cases where the default
                    <code>top</code> setting will force the header behind/on top of another element.
                    In which case you should set the
                    <code>top</code>
                    value manually.
                </p>
            </div>
            <table
                class="table table-striped table-striped table-sticky-header table-sticky-footer"
            >
                <thead class="table-primary">
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="person in fakeTableData">
                        <td>
                            {{ person.firstname }}
                        </td>
                        <td>
                            {{ person.lastname }}
                        </td>
                        <td>
                            {{ person.age }}
                        </td>
                    </tr>
                </tbody>
                <tfoot class="table-light">
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Age</th>
                    </tr>
                </tfoot>
            </table>
        </Sidebar>
        <Sidebar id="cursor" placement="right" mobile-placement="bottom">
            <template #sidebar-button> Variables </template>
            <template #sidebar>
                <h1 class="uu-sidebar-header-linked d-lg-block d-none">Variables</h1>
                <Prism language="scss" class="w-100">
                    <pre>
$utilities: map-merge(
  $utilities,
  (
    "cursor": (
      property: cursor,
      class: cursor,
      responsive: true,
      values: auto pointer grab copy default help text none not-allowed progress wait zoom-in zoom-out,
    )
  )
);</pre
                    >
                </Prism>
            </template>
            <h1 class="uu-sidebar-header-linked">Cursors</h1>
            <p>
                Bootstrap is suspiciously missing some really useful cursor utility classes, so we
                added them!
            </p>
            <p>The following cursor classes have been added:</p>
            <ul>
                <li
                    v-for="cursor in [
                        'pointer',
                        'not-allowed',
                        'progress',
                        'wait',
                        'grab',
                        'copy',
                        'zoom-in',
                        'zoom-out',
                        'help',
                        'text',
                        'default',
                        'auto',
                        'none',
                    ]"
                    :key="cursor"
                    :class="'cursor-md-' + cursor"
                >
                    <code class="text-nowrap">cursor-{{ cursor }}</code> and
                    <code class="text-nowrap">cursor-{sm|md|lg|xl|xxl}-{{ cursor }}</code>
                </li>
            </ul>
        </Sidebar>
        <Sidebar id="text" placement="right" mobile-placement="bottom">
            <template #sidebar-button> Variables </template>
            <template #sidebar>
                <h1 class="uu-sidebar-header-linked d-lg-block d-none">Variables</h1>
                None
            </template>
            <h1 class="uu-sidebar-header-linked">Text</h1>
            <p>Just 2 small additions:</p>
            <ul>
                <li>
                    <code>h{i}.hdr-underlined</code> adds an underline to headers; see all the
                    headers on this page.
                </li>
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
