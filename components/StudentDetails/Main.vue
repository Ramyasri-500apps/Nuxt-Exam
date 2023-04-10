<template>
  <div class="ml-3 mt-2">
    <h1 class="text-base font-semibold leading-6 text-gray-900">Students</h1>
    <p class="mt-2 text-sm text-gray-700">A list of all the Builders in your account including their name, email.</p>
  </div>

  <div class="flex ml-3 justify-end">
    <div class="flex ml-3">
      <div class="relative w-[400px]">
        <div class="absolute inset-y-0 right-0 flex items-center pl-3 pointer-events-none">
          <MagnifyingGlassIcon class="w-5 m-2" />
        </div>
        <input
          v-model="searchQuery"
          type="text"
          id="simple-search"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-5"
          placeholder="Search name"
          required
          @input="getSearchByName"
        />
      </div>
    </div>
    <div class="ml-10 flex">
      <button type="button" class="rounded-full bg-indigo-600 p-4 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-2.5" @click="openModal">
        Add Student
      </button>
    </div>
  </div>

  <div class="block w-full p-4 bg-white border border-gray-200 rounded-lg shadow bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:bg-gray-700 mt-2">
    <StudentDetailsList v-if="student && student.length" :student="student" @emitData="emitData" />
  </div>

  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
            <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <div>
                <StudentDetailsAdd @add="add" @cancel="isOpen = false" />
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from "@headlessui/vue";

  const isOpen = ref(false);

  const closeModal = () => {
    isOpen.value = false;
  };
  const openModal = () => {
    isOpen.value = true;
  };

  const student: any = ref([]);

  onMounted(() => {
    if (localStorage.getItem("studentDetails")) student.value = JSON.parse(localStorage.getItem("studentDetails"));
  });

  const add = async (project: any) => {
    student.value.push(project);
    localStorage.setItem("studentDetails", JSON.stringify(student.value));

    isOpen.value = false;
  };
  // Edit student
  const edit = async (note: any) => {
    student.value[note.index] = note.note;
    localStorage.setItem("studentDetails", JSON.stringify(student.value));
  };
  // Delete student
  const deleteNote = async (note: any) => {
    student.value.splice(note.index, 1);
    localStorage.setItem("studentDetails", JSON.stringify(student.value));
  };

  // Edit and Delete events
  const emitData = (note: Object) => {
    note.value == "edit" ? edit(note) : deleteNote(note);
  };
  const searchQuery = ref();
  const getSearchByName = () => {
    if (searchQuery.value) {
      student.value = student.value.filter((item: any) => {
        return item.name.toLowerCase().includes(searchQuery.value.toLowerCase());
      });
    } else {
      // If search query is empty, show all employees
      student.value = JSON.parse(localStorage.getItem("studentDetails"));
    }
  };
</script>
