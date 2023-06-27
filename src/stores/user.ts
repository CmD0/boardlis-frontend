import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();

export const useUserStore = defineStore('user', () => {
    const user = ref(JSON.parse(localStorage.getItem('user'))) as Ref<any> || ref(null) as Ref<any>;
    function login(userData: any) {
        user.value = userData;
        localStorage.setItem('user', JSON.stringify(userData));
    }
    function logout() {
        user.value = null
        localStorage.clear();
    }

    return {user, login, logout}
});