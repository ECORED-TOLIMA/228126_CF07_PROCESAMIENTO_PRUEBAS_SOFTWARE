<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Desarrollo y depuración de aplicaciones
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t6/img01.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .row.mb-4
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/t6/img02.svg', alt='Imagen decorativa')
          .col-lg-10.col-12
            p.mb-0 El desarrollo de aplicaciones requiere un proceso organizado que inicia con el análisis del problema y el diseño de una solución lógica antes de su implementación en un lenguaje de programación. Una planificación adecuada de los algoritmos facilita la construcción de programas más claros, eficientes y acordes con los requerimientos establecidos.
        .cajon.cajon.C08.color-primario.px-4.py-3.mb-0
          p.mb-0(data-aos="fade-down") Durante la implementación de una aplicación, es común que se presenten errores relacionados con la sintaxis, la lógica o el funcionamiento del programa. Por esta razón, la depuración y las pruebas constituyen actividades fundamentales para identificar, analizar y corregir estas situaciones, garantizando que el <em>software</em> produzca los resultados esperados.
    p.mb-0(data-aos="fade-down") La aplicación de estrategias de diseño, depuración y validación contribuye al desarrollo de programas más confiables, facilita su mantenimiento y fortalece la calidad de las soluciones de <em>software</em> implementadas.
    separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Diseño e implementación de algoritmos
    p.mb-4(data-aos="fade-down") El desarrollo de una aplicación inicia con el diseño de un algoritmo que describa de manera ordenada los pasos necesarios para resolver un problema. Un algoritmo bien estructurado facilita la comprensión de la solución, reduce la probabilidad de errores durante la programación y favorece el mantenimiento del código.
    .bloque-texto-g.bloque-texto-g--inverso.cajon.C09.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t6/img03.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Durante la etapa de diseño es posible emplear herramientas como el pseudocódigo o los diagramas de flujo para representar la lógica de la solución antes de escribir el programa. Estas representaciones permiten analizar la secuencia de instrucciones, identificar decisiones y validar el funcionamiento general del algoritmo antes de su implementación.
    p(data-aos="fade-down") Una vez definida la solución, el algoritmo se implementa utilizando la sintaxis del lenguaje de programación seleccionado. En esta etapa, cada instrucción lógica se traduce en código fuente, incorporando estructuras de control, variables, métodos y demás elementos necesarios para construir una aplicación funcional.
    p.mb-4(data-aos="fade-down") Las principales etapas del proceso de diseño e implementación de un algoritmo son:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 8.
          span Proceso de diseño e implementación de un algoritmo
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/t6/img04.svg', alt='En la figura 8 se presenta el proceso de diseño e implementación de un algoritmo, desde el planteamiento del problema hasta la ejecución y validación de la solución desarrollada.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/temas/t6/img05.svg', alt='En la figura 8 se presenta el proceso de diseño e implementación de un algoritmo, desde el planteamiento del problema hasta la ejecución y validación de la solución desarrollada.')
    p.mb-4(data-aos="fade-down") A continuación, se presenta un ejemplo de implementación de un algoritmo en el lenguaje de programación Java:
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .tarjeta-codigo
          pre.language-plaintext(language="plaintext")
            code
              | public class MayorEdad {
              | 
              |     public static void main(String[] args) {
              | 
              |         int edad = 20;
              | 
              |         if (edad >= 18) {
              |             System.out.println("Es mayor de edad.");
              |         } else {
              |             System.out.println("Es menor de edad.");
              |         }
              |     }
              | }
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C08.color-primario.p-4
          p.mb-0(data-aos="fade-down") En el ejemplo anterior, el algoritmo resuelve una situación sencilla mediante una estructura condicional. A partir del valor asignado a la variable edad, el programa evalúa una condición y muestra el mensaje correspondiente. Este proceso evidencia cómo una solución previamente diseñada puede implementarse mediante instrucciones propias del lenguaje Java.
    p.mb-0(data-aos="fade-down") El diseño e implementación de algoritmos constituye una etapa fundamental en el desarrollo de <em>software</em>, ya que proporciona una base organizada para construir aplicaciones funcionales, facilita la identificación de posibles errores y contribuye a obtener soluciones más claras, eficientes y mantenibles.
    separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2 Depuración de programas
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t6/img07.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        p.mb-4 La depuración de programas es el proceso mediante el cual se identifican, analizan y corrigen los errores presentes en una aplicación durante su desarrollo. Esta actividad permite verificar que el programa funcione de acuerdo con los requisitos establecidos y produzca los resultados esperados antes de su implementación o puesta en funcionamiento.
        .cajon.cajon.C08.color-primario.px-4.py-3.mb-0
          p.mb-0(data-aos="fade-down") Durante la depuración, el desarrollador examina el comportamiento del programa para localizar la causa de un error y determinar la mejor alternativa para solucionarlo. Este proceso puede apoyarse en herramientas integradas en los entornos de desarrollo, las cuales permiten ejecutar el programa de manera controlada, inspeccionar el contenido de las variables y realizar un seguimiento detallado de la ejecución del código.
    p.mb-4(data-aos="fade-down") Entre las principales acciones realizadas durante la depuración se encuentran:
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-8.col-12.order-lg-2.order-2
        .cajon.C08.p-4.h-100.w-100
          ol.lista-ol--cuadro.lista-ol--separador.mb-0
            li
              .lista-ol--cuadro__vineta
                span.text-bold 1
              p.mb-0 Ejecutar el programa de manera controlada.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 2
              p.mb-0 Identificar la ubicación donde se presenta el error.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 3
              p.mb-0 Revisar el contenido de las variables durante la ejecución.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 4
              p.mb-0 Analizar el flujo del programa para verificar su comportamiento.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 5
              p.mb-0 Aplicar las correcciones necesarias y comprobar nuevamente el funcionamiento de la aplicación.
      .col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t6/img06.svg', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") Las etapas generales del proceso de depuración de un programa son:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 9.
          span Proceso general de depuración de programas
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/t6/img08.svg', alt='En la figura 9 se presenta el proceso general de depuración de un programa, desde su ejecución hasta la verificación de las correcciones realizadas.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/temas/t6/img09.svg', alt='En la figura 9 se presenta el proceso general de depuración de un programa, desde su ejecución hasta la verificación de las correcciones realizadas.')
    p.mb-0(data-aos="fade-down") La depuración constituye una práctica esencial durante el desarrollo de <em>software</em>, ya que permite detectar errores de manera oportuna, mejorar la calidad del código y garantizar que la aplicación cumpla con el comportamiento esperado.
    separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.3 Fallas de sintaxis y fallas de lógica
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t6/img10.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p.mb-4 Durante el desarrollo de una aplicación es frecuente encontrar errores que afectan su funcionamiento. Estos errores pueden impedir que el programa se ejecute o provocar resultados diferentes a los esperados. Identificar el tipo de falla facilita el proceso de depuración y permite aplicar la corrección más adecuada.
        .cajon.cajon.C08.color-primario.px-4.py-3.mb-0
          p.mb-0(data-aos="fade-down") Las fallas más comunes durante el desarrollo de programas corresponden a errores de sintaxis y errores de lógica. Mientras las primeras están relacionadas con el incumplimiento de las reglas del lenguaje de programación, las segundas se presentan cuando el algoritmo o la implementación no producen el resultado esperado, aunque el programa pueda ejecutarse correctamente.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 9.
          span Comparación entre fallas de sintaxis y fallas de lógica
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Tipo de falla
                th(data-aos="fade-down")(style= "width: 35%") Características
                th(data-aos="fade-down")(style= "width: 35%") Ejemplo
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Sintaxis
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Incumple las reglas del lenguaje de programación e impide la compilación o ejecución del programa.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Olvidar un punto y coma (;), escribir incorrectamente una palabra reservada o no cerrar una llave (}).
              tr
                td(data-aos="fade-down") Lógica
                td(data-aos="fade-down") El programa se ejecuta, pero produce resultados incorrectos debido a un error en el algoritmo o en la implementación.
                td(data-aos="fade-down") Utilizar una condición equivocada en una estructura if o realizar un cálculo con una fórmula incorrecta.
    p(data-aos="fade-down") A continuación, se presentan ejemplos de fallas de sintaxis y de lógica en el lenguaje de programación Java.
    p.mb-4(data-aos="fade-down") Ejemplo de falla de sintaxis:
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .tarjeta-codigo
          pre.language-plaintext(language="plaintext")
            code
              | public class Ejemplo {
              | 
              |     public static void main(String[] args) {
              | 
              |         int edad = 20
              | 
              |         System.out.println(edad);
              |     }
              | }
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-auto.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t6/img11.svg', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C03.p-3
          p.mb-0(data-aos="fade-down") En este ejemplo, la instrucción que declara la variable edad no finaliza con el punto y coma (;), por lo que el compilador genera un error de sintaxis y el programa no puede ejecutarse.
    p.mb-4(data-aos="fade-down") Ejemplo de falla de lógica:
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .tarjeta-codigo
          pre.language-plaintext(language="plaintext")
            code
              | public class Ejemplo {
              | 
              |     public static void main(String[] args) {
              | 
              |         int edad = 20;
              | 
              |         if (edad < 18) {
              |             System.out.println("Es mayor de edad.");
              |         } else {
              |             System.out.println("Es menor de edad.");
              |         }
              |     }
              | }
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-auto.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t6/img12.svg', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C03.px-4.py-2
          p.mb-0(data-aos="fade-down") En este caso, el programa se ejecuta correctamente desde el punto de vista de la sintaxis; sin embargo, la condición utilizada en la estructura <b>if</b> es incorrecta, por lo que el resultado obtenido no corresponde con la edad evaluada. Este tipo de situación corresponde a una falla de lógica.
    p.mb-0(data-aos="fade-down") Reconocer la diferencia entre las fallas de sintaxis y las fallas de lógica permite optimizar el proceso de depuración, facilita la identificación de los errores y contribuye al desarrollo de aplicaciones más confiables y de mejor calidad.
    separador
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.4 Pruebas y corrección de errores
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-6.col-12.order-lg-1.order-2
        .cajon.C08.p-4.h-100.w-100
          p(data-aos="fade-down") Las pruebas constituyen una actividad fundamental durante el desarrollo de <em>software</em>, ya que permiten comprobar que una aplicación cumple con los requisitos establecidos y produce los resultados esperados. Mediante la ejecución de diferentes casos de prueba es posible identificar errores que no fueron detectados durante la implementación y verificar el comportamiento del programa en distintas situaciones.
      .col-lg-6.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t6/img13.jpg', alt='Imagen decorativa')
    p(data-aos="fade-down") Una vez identificado un error, se procede a analizar su causa y realizar las modificaciones necesarias en el código fuente. Posteriormente, el programa debe ejecutarse nuevamente para comprobar que la corrección implementada solucionó el problema sin afectar otras funcionalidades de la aplicación. Este proceso puede repetirse varias veces hasta obtener un funcionamiento adecuado.
    p.mb-4(data-aos="fade-down") Entre las principales actividades que hacen parte del proceso de pruebas y corrección de errores se encuentran:
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-8.col-12.order-lg-2.order-2
        .cajon.C08.p-4.h-100.w-100
          ol.lista-ol--cuadro.lista-ol--separador.mb-0
            li
              .lista-ol--cuadro__vineta
                span.text-bold 1
              p.mb-0  Definir los casos de prueba que permitan validar el funcionamiento del programa.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 2
              p.mb-0  Ejecutar la aplicación con diferentes datos de entrada.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 3
              p.mb-0  Comparar los resultados obtenidos con los resultados esperados.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 4
              p.mb-0  Identificar y corregir los errores encontrados.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 5
              p.mb-0 Repetir las pruebas para verificar la efectividad de las correcciones realizadas.
      .col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t6/img14.svg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 10.
          span Ciclo de pruebas y corrección de errores
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/t6/img15.svg', alt='En la figura 10 se presenta el ciclo general de pruebas y corrección de errores, desde la definición de los casos de prueba hasta la validación del funcionamiento del programa.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/temas/t6/img16.svg', alt='En la figura 10 se presenta el ciclo general de pruebas y corrección de errores, desde la definición de los casos de prueba hasta la validación del funcionamiento del programa.')
    p.mb-0(data-aos="fade-down") Las pruebas y la corrección de errores constituyen actividades permanentes dentro del ciclo de desarrollo de <em>software</em>, ya que contribuyen a mejorar la calidad de las aplicaciones, aumentar su confiabilidad y garantizar que respondan adecuadamente a las necesidades de los usuarios.
</template>
<script>
export default {
  name: 'Tema6',
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
