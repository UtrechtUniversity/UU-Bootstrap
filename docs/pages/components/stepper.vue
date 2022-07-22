<script lang="ts" setup>
import {onMounted} from "#imports";
import {useNuxtApp} from "#app";
import Prism from 'vue-prism-component';

const nuxt = useNuxtApp();

const example1 = ref(`<div class="stepper">
    <ul>
        <li>
            <a class="stepper-item">
                <span class="stepper-bubble stepper-bubble-largest">1</span>
                <span>Hello</span>
            </a>
        </li>
        <li>
            <a class="stepper-item">
                <span class="stepper-bubble stepper-bubble-largest">2</span>
                <span>World</span>
            </a>
        </li>
        <li>
            <a class="stepper-item">
                <span class="stepper-bubble stepper-bubble-largest">3</span>
                <span>This has children</span>
            </a>
            <ul>
                <li>
                    <a class="stepper-item">
                        <span class="stepper-bubble stepper-bubble-large"></span>
                        <span>Child 1</span>
                    </a>
                </li>
                <li>
                    <a class="stepper-item">
                        <span class="stepper-bubble stepper-bubble-large"></span>
                        <span>Child 2</span>
                    </a>
                </li>
            </ul>
        </li>
    </ul>
</div>`);

const example2 = ref(`<div class="d-md-none">
    <button
            id="stepper-button"
            class="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#stepper"
            aria-controls="stepper"
    >
        Stepper
    </button>
</div>

<div id="stepper" class="offcanvas-md offcanvas-start" tabindex="-1" aria-labelledby="stepperLabel">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="stepperLabel">Stepper</h5>
        <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                data-bs-target="#stepper"
                aria-label="Close"
        ></button>
    </div>
    <div class="offcanvas-body">
        <div class="stepper">
            <ul>
                <!-- Stepper content -->
            </ul>
        </div>
    </div>
</div>`);

