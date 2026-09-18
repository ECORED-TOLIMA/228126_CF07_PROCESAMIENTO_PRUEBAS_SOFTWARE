<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Estructura e implementación de clases
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t3/img01.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .row.mb-4
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/t3/img02.svg', alt='Imagen decorativa')
          .col-lg-10.col-12
            p.mb-0 La implementación de clases constituye una etapa fundamental en el desarrollo de aplicaciones orientadas a objetos, ya que permite transformar el diseño conceptual del <em>software</em> en estructuras programables que representan los diferentes elementos del sistema. Una clase define las características y comportamientos que comparten los objetos, favoreciendo la organización, reutilización y mantenimiento del código.
        .cajon.cajon.C08.color-primario.px-4.py-3.mb-0
          p.mb-0(data-aos="fade-down") Durante este proceso se establecen aspectos como la definición de atributos, operaciones, especificadores de acceso y mecanismos para la creación de objetos, elementos que contribuyen a desarrollar aplicaciones con una estructura clara, organizada y acorde con los principios de la programación orientada a objetos.
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Implementación de una clase
    .bloque-texto-g.bloque-texto-g--inverso.cajon.C09.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/img03.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") La implementación de una clase consiste en traducir el diseño realizado durante la etapa de modelado a un lenguaje de programación. En este proceso se definen los atributos que almacenan la información, las operaciones o métodos que describen el comportamiento de los objetos y la estructura que permite representar una entidad dentro del sistema.
    p(data-aos="fade-down") Una clase constituye una plantilla a partir de la cual se crean objetos con características y comportamientos comunes. Su implementación debe responder a los requerimientos del sistema y mantener una organización clara que facilite la reutilización, el mantenimiento y la evolución del código.
    p.mb-4(data-aos="fade-down") Generalmente, una clase está conformada por los siguientes elementos:
    .row.bg02.justify-content-center.align-items-center.px-3.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Nombre de la clase")
            .col-12.mb-4.mb-md-0
              p.mb-0 Identifica la entidad que se representa.
          .row(numero="2" titulo="Atributos")
            .col-12.mb-4.mb-md-0
              p.mb-0 Almacenan la información correspondiente a la clase.
          .row(numero="3" titulo="Métodos")
            .col-12.mb-4.mb-md-0
              p.mb-0 Definen las acciones o funcionalidades que pueden ejecutar los objetos creados a partir de la clase.
          .row(numero="4" titulo="Constructores")
            .col-12.mb-4.mb-md-0
              p.mb-0 Permiten inicializar los objetos al momento de su creación.
          .row(numero="5" titulo="Especificadores de acceso")
            .col-12.mb-4.mb-md-0
              p.mb-0 Controlan la visibilidad de los atributos y métodos dentro del programa.
      .col-lg-4.col-sm-4.col-5.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t3/img04.svg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 6.
          span Estructura básica de una clase
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/t3/img05.svg', alt=' En la figura 6 se presenta la estructura básica de una clase, compuesta por: nombre, atributos, métodos y constructores.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/temas/t3/img06.svg', alt=' En la figura 6 se presenta la estructura básica de una clase, compuesta por: nombre, atributos, métodos y constructores.')
    p(data-aos="fade-down") Una vez definida la estructura de la clase, se procede a implementarla mediante la sintaxis propia del lenguaje de programación seleccionado. En esta etapa se integran elementos propios del lenguaje, como los <b>especificadores de acceso</b>, que regulan la visibilidad de los atributos y métodos, además de otras instrucciones que permiten el correcto funcionamiento de la clase. Aunque la forma de escribir el código puede variar entre lenguajes, los principios fundamentales de la programación orientada a objetos permanecen constantes.
    p.mb-4(data-aos="fade-down") A continuación, se presenta un ejemplo de implementación de una clase utilizando el lenguaje de programación Java:
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .tarjeta-codigo
          pre.language-plaintext(language="plaintext")
            code
              | public class Aprendiz {
              | 
              |     private String nombre;
              |     private String programa;
              | 
              |     public Aprendiz(String nombre, String programa) {
              |         this.nombre = nombre;
              |         this.programa = programa;
              |     }
              | 
              |     public void mostrarInformacion() {
              |         System.out.println("Aprendiz: " + nombre);
              |         System.out.println("Programa: " + programa);
              |     }
              | }
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-auto.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t3/img07.svg', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C03.p-3
          p.mb-0(data-aos="fade-down") En este ejemplo, la clase Aprendiz define dos atributos (nombre y programa), un constructor para inicializar los objetos y un método encargado de mostrar la información almacenada.
    p.mb-0(data-aos="fade-down") La implementación organizada de las clases favorece el desarrollo de aplicaciones más estructuradas, facilita el mantenimiento del código y promueve la reutilización de componentes dentro de un proyecto de <em>software</em>.
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Especificadores de acceso
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t3/img08.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") Como se presentó en los diagramas de clases de UML, la visibilidad de los atributos y métodos se representa mediante símbolos. Durante la implementación, estos símbolos se traducen en especificadores de acceso propios del lenguaje de programación utilizado, los cuales controlan el acceso a los diferentes elementos de la clase.
        .cajon.cajon.C08.color-primario.p-4.mb-4
          p.mb-0(data-aos="fade-down") Los especificadores de acceso son palabras clave que permiten controlar la visibilidad de los atributos, métodos y otros elementos de una clase. Su principal función es establecer desde dónde pueden ser utilizados, favoreciendo la seguridad, la organización y el principio de encapsulamiento propio de la programación orientada a objetos.
        p.mb-0(data-aos="fade-down") La selección del especificador de acceso depende del nivel de acceso que se desea otorgar a cada elemento de la clase. De esta manera, algunos atributos o métodos pueden estar disponibles únicamente dentro de la misma clase, mientras que otros pueden ser utilizados por diferentes clases del sistema.
    p.mb-4(data-aos="fade-down") Los especificadores de acceso más utilizados son:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Especificadores de acceso en Java
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Especificador
                th(data-aos="fade-down")(style= "width: 40%") Descripción
                th(data-aos="fade-down")(style= "width: 40%") Uso principal
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") public
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Permite que el atributo o método sea accesible desde cualquier clase del programa.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Funcionalidades que deben estar disponibles para otros componentes del sistema.
              tr
                td(data-aos="fade-down") private
                td(data-aos="fade-down") Restringe el acceso al interior de la misma clase.
                td(data-aos="fade-down") Proteger la información interna y controlar su modificación.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") protected
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Permite el acceso desde la misma clase y desde las clases que heredan de ella.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Favorecer la reutilización mediante la herencia.
              tr
                td(data-aos="fade-down") (Sin modificador)
                td(data-aos="fade-down") El acceso queda restringido a las clases que pertenecen al mismo paquete.
                td(data-aos="fade-down") Compartir información entre clases relacionadas sin hacerla pública.
    p.mb-4(data-aos="fade-down") A continuación, se presenta un ejemplo del uso de especificadores de acceso en el lenguaje de programación Java:
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .tarjeta-codigo
          pre.language-plaintext(language="plaintext")
            code
              | public class Aprendiz {
              | 
              |     // Atributo accesible solo dentro de la clase
              |     private String nombre;
              | 
              |     // Atributo accesible desde clases del mismo paquete
              |     String programa;
              | 
              |     // Atributo accesible desde clases relacionadas mediante herencia
              |     protected String ficha;
              | 
              |     // Método accesible desde cualquier clase
              |     public void mostrarInformacion() {
              |         System.out.println(nombre + " - " + programa);
              |     }
              | }
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12.order-lg-1.order-2
        .cajon.cajon.C08.color-primario.p-4.mb-0
          p.mb-0(data-aos="fade-down") En el ejemplo anterior, el atributo <b>nombre</b> solo puede utilizarse dentro de la clase <b>Aprendiz</b>, mientras que programa está disponible para las clases del mismo paquete y <b>ficha</b> puede ser utilizada por las clases derivadas. Por su parte, el método <b>mostrarInformacion()</b> es público, por lo que puede ser invocado desde cualquier clase que tenga acceso al objeto.
    p.mb-0(data-aos="fade-down") El uso adecuado de los especificadores de acceso contribuye a proteger la información, controlar la interacción entre los diferentes componentes del sistema y desarrollar aplicaciones más organizadas, seguras y fáciles de mantener.
    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Constructores y administración de memoria en Java
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t3/img09.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") Los constructores son métodos especiales que se ejecutan automáticamente al crear un objeto de una clase. Su función principal es inicializar los atributos del objeto, asignándoles valores iniciales y preparando la instancia para su utilización dentro de la aplicación.
        .cajon.cajon.C08.color-primario.p-4.mb-0
          p.mb-0(data-aos="fade-down") Una clase puede disponer de uno o varios constructores, dependiendo de las necesidades del programa. Cuando no se define un constructor, algunos lenguajes de programación generan uno por defecto; sin embargo, es recomendable crear constructores que permitan inicializar los objetos con la información requerida.
    p.mb-4(data-aos="fade-down") A continuación, se presenta un ejemplo de un constructor en el lenguaje de programación Java:
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .tarjeta-codigo
          pre.language-plaintext(language="plaintext")
            code
              | public class Aprendiz {
              | 
              |     private String nombre;
              |     private String programa;
              | 
              |     public Aprendiz(String nombre, String programa) {
              |         this.nombre = nombre;
              |         this.programa = programa;
              |     }
              | 
              |     public void mostrarInformacion() {
              |         System.out.println(nombre + " - " + programa);
              |     }
              | }
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-auto.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t3/img10.svg', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C03.px-3.py-2
          p.mb-0(data-aos="fade-down") En el ejemplo anterior, el constructor <b>Aprendiz()</b> recibe los valores correspondientes al nombre y al programa de formación, asignándolos a los atributos del objeto durante su creación. De esta manera, cada objeto inicia su ciclo de vida con la información necesaria para su funcionamiento.
    p.mb-4(data-aos="fade-down") En algunos lenguajes de programación también existen los <b>destructores</b>, cuya función es liberar los recursos utilizados por un objeto cuando este deja de ser necesario. No obstante, en Java esta tarea es administrada automáticamente por el <b>Garbage Collector</b> (recolector de basura), un mecanismo que identifica y libera de forma automática la memoria ocupada por objetos que ya no son utilizados por la aplicación.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 7.
          span Ciclo de vida básico de un objeto en Java
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/t3/img11.svg', alt=' En la figura 7 se presenta el ciclo de vida básico de un objeto en Java, desde su creación mediante un constructor hasta la liberación automática de la memoria por el recolector de basura.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/temas/t3/img12.svg', alt=' En la figura 7 se presenta el ciclo de vida básico de un objeto en Java, desde su creación mediante un constructor hasta la liberación automática de la memoria por el recolector de basura.')
    p.mb-0(data-aos="fade-down") La utilización de constructores permite crear objetos correctamente inicializados y contribuye a desarrollar aplicaciones más organizadas. Asimismo, la administración automática de memoria en Java simplifica la gestión de los recursos durante la ejecución del programa y favorece un desarrollo más eficiente y seguro.
</template>
<script>
export default {
  name: 'Tema3',
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
