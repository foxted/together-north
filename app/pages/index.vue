<template>
    <div>
        <Hero class="mb-48" :messageCount="messages.length"/>

        <div class="max-w-4xl sm:max-w-6xl mx-auto mb-10 py-8" v-if="messages.length > 0">
            <div class="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-6">
                <Message :message="message" v-for="message in messages" :key="message.id" class="mb-56" />
            </div>
        </div>
    </div>
</template>

<script>
import Hero from '~/components/home/Hero';
import Message from '~/components/home/Message';

export default {
    head: {
        title: 'Show moral support for our Canadian Heroes - Powered by Speakbox'
    },
    components: { Hero, Message },
    data() {
        return {
            listeners: [],
            messages: [],
        };
    },
    created() {
        const messages = this.$fireStore.collection('messages')
            .orderBy('timestamp', 'desc')
            .limit(50)
            .onSnapshot((snapshot) => {
                this.messages = [];
                snapshot.forEach((doc) => {
                    this.messages.push({
                        id: doc.id,
                        ...doc.data()
                    });
                });
            });

        this.listeners.push(messages);
    },
    beforeDestroy() {
        this.listeners.forEach((listener) => {
            if(typeof listener === 'function') listener();
        });
    }
};
</script>
