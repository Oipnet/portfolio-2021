<template>
  <div>
    <forelse-hero />
    <section id="about">
      <h2>Qui suis-je</h2>
      <div class="about-container">
        <figure>
          <img src="@/assets/hero.jpg" alt="">
        </figure>
        <div class="about-description">
          <p>Devoloppeur WEB depuis plus de 10 ans</p>
          <p>
            Après avoir passé un IUT informatique sur lyon (<a href="https://iut.univ-lyon1.fr/formation/offre-de-formations/informatique-bourg-en-bresse/dut-informatique" target="_blank">IUT Lyon 1</a>) j'ai posé mais valises dans le Sud-Gironde
          </p>
          <p>
            Indépendant passioné, j'ai a coeur de réalisé un travail de qualité et a jours. Pour cela je reste a l'écoute des nouvelles avancées technologiques
          </p>
          <p>
            Formateur, j'aime transmettre mes connaissance au travers de formations sur les technologies que j'utilise au quotidien (<a href="https://symfony.com/" target="_blank">Symfony</a>, <a href="https://laravel.com/" target="_blank">Laravel</a>, <a href="https://vuejs.org/" target="_blank">Vue.js</a>)
          </p>
        </div>
      </div>
    </section>
    <section id="services" class="services">
      <h2>Augmenter votre visibilité sur le web</h2>
      <div class="services-container">
        <forelse-service v-for="service in services" :service="service" :key="service.id"/>
      </div>
    </section>
    <section>
      <h2>Mes dernières réalisation</h2>
      <p style="text-align:center">Section en cours de réalisation</p>
    </section>
    <section id="phone-contact" class="phone-contact">
      <span>Laissez moi votre numéro, je vous rappèle</span>
      <form>
        <input type="phone" placeholder="Téléphone">
        <input type="submit" value="Envoyer">
      </form>
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

  .about-container {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .about-container p {
    margin: 1em 0;
  }

  .about-container img {
    margin: 2em auto;
    width: 180px;
    height: 180px;
    border-radius: 50%;
  }

  .about-description a {
    color: var(--primary-color);
    text-decoration: underline;
  }

  .about-description a:hover {
    color: var(--secondary-color)
  }

  .phone-contact {
    margin: 0 -2em;
    padding: 1.5em;
    min-height: 200px;
    background-color: var(--primary-color);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .phone-contact span {
    font-size: 2em;
    font-weight: 500;
    color: var(--secondary-color);
    margin: 1em;
    display: inline-block;
    text-transform: uppercase;
  }
  .phone-contact form {
    margin: 1em;
  }

  .phone-contact form input[type='phone'] {
    border: none;
    border-radius: 5px;
    padding: 1em 2em;
  }
  .phone-contact form input[type='submit'] {
    background-color: var(--light-primary-color);
    border: none;
    border-radius: 5px;
    padding: 1em 2em;
  }
  @media screen and (min-width: 680px) {
    .services-container {
      flex-direction: row;
    }

    .about-container {
      flex-direction: row;
      min-height: 180px;
    }

    .about-container figure {
      flex: 33%;
    }

    .about-description {
      padding: 1.5em;
    }

    .phone-contact {
      flex-direction: row;
    }

    .phone-contact form {
      flex: 45%;
    }

    .phone-contact input {
      margin-bottom: 0.5em;
    }

    .phone-contact input[type="submit"] {
      text-align: right;
    }
  }
</style>