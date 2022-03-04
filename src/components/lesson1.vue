<template>
  <div class="flex flex-col w-4/5 space-y-8 sm:w-full sm:mt-20">
    <div class="w-4/5 sm:w-full mx-auto pb-10">
      <h1 class="text-4xl sm:text-3xl font-bold leading-normal text-center">NATURE OF LIGHT</h1>
    </div>
        <div class="flex flex-col space-y-8 p-4 leading-loose text-justify">
          <h2 class="text-4xl sm:text-3xl font-bold">BRIEF HISTORY</h2>
          <p class="text-lg sm:text-base"><span class="pl-9">Light</span> had been one of the wonders of the greatest philosophers before, it required hundreds of years to discover what we know today. Optics is known as the oldest discipline in the field of physics. At 5th B.C .to 3rd B.C. Socrates, Plato and Aristotle’s philosophies serve as the foundation to build Optics. However Euclid (330-275 B.C) summarized the essential knowledge of Optics including reflection, diffusion and vision and turn it to a book entitled “Optics”, in this old ages the concept was that the essence of light is white light and colors are created from the mixture of lightness and darkness, the exploration of light continue when Ibn al-Haytham (Alhazen) (965-1040) conducted a more precise theory through mathematical and experimental method which are  ompiled into his book entitled “The book of Optics” , his works serve as the driving force for modern science. In 1672 the concept of light of Aristotle about light was opposed by the discovery of Isaac Newton, he claimed that rather than pure white light (sunlight), the light is a combination of various colors having different refractivity (New Theory on Light and color) and in 1704 he authored the book named “Opticks” where he reveals the “Light Particle Theory”. At 1690 Christian Huygens published a paper on light promoting that light is a wave which explain the reflection and refraction phenomena of light contradicting Newton’s light particle theory, Huygens theory was supported by Thomas Young by his pinhole experiment and advocated that light behave like a wave, Young was also the first person to use the term energy and introduce his concept. At twentieth a century groundbreaking research papers made by Albert Einstein unraveled a theory that light is made up of particles called photon.<br/><br/><span class="pl-9">The</span> experiments made by well-known geniuses help us to understand the properties and characteristic of light, from reflection, refraction, and dispersion.</p>
        </div>
        <div class="flex flex-col space-y-8 p-4 leading-loose text-justify">
          <h2 class="text-4xl sm:text-3xl font-bold">VISIBLE LIGHT</h2>
          <p class="text-lg sm:text-base"><span class="pl-9">Light</span> is an energy form. The Sun is a significant light energy source. There would be no plants or animals on the surface of the Earth if the Sun did not provide energy.<br/><br/>Frequency and Wavelength<br/><br/><span class="pl-9">One</span> of the known features of light is that it behaves like a wave. As a result, the wavelength and frequency of light are used to characterize it. The frequency of a wave is the pace at which it vibrates or rises and falls while the wavelength is the distance between two peaks. Frequency and wavelength are inversely proportional which means the higher the frequency the shorter the wavelength and vise-versa.</p>
        </div>
        <div class="flex flex-col space-y-8 p-4 leading-loose text-justify ">
          <h2 class="text-4xl sm:text-3xl font-bold">Frequency and Wavelength</h2>
          <p class="text-lg sm:text-base"><span class="pl-9">One</span> of the known features of light is that it behaves like a wave. As a result, the wavelength and frequency of light are used to characterize it. The frequency of a wave is the pace at which it vibrates or rises and falls while the wavelength is the distance between two peaks. Frequency and wavelength are inversely proportional which means the higher the frequency the shorter the wavelength and vise-versa.</p>
          <div class="flex justify-center">
            <img src="../assets/imgs/lesson1/1.png" class="w-9/12 h-auto">
          </div>
          <p class="text-lg sm:text-base"><span class="pl-9">We</span> can only see light that falls inside a specified wavelength and frequency range. The visible spectrum refers to this range. The visible spectrum has a frequency range of 405 Terahertz to 790 terahertz.</p>
        </div>
        <div class="flex flex-col space-y-8 p-4 leading-loose">
          <h2 class="text-4xl sm:text-3xl font-bold ">The Electromagnetic Spectrum</h2>
          <p class="text-lg sm:text-base text-justify"><span class="pl-9">The</span> electromagnetic spectrum encompasses a wide range of light wavelengths, some of which are invisible to the naked eye. Radio waves, microwaves, infrared rays, and x-rays are examples of non- visible waves. These waves have a wide range of application in research and technology. The color of light in the visible spectrum is determined by its frequency.</p>
          <div class="flex justify-center">
            <img src="../assets/imgs/lesson1/2.png" class="w-9/12 h-auto">
          </div>
        </div>
        <div class="flex flex-col space-y-8 p-4 leading-loose text-justify">
          <h2 class="text-4xl sm:text-3xl font-bold">Properties of Light</h2>
          <p class="text-lg sm:text-base"><span class="pl-9">Ever</span> wondered how rainbows are formed and why does the image reflect by an object is clear and sometime not? Well, we will about explore how these things are possible by understanding what reflection, refraction and dispersion are.<br/><br/><br/>This topic will be discussed in lesson 2, lesson 3 and lesson 4.</p>
        </div>
      </div>

       
</template>

<script>

export default {
  data() {
      return {
        modal1 : false,
        modal2 : false,
      };
    },
}
</script>

<style scoped>
ol {
  counter-reset: list;
}
ol > li {
  list-style: none;
}
ol > li:before {
  content: counter(list, lower-alpha) ") ";
  counter-increment: list;
}
</style>