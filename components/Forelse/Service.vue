<template>
  <div class="service">
          <h3>{{ service.title }}</h3>
          <p>
            {{ service.content }}
          </p>          
          <a href="#" class="learn-more">En savoir plus</a>
        </div>
</template>

<script>
export default {
  props: ['service']
}
</script>

<style>
.service {
    text-align: center;
    min-height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .learn-more {
    display: block;
    background-color: var(--primary-color);
    margin: 1.5em;
    padding: 1em 1.5em;
    color: #fff;
    border-radius: 12px;
    transition: opacity var(--fast-transition-time), color var(--fast-transition-time);
  }

  .learn-more:hover {
    opacity: .8;
    color: var(--secondary-color)
  }

  .service p {
    white-space: pre-wrap;
  }

  @media screen and (min-width: 680px) {
    .service {
      flex: 50%;
    }
  }
  
  @media screen and (min-width: 1200px) {
    .service {
      flex: 33%;
    }
  }
</style>