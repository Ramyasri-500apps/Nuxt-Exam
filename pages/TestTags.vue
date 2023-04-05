<template>
  <div>
    <TagsMain :url="url" :project-id="projectId" :entity="entity" :entity-id="entityId" />
  </div>
</template>

<script setup lang="ts">
  const url = "https://v1-orm-lib.mars.hipso.cc/tags";
  const projectId = 1;
  const entityId = 1;
  const entity = "CONTACTS";
</script>

<style scoped></style>
