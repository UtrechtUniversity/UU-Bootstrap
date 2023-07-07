<template>
    <div class="w-100">
        <Head>
            <Title>Portaldev Bootstrap theme docs</Title>
        </Head>
        <div class="uu-cover align-items-center">
            <img class="uu-cover-image" alt="cover" src="~/assets/cover3.jpg" />
            <div class="uu-cover-copyright">
                Photo by <a href="https://unsplash.com/es/@lievemax?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Lieve Ransijn</a> on <a href="https://unsplash.com/photos/WunbySkHf54?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>

            <div class="uu-cover-hero">
                <h1>Home</h1>
            </div>
        </div>
        <div class="uu-sidebar-container">
            <div class="uu-sidebar">
                <button
                    class="uu-sidebar-toggle"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#sidebar"
                    aria-expanded="false"
                >
                    Toggle sidebar mobile
                </button>
                <div id="sidebar" class="uu-sidebar-collapse collapse">
                    <h2>Copyright</h2>
                    <p class="mt-2">
                        All files with a copyright header are available under the EUPL v1.2 license.
                    </p>
                    <h2>
                        Cat!
                    </h2>
                    <img src="https://thecatapi.com/api/images/get?format=src" alt="Cat!" class="mt-2" />
                    <p>
                        Every project must contain a cat
                    </p>
                </div>
            </div>
            <div class="uu-sidebar-content">
                <p>
                    Welcome to the official docs (/dev environment) for the DH-IT Portaldev UU Bootstrap theme!
                </p>
                <p>
                    This documentation can be used to review changes from standard Bootstrap, extra components and more!
                </p>
                <h2 class="hdr-underlined">
                    Quick start
                </h2>
                <p>The theme can be used as part of your larger SASS setup, or standalone by including the compiled CSS.</p>
                <p>Bootstrap 5 is included in this library (either as a dependency or bundled), you don't need to import it's CSS separately. The JS side does need manual loading, more info down below.</p>
                <h3 class="hdr-underlined">
                    CSS
                </h3>
                <h4 class="hdr-underlined">
                    Using SASS (recommended)
                </h4>
                <p>
                    Using SASS is recommended for easily extending and overriding variables.
                </p>
                <p>
                    Add the library using yarn, replacing <code>&lt;tag&gt;</code> with the latest release tag. (Or leave out the tag to track develop)
                </p>
                <pre class="code"><code># Using SSH
yarn add "git+ssh://git@github.com/DH-IT-Portal-Development/bootstrap-theme.git#&lt;tag&gt;"
# Using HTTPS
yarn add "git+https://git@github.com/DH-IT-Portal-Development/bootstrap-theme.git#&lt;tag&gt;"</code></pre>
                <p class="mt-3">
                    Then, in your main SASS file, include the main file:
                </p>
                <pre class="code"><code>// Put any variable overrides here

// Import the library
@import "node_modules/uu-bootstrap/scss/bootstrap";</code></pre>
                <h4 class="hdr-underlined mt-4">
                    Using compiled CSS
                </h4>
                <p>
                    If you can't use SASS, you can simply include the compiled versions in <code>/dist/css/bootstrap(.min).css</code>
                </p>
                <h3 class="mt-3 hdr-underlined">
                    Fonts
                </h3>
                <p>
                    We don't ship the required fonts (Open Sans and Merriweather) with this library. Please supply them yourself.
                    <NuxtLink to="https://google-webfonts-helper.herokuapp.com/fonts" target="_blank">
                        Hint
                    </NuxtLink>
                </p>
                <p>
                    By default, we expect fonts to be hosted from <code>/fonts/{font-name}</code>. This can be overriden
                    by the <code>$merriweather-font-dir</code> and <code>$open-sans-font-dir</code> Sass variables.
                </p>
                <h3 class="hdr-underlined">
                    JavaScript
                </h3>
                <p>The Bootstrap javascript files aren't bundled with this project. You'll either have to retrieve them from <code>node_modules</code> (if using sass/yarn), or download them from Bootstrap's website.</p>

            </div>
        </div>
    </div>
</template>
