<script lang="ts" setup>
import { v4 as UUIDv4 } from 'uuid';

interface Props {
    id?: string | null,
    placement?: 'left'|'right',
    mobilePlacement?: 'top'|'bottom',
}
const props = withDefaults(defineProps<Props>(), {
    id: null,
    placement: 'left',
    mobilePlacement: 'top',
});

const elId = computed(() => {
    if (props.id !== null)
        return props.id;

    // Identifiers should start with a letter, but UUIDs aren't guaranteed to do that...
    return 'id_' + UUIDv4().toString().replace(/-/g, '');
});

const placementClasses = computed(() => {
    let classes = "";

    if (props.placement === 'right')
        classes += 'uu-sidebar-right ';
    if (props.mobilePlacement === 'bottom')
        classes += 'uu-sidebar-mobile-bottom ';

    return classes;
});

</script>

<template>
    <div class="uu-sidebar-container" :class="placementClasses">
        <div class="uu-sidebar">
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
        </div>
        <div class="uu-sidebar-content">
            <slot />
        </div>
    </div>
</template>
