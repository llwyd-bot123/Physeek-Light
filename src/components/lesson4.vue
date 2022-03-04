<template>
  <div class="flex flex-col w-4/5 space-y-8 sm:w-full sm:mt-20">
        <div class="w-4/5 sm:w-full mx-auto">
            <h1 class="text-4xl sm:text-3xl font-bold leading-normal text-center">HOW  ARE RAINBOWS FORMED? DISPERSION OF LIGHT?</h1>
        </div>
        <div class="flex flex-col space-y-8 p-4 leading-loose text-justify text-lg sm:text-base">
            <p><span class="pl-9">It</span> is very interesting and amazing every time that there is a phenomenon above such as rainbow. However, not everyone knows what is happening above and why it is creating different colors.</p>
            <p><span class="pl-9">Dispersion</span> of light is spreading or splitting of visible light onto different colors. When the white light approach to the compact disk which serves as the prism, it will refract from it and split that’s results to the different colors. Sir Isaac Newton, one of the greatest geniuses of all time discovered this occurrence, it was 1666 when he discovered that white light is composed of different colors, he made a small hole in his window allowing a beam of sun light to pass into a glass prism which resulted to split the light into different colors, he now called this band of different colors as “spectrum”</p>
            <p>(To clearly understand this lesson read about reflection and refraction first)</p>
            <p><span class="pl-9">To</span> have a further understanding let us make our own rainbow.</p>
            <p>But first select what experiment can you do base from your available material.</p>
        </div>

        <div class="flex flex-row sm:flex-col md:flex-col md:space-x-0 md:items-center md:space-y-8 sm:space-x-0 sm:items-center sm:space-y-8 justify-center space-x-8">
            <div class="flex bg-white shadow border border-black w-45% sm:w-11/12 md:w-10/12 h-auto">
            <div class="flex flex-col w-full p-8 space-y-3 text-xl sm:text-lg leading-loose ">
                <p class="text-center">MAKING RAINBOW USING WATER</p>
                <div class="flex flex-col w-80 h-52">
                    <p>Materials:</p>
                    <ul class="list-disc pl-10">
                        <li>Mirror</li>
                        <li>Bowl</li>
                        <li>Water</li>
                    </ul>
                </div>
                <div class="flex justify-center">
                    <button @click="togglePostModal1" class="w-60 h-12 bg-BGcolor4 rounded-full">
                    <p class="text-xl text-center">View More</p>
                </button>
                </div>
            </div>
            </div>
        
        <div class="flex bg-white shadow border border-black w-45% sm:w-11/12 md:w-10/12 h-auto">
            <div class="flex flex-col w-full p-8 space-y-3 text-xl sm:text-lg leading-loose ">
                <p class="text-center ">MAKING RAINDBOW USING COMPACT DISK</p>
                <div class="flex flex-col w-80 h-52">
                    <p>Materials:</p>
                    <ul class="list-disc pl-10">
                        <li>Compact Disk</li>
                        <li>Flashlight</li>
                        <li>White bond paper</li>
                    </ul>
                </div>
                <div class="flex justify-center">
                    <button @click="togglePostModal2" class="w-60 h-12 bg-BGcolor4 rounded-full">
                    <p class="text-xl text-center">View More</p>
                </button>
                </div>
            </div>
            </div>
        </div>

        <div class="flex flex-col text-xl sm:text-lg space-y-8 pt-4 justify-center">
        <p class="pb-4"><span class="pl-9">These</span> experiments will show you how and why dispersion of light occur with respect to the frequency and its relation to the refraction</p>
        <div class="bg-white mx-auto shadow border border-black w-93% sm:w-11/12 md:w-10/12 h-auto p-8">
            <div class="flex flex-col space-y-3 leading-loose">
                <p class="">REMEMBER!</p>
                    <ul class="list-disc pl-10">
                        <li>Refraction: it is the bending of light</li>
                        <li>Angle of Deviation: The angle of deviation or the angle made between the incident ray of light entering the first face of the prism</li>
                        <li>Prism: In optics, a prism is a clear piece of glass or other transparent material with precise angles and plane faces</li>
                    </ul>
            </div>
        </div>
        </div>

        <div class="flex flex-col space-y-8 p-4 leading-loose text-justify ">
          <h2 class="text-4xl sm:text-3xl font-bold">Let’s Discuss!</h2>
          <p class="text-lg sm:text-base"><span class="pl-9">As</span> we explore about dispersion through experiment, we found out that light is compose of different colors which are then split or disperse when it passes through a prism. The cause of dispersion of white light is that every color is refracted or bended in different angle resulting to a spectrum. In addition, these colors are refracted based on its frequency and wavelength. The higher the frequency of color the more it is refracted, which explains the order of the color in the spectrum knowing that red has the lowest frequency to color violet which has the highest frequency.</p>
        </div>
      </div>

      <Lesson4modal1 v-if="modal1" @closeModal5="listener1"/>
      <Lesson4modal2 v-if="modal2" @closeModal6="listener2"/>
</template>

<script>
import Lesson4modal1 from './lesson4modal1';
import Lesson4modal2 from './lesson4modal2';
export default {
    data() {
      return {
        modal1 : false,
        modal2 : false,
      };
    },

    components:{
      Lesson4modal1,
      Lesson4modal2,
    },

    methods:{
      togglePostModal1(){
        this.modal1 = !this.modal1
      },
      listener1(){
      this.modal1 = false;
      },
      togglePostModal2(){
        this.modal2 = !this.modal2
      },
      listener2(){
      this.modal2 = false;
      },
    }
}
</script>

<style>

</style>