<template>
  <div  class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50">
        <div v-on:click.self="close4" class="flex justify-center w-full items-center p-8 ">
          <div class="flex flex-col bg-white rounded-xl h-auto w-full p-20 space-y-10">
            <h1 class="text-4xl font-bold leading-loose text-center">MAKING RAINBOW USING COMPACT DISK</h1>
            <h2 class="text-3xl font-bold leading-loose text-center">Now let us start!</h2>
              <div class="flex flex-col text-xl space-y-3 w-1/2 ">
                <p class="font-bold ">Materials:</p>
                <ul class="list-disc pl-10">
                <li>Compact disk</li>
                <li>Flashlight</li>
                <li>White bond paper</li>
              </ul>
              </div>
            <div class="flex flex-col text-xl space-y-4 leading-normal">
              <p class="font-bold">Procedure:</p>
              <ul class="list-decimal pl-10 ">
                <li>Prepare all the necessary materials.</li>
                <li>Set up your materials by pasting your clean white bond paper to a wall then put the compact <br/>      disk on the floor and make sure that the angle of the compact disk is aligned to the white bond paper and then set your flashlight in front of your compact disk.</li>
                <li>Switch on your flashlight and make sure the light is going to your compact disk.</li>
              </ul>
            </div>
            <p class="text-xl font-bold">What did you saw?</p>
            <div class="flex flex-col text-xl space-y-4 leading-normal">
              <p class="font-bold">RESULT</p>
              <div class="flex flex-col">
              <p><span class="pl-9">As</span> I mention before Dispersion of light is spreading or splitting of visible light onto different colors.</p>
              <p>Based in this experiment when the white light approach to the compact disk which serves as the prism, it will refract from it and split that’s results to the different colors which called spectrum; a bond of seven colors which are the ROYGBIV. As we can see in figure 1 the resulting image of the experiment, we can the variety of colors splitting from the source of light which is the flashlight and refracted from the compact disk.</p>
              </div>
              <div class="flex flex-col items-center space-y-2 pt-5 pb-12">
                <img src="../assets/imgs/lesson4/mp1.png" class="w-1/2 h-auto" />
                <p class="text-base leading-loose text-center">Figure 1: Dispered Light</p>
              </div>
              <div class="flex justify-end">
                <button @click.prevent="close5" class="w-60 h-12  bg-BGcolor4 rounded-full">
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
  close5(){
    this.$emit('closeModal5')
  },
},
}
</script>

<style>

</style>