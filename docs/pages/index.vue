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

const yarnCode = ref(`# Using SSH
yarn add "git+ssh://git@github.com:UtrechtUniversity/UU-Bootstrap.git#&lt;tag&gt;"
# Using HTTPS
yarn add "git+https://github.com/UtrechtUniversity/UU-Bootstrap.git#&lt;tag&gt;"`);

const importCode = ref(`// Put any variable overrides here

// Import the library
@import "node_modules/uu-bootstrap/scss/bootstrap";`);

const partialIncludeCode = ref(`// 1. Import banners for copyright notices
@import "node_modules/bootstrap/scss/mixins/banner";
@include bsBanner("");

// 2. Import the configuration data
@import "node_modules/uu-bootstrap/scss/configuration";

// 3. Include any config overrides here

// 4. Import font configuration
@import "node_modules/uu-bootstrap/scss/fonts";

// 5. Include remainder of required Bootstrap files
@import "node_modules/bootstrap/scss/helpers";
@import "node_modules/bootstrap/scss/utilities/api";

// 6. Optionally include any components here

// Note: this imports the entirety of bootstrap, you can replace further
// reduce that. See 'scss/components/bootstrap/_index.scss'
@import "node_modules/uu-bootstrap/scss/components/bootstrap";

@import "node_modules/uu-bootstrap/scss/components/text";
@import "node_modules/uu-bootstrap/scss/components/code";
@import "node_modules/uu-bootstrap/scss/components/stepper";
@import "node_modules/uu-bootstrap/scss/components/tiles";
@import "node_modules/uu-bootstrap/scss/components/modal-nav-tabs";

// Note: this imports the entirety of uu-layout, you can replace further
// reduce that. See 'scss/components/uu-layout/_index.scss
@import "node_modules/uu-bootstrap/scss/components/uu-layout";
`);
</script>

<template>
    <div class="uu-content">
        <Head>
            <Title>UU-Bootstrap docs</Title>
        </Head>
        <div class="uu-cover align-items-center">
            <img class="uu-cover-image" alt="cover" src="~/assets/cover3.jpg" />
            <div class="uu-cover-copyright">
                Photo by
                <a
                    href="https://unsplash.com/es/@lievemax?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                    >Lieve Ransijn</a
                >
                on
                <a
                    href="https://unsplash.com/photos/WunbySkHf54?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                    >Unsplash</a
                >
            </div>

            <div class="uu-cover-hero" id="index">
                <h1>UU-Bootstrap</h1>
            </div>
        </div>

        <Sidebar id="content" placement="left" mobile-placement="bottom" :sticky-sidebar="true">
            <template #sidebar-button> Navigation </template>
            <template #sidebar>
                <h2>Navigation</h2>
                <ul class="nav">
                    <li class="nav-item">
                        <a href="#index" class="nav-link"> Home </a>
                    </li>

                    <li class="nav-item">
                        <a href="#getting-started" class="nav-link"> Getting started </a>
                        <ul class="nav">
                            <li class="nav-item">
                                <a href="#CSS" class="nav-link"> CSS </a>
                                <ul class="nav">
                                    <li class="nav-item">
                                        <a href="#using-SCSS" class="nav-link"> Using SCSS </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#using-CSS" class="nav-link">
                                            Using pre-compiled CSS
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a href="#fonts" class="nav-link"> Fonts </a>
                            </li>
                            <li class="nav-item">
                                <a href="#js" class="nav-link"> JavaScript </a>
                            </li>
                            <li class="nav-item">
                                <a href="#partial-import" class="nav-link">
                                    (Advanced) Reducing bundle size
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <h2 class="mt-4">Copyright</h2>
                <p class="mt-2">
                    All files with a copyright header are available under the EUPL v1.2 license.
                </p>
            </template>
            <p>Welcome to the docs (/dev environment) for UU-Bootstrap!</p>
            <p>
                This documentation can be used to review changes from standard Bootstrap, extra
                components and more!
            </p>
            <h2 id="getting-started" class="hdr-underlined">Getting started</h2>
            <p>
                The theme can be used as part of your larger SCSS setup, or standalone using
                pre-compiled CSS.
            </p>
            <p>
                Bootstrap 5 is included in this library (either as a dependency or bundled), you
                don't need to import it's CSS separately. The JS side does need manual loading, more
                info down below.
            </p>
            <h2 id="CSS" class="hdr-underlined">CSS</h2>
            <h3 id="using-SCSS" class="mt-3">Using SCSS (recommended)</h3>
            <p>Using SCSS is recommended for easily extending and overriding variables.</p>
            <p>
                Add the library using yarn, replacing
                <code>&lt;tag&gt;</code> with the latest release tag. (Or leave out the tag to track
                develop)
            </p>
            <Prism language="bash" class="w-100">{{ yarnCode }}</Prism>
            <p class="mt-3">Then, in your main SASS file, include the main file:</p>
            <Prism language="scss" class="w-100">{{ importCode }}</Prism>
            <p class="mt-3">
                This will import the entire project into your SCSS setup. If you use a bundler and
                are not planning on adding and/or customizing anything, you can also insert the file
                above directly into your bundler SCSS settings.
            </p>
            <p>
                If you only want to use parts of the project, please see
                <a href="#partial-import"> this section </a>
            </p>
            <h3 id="using-CSS" class="mt-4">Using pre-compiled CSS</h3>
            <p>
                If you don't want to SASS, you can simply download the compiled versions from the
                <a href="https://github.com/UtrechtUniversity/UU-Bootstrap/releases">
                    releases page
                </a>
                on GitHub.
            </p>
            <p>
                There are 2 variants included, 'full' and 'lite'. The lite version does not include
                the components listed under 'UU-Layout', and is intended to be used for projects
                that don't use the full UU-style website layout.
            </p>
            <h2 id="fonts" class="mt-3 hdr-underlined">Fonts</h2>
            <p>
                We don't ship the required fonts (Open Sans and Merriweather) with this library.
                Please supply them yourself.
                <NuxtLink to="https://google-webfonts-helper.herokuapp.com/fonts" target="_blank">
                    You can download them easily here.
                </NuxtLink>
            </p>
            <p>
                By default, we expect fonts to be hosted from
                <code>/fonts/{font-name}</code>. This can be overriden by the
                <code>$merriweather-font-dir</code> and <code>$open-sans-font-dir</code> Sass
                variables.
            </p>
            <h2 id="js" class="hdr-underlined">JavaScript</h2>
            <p>
                The Bootstrap javascript files aren't bundled with this project. You'll either have
                to retrieve them from
                <code>node_modules</code> (if using sass/yarn), or download them from Bootstrap's
                website.
            </p>
            <h2 id="partial-import" class="hdr-underlined">(Advanced) reducing bundle size</h2>
            <p>
                If you want more control over what is included inside the final compiled CSS, you
                can also create a custom import file that only includes the parts you want. This is
                mostly useful to reduce bundle size.
            </p>
            <p>
                <Prism language="scss">{{ partialIncludeCode }}</Prism>
            </p>
        </Sidebar>
    </div>
</template>
