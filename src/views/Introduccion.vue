<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-4(data-aos="fade-down") La programación orientada a objetos y el modelado de <em>software</em> constituyen fundamentos esenciales para el desarrollo de aplicaciones que respondan a los requerimientos actuales de calidad, escalabilidad y mantenibilidad. Este enfoque permite representar situaciones del mundo real mediante clases y objetos, favoreciendo la organización del código, la reutilización de componentes y la construcción de soluciones de <em>software</em> estructuradas.
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/intro/img01.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C08.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") En este componente se abordan los principios de la programación orientada a objetos, como el encapsulamiento, la herencia, el polimorfismo y la abstracción, así como el uso del Lenguaje Unificado de Modelado (UML) para el diseño y la representación de sistemas de <em>software</em>. Estos conocimientos facilitan el análisis, diseño e implementación de aplicaciones mediante modelos que apoyan la comunicación entre los integrantes del equipo de desarrollo y orientan el proceso de construcción del <em>software</em>.
        p.mb-0 El desarrollo de estas competencias proporciona las bases para la implementación de aplicaciones orientadas a objetos y fortalece la preparación del aprendiz para abordar componentes posteriores relacionados con el desarrollo <em>web</em>, la construcción de API, las prácticas DevOps y la implementación de soluciones en entornos de computación en la nube.
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/WAlFoVU6kAU?si=0n3FfEXDca2F0fsl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
