<template>
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6">
        <div class="text-center">
            <img src="/logo.svg" alt="Together North" class="h-64 mb-4 mx-auto">
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
