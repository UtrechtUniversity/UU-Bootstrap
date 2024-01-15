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

const range = ref([...Array(5).keys()]);
const exampleCode = ref(`<div class="tiles">
    <a class="tile">
        <strong class="mb-auto">Tile 1</strong>
        <span>Something </span>
    </a>
    <a class="tile">
        <strong class="mb-auto">Tile 2</strong>
        <span>Something </span>
    </a>
</div>`);

const variables = ref([
    {
        variable: "$tiles-gap",
        defaultValue: "0.0625rem",
        comment: "The gap between tiles",
        cssVar: true,
        dark: false,
    },
    {
        variable: "$tiles-padding",
        defaultValue: "1rem",
        comment: "The padding applied to individual tiles",
        cssVar: true,
        dark: false,
    },
    {
        variable: "$tiles-bg",
        defaultValue: "$light",
        comment: "The background of a tile. $dark for dark mode",
        cssVar: true,
        dark: true,
    },
    {
        variable: "$tiles-color",
        defaultValue: `
color-contrast(
$tiles-color
)`,
        comment: "The text color of a tile",
        cssVar: true,
        dark: true,
    },
    {
        variable: "$tiles-hover-bg",
        defaultValue: "$primary",
        comment: "The background of a tile when hovering over it.",
        cssVar: true,
        dark: true,
    },
    {
        variable: "$tiles-hover-color",
        defaultValue: `
color-contrast(
$tiles-hover-bg
)`,
        comment: "The text color of a tile when hovering over it.",
        cssVar: true,
        dark: true,
    },
    {
        variable: "$tiles-n-breakpoints-map",
        defaultValue: `(
    xs: 2,
    sm: 4,
    md: 5,
    lg: 6,
    xl: 7,
)`,
        comment: "Controls the default tiles per row per breakpoint",
        cssVar: false,
        dark: false,
    },
]);
</script>
<template>
    <div class="uu-content">
        <Head>
            <Title>Tiles | UU-Bootstrap docs</Title>
        </Head>
        <div class="uu-hero">
            <h1>Tiles</h1>
        </div>
        <div class="uu-container">
            <div class="col-12">Tiles is an responsive navigational component.</div>
        </div>
        <div class="uu-container flex-nowrap">
            <div class="tiles">
                <a v-for="i in range" :key="i" class="tile">
                    <strong>Tile {{ i }}</strong>
                </a>
            </div>
        </div>
        <div class="uu-container">
            <div class="col-12">
                <h2 id="usage">Basic usage</h2>
                <p>
                    Tiles consist of a (<code>div</code>) container element with the
                    <code>.tiles</code> class, containing a set of tiles with the
                    <code>.tile</code> class. The actual tile element does not matter much, but it
                    is recommended to use an <code>a</code> element.
                </p>
                <p>
                    If using a <code>span</code> or <code>div</code> element, you might want to
                    manually add <code class="text-nowrap">.cursor-pointer</code> to the element.
                </p>
                <prism language="html" class="w-100">
                    {{ exampleCode }}
                </prism>
            </div>
        </div>
        <div class="uu-container">
            <div class="col-12">
                <h2>Tile layout</h2>
                <p>
                    By default, tile contents will be centered using (column) FlexBox, so the
                    standard methods for layouting can be used. A few examples:
                </p>
                <div class="tiles">
                    <a class="tile">
                        <span>Default</span>
                        <span>Behaviour</span>
                        <span>Example</span>
                    </a>
                    <a class="tile">
                        <span class="mb-auto">Margin</span>
                        <span>Auto</span>
                        <span>Example</span>
                    </a>
                    <a class="tile justify-content-between">
                        <span>Flex</span>
                        <span>Between</span>
                        <span>Example</span>
                    </a>
                    <a class="tile justify-content-evenly">
                        <span>Flex</span>
                        <span>Evenly</span>
                        <span>Example</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="uu-container">
            <div class="col-12">
                <h2 id="responsive">Responsive behaviour</h2>
                <p>
                    Tiles will automatically change the amount of tiles depending on screen width.
                    The defaults can be viewed in the table below.
                </p>
                <p>
                    It is also possible to override the amount of tiles using the classes also
                    listed in the table. <code>n</code> can be a number between 1 and 12
                    (inclusive). Alternatively, one can set an arbitrary number using the
                    <code class="text-nowrap">bs-tiles-n-#{$breakpoint}</code> CSS variable per
                    breakpoint, or globally using <code class="text-nowrap">bs-tiles-n</code>.
                </p>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Breakpoint</th>
                            <th v-for="name in ['xs', 'sm', 'md', 'lg', 'xl']">
                                {{ name }}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Default tiles per row</th>
                            <td v-for="i in [2, 4, 5, 6, 7]">
                                {{ i }}
                            </td>
                        </tr>
                        <tr>
                            <th>CSS class</th>
                            <td v-for="name in ['xs', 'sm', 'md', 'lg', 'xl']">
                                .tiles-n-{{ name }}-{n}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="uu-container">
            <div class="col-12">
                <h2 id="variables">Variables</h2>
                <p>
                    The following variables are available. Not all of them are also exposed as CSS
                    variables, which is indicated by the 'CSS var?' column. Color related variables
                    also have dark theme variant SCSS variable, all with the
                    <code>-dark</code> postfix. This is indicated by the 'Dark variant?' column.
                </p>
                <p>
                    CSS vars can be overriden by setting them in CSS under the
                    <code>.tiles</code> class, using the default Bootstrap CSS var prefix.
                </p>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Variable</th>
                            <th>Default value</th>
                            <th>Comment</th>
                            <th>CSS Var?</th>
                            <th>Dark variant?</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="variable in variables" :key="variable.variable">
                            <td>
                                <code>{{ variable.variable }}</code>
                            </td>
                            <td>
                                <code>{{ variable.defaultValue }}</code>
                            </td>
                            <td>{{ variable.comment }}</td>
                            <td>{{ variable.cssVar ? "Yes" : "No" }}</td>
                            <td>{{ variable.dark ? "Yes" : "No" }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
