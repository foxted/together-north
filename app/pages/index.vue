<template>
    <div>
        <Hero class="mb-10" :messageCount="messages.length"/>

        <template v-if="messages.length > 0">
            <hr class="max-w-4xl mx-auto my-8 border-gray-200">

            <h2 class="text-red-500 text-2xl text-center uppercase tracking-tight">Latest Messages:</h2>
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
            unsubscribe: () => {
            },
            messages: [],
        };
    },
    created() {
        this.unsubscribe = this.$fireStore.collection('messages')
            .orderBy('timestamp', 'desc')
            .limit(25)
            .onSnapshot((snapshot) => {
                this.messages = [];
                snapshot.forEach((doc) => {
                    this.messages.push({
                        id: doc.id,
                        ...doc.data()
                    });
                });
            });
    },
    beforeDestroy() {
        this.unsubscribe();
    }
};
</script>
