<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const userInfo = computed(() => {
  if (user.value) {
    return {
      display_name: user.value.display_name,
      email: user.value.email,
      username: user.value.username,
      follows: user.value.follows,
      boards: user.value.boards,
      comments: user.value.comments,
    };
  } else {
    return {
      display_name: '',
      email: '',
      username: '',
      follows: [],
      boards: [],
      comments: [],
    };
  }
});

</script>

<template>
  <main>
    <h1>
      Welcome to Boardlis!
    </h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <h3>{{ userInfo.display_name }}</h3>
  </main>
</template>
