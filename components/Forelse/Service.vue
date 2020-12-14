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
  .service p {
    white-space: pre-wrap;
  }
</style>