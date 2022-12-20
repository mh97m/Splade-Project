<template>
    <div class="flex items-center justify-start flex-col w-full h-full max-w-[350px] max-h-[310px]">
        <Transition name="fade" mode="out-in">
            <div v-show="steps == 1 || steps == 2" class="w-full mb-4">
                <h1 class="_title">Appeal Request Form</h1>
                <!-- Stepper -->
                <div
                    class="flex items-center justify-between [&>p]:text-xs [&>p]:pb-1 [&>p]:font-semibold [&>p]:w-full [&>p]:cursor-pointer [&>p]:border-b-[5px] [&>p]:flex [&>p]:items-center [&>p]:justify-between">
                    <p class="mr-2" @click="steps = 1"
                        :class="[steps == 1 ? 'text-gray-50 border-gray-50' : 'border-green-300 text-green-300']">
                        1. Provider
                        <span v-show="steps == 2 || isLoading == true">✓</span>
                    </p>
                    <p @click="steps = 2"
                        :class="[(steps == 1 ? 'border-b-gray-700 text-gray-700' : 'text-gray-50 border-gray-50'),
                            (isLoading == true ? 'border-green-300 text-green-300' : '')
                        ]">
                        2. Member
                        <span v-show="isLoading == true">✓</span>
                    </p>
                </div>
                <!-- Stepper-end -->
            </div>
        </Transition>
        <form class="relative w-full" @submit="formSubmit">
            <Transition name="fade" mode="out-in">
                <!-- Step 1 -->
                <div class="flex flex-col" v-if="steps == 1">
                    <p class="_sub-title">Provider Information</p>
                    <input name="provider-name" v-model="providerName" class="_input" type="text"
                        placeholder="Provider Name">
                    <input name="provider-number" v-model="providerNumber" class="_input" type="text"
                        placeholder="Provider Number">
                    <input name="member-name" v-model="memberName" class="_input" type="text"
                        placeholder="Member Number">
                    <input name="full-name" v-model="fullName" class="_input" type="text" placeholder="Full Name">
                    <p @click="steps = 2" class="_btn-bordered">
                        Next -></p> <!-- This button changes steps value 1 to 2.  -->
                </div>
                <!-- Step 1-end -->

                <!-- Step 2 -->
                <div class="flex flex-col" v-else-if="steps == 2">
                    <p class="_sub-title">Member Information</p>
                    <input name="email" v-model="email" class="_input" type="text" placeholder="Email">
                    <input name="phone" v-model="phone" class="_input" type="text" placeholder="Phone">
                    <input name="birth" v-model="birth" class="_input" type="text" placeholder="Date of birth">
                    <div class="relative">
                        <i class="arrow"></i>
                        <select class="_input" name="country" id="country" required>
                            <option disabled selected value="">Country</option>
                            <option value="uk">United Kingdom</option>
                            <option value="us">United States</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div class="flex items-center justify-between">
                        <button type="submit" :class="{ 'bg-gray-400 pointer-events-none': isLoading }"
                            class="_btn-white">
                            <div v-show="isLoading"
                                class="animate-spin w-5 h-5 rounded-full border-2 border-l-white/20 border-t-white/20">
                            </div>
                            <p class="font-medium" v-show="!isLoading">Submit</p>
                        </button>
                    </div>
                </div>
                <!-- Step 2-end -->

                <!-- Step 3 / Show thank you text if response status 200 -->
                <div v-else class="flex items-center justify-center flex-col">
                    <p class="text-4xl text-green-400">✓</p>
                    <h3 class="text-gray-50 font-bold text-2xl">Thank you</h3>
                    <p class="text-gray-400 text-md">Your message has been sent.</p>
                    <!-- Step 3-end -->
                </div>
            </Transition>
        </form>
    </div>
</template>

<!-- This css changes default arrow of select and color of disabled option -->
<style scoped>
    select {
        appearance: none;
    }

    .arrow {
        display: inline-block;
        position: absolute;
        padding: 2px;
        right: 15px;
        z-index: 10;
        top: 17px;
        border: solid #9ca3af;
        border-width: 0 1.5px 1.5px 0;
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
    }

    select:required:invalid {
        color: #9ca3af;
    }
</style>
<script>
    export default {
        data() {
            return {
                steps: 1,
                isLoading: false,
                providerName: null,
                providerNumber: null,
                memberName: null,
                fullName: null,
                email: null,
                phone: null,
                birth: null,
            }
        },
        methods: {
            formSubmit(e) {
                e.preventDefault();

                this.isLoading = true // Set submit button as loading/disabled when submit

                const formData = new FormData();
                formData.append(
                    'providerName',
                    this.providerName
                )
                formData.append(
                    'providerNumber',
                    this.providerNumber
                )
                formData.append(
                    'memberName',
                    this.memberName
                )
                formData.append(
                    'fullName',
                    this.fullName
                )
                formData.append(
                    'email',
                    this.email
                )
                formData.append(
                    'phone',
                    this.phone
                )
                formData.append(
                    'birth',
                    this.birth
                )

                fetch("https://getform.io/f/{your-endpoint-goes-here}", {
                        method: "POST",
                        body: formData,
                    })
                    .then(response => {
                        if (response.status === 200) {
                            this.steps = 3 // Show thank you text if response status 200
                        }
                    })
                    .catch(error => console.log(error))
            }
        }
    }
</script>
