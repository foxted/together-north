<template>
    <div class="relative overflow-hidden mx-auto max-w-screen-xl px-4 sm:px-6 ">
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
        <div class="relative text-center">
            <div class="flex flex-col items-center justify-center mb-6">
                <img src="/logo.svg" alt="Together North" class="h-64">
                <div class="flex items-center justify-center">
                    <p class="text-gray-500">Powered by</p>
                    <a href="https://speakbox.ca" target="_blank"><img src="/speakbox.svg" alt="Speakbox" class="h-16 mx-4"></a>
                </div>
            </div>
            <h2 class="mb-6 text-4xl tracking-tight leading-snug font-bold text-gray-900 sm:text-5xl sm:leading-tight md:text-6xl">
                Share your message of
                <br>
                support to your fellow
                <span class="text-red-600">Canadians</span>
            </h2>
            <p class="mb-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:text-xl md:max-w-4xl">
                In these difficult times, it is important for us to support each other as Canadians.
            </p>
            <p class="mb-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:text-xl md:max-w-4xl">
                Leave a message to show your support to those working on the front lines (doctors, nurses, grocery clerks, delivery folks...).
            </p>
            <p class="mb-8 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:text-xl md:max-w-4xl">
                Share this page with anyone braving the virus to show them our support.
            </p>
            <div class="max-w-md mx-auto sm:flex sm:justify-center">
                <div class="rounded-md shadow">
                    <nuxt-link :to="{ name: 'share-your-message' }"
                               class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:shadow-outline-red transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                        {{ messageCount > 0 ? 'Share your message' : 'Be the first to share your message' }}
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        messageCount: {
            type: Number,
            default: () => 0
        }
    }
}
</script>
