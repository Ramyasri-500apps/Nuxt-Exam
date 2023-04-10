<template>
  <div>
    <label for="name" class="block text-sm font-semibold leading-6 text-gray-900 mt-5">Name</label>
    <div class="mt-2">
      <input
        name="name"
        type="text"
        v-model="student.name"
        id="student"
        class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>
  <div>
    <label for="age" class="block text-sm font-semibold leading-6 text-gray-900 mt-4">Age</label>
    <div class="mt-2">
      <input
        name="age"
        type="number"
        v-model="student.age"
        id="student"
        class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>
  <div>
    <div>
      <label for="gender" class="block text-sm font-semibold leading-6 text-gray-900 mt-4">Gender</label>
      <div class="mt-2">
        <select v-model="student.gender" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          <option>Female</option>
          <option>Male</option>
        </select>
      </div>
    </div>
  </div>
  <div>
    <label for="date_of_birth" class="block text-sm font-semibold leading-6 text-gray-900 mt-4">Date Of Birth</label>
    <div class="mt-2">
      <input
        name="date_of_birth"
        type="date"
        v-model="student.date_of_birth"
        id="student"
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>
  <div>
    <div>
      <label for="class" class="block text-sm font-semibold leading-6 text-gray-900 mt-4">Class</label>
      <div class="mt-2">
        <select v-model="student.class" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          <option>10th</option>
          <option>Inter</option>
          <option>B.Tech</option>
          <option>B.Sc</option>
        </select>
      </div>
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
      @click="addStudent()"
      class="block rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      save
    </button>
  </div>
</template>
<script setup lang="ts">
  const emit = defineEmits(["add", "cancel"]);
  const student = ref({
    name: "",
    age: "",
    gender: "",
    date_of_birth: "",
    class: "",
  });
  const addStudent = () => {
    emit("add", student);
  };
</script>
