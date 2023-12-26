<template>
    <div class="container">
         <div class="row">
            <div class="col s12 m8 offset-m2">
                <div class="login card-panel grey lighten-4 black-text center">
                    <h3>Register</h3>
                    <form @submit.prevent="register">
                    <div class="input-field">
                        <i class="material-icons prefix">email</i>
                        <input type="email" v-model="email" id="email" required>
                        <label for="email">Email</label>
                    </div>
                    <div class="input-field">
                        <i class="material-icons prefix">lock</i>
                        <input type="password" v-model="password" id="password" required>
                        <label for="password">Password</label>
                    </div>
                     <button type="submit" class="btn btn-large grey lighten-4 black-text">Register</button>
               </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import {useRouter} from "vue-router"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const email = ref('')
const password = ref('')
const router = useRouter();

const register = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(userCredential=>{
        alert(`Account created for ${userCredential.user.email}`)
        // router.push('/')
          router.go({path: router.path})
    })
    .catch(error=>{
        alert(error.message)
    })
   

}


</script>