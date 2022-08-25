<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.mb-4
      .col-md-9.order-md-1.order-2
        p Hoy día para las empresas es necesario garantizar sus procesos de negocio, a través de la aplicación de estrategias basadas en aspectos tecnológicos (#[i hardware] y #[i software]) y en sus recursos humanos. La mayoría de los procesos de negocio tienen muchos enemigos, por decirle de alguna manera, aunque si se hace referencia a ellos, de manera técnica, se les conoce como riesgos, los cuales están presentes en cualquier ámbito empresarial y son los causantes de la afectación negativa parcial o total de los procesos de negocio. 
        p Este componente formativo tiene como objetivo principal trabajar los conceptos y la manera en la que se debe implementar y operar un Sistema de Gestión de Continuidad de un Negocio (SGCN) junto con cada uno de los procesos a realizar para que este funcione de manera correcta, y a su vez se esté preparado para recuperarse en caso de sufrir un riesgo que detenga su correcto funcionamiento. El siguiente video presenta cómo la aplicación y apropiación de un SGCN pueden convertirse, además, de un mecanismo de prevención en una ventaja competitiva:
      .col-md-3.col-6.order-md-2.order-1.mb-md-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/intro/img01.png')
    
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .BG01.p-4.mb-4(data-aos="fade-right")
      p Existen muchos procesos de negocio que son esenciales para las empresas y por tanto se denominan «#[strong críticos del negocio]». Son aquellos que hacen que la empresa preste los servicios de la manera más eficiente a sus clientes. De ahí que sean precisamente a estos a los cuales se les debe brindar la mayor fuerza de inversión y atención, sobre todo en procesos de continuidad; en otras palabras, son la razón de ser de la organización y la manera en cómo se mantienen presentes en el mercado. Si estos fallan o se detienen, la empresa pierde dinero y posicionamiento.
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
