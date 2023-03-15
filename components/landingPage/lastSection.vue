<template>
  <div id="lastSec">
    <div id="app_info">
      <div id="left">
        <div id="title">
          Get <span>E-Clinic</span> app and book appointments with ease!
        </div>
        <div id="disc">
          The e-clinic app for doctor appointments is a convenient and efficient
          way to schedule and manage your healthcare needs. You can easily
          schedule appointments View your medical records and much more......
          Download the eClinic app today and experience hassle-free healthcare
          management.
        </div>
        <div id="stores">
          <IconsAppleStore />
          <IconsGoogleStore />
        </div>
      </div>
      <div id="right">
        <img src="~/assets/images/app_preview.svg" alt="" />
      </div>
    </div>
    <div id="faq_sec">
      <div id="left">
        <img src="~/assets/images/female_doctor.svg" alt="" />
      </div>
      <div id="right">
        <div id="sub_title">Quick Solutions</div>
        <div id="title">Frequently Asked Questions</div>
        <div id="faqs">
          <LandingPageFaqDisclousure />
        </div>
      </div>
    </div>
    <div id="bubble">
      <div id="left">
        <IconsCircle
          class="text-white opacity-25 w-[112px] h-[112px] absolute -top-20 -left-20"
        />
        <div id="title">
          Book Your Appointment Now and Take Control of Your Health!
        </div>
        <div id="sub">
          With our state-of-the-art facilities and compassionate staff, you can
          trust that you'll receive the highest level of care.
        </div>
      </div>
      <div id="right">
          <button>Book Appointment <IconsArrow /></button>
          <button>Stay Connected</button>
          <IconsCircle
            class="text-white opacity-25 w-[112px] h-[112px] absolute -bottom-20 -right-20"
          />
      </div>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
#lastSec {
  @apply mt-24 px-36;

  > #app_info {
    @apply flex items-center justify-center pb-6;

    > #left {
      @apply flex flex-col items-center  justify-center w-1/2 pr-20;

      > #title {
        @apply text-4xl  font-bold text-[#1a1a1a] mb-4;
        > span {
          @apply text-primary;
        }
      }

      > #disc {
        @apply text-base text-dustygray mb-4;
      }

      > #stores {
        @apply flex items-center justify-center;

        > svg {
          @apply inline-block;
          /* @apply w-32 h-10 mr-4; */
        }
      }
    }

    > #right {
      @apply flex items-center justify-center;

      > img {
        /* @apply w-64; */
      }
    }
  }

  > #faq_sec {
    @apply flex items-start justify-start mt-12;

    > #left {
      @apply w-1/2;
    }

    > #right {
      @apply flex flex-col items-start justify-start h-full w-1/2;

      > #sub_title {
        @apply text-xs text-primary font-semibold p-1 rounded-xl bg-primarylight mb-4;
      }
      > #title {
        @apply text-4xl font-bold mb-4;
      }
      > #faqs {
        @apply mt-12 w-full;
      }
    }
  }
  > #bubble {
    @apply w-full h-[320px] bg-gradient-to-r from-[#166FFF] to-[#76AFFB] rounded-3xl my-24 p-14 pr-16;
    @apply flex;
    > #left {
      @apply w-[55%] relative;
      > #title {
        @apply text-4xl font-bold text-white mb-4;
      }
      > #sub {
        @apply text-white;
      }
    }
    > #right {
      @apply flex items-center justify-center w-[45%] relative;
      > button {
        @apply h-[60px] rounded-md font-semibold;
        @apply flex items-center justify-center;
        &:nth-child(1) {
          @apply w-[237px] bg-white text-primary mr-4;
          @apply flex items-center justify-center gap-x-2;
        }
        &:nth-child(2) {
          @apply w-[179px] bg-transparent text-white border border-white;
        }
      }
    }
  }
}
</style>
