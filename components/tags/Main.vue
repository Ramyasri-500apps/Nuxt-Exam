<template>
  <div>
    <TagsAdd @add="add" />
    <TagsList :allTags="allTags" :alphabets="alphabets" @edit="edit" @deleteTags="deleteTags" />
  </div>
</template>

<script setup lang="ts">
  interface TagProps {
    url: string;
    entity: string; // Entity for the api call
    entityId: string; // Entity id for the api call
    projectId: string; // Project id
  }
  // Tags props
  const props = withDefaults(defineProps<TagProps>(), {
    url: "",
    entity: "",
    entityId: "",
    projectId: "",
  });
  const alphabets = ref([...Array(26)].map((_, i) => String.fromCharCode(65 + i)));
  const authHeader = {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1IjoiYjJkMWQxN2MzM2VjNDdjMTg0ZWYxZWUwNmUwNDRkNjEiLCJkIjoiMTY4MDA3NiIsInIiOiJzYSIsInAiOiJmcmVlIiwiYSI6ImZpbmRlci5pbyIsImwiOiJ1czEiLCJleHAiOjE2ODMyNzMwMTZ9.1U9Y1jlFtYqeFF0Mnp7YD1fWvzG8OH_ZJpff9lkaSVo",
  };
  //Get tags data
  const { pending, data: tags } = await useLazyFetch(`${props.url}/entity/${props.entity}?offset=0&limit=100&sort_column=id&sort_direction=desc`, { method: "GET", headers: authHeader });
  const allTags = tags.value;
  //Add tag to database
  const add = async (name: string) => {
    await useLazyFetch(`${props.url}/`, {
      method: "POST",
      headers: authHeader,
      body: {
        project_id: 1,
        name,
        entity: "CONTACTS",
      },
    });
    // Push new tag into existing tags
    allTags.push(name);
  };
  //Edit tag
  const edit = async (tag: any) => {
    await useLazyFetch(`${props.url}/${tag.uid}?name=${tag.name}`, { method: "PUT", headers: authHeader });
    allTags.forEach((data: any) => {
      if (tag.uid === data.uid) {
        data.name = tag.name;
      }
    });
  };
  //Delete tag
  const deleteTags = async (tag: any, index: number) => {
    await useLazyFetch(`${props.url}/${tag.uid}`, { method: "DELETE", headers: authHeader });
    if (index !== -1) {
      allTags.splice(index, 1);
    }
  };
</script>

<style scoped></style>
