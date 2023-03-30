<template>
  <PageWrapper>
    <template #headerContent> <LtpForm /> </template>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import LtpForm from './components/LtpForm.vue';

  const loading = ref(true);

  setTimeout(() => {
    loading.value = false;
  }, 1500);
</script>
