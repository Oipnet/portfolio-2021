<template>
  <div class="burger" :class="{open: isOpen}" @click="handleToggleOpen">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    handleToggleOpen() {
      this.isOpen = ! this.isOpen
      this.$emit('open')
    }
  }
}
</script>

<style>
.burger {
  width: 3em;
  height: 80px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: var(--normal-transition-time) ease-in-out;
  -moz-transition: var(--normal-transition-time) ease-in-out;
  -o-transition: var(--normal-transition-time) ease-in-out;
  transition: var(--normal-transition-time) ease-in-out;
  cursor: pointer;
}

.burger span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: var(--font-color);
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: var(--normal-transition-time) ease-in-out;
  -moz-transition: var(--normal-transition-time) ease-in-out;
  -o-transition: var(--normal-transition-time) ease-in-out;
  transition: var(--normal-transition-time) ease-in-out;
}

.burger span:nth-child(1) {
  top: 16px;
}

.burger span:nth-child(2) {
  top: 32px;
}

.burger span:nth-child(3) {
  top: 48px;
}

.burger.open span:nth-child(1) {
  top: 32px;
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
}

.burger.open span:nth-child(2) {
  opacity: 0;
  left: -60px;
}

.burger.open span:nth-child(3) {
  top: 32px;
  -webkit-transform: rotate(-135deg);
  -moz-transform: rotate(-135deg);
  -o-transform: rotate(-135deg);
  transform: rotate(-135deg);
}
</style>