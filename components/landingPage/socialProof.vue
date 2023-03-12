<template>
  <div id="socialProof">
    <div id="wrapper">
      <IconsSpiral id="topLeft" />
      <IconsSpiral id="bottomRight" />
      <div id="heading_sub">
        <div id="heading">What Make us Unique?</div>
        <div id="sub_heading">
          Discover a patient-centered approach to advanced medical care for your
          next doctor appointment.
        </div>
      </div>
      <div id="benifits">
        <div id="benifit">
          <div><span>255</span> +</div>
          <span>Expert doctors available</span>
        </div>
        <div id="benifit">
          <div><span>100</span> +</div>
          <span>Secure appointment booking</span>
        </div>
        <div id="benifit">
          <div><span>99</span> +</div>
          <span>Patient satisfaction rate</span>
        </div>
        <div id="benifit">
          <div><span>120</span> +</div>
          <span>E-Clinic app downloads</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
#socialProof {
  @apply h-[430px] w-full;
  @apply flex flex-col justify-center items-center;
  > #wrapper {
    @apply flex flex-col justify-center items-center w-full px-36 py-12 relative;
    @apply bg-white;
    > #topLeft {
      @apply absolute h-44 w-44 -z-10 -top-[60px] left-40;
    }
    > #bottomRight {
      @apply absolute -z-10 -bottom-[65px] right-[100px];
    }
    > #heading_sub {
      @apply flex flex-col justify-center items-center mb-12;
      > #heading {
        @apply text-4xl font-bold mb-1;
      }
      > #sub_heading {
        @apply text-base text-dustygray;
      }
    }
    > #benifits {
      @apply flex flex-row justify-between items-center w-full;
      > #benifit {
        @apply flex flex-col justify-center items-center;
        @apply h-20;
        > div {
          @apply flex flex-row justify-center items-center;
          @apply text-3xl font-bold;
          > span {
            @apply text-primary;
          }
        }
        > span {
          @apply text-base text-dustygray;
        }
      }
    }
  }
}
</style>
