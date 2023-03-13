<template>
  <div id="testimonial">
    <div id="background">
      <img
        src="~/assets/images/testimonialsbg.svg"
        alt="testimonial background"
      />
    </div>
    <div id="title_sub">
      <div id="sub">Testimonial’s</div>
      <div id="title">What our Users say about us?</div>
    </div>
    <div id="bottom">
      <img src="~/assets/images/testimonial.svg" alt="" />
      <div id="testimonial_tabs_wrapper">
        <div id="testimonial_tabs">
          <IconsQuotes id="topQ" />
          <div id="review">
            Eclinic is the most lively app I've used and it is very easy to
            quickly understand what is happening! Thank you!
          </div>
          <div id="info">
            <div id="name_rating">
              <div id="name">Nathaniel Valle</div>
              <div id="rating">
                <IconsStar />
                <IconsStar />
                <IconsStar />
                <IconsStar />
                <IconsStar />
              </div>
            </div>
            <div id="role">Patient</div>
          </div>
          <IconsQuotes id="bottomQ" />
        </div>
        <div id="nav">
          <div id="left">
            <IconsPointer />
          </div>
          <div id="circleWrap">
            <IconsCircle />
            <IconsCircle />
            <IconsCircle />
          </div>
          <div id="right">
            <IconsPointer />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
#testimonial {
  @apply w-full h-[794px] relative py-12 px-36 flex flex-col;

  > #background {
    @apply absolute top-0 left-0 -z-10;
  }
  > #title_sub {
    @apply flex flex-col items-center mb-12;
    > #sub {
      @apply bg-white text-primary p-1 rounded-md text-base font-bold;
    }
    > #title {
      @apply text-4xl font-bold text-white mt-1;
    }
  }
  > #bottom {
    @apply flex;
    > img {
      @apply w-1/2 object-cover;
    }
    > #testimonial_tabs_wrapper {
      @apply flex flex-col items-end w-full pt-40;
      > #testimonial_tabs {
        @apply w-[465px] h-[224px] bg-white rounded-3xl mb-12 py-12 px-6 relative;
        @apply flex flex-col items-center justify-start;

        > #topQ {
          @apply absolute top-3 left-6;
        }

        > #review {
          @apply text-base font-normal text-left mb-3;
        }
        > #info {
          @apply w-full;
          > #name_rating {
            @apply flex justify-between items-center w-full;
            > #name {
              @apply text-base font-bold text-left;
            }
            > #rating {
              @apply flex;
              > svg {
                @apply w-4 h-4 text-ratingYellow;
              }
            }
          }
          > #role {
            @apply text-sm font-medium text-left;
          }
        }

        > #bottomQ {
          @apply absolute bottom-3 right-6 transform rotate-180;
        }
      }

      > #nav {
        @apply flex justify-center items-center w-[465px] h-10 gap-x-6;
        > #circleWrap {
          @apply flex gap-x-2;
          > svg {
            @apply w-[10px] h-[10px] text-white;
          }
        }
        > #left {
          @apply w-10 h-10 bg-white rounded-full flex justify-center items-center;
          > svg {
            @apply w-4 h-4 text-primary transform rotate-180;
          }
        }
        > #right {
          @apply w-10 h-10 bg-white rounded-full flex justify-center items-center;
          > svg {
            @apply w-4 h-4 text-primary;
          }
        }
      }
    }
  }
}
</style>
