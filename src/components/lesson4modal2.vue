<template>
  <div  class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50">
        <div v-on:click.self="close6" class="flex justify-center w-full items-center p-8 ">
          <div class="flex flex-col bg-white rounded-xl h-auto w-full p-20 space-y-10">
            <h1 class="text-4xl font-bold leading-loose text-center">MAKING RAINBOW USING WATER</h1>
            <h2 class="text-3xl font-bold leading-loose text-center">Let’s Go</h2>
              <div class="flex flex-col text-xl space-y-3 w-1/2 ">
                <p class="font-bold ">Materials:</p>
                <ul class="list-disc pl-10">
                <li>Mirror</li>
                <li>Bowl</li>
                <li>Water</li>
              </ul>
              </div>
            <div class="flex flex-col text-xl space-y-4 leading-normal">
              <p class="font-bold">Procedure:</p>
              <ul class="list-decimal pl-10 ">
                <li>Fill the glass bowl with water.</li>
                <li>Submerge the plane mirror under the water with an angle you can use any kind of solid material to maintain the mirror at its place (see figure 2).</li>
                <li>Turn on the flashlight of your phone and expose it directly to the mirror, you can also just place the bowl into the sunlight.</li>
                <li>Now find your rainbow</li>
              </ul>
            </div>
            <div class="flex flex-col text-xl space-y-4 leading-normal">
              <p class="font-bold">RESULT</p>
              <p><span class="pl-9">In</span> this activity the mirror and water serve as the prism, the light will refract from it and split which creates different colors which called spectrum; a bond of seven colors which are the ROYGBIV. As we can see in figure 3 the resulting image of the experiment, we can the variety of colors splitting from the source of light which is the flashlight/sunlight and refracted from the prism.</p>
              <div class="flex flex-row justify-center space-x-5 pt-5 pb-12">
                  <div class="flex flex-col space-y-2 text-center items-center">
                    <img src="../assets/imgs/lesson4/mp2.png" class="w-full h-auto" />
                    <p class="text-base leading-loose text-center">Figure 2</p>
                  </div>
                  <div class="flex flex-col space-y-2 text-center items-center" >
                    <img src="../assets/imgs/lesson4/mp3.png" class="w-full h-auto" />
                    <p class="text-base leading-loose text-center">Figure 3</p>
                  </div>
              </div>
              <div class="flex justify-end">
                <button @click.prevent="close6" class="w-60 h-12  bg-BGcolor4 rounded-full">
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
  close6(){
    this.$emit('closeModal6')
  },
},
}
</script>

<style>

</style>