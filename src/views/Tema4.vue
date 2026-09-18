<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Herencia en la programación orientada a objetos
    p.mb-4(data-aos="fade-down") La herencia es uno de los principios fundamentales de la programación orientada a objetos que permite crear nuevas clases a partir de otras ya existentes. Este mecanismo favorece la reutilización del código, facilita la organización de las aplicaciones y contribuye a desarrollar soluciones más flexibles y fáciles de mantener.
    .row.justify-content-center.mb-0
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t4/img01.jpg', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-2.order-2
        .cajon.cajon.C08.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") Mediante la herencia es posible establecer relaciones entre clases, compartiendo atributos y métodos comunes, al tiempo que se incorporan nuevas características o comportamientos según las necesidades del sistema. Este enfoque reduce la duplicidad de código y promueve una estructura más organizada durante el desarrollo de aplicaciones.
        p.mb-0(data-aos="fade-down") La comprensión de este principio constituye un paso importante para diseñar aplicaciones escalables, fortalecer la reutilización de componentes y aplicar de manera eficiente los fundamentos de la programación orientada a objetos.
    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Principios y beneficios de la herencia
    .bloque-texto-g.bloque-texto-g--inverso.cajon.C09.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/img02.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") La herencia es un mecanismo de la programación orientada a objetos que permite crear una nueva clase a partir de otra ya existente. La clase que transmite sus características se denomina clase base o clase padre, mientras que la nueva clase recibe el nombre de clase derivada o clase hija. Mediante este mecanismo, la clase derivada puede reutilizar los atributos y métodos de la clase base, además de incorporar nuevas funcionalidades o modificar comportamientos según las necesidades de la aplicación.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-auto.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t4/img03.svg', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C03.px-4.py-2
          p.mb-0(data-aos="fade-down") Este principio favorece la organización del <em>software</em> al establecer relaciones entre clases que comparten características comunes. En lugar de duplicar código, es posible reutilizar los elementos ya definidos en una clase existente, facilitando el mantenimiento y la evolución del sistema.
    p.mb-4(data-aos="fade-down") La herencia se fundamenta en el principio de especialización, mediante el cual una clase derivada conserva las características generales de la clase base y añade propiedades o comportamientos específicos. Esta organización permite representar de manera más precisa las relaciones existentes entre los diferentes elementos que conforman una aplicación.
    .row.bg03.justify-content-center.align-items-center.px-3.mb-4
      .col.col-lg-3.col-6.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t4/img04.svg', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-1.order-2
        .tarjeta.tarjeta--blanca.p-4
          p.mb-4.text-bold Entre los principales beneficios de la herencia se encuentran:
          ul.lista-ul--color.mb-4(data-aos="fade-down")
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Reutilizar atributos y métodos definidos en otras clases.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Reducir la duplicidad de código durante el desarrollo.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Facilitar el mantenimiento y la actualización de las aplicaciones.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Favorecer la organización jerárquica de las clases.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Incrementar la reutilización y escalabilidad de los componentes de <em>software</em>.
    p.mb-4(data-aos="fade-down") A continuación, se presenta un ejemplo de herencia utilizando el lenguaje de programación Java:
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .tarjeta-codigo
          pre.language-plaintext(language="plaintext")
            code
              | class Persona {
              |     String nombre;
              |     String documento;
              | }
              | 
              | class Aprendiz extends Persona {
              |     String programa;
              | }
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C08.color-primario.p-4
          p.mb-0(data-aos="fade-down") En el ejemplo anterior, la clase <b>Aprendiz</b> hereda los atributos <b>nombre y documento</b> definidos en la clase <b>Persona</b>, e incorpora el atributo <b>programa</b>, propio del contexto de formación. Gracias a la herencia, no es necesario volver a declarar los atributos heredados, lo que facilita la reutilización del código y mejora la organización de la aplicación.
    p.mb-0(data-aos="fade-down") La aplicación de la herencia permite desarrollar <em>software</em> más organizado, reutilizar componentes existentes y facilitar la incorporación de nuevas funcionalidades sin modificar la estructura de las clases ya definidas.
    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Herencia simple y múltiple
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t4/img05.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C08.color-primario.p-4.mb-4
          p.mb-0(data-aos="fade-down") La herencia puede clasificarse según la forma en que una clase deriva sus características de otras clases. Los tipos más conocidos son la herencia simple y la herencia múltiple, cada uno con características y aplicaciones particulares.
        p.mb-0(data-aos="fade-down") La herencia simple ocurre cuando una clase deriva directamente de una única clase base. Este modelo favorece una estructura clara y organizada, facilitando la reutilización de atributos y métodos sin incrementar la complejidad del diseño. Java implementa este tipo de herencia mediante la palabra reservada <em>extends</em>.
    p.mb-4(data-aos="fade-down") A continuación, se presenta un ejemplo de herencia simple utilizando el lenguaje de programación Java:
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .tarjeta-codigo
          pre.language-plaintext(language="plaintext")
            code
              | class Persona {
              |     String nombre;
              | }
              | 
              | class Aprendiz extends Persona {
              |     String programa;
              | }
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-auto.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t4/img06.svg', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C03.px-4.py-3
          p.mb-0(data-aos="fade-down") En este ejemplo, la clase <b>Aprendiz</b> hereda los atributos de la clase <b>Persona</b> y añade un nuevo atributo denominado <b>programa</b>, propio del contexto de formación.
    p.mb-4(data-aos="fade-down") La <b>herencia múltiple</b> se presenta cuando una clase puede heredar características de dos o más clases base. Aunque este mecanismo está disponible en algunos lenguajes de programación, Java no permite la herencia múltiple entre clases debido a la posibilidad de generar ambigüedades durante la ejecución del programa. No obstante, Java ofrece mecanismos alternativos, como las interfaces, que permiten compartir comportamientos entre diferentes clases sin recurrir a la herencia múltiple de clases.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          span Comparación entre herencia simple y herencia múltiple
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Característica
                th(data-aos="fade-down")(style= "width: 35%") Herencia simple
                th(data-aos="fade-down")(style= "width: 35%") Herencia múltiple
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Número de clases base
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Una
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Dos o más
              tr
                td(data-aos="fade-down") Complejidad del diseño
                td(data-aos="fade-down") Menor
                td(data-aos="fade-down") Mayor
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Disponible en Java
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Sí
                td(data-aos="fade-down")(style="background-color: #EEF1F7") No (entre clases)
              tr
                td(data-aos="fade-down") Alternativa en Java
                td(data-aos="fade-down") No aplica
                td(data-aos="fade-down") Interfaces
    p.mb-0(data-aos="fade-down") La comprensión de estos tipos de herencia permite seleccionar la estrategia más adecuada durante el diseño de aplicaciones orientadas a objetos, favoreciendo soluciones organizadas, reutilizables y acordes con las características del lenguaje de programación empleado.
    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Sobrescritura de métodos (#[i override])
    p.mb-4(data-aos="fade-down") La sobrescritura de métodos es un mecanismo de la programación orientada a objetos que permite a una clase derivada proporcionar una implementación propia de un método heredado de la clase base. De esta manera, es posible adaptar o ampliar el comportamiento de un método sin modificar la definición original de la clase padre.
    .bloque-texto-g.cajon.C09.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/img07.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0(data-aos="fade-down") En Java, la sobrescritura se realiza definiendo en la clase derivada un método con el mismo nombre, los mismos parámetros y el mismo tipo de retorno que el método declarado en la clase base. Para indicar que se trata de una sobrescritura, es recomendable utilizar la anotación <em>@Override</em>, la cual facilita la identificación del método y permite al compilador verificar que la sobrescritura se haya realizado correctamente.
    p.mb-4(data-aos="fade-down") A continuación, se presenta un ejemplo de sobrescritura de métodos utilizando el lenguaje de programación Java:
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
    p(data-aos="fade-down") En el ejemplo anterior, la clase <b>Aprendiz</b> hereda el método <b>presentarse()</b> de la clase <b>Persona</b>, pero redefine su comportamiento para expresar un mensaje diferente. Gracias a la sobrescritura, el método mantiene el mismo propósito, aunque su ejecución se adapta a las características de la clase derivada.
    p.mb-0(data-aos="fade-down") La sobrescritura de métodos favorece la reutilización del código y permite especializar el comportamiento de las clases derivadas, contribuyendo al desarrollo de aplicaciones más flexibles y acordes con los principios de la programación orientada a objetos.
    separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Clases y métodos abstractos
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t4/img08.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p(data-aos="fade-down") Las clases abstractas son clases que sirven como modelo para otras clases, permitiendo definir atributos y métodos comunes que podrán ser reutilizados por las clases derivadas. Estas clases no pueden instanciarse directamente, ya que su propósito es establecer una estructura general que posteriormente será especializada mediante la herencia.
        p(data-aos="fade-down") Además de contener atributos y métodos implementados, una clase abstracta puede declarar métodos abstractos, los cuales definen únicamente su nombre, parámetros y tipo de retorno, sin incluir una implementación. Las clases derivadas que heredan de una clase abstracta deben proporcionar la implementación de estos métodos, adaptándolos a sus propias necesidades.
        .cajon.cajon.C08.color-primario.p-4.mb-0
          p.mb-0(data-aos="fade-down") En Java, las clases abstractas se declaran mediante la palabra reservada abstract, la cual también se utiliza para identificar los métodos abstractos.
    p.mb-4(data-aos="fade-down") A continuación, se presenta un ejemplo de una clase abstracta utilizando el lenguaje de programación Java:
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .tarjeta-codigo
          pre.language-plaintext(language="plaintext")
            code
              | abstract class Persona {
              | 
              |     String nombre;
              | 
              |     public abstract void presentarse();
              | }
              | 
              | class Aprendiz extends Persona {
              | 
              |     @Override
              |     public void presentarse() {
              |         System.out.println("Soy un aprendiz del SENA.");
              |     }
              | }
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C02.color-secundario.p-4
          p.mb-0(data-aos="fade-down") En el ejemplo anterior, la clase <b>Persona</b> define el atributo <b>nombre</b> y declara el método abstracto <b>presentarse()</b>, cuya implementación se realiza en la clase <b>Aprendiz</b>. De esta manera, todas las clases que hereden de <b>Persona</b> deberán proporcionar su propia implementación del método, conservando una estructura común y adaptando su comportamiento según el contexto.
    p.mb-0(data-aos="fade-down") El uso de clases y métodos abstractos favorece la reutilización del código, establece una estructura común para las clases relacionadas y facilita el desarrollo de aplicaciones organizadas, flexibles y acordes con los principios de la programación orientada a objetos.
    separador
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.5 Constructores en la herencia
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t4/img09.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        p(data-aos="fade-down") En una relación de herencia, las clases derivadas también utilizan constructores para inicializar sus propios atributos. Cuando se crea un objeto de una clase derivada, primero se ejecuta el constructor de la clase base y, posteriormente, el constructor de la clase derivada. Este proceso garantiza que los atributos heredados y los propios de la nueva clase queden correctamente inicializados.
        .cajon.cajon.C08.color-primario.p-4.mb-0
          p.mb-0(data-aos="fade-down") En Java, la invocación del constructor de la clase base se realiza mediante la palabra reservada super, la cual permite acceder al constructor de la clase padre y reutilizar su proceso de inicialización. De esta manera, se evita duplicar código y se mantiene la coherencia durante la creación de los objetos.
    p.mb-4(data-aos="fade-down") A continuación, se presenta un ejemplo del uso de constructores en una relación de herencia utilizando el lenguaje de programación Java:
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .tarjeta-codigo
          pre.language-plaintext(language="plaintext")
            code
              | class Persona {
              | 
              |     String nombre;
              | 
              |     public Persona(String nombre) {
              |         this.nombre = nombre;
              |     }
              | }
              | 
              | class Aprendiz extends Persona {
              | 
              |     String programa;
              | 
              |     public Aprendiz(String nombre, String programa) {
              |         super(nombre);
              |         this.programa = programa;
              |     }
              | }
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C02.color-secundario.p-4
          p.mb-0(data-aos="fade-down") En el ejemplo anterior, el constructor de la clase <b>Aprendiz</b> invoca mediante <b>super</b> el constructor de la clase <b>Persona</b> para inicializar el atributo <b>nombre</b>. Posteriormente, inicializa el atributo <b>programa</b>, propio de la clase derivada. Este procedimiento garantiza que el objeto se cree con toda la información necesaria, respetando la relación de herencia entre ambas clases.
    p.mb-0(data-aos="fade-down") La utilización de constructores en la herencia favorece la reutilización del código, mantiene una adecuada organización de las clases y asegura una correcta inicialización de los objetos durante el desarrollo de aplicaciones orientadas a objetos.
</template>
<script>
export default {
  name: 'Tema4',
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
