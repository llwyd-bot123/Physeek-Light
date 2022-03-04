<template>
  <div class="flex flex-col w-4/5 space-y-8 sm:w-full sm:mt-20">
    <div class="w-4/5 sm:w-full mx-auto">
      <h1 class="text-4xl sm:text-3xl font-bold leading-normal text-center">REFRACTION OF LIGHT</h1>
    </div>
        <div class="flex flex-col space-y-8 p-4 leading-loose text-justify text-lg sm:text-base">
            <p><span class="pl-9">Light</span> is a complex and broad topic in the study of physics. Light has an important role in many important physics subjects, from relativity to reflection. Optics refers to the discipline of physics concerned with light and its uses. The main properties of light that belong under the ‘ray optics' category are reflection and refraction. Refraction occurs when light bends as it passes through a distorting material from one material to another.</p>
            <p><span class="pl-9">Descartes</span> proclaimed his conclusion of the rules of reflection and refraction in early 1637, utilizing his comparison of objects based on their being alike in some way concerning moving balls, a blind man's walking stick, and wine grapes stepping heavily in a vat to make his meaning clear. Light flows more easily in water, according to him. When a light ray meets a barrier that leads to another transparent medium, some of the energy is reflected while the rest enters the second medium. Due to refraction, the component that enters the second medium bends at the boundary.</p>
            <p><span class="pl-9">When</span> light moves from one substance to another and crosses the boundary between the two substances head-on, it will travel straight through with no change in direction (perpendicular, or a 90-degree angle of incidence). If the light strikes the border at any other angle, it will be bent or refracted, with the degree of refraction increasing as the beam approaches the boundary at a greater angle. A beam of light striking water vertically, for example, will not be refracted; nevertheless, if the beam enters the water at a tiny angle, it will be refracted to a minor degree. The light will refract in proportion to the entry angle if the angle of the beam is increased even more. The ratio between the angle at which light crosses the media interface and the angle created after efraction is an exact feature of the substance that produces the refraction effect, as early scientists discovered.</p>
            <p><span class="pl-9">When</span> For you to further understand how refraction of light occur let us perform a laboratory experiment that can be easily done at home. That is why the material of this experiment can only be found inside the house. Also, this is easy to perform because it is designed by “DIY” or “Do It Yourself”.</p>
            <p><span class="pl-9">But</span> first select what experiment can you do base from your available material.</p>
        </div>

        <div class="flex flex-row justify-center space-x-8 md:flex-col md:space-x-0 md:items-center md:space-y-8 sm:flex-col sm:space-x-0 sm:items-center sm:space-y-8">
            <div class="flex bg-white shadow border border-black w-45% sm:w-11/12 md:w-10/12 h-auto">
            <div class="flex flex-col p-8 space-y-3 text-xl leading-loose sm:text-lg ">
                <p class="text-center">DETERMINE HOW DOES THE REFRACTION OF LIGHT WOKRS</p>
                <p class="font-bold text-center">YOU CAN DO IT, TRUST ME</p>
                <div class="flex flex-col w-80 h-60 sm:h-40">
                    <p>Materials:</p>
                    <ul class="list-disc pl-10">
                        <li>Transparent  water bottle</li>
                        <li>Water</li>
                        <li>Colored stick</li>
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
            <div class="flex flex-col p-8 space-y-3 text-xl leading-loose sm:text-lg">
                <p class="text-center">DESCRIBE THE PHENOMENON OF REFRACTION</p>
                <p class="font-bold text-center">REVERSING ARROW ILLUSION</p>
                <div class="flex flex-col w-80 h-60 sm:h-40">
                    <p>Materials:</p>
                    <ul class="list-disc pl-10">
                        <li>Piece of paper</li>
                        <li>Marker</li>
                        <li>Glass or jar</li>
                        <li>Water</li>
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

        <div class="flex flex-col space-y-8 p-4 leading-loose text-justify ">
          <h2 class="text-4xl sm:text-3xl font-bold">Let’s Discuss!</h2>
          <p class="text-lg sm:text-base"><span class="pl-9">Refraction</span> occurs when light bends as it passes through a distorting material from one material to another. In earlier time, using his comparison of things based on their being alike in some way about moving balls, the walking stick of a blind man, and wine grapes that being stepping heavily in a vat to make his meaning clear, Descartes announced his product of formulating of laws of reflection and refraction. According to him that light moves more easily in water. The materials used in this study area piece of paper, marker, jar, and water. The researcher found out when the arrow is moved to a particular distance behind the glass, it looks like it reversed itself. When light passes from one medium to another, it can bend or refract. In the experiment that you just completed, light traveled from the arrow through the air, through the glass, through the water, through the back of the glass, and then back through the air, before hitting your eye.</p>
          <p class="text-lg sm:text-base"><span class="pl-9">Anytime</span> that light passes from one medium, or material, into another, it refracts. Light bends because of the lenses. In the experiment the lenses are the glass or jar so that’s why the direction of the arrow is being reversed or being changed. To explain this, you must think about the glass of water as if it is a magnifying glass. When light goes through a magnifying glass the light bends toward the center. The spot where the light converges is called the focal point, but beyond the focal point the image appears to reverse because the light rays that were bent pass each other and the light that was on the right side is now on the left and the left on the right, which makes the arrow appear to be reversed. As a recommendation to the future researcher make an innovation and further research.</p>          
        </div>
      </div>

      <Lesson3modal1 v-if="modal1" @closeModal3="listener1"/>
      <Lesson3modal2 v-if="modal2" @closeModal4="listener2"/>
</template>

<script>
import Lesson3modal1 from './lesson3modal1.vue';
import Lesson3modal2 from './lesson3modal2.vue';
export default {
    data() {
      return {
        modal1 : false,
        modal2 : false,
      };
    },

    components:{
      Lesson3modal1,
      Lesson3modal2,
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