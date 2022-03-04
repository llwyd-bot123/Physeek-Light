<template>
  <div  class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50">
        <div v-on:click.self="close1" class="flex justify-center w-full items-center p-8 ">
          <div class="flex flex-col bg-white rounded-xl h-auto w-full p-20 sm:p-10 space-y-10">
            <h1 class="text-4xl sm:text-3xl font-bold leading-loose text-center">WHEN I LOOK AT YOU</h1>
            <div class="flex flex-row sm:flex-col sm:space-x-0 sm:space-y-10 space-x-40 text-xl sm:text-lg">
              <div class="flex flex-col space-y-3">
                <p class="font-bold">Objective:</p>
                <ul class="list-disc pl-10">
                <li>Define reflection of light</li>
                <li>Observe and demonstrate the angle of reflection.</li>
                <li>Define the two types of refection.</li>
                <li>Make a model of the two types of refection.</li>
                <li>Defining law of reflection presented by Euclid.</li>
              </ul>
              </div>
              <div class="flex flex-col space-y-3">
                <p class="font-bold">Materials:</p>
                <ul class="list-disc pl-10">
                <li>Metal basin</li>
                <li>Fresh water</li>
              </ul>
              </div>
            </div>
            <div class="flex flex-col text-xl sm:text-lg space-y-4 leading-normal">
              <p class="font-bold">Procedure:</p>
              <ul class="list-decimal pl-5 ">
                <li>Prepare all the necessary materials.</li>
                <li>Fill in the metal basin with fresh water until it totally full.</li>
                <li>Put the basin with water outside your house surrounded with plants.</li>
                <li>Wait until the water is not distorted and make it in a smooth or flat surface.</li>
                <li>Observed the plants reflecting to the water.
                  <ol style="list-style-type: lower-alpha;" class="pl-10">
                    <li>Describe what you see.</li>
                  </ol>
                </li>
                <li>Try to change your position and make a little bit distance to the basin and try to look again to the reflection of the plants to the water.
                  <ol style="list-style-type: lower-alpha;" class="pl-10">
                    <li>what is the difference between the reflections of the plants from the water when you are a little bit far?</li>
                  </ol>
                </li>
                <li>After comparing you can now look at the angle of the plants approaching to the water and to the place where you can see the reflection of the plants.
                  <ol style="list-style-type: lower-alpha;" class="pl-10">
                    <li>describe the angle of the refection. Is the angle of the plants and the angle of you is the same?</li>
                    <li>define what kind of reflection is present.</li>
                  </ol>
                </li>
                <li>After defining on what happened to the reflection, you can know make ripples or waves in the water and observed what happened to the refection.
                  <ol style="list-style-type: lower-alpha;" class="pl-10">
                    <li>describe what you see.</li>
                  </ol>
                </li>
                <li>After describing your observation, look at the step 6 and step 7 and try to do it again while the water has a ripples or waves.</li>
              </ul>
            </div>
            <div class="flex flex-col text-xl sm:text-lg space-y-4 leading-normal">
              <p class="font-bold">Question:</p>
              <ul class="list-decimal pl-10">
                <li>What is the difference between smooth surface and rough surface water?</li>
                <li>After making the activities how can you define reflection of light?</li>
              </ul>
              <div class="flex flex-row justify-center space-x-5 sm:space-x-2 pt-5 pb-12">
                <img src="../assets/imgs/lesson2/mp1.png" class="w-28% sm:w-1/3 h-auto" />
                <img src="../assets/imgs/lesson2/mp2.png" class="w-28% sm:w-1/3 h-auto" />
                <img src="../assets/imgs/lesson2/mp3.png" class="w-28% sm:w-1/3 h-auto" />
              </div>
              <div class="flex justify-end">
                <button @click.prevent="close1" class="w-60 h-12 sm:w-40 sm:h-10 bg-BGcolor4 rounded-full">
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
  close1(){
    this.$emit('closeModal1')
  },
},
}
</script>

<style>

</style>