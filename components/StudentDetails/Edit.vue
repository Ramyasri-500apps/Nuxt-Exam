<template>
  <div>
    <label for="s_no" class="block text-sm font-semibold leading-6 text-gray-900">S_No.</label>
    <div class="mt-2.5">
      <input
        type="number"
        name="s_no"
        v-model="project.s_no"
        id="note"
        rows="4"
        class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>
  <div>
    <label for="name" class="block text-sm font-semibold leading-6 text-gray-900">Name</label>
    <div class="mt-2.5">
      <input
        name="name"
        v-model="project.name"
        id="note"
        rows="4"
        class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>
  <div>
    <label for="age" class="block text-sm font-semibold leading-6 text-gray-900">Age</label>
    <div class="mt-2.5">
      <input
        type="number"
        name="age"
        v-model="project.age"
        id="note"
        rows="4"
        class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>

  <div>
    <label for="gender" class="block text-sm font-semibold leading-6 text-gray-900">Gender</label>
    <div class="mt-2.5">
      <select v-model="project.gender" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        <option>Male</option>
        <option>Female</option>
      </select>
    </div>
  </div>
  <div>
    <label for="date_of_birth" class="block text-sm font-semibold leading-6 text-gray-900">Date Of Birth</label>
    <div class="mt-2.5">
      <input
        type="date"
        name="date_of_birth"
        v-model="project.date_of_birth"
        id="note"
        rows="4"
        class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>

  <div>
    <label for="class" class="block text-sm font-semibold leading-6 text-gray-900">Class</label>
    <div class="mt-2.5">
      <select v-model="project.class" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        <option>Inter</option>
        <option>Inter2</option>
        <option>B.Sc</option>
      </select>
    </div>
  </div>

  <div class="mt-10 flex">
    <button
      type="submit"
      @click="emit('cancel')"
      class="block mr-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      cancel
    </button>

    <button
      type="submit"
      @click="emit('edit', project)"
      class="block rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      update
    </button>
  </div>
</template>
<script setup lang="ts">
  interface project {
    project: {
      s_no: "";
      name: "";
      age: "";
      gender: "";
      date_of_birth: "";
      class: "";
    };
  }
  const props = defineProps<project>();
  const project = ref(props.project);

  // Close input after editing
  const emit = defineEmits(["edit", "cancel"]);
</script>
