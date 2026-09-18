<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Fundamentos de Programación Orientada a Objetos (POO)
      .bloque-texto-g.cajon.C09.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/img01.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0(data-aos="fade-down") La Programación Orientada a Objetos (POO) es un paradigma de programación que organiza el desarrollo de <em>software</em> mediante objetos, los cuales representan entidades con características (atributos) y comportamientos (métodos). Este enfoque facilita la representación de situaciones del mundo real, favorece la reutilización del código, mejora la organización de las aplicaciones y simplifica su mantenimiento y evolución.
      p.mb-0(data-aos="fade-down") A diferencia de la programación procedimental, que centra el desarrollo en funciones y procedimientos, la POO estructura el <em>software</em> alrededor de objetos que interactúan entre sí para cumplir un propósito específico. Este paradigma constituye una base para el desarrollo de aplicaciones modernas, ya que promueve soluciones modulares, escalables y mantenibles, características necesarias para la implementación de <em>software</em> en entornos de computación en la nube.
      separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.1 Características de la programación orientada a objetos
      p.mb-4(data-aos="fade-down") La programación orientada a objetos se fundamenta en cuatro principios que orientan el diseño y desarrollo de aplicaciones organizadas, reutilizables y fáciles de mantener. Estos principios permiten representar entidades del mundo real mediante clases y objetos, favoreciendo la modularidad, la escalabilidad y la calidad del <em>software</em>.
      AcordionA.mb-0(tipo="a" clase-tarjeta="tarjeta tarjeta--C15" data-aos="zoom-in")
        .row.justify-content-center(titulo="a) Abstracción")
          .col-12.col-lg-10.order-lg-1.order-2
            ul.lista-ul.mb-0
              li.mb-4
                i.lista-ul__vineta
                p.mb-0 <b>Definición</b>: es el proceso mediante el cual se identifican las características esenciales de un objeto, omitiendo aquellos detalles que no son relevantes para el problema que se desea resolver. De esta manera, el desarrollador se concentra en las funcionalidades que ofrece un objeto más que en su implementación interna.
              li.mb-4
                i.lista-ul__vineta
                p.mb-0 <b>Aplicación en el desarrollo de <em>software</em></b>: la abstracción facilita el uso de componentes, bibliotecas y servicios sin necesidad de conocer todos los detalles de su funcionamiento interno, lo que simplifica el desarrollo y favorece la reutilización del <em>software</em>.
              li.mb-4
                i.lista-ul__vineta
                p.mb-0 <b>Ejemplo</b>: al conducir un automóvil, el conductor utiliza el volante, los pedales y la palanca de cambios para operarlo, sin necesidad de conocer el funcionamiento interno del motor.
          .col-12.col-lg-10.order-lg-2.order-1
            figure
              img(src='@/assets/curso/temas/t1/img02.jpg', alt='Imagen decorativa')
        .row.justify-content-center(titulo="b) Encapsulamiento")
          .col-12.col-lg-10.order-lg-1.order-2
            ul.lista-ul.mb-0
              li.mb-4
                i.lista-ul__vineta
                p.mb-0 <b>Definición</b>: consiste en agrupar los datos (atributos) y las operaciones (métodos) que actúan sobre ellos dentro de una misma clase, controlando el acceso a la información mediante mecanismos de visibilidad. Esto protege la integridad de los datos y evita modificaciones no autorizadas.
              li.mb-4
                i.lista-ul__vineta
                p.mb-0 <b>Aplicación en el desarrollo de <em>software</em></b>: el encapsulamiento contribuye a mantener la consistencia de la información, reducir errores y facilitar el mantenimiento de las aplicaciones.
              li.mb-4
                i.lista-ul__vineta
                p.mb-0 <b>Ejemplo</b>: una cápsula farmacéutica protege su contenido y permite acceder a él únicamente de la forma prevista, evitando alteraciones externas.
          .col-12.col-lg-10.order-lg-2.order-1
            figure
              img(src='@/assets/curso/temas/t1/img03.jpg', alt='Imagen decorativa')
        .row.justify-content-center(titulo="c) Herencia")
          .col-12.col-lg-10.order-lg-1.order-2
            ul.lista-ul.mb-0
              li.mb-4
                i.lista-ul__vineta
                p.mb-0 <b>Definición</b>: es el mecanismo mediante el cual una clase puede adquirir atributos y métodos de otra clase, permitiendo reutilizar funcionalidades comunes y especializar comportamientos cuando sea necesario.
              li.mb-4
                i.lista-ul__vineta
                p.mb-0 <b>Aplicación en el desarrollo de <em>software</em></b>: la herencia favorece la reutilización del código, disminuye la duplicidad de funcionalidades y facilita la creación de jerarquías entre clases relacionadas.
              li.mb-4
                i.lista-ul__vineta
                p.mb-0 <b>Ejemplo</b>: un teléfono inteligente conserva funciones básicas de comunicación presentes en modelos anteriores, incorporando nuevas características como acceso a internet o aplicaciones móviles.
          .col-12.col-lg-10.order-lg-2.order-1
            figure
              img(src='@/assets/curso/temas/t1/img04.jpg', alt='Imagen decorativa')
        .row.justify-content-center(titulo="d) Polimorfismo")
          .col-12.col-lg-10.order-lg-1.order-2
            ul.lista-ul.mb-0
              li.mb-4
                i.lista-ul__vineta
                p.mb-0 <b>Definición</b>: es la capacidad de que una misma operación pueda ejecutarse de manera diferente según el tipo de objeto que la implemente. Esto permite utilizar una interfaz común para trabajar con objetos de distintas clases.
              li.mb-4
                i.lista-ul__vineta
                p.mb-0 <b>Aplicación en el desarrollo de <em>software</em></b>: el polimorfismo incrementa la flexibilidad del código, facilita su extensión y favorece el desarrollo de aplicaciones adaptables a diferentes escenarios.
              li.mb-4
                i.lista-ul__vineta
                p.mb-0 <b>Ejemplo</b>: al seleccionar la opción Imprimir en una aplicación, el mismo comando puede enviar la información a una impresora láser, una impresora de tinta o un archivo PDF, dependiendo del dispositivo o destino configurado.
          .col-12.col-lg-10.order-lg-2.order-1
            figure
              img(src='@/assets/curso/temas/t1/img05.jpg', alt='Imagen decorativa')
      separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.2 Clases y objetos
      .row.justify-content-center.mb-4
        .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/t1/img06.jpg', alt='Imagen decorativa')
        .col.col-lg-8.col-12.order-lg-2.order-2
          .cajon.cajon.C08.color-primario.p-4.mb-3
            p.mb-0(data-aos="fade-down") Las clases y los objetos constituyen los elementos fundamentales de la programación orientada a objetos. Aunque están estrechamente relacionados, representan conceptos diferentes. Una clase define la estructura y el comportamiento que compartirán un conjunto de objetos mediante atributos y métodos, mientras que un objeto corresponde a una instancia creada a partir de esa clase durante la ejecución del programa.
          p.mb-0(data-aos="fade-down") En otras palabras, la clase funciona como una plantilla que establece las características comunes de una entidad, mientras que los objetos representan las instancias que interactúan dentro de la aplicación. Cada objeto posee su propio estado, determinado por los valores de sus atributos, pero comparte la estructura y el comportamiento definidos por la clase.
      p.mb-4(data-aos="fade-down") La creación de un objeto es un proceso que inicia durante la etapa de diseño del <em>software</em> y finaliza cuando la aplicación se encuentra en ejecución. A continuación, se presenta de manera general esta secuencia.
      .row.justify-content-center.mb-4(data-aos="flip-up")
        .col-lg-10.col-12
          .titulo-sexto.color-acento-contenido
            h5 Figura 1.
            span Cronología del ciclo de diseño a ejecución
        .row.justify-content-center
          .col-10
            figure.desktop
              img(src='@/assets/curso/temas/t1/img07.svg', alt='En la figura 1 se presenta el proceso mediante el cual una clase, definida durante la fase de diseño del <em>software</em>, da origen a un objeto mediante la instanciación durante la ejecución de la aplicación.')
        .col-12.mb-0
          figure.movil
            img(src='@/assets/curso/temas/t1/img08.svg', alt='En la figura 1 se presenta el proceso mediante el cual una clase, definida durante la fase de diseño del <em>software</em>, da origen a un objeto mediante la instanciación durante la ejecución de la aplicación.')
      .row.justify-content-center.align-items-center.mb-4
        .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/t1/img09.svg', alt='Imagen decorativa')
        .col.col-lg-8.col-12.order-lg-2.order-2
          p.mb-0(data-aos="fade-down") En la figura 1 se evidencia que, durante la fase de diseño, el desarrollador define la clase mediante el código fuente. Posteriormente, cuando la aplicación se ejecuta, el lenguaje de programación crea los objetos mediante el proceso de instanciación, asignando la memoria necesaria para que puedan almacenar información y ejecutar las operaciones definidas en la clase.
      .row.justify-content-center.mb-4
        .col.col-lg-10.col-12
          .cajon.color-secundario.cajon.C02.p-4
            p.mb-0(data-aos="fade-down") Comprender esta diferencia resulta fundamental para diseñar aplicaciones orientadas a objetos, ya que una misma clase puede utilizarse para crear múltiples objetos independientes que colaboran entre sí durante la ejecución del <em>software</em>.
      p.mb-4(data-aos="fade-down") Aunque ambos conceptos mantienen una relación directa, presentan diferencias en cuanto a su propósito, existencia y comportamiento durante la ejecución de una aplicación. La siguiente tabla resume las principales características que permiten distinguir una clase de un objeto.
      .row.justify-content-center.mb-4(data-aos="flip-up")
        .col.col-12
          .titulo-sexto.color-acento-contenido
            h5 Tabla 1.
            span Comparativa entre clases y objetos
          .tabla-a.color-acento-contenido
            table
              thead
                tr
                  th(data-aos="fade-down")(style= "width: 30%") Criterio de comparación
                  th(data-aos="fade-down")(style= "width: 35%") Clase
                  th(data-aos="fade-down")(style= "width: 35%") Objeto (instancia)
              tbody
                tr
                  td(data-aos="fade-down")(style="background-color: #EEF1F7") Naturaleza
                  td(data-aos="fade-down")(style="background-color: #EEF1F7") Define la estructura y el comportamiento de una entidad.
                  td(data-aos="fade-down")(style="background-color: #EEF1F7") Es una instancia creada a partir de una clase.
                tr
                  td(data-aos="fade-down") Propósito
                  td(data-aos="fade-down") Sirve como plantilla para crear objetos.
                  td(data-aos="fade-down") Representa una entidad específica con valores propios para sus atributos.
                tr
                  td(data-aos="fade-down")(style="background-color: #EEF1F7") Existencia
                  td(data-aos="fade-down")(style="background-color: #EEF1F7") Se define durante el desarrollo del <em>software</em> mediante el código fuente.
                  td(data-aos="fade-down")(style="background-color: #EEF1F7") Se crea durante la ejecución de la aplicación cuando es requerido.
                tr
                  td(data-aos="fade-down") Ubicación durante la ejecución
                  td(data-aos="fade-down") Su definición forma parte del programa y sirve como referencia para crear objetos.
                  td(data-aos="fade-down") Se almacena en memoria mientras permanece en uso por la aplicación.
                tr
                  td(data-aos="fade-down")(style="background-color: #EEF1F7") Cantidad
                  td(data-aos="fade-down")(style="background-color: #EEF1F7") Una clase puede utilizarse para crear múltiples objetos.
                  td(data-aos="fade-down")(style="background-color: #EEF1F7") Pueden existir numerosas instancias de una misma clase, cada una con información diferente.
                tr
                  td(data-aos="fade-down") Ciclo de vida
                  td(data-aos="fade-down") Permanece como parte de la estructura del <em>software</em>.
                  td(data-aos="fade-down") Existe mientras la aplicación requiere su utilización; posteriormente libera los recursos asociados.
      p.mb-4(data-aos="fade-down") Como ejemplo, una aplicación de gestión académica puede definir una clase denominada Aprendiz, la cual contiene atributos como nombre, documento y programa de formación, además de métodos para registrar información o consultar el estado del aprendiz. Durante la ejecución del sistema, cada persona registrada corresponde a un objeto diferente creado a partir de esa misma clase, conservando la misma estructura, pero almacenando información propia.
      .row.justify-content-center.align-items-center.mb-0
        .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/t1/img10.svg', alt='Imagen decorativa')
        .col.col-lg-9.col-12.order-lg-2.order-2
          .cajon.cajon.C03.px-4.py-3
            p.mb-0(data-aos="fade-down") Esta capacidad de crear múltiples objetos a partir de una única definición favorece la reutilización del código, facilita el mantenimiento del <em>software</em> y permite desarrollar aplicaciones más organizadas, escalables y fáciles de evolucionar.
      separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.3 Atributos y métodos
      p.mb-4(data-aos="fade-down") Los objetos se caracterizan por dos elementos fundamentales: los atributos, que describen sus características o estado, y los métodos, que representan las acciones o comportamientos que pueden realizar. La combinación de estos elementos permite modelar entidades del mundo real y definir cómo interactúan dentro de una aplicación.
      .row.justify-content-center.mb-4
        .col-12
          .d-flex.align-items-center(data-aos="flip-down")
            .flex-shrink-0(style="z-index: 2;")
              figure.mb-0
                img(src='@/assets/curso/temas/ico.svg', style="width: 55px;", alt='').m-auto
            .titulo01.p-2(style="z-index: 1; margin-left: -20px; padding-left: 30px !important;")
              h3.mb-0.me-3 Atributos
      .row.justify-content-center.mb-4
        .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/t1/img11.jpg', alt='Imagen decorativa')
        .col.col-lg-8.col-12.order-lg-1.order-2
          p.mb-4(data-aos="fade-down") Los atributos corresponden a las propiedades o características que describen un objeto. Cada atributo almacena información que identifica el estado del objeto en un momento determinado. Estos pueden representar diferentes tipos de datos, como texto, números, fechas o valores lógicos.
          .cajon.cajon.C02.color-secundario.p-4.mb-4
            p.mb-0(data-aos="fade-down") Por ejemplo, en una clase denominada Aprendiz, algunos atributos podrían ser nombre, documento, programa de formación y estado de matrícula. Cada objeto creado a partir de esta clase tendrá valores propios para dichos atributos.
          p.mb-0(data-aos="fade-down") Con el fin de proteger la información y garantizar su integridad, los atributos generalmente se mantienen con acceso restringido. Su consulta o modificación se realiza mediante métodos definidos para tal propósito, aplicando el principio de encapsulamiento.
      .row.justify-content-center.mb-4
        .col-12
          .d-flex.align-items-center(data-aos="flip-down")
            .flex-shrink-0(style="z-index: 2;")
              figure.mb-0
                img(src='@/assets/curso/temas/ico.svg', style="width: 55px;", alt='').m-auto
            .titulo01.p-2(style="z-index: 1; margin-left: -20px; padding-left: 30px !important;")
              h3.mb-0.me-3 Métodos
      .row.justify-content-center.mb-4
        .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/t1/img12.jpg', alt='Imagen decorativa')
        .col.col-lg-8.col-12.order-lg-2.order-2
          p.mb-3(data-aos="fade-down") Los métodos representan las acciones o comportamientos que puede ejecutar un objeto. Mediante ellos es posible procesar información, modificar el estado de un objeto o interactuar con otros objetos dentro del sistema.
          .cajon.cajon.C02.color-secundario.p-4.mb-3
            p.mb-0(data-aos="fade-down") Por ejemplo, una clase <b>Aprendiz</b> podría disponer de métodos como matricular(), actualizarDatos(), consultarEstado() o finalizarPrograma(), los cuales permiten realizar operaciones relacionadas con la información del aprendiz.
          p.mb-0(data-aos="fade-down") Los métodos también pueden recibir parámetros, devolver resultados o ejecutar procesos internos necesarios para el funcionamiento de la aplicación.
      p.mb-4(data-aos="fade-down") A continuación, se presenta un ejemplo simplificado de la estructura de una clase, en la que se identifican sus atributos y métodos:
      .row.justify-content-center.mb-0
        .col-lg-10.col-12
          .tarjeta-codigo
            pre.language-plaintext(language="plaintext")
              code
                | Clase: Aprendiz
                |
                | Atributos
                | - documento: String
                | - nombre: String
                | - programa: String
                | - estadoMatricula: Boolean
                |
                | Métodos
                | + matricular()
                | + actualizarDatos()
                | + consultarEstado()
                | + finalizarPrograma()
      separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.4 Entradas y salidas en aplicaciones orientadas a objetos
      p.mb-4(data-aos="fade-down") Las aplicaciones orientadas a objetos funcionan mediante la interacción entre diferentes objetos que reciben información, ejecutan operaciones y generan resultados. Este intercambio de datos constituye el flujo de entrada y salida de información dentro de una aplicación y permite que los objetos colaboren para cumplir las funcionalidades definidas por el sistema.
      .row.justify-content-center.mb-4
        .col.col-lg-6.col-12.mb-4.mb-lg-0(data-aos="fade-left")
          .tarjeta-avatar-b
            .tarjeta-avatar-b__img
              .col-lg-12(data-aos="flip-up")
                img(src='@/assets/curso/temas/t1/img13.svg' alt="Imagen decorativa")
            .tarjeta.tarjeta--C07.px-5.py-3
              .p-4
                p.mb-0 Las <b>entradas</b> corresponden a la información que recibe un objeto para ejecutar una determinada operación. Estos datos pueden provenir del usuario, de otro objeto, de una base de datos o de un servicio externo. Una vez recibida la información, el objeto procesa los datos mediante los métodos definidos en su clase.
        .col.col-lg-6.col-12.mb-4.mb-lg-0(data-aos="fade-left")
          .tarjeta-avatar-b
            .tarjeta-avatar-b__img
              .col-lg-12(data-aos="flip-up")
                img(src='@/assets/curso/temas/t1/img14.svg' alt="Imagen decorativa")
            .tarjeta.tarjeta--C07.px-5.py-3
              .p-4
                p.mb-0 Las <b>salidas</b> representan los resultados generados después del procesamiento. Dependiendo de la funcionalidad desarrollada, el resultado puede mostrarse al usuario, almacenarse en una base de datos, enviarse a otro componente del sistema o utilizarse como entrada para nuevos procesos.
      p.mb-4(data-aos="fade-down") A continuación, se presenta el flujo general de procesamiento de información en una aplicación orientada a objetos:
      .row.justify-content-center.mb-4(data-aos="flip-up")
        .col-lg-10.col-12
          .titulo-sexto.color-acento-contenido
            h5 Figura 2.
            span Flujo general de entrada y salida de información en una aplicación orientada a objetos
        .row.justify-content-center
          .col-10
            figure.desktop
              img(src='@/assets/curso/temas/t1/img15.svg', alt='En la figura 2 se presenta el flujo general de entrada y salida de información en una aplicación orientada a objetos, desde la recepción de los datos hasta la generación de la respuesta.')
        .col-12.mb-0
          figure.movil
            img(src='@/assets/curso/temas/t1/img16.svg', alt='En la figura 2 se presenta el flujo general de entrada y salida de información en una aplicación orientada a objetos, desde la recepción de los datos hasta la generación de la respuesta.')
      p(data-aos="fade-down") En este proceso se puede identificar cómo la información es recibida por la aplicación, procesada por los objetos que conforman la lógica del sistema y posteriormente transformada en una respuesta para el usuario o para otros componentes de la aplicación. Aunque en aplicaciones modernas este intercambio suele realizarse mediante protocolos de comunicación y formatos de intercambio de datos, el principio fundamental continúa siendo el mismo: recibir información, procesarla y generar un resultado.
      p.mb-4(data-aos="fade-down") Ejemplo de procesamiento de información:
      .row.justify-content-center.mb-4
        .col-12.col-lg-10(data-aos="fade-right")
          .tarjeta-segmentacion
            .tarjeta-segmentacion__wrap-img
              img(src='@/assets/curso/temas/t1/img17.jpg', alt='Imagen decorativa')
            .tarjeta-segmentacion__wrap-text
              p.mb-3 Supóngase una aplicación para la gestión de aprendices del SENA.
              p.mb-1 <b>Entrada:</b> el usuario registra el nombre, el número de documento y el programa de formación.
              p.mb-1 <b>Procesamiento:</b> el objeto Aprendiz valida la información recibida y ejecuta el método registrar().
              p.mb-0 <b>Salida:</b> la aplicación confirma el registro y almacena la información correspondiente.
      .row.justify-content-center.align-items-center.mb-4
        .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/t1/img18.svg', alt='Imagen decorativa')
        .col.col-lg-9.col-12.order-lg-2.order-2
          .cajon.cajon.C03.px-4.py-3
            p.mb-0(data-aos="fade-down") Este flujo de trabajo demuestra cómo los objetos reciben información, ejecutan operaciones mediante sus métodos y generan resultados como parte del funcionamiento normal de una aplicación orientada a objetos.
      p.mb-4(data-aos="fade-down") Los procesos descritos anteriormente se apoyan en los principios fundamentales de la programación orientada a objetos, los cuales orientan el diseño de aplicaciones organizadas, reutilizables y fáciles de mantener. Estos principios son:
      .desktop
        .row.mb-0
          .col-6.col-md-3.mb-4.mb-xl-0
            .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
              .indicador--hover(v-if="indicadorTarjetaSlide")
              .tarjeta-slide__contenedor
                .tarjeta-slide__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/img19.png')})`}")
                .tarjeta-slide__contenido.p-auto.p-xl-5
                  h4 Abstracción
                  p.mb-0 Permite representar únicamente las características esenciales de un objeto, ocultando los detalles innecesarios para el problema que se desea resolver.
          .col-6.col-md-3.mb-4.mb-xl-0
            .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
              .tarjeta-slide__contenedor
                .tarjeta-slide__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/img20.png')})`}")
                .tarjeta-slide__contenido.p-auto.p-xl-5
                  h4 Encapsulamiento
                  p.mb-0 Protege la información contenida en los objetos mediante el control del acceso a sus atributos y métodos, favoreciendo la integridad de los datos.
          .col-6.col-md-3.mb-4.mb-xl-0
            .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
              .tarjeta-slide__contenedor
                .tarjeta-slide__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/img21.png')})`}")
                .tarjeta-slide__contenido.p-auto.p-xl-5
                  h4 Herencia
                  p.mb-0 Posibilita crear nuevas clases a partir de otras existentes, reutilizando atributos y métodos comunes para facilitar el desarrollo y mantenimiento del <em>software</em>.
          .col-6.col-md-3.mb-4.mb-xl-0
            .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
              .tarjeta-slide__contenedor
                .tarjeta-slide__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/img22.png')})`}")
                .tarjeta-slide__contenido.p-auto.p-xl-5
                  h4 Polimorfismo
                  p.mb-0 Permite que una misma operación tenga diferentes comportamientos según el objeto que la implemente, proporcionando mayor flexibilidad y extensibilidad a las aplicaciones.
      .movil.mb-0
        .row.justify-content-center.align-items-center.mb-5
          .col-md-10.col-12
            .tarjeta.tarjeta--C05.p-4
              figure.mb-3
                img(src='@/assets/curso/temas/t1/img23.png', alt='Imagen decorativa')
              h4 Abstracción
              p.mb-0 Permite representar únicamente las características esenciales de un objeto, ocultando los detalles innecesarios para el problema que se desea resolver.
        .row.justify-content-center.align-items-center.mb-5
          .col-md-10.col-12
            .tarjeta.tarjeta--C05.p-4
              figure.mb-3
                img(src='@/assets/curso/temas/t1/img24.png', alt='Imagen decorativa')
              h4 Encapsulamiento
              p.mb-0 Protege la información contenida en los objetos mediante el control del acceso a sus atributos y métodos, favoreciendo la integridad de los datos.
        .row.justify-content-center.align-items-center.mb-5
          .col-md-10.col-12
            .tarjeta.tarjeta--C05.p-4
              figure.mb-3
                img(src='@/assets/curso/temas/t1/img25.png', alt='Imagen decorativa')
              h4 Herencia
              p.mb-0 Posibilita crear nuevas clases a partir de otras existentes, reutilizando atributos y métodos comunes para facilitar el desarrollo y mantenimiento del <em>software</em>.
        .row.justify-content-center.align-items-center.mb-5
          .col-md-10.col-12
            .tarjeta.tarjeta--C05.p-4
              figure.mb-3
                img(src='@/assets/curso/temas/t1/img26.png', alt='Imagen decorativa')
              h4 Polimorfismo
              p.mb-0 Permite que una misma operación tenga diferentes comportamientos según el objeto que la implemente, proporcionando mayor flexibilidad y extensibilidad a las aplicaciones.
        p.mb-0(data-aos="fade-down") La aplicación conjunta de estos principios favorece el desarrollo de <em>software</em> modular, facilita la reutilización del código y contribuye a construir aplicaciones escalables, mantenibles y adaptables a diferentes necesidades.
      separador
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.5 Interacción entre objetos
      .bloque-texto-g.cajon.C09.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/img27.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0(data-aos="fade-down") En una aplicación orientada a objetos, los objetos no funcionan de manera aislada. Para cumplir con los requerimientos del sistema, interactúan entre sí mediante el intercambio de información y la invocación de métodos. Esta colaboración permite distribuir las responsabilidades entre diferentes objetos, favoreciendo la organización, reutilización y mantenibilidad del <em>software</em>.
      p(data-aos="fade-down") La interacción se produce cuando un objeto solicita a otro la ejecución de una operación específica. Para ello, envía un mensaje acompañado, si es necesario, de los datos requeridos para realizar la tarea. El objeto receptor procesa la solicitud mediante uno de sus métodos y devuelve el resultado correspondiente.
      p.mb-4(data-aos="fade-down") La comunicación entre objetos puede involucrar diferentes acciones, entre las que se destacan:
      .row.justify-content-center.mb-4(data-aos="flip-up")
        .col.col-12
          .tarjeta--container.row
            .col-xl.col-lg-6.tarjeta.tarjeta--C12.p-5
              .row.justify-content-center.mb-3
                .col-lg-5.col-4
                  figure(data-aos="fade-up")
                    img(src='@/assets/curso/temas/t1/img28.svg', alt='Imagen decorativa')(style="width: 100%")
              h4.text-center Invocación de métodos
              p.mb-0(data-aos="fade-down") Un objeto solicita a otro la ejecución de una operación determinada.
            .col-xl.col-lg-6.tarjeta.tarjeta--C13.p-5
              .row.justify-content-center.mb-3
                .col-lg-5.col-4
                  figure(data-aos="fade-up")
                    img(src='@/assets/curso/temas/t1/img29.svg', alt='Imagen decorativa')(style="width: 100%")
              h4.text-center Intercambio de información
              p.mb-0(data-aos="fade-down") Los objetos envían o reciben datos necesarios para realizar un proceso.
            .col-xl.col-lg-6.tarjeta.tarjeta--C14.p-5
              .row.justify-content-center.mb-3
                .col-lg-5.col-4
                  figure(data-aos="fade-up")
                    img(src='@/assets/curso/temas/t1/img30.svg', alt='Imagen decorativa')(style="width: 100%")
              h4.text-center Paso de parámetros
              p.mb-0(data-aos="fade-down") Un método recibe información suministrada por otro objeto para ejecutar una tarea específica.
            .col-xl.col-lg-6.tarjeta.tarjeta--C17.p-5
              .row.justify-content-center.mb-3
                .col-lg-5.col-4
                  figure(data-aos="fade-up")
                    img(src='@/assets/curso/temas/t1/img31.svg', alt='Imagen decorativa')(style="width: 100%")
              h4.text-center Retorno de resultados
              p.mb-0(data-aos="fade-down") Una vez finalizado el procesamiento, el método puede devolver un valor o confirmar la ejecución de la operación.
      .row.justify-content-center.mb-4
        .col-lg-10.col-12
          .cajon.cajon.C08.color-primario.p-4
            .row.align-items-center
              .col-lg-auto.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/t1/img32.svg', alt='Imagen decorativa')
              .col-lg-10.col-12
                p.mb-0 Como ejemplo, en una aplicación de gestión académica, el objeto <b>Aprendiz</b> puede solicitar al objeto <b>Curso</b> la información correspondiente a un programa de formación. Posteriormente, el objeto <b>Curso</b> consulta los datos disponibles y devuelve la información solicitada, permitiendo que el objeto <b>Aprendiz</b> continúe con el proceso de matrícula o consulta.
      p.mb-4(data-aos="fade-down") A continuación, se presenta un ejemplo simplificado de la interacción entre objetos dentro de una aplicación orientada a objetos.
      .row.justify-content-center.mb-4(data-aos="flip-up")
        .col-lg-10.col-12
          .titulo-sexto.color-acento-contenido
            h5 Figura 3.
            span Interacción entre objetos en una aplicación orientada a objetos
        .row.justify-content-center
          .col-10
            figure.desktop
              img(src='@/assets/curso/temas/t1/img33.svg', alt='En la figura 3 se presenta el intercambio de mensajes entre diferentes objetos para ejecutar una funcionalidad del sistema, evidenciando cómo cada objeto asume responsabilidades específicas y colabora con los demás para dar respuesta a una solicitud.')
        .col-12.mb-0
          figure.movil
            img(src='@/assets/curso/temas/t1/img34.svg', alt='En la figura 3 se presenta el intercambio de mensajes entre diferentes objetos para ejecutar una funcionalidad del sistema, evidenciando cómo cada objeto asume responsabilidades específicas y colabora con los demás para dar respuesta a una solicitud.')
      p.mb-0(data-aos="fade-down") La interacción entre objetos constituye uno de los principios fundamentales de la programación orientada a objetos, ya que permite desarrollar aplicaciones modulares, escalables y de fácil mantenimiento mediante la colaboración entre clases con responsabilidades claramente definidas.
  </template>
<script>
export default {
  name: 'Tema1',
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
