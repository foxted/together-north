<template>
    <div class="min-h-screen">
        <div class="mb-12" v-if="posted">
            <div class="mb-12">
                <h1 class="font-medium text-4xl text-red-500 mb-4">Thank you!</h1>
                <p class="text-gray-600 mb-6 col-span-3">
                    Thank you for supporting our front line workers battling COVID-19 tirelessly.
                </p>
                <el-button type="primary" plain @click="reset">Post another message</el-button>
            </div>

            <div class="mb-12">
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
                <social-sharing url="https://togethernorth.ca" class="social-networks text-gray-600" inline-template>
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
        <el-form ref="ShareMessage" :model="form" :rules="rules" @submit.native.prevent="submit" v-else>
            <h1 class="font-medium text-4xl text-red-500 mb-4">
                Post a message
            </h1>
            <p class="text-gray-600 mb-6 col-span-3">
                Enter your message to support your fellow Canadians, as we all
                power through the COVID-19 crisis.
            </p>

            <div class="sm:grid sm:grid-cols-3 gap-4">
                <el-form-item label="Name" prop="displayName" class="col-span-1">
                    <el-input v-model="form.displayName" placeholder="Enter your name" autofocus/>
                </el-form-item>

                <el-form-item label="City" prop="city" class="col-span-1">
                    <el-input v-model="form.city" placeholder="Enter your city"/>
                </el-form-item>

                <el-form-item label="Province" prop="province" class="col-span-1">
                    <el-select v-model="form.province" placeholder="Select your province" filterable value-key="value"
                               class="block w-full" default-first-option
                    >
                        <el-option v-for="item in options" :key="item.value"
                                   :label="item.label" :value="item.value"
                        />
                    </el-select>
                </el-form-item>

                <el-form-item label="Message" prop="message" class="col-span-3">
                    <el-input type="textarea" :autosize="{ minRows: 5 }" v-model="form.message"
                              placeholder="Kudos to our doctors, nurses, grocery clerks, delivery folks, my neighbours, my co-workers, my family..."
                              class="w-full"
                              :minlength="25" :maxlength="280" show-word-limit
                    />
                </el-form-item>

                <div class="flex flex-col">
                    <el-form-item class="block h-24" prop="recaptcha">
                        <vue-recaptcha ref="recaptcha"
                                       @verify="onVerify"
                                       @expired="onExpired"
                                       sitekey="6LeAxuIUAAAAAFjD8CTEEPXkg3RqaqCojDihOF3f"
                                       :loadRecaptchaScript="true"
                        />
                    </el-form-item>

                    <el-form-item class="block">
                        <el-button type="primary" native-type="submit" :loading="busy" :disabled="busy">
                            Post your message
                        </el-button>
                    </el-form-item>
                </div>
            </div>
        </el-form>
    </div>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha';

export default {
    components: { VueRecaptcha },
    data() {
        return {
            busy: false,
            posted: false,
            form: {
                displayName: '',
                city: '',
                province: '',
                message: '',
                recaptcha: false,
            },
            rules: {
                displayName: [
                    { required: true, message: 'You must enter a name', trigger: 'change' }
                ],
                city: [
                    { required: true, message: 'You must enter your city', trigger: 'change' }
                ],
                province: [
                    { required: true, message: 'You must select your province', trigger: 'change' }
                ],
                message: [
                    { required: true, message: 'You must enter a message', trigger: 'change' },
                    { min: 25, message: 'You must enter at least 25 characters', trigger: 'change' },
                    { max: 280, message: 'You must enter at most 280 characters', trigger: 'change' }
                ],
                recaptcha: [
                    {
                        validator: (rule, value, callback) => {
                            if (!value) {
                                callback(new Error('Please prove you are not a robot'));
                            } else {
                                callback();
                            }
                        },
                        message: 'You must prove you are not a robot'
                    },
                ]
            },
            permalink: 'https://togethernorth.ca',
            options: [
                { label: 'Alberta', value: 'AB' },
                { label: 'British Columbia', value: 'BC' },
                { label: 'Manitoba', value: 'MB' },
                { label: 'Newfoundland and Labrador', value: 'NL' },
                { label: 'New Brunswick', value: 'NB' },
                { label: 'Northwest Territories', value: 'NT' },
                { label: 'Nova Scotia', value: 'NS' },
                { label: 'Nunavut', value: 'NU' },
                { label: 'Ontario', value: 'ON' },
                { label: 'Prince Edward Island', value: 'PE' },
                { label: 'Québec', value: 'QC' },
                { label: 'Saskatchewan', value: 'SK' },
                { label: 'Yukon', value: 'YT' },
            ]
        };
    },
    methods: {
        onCopy() {
            this.$message.success('Link copied to your clipboard.');
        },
        onVerify() {
            this.form.recaptcha = true;
        },
        onExpired() {
            this.form.recaptcha = false;
        },
        reset() {
            this.busy = false;
            this.posted = false;
            this.form = {
                displayName: '',
                city: '',
                province: '',
                message: '',
                recaptcha: false,
            };
            this.permalink = 'https://togethernorth.ca';
        },
        submit() {
            this.$refs.ShareMessage.validateField('recaptcha');
            this.$refs.ShareMessage.validate(async (isValid) => {
                if (isValid) {
                    this.busy = true;
                    const timestamp = this.$fireStoreObj.FieldValue.serverTimestamp();
                    const increment = this.$fireStoreObj.FieldValue.increment(1);

                    this.$fireStore.collection('statistics').doc('counters').set({
                        totalMessages: increment,
                    }, { merge: true });

                    const message = await this.$fireStore.collection('messages').add({
                        timestamp,
                        ...this.form
                    });

                    this.permalink = `https://togethernorth.ca/m/${message.id}`;
                    this.posted = true;
                    this.busy = false;
                }
            });
        }
    }
};
</script>

<style>
.social-networks span {
    @apply block mb-4 text-center cursor-pointer;
}

@media (min-width: 640px) {
    .social-networks span {
        @apply inline ml-4 mb-0 text-left;
    }

    .social-networks span:first-child {
        @apply ml-0;
    }
}
</style>
