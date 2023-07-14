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
<script setup lang="ts">
import { v4 as UUIDv4 } from "uuid";
import { Ref } from "vue";
import { Modal } from "bootstrap";

interface Props {
    id?: string | null;
    active: boolean;
    hasBackground?: boolean;
    backgroundClickCloses?: boolean;
    showCloseButton?: boolean;
    size?: "small" | "default" | "large" | "extra-large";
    headerColor?: string | undefined | null;
    headerBold?: boolean;
    centered?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
    id: null,
    hasBackground: true,
    backgroundClickCloses: true,
    showCloseButton: true,
    size: "default",
    headerColor: "primary",
    headerBold: true,
    centered: false,
});

// eslint-disable-next-line func-call-spacing
const emit = defineEmits<{
    (e: "shown"): void;
    (e: "hidden"): void;
    (e: "close-clicked"): void;
}>();

const nuxt = useNuxtApp();

const elId = computed(() => {
    if (props.id !== null) return props.id;

    return "id_" + UUIDv4().toString();
});

const modalClasses = computed(() => {
    let cls = "";

    if (props.centered) cls += "modal-dialog-centered ";

    switch (props.size) {
        case "small":
            cls += "modal-sm modal-fullscreen-sm-down";
            break;
        case "large":
            cls += "modal-lg modal-fullscreen-lg-down";
            break;
        case "extra-large":
            cls += "modal-xl modal-fullscreen-xl-down";
            break;
        default:
            cls += " modal-fullscreen-md-down";
            break;
    }

    return cls;
});

const headerClasses = computed(() => {
    let cls = "";

    if (typeof props.headerColor !== "undefined" && props.headerColor !== null)
        cls += `text-bg-${props.headerColor} `;

    if (props.headerBold) cls += "fw-bold ";

    return cls;
});

let bsModal: Ref<Modal> | undefined;
let modalEl: Ref<HTMLElement | null> | undefined;

function switchBsModal(show: boolean) {
    if (show) bsModal?.value?.show();
    else bsModal?.value?.hide();
}

onMounted(() => {
    modalEl = ref(document.getElementById(elId.value));
    // Should not happen, but makes the compiler happy
    if (
        typeof modalEl === "undefined" ||
        typeof modalEl.value === "undefined" ||
        modalEl.value === null
    )
        return;

    let backdrop: boolean | "static" = props.hasBackground;
    if (backdrop && !props.backgroundClickCloses) backdrop = "static";

    bsModal = ref(
        new nuxt.$bootstrap.Modal(modalEl.value, {
            backdrop,
        })
    );

    modalEl.value?.addEventListener("hidden.bs.modal", () => emit("hidden"));
    modalEl.value?.addEventListener("shown.bs.modal", () => emit("shown"));

    switchBsModal(props.active);
});

onUnmounted(() => {
    bsModal?.value?.dispose();
});

watch(
    () => props.active,
    (newValue) => {
        switchBsModal(newValue);
    }
);
</script>

<template>
    <Teleport to="body">
        <div :id="elId" class="modal fade" tabindex="-1">
            <div
                class="modal-dialog modal-dialog-scrollable"
                :class="modalClasses"
            >
                <div class="modal-content">
                    <div
                        v-if="$slots.title || showCloseButton"
                        class="modal-header"
                        :class="headerClasses"
                    >
                        <p v-if="$slots.title" class="modal-title mw-100">
                            <slot name="title" />
                        </p>
                        <button
                            v-if="showCloseButton"
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>

                    <div class="modal-body">
                        <slot />
                    </div>

                    <div
                        v-if="$slots.footer"
                        class="modal-footer justify-content-start"
                    >
                        <slot name="footer" />
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<style scoped></style>
