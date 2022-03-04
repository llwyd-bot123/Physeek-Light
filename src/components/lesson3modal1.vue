<template>
  <div  class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50">
        <div v-on:click.self="close3" class="flex justify-center w-full items-center p-8 ">
          <div class="flex flex-col bg-white rounded-xl h-auto w-full p-20 sm:p-10 space-y-10">
            <h1 class="text-4xl sm:text-3xl font-bold leading-loose text-center">YOU CAN DO IT, TRUST ME</h1>
            <div class="flex flex-row space-x-40 sm:flex-col sm:space-x-0 sm:space-y-10 space-x-40 text-xl sm:text-lg">
              <div class="flex flex-col space-y-3">
                <p class="font-bold">Objective:</p>
                <ul class="list-disc pl-10">
                <li>To define the refraction of light.</li>
                <li>To make and demonstrate the model of refraction of light.</li>
                <li>To observe the direction of light.</li>
                <li>To determine how does the refraction of light works.</li>
                <li>To introduce the Snell’s law.</li>
              </ul>
              </div>
              <div class="flex flex-col space-y-3">
                <p class="font-bold">Materials:</p>
                <ul class="list-disc pl-10">
                <li>Transparent water bottle</li>
                <li>Water</li>
                <li>Colored stick</li>
              </ul>
              </div>
            </div>
            <div class="flex flex-col text-xl sm:text-lg space-y-4 leading-normal">
              <p class="font-bold">Procedure:</p>
              <ul class="list-decimal pl-5 ">
                <li>Prepare all the necessary materials.</li>
                <li>Fill in the transparent water bottle with water until it full.</li>
                <li>Make sure that the water is transparent, and it is clear to be visible in the eye.</li>
                <li>Put the bottle filled with water in front of the things in your house that are bright color or clearly visible to your eyes.</li>
                <li>Observe what will happen when you put the bottle filled with water.</li>
                <li>Look straight at the edge of the bottled water.
                  <ol style="list-style-type: lower-alpha;" class="pl-10">
                    <li>describe what you see.</li>
                  </ol>
                </li>
                <li>Change the distance of your bottle and make it a bit far from the things.
                  <ol style="list-style-type: lower-alpha;" class="pl-10">
                    <li>describe what you see.</li>
                  </ol>
                </li>
                <li>On the next experiment to clearly understand the refracted. Submerge the half of the colored stick inside the bottled water.</li>
                <li>Observe the stick inside and outside the water.
                  <ol style="list-style-type: lower-alpha;" class="pl-10">
                    <li>describe what you see.</li>
                  </ol>
                </li>
              </ul>
            </div>
            <div class="flex flex-col text-xl sm:text-lg space-y-4 leading-normal">
              <p class="font-bold">RESULT</p>
              <p><span class="pl-9">When</span> the transparent bottle that filled with water is being placed in front of the visible materials it shows that the image of the materials is different to the normal size. It becomes refracted the image of the materials in the in the edge of the bottled water even though it placed in a different distance. As we can see in the first figure below the materials when it’s approached to the bottled water it being zoomed and we clearly see the details. This is what lace markers wanted to explain in refracting condenser to see the detailed of the candlelight</p>
              <p><span class="pl-9">Bending</span> of light is also showed on the second figure below. Wherein, the half of the colored stick is submerged into the bottled water. This clearly defined the definition of refraction of light which is the bending light when it enters another medium. The size of the stick is different in the inside of the water and the stick is being bend when it enters the bottle.</p>
              <div class="flex flex-row justify-center space-x-5 pt-5 pb-12">
                <img src="../assets/imgs/lesson3/mp1.png" class="w-2/5 sm:w-1/2 h-auto" />
                <img src="../assets/imgs/lesson3/mp2.png" class="w-30% sm:w-1/3 h-auto" />
              </div>
              <div class="flex justify-end">
                <button @click.prevent="close3" class="w-60 h-12 sm:w-40 sm:h-10 bg-BGcolor4 rounded-full">
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
  close3(){
    this.$emit('closeModal3')
  },
},
}
</script>

<style>

</style>