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
<template>
    <div class="w-100">
        <Head>
            <Title>Migrating | Portaldev Bootstrap theme docs</Title>
        </Head>
        <div class="uu-hero">
            <h1>Migrating from bootstrap 4</h1>
        </div>
        <div class="uu-container">
            <div class="col-12">
                <p>
                    This Bootstrap 5 version is a re-implementation of the old theme, thus isn't
                    backwards compatible. In particular, the base layout has been completely
                    re-imagined. However, as every project uses the same Django base template,
                    you'll only need to update project to CDH core 3+. This has the new layout
                    already implemented in it's new base-template.
                </p>
                <p>
                    There are however, more caveats; firstly, Bootstrap 5 has it's own breaking
                    changes, see their
                    <NuxtLink to="https://getbootstrap.com/docs/5.2/migration/" target="_blank">
                        documentation.
                    </NuxtLink>
                    Really. Do read them for a bit, just scroll through anything marked 'breaking'
                    if you don't want to read all of it.
                </p>
                <h3 class="hdr-underlined">Containers</h3>
                <p>
                    The <code>.uu-inner-container</code> class is now deprecated. Please use the
                    new, equivalent, <code>.uu-container</code> or <code>.uu-row</code> classes. The
                    old class is still provided as a fallback, but it's a hack and is going to be
                    removed at some point.
                </p>
                <p>
                    The new classes now come with vertical padding, so any
                    <code>.mt-{x} .mb-{x}</code> classes <i>probably</i> aren't needed anymore. Feel
                    free to use them anyway if you want tho.
                </p>
                <p>
                    Lastly, while previously you could 'cheat' and take the full 1600px of the outer
                    container by simply omitting a
                    <code>.uu-inner-container</code>, this was never supported nor intended and now
                    looks fugly (or might break your page entirely). Instead, use the new
                    <code>.uu-fullwidth-container</code> that was newly created for this purpose.
                </p>
                <h3 class="hdr-underlined">Buttons</h3>
                <p>
                    The previously completely custom <code>.button</code> based classes have not
                    been ported. Instead, use Bootstrap buttons (<code>.btn</code> based).
                </p>
                <p>
                    Buttons don't get a background color by default anymore, so remember to set a
                    <i>button variant class</i> on your existing buttons. The two you'll probably
                    need are <code>.btn-primary</code> (UU yellow) and
                    <code>.btn-secondary</code> (black).
                </p>
                <p>Also, the paddings are a bit different, keep that in mind.</p>
                <h3 class="hdr-underlined">Visibility helpers</h3>
                <p>
                    <code>.show-xs</code> and <code>.hide-xs</code> were not ported. Please use the
                    <NuxtLink to="https://getbootstrap.com/docs/5.2/utilities/display/">
                        Bootstrap Display utilities
                    </NuxtLink>
                    instead.
                </p>
            </div>
        </div>
    </div>
</template>
