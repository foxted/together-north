<template>
    <div class="navbar" @click="$emit('click')">
        <nuxt-link :to="{ name: 'share-your-message' }">Share your message</nuxt-link>
        <nuxt-link :to="{ name: 'weapplaud' }">#WeApplaud</nuxt-link>
        <a href="https://github.com/foxted/together-north" target="_blank">
            <i class="fab fa-github"></i>&nbsp;Contribute on GitHub
        </a>
    </div>
</template>

<style>
.navbar a:link, .navbar a:active, .navbar a:visited {
    transition: all .3s ease-in-out;
    @apply block px-3 py-2 rounded-md text-base font-medium text-gray-700;
}

.navbar a:hover, .navbar a.nuxt-link-active {
   @apply outline-none text-white bg-red-600;
}

.navbar a:focus {
    @apply outline-none;
}

@media(min-width: 768px) {
    .navbar a:link, .navbar:active, .navbar:visited {
        @apply font-medium text-gray-500 ml-6;
    }

    .navbar a:first-child {
        @apply ml-0;
    }
}
</style>
