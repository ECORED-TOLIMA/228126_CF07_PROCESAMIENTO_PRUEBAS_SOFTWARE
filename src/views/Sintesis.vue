<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo aborda los fundamentos de la programación orientada a objetos, incluyendo las características de este paradigma, la definición de clases, objetos, atributos y métodos, así como la interacción entre ellos. Además, desarrolla el modelado y diseño de <em>software</em> mediante UML y herramientas CASE, la implementación de clases en Java, los principios de la herencia y el polimorfismo para favorecer la reutilización del código, y las buenas prácticas para el desarrollo de aplicaciones, abarcando el diseño e implementación de algoritmos, la depuración de programas y las pruebas necesarias para identificar y corregir errores, con el propósito de construir soluciones de <em>software</em> organizadas, mantenibles y de calidad.
    .row.justify-content-center
      .col-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis se presenta un esquema de los principales contenidos del componente formativo, describiendo la relación entre el análisis, la especificación, la validación y la gestión de requisitos en el desarrollo de <em>software</em>, así como las técnicas, herramientas y estándares utilizados para documentar, verificar y controlar los requisitos durante el ciclo de vida del proyecto.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis
</template>
<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass"></style>
