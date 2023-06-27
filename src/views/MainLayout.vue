<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

const userStore = useUserStore();
const { user } = storeToRefs(userStore);
const showLogin = ref(false);
const loginData = ref({
  username: '',
  password: '',
  error: '',
})

const logout = () => {
  userStore.logout();
};
</script>

<template>
  <header>
    <h1 id="page-title">Boardlis</h1>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <br>
        <RouterLink to="/about">About</RouterLink>
      </nav>
      <v-btn variant="outlined" v-if="user" @click="logout">
        Logout
      </v-btn>
      <v-btn color="success" variant="flat" @click="showLogin = true" v-else>
        Login
      </v-btn>
    </div>
  </header>

  <RouterView />

  <v-dialog
    v-model="showLogin"
    width="1024"
    persistent>
    <v-card class="py-4 px-4">
      <v-card-title>
        Login
      </v-card-title>
      <v-card-text>
        <v-label>Username:</v-label>
        <v-text-field placeholder="Your login name" v-model="loginData.username" />
        <v-label>Password:</v-label>
        <v-text-field type="password" placeholder="secret :3" v-model="loginData.password"/>
        <p>{{ loginData.error }}</p>
      </v-card-text>
      <v-card-actions class="px-10">
        <v-row justify="end">
          <v-btn color="success" variant="outlined" @click="() => {
            axios.post('http://localhost:5000/users/login', {
              username: loginData.username,
              password: loginData.password,
            }).then((response) => {
              userStore.login(response.data);
              loginData.username = '';
              loginData.password = '';
              showLogin = false;
            }).catch((error) => {
              loginData.error = error.response.data.error;
              console.error(error);
            });
          }">
            Login
          </v-btn>
          <span></span>
          <v-btn color="error" variant="outlined" @click="() => {
            loginData.username = '',
            loginData.password = ''
            showLogin = false
          }">
            Cancel
          </v-btn>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>