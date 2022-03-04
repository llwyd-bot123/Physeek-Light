<template>
<div class="shadow-bs2 mt-14 z-10 rounded-lg fixed" style="width: 1440px; height: 24px;"></div>
  <Navbar class="bg-BGcolor8" :class="{ ccolor: scrolled > 50 }"/>
  <div 
    class="flex flex-row sm:flex-col-reverse  md:flex-col-reverse space-x-5 lg:justify-around items-center bg-BGcolor8 h-auto w-full sm:pt-24 sm:pb-24 md:pt-24 md:pb-24 "
  >
    <div class="inline-flex flex-col space-y-6">
      <p
        class="
          text-7.5xl sm:text-5xl md:text-6xl lg:text-7.2xl
          font-bold
          leading-tight2
          text-center text-yellow-200
          mt-16 sm:mt-8 md:mt-8
        "
      >
        It’s the Best Day<br />to LEARN!
      </p>
      <p class="text-2xl lg:text-xl font-bold text-center text-white w-4/5 mx-auto">
        Welcome to PhySeeks Light where you can explore things about
        visible light.
      </p>
    </div>
    <div class="flex lg:relative xl:relative top-0 justify-center w-auto sm:mt-10">
      <img src="../assets/imgs/headerr.png" class="w-97 lg:w-96 sm:w-44 md:w-56 h-auto" />
    </div>
  </div>

  <div class="flex flex-col mt-24">
    <p class="text-6xl sm:text-5xl font-bold text-center text-gray-800 pb-24 drop-shadow-sm filter ts">LESSONS</p>
    <div class="flex flex-row sm:flex-col sm:space-x-0 md:flex-col md:space-x-0 space-x-6 lg:space-x-3 justify-center sm:items-center sm:space-y-16 md:items-center md:space-y-16">
      <div class="flex w-72 h-auto sm:w-10/12 md:w-9/12 lg:w-64 bg-white border border-opacity-10 shadow-bs rounded-lg border-black">
        <div class="flex flex-col p-8 justify-center space-y-6 sm:items-center  sm:w-full md:items-center md:w-full">
          <p class="text-2xl font-bold text-center text-gray-800 pb-2">LIGHT</p>
          <p class="h-44 md:h-24 sm:h-32 w-auto text-lg lg:text-base leading-normal">Light had been one of the wonders of the greatest philosophers before, it required hundreds of years to discover what we know today....</p>
          <button @click="$router.push('/lessons')" class="w-52 lg:w-40 h-14 bg-BGcolor4 border rounded-full border-red-300">
            <p class="text-2xl lg:text-xl font-bold leading-10 text-center text-gray-800">Read more</p>
          </button>
        </div>
      </div>
      <div class="flex w-72 h-auto sm:w-10/12 md:w-9/12 lg:w-64 bg-white shadow-bs border border-opacity-10 rounded-lg border-black">
        <div class="flex flex-col p-8 justify-center space-y-6 sm:items-center sm:w-full md:items-center md:w-full">
          <p class="text-2xl font-bold text-center text-gray-800 pb-2">REFLECTION OF LIGHT</p>
          <p class="h-36 md:h-24 sm:h-32 w-auto text-lg lg:text-base leading-normal">Our ability to see through our eyes depends on the reflective properties of light....</p>
          <button  @click="$router.push('/lessons')" class="w-52 lg:w-40 h-14 bg-BGcolor4 border rounded-full border-red-300">
            <p class="text-2xl lg:text-xl font-bold leading-10 text-center text-gray-800">Read more</p>
          </button>
        </div>
      </div>
      <div class="flex w-72 h-auto sm:w-10/12 md:w-9/12 lg:w-64 bg-white shadow-bs border border-opacity-10 rounded-lg border-black">
        <div class="flex flex-col p-8 justify-center space-y-6 sm:items-center sm:w-full md:items-center md:w-full">
          <p class="text-2xl font-bold text-center text-gray-800 pb-2">REFRACTION OF LIGHT</p>
          <p class="h-36 sm:h-32 md:h-24 w-auto text-lg lg:text-base leading-normal">Light is a complex and broad topic in the study of physics...</p>
          <button  @click="$router.push('/lessons')" class="w-52 lg:w-40 h-14 bg-BGcolor4 border rounded-full border-red-300">
            <p class="text-2xl lg:text-xl font-bold leading-10 text-center text-gray-800">Read more</p>
          </button>
        </div>
      </div>
      <div class="flex w-72 h-auto sm:w-10/12 md:w-9/12 lg:w-64 bg-white shadow-bs border border-opacity-10 rounded-lg border-black">
        <div class="flex flex-col p-8 justify-center space-y-6 sm:items-center sm:w-full md:items-center md:w-full">
          <p class="text-2xl font-bold text-center text-gray-800 pb-2">DISPERSION OF LIGHT</p>
          <p class="h-36 md:h-24 sm:h-32 w-auto text-lg lg:text-base leading-normal">Dispersion of light is spreading or splitting of visible light onto different colors.</p>
          <button @click="$router.push('/lessons')" class="w-52 lg:w-40 h-14 bg-BGcolor4 border rounded-full border-red-300">
            <p class="text-2xl lg:text-xl font-bold leading-10 text-center text-gray-800">Read more</p>
          </button>
        </div>
      </div>
    </div>
  </div> 


  <Footer class="" />
</template>

<script>
  // @ is an alias to /src
  import Navbar from "@/views/nav"
  import Footer from "@/views/footer"
  export default {
    data() {
      return {
        scrolled: null,
      };
    },

    components: {
      Navbar,
      Footer,
    },

    methods: {
      handleScroll() {
        this.scrolled = window.scrollY;
      },
      
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    unmounted() {
      window.removeEventListener("scroll", this.handleScroll);
    },
  };
</script>

<style scoped>
.ccolor {
    @apply bg-BGcolor2 z-10
  }
.ts{
  text-shadow: 0 10px rgba(209, 213, 219);
}
</style>