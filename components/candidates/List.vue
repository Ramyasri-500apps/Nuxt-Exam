<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-gray-900 mt-10">Candidate Responses</h1>
      </div>
    </div>
    <!--Start of response  -->
    <div class="mt-6 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Start Time</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">End Time</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Score</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Answers</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="(response, index) in allcandidateResponse" :key="index">
                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{{ response.start_time }}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ response.end_time }}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ response.score }}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ response.answers.custom_output }}</td>
                <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- End of response -->
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    allcandidateResponse: Array,
  });
</script>
