<template>
  <div>
    <div class="">
      <div class="mt-5 ml-[45px]" v-for="alphabet in alphabets" :key="alphabet.index">
        {{ alphabet }}
        <div v-for="(tag, index) in allTags" :key="index">
          <div v-if="alphabet == tag.name.substring(0, 1).toUpperCase()">
            <span class="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-540">
              {{ tag.name }}
              <PencilIcon class="h-4 w-4 ml-[45px]" @click="editTag(tag)" />
              <button
                type="button"
                class="ml-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-gray-400 hover:bg-gray-200 hover:text-gray-500 focus:bg-gray-500 focus:text-white focus:outline-none"
                @click="deleteTag(tag, index)"
              >
                <XMarkIcon class="h-5 w-5" />
              </button>
            </span>

            <TagsEdit v-if="editSelectedTag.includes(tag.uid)" :uid="tag.uid" :tag="tag.name" class="sm:mt-[15px]" @edit="edit" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { PencilIcon, XMarkIcon } from "@heroicons/vue/24/outline";

  interface TagProps {
    allTags: Array<{}>; // All tags
    alphabets: Array<{}>; // Alphabets
  }
  // Tags props default data
  const props = withDefaults(defineProps<TagProps>(), {
    allTags: () => [{}],
    alphabets: () => [{}],
  });
  const emit = defineEmits(["edit", "delete"]);

  const editSelectedTag = ref([]);

  const editTag = (tag: any) => {
    editSelectedTag.value.push(tag.uid);
  };

  const edit = (tag: any) => {
    emit("edit", tag);
  };
  const deleteTag = (tag: any, index: number) => {
    emit("deleteTags", tag, index);
  };
</script>
