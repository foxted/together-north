<template>
    <div>
        <Hero class="mb-10" :messageCount="messages.length"/>

        <template v-if="messages.length > 0">
            <hr class="max-w-4xl mx-auto my-8 border-gray-200">

            <h2 class="text-red-500 text-2xl text-center uppercase tracking-tight">
                Latest 60 messages <br>
                <small>({{ totalMessages }} messages total)</small>
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                <Message :message="message" v-for="message in messages" :key="message.id"/>
            </div>
        </template>
    </div>
</template>

<script>
import Hero from '~/components/home/Hero';
import Message from '~/components/home/Message';

export default {
    components: { Hero, Message },
    data() {
        return {
            listeners: [],
            messages: [],
            totalMessages: 0
        };
    },
    created() {
        const statistics = this.$fireStore.collection('statistics').doc('counters').onSnapshot((doc) => {
            if(doc.exists) {
                const { totalMessages } = doc.data();
                this.totalMessages = totalMessages || 0;
            }
        });
        const messages = this.$fireStore.collection('messages')
            .orderBy('timestamp', 'desc')
            .limit(60)
            .onSnapshot((snapshot) => {
                this.messages = [];
                snapshot.forEach((doc) => {
                    this.messages.push({
                        id: doc.id,
                        ...doc.data()
                    });
                });
            });
        this.listeners.push(statistics);
        this.listeners.push(messages);
    },
    beforeDestroy() {
        this.listeners.forEach((listener) => {
            if(typeof listener === 'function') listener();
        });
    }
};
</script>
