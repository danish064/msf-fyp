<template>
  <div id="header">
    <div id="logo">
      <IconsClinic />
    </div>
    <div id="links">
      <a href="#">Home</a>
      <a href="#">Find doctors</a>
      <a href="#">Services</a>
      <a href="#">About us</a>
    </div>
    <div id="login_signup">
      <button id="login">Login</button>
      <button id="signup">Signup</button>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
#header {
  @apply flex flex-row justify-between items-center;
  @apply h-24 px-14;
  /* background-color: #c75d5d; */

  > #links {
    @apply flex flex-row gap-x-6;
    @apply text-dustygray text-lg;

    > a {
      @apply border-b-2 border-transparent hover:text-primary  hover:border-primary text-base;
    }
  }
  > #login_signup {
    @apply flex flex-row gap-x-4;
    @apply text-dustygray text-lg;

    > #signup {
      @apply bg-primary text-white text-base py-2 px-4 rounded-md;
    }
    > #login {
      @apply bg-white text-primary text-base py-2 px-4 rounded-md;
    }
  }
}
</style>
