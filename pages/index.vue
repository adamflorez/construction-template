<template>
  <div>
    <Hero
      h="90vh"
      img="https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    >
      <div class="text-white relative max-w-[800px] text-center mt-12">
        <h1 class="font-black text-9xl outlined text-transparent">BUILDCO</h1>
        <h2 class="text-4xl font-bold leading-tighter relative mb-8">
          We never get tired of building
        </h2>
        <p class="mb-12 text-lg">
          Promoting safe and efficient construction services
        </p>
        <NuxtLink
          class="bg-orange-400 px-8 py-4 hover:bg-orange-500 duration-300"
          to="/portfolio"
          >All Projects<Icon
            name="material-symbols-light:arrow-outward-rounded"
            class="ml-2"
            size="24"
        /></NuxtLink>
      </div>
    </Hero>
    <div class="w-full max-w-[1400px] mx-auto">
      <div
        class="lg:pt-20 pt-8 md:pb-20 mx-auto flex flex-wrap gap-2 justify-center items-start"
      >
        <div
          v-for="(item, index) in companyValues"
          class="w-full py-6lg:max-w-[456px]"
          :class="
            index % 2 != 0 &&
            'bg-gray-100 bg-opacity-50 md:my-0 md:bg-opacity-0'
          "
        >
          <Card :value="item"></Card>
        </div>
      </div>
      <div class="relative py-8">
        <!-- <video width="1600" height="800" class='mx-auto pt-4 relative z-10' controls>
        <source
          src="https://player.vimeo.com/external/214473756.sd.mp4?s=2101955523af93ffb55a2d345e6c17b0c4b10ee0&profile_id=164&oauth2_token_id=57447761"
          type="video/mp4"
        />
      </video> -->

        <div
          class="relative flex flex-wrap lg:flex-nowrap overflow-hidden mx-auto gap-5"
        >
          <NuxtImg
            class="w-full shadow-lg"
            src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
          />
          <NuxtImg
            class="w-full shadow-lg"
            src="https://images.pexels.com/photos/2489/street-building-construction-industry.jpg?auto=compress&cs=tinysrgb&w=800"
          />
        </div>
      </div>

      <div class="pt-4 pb-14 px-4 lg:px-2 flex flex-wrap items-center">
        <div class="relative lg:w-1/2 w-full pr-8">
          <h2 class="z-0 outlined text-9xl font-black text-transparent">
            About
          </h2>
          <h3 class="text-5xl relative font-medium mb-8 lg:mb-12">
            Welcome to Buildco. We are professional & reliable
          </h3>
          <NuxtLink
            class="border-2 border-black px-8 py-4 hover:border-orange-500 hidden lg:flex lg:w-max hover:text-primary-hover duration-300"
            to="/about"
            >Read More<Icon
              name="material-symbols-light:arrow-outward-rounded"
              class="ml-2"
              size="24"
          /></NuxtLink>
        </div>
        <div class="lg:w-1/2 w-full">
          <p class="text-lg text-slate-400">
            BuildCo: Where visionary design and unmatched craftsmanship meet. We
            turn houses into dream homes with our commitment to excellence and
            sustainability in every project.
          </p>
          <ul class="text-lg mt-8">
            <li class="mb-4">
              <Icon
                name="tabler:point-filled"
                class="text-primary mr-4"
              />Geographical diversity, project complexity
            </li>
            <li class="mb-4">
              <Icon
                name="tabler:point-filled"
                class="text-primary mr-4"
              />Whether building on land or over water
            </li>
            <li>
              <Icon
                name="tabler:point-filled"
                class="text-primary mr-4"
              />Construction companies respond to the unique needs
            </li>
          </ul>
        </div>
      </div>
      <div class="pt-10 hidden lg:block">
        <span class="uppercase font-medium"
          >Teams and Companies we've worked with:</span
        >
        <div class="w-full relative flex justify-between py-8 gap-4">
          <NuxtImg
            src="https://cdn.worldvectorlogo.com/logos/metal.svg"
            width="100"
            sizes="150px sm:20px md:40px"
          ></NuxtImg>
          <NuxtImg
            src="https://cdn.worldvectorlogo.com/logos/weissen-burger-pilsner-1.svg"
            width="100"
          ></NuxtImg>
          <NuxtImg
            src="https://cdn.worldvectorlogo.com/logos/noysi.svg"
            width="100"
          ></NuxtImg>
          <NuxtImg
            src="https://cdn.worldvectorlogo.com/logos/webpixels-icon-light-1.svg"
            width="100"
          ></NuxtImg>

          <NuxtImg
            src="https://cdn.worldvectorlogo.com/logos/subway-2.svg"
            width="100"
          ></NuxtImg>
        </div>
      </div>
      <div
        class="py-20 flex flex-wrap justify-center items-start bg-blue-300 relative overflow-hidden text-white"
      >
        <div class="relative pl-4 p-2 z-40 lg:w-1/2 w-full">
          <h2 class="z-0 outlined text-9xl font-black text-transparent">
            Services
          </h2>
          <h3 class="text-6xl relative font-medium mb-12">
            Providing solutions that meet your needs.
          </h3>
          <NuxtLink
            class="border-2 border-white px-8 py-4 hover:border-orange-500 hover:text-primary-hover duration-300"
            to="/about"
            >View All Services<Icon
              name="material-symbols-light:arrow-outward-rounded"
              class="ml-2"
              size="24"
          /></NuxtLink>
        </div>
        <div class="relative z-20 flex flex-col lg:w-1/3 lg:pl-4 mt-8 w-full">
          <NuxtLink
            class="text-xl pl-4 py-4 hover:border-orange-500 hover:translate-x-2 hover:text-primary-hover duration-300"
            to="/about"
            >/ Design and Planning<Icon
              name="material-symbols-light:arrow-outward-rounded"
              class="ml-2"
          /></NuxtLink>
          <NuxtLink
            class="text-xl pl-4 py-4 hover:border-orange-500 hover:translate-x-2 hover:text-primary-hover duration-300"
            to="/about"
            >/ Remodeling Services<Icon
              name="material-symbols-light:arrow-outward-rounded"
              class="ml-2"
          /></NuxtLink>
          <NuxtLink
            class="text-xl pl-4 py-4 hover:border-orange-500 hover:translate-x-2 hover:text-primary-hover duration-300"
            to="/about"
            >/ Construction Services<Icon
              name="material-symbols-light:arrow-outward-rounded"
              class="ml-2"
          /></NuxtLink>
          <NuxtLink
            class="text-xl pl-4 py-4 hover:border-orange-500 hover:translate-x-2 hover:text-primary-hover duration-300"
            to="/about"
            >/ Exterior Improvements<Icon
              name="material-symbols-light:arrow-outward-rounded"
              class="ml-2"
          /></NuxtLink>
          <NuxtLink
            class="text-xl pl-4 py-4 hover:border-orange-500 hover:translate-x-2 hover:text-primary-hover duration-300"
            to="/about"
            >/ Specialty Services<Icon
              name="material-symbols-light:arrow-outward-rounded"
              class="ml-2"
          /></NuxtLink>
        </div>
        <NuxtImg
          class="absolute z-0 top-0 h-full left-0 w-full object-cover brightness-50"
          src="https://images.pexels.com/photos/1579356/pexels-photo-1579356.jpeg?auto=compress&cs=tinysrgb&w=800"
        ></NuxtImg>
      </div>
      <div class="bg-orange-400 w-full pt-8 lg:pt-20 pb-8 text-center relative">
        <h2 class="outlined-orange text-transparent font-black text-9xl">
          Portfolio
        </h2>
        <h3 class="text-white font-bold -mt-3 text-4xl mb-8 relative z-10">
          See Our Case Studies
        </h3>
        <div class="flex md:hidden">
          <NuxtLink
            class="border-2 border-white text-white mx-auto px-8 py-4 hover:border-orange-800 hover:text-orange-800 duration-300"
            to="/about"
            >View All Projects<Icon
              name="material-symbols-light:arrow-outward-rounded"
              class="ml-2"
              size="24"
          /></NuxtLink>
        </div>
        <div
          class="md:grid px-12 flex-wrap hidden place-items-center gap-12 grid-cols-2 grid-rows-2 p-8"
        >
          <div class="object-cover overflow-hidden">
            <NuxtImg
              src="https://images.pexels.com/photos/1451416/pexels-photo-1451416.jpeg?auto=compress&cs=tinysrgb&w=800"
              width="700"
              class="aspect-square object-cover"
            ></NuxtImg>
          </div>
          <div class="object-cover overflow-hidden">
            <NuxtImg
              src="https://images.pexels.com/photos/1451416/pexels-photo-1451416.jpeg?auto=compress&cs=tinysrgb&w=800"
              width="700"
              class="aspect-square object-cover"
            ></NuxtImg>
          </div>
          <div class="object-cover overflow-hidden">
            <NuxtImg
              src="https://images.pexels.com/photos/1451416/pexels-photo-1451416.jpeg?auto=compress&cs=tinysrgb&w=800"
              width="700"
              class="aspect-square object-cover"
            ></NuxtImg>
          </div>
          <div class="object-cover overflow-hidden">
            <NuxtImg
              src="https://images.pexels.com/photos/1451416/pexels-photo-1451416.jpeg?auto=compress&cs=tinysrgb&w=800"
              width="750"
              class="aspect-square object-cover"
            ></NuxtImg>
          </div>
        </div>
      </div>
      <div class="w-full pt-8 lg:pt-10 pb-6 text-center relative">
        <h2 class="outlined text-transparent font-black text-9xl">Awards</h2>
        <h3 class="font-bold -mt-3 text-4xl mb-8">
          Buildco is an award-winning Construction company
        </h3>
        <NuxtLink
          to="/awards"
          class="flex justify-between hover:text-primary-hover hover:pl-8 duration-300 py-8 items-center border-b mx-4"
        >
          <h3 class="text-3xl font-black">2017</h3>
          <h4 class="text-xl">Performance Award</h4>
          <p class="hidden md:block">
            Awarded for the volume and quality of our work.
          </p>
          <Icon
            name="material-symbols-light:arrow-outward-rounded"
            class="ml-2"
            size="24"
          />
        </NuxtLink>
        <NuxtLink
          to="/awards"
          class="flex justify-between hover:text-primary-hover hover:pl-8 duration-300 py-8 items-center border-b mx-4"
        >
          <h3 class="text-3xl font-black">2017</h3>
          <h4 class="text-xl">Performance Award</h4>
          <p class="hidden md:block">
            Awarded for the volume and quality of our work.
          </p>
          <Icon
            name="material-symbols-light:arrow-outward-rounded"
            class="ml-2"
            size="24"
          />
        </NuxtLink>
        <NuxtLink
          to="/awards"
          class="flex justify-between hover:text-primary-hover hover:pl-8 duration-300 py-8 items-center mx-4"
        >
          <h3 class="text-3xl font-black">2017</h3>
          <h4 class="text-xl">Performance Award</h4>
          <p class="hidden md:block">
            Awarded for the volume and quality of our work.
          </p>
          <Icon
            name="material-symbols-light:arrow-outward-rounded"
            class="ml-2"
            size="24"
          />
        </NuxtLink>
      </div>
      <div
        class="w-full pt-8 lg:pt-20 pb-8 overflow-hidden text-center relative flex items-center justify-end"
      >
        <div class="flex flex-col items-stretch mr-4">
          <div
            class="flex items-start justify-end py-4 relative z-10 border-b text-white"
          >
            <h2 class="text-9xl">1500</h2>
            <span class="text-5xl text-primary">+</span>
          </div>
          <div class="relative z-10 text-white font-medium py-4">
            <p>
              <span class="text-primary">Clients Satisfied</span> with Our
              Work.
            </p>
          </div>
        </div>
        <NuxtImg
          src="https://images.pexels.com/photos/3862135/pexels-photo-3862135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          class="absolute brightness-[30%] z-0 w-full"
        />
      </div>
      <div
        class="w-full relative bg-orange-400 md:px-10 pt-12 px-2 flex flex-col justify-end left-0"
      >
        <div
          id="testimonial"
          class="flex flex-wrap flex-col justify-center w-full text-center items-center duration-300 opacity-0"
        >
          <div
            class="max-h-[200px] max-w-[200px] pt-2 aspect-square object-cover mb-4"
          >
            <NuxtImg
              :src="testimonials[currentTestimonial].image"
              class="h-full w-full aspect-square object-cover"
            />
          </div>
          <div>
            <blockquote class="text-2xl max-w-[800px] text-white mb-4">
              "{{ testimonials[currentTestimonial].testimonial }}"
            </blockquote>
            <h2 class="text-base text-orange-950 font-medium uppercase">
              {{ testimonials[currentTestimonial].name }}
            </h2>
            <h3 class="text-white text-opacity-80 text-md mt-1">
              {{ testimonials[currentTestimonial].position }}
            </h3>
          </div>
        </div>
        <div class="flex w-full justify-center md:justify-end pt-8 mb-12">
          <button>
            <Icon
              v-for="(testimonial, index) in testimonials"
              name="tabler:point-filled"
              class="text-white duration-300"
              @click="goToSlide(index)"
              :class="index == currentTestimonial ? '' : 'text-opacity-70'"
            />
          </button>
        </div>
      </div>
      <div class="md:py-20 py-6 px-2 md:px-10">
        <h2 class="outlined text-9xl text-center font-black text-transparent">
          Blogs
        </h2>
        <h3 class="text-4xl font-bold ml-8 mb-12 text-center">
          Todays latest blogs & articles
        </h3>
        <div class="flex justify-center flex-wrap gap-4">
          <div>
            <NuxtImg
              src="https://images.pexels.com/photos/220152/pexels-photo-220152.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
            <div class="bg-white z-10 relative -mt-10 ml-10 p-8">
              <small class="text-gray-500 uppercase text-md"
                >8 May 2019
                <Icon name="tabler:point-filled" color="grey" class="mx-2" />
                EQUIPMENT</small
              >
              <h4 class="font-bold text-lg w-[80%]">
                5 Best Tiles for Your Home
              </h4>
              <div class="border my-4"></div>
              <NuxtLink
                class="py-4 hover:text-primary-hover duration-300"
                to="/about"
                >Read More<Icon
                  name="material-symbols-light:arrow-outward-rounded"
                  class="ml-2"
              /></NuxtLink>
            </div>
          </div>
          <div>
            <NuxtImg
              src="https://images.pexels.com/photos/220152/pexels-photo-220152.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
            <div class="bg-white z-10 relative -mt-10 ml-10 p-8">
              <small class="text-gray-500 uppercase text-md"
                >8 May 2019
                <Icon name="tabler:point-filled" color="grey" class="mx-2" />
                EQUIPMENT</small
              >
              <h4 class="font-bold text-lg w-[80%]">
                5 Best Tiles for Your Home
              </h4>
              <div class="border my-4"></div>
              <NuxtLink
                class="py-4 hover:text-primary-hover duration-300"
                to="/about"
                >Read More<Icon
                  name="material-symbols-light:arrow-outward-rounded"
                  class="ml-2"
              /></NuxtLink>
            </div>
          </div>
          <div>
            <NuxtImg
              src="https://images.pexels.com/photos/220152/pexels-photo-220152.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
            <div class="bg-white z-10 relative -mt-10 ml-10 p-8">
              <small class="text-gray-500 uppercase text-md"
                >8 May 2019
                <Icon name="tabler:point-filled" color="grey" class="mx-2" />
                EQUIPMENT</small
              >
              <h4 class="font-bold text-lg w-[80%]">
                5 Best Tiles for Your Home
              </h4>
              <div class="border my-4"></div>
              <NuxtLink
                class="py-4 hover:text-primary-hover duration-300"
                to="/about"
                >Read More<Icon
                  name="material-symbols-light:arrow-outward-rounded"
                  class="ml-2"
              /></NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-slate-950 py-4 text-white">
        <div
          class="grid pt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-10"
        >
          <div class="mb-10">
            <h3 class="text-xl font-black uppercase">Buildco</h3>
            <p class="my-8">
              To be the gold standard in home construction, transforming spaces
              into bespoke havens for families to thrive.
            </p>
            <div class="flex gap-x-2">
              <a
                href="https://www.instagram.com/"
                class="p-2 rounded-full border h-10 w-10 grid place-items-center"
                ><Icon name="ph:instagram-logo"
              /></a>
              <a
                href="https://www.facebook.com/"
                class="p-2 rounded-full border h-10 w-10 grid place-items-center"
                ><Icon name="ion:social-facebook"
              /></a>
              <a
                href="https://www.twitter.com/"
                class="p-2 rounded-full border h-10 w-10 grid place-items-center"
                ><Icon name="ri:twitter-x-fill"
              /></a>
              <a
                href="https://www.youtube.com/"
                class="p-2 rounded-full border h-10 w-10 grid place-items-center"
                ><Icon name="prime:youtube"
              /></a>
            </div>
          </div>
          <div class="mb-10">
            <h3 class="text-xl font-black uppercase">Address</h3>
            <div class="flex mt-8 items-start">
              <Icon
                name="material-symbols:android-emergency-location-service"
                class="text-primary mr-2"
                size="24"
              />
              <p>123 some street, Winter Haven, Fl, 33881, USA</p>
            </div>
            <div class="flex mt-4 items-start">
              <Icon
                name="material-symbols:call"
                class="text-primary mr-2"
                size="24"
              />
              <div>
                <a href="tel:+13862222222">+1 386 222 2222</a><br />
                <a href="tel:+13862222222">+1 386 222 2222</a>
              </div>
            </div>
          </div>
          <div class="mb-10">
            <h3 class="text-xl font-black uppercase">Pages</h3>
            <ul class="mt-8 flex flex-col">
              <NuxtLink to="/">Home</NuxtLink>
              <NuxtLink to="/services">Services</NuxtLink>
              <NuxtLink to="/portfolio">Portfolio</NuxtLink>
              <NuxtLink to="/about">Why Choose Us?</NuxtLink>
              <NuxtLink to="/contact">Contact Us</NuxtLink>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-black uppercase">Newsletter</h3>
            <p class="mt-8 mb-4">
              Subscribe to our newsletter for daily news and updates
            </p>
            <div class="flex border-b pb-1 items-center">
              <input
                class="outline-none bg-transparent py-2 w-full"
                type="email"
                placeholder="Your Email"
              />
              <button
                class="bg-orange-400 hover:bg-orange-500 duration-300 w-8 h-8 grid place-items-center"
              >
                <Icon
                  name="material-symbols-light:arrow-outward-rounded"
                  class=""
                  size="24"
                />
              </button>
            </div>
            <div class="flex items-center mt-3">
              <input type="checkbox" id="privacy" class="mr-2" />
              <label for="privacy"
                >I agree to the
                <NuxtLink to="/privacy-policy" class="underline"
                  >Privacy Policy</NuxtLink
                ></label
              >
            </div>
          </div>
          <div
            class="border-t w-full md:col-span-2 lg:col-span-4 mt-10 py-9 flex justify-end text-slate-300"
          >
            <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>
            <p class="mx-3">|</p>
            <NuxtLink to="/terms-of-use">Terms of User</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Card from "~/components/Card";
