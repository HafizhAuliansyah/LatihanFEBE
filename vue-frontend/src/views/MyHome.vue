<template>
  <form @submit.prevent="PostItem">
    <input type="text" v-model="form.id" name="id_input" />
    <input type="text" v-model="form.name" /><br />
    <button type="submit" v-show="!updateSubmit" name="button">Save</button>
    <button
      type="button"
      v-show="updateSubmit"
      v-on:click="Update(form)"
      name="button"
    >
      Update
    </button>
  </form>

  <div class="Home">
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
  </div>
</template>

<script>
import axios from "axios";
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
        .get("http://localhost:3000/users")
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
        .post("http://localhost:3000/users", this.form)
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
        .put(`http://localhost:3000/users/${form.id}`, {
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
</style>
