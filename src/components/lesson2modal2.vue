<template>
  <div  class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50">
        <div v-on:click.self="close2" class="flex justify-center w-full items-center p-8 ">
          <div class="flex flex-col bg-white rounded-xl h-auto w-full p-20 sm:p-10 space-y-10">
            <h1 class="text-4xl sm:text-3xl font-bold leading-loose text-center">SPECULAR  VS DIFFUSE REFLECTION</h1>
            <div class="flex flex-row space-x-40 sm:flex-col sm:space-x-0 sm:space-y-10 space-x-40 text-xl sm:text-lg">
              <div class="flex flex-col space-y-3">
                <p class="font-bold">Objective:</p>
                <p>After performing this activity, the students must be able to:</p>
                <ul class="list-disc pl-10">
                <li>identify the definition of reflection of light,</li>
                <li>understand the concept of light reflection, and</li>
                <li>differentiate specular and diffuse reflection</li>
              </ul>
              </div>
              <div class="flex flex-col space-y-3">
                <p class="font-bold">Materials:</p>
                <ul class="list-disc pl-10">
                <li>piece of flat wood/lab table</li>
                <li>2 flashlights</li>
                <li>1 plane mirror</li>
                <li>1 square container</li>
                <li>plastic/paper cup</li>
                <li>water</li>
              </ul>
              </div>
            </div>
            <div class="flex flex-col text-xl sm:text-lg space-y-4 leading-normal">
              <p class="font-bold">Procedure:</p>
              <ul class="list-decimal pl-10 ">
                <li>Put the flat wood on the surface where you can perform the activity. Place the mirror on the other side of the wood.</li>
                <li>Put the square container to the other side of the flat wood. Then, add at least two cups of water in the square container.</li>
                <li>To observe the reflection, use one of the flashlights and point it to the plane mirror and observe what kind of reflection you create.</li>
                <li>On the other side of the wood, you set up a container with a water use the other flashlight and point it to the surface of the water. Move the container in any manner to form a disturbance to the water then observe what happened.</li>
                <li>Turn off the light of the room to have a clearer view of the reflected lights.</li>
              </ul>
            </div>
            <div class="flex flex-col text-xl sm:text-lg space-y-4 leading-normal">
              <p>After performing the activity, answer the following questions:</p>
              <div class="pl-5 flex flex-col space-y-2">
                <p>Q1. Describe what have you observed while pointing the flashlights at the respected surface.</p>
                <p>Q2. What have you observed in the reflection created on the plane mirror?</p>
                <p>Q3. Describe what kind of light reflection you observed in the water surface while pointing the flashlight on it.</p>
                <p>Q4. What is the difference between the light reflection in the plane mirror and at the surface of the water?</p>
              </div>
              <div class="flex justify-end pt-10">
                <button @click.prevent="close2" class="w-60 h-12 sm:w-40 sm:h-10 bg-BGcolor4 rounded-full">
                <p class="text-center">Return</p>
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {

methods:{
  close2(){
    this.$emit('closeModal2')
  },
},
}
</script>

<style>

</style>