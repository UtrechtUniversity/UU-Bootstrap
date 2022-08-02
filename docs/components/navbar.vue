<template>
    <nav class="navbar uu-navbar">
        <div class="uu-navbar-container">
            <a href="https://www.uu.nl" class="navbar-brand">
                <img src="~/assets/uu-logo-en.svg" />
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbar-content"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon" />
            </button>
            <div id="navbar-content" class="collapse navbar-collapse">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <NuxtLink to="/" class="nav-link">
                            Home
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="/migrating/" class="nav-link">
                            Migrating
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="/extensions/" class="nav-link">
                            Extensions
                        </NuxtLink>
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
                                <NuxtLink to="/uu-layout/" class="dropdown-item">
                                    Overview
                                </NuxtLink>
                            </li>
                            <li><hr class="dropdown-divider" /></li>
                            <li>
                                <NuxtLink to="/uu-layout/navbar/" class="dropdown-item">
                                    Navbar
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/uu-layout/cover/" class="dropdown-item">
                                    Cover
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/uu-layout/hero/" class="dropdown-item">
                                    Hero
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/uu-layout/sidebar/" class="dropdown-item">
                                    Sidebar
                                </NuxtLink>
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
                            <li class="dropdown-header">
                                Custom
                            </li>
                            <li>
                                <NuxtLink to="/components/stepper/" class="dropdown-item">
                                    Stepper
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/components/tiles/" class="dropdown-item">
                                    Tiles
                                </NuxtLink>
                            </li>
                            <li class="dropdown-header">
                                Bootstrap
                            </li>
                            <li>
                                <NuxtLink to="/components/buttons/" class="dropdown-item">
                                    Buttons
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/components/pagination/" class="dropdown-item">
                                    Pagination
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
                                <NuxtLink to="/examples/lists/" class="dropdown-item">
                                    List with filters
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/examples/vwr-po-list/" class="dropdown-item">
                                    VWR PO list
                                </NuxtLink>
                            </li>
                        </ul>
                    </li>

                </ul>
            </div>

        </div>
    </nav>
</template>
