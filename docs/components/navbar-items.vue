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
    <ul class="navbar-nav">
        <li class="nav-item">
            <NuxtLink to="/" class="nav-link"> Home </NuxtLink>
        </li>
        <li class="nav-item">
            <NuxtLink to="/extensions/" class="nav-link"> Extensions </NuxtLink>
        </li>
        <li class="nav-item dropdown">
            <a
                id="uuLayoutDropdown"
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                UU Layout
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                    <NuxtLink to="/uu-layout/" class="dropdown-item"> Overview </NuxtLink>
                </li>
                <li>
                    <hr class="dropdown-divider" />
                </li>
                <li>
                    <NuxtLink to="/uu-layout/classic-header/" class="dropdown-item">
                        Classic Header & Navbar
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/uu-layout/unified-header/" class="dropdown-item">
                        Unified Header
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/uu-layout/cover/" class="dropdown-item"> Cover </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/uu-layout/hero/" class="dropdown-item"> Hero </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/uu-layout/sidebar/" class="dropdown-item"> Sidebar </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/uu-layout/form/" class="dropdown-item"> Form </NuxtLink>
                </li>
            </ul>
        </li>
        <li class="nav-item dropdown">
            <a
                id="componentDropdown"
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Components
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li class="dropdown-header">Custom</li>
                <li>
                    <NuxtLink to="/components/stepper/" class="dropdown-item"> Stepper </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/components/tiles/" class="dropdown-item"> Tiles </NuxtLink>
                </li>
                <li class="dropdown-header">Bootstrap</li>
                <li>
                    <NuxtLink to="/components/buttons/" class="dropdown-item"> Buttons </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/components/pagination/" class="dropdown-item">
                        Pagination
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/components/modal-nav-tabs/" class="dropdown-item">
                        Modal Nav Tabs
                    </NuxtLink>
                </li>
            </ul>
        </li>
        <li class="nav-item dropdown">
            <a
                id="examplesDropdown"
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Examples
            </a>
            <ul class="dropdown-menu" aria-labelledby="examplesDropdown">
                <li>
                    <NuxtLink to="/examples/forms/" class="dropdown-item"> Form </NuxtLink>
                </li>
            </ul>
        </li>
    </ul>
</template>
<script setup lang="ts"></script>
