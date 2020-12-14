<template>
  <header class="hero">
    <img src="~/assets/hero.jpg" alt="">
    <div class="hero-content">
      <h1 class="hero-content-title">ForElse</h1>
      <p>Developpement et Conception de solution WEB.</p>
      <a href="" class="hero-contact">Me contacter</a>
    </div>
  </header>
</template>

<script>
export default {
}
</script>

<style>
  .hero {
    position: relative;
    height: calc(100vh - var(--navbar-height));
    width: 100vw;
    margin: 0 -2em;
  }

  .hero img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 1;
  }

  .hero::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-color:var(--light-primary-color);
    opacity: .8;
    z-index: 2;
  }

  .hero-content {
    position: absolute;
    z-index: 50;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .hero-content-title {
    text-transform: uppercase;
    color: var(--primary-color);
    font-weight: 500;
    padding: 1.5em;
  }

  .hero-content p {
    padding: 1em;
  }

  .hero-contact {
    background-color: var(--primary-color);
    margin: 1.5em;
    padding: 1em 1.5em;
    color: #fff;
    border-radius: 12px;
    transition: opacity var(--fast-transition-time), color var(--fast-transition-time);
  }

  .hero-contact:hover {
    opacity: .8;
    color: var(--secondary-color)
  }
</style>