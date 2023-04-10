<template>
  <div class="ml-3 mt-2">
    <h1 class="text-base font-semibold leading-6 text-gray-900">Students</h1>
    <p class="mt-2 text-sm text-gray-700">A list of all the Builders in your account including their name, email.</p>
  </div>
  <div class="flex ml-3 justify-end">
    <div class="ml-10 flex">
      <button type="button" class="rounded-full bg-indigo-600 p-4 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-2.5" @click="openModal">
        Add Student
      </button>
    </div>
  </div>

  <div class="block w-full p-4 bg-white border border-gray-200 rounded-lg shadow bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:bg-gray-700 mt-2">
    <StudentDetailsList v-if="projects && projects.length" :project="projects" @emitData="emitData" />
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

  function closeModal() {
    isOpen.value = false;
  }
  function openModal() {
    isOpen.value = true;
  }

  const projects: any = ref([]);

  onMounted(() => {
    if (localStorage.getItem("projectDetails")) projects.value = JSON.parse(localStorage.getItem("projectDetails"));
  });

  const add = async (project: any) => {
    projects.value.push(project);
    localStorage.setItem("projectDetails", JSON.stringify(projects.value));

    isOpen.value = false;
  };
  // Edit project
  const edit = async (note: any) => {
    projects.value[note.index] = note.note;
    localStorage.setItem("projectDetails", JSON.stringify(projects.value));
  };
  // Delete Projects
  const deleteNote = async (note: any) => {
    projects.value.splice(note.index, 1);
    localStorage.setItem("projectDetails", JSON.stringify(projects.value));
  };

  // Edit and Delete events
  const emitData = (note: Object) => {
    note.value == "edit" ? edit(note) : deleteNote(note);
  };
</script>
