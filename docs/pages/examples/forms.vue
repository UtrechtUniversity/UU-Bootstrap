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
const gap = ref(true);
const stepper = ref(true);
const help = ref(true);
</script>

<template>
    <div class="uu-content">
        <div class="uu-hero align-items-center">
            <h1>Form example</h1>
            <div
                class="btn btn-outline-secondary ms-auto"
                @click="stepper = !stepper"
            >
                Toggle stepper
            </div>
            <div class="btn btn-outline-secondary ms-2" @click="gap = !gap">
                Toggle gap
            </div>
            <div class="btn btn-outline-secondary ms-2" @click="help = !help">
                Toggle help
            </div>
        </div>
        <div class="uu-container">
            <div
                class="col-2 d-lg-block d-none"
                :class="stepper ? '' : 'd-lg-none'"
            >
                <div class="stepper">
                    <ul>
                        <li>
                            <a class="stepper-item">
                                <span
                                    class="stepper-bubble stepper-bubble-largest"
                                    >1</span
                                >
                                <span>Hello</span>
                            </a>
                        </li>
                        <li>
                            <a class="stepper-item">
                                <span
                                    class="stepper-bubble stepper-bubble-largest"
                                    >2</span
                                >
                                <span>World</span>
                            </a>
                        </li>
                        <li>
                            <a class="stepper-item">
                                <span
                                    class="stepper-bubble stepper-bubble-largest"
                                    >3</span
                                >
                                <span>This has children</span>
                            </a>
                            <ul>
                                <li>
                                    <a class="stepper-item">
                                        <span
                                            class="stepper-bubble stepper-bubble-large"
                                        />
                                        <span>Child 1</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="stepper-item">
                                        <span
                                            class="stepper-bubble stepper-bubble-large"
                                        />
                                        <span>Child 2</span>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a class="stepper-item">
                                <span
                                    class="stepper-bubble stepper-bubble-largest"
                                    >3</span
                                >
                                <span>End node</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div
                class="d-flex flex-column col-12 col-lg-10"
                :class="stepper ? '' : 'col-lg-12'"
            >
                <form
                    class="uu-form"
                    :class="
                        (gap ? '' : 'uu-form-no-gap') +
                        ' ' +
                        (help ? '' : 'uu-form-no-help uu-form-no-aside')
                    "
                >
                    <div class="uu-form-text-row">
                        <div class="uu-form-text">
                            <p>
                                This is an example/test of the standard form
                                layout. You can use the toggles in the hero to
                                enabled/disable elements on this page to see the
                                full range of options.
                            </p>
                            <p>
                                A basic stepper is included for completeness, as
                                most usages will include a stepper.
                            </p>
                        </div>
                        <div class="uu-form-text-aside">
                            <strong>Frequently asked questions</strong> <br />
                            <a href="#">What is an example?</a><br />
                            <a href="#">Why do we need examples?</a><br />
                        </div>
                    </div>
                    <div class="uu-form-row">
                        <div class="uu-form-field">
                            <label for="test_1" class="form-label d-block">
                                What is your name?
                            </label>
                            <input id="test_1" class="form-control" />
                        </div>
                        <div class="uu-form-help">
                            <p>
                                This will be something to explain what you
                                should fill in here.
                            </p>
                        </div>
                    </div>
                    <div class="uu-form-row">
                        <div class="uu-form-field">
                            <label for="test_1" class="form-label d-block">
                                What is your quest?
                            </label>
                            <div class="input-group">
                                <span id="inputGroup" class="input-group-text"
                                    >Quest</span
                                >
                                <input type="Email" class="form-control" />
                            </div>
                        </div>
                        <div class="uu-form-help">
                            <strong>Quest</strong>
                            <p>a long or arduous search for something.</p>
                        </div>
                    </div>
                    <div class="uu-form-row">
                        <div class="uu-form-field">
                            <label for="test_1" class="form-label d-block">
                                What is your favorite color?
                            </label>
                            <div class="form-check">
                                <input
                                    id="color1"
                                    class="form-check-input"
                                    type="radio"
                                    name="color"
                                />
                                <label class="form-check-label" for="color1">
                                    Blue
                                </label>
                            </div>
                            <div class="form-check">
                                <input
                                    id="color1"
                                    class="form-check-input"
                                    type="radio"
                                    name="color"
                                />
                                <label class="form-check-label" for="color1">
                                    No, yellow!
                                </label>
                            </div>
                        </div>
                        <div class="uu-form-help" />
                    </div>

                    <div class="uu-form-row">
                        <div class="uu-form-field">
                            <label for="test_1" class="form-label d-block">
                                What is the capital of Assyria?
                            </label>
                            <input type="file" class="form-control" />
                        </div>
                        <div class="uu-form-help">
                            <p>
                                Assyria was a major ancient Mesopotamian
                                civilization which existed as a city-state from
                                the 21st century BC to the 14th century BC and
                                then as a territorial state and eventually an
                                empire from the 14th century BC to the 7th
                                century BC.
                                <sup>[1]</sup>
                            </p>
                        </div>
                    </div>
                    <div class="uu-form-row">
                        <div class="uu-form-field">
                            <label for="test_1" class="form-label d-block">
                                What is the air-speed velocity of an unladen
                                swallow?
                            </label>
                            <textarea class="form-control" rows="8" />
                        </div>
                        <div class="uu-form-help" />
                    </div>
                    <div class="row" :class="gap ? '' : 'mt-4'">
                        <div class="col-12">
                            <div class="btn-group">
                                <div class="btn btn-secondary btn-arrow-left">
                                    Previous
                                </div>
                                <div class="btn btn-primary btn-arrow-right">
                                    Next
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="uu-container text-muted">
            [1] En.wikipedia.org. 2022. Assyria - Wikipedia. [online] Available
            at:
            <a href="https://en.wikipedia.org/wiki/Assyria">Wikipedia</a>
            [Accessed 16 August 2022].
        </div>
    </div>
</template>
