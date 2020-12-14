<template>
  <div>
    <figure class="testimonial-logo">
    <img :src="testimonial.logo.src" :alt="testimonial.logo.alt">
    </figure>
    <p>{{ testimonial.content }}</p>
  </div>
</template>

<script>
export default {
  props: ['testimonial']
}
</script>

<style>
  .testimonial-logo
  {
    position: relative;
    margin: 1.5em auto;
  }
  .testimonial-logo img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .testimonial-logo:before {
    position: absolute;
    content: '';
    top: 0;
    left: 50%;
    height: 80px;
    line-height: 80px;
    border-top:1px solid var(--primary-color);
    width: 150px;
    display: block;
    transform: translateX(-230px) translateY(50%);
    margin: auto;
}

.testimonial-logo:after {
    position: absolute;
    content: '';
    top: 0;
    right: 50%;
    height: 80px;
    line-height: 80px;
    border-top:1px solid var(--primary-color);
    width: 150px;
    display: block;
    transform: translateX(230px) translateY(50%);
    margin: auto;
}
</style>