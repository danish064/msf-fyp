<template>
  <div id="footer">
    <div>
      <div>
        <IconsClinic />
        <span>
          Our goal is to make healthcare accessible, convenient, and affordable.
        </span>
        <div>
          <input type="text" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
      <div>
        <span class="bold">Quick Links</span>
        <a href="#">Home</a>
        <a href="#">Find doctors</a>
        <a href="#">Services</a>
        <a href="#">About us</a>
      </div>
      <div>
        <span class="bold">Contact Info</span>
        <div>Phone: 03009101651</div>
        <div>Email: mohsinmunir051@gmail.com</div>
        <div id="logos">
          <IconsFacebook />
          <IconsTwitter />
          <IconsLinkedIn />
        </div>
      </div>
    </div>
    <div>Copyright © 2023 | E-Clinic | All Rights Reserved</div>
  </div>
</template>
<style lang="postcss" scoped>
.bold {
  @apply font-semibold;
}
#footer {
  @apply flex flex-col justify-between items-center;
  @apply h-[336px] px-36 bg-primarylight;

  > :nth-child(1) {
    @apply flex flex-row gap-x-32 items-center w-full py-12;
    > div {
      @apply flex flex-col justify-center items-start;
    }
    > :nth-child(1) {
      > span {
        @apply text-dustygray text-sm mt-3 mb-6;
      }
      > div {
        > input {
          @apply w-80 h-10 rounded-md px-6 py-3 mr-3;
        }
        > button {
          @apply bg-primary text-white text-sm   py-2 px-4 rounded-md;
        }
      }
    }
    > :nth-child(2) {
      @apply gap-y-3;
      > a {
        @apply text-dustygray text-base;
      }
    }
    > :nth-child(3) {
      @apply gap-y-3;
      > div {
        @apply text-dustygray;
      }
      > #logos {
        @apply flex flex-row gap-x-3;
      }
    }
  }
  > :nth-child(2) {
    @apply py-6 w-full border-t-1 border-dustygray text-center text-dustygray text-sm;
  }
}
</style>
