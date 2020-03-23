<template>
    <div class="post-message max-w-4xl mx-auto px-6">
        <nuxt-link :to="{ name: 'index' }" class="text-xs text-gray-500"><i class="fa fa-angle-left"></i>&nbsp;Back</nuxt-link>

        <ShareMessage />
    </div>
</template>

<script>
import ShareMessage from '~/components/messages/ShareMessage';

export default {
    head: {
        title: 'Show moral support for our Canadian Heroes - Powered by Speakbox'
    },
    components: { ShareMessage },
}
</script>
