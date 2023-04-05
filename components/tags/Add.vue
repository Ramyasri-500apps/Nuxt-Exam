<template>
  <div>
    <p class="sm:ml-[25px] sm:mb-[-22px]">Add Tag</p>
    <PlusIcon class="h-5 w-5" @click="createTag = true" />
    <div v-if="createTag">
      <form class="mt-5 sm:flex sm:items-center">
        <div class="w-full sm:max-w-xs">
          <input
            v-model="tagName"
            type="text"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Enter tag"
          />
        </div>
        <button
          type="submit"
          class="mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-auto"
          @click="addTag(tagName)"
        >
          Save
        </button>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { PlusIcon } from "@heroicons/vue/24/outline";
  const createTag = ref("");
  const tagName = ref("");
  const emit = defineEmits(["add"]);
  const addTag = () => {
    emit("add", tagName.value);
    tagName.value = "";
  };
</script>
