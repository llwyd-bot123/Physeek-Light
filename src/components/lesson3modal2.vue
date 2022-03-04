<template>
  <div  class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50">
        <div v-on:click.self="close4" class="flex justify-center w-full items-center p-8 ">
          <div class="flex flex-col bg-white rounded-xl h-auto w-full p-20 sm:p-10 space-y-10">
            <h1 class="text-4xl sm:text-3xl font-bold leading-loose text-center">REVERSING ARROW ILLUSION</h1>
            <div class="flex flex-row space-x-32 sm:flex-col sm:space-x-0 sm:space-y-10 space-x-40 text-xl sm:text-lg">
              <div class="flex flex-col space-y-3 w-1/2 sm:w-full">
                <p class="font-bold">Objective:</p>
                <p>After this activity, the students will be able to:</p>
                <ul class="list-disc pl-10">
                <li>Demonstrate how light is refracted</li>
                <li>Describe the phenomenon of refraction</li>
                <li>Explain that refraction happens whenever light passes from one medium to another</li>
              </ul>
              </div>
              <div class="flex flex-col space-y-3 w-30% sm:w-full">
                <p class="font-bold">Materials:</p>
                <ul class="list-disc pl-10">
                <li>A piece of paper</li>
                <li>Marker</li>
                <li>A glass or jar</li>
                <li>Water</li>
              </ul>
              </div>
            </div>
            <div class="flex flex-col text-xl sm:text-lg space-y-4 leading-normal">
              <p class="font-bold">Procedure:</p>
              <ul class="list-decimal pl-10 ">
                <li>Get a sheet of paper and draw two arrows on it. One arrow near the top and one arrow near the bottom. Make the arrows point in the same direction.</li>
                <li>Fill a glass with water.</li>
                <li>Slowly lower the piece of paper behind (outside) the glass of water.</li>
                <li>Look through the glass of water and watch what happens.</li>
              </ul>
            </div>
            <p class="text-xl sm:text-lg font-bold">Question: What happened to the arrow?</p>
            <div class="flex flex-col text-xl sm:text-lg space-y-4 leading-normal">
              <p class="font-bold">RESULT</p>
              <div class="flex flex-col">
              <p><span class="pl-9">After</span> the experiment, the arrow reversed or change its direction as it put behind a glass of water. The result is as shown in the image.</p>
              <p>When light passes from one medium to another, it can bend or refract. In the experiment that you just completed, light traveled from the arrow through the air, through the glass, through the water, through the back of the glass, and then back through the air, before hitting your eye. Anytime that light passes from one medium, or material, into another, it refracts. Light bends because of the lenses. In the experiment the lense is the glass or jar so that’s why the direction of the arrow is being reversed or being changed. To explain this, you must think about the glass of water as if it is a magnifying glass. When light goes through a magnifying glass the light bends toward the center. The spot where the light converges is called the focal point, but beyond the focal point the image appears to reverse because the light rays that were bent pass each other and the light that was on the right side is now on the left and the left on the right, which makes the arrow appear to be reversed. This phenomenon may occur in different figure just like the presented image.</p>
              </div>
              <div class="flex flex-row justify-center space-x-5 pt-5 pb-12">
                <img src="../assets/imgs/lesson3/mp3.png" class="w-2/5 sm:w-1/2 h-auto" />
                <img src="../assets/imgs/lesson3/mp4.png" class="w-2/5 sm:w-1/2 h-auto" />
              </div>
              <div class="flex justify-end">
                <button @click.prevent="close4" class="w-60 h-12 sm:w-40 sm:h-10 bg-BGcolor4 rounded-full">
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
  close4(){
    this.$emit('closeModal4')
  },
},
}
</script>

<style>

</style>