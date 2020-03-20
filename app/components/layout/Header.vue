<template>
    <div class="bg-white overflow-hidden z-10">
        <div class="relative pt-6 pb-12 sm:pb-16 md:pb-12 lg:pb-16 xl:pb-20">
            <div class="max-w-screen-xl mx-auto px-4 sm:px-6">
                <nav class="relative flex items-center justify-between sm:h-10 md:justify-center">
                    <div class="flex items-center flex-grow md:absolute md:inset-y-0 md:left-0">
                        <div class="flex items-center justify-between w-full md:w-auto">
                            <nuxt-link :to="{ name: 'index' }">
                                <img class="inline h-8 w-auto sm:h-10" src="/favicon.png" alt="Together North" />
                                <span class="hidden md:inline md:ml-3 text-xl uppercase font-medium text-red-800 tracking-tight">Together <span class="text-red-600">North</span></span>
                            </nuxt-link>
                            <div class="-mr-2 flex items-center md:hidden">
                                <button @click="open = true" type="button"
                                        class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                                    <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M4 6h16M4 12h16M4 18h16"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <Navbar class="hidden md:flex md:flex-grow items-center justify-end" />
                </nav>
            </div>

            <div v-show="open" style="display: none;" class="absolute top-0 inset-x-0 p-2 md:hidden">
                <div class="rounded-lg shadow-md transition transform origin-top-right" v-show="open">
                    <div class="rounded-lg bg-white shadow-xs overflow-hidden">
                        <div class="px-5 pt-4 flex items-center justify-between">
                            <nuxt-link :to="{ name: 'index' }">
                                <img class="h-8 w-auto" src="/favicon.png" alt="Together North"/>
                            </nuxt-link>
                            <div class="-mr-2">
                                <button @click="open = false" type="button"
                                        class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                                    <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <Navbar class="px-2 pt-2 pb-3" @click="open = false" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '~/components/layout/Navbar';

export default {
    components: { Navbar },
    data() {
        return {
            open: false,
        }
    }
}
</script>
