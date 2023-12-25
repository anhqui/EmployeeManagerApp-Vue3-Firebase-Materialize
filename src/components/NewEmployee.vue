<template>
    <div id="new-employee">
        <h3>New Employee</h3>
        <div class="row">
            <form @submit.prevent="saveEmployee" class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="employee_id" required>
                        <label>Employee ID#</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="name" required>
                        <label>Name</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="dept" required>
                        <label>Department</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="position" required>
                        <label>Position</label>
                    </div>
                </div>
                <button type="submit" class="btn">Submit</button>
                <router-link to="/" class="btn grey">Cancel</router-link>

            </form>
        </div>
    </div>
</template>

<script setup>
import db from "./firebaseInit"
import {useRoute, useRouter} from 'vue-router'
import { collection, addDoc } from "firebase/firestore"; 
import {ref} from "vue"

const route = useRoute()
const router = useRouter()

const employee_id = ref(null)
const name = ref("")
const dept = ref("")
const position = ref("")

const saveEmployee = async () =>{
await addDoc(collection(db, "employees"), {
    employee_id: employee_id.value,
    name: name.value,
    dept: dept.value,
    position: position.value
}) 

router.push('/')

}

</script>
