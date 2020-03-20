<template>
    <div class="relative bg-gray-50 overflow-hidden">
        <div class="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full">
            <div class="relative h-full min-w-screen mx-auto">
                <svg class="absolute right-0 transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
                     width="404" height="784" fill="none" viewBox="0 0 404 784">
                    <defs>
                        <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20"
                                 patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"/>
                        </pattern>
                    </defs>
                    <rect width="404" height="784" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"/>
                </svg>
                <svg
                    class="absolute left-0 transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
                    width="404" height="784" fill="none" viewBox="0 0 404 784">
                    <defs>
                        <pattern id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b" x="0" y="0" width="20" height="20"
                                 patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"/>
                        </pattern>
                    </defs>
                    <rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"/>
                </svg>
            </div>
        </div>

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