const videoHover = ref(false);
const newCursor = ref(null);
const currentTestimonial = ref(0);
const { $anime } = useNuxtApp();
const gsap = useGsap();

onMounted(() => {
  gsap.to("#testimonial", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#testimonial",
      start: "-100 center", // Adjust this to control when the animation starts
      // Uncomment this line if you want to see the start and end points visually for debugging
    },
  });

  if (videoHover) {
    document.body.style.cursor = `url('${newCursor.value}'), auto`;
  } else {
    document.body.style.cursor = `default`;
  }
});

function goToSlide(targetIndex) {
  currentTestimonial.value = targetIndex;

  gsap.to("#testimonial", {
    opacity: 1,
    duration: 0.8,
  });
}

const companyValues = [
  {
    number: "01",
    title: "Our Mission",
    shortDesc:
      "Delivering superior home remodeling with quality, precision, and a personal touch for every client.",
  },
  {
    number: "02",
    title: "Our Vision",
    shortDesc:
      "To be the gold standard in home construction, transforming spaces into bespoke havens for families to thrive.",
  },
  {
    number: "03",
    title: "Our Goals",
    shortDesc:
      "Committing to sustainability, innovation, and client satisfaction in every project, aiming to exceed expectations.",
  },
];

const testimonials = [
  {
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800", // Replace with actual image URL
    name: "Jane Doe",
    testimonial:
      "This product has revolutionized the way I work, increasing my productivity and efficiency.",
    position: "Marketing Director",
  },
  {
    image:
      "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=800", // Replace with actual image URL
    name: "John Smith",
    testimonial:
      "An incredible tool that has helped me achieve my project goals with ease and precision.",
    position: "Project Manager",
  },
  {
    image:
      "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=800", // Replace with actual image URL
    name: "Alex Johnson",
    testimonial:
      "The customer service was outstanding and the product exceeded expectations in every way.",
    position: "Customer Support Specialist",
  },
  {
    image:
      "https://images.pexels.com/photos/1310474/pexels-photo-1310474.jpeg?auto=compress&cs=tinysrgb&w=800", // Replace with actual image URL
    name: "Samantha Brown",
    testimonial:
      "A must-have for anyone looking to leverage the latest industry standards.",
    position: "Software Developer",
  },
  {
    image:
      "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=800", // Replace with actual image URL
    name: "Chris Davis",
    testimonial:
      "Efficient, user-friendly, and reliable. I can't imagine going back to our old processes.",
    position: "Operations Manager",
  },
];
</script>

<style lang="scss" scoped></style>
