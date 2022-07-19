<template>
    <nav class="navbar uu-navbar">
        <div class="uu-navbar-container">
            <a href="https://www.uu.nl" class="navbar-brand">
                <img src="/uu-logo-en.svg" />
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

                </ul>
            </div>

        </div>
    </nav>
</template>
