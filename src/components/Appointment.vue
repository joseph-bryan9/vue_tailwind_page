<template>
    <section class="flex flex-col items-center p-10 py-20 relative border-t" :style="{ 'background-image': 'url(' + bgImage + ')'}">
        <!-- <div class="absolute w-full h-40 z-10 top-border bg-cover bg-center" :style="{ 'background-image': 'url(' + divider + ')'}"></div> -->
        <h2 class="capitalize text-3xl text-center my-10 lg:text-5xl tracking-wide text-cust-white">{{ title1 }} <span class="text-cust-red">{{ title2 }}</span></h2>
        <form class="w-full max-w-6xl grid grid-cols-2 gap-16">
            <div>
            <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        First Name
                    </label>
                    <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" id="grid-first-name" type="text" placeholder="Jane">
                    <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        Last Name
                    </label>
                    <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none" id="grid-last-name" type="text" placeholder="Doe">
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        Phone
                    </label>
                    <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" id="grid-phone" type="tel" placeholder="09*********"  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}">
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        street address
                    </label>
                    <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" id="grid-phone" type="text" placeholder="Street">
                    </div>
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        City
                    </label>
                    <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" id="grid-first-name" type="text" placeholder="City">
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        Province
                    </label>
                    <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none" id="grid-last-name" type="text" placeholder="Province">
                    </div>
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        Zip Code
                    </label>
                    <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" id="grid-first-name" type="text" placeholder="Zip Code">
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        Country
                    </label>
                    <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none" id="grid-last-name" type="text" placeholder="Country">
                    </div>
                </div>
            </div>
            
            
            <div>
            <div class="flex flex-wrap -mx-3 ">
                <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    Choose your service:
                </label>
                </div>
            </div>
            <div class="inline-block relative w-64 mb-13.5">
                <select class="block appearance-none w-full bg-white border border-gray-500 py-3 px-4 rounded focus:outline-none">
                    <option>Haircut</option>
                    <option>Hairstyling</option>
                    <option>Stylist</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    choose your schedule
                </label>
                <input class="uppercase appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" id="grid-data" type="date">
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 ">
                <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    Choose your time:
                </label>
                </div>
            </div>
            <div class="py-3 px-4 mb-3 w-40 bg-white text-gray-700 border border-gray-500 rounded ">
                <div class="flex">
                    <select name="hours" class="bg-transparent appearance-none outline-none">
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    </select>
                    <span class="mr-3">:</span>
                    <select name="minutes" class="bg-transparent appearance-none outline-none mr-4">
                    <option value="0">00</option>
                    <option value="30">30</option>
                    </select>
                    <select name="ampm" class="bg-transparent appearance-none outline-none">
                    <option value="am">AM</option>
                    <option value="pm">PM</option>
                    </select>
                </div>
            </div>
            <button class="bg-red-700 hover:bg-red-800 text-white font-bold mt-6 py-2 px-4 border border-red-700 rounded capitalize w-6/12 tracking-wide">
  send
</button>
            </div>
        </form>
        <div class="absolute w-full h-40 z-20 bottom-bottom-2 transform rotate-180 bg-cover bg-center" :style="{ 'background-image': 'url(' + divider + ')'}"></div>
    </section>
</template>

<script>
export default {
    name: 'Appointment',
    data() {
        return {
            divider: require('../assets/border_1.png'),
            bgImage: require('../assets/pattern.jpg'),
            title1: 'book an ',
            title2: 'appointment',
        }
    }
}
</script>

<style scoped>
h2, span {
    /* font-family: 'Roboto', sans-serif; */
    font-family: 'Lobster', cursive;
  text-shadow: 0px 3px 4px #000;
}

button {
    font-family: 'Roboto', sans-serif;
}

</style>