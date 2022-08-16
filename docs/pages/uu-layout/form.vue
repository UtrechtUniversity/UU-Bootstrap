<script lang="ts" setup>
import Prism from 'vue-prism-component';
import Sidebar from '@/components/sidebar';
import UuLayoutNav from "~/components/uu-layout-nav.vue";

const example1 = ref(`<form class="uu-form">
    <!--Every field has it's own uu-form-row-->
    <div class="uu-form-row">
        <div class="uu-form-field">
            <label for="example1" class="form-label">Example</label>
            <input class="form-control" />
        </div>
        <aside class="uu-form-help">
            Blablablabla
        </aside>
    </div>
    <div class="row">
        <div class="col-12">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </div>
</form>`);

const example2 = ref(`<div class="uu-form-text-row">
    <div class="uu-form-text">
        Some information....
    </div>
    <aside class="uu-form-text-aside">
        See these links: ...
    </aside>
</div>`);
</script>
<template>
    <div class="uu-content">
        <Head>
            <Title>
                Form | UU Layout | Portaldev Bootstrap theme docs
            </Title>
        </Head>
        <div class="uu-hero">
            <h1>UU Layout Form</h1>
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
$uu-form-breakpoint: lg;
$uu-form-column-gap: 2rem;
$uu-form-row-gap: 1.5rem;
$uu-form-field-padding-x: 1.5rem;
$uu-form-field-padding-y: 1.3rem;
$uu-form-field-padding-y-compensation: 5px;
$uu-form-field-bg: colors.$light;
$uu-form-field-input-group-bg: colors.$gray-050;
$uu-form-aside-font-size: 0.9rem;
$uu-form-aside-color: bootstrap.$text-muted;
$uu-form-help-padding-x: 0;
$uu-form-help-padding-y: .5rem;
                    </pre>
                </Prism>
            </template>
            <p>
                The UU Layout Form is a mobile friendly layout component for forms, used for new (and retrofitted)
                'form-centric applications'.
            </p>
            <div class="alert alert-info">
                For formatting reasons there are no visual examples on this page. Please see the <NuxtLink to="/examples/forms">
                    form example page
                </NuxtLink> for an interactive example.
            </div>
            <h2 class="mt-3">
                Basic layout
            </h2>
            <p>
                A UU form is created by adding <code class="text-nowrap">.uu-form</code> to a <code>form</code>
                (or <code>div</code>).
                Each field gets it's own <code class="text-nowrap">.uu-form-row</code> container containing a
                <code class="text-nowrap">.uu-form-field</code> and (optionally) a
                <code class="text-nowrap">.uu-form-help</code>.
            </p>
            <p>
                <code class="text-nowrap">.uu-form-field</code> can contain any Bootstrap form element, and needs no
                special formatting.
            </p>
            <p>
                Any buttons should be outside any form row, in the example below we use a simple row/col-12 combo, but
                it's not required.
            </p>
            <Prism language="html">
                {{ example1 }}
            </Prism>

            <h2 class="mt-3">
                Text
            </h2>
            <p>
                A variant of the <code class="text-nowrap">.uu-form-row</code> is the
                <code class="text-nowrap">.uu-form-text-row</code>. This class can be used to display text inside the
                same column structure as fields, but without the visual container.
            </p>
            <p>
                The aside can be used for general help/side content. If you don't need an aside, you should probably
                use a row/col-12 combo or equivalent.
            </p>
            <Prism language="html">
                {{ example2 }}
            </Prism>
            <div class="alert alert-warning">
                You can use this element anywhere inside the form element, but you probably want to play with the
                margins if you don't use this as the topmost element.
            </div>
            <h2 class="mt-3">
                Variants
            </h2>
            <h3>
                No gap
            </h3>
            <p>
                <code class="text-nowrap">.uu-form-no-gap</code> can be used to remove the gap between field rows, for
                an visually contiguous block. This class can be added to <code>.uu-form</code> to remove gaps globally
                or <code class="text-nowrap">.uu-form-row</code> for a single row (removes the gap below only).
            </p>
            <h3>
                No help/no aside
            </h3>
            <p>
                <code class="text-nowrap">.uu-form-no-help</code> and <code class="text-nowrap">.uu-form-no-aside</code>
                can be used to completely remove the help or aside column respectively. It can be added to
                <code>.uu-form</code> to remove globally or
                <code class="text-nowrap">.uu-form-row</code>/<code class="text-nowrap">.uu-form-text-row</code> to
                remove it on a single row.
            </p>
            <p>
                This is intended for pages that want a help column that uncoupled from specific questions. In which case
                one should wrap the form inside a <code>.col-8</code> for example.
            </p>
        </Sidebar>
    </div>
</template>
