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
import { v4 as UUIDv4 } from "uuid";

interface Props {
    id?: string | null;
    placement?: "left" | "right";
    mobilePlacement?: "top" | "bottom";
    stickySidebar?: boolean;
    mobileStickySidebar?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
    id: null,
    placement: "left",
    mobilePlacement: "top",
    stickySidebar: false,
    mobileStickySidebar: false,
});

const elId = computed(() => {
    if (props.id !== null) return props.id;

    // Identifiers should start with a letter, but UUIDs aren't guaranteed to do that...
    return "id_" + UUIDv4().toString().replace(/-/g, "");
});

const placementClasses = computed(() => {
    let classes = "";

    if (props.placement === "right") classes += "uu-sidebar-right ";
    if (props.mobilePlacement === "bottom") classes += "uu-sidebar-mobile-bottom ";
    if (props.stickySidebar) classes += "uu-sidebar-sticky ";
    if (props.mobileStickySidebar) classes += "uu-sidebar-mobile-sticky ";

    return classes;
});
</script>

<template>
    <div class="uu-sidebar-container" :class="placementClasses">
        <aside class="uu-sidebar">
            <button
                class="uu-sidebar-toggle"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="'#' + elId"
                aria-expanded="false"
            >
                <slot name="sidebar-button" />
            </button>
            <div :id="elId" class="uu-sidebar-collapse collapse">
                <slot name="sidebar" />
            </div>
        </aside>
        <div class="uu-sidebar-content">
            <slot />
        </div>
    </div>
</template>
