<template>
    <div class="pb-12">
        <div class="mt-6 mx-auto max-w-screen-xl px-4 sm:mt-8 sm:px-6 md:mt-10 lg:mt-12 xl:mt-16">
            <div class="text-center">
                <h1 class="text-4xl tracking-tight leading-10 font-extrabold text-red-600 sm:text-5xl sm:leading-none md:text-6xl">
                    #WeApplaud
                </h1>
                <h2 class="mt-2 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                    Everyone loves a
                    <br class="xl:hidden" />a big gesture.
                </h2>
                <p class="mt-8 max-w-lg mx-auto text-base text-gray-500 sm:text-lg md:mt-10 md:text-xl md:max-w-3xl">
                    To show their support even more, other countries like <a class="font-medium text-red-600 underline" href="https://www.france24.com/en/20200318-weapplaud-french-pay-tribute-to-health-workers-from-their-balconies" target="_blank">France</a>, decided to come to their windows and give a round of applause
                    to the front line workers. <br>Seems like a very Canadian thing to do!
                </p>
                <p class="mt-3 max-w-lg mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                    Join us <strong class="text-gray-700">every day of the week at 7pm</strong> to cheer for our Canadian Heroes.
                </p>
                <p class="mt-3 mb-10 max-w-lg mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                    Spread the word on social media, using the hashtag <strong class="text-red-600">#WeApplaud</strong>
                </p>
                <social-sharing url="https://togethernorth.ca/weapplaud"
                                class="social-networks text-gray-600"
                                quote="Let's cheer for our front line workers in our fight against COVID-19!"
                                hashtags="WeApplaud, TogetherNorth"
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
export default {
    head: {
        title: '#WeApplaud - Let\'s cheer for our Canadian Heroes',
    }
}
</script>
