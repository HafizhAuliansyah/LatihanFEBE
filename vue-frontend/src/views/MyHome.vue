<template>
   <div class="background">
      <div class="card mb-5">
         <div class="card-body">
            <form @submit.prevent="PostItem">
               <input type="hidden" v-model="form._id" name="id_input" />

               <h6>NIK<br /><input type="text" v-model="form.nik" /><br /></h6>
               <h6>PHONE <br /><input type="text" v-model="form.phone" /><br /></h6>
               <h6>
                  PROVIDERS<br />
                  <input type="text" v-model="form.providers" /><br />
               </h6>
               <input type="hidden" v-model="form.date" /><br />

               <button type="submit" class="btn btn-primary" v-show="!updateSubmit" name="button">Save</button><br />

               <button type="button" class="btn btn-primary" v-show="updateSubmit" v-on:click="Update(form)" name="button">Update</button>
            </form>
         </div>
      </div>
      <div class="card">
         <div class="table-sim p-2">
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
                  <tr v-for="user in users" :key="user._id">
                     <th scope="row">{{ user._id }}</th>
                     <td>{{ user.nik }}</td>
                     <td>{{ user.phone }}</td>
                     <td>{{ user.providers }}</td>
                     <td>{{ user.registration_date }}</td>
                     <td>
                        <button type="button" v-on:click="Edit(user)" name="button" class="btn btn-primary">Edit</button>
                        <button type="button" v-on:click="Delete(user)" name="button" class="btn btn-danger">Delete</button>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";

export default {
   components: {
      // ModalView,
   },
   data() {
      return {
         form: {
            _id: "",
            nik: "",
            phone: "",
            providers: "",
            //   registration_date: new Date().toLocaleDateString("en-CA"),
            registration_date: "",
         },
         users: [],
         updateSubmit: false,
      };
   },

   //func
   methods: {
      getItem() {
         axios
            .get("http://localhost:3000/sim", {})
            .then((response) => {
               this.users = response.data;
               console.log(response);
            })
            .catch(() => {
               swal("Oops!", "Get Data Error", "error");
            });
      },

      PostItem() {
         axios
            .post("http://localhost:3000/sim", this.form)
            .then(() => {
               this.getItem();
               this.form.nik = "";
               this.form.phone = "";
               this.form.providers = "";
               //  this.form.registration_date = "";
               // alert("saved...");
               swal("Good job!", "Saved", "success");
            })
            .catch((err) => {
               console.log(err);
               swal("Oops!", "Post Error", "error");
            });
      },
      Edit(user) {
         this.updateSubmit = true;
         this.form._id = user._id;
         this.form.nik = user.nik;
         this.form.phone = user.phone;
         this.form.providers = user.providers;
      },
      Update(form) {
         axios
            .patch(`http://localhost:3000/sim/${form._id}`, {
               nik: this.form.nik,
               phone: this.form.phone,
               providers: this.form.providers,
            })
            .then((response) => {
               this.getItem();
               this.form._id = "";
               this.form.nik = "";
               this.form.phone = "";
               this.form.providers = "";
               this.updateSubmit = false;
               swal("Good job!", "Updated", "success");
               console.log(response.message);
            })
            .catch((err) => {
               console.log(err);

               //  console.warn();
               swal("Good job!", "error Delete", "error");
            });
      },
      Delete(user) {
         axios
            .delete("http://localhost:3000/sim/" + user._id)
            .then(() => {
               this.getItem();
               //  this.form.name = "";
               // alert("Deleted...");
               swal("Good job!", "Delete", "success");
            })
            .catch((err) => {
               console.log(err);
               swal("Cannot Delete", "Delete", "error");
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
   width: 100%;
   margin-left: 0;
   margin-right: 0;
   padding: 1rem;
}
.table-sim {
   width: 100%;
   padding: 0 1rem;
}
.background {
   padding: 2rem;
   background-color: #e1e1e1;
}
</style>
