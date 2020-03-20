<template>
    <el-form ref="ShareMessage" :model="form" :rules="rules" @submit.native.prevent="submit" class="grid grid-cols-3 gap-4">
        <el-form-item label="Name" prop="displayName" class="col-span-1">
            <el-input v-model="form.displayName" placeholder="Enter your name" autofocus />
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
                      placeholder="Kudos to our doctors, nurses, grocery clerks, delivery folks, my neighbours, my co-workers, my family..." class="w-full"
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
                <el-button type="primary" native-type="submit">Share</el-button>
            </el-form-item>
        </div>
    </el-form>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha';
// Vue.use(VueReCaptcha, { siteKey: '6LeAxuIUAAAAAFjD8CTEEPXkg3RqaqCojDihOF3f' });

export default {
    components: { VueRecaptcha },
    data() {
        return {
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
                            if(!value) {
                                callback(new Error('Please prove you are not a robot'));
                            } else {
                                callback();
                            }
                        },
                        message: 'You must prove you are not a robot'
                    },
                ]
            },
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
        onVerify() {
            this.form.recaptcha = true;
        },
        onExpired() {
            this.form.recaptcha = false;
        },
        submit() {
            this.$refs.ShareMessage.validateField('recaptcha');
            this.$refs.ShareMessage.validate(async (isValid) => {
                if(isValid) {
                    const timestamp = this.$fireStoreObj.FieldValue.serverTimestamp();
                    const increment = this.$fireStoreObj.FieldValue.increment(1);

                    this.$fireStore.collection('statistics').doc('counters').set({
                        totalMessages: increment,
                    }, { merge: true });
                    this.$fireStore.collection('messages').add({
                        timestamp,
                        ...this.form
                    });

                    this.$message.success('Your message has been shared!');
                    this.$router.push({ name: 'index' });
                }
            })
        }
    }
};
</script>
