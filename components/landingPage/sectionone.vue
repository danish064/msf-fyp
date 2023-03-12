<template>
  <div id="sectionOne"></div>
</template>
<style lang="postcss" scoped>
> #sectionOne {
  @apply flex flex-col justify-center items-center;
  @apply h-[600px] w-full bg-primary;
  > div {
    @apply flex flex-col justify-center items-center;
    > span {
      @apply text-white text-4xl font-bold;
    }
    > p {
      @apply text-white text-2xl font-bold;
    }
  }
}
</style>
