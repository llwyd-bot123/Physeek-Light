<template>
  <Navbar class="bg-BGcolor2"/>
  <div class="flex flex-col h-screen w-full">
  <div class="flex flex-row sm:flex-col w-full px-8 pt-32 ">
      <div class="flex flex-col w-1/5 sm:w-full pt-20 sm:pt-0 space-y-8 mr-8 sm:mr-0 text-center ">
        <div @click=" isActive_function('btn1')" :class="{active: activeBtn === 0 }" class="flex ">
          <button @click="toggle" class="flex flex-col focus:outline-none space-y-2 items-center w-full ">
          <p class="text-2.5xl sm:text-lg md:text-xl">LESSON 1</p>
          <p class="text-xl sm:text-base md:text-lg pb-1">Light</p>
          <hr class="opacity-50 w-full sm:w-3/5 h-0.5 border-2 border-green-700">
          </button>
        </div>
        <div @click=" isActive_function('btn2')" :class="{active: activeBtn === 'btn2' }" class="flex">
          <button @click="toggle2" class="flex flex-col focus:outline-none space-y-2 items-center w-full ">
          <p class="text-2.5xl sm:text-lg md:text-xl">LESSON 2</p>
          <p class="text-xl sm:text-base md:text-lg pb-1">Reflection of Light</p>
          <hr class="opacity-50 w-full sm:w-3/5 h-0.5 border-2 border-green-700">
          </button>
        </div>
        <div @click=" isActive_function('btn3')" :class="{active: activeBtn === 'btn3' }" class="flex">
          <button @click="toggle3" class="flex flex-col focus:outline-none space-y-2 items-center w-full ">
          <p class="text-2.5xl sm:text-lg md:text-xl">LESSON 3</p>
          <p class="text-xl sm:text-base md:text-lg pb-1">Refraction of Light</p>
          <hr class="opacity-50 w-full sm:w-3/5 h-0.5 border-2 border-green-700">
          </button>
        </div>
        <div @click=" isActive_function('btn4')" :class="{active: activeBtn === 'btn4' }"  class="flex">
          <button @click="toggle4" class="flex flex-col focus:outline-none space-y-2 items-center w-full ">
          <p class="text-2.5xl sm:text-lg md:text-xl">LESSON 4</p>
          <p class="text-xl sm:text-base md:text-lg pb-1">Dispersion of Light</p>
          <hr class="opacity-50 w-full sm:w-3/5 h-0.5 border-2 border-green-700">
          </button>
        </div>
      </div>
    <component :is="component" />
  </div>
  <Footer/>
  </div>
</template>

<script>
import Navbar from "@/views/nav"
import Footer from "@/views/footer"
import Lesson1 from "@/components/lesson1"
import Lesson2 from "@/components/lesson2"
import Lesson3 from "@/components/lesson3"
import Lesson4 from "@/components/lesson4"
  export default {
    data() {
      return {
        component: "Lesson1",
        component2: "Lesson2",
        component3: "Lesson3",
        component4: "Lesson4",
        activeBtn: 0,
      };
    },

    components: {
      Navbar,
      Footer,
      Lesson1,
      Lesson2,
      Lesson3,
      Lesson4,
    },

    methods: {
      toggle(){
      if(this.component != Lesson1)
        this.component = Lesson1;
    },
     toggle2(){
      if(this.component != Lesson2)
        this.component = this.component2;
    },
    toggle3(){
       if(this.component != Lesson2)
        this.component = this.component3;
    },
    toggle4(){
      if(this.component != Lesson2)
        this.component = this.component4;
    },

    isActive_function(el){
     if(el=='btn1'){
      this.activeBtn= 0;
    }
    else {
        this.activeBtn= el;
        }
    },
    },
};
</script>

<style scoped>
.active {
  @apply text-green-700
}
.active button{
  @apply text-green-700
}
</style>