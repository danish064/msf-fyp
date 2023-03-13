<template>
  <div id="categories">
    <div id="title_sub">
      <a href="#">How it work's</a>
      <div id="title">Simple steps to find your solution</div>
      <div id="sub_title">
        Follow these easy steps for seamless booking, offline or online
      </div>
    </div>
    <div id="cards">
      <div id="card">
        <div id="svg">
          <IconsDoctor />
        </div>
        <div id="heading">Find Best Doctor</div>
        <div id="subHeading">
          Ensure to check the doctor's profile for credentials and reviews.
        </div>
      </div>
      <div id="card">
        <div id="svg">
          <IconsAppointment class="inline-block" />
        </div>
        <div id="heading">Find Best Doctor</div>
        <div id="subHeading">
          Ensure to check the doctor's profile for credentials and reviews.
        </div>
      </div>
      <div id="card">
        <div id="svg">
          <IconsReport class="inline-block" />
        </div>
        <div id="heading">Patient Report</div>
        <div id="subHeading">
          Stay up-to-date with your health by accessing your patient report
          online.
        </div>
      </div>
      <div id="card">
        <div id="svg">
          <IconsPreception class="inline-block" />
        </div>
        <div id="heading">Access Prescription</div>
        <div id="subHeading">
          View, download, or print your prescription easily through platform.
        </div>
      </div>
      <div id="card">
        <div id="svg">
          <IconsPay class="inline-block" />
        </div>
        <div id="heading">Pay Online</div>
        <div id="subHeading">
          Skip the hassle of mailing checks or paying in person.
        </div>
      </div>
      <div id="card">
        <div id="svg">
          <IconsLab class="inline-block" />
        </div>
        <div id="heading">Lab Management</div>
        <div id="subHeading">
          Improve lab efficiency and accuracy with Lab management solutions.
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
#categories {
  @apply mt-24 px-36 py-12;
  @apply bg-primarylight;

  > #title_sub {
    @apply flex flex-col items-center gap-y-[6px];
    > a {
      @apply text-primary text-sm font-semibold;
    }
    > #title {
      @apply text-4xl font-bold;
    }
    > #sub_title {
      @apply text-lg text-dustygray;
    }
  }
  > #cards {
    @apply flex flex-row justify-center items-center flex-wrap gap-x-6 gap-y-[24px] mt-12;
    > #card {
      @apply w-[365px] h-[324px] flex flex-col items-center gap-y-[6px]  bg-white rounded-2xl px-10 py-12;
      > #svg {
        @apply w-24 h-24 bg-gradient-to-r from-primary to-primarylight rounded-xl flex items-center justify-center drop-shadow-xl shadow-primary mb-12;
      }
      > #heading {
        @apply text-2xl font-bold;
      }
      > #subHeading {
        @apply text-sm text-dustygray text-center;
      }
    }
  }
}
</style>
