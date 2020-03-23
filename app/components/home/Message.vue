<template>
    <div class="bg-gray-50 overflow-hidden">
        <div class="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <blockquote class="mt-8">
                <div class="mx-auto text-center text-2xl sm:text-4xl leading-9 sm:leading-relaxed font-medium text-gray-900">
                    <p class="font-nanum">
                        &ldquo;{{ message.message }}&rdquo;
                    </p>
                </div>
                <footer class="mt-20">
                    <div class="md:flex md:flex-col md:items-center md:justify-center">
                        <div class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                            <div class="text-base leading-6 font-medium text-gray-900">
                                {{ message.displayName }}
                            </div>

                            <svg class="hidden md:block mx-1 h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M11 0h3L9 20H6l5-20z" />
                            </svg>

                            <div class="text-base leading-6 font-medium text-gray-500">
                                {{ message.city }}, {{ message.province }}
                            </div>
                        </div>
                        <div class="text-xs leading-5 text-gray-500 text-center" v-if="message.timestamp">
                            {{ message.timestamp.toDate() | formatDate }}
                        </div>
                    </div>
                </footer>
            </blockquote>
        </div>
    </div>
</template>

<script>
import { formatDate } from '~/filters';

export default {
    props: {
        message: {
            type: Object,
            required: true,
        }
    },
    filters: { formatDate }
}
</script>
