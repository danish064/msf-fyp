<template>
  <div id="hero">
    <img id="bg_img" src="~assets/images/hero.svg" alt="" />
    <div id="content">
      <div id="heading" >
        Make Your <span id="blue">Doctor Appointment <br /></span>Online &
        Offline with
        <span id="icons">
          Ease
          <IconsCircle />
          <IconsBeat />
        </span>
      </div>
      <div id="sub-heading">
        Book your appointment today with our experienced doctors. Get the care
        you need and start feeling better.
      </div>
      <div id="buttons_wrapper">
        <button>Book Your Visit <IconsArrow /></button>
        <button>Get Mobile App <IconsDownload /></button>
      </div>
      <div id="rating_stuff"></div>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
#hero {
  @apply mb-11;
  @apply flex flex-col justify-center items-start px-16 relative;
  @apply h-[800px] px-36 pt-44 ;
  > #bg_img {
    @apply absolute -z-10 top-0 right-0;
  }
  > #content {
    @apply w-1/2 h-full flex flex-col justify-start items-start;
    > #heading {
      @apply text-[57px] leading-[64px] font-bold;
      > #blue {
        @apply text-primary;
      }
      > #icons {
        @apply flex flex-row justify-start items-center gap-x-4;
      }
      > svg {
        /* @apply ; */
      }
    }
    > #sub-heading {
      @apply text-base text-dustygray mt-6 w-3/4;
    }
    > #buttons_wrapper {
      @apply flex flex-row justify-start items-center mt-10;
      > button {
        @apply text-base text-white font-semibold py-4 px-6 rounded-lg;
        @apply flex flex-row justify-center items-center gap-x-2;
        @apply shadow-2xl;
        @apply mr-12;
        &:first-child {
          @apply bg-primary;
        }
        &:last-child {
          @apply bg-white text-primary;
        }
      }
    }
  }
}
</style>
