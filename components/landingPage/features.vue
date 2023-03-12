<template>
  <div id="features">
    <div id="top">
      <div id="left">
        <div id="title">
          Our <span>Top Priority</span> is to ensure the best medical treatment
          for your health <IconsSmile />
        </div>
        <div id="subtitle">
          By checking a doctor's availability online before booking an
          appointment, you can save valuable time and effort.
        </div>
        <div id="features_list">
          <div id="feature"><IconsShieldTick />24 hours medical service</div>
          <div id="feature">
            <IconsShieldTick />Best quality appointment services
          </div>
          <div id="feature">
            <IconsShieldTick />Reception at convenient time
          </div>
          <div id="feature"><IconsShieldTick />Online booking made easy</div>
        </div>
        <button>Learn more <IconsArrow /></button>
      </div>
      <div id="right">
        <img src="~/assets/images/feature_image.svg" alt="" />
      </div>
    </div>
    <div id="bottom">
      <div id="left">
        <img id="image" src="~/assets/images/livechat.svg" alt="" />
      </div>
      <div id="right">
        <div id="title">
          Virtual <span>Consultations</span> with Your Doctor
        </div>
        <div id="subtitle">
          Schedule your virtual consultation today and experience the
          convenience of receiving medical care from the comfort of your own
          home.
        </div>
        <div id="checks">
          <div id="check"><IconsTickSquare /> Reduced exposure to illness</div>
          <div id="check"><IconsTickSquare /> Improved continuity of care</div>
        </div>
        <button>Book Consultation <IconsArrow /></button>
      </div>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
#features {
  @apply flex flex-col px-36;

  > #top {
    @apply flex flex-row justify-between;
    > #left {
      @apply flex flex-col justify-start gap-y-6 max-w-[564px];
      > #title {
        @apply text-4xl font-bold;
        > span {
          @apply text-primary;
        }
        > svg {
          @apply inline-block;
        }
      }
      > #subtitle {
        @apply text-base text-dustygray;
      }
      > #features_list {
        @apply flex flex-col justify-start w-full gap-y-6;
        > #feature {
          @apply flex flex-row items-center;
          > svg {
            @apply w-6 h-6 mr-2;
          }
        }
      }
      > button {
        @apply w-40 h-14 flex flex-row justify-center items-center gap-x-1 bg-primary text-white rounded-lg;
      }
    }
    > #right {
      @apply relative;
      > img {
        /* @apply w-full h-full absolute right-0 top-0; */
        /* @apply w-[597px]; */
      }
    }
  }
  > #bottom {
    @apply flex flex-row justify-between items-start gap-y-16;
    > #left {
      @apply flex flex-col justify-center;
      @apply w-[464px] h-[330px];
      > #image {
      }
    }
    > #right {
      @apply flex flex-col justify-start w-1/2 mt-4 gap-y-6;
      > #title {
        @apply text-5xl font-bold;
        > span {
          @apply text-primary;
        }
      }
      > #subtitle {
        @apply text-base text-dustygray;
      }
      > #checks {
        @apply flex flex-col justify-start gap-y-6;
        > #check {
          @apply flex flex-row items-center;
          > svg {
            @apply w-6 h-6 mr-2;
          }
        }
      }
      > button {
        @apply flex flex-row justify-center items-center gap-x-1 w-52 h-14 bg-primary text-white rounded-lg mt-6;
      }
    }
  }
}
</style>
