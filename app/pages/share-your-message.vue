<template>
    <div class="post-message max-w-4xl mx-auto px-6">
        <nuxt-link :to="{ name: 'index' }" class="text-xs text-gray-500"><i class="fa fa-angle-left"></i>&nbsp;Back</nuxt-link>
        <h1 class="font-medium text-4xl text-red-500 mb-4">Post a message</h1>
        <p class="text-gray-600 mb-6">Enter your message to support your fellow Canadians, as we all power through the COVID-19 crisis.</p>
        <ShareMessage />
    </div>
</template>

<script>
import ShareMessage from '~/components/messages/ShareMessage';

export default {
    components: { ShareMessage },
}
</script>
