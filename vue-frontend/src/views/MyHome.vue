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

    <button type="submit" v-show="!updateSubmit" name="button">Save</button
    ><br />

    <button
      type="button"
      v-show="updateSubmit"
      v-on:click="Update(form)"
      name="button"
    >
      Update
    </button>
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
          <button
            type="button"
            v-on:click="Edit(user)"
            name="button"
            class="btn btn-primary"
          >
            Edit
          </button>
          <button
            type="button"
            v-on:click="Delete(user)"
            name="button"
            class="btn btn-danger"
          >
            Delete
          </button>
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
  components: {
    // ModalView,
  },
  data() {
    return {
      form: {
        id: "",
        nik: "",
        phone: "",
        providers: "",
        date: new Date().toLocaleDateString("en-CA"),
      },
      users: [],
      updateSubmit: false,
    };
  },

  //func
  methods: {
    getItem() {
      axios
        .get("http://localhost:3000/users", {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        })
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
        .post("http://localhost:3000/users", this.form)
        .then(() => {
          this.getItem();
          this.form.nik = "";
          this.form.phone = "";
          this.form.providers = "";
          this.form.date = "";
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
      this.form.id = user.id;
      this.form.nik = user.nik;
      this.form.phone = user.phone;
      this.form.providers = user.providers;
    },
    Update(form) {
      axios
        .put(`http://localhost:3000/users/${form.id}`, {
          nik: this.form.nik,
          phone: this.form.phone,
          providers: this.form.providers,
        })
        .then(() => {
          this.getItem();
          this.form.id = "";
          this.form.nik = "";
          this.form.phone = "";
          this.form.providers = "";
          this.updateSubmit = false;
          swal("Good job!", "Updated", "success");
        })
        .catch((err) => {
          console.log(err);
          console.warn();
          swal("Good job!", "error Delete", "error");
        });
    },
    Delete(user) {
      axios
        .delete("http://localhost:3000/users/" + user.id)
        .then(() => {
          this.getItem();
          this.form.name = "";
          // alert("Deleted...");
          swal("Good job!", "Delete", "success");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    Modal() {
      <ModalView />;
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
