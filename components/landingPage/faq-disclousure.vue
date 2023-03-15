<template>
  <div class="w-full">
    <Disclosure v-for="faq in faqs" class="mb-6" as="div" v-slot="{ open }">
      <DisclosureButton
        class="flex w-full justify-between rounded-lg py-2 mb-2 text-left text-xl font-semibold focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
      >
        <span>{{ faq.question }}</span>
        <IconsArrowCircle
          :class="open ? 'text-primary rotate-180 transform ' : 'text-black'"
          class=""
        />
      </DisclosureButton>
      <DisclosurePanel class="p-4 text-sm text-dustygray bg-white rounded-2xl shadow-lg">
        {{ faq.answer }}
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";

const faqs = [
  {
    question: "How do I book an appointment with a doctor?",
    answer:
      'To book an appointment with a doctor, simply visit our website and click on the "Book Appointment" button',
  },
  {
    question: "How long does a typical doctor's appointment last?",
    answer: "Dont know, dont care.",
  },
  {
    question: "What should I bring to my doctor's appointment?",
    answer: "Dont know, dont care.",
  },
  {
    question: "Can I cancel or reschedule my appointment?",
    answer: "Dont know, dont care.",
  },
];
</script>
