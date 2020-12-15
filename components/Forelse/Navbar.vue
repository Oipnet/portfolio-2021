<template>
  <div class="navbar" :class="{ open: isOpen }">
    <img class="navbar-logo" src="~/assets/logo.png" />
    <forelse-burger @open="handleToggleOpen" class="navbar-burger"/>
    <nav>
      <a href="#" class="navbar-item">Accueil</a>
      <a href="#services" class="navbar-item" v-smooth-scroll>Mes services</a>
      <a href="#testimonials" class="navbar-item" v-smooth-scroll>Temoignages</a>
      <a href="#" class="navbar-item">Contact</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'ForelseNavbar',
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    handleToggleOpen() {
      this.isOpen = ! this.isOpen
    }
  }
}
</script>

<style>
  .navbar {
    height: var(--navbar-height);
    display: flex;
    flex-direction: row;
    margin: 0 2em;
    justify-content: space-between;
  }

  .navbar-logo {
    height: 80px;
    width: 80px;
  }
  .navbar nav {
    position: absolute;
    top: var(--navbar-height);
    bottom: 0;
    right: 0;
    left: 0;
    line-height: var(--navbar-height);
    transform: translateX(100vw);
    transition: transform var(--normal-transition-time) ease-in-out;
    background-color: #fff;
    z-index: 999;
    overflow: hidden;
    width: 0;
  }
  .navbar.open nav {
    transform: translateX(0);
    width: 100vw;
  }
  .navbar-item {
    line-height: var(--navbar-height);
    height: var(--navbar-height);
    margin: auto 0;
    text-transform: uppercase;
    font-weight: 500;
    text-align: center;
    display: inline-block;
    width: 100vw;
  }

  .navbar-item:hover {
    color: var(--primary-color)
  }

  @media screen and (min-width: 680px) {
    .navbar .navbar-burger {
      display: none;
    }
    
    .navbar nav {
      position: relative;
      transform: translateX(0);
      top: 0;
      height: var(--navbar-height);
      width: auto;
    }

    .navbar-item {
      width: auto;
      padding: 0 1em;
    }
  }
</style>