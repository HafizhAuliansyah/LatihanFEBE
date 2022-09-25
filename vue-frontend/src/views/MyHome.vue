<template>
   <form @submit.prevent="PostItem">
      <input type="hidden" v-model="form.id" name="id_input" />

      <h6>NIK<br /><input type="text" v-model="form.nik" /><br /></h6>
      <h6>PHONE <br /><input type="text" v-model="form.phone" /><br /></h6>
      <h6>
         PROVIDERS<br />
         <input type="text" v-model="form.providers" /><br />
      </h6>
      <input type="hidden" v-model="form.date" /><br />

      <button type="submit" v-show="!updateSubmit" name="button">Save</button><br />

      <button type="button" v-show="updateSubmit" v-on:click="Update(form)" name="button">Update</button>
   </form>

   <!-- <div class="Home">
    <h4>List Users</h4>
    <ul v-for="user in users" :key="user.id">
      <li>
        {{ user.name }} <br />
        <button type="button" v-on:click="Edit(user)" name="button">
          Edit
        </button>
        ||
        <button type="button" v-on:click="Delete(user)" name="button">
          Delete
        </button>
      </li>
    </ul>
  </div> -->

   <table class="table">
      <thead>
         <tr class="table-dark">
            <th scope="col">id</th>
            <th scope="col">NIK</th>
            <th scope="col">PHONE</th>
            <th scope="col">PROVIDERS</th>
            <th scope="col">Date</th>
            <th scope="col">action</th>
         </tr>
      </thead>
      <tbody>
         <tr v-for="user in users" :key="user.id">
            <th scope="row">{{ user.id }}</th>
            <td>{{ user.nik }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.providers }}</td>
            <td>{{ user.date }}</td>
            <td>
               <button type="button" v-on:click="Edit(user)" name="button" class="btn btn-primary">Edit</button>
               <button type="button" v-on:click="Delete(user)" name="button" class="btn btn-danger">Delete</button>
            </td>
         </tr>
      </tbody>
   </table>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";

import ModalView from "../components/ModalView.vue";
export default {
   data() {
      return {
         form: {
            id: "",
            name: "",
         },
         users: [],
         updateSubmit: false,
      };
   },

   //func
   methods: {
      getItem() {
         axios
            .get("http://localhost:3000/sim")
            .then((response) => {
               this.users = response.data;
               console.log(response);
            })
            .catch(() => {
               alert("error");
            });
      },

      PostItem() {
         axios
            .post("http://localhost:3000/sim", this.form)
            .then(() => {
               this.getItem();
               this.form.name = "";
               alert("saved...");
            })
            .catch((err) => {
               console.log(err);
               alert("saving  error");
            });
      },
      Edit(user) {
         this.updateSubmit = true;
         this.form.id = user.id;
         this.form.name = user.name;
      },
      Update(form) {
         axios
            .put(`http://localhost:3000/sim/${form.id}`, {
               name: this.form.name,
            })
            .then(() => {
               this.getItem();
               this.form.id = "";
               this.form.name = "";
               this.updateSubmit = false;
               alert("updated...");
            })
            .catch((err) => {
               console.log(err);
               console.warn();
               alert("Error...");
            });
      },
      Delete(user) {
         axios
            .delete("http://localhost:3000/users/" + user.id)
            .then(() => {
               this.getItem();
               this.form.name = "";
               alert("Deleted...");
            })
            .catch((err) => {
               console.log(err);
            });
      },
   },

   mounted() {
      this.getItem();
   },
};
</script>

<style>
.Home {
   margin: 10px;
}
.table {
   margin-left: 10px;
   margin-right: 50px;
}
</style>
