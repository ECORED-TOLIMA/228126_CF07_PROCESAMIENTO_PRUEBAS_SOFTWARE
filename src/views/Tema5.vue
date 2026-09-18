<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Polimorfismo y reutilización de código
    .bloque-texto-g.bloque-texto-g--inverso.cajon.C09.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") El polimorfismo es uno de los principios fundamentales de la programación orientada a objetos y complementa conceptos como la encapsulación, la herencia y la abstracción. Su principal característica consiste en permitir que un mismo método o una misma referencia pueda adoptar diferentes comportamientos según el objeto con el que interactúe, favoreciendo el desarrollo de aplicaciones más flexibles y adaptables.
    .row.justify-content-center.mb-0
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t5/img02.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C08.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") Gracias al polimorfismo, es posible diseñar soluciones que reutilizan estructuras comunes y, al mismo tiempo, permiten que cada clase implemente comportamientos específicos de acuerdo con sus necesidades. Este principio facilita la organización del código, reduce la duplicidad y contribuye al mantenimiento y evolución de las aplicaciones, especialmente cuando se desarrollan proyectos de mayor complejidad.
        p.mb-0(data-aos="fade-down") La incorporación del polimorfismo en el desarrollo de <em>software</em> contribuye a mejorar la organización del código, facilita su mantenimiento y favorece la construcción de aplicaciones más flexibles mediante la reutilización de estructuras y comportamientos comunes.
    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Principios y beneficios del polimorfismo
    p.mb-4(data-aos="fade-down") El polimorfismo es uno de los principios fundamentales de la programación orientada a objetos que permite que un mismo método o una misma referencia presente diferentes comportamientos según el objeto sobre el cual actúe. Esta característica favorece la reutilización del código y proporciona mayor flexibilidad en el desarrollo de aplicaciones, ya que una misma operación puede adaptarse a distintas clases relacionadas mediante la herencia.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-6.col-12.order-lg-1.order-2
        .cajon.C08.p-4.h-100.w-100
          p(data-aos="fade-down") El funcionamiento del polimorfismo se basa en la posibilidad de utilizar una referencia de una clase base para acceder a objetos de sus clases derivadas. Aunque los objetos comparten una estructura común, cada uno puede ejecutar una implementación diferente de un mismo método, de acuerdo con las características definidas en su propia clase.
          p.mb-0(data-aos="fade-down") En Java, el polimorfismo se manifiesta principalmente mediante la herencia y la sobrescritura de métodos. Esto permite que una referencia de la clase padre invoque el comportamiento correspondiente al objeto que representa en tiempo de ejecución, favoreciendo la construcción de aplicaciones más dinámicas, flexibles y fáciles de mantener.
      .col-lg-6.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t5/img03.jpg', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") Entre los principales beneficios del polimorfismo se destacan:
    .row.mb-4
      .col-12
        .px-0.py-0
          .row.align-items-center.bg01(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-2
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/t5/img04.png", alt="Imagen decorativa")
            .col-lg-8.px-0.py-4
              SlyderF.custom.color-acento-botones.px-lg-5.py-0.px-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t5/img05.svg", alt="Imagen decorativa").img100.m-auto
                  p Facilita el mantenimiento y la evolución de las aplicaciones al incorporar nuevas clases sin modificar el código existente.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t5/img06.svg", alt="Imagen decorativa").img100.m-auto
                  p Favorece la reutilización del código mediante el uso de estructuras comunes.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t5/img07.svg", alt="Imagen decorativa").img100.m-auto
                  p Reduce la duplicidad de código al permitir que varias clases compartan una misma interfaz o comportamiento general.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t5/img08.svg", alt="Imagen decorativa").img100.m-auto
                  p Promueve el desarrollo de aplicaciones más flexibles y escalables.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t5/img09.svg", alt="Imagen decorativa").img100.m-auto
                  p Mejora la organización del <em>software</em> al separar los comportamientos generales de las implementaciones específicas.
    p.mb-4(data-aos="fade-down") A continuación, se presenta un ejemplo conceptual del uso del polimorfismo en el lenguaje de programación Java:
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .tarjeta-codigo
          pre.language-plaintext(language="plaintext")
            code
              | class Persona {
              | 
              |     public void presentarse() {
              |         System.out.println("Soy una persona.");
              |     }
              | }
              | 
              | class Aprendiz extends Persona {
              | 
              |     @Override
              |     public void presentarse() {
              |         System.out.println("Soy un aprendiz del SENA.");
              |     }
              | }
              | 
              | class Instructor extends Persona {
              | 
              |     @Override
              |     public void presentarse() {
              |         System.out.println("Soy un instructor del SENA.");
              |     }
              | }
              | 
              | public class Principal {
              | 
              |     public static void main(String[] args) {
              | 
              |         Persona persona1 = new Aprendiz();
              |         Persona persona2 = new Instructor();
              | 
              |         persona1.presentarse();
              |         persona2.presentarse();
              |     }
              | }
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-auto.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t5/img10.svg', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C03.px-4.py-2
          p.mb-0(data-aos="fade-down") En el ejemplo anterior, las variables <b>persona1</b> y <b>persona2</b> son referencias de la clase <b>Persona</b>, pero cada una apunta a un objeto de una clase diferente. Al invocar el método <b>presentarse()</b>, se ejecuta la implementación correspondiente al tipo real del objeto, evidenciando el comportamiento polimórfico.
    p.mb-0(data-aos="fade-down") El polimorfismo constituye un principio esencial para el desarrollo de aplicaciones orientadas a objetos, ya que facilita la reutilización del código, mejora la organización de las clases y permite extender la funcionalidad del <em>software</em> de manera flexible y mantenible.
    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Sobrecarga de métodos
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t5/img11.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") La sobrecarga de métodos es una característica de la programación orientada a objetos que permite definir varios métodos con el mismo nombre dentro de una misma clase, siempre que se diferencien por la cantidad, el tipo o el orden de sus parámetros. Este mecanismo facilita la reutilización de nombres de métodos para realizar operaciones relacionadas, adaptándolas a diferentes necesidades sin generar conflictos durante la compilación.
        .cajon.cajon.C08.color-primario.p-4.mb-0
          p.mb-0(data-aos="fade-down") En Java, el compilador identifica cuál método debe ejecutarse de acuerdo con los argumentos enviados en la llamada. De esta manera, es posible utilizar un mismo nombre para métodos que realizan una función similar, pero que reciben información diferente.
    p.mb-4(data-aos="fade-down") La siguiente tabla presenta las principales características de la sobrecarga de métodos.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 7.
          span Características de la sobrecarga de métodos en Java
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Característica
                th(data-aos="fade-down")(style= "width: 70%") Descripción
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Nombre del método
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Permanece igual en todas las versiones del método.
              tr
                td(data-aos="fade-down") Parámetros
                td(data-aos="fade-down") Deben variar en cantidad, tipo u orden.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Tipo de retorno
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Puede ser igual o diferente, pero no determina la sobrecarga por sí solo.
              tr
                td(data-aos="fade-down") Clase
                td(data-aos="fade-down") Los métodos pertenecen a la misma clase.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Momento de resolución
                td(data-aos="fade-down")(style="background-color: #EEF1F7") El compilador determina qué método ejecutar según los argumentos recibidos.
    p.mb-4(data-aos="fade-down") A continuación, se presenta un ejemplo de sobrecarga de métodos utilizando el lenguaje de programación Java:
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .tarjeta-codigo
          pre.language-plaintext(language="plaintext")
            code
              | class Calculadora {
              | 
              |     public int sumar(int a, int b) {
              |         return a + b;
              |     }
              | 
              |     public int sumar(int a, int b, int c) {
              |         return a + b + c;
              |     }
              | 
              |     public double sumar(double a, double b) {
              |         return a + b;
              |     }
              | }
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C02.color-secundario.p-4
          p.mb-0(data-aos="fade-down") En el ejemplo anterior, el método <b>sumar()</b> se encuentra definido tres veces dentro de la misma clase. Aunque conserva el mismo nombre, cada versión recibe parámetros diferentes, lo que permite al compilador identificar automáticamente cuál implementación debe ejecutarse según los argumentos suministrados.
    p.mb-0(data-aos="fade-down") La sobrecarga de métodos contribuye a mejorar la legibilidad del código, favorece la reutilización de funcionalidades relacionadas y simplifica el desarrollo de aplicaciones al ofrecer diferentes alternativas para realizar una misma operación.
    separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Sobrescritura y polimorfismo
    p.mb-4(data-aos="fade-down") La sobrescritura de métodos constituye uno de los mecanismos que hacen posible el polimorfismo en la programación orientada a objetos. Mediante este proceso, una clase derivada redefine el comportamiento de un método heredado de la clase base, permitiendo que cada objeto responda de manera diferente ante una misma operación.
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .cajon.cajon.C10.p-4
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t5/img12.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              p.mb-0 En Java, cuando una referencia de la clase padre apunta a un objeto de una clase derivada, la ejecución del método sobrescrito depende del tipo real del objeto y no del tipo de la referencia. Este comportamiento se determina durante la ejecución del programa, lo que permite desarrollar aplicaciones más flexibles y adaptables a diferentes escenarios.
    p.mb-4(data-aos="fade-down") En este punto es importante identificar las principales diferencias entre la sobrecarga y la sobrescritura de métodos.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 8.
          span Comparación entre sobrecarga y sobrescritura de métodos
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Característica
                th(data-aos="fade-down")(style= "width: 35%") Sobrecarga
                th(data-aos="fade-down")(style= "width: 35%") Sobrescritura
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Ubicación
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Misma clase
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Clase derivada
              tr
                td(data-aos="fade-down") Nombre del método
                td(data-aos="fade-down") Igual
                td(data-aos="fade-down") Igual
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Parámetros
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Diferentes
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Iguales
              tr
                td(data-aos="fade-down") Herencia
                td(data-aos="fade-down") No es necesaria
                td(data-aos="fade-down") Requiere herencia
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Momento de resolución
                td(data-aos="fade-down")(style="background-color: #EEF1F7") En compilación
                td(data-aos="fade-down")(style="background-color: #EEF1F7") En ejecución
              tr
                td(data-aos="fade-down") Propósito
                td(data-aos="fade-down") Ofrecer diferentes versiones de un método
                td(data-aos="fade-down") Modificar el comportamiento heredado
    p.mb-4(data-aos="fade-down") Posteriormente, se presenta un ejemplo de sobrescritura y polimorfismo utilizando el lenguaje de programación Java:
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .tarjeta-codigo
          pre.language-plaintext(language="plaintext")
            code
              | class Persona {
              | 
              |     public void presentarse() {
              |         System.out.println("Soy una persona.");
              |     }
              | }
              | 
              | class Aprendiz extends Persona {
              | 
              |     @Override
              |     public void presentarse() {
              |         System.out.println("Soy un aprendiz del SENA.");
              |     }
              | }
              | 
              | class Instructor extends Persona {
              | 
              |     @Override
              |     public void presentarse() {
              |         System.out.println("Soy un instructor del SENA.");
              |     }
              | }
              | 
              | public class Principal {
              | 
              |     public static void main(String[] args) {
              | 
              |         Persona persona;
              | 
              |         persona = new Aprendiz();
              |         persona.presentarse();
              | 
              |         persona = new Instructor();
              |         persona.presentarse();
              |     }
              | }
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C02.color-secundario.p-4
          p.mb-0(data-aos="fade-down") En el ejemplo anterior, la variable <b>persona</b> corresponde a una referencia de la clase <b>Persona</b>, pero durante la ejecución puede representar objetos de diferentes clases derivadas. Aunque la llamada al método <b>presentarse()</b> es la misma, el resultado cambia según el tipo de objeto asignado, evidenciando el comportamiento polimórfico.
    p.mb-0(data-aos="fade-down") La combinación de la herencia y la sobrescritura permite desarrollar aplicaciones más flexibles y reutilizables, ya que facilita la incorporación de nuevas clases con comportamientos específicos sin modificar la estructura general del programa.
    separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.4 Aplicación del polimorfismo mediante herencia
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t5/img13.jpg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") La aplicación del polimorfismo mediante herencia permite desarrollar aplicaciones en las que una misma referencia puede gestionar objetos pertenecientes a diferentes clases derivadas. Este mecanismo facilita la reutilización del código y posibilita la incorporación de nuevas funcionalidades sin modificar la lógica general de la aplicación.
        .cajon.cajon.C08.color-primario.p-4.mb-0
          p.mb-0(data-aos="fade-down") En Java, una referencia de la clase base puede almacenar objetos de cualquiera de sus clases derivadas. Gracias a ello, es posible invocar un mismo método sobre distintos objetos y obtener comportamientos específicos según la implementación realizada en cada clase. Esta característica favorece la extensibilidad del <em>software</em> y simplifica la administración de las clases relacionadas.
    p.mb-4(data-aos="fade-down") A continuación, se presenta un ejemplo de aplicación del polimorfismo mediante herencia utilizando el lenguaje de programación Java:
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .tarjeta-codigo
          pre.language-plaintext(language="plaintext")
            code
              | class Persona {
              | 
              |     public void realizarActividad() {
              |         System.out.println("Realizando una actividad.");
              |     }
              | }
              | 
              | class Aprendiz extends Persona {
              | 
              |     @Override
              |     public void realizarActividad() {
              |         System.out.println("El aprendiz desarrolla una actividad de formación.");
              |     }
              | }
              | 
              | class Instructor extends Persona {
              | 
              |     @Override
              |     public void realizarActividad() {
              |         System.out.println("El instructor orienta el proceso de formación.");
              |     }
              | }
              | 
              | public class Principal {
              | 
              |     public static void main(String[] args) {
              | 
              |         Persona[] personas = {
              |             new Aprendiz(),
              |             new Instructor()
              |         };
              | 
              |         for (Persona persona : personas) {
              |             persona.realizarActividad();
              |         }
              |     }
              | }
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C02.color-secundario.p-4
          p.mb-0(data-aos="fade-down") En el ejemplo anterior, el arreglo <b>personas</b> almacena objetos de las clases <b>Aprendiz</b> e <b>Instructor</b> utilizando referencias de tipo Persona. Durante el recorrido del arreglo, la llamada al método <b>realizarActividad()</b> produce un comportamiento diferente para cada objeto, demostrando cómo el polimorfismo permite tratar distintos tipos de objetos de manera uniforme sin perder sus características particulares.
    p.mb-0(data-aos="fade-down") La aplicación del polimorfismo mediante herencia constituye una práctica ampliamente utilizada en el desarrollo de <em>software</em>, ya que facilita la reutilización del código, mejora la organización de las aplicaciones y permite incorporar nuevas clases con un impacto mínimo sobre la estructura existente.
</template>
<script>
export default {
  name: 'Tema5',
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
