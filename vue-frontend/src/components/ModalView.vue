<script>
export default {
  name: "ModalView",
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header" id="modalTitle">
          <slot name="header">
            This is the header of vue.js Modal!
            <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close Modal App"
            ></button>
          </slot>
        </header>
        <section class="modal-body" id="modalDescription">
          <slot name="body"> Hi welcome in vue.js modal! </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            This is the a footer of vue,js modal
            <button
              type="button"
              class="btn-green"
              @click="close"
              aria-label="Close Modal App"
            >
              Close Modal
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>
<style>
.modal-backdrop {
  position: fixed;
  top: 0px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  background: #ffeeee;
  box-shadow: 4px 4px 30px 2px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}
.modal-header,
.modal-footer {
  padding: 10px;
  display: flex;
}
.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}
.modal-footer {
  border-top: 2px solid #eeeeee;
  justify-content: flex-end;
}
.modal-body {
  position: relative;
  padding: 30px 20px;
}
.btn-close {
  border: 2px solid #ae4a57;
  font-size: 25px;
  padding: 25px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}
.btn-green {
  color: white;
  background: #4aae9b;
  border: 2px solid #ae4a57;
  border-radius: 4px;
}
</style>
