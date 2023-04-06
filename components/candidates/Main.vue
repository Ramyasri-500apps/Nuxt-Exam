<template>
  <div class="ml-[45px] mt-5 inset-0 flex items-center justify-end">
    <button
      type="button"
      @click="openModal"
      class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
    >
      Candidate Responses
    </button>
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
              <CandidatesAdd @save="save" />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
  <div>
    <CandidatesList :allcandidateResponse="allcandidateResponse" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from "@headlessui/vue";
  interface responseProps {
    url: string;
  }
  // Response props
  const props = withDefaults(defineProps<responseProps>(), {
    url: "",
  });
  const authHeader = {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1IjoiOTNjOTM5MTA3MWJkNDQ3NGIxYjBhOGYwZWNiZGFhYzgiLCJkIjoiMTY4MDAzNCIsInIiOiJzYSIsInAiOiJmcmVlIiwiYSI6ImZpbmRlci5pbyIsImwiOiJ1czEiLCJleHAiOjE2ODMzNzUyNTF9.3mSh9Bu_NMcvyIeWepNIH_UPa0HX65un5wQKpVKU6Ow",
  };

  const isOpen = ref(false);

  const closeModal = () => {
    isOpen.value = false;
  };
  const openModal = () => {
    isOpen.value = true;
  };
  //Get responses data
  const { pending, data: candidateResponse } = await useLazyFetch(`${props.url}/?offset=0&limit=100&sort_column=id&sort_direction=desc`, { method: "GET", headers: authHeader });
  const allcandidateResponse = candidateResponse.value;
  //Save response
  const save = async (score: string, answer: Object) => {
    await useLazyFetch(`${props.url}/`, {
      method: "POST",
      headers: authHeader,
      body: {
        start_time: "2023-04-06T12:44:14",
        end_time: "2023-04-06T12:44:14",
        score,
        candidate_id: "93c9391071bd4474b1b0a8f0ecbdaac8",
        assessment_id: "1",
        answers: {
          code: '#include<stdio.h>\n#include<string.h>\n\nint main()\n{\n    char str1[20] = "Hello", str2[20] = " World";\n    printf("%s\\n", strcpy(str2, strcat(str1, str2)));\n    return 0;\n}',
          input_data: "Hello World",
          custom_output: "Hello World\n",
        },
        attempt_count: 1,
        candidate_device: {
          "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
        },
        recommendations: "dgsgs",
        uid: "93bbf02b-98bd-401a-a0d6-8ffc7b7508fc",
        id: 202075,
      },
    });
    // Push new response into existing response
    allcandidateResponse.push(score, answer.code);
  };
</script>