onMounted(() => {
    const el = document.getElementById('content');
    // Fixes hot update breaking scrollspy.. Sometimes
    nuxt.$bootstrap.ScrollSpy.getInstance(el)?.refresh();

    el?.addEventListener('activate.bs.scrollspy', (e) => {
        const elements = document.querySelectorAll('.stepper-item');
        let add = true;
        for (const element of elements) {
           if (element.classList.contains('active'))
               add = false;

           element.querySelector('.stepper-bubble')?.classList.toggle('complete', add)
        }
    })
});
</script>
<template>
    <div class="uu-content">
        <Head>
            <Title>Stepper | Portaldev Bootstrap theme docs</Title>
        </Head>
        <div class="uu-hero">
            <h1>Stepper</h1>
        </div>
        <div class="uu-container flex-nowrap">
            <div class="stepper-container">
                <div class="stepper" id="stepper">
                    <ul>
                        <li>
                            <a class="stepper-item" href="#introduction">
                                <span class="stepper-bubble stepper-bubble-largest">1</span>
                                <span>Introduction</span>
                            </a>
                        </li>
                        <li>
                            <a class="stepper-item" href="#usage">
                                <span class="stepper-bubble stepper-bubble-largest">2</span>
                                <span>Usage</span>
                            </a>
                        </li>
                        <li>
                            <a class="stepper-item" href="#tree">
                                <span class="stepper-bubble stepper-bubble-largest">3</span>
                                <span>Tree</span>
                            </a>
                        </li>
                        <li>
                            <a class="stepper-item" href="#status">
                                <span class="stepper-bubble stepper-bubble-largest">4</span>
                                <span>Status</span>
                            </a>
                            <ul>
                                <li>
                                    <a class="stepper-item" href="#text-status">
                                        <span class="stepper-bubble stepper-bubble-large"></span>
                                        <span>Text</span>
                                    </a>
                                    <ul>
                                        <li>
                                            <a class="stepper-item" href="#incomplete">
                                                <span class="stepper-bubble stepper-bubble-medium"></span>
                                                <span>Active</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="stepper-item" href="#complete">
                                                <span class="stepper-bubble stepper-bubble-medium"></span>
                                                <span>Disabled</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a class="stepper-item" href="#bubble-status">
                                        <span class="stepper-bubble stepper-bubble-large"></span>
                                        <span>Bubble</span>
                                    </a>
                                    <ul>
                                        <li>
                                            <a class="stepper-item" href="#incomplete">
                                                <span class="stepper-bubble stepper-bubble-medium"></span>
                                                <span>Incomplete</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="stepper-item" href="#complete">
                                                <span class="stepper-bubble stepper-bubble-medium"></span>
                                                <span>Complete</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a class="stepper-item" href="#responsive">
                                <span class="stepper-bubble stepper-bubble-largest">5</span>
                                <span>Responsive</span>
                            </a>
                        </li>
                        <li>
                            <a class="stepper-item" href="#variables">
                                <span class="stepper-bubble stepper-bubble-largest">6</span>
                                <span>Variables</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="scrollspy-content" id="content" data-bs-target="#stepper" data-bs-spy="scroll">
                <h1 id="introduction">Introduction</h1>
                <p>
                    The stepper is meant for navigation in a multi-page process (forms) to visualize where a user is
                    in a process and (optionally) navigate between the steps. In addition, it can provide feedback on
                    the status of the individual steps (e.g. if a step is complete, incomplete or not yet started).
                </p>
                <div class="alert alert-info mb-4">
                    <p class="fw-bold">
                        Note
                    </p>
                    <p class="mb-0">
                        This component was designed for multi-page applications, thus the actual component itself is
                        <i>static</i>. For demo purposes this page uses custom js/css and Bootstrap's ScrollSpy to demo
                        the stepper in a single page; normally you need to program any dynamic changes yourself.
                    </p>
                </div>
                <h1 id="usage">Usage</h1>
                <prism language="html" class="w-100">
                    {{ example1 }}
                </prism>
                <p>
                    Some notes:
                </p>
                <ul>
                    <li>
                        <code>.stepper-item</code> elements don't have to be a <code>a</code> tag, <code>div</code>
                        or <code>span</code> work just as well.
                    </li>
                    <li>
                        Bubbles can optionally have content (e.g. step number), however it is recommended (for
                        readability) you limit this to the top-level items only.
                    </li>
                    <li>
                        Both <code>.stepper-bubble</code> and <code>.stepper-bubble-{size}</code> are required.
                    </li>
                    <li>
                        Nesting <code>ul</code> elements for nested items is not strictly necessary (see below for
                        more), but is recommended
                    </li>
                </ul>

                <h1 id="tree" class="mt-3">Tree</h1>
                <p>
                    By default, the stepper supports five levels of 'depth'. This is done by setting one of five bubble
                    'size' classes:
                </p>
                <ul>
                    <li><code>.stepper-bubble-largest</code></li>
                    <li><code>.stepper-bubble-large</code></li>
                    <li><code>.stepper-bubble-medium</code></li>
                    <li><code>.stepper-bubble-small</code></li>
                    <li><code>.stepper-bubble-smallest</code></li>
                </ul>
                <p>
                    It is recommended to use the largest size for your root items, going down a level for each level of
                    tree depth. If you only have 3 levels of depth, it's possible to skip the large and small sizes for
                    increased distinction between levels.
                </p>
                <p>
                    As the bubbles are responsible for creating the visual hierarchy, using nested <code>ul</code>
                    elements is not required. In other words, a flat <code>ul</code> with different sizes is possible.
                    <br/>
                    However, for accessibility reasons it is recommended you use nested lists (mostly because
                    screenreaders understand those better).
                </p>
                <h1 id="status" class="mt-3">Status</h1>
                <p>
                    The main function of the stepper (besides navigation) is status indications. These statuses can be
                    represented using either the text styling or the bubble styling. In total, there are 5 statuses, 4
                    of which are achieved using modifier classes. The fifth is the default styling, which represents
                    a navigable unstarted step.
                </p>
                <div class="row">
                    <div class="col-8 pe-4">
                        <h2 id="text-status">Text</h2>
                        <h3 id="active">Active</h3>
                        <p>
                            The active state means 'you are here', and is achieved by adding the <code>.active</code> class
                            to the <code>.stepper-item</code> element. This status can be mixed with both bubble status
                            modifiers. (Well, also with disabled, but that doesn't make any sense)
                        </p>
                        <h3 id="disabled">Disabled</h3>
                        <p>
                            The disabled state means 'this step exists, but is not navigable', for steps that require other
                            steps to be completed first. Use by adding <code>.disabled</code> to the
                            <code>.stepper-item</code> element.
                        </p>
                        <h2 id="bubble-status">Bubble</h2>
                        <h3 id="incomplete">Incomplete</h3>
                        <p>
                            An incomplete status means a user has reached this step, but has not completed it yet.
                        </p>
                        <p>
                            Use by adding the <code>.incomplete</code> class to either the <code>.item-stepper</code>
                            element or the <code>.stepper-bubble</code> element directly.
                        </p>
                        <h3 id="complete">Complete</h3>
                        <p>
                            An incomplete status means a user has completed this step.
                        </p>
                        <p>
                            Use by adding the <code>.complete</code> class to either the <code>.item-stepper</code>
                            element or the <code>.stepper-bubble</code> element directly.
                        </p>
                    </div>
                    <div class="col-4">
                        <h2 class="mb-3">Examples</h2>
                        <div class="stepper">
                            <ul>
                                <li>
                                    <span class="stepper-item active">
                                        <span class="stepper-bubble stepper-bubble-largest"></span>
                                        <span>Active step</span>
                                    </span>
                                </li>
                                <li>
                                    <span class="stepper-item active incomplete">
                                        <span class="stepper-bubble stepper-bubble-largest"></span>
                                        <span>Active incompleted step</span>
                                    </span>
                                </li>
                                <li>
                                    <span class="stepper-item active complete">
                                        <span class="stepper-bubble stepper-bubble-largest"></span>
                                        <span>Active completed step</span>
                                    </span>
                                </li>
                                <li>
                                    <span class="stepper-item disabled">
                                        <span class="stepper-bubble stepper-bubble-largest"></span>
                                        <span>Disabled step</span>
                                    </span>
                                </li>
                                <li>
                                    <span class="stepper-item incomplete">
                                        <span class="stepper-bubble stepper-bubble-largest"></span>
                                        <span>Incompleted step</span>
                                    </span>
                                </li>
                                <li>
                                    <span class="stepper-item complete">
                                        <span class="stepper-bubble stepper-bubble-largest"></span>
                                        <span>Completed step</span>
                                    </span>
                                </li>
                                <li>
                                    <span class="stepper-item">
                                        <span class="stepper-bubble stepper-bubble-largest"></span>
                                        <span>Unreached step</span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h1 id="responsive" class="mt-3">Responsive</h1>
                <p>
                    This component has no native responsive abilities, as it's vertical layout would not really work
                    as inline content on a small screen. Instead, it is recommended to wrap the stepper in a responsive
                    Bootstrap
                    <NuxtLink to="https://getbootstrap.com/docs/5.2/components/offcanvas/" target="_blank">Offcanvas</NuxtLink>
                    component.
                </p>
                <p>
                    An example that moves the stepper into an Offcanvas from breakpoint <code>md</code> and lower:
                </p>
                <prism language="html" class="w-100">
                    {{ example2 }}
                </prism>
                <h1 id="variables" class="mt-3">Variables</h1>
                <p>
                    The following variables are availabe. Not all of them are also exposed as CSS variables, which is
                    indicated by the 'CSS var?' column.
                </p>
                <p>
                    CSS vars can be overriden by setting them in CSS under the <code>.stepper</code> class, using the
                    default Bootstrap CSS var prefix. For example:
                </p>
                <Prism lang="css">
                    <pre>
.stepper {
    --bs-stepper-complete-bg: pink;
}</pre>
                </Prism>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Variable</th>
                            <th>Default value</th>
                            <th>Comment</th>
                            <th>CSS Var?</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>$stepper-disabled-color</code>
                            </td>
                            <td>
                                <code>$text-muted</code>
                            </td>
                            <td></td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>
                                <code>$stepper-inactive-bg</code>
                            </td>
                            <td class="text-nowrap">
                                <code>$gray-400</code>
                            </td>
                            <td>
                                Color for the background of bubbles and the vertical line
                            </td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>
                                <code>$stepper-complete-bg</code>
                            </td>
                            <td class="text-nowrap">
                                <code>$green-300</code>
                            </td>
                            <td>
                                Color for the background of completed bubbles
                            </td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>
                                <code>$stepper-incomplete-bg</code>
                            </td>
                            <td class="text-nowrap">
                                <code>$yellow</code>
                            </td>
                            <td>
                                Color for the background of incompleted bubbles
                            </td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>
                                <code>$stepper-min-width</code>
                            </td>
                            <td>
                                <code>250px</code>
                            </td>
                            <td></td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>
                                <code>$stepper-padding-y</code>
                            </td>
                            <td>
                                <code>0.75rem</code>
                            </td>
                            <td>
                                Padding between items
                            </td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>
                                <code>$stepper-max-indent</code>
                            </td>
                            <td>
                                <code>3rem</code>
                            </td>
                            <td>
                                The maximum amount of horizontal padding between root items and child items. All padding
                                is evenly spread over the 5 levels of depth.
                            </td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td class="text-nowrap">
                                <code>$stepper-bubble-max-size</code>
                            </td>
                            <td>
                                <code>2rem</code>
                            </td>
                            <td>
                                The size of the largest bubble.
                            </td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>
                                <code>$stepper-bubble-min-size</code>
                            </td>
                            <td>
                                <code>.3rem</code>
                            </td>
                            <td>
                                Not actually the smallest size, but a calculation helper:<br/>
                                <code>($stepper-bubble-max-size - $stepper-bubble-min-size) * math.div($size-number, $stepper-bubble-num-sizes) + $stepper-bubble-min-size;</code><br/>
                            </td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>
                                <code>$stepper-bubble-size-map</code>
                            </td>
                            <td class="text-nowrap">
                                <code>
                                    (<br/>
                                    'largest': 5,<br/>
                                    'large': 4, <br/>
                                    'medium': 3, <br/>
                                    'normal': 3, <br/>
                                    'small': 2, <br/>
                                    'smallest': 1, <br/>
                                    )
                                </code>
                            </td>
                            <td>
                                A map of all sizes, the number represents <code>$size-number</code> in the calculation above.
                            </td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td class="text-nowrap">
                                <code>$stepper-bubble-num-sizes</code>
                            </td>
                            <td>
                                <code>5</code>
                            </td>
                            <td>
                                Another calculation helper, should match the highest <code>$size-number</code> in
                                <code>$stepper-bubble-size-map</code>
                            </td>
                            <td>No</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.stepper-container {
    flex: 0 0 250px;
}

.scrollspy-content {
    flex: 1 1 auto;
    min-width: 0;
    height: 80vh;
    overflow-y: scroll;
}

#stepper .stepper-item.active .stepper-bubble {
    background-color: #FFCD00;
}

</style>
