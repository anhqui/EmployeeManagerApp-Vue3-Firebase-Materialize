<template>
  <nav>
    <div class="nav-wrapper green">
        <div class="container">
            <router-link to="/" class="brand-logo left">Employee Manager</router-link>
            <ul class="right">
              <li v-if="isLoggedIn"><span class="email black-text">{{currentUser}}</span></li>
              <li v-if="isLoggedIn"><router-link to="/">Dashboard</router-link></li>
              <li v-if="!isLoggedIn"><router-link to="/login">Login</router-link></li>
              <li v-if="!isLoggedIn"><router-link to="/register">Register</router-link></li>
              <li v-if="isLoggedIn"><button @click="logout" class="btn black">Logout</button></li>
            </ul>
        </div>
    </div>
  </nav>
</template>

<script setup>
import {useRouter} from "vue-router"
import { getAuth, signOut } from "firebase/auth";
import {ref} from 'vue';

const router = useRouter();

const auth = getAuth();

let isLoggedIn = ref(false);
let currentUser = ref(false);

  isLoggedIn.value = true;

const logout = () =>{
signOut(auth).then(()=>{
    router.push('/login')
  isLoggedIn.value = false;
  //  router.go({path: router.path})

}).catch(error =>{
  alert(error.message)
})

}

if(auth.currentUser){
isLoggedIn.value = true;
currentUser.value = auth.currentUser.email;
}else{
  isLoggedIn.value = false;
}



</script>


<style scoped>
.email{
  padding-right: 10px;
}
</style>
