<template>
  <div class=" w-full flex flex-row h-20 fixed ">
    <div class="flex flex-row pl-20 sm:pl-5 items-center space-x-20 ">
        <img src="../assets/pslogo1.png" class=" w-20 h-auto">
        <div class="flex flex-row space-x-5 text-xl font-bold leading-normal text-white">
            <button @click="$router.push('/')" class="focus:outline-none font-bold leading-normal text-white">
              <p>Home</p>
            </button>
            <p>|</p>
            <div class="flex">
            <button @click="toggle" class="flex flex-row space-x-4 items-center font-bold leading-normal text-white">
                <p>Lessons</p>
                <svg class="w-5 h-auto rounded-lg text-white fill-current" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M0 3l12 18 12-18h-24zm12 16.197l-10.132-15.197h20.263l-10.131 15.197"/></svg>
            </button>
          <div v-if="ddmenu" class="absolute mt-18 py-4 px-8 text-xl w-40 text-center bg-white rounded-md shadow-xl z-20 text-black">
            <button @click="$router.push('/lessons')" class="focus:outline-none font-semibold pb-1">Lesson 1</button>
            <button @click="$router.push('/lessons')" class="focus:outline-none font-semibold pb-1">Lesson 2</button>
            <button @click="$router.push('/lessons')" class="focus:outline-none font-semibold pb-1">Lesson 3</button>
            <button @click="$router.push('/lessons')" class="focus:outline-none font-semibold pb-1">Lesson 4</button>
          </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data(){
    return{
      ddmenu: false
    }
  },

  methods:{
    toggle(){
      this.ddmenu = !this.ddmenu
    }
  },
}
</script>
