<template>
  <button
    class="flex flex-col justify-center items-center"
    @click="handleClick"
  >
    <span
      class="bg-steel-500 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm"
      :class="{
        'rotate-45 translate-y-1': isOpen,
        'translate-y-0.5': !isOpen,
      }"
    >
    </span>
    <span
      class="bg-steel-500 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5"
      :class="{
        'opacity-0': isOpen,
        'opacity-100': !isOpen,
      }"
    >
    </span>
    <span
      class="bg-steel-500 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm"
      :class="{
        '-rotate-45 -translate-y-': isOpen,
        'translate-y-0.5': isOpen,
      }"
    >
    </span>
  </button>
</template>
