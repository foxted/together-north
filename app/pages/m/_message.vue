<template>
    <div v-show="message">
        <div class="max-w-4xl sm:max-w-6xl mx-auto flex flex-col" v-if="message">
            <nuxt-link :to="{ name: 'index' }" class="text-xs text-gray-500"><i class="fa fa-angle-left"></i>&nbsp;Back to home page</nuxt-link>
            <div class="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-6">
                <Message :message="message" class="mb-48" />
            </div>
            <div class="bg-gray-100 rounded-lg mb-12">
                <div class="max-w-screen-xl mx-auto py-6 px-4 sm:px-6 lg:py-10 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 class="text-2xl leading-9 font-extrabold tracking-tight text-gray-700 sm:text-4xl sm:leading-10">
                        Like {{ message.displayName }},
                        <span class="text-red-500">show moral support!</span>
                    </h2>
                    <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
                        <div class="inline-flex rounded-md shadow">
                            <nuxt-link :to="{ name: 'share-your-message' }" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-500 hover:bg-red-400 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                                Post your message
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="max-w-xl mx-auto mt-10 mb-24 text-center" v-if="message">
                <h2 class="font-medium text-3xl text-red-500 mb-4">Share on social media</h2>
                <div class="container">
                    <el-input type="text" v-model="permalink" class="mb-10">
                        <template slot="append">
                            <button type="button"
                                    v-clipboard:copy="permalink"
                                    v-clipboard:success="onCopy"
                            >
                                <i class="fa fa-clipboard"></i> Copy to clipboard
                            </button>
                        </template>
                    </el-input>
                </div>
                <social-sharing :url="permalink"
                                class="social-networks text-gray-600"
                                quote="I posted a message on Together North to support our front line workers. How about you?"
                                hashtags="TogetherNorth,WeApplaud"
                                inline-template
                >
                    <div>
                        <network network="facebook">
                            <i class="fa fa-fw fa-facebook"></i> Facebook
                        </network>
                        <network network="linkedin">
                            <i class="fa fa-fw fa-linkedin"></i> LinkedIn
                        </network>
                        <network network="reddit">
                            <i class="fa fa-fw fa-reddit"></i> Reddit
                        </network>
                        <network network="twitter">
                            <i class="fa fa-fw fa-twitter"></i> Twitter
                        </network>
                        <network network="whatsapp">
                            <i class="fa fa-fw fa-whatsapp"></i> Whatsapp
                        </network>
                    </div>
                </social-sharing>
            </div>
        </div>
    </div>
</template>

<script>
import Message from '~/components/home/Message';

export default {
    head: {
        title: 'Show moral support for our Canadian Heroes - Powered by Speakbox',
    },
    components: { Message },
    data() {
        return {
            listeners: [],
            message: null,
            permalink: 'https://togethernorth.ca',
        };
    },
    created() {
        const message = this.$fireStore.collection('messages').doc(this.$route.params.message)
            .onSnapshot((doc) => {
                this.message = {
                    id: doc.id,
                    ...doc.data()
                };
                this.permalink = `https://togethernorth.ca/m/${doc.id}`
            });

        this.listeners.push(message);
    },
    beforeDestroy() {
        this.listeners.forEach((listener) => {
            if(typeof listener === 'function') listener();
        });
    },
    methods: {
        onCopy() {
            this.$message.success('Link copied to your clipboard.');
        },
    }
};
</script>
