<template>
  <div>
    <forelse-hero />
    <section id="services" class="services">
      <h2>Augmenter votre visibilité sur le web</h2>
      <div class="services-container">
        <forelse-service v-for="service in services" :service="service" :key="service.id"/>
      </div>
    </section>
    <section>
      <h2>Mes dernières réalisation</h2>
    </section>
    <section id="testimonials">
      <h2>Ils m'ont fait confiance</h2>
      <div class="testimonials" v-for="testimonial in testimonials" :key="testimonial.id">
        <forelse-testimonial :testimonial="testimonial" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        {
          id: 1,
          logo: {
            src: require('~/assets/hero.jpg'),
            alt: ''
          },
          content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque labore unde dolor nesciunt neque ipsa hic dolores. Sed architecto quos adipisci, culpa in veritatis, corrupti commodi est, ratione facilis veniam!'
        },
        {
          id: 2,
          logo: {
            src: require('~/assets/hero.jpg'),
            alt: ''
          },
          content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque labore unde dolor nesciunt neque ipsa hic dolores. Sed architecto quos adipisci, culpa in veritatis, corrupti commodi est, ratione facilis veniam!'
        },
        {
          id: 3,
          logo: {
            src: require('~/assets/hero.jpg'),
            alt: ''
          },
          content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque labore unde dolor nesciunt neque ipsa hic dolores. Sed architecto quos adipisci, culpa in veritatis, corrupti commodi est, ratione facilis veniam!'
        }
      ],
      services: [
        {
          id: 1,
          title: 'Conception',
          content: 'Je vous accompagne afin de concretiser votre projet.\nVous avez une idée, je peux alors la concretiser et vous proposer la solution technique la plus adaptée a votre besoin.'
        },
        {
          id: 2,
          title: 'Création',
          content: 'Je réalise le dévoloppement ainsi que la mise en ligne de votre projet.'
        },
        {
          id: 3,
          title: 'Audit',
          content: 'Je peux analyser le code source de votre solution afin de voir plus clair sur la qualité de votre produit.'
        }
      ]
    }
  }
}
</script>
<style>
  .testimonials {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
  }

  .services-container{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

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

  @media screen and (min-width: 680px) {
    .service {
      flex: 50%;
    }

    .services-container {
      flex-direction: row;
    }
  }

  @media screen and (min-width: 1200px) {
    .service {
      flex: 33%;
    }
  }
</style>