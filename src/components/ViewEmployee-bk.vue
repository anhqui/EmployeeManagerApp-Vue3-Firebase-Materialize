<template>
    <div id="view-employee">
       <ul class="collection with-header" v-for="empl in employee" :key="empl.employee_id">
        <li class="collection-header"  ><h4>{{empl.name}}</h4></li>
        <li class="collection-item">Employee ID#: {{empl.employee_id}}</li>
        <li class="collection-item">Department: {{empl.dept}}</li>
        <li class="collection-item">Position: {{empl.position}}</li>
       </ul>
       <router-link to="/" class="btn grey">Back</router-link>
       <button @click="deleteEmployee" class="btn red">Delete</button>
    </div>
</template>

<script setup>
import db from './firebaseInit'
import { collection, getDocs,  doc, deleteDoc, where, query } from "firebase/firestore"; 
import {useRoute, useRouter} from 'vue-router'
import {ref} from 'vue'

const route = useRoute()
const router = useRouter()

const employee = ref([])

const fetchData = async () =>{
    const q =  query(collection(db, "employees"), where('employee_id', '==', route.params.employee_id));
     const querySnapshot = await getDocs(q);
         querySnapshot.forEach((doc) => {
            // console.log(doc.ref._key.path.segments[doc.ref._key.path.segments.length -1])
    const data = {
    'employee_id': doc.data().employee_id,
    'name': doc.data().name,
    'dept': doc.data().dept,
    'position': doc.data().position
}
employee.value.push(data)
 
});

}

fetchData()

const deleteEmployee = async () =>{
    if(confirm('Are you sure?')){
   const q =  query(collection(db, "employees"), where('employee_id', '==', route.params.employee_id));
     const querySnapshot = await getDocs(q);
     querySnapshot.forEach((document) => {
        const segments = document.ref._key.path.segments;
      deleteDoc(doc(db, "employees", segments[segments.length -1]));
      router.push('/')
       });
    }
}


</script>

