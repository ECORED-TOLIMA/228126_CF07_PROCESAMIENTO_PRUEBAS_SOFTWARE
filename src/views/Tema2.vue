<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Modelado y diseño de #[i <em>software</em>]
    p.mb-4(data-aos="fade-down") El modelado y diseño de <em>software</em> constituye una etapa fundamental del proceso de desarrollo, ya que permite definir la estructura, el comportamiento y la organización de una aplicación antes de iniciar su implementación. Durante esta fase se analizan los requerimientos del sistema, se identifican sus componentes y se establecen las relaciones e interacciones necesarias para satisfacer las necesidades del usuario.
    .bloque-texto-g.bloque-texto-g--inverso.cajon.C09.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") El modelado facilita la representación gráfica de una solución mediante notaciones estandarizadas, lo que favorece la comprensión del sistema, la comunicación entre los integrantes del equipo de desarrollo y la identificación de posibles inconsistencias antes de la etapa de codificación. Asimismo, el diseño proporciona una guía para construir aplicaciones organizadas, mantenibles y escalables, reduciendo el riesgo de errores durante su desarrollo.
    p.mb-0(data-aos="fade-down") En este contexto, el Lenguaje Unificado de Modelado (UML) constituye uno de los estándares más utilizados para representar la estructura y el comportamiento de los sistemas orientados a objetos, mediante diagramas que apoyan las actividades de análisis, diseño, documentación y mantenimiento del <em>software</em>.
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Fundamentos del modelado UML
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C01.p-4.h-100.w-100
          .row.mb-3
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t2/img03.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              p.mb-0(data-aos="fade-down") El Lenguaje Unificado de Modelado (UML, por sus siglas en inglés Unified Modeling Language) es un estándar utilizado para representar de forma gráfica la estructura y el comportamiento de un sistema de <em>software</em>. Su propósito es facilitar el análisis, diseño, documentación y comunicación de las diferentes partes que conforman una aplicación antes de su implementación.
          p.mb-0(data-aos="fade-down") UML proporciona un conjunto de diagramas y elementos gráficos estandarizados que permiten describir componentes como clases, objetos, relaciones, procesos e interacciones. Gracias a esta representación visual, los equipos de desarrollo pueden comprender con mayor facilidad la organización del sistema, validar el diseño y realizar ajustes antes de iniciar la etapa de codificación.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t2/img02.jpg', alt='Imagen decorativa')
    p(data-aos="fade-down") Es importante destacar que UML no es un lenguaje de programación ni una metodología de desarrollo. Se trata de un lenguaje de modelado que complementa el proceso de desarrollo de <em>software</em>, proporcionando una notación común para representar diferentes perspectivas de una aplicación.
    p.mb-4(data-aos="fade-down") Entre las principales ventajas del uso de UML se encuentran:
    .row.mb-4
      .col-12
        .px-0.py-0
          .row.align-items-center.bg01(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-2
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/t2/img04.png", alt="Imagen decorativa")
            .col-lg-8.px-0.py-4
              SlyderF.custom.color-acento-botones.px-lg-5.py-0.px-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img05.svg", alt="Imagen decorativa").img100.m-auto
                  p Facilitar la comprensión de la estructura y el funcionamiento del <em>software</em>.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img06.svg", alt="Imagen decorativa").img100.m-auto
                  p Favorecer la comunicación entre los integrantes del equipo de desarrollo y demás interesados en el proyecto.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img07.svg", alt="Imagen decorativa").img100.m-auto
                  p Documentar las características del sistema de manera organizada y estandarizada.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img08.svg", alt="Imagen decorativa").img100.m-auto
                  p Identificar posibles inconsistencias durante las etapas de análisis y diseño.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img09.svg", alt="Imagen decorativa").img100.m-auto
                  p Servir como guía para la implementación, el mantenimiento y la evolución del <em>software</em>.
    p.mb-0(data-aos="fade-down") La utilización de UML favorece la representación clara y organizada de un sistema de <em>software</em>, proporcionando una base común para su análisis, diseño, documentación y mantenimiento.
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Elementos básicos del UML
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t2/img10.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        .cajon.cajon.C08.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") UML emplea un conjunto de elementos gráficos que permiten representar la estructura y el comportamiento de un sistema de <em>software</em>. En el modelado orientado a objetos, estos elementos facilitan la descripción de las entidades que conforman una aplicación, sus características y la forma en que interactúan entre sí.
        p.mb-0(data-aos="fade-down") Los elementos básicos de UML constituyen la base para representar de forma gráfica la estructura de un sistema de <em>software</em>, facilitando su comprensión, organización y documentación durante las etapas de análisis y diseño.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-4.col-12.order-lg-2.order-2
        .cajon.cajon.C03.px-4.py-3
          p.mb-0.text-center(data-aos="fade-down") Los principales elementos son los siguientes:
    .row.bg02.justify-content-center.align-items-center.px-3.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Clase")
            .col-12.mb-4.mb-md-0
              p.mb-0 Representa una plantilla o modelo que define las características y los comportamientos comunes de un conjunto de objetos. En UML, una clase se representa mediante un rectángulo dividido en compartimentos donde se registra su nombre, atributos y operaciones.
          .row(numero="2" titulo="Objeto")
            .col-12.mb-4.mb-md-0
              p.mb-0 Es una instancia creada a partir de una clase durante la ejecución de una aplicación. Cada objeto posee valores propios para sus atributos y puede ejecutar los métodos definidos por la clase de la que proviene.
          .row(numero="3" titulo="Atributos")
            .col-12.mb-4.mb-md-0
              p.mb-0 Corresponden a las características o propiedades que describen el estado de una clase u objeto. Permiten almacenar la información necesaria para representar sus condiciones o datos.
          .row(numero="4" titulo="Operaciones (métodos)")
            .col-12.mb-4.mb-md-0
              p.mb-0 Representan las acciones o funciones que una clase puede ejecutar. Definen el comportamiento de los objetos y permiten modificar o consultar la información almacenada en sus atributos.
          .row(numero="5" titulo="Relaciones")
            .col-12.mb-4.mb-md-0
              p.mb-0 Permiten representar los vínculos existentes entre dos o más clases, indicando cómo interactúan o dependen unas de otras dentro del sistema. Estas relaciones facilitan la organización y comprensión de la estructura del <em>software</em>.
      .col-lg-4.col-sm-4.col-5.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t2/img11.png', alt='Imagen decorativa')
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span Elementos básicos de UML
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/t2/img12.svg', alt='En la figura 4 se presentan los principales elementos de UML utilizados en el modelado orientado a objetos, exponiendo una clase con sus atributos y operaciones.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/temas/t2/img13.svg', alt='En la figura 4 se presentan los principales elementos de UML utilizados en el modelado orientado a objetos, exponiendo una clase con sus atributos y operaciones.')
    p.mb-0(data-aos="fade-down") El conocimiento de estos elementos facilita la comprensión de los modelos de <em>software</em> y su representación mediante UML, favoreciendo el análisis, el diseño y la documentación de los sistemas de manera organizada y estandarizada.
    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Diagramas de clases
    .row.justify-content-center.mb-4
      .col.col-lg-6.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t2/img14.jpg', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-1.order-2
        p.mb-2(data-aos="fade-down") El diagrama de clases es uno de los principales diagramas de UML para representar la estructura estática de un sistema de <em>software</em> orientado a objetos. Mediante este diagrama es posible identificar las clases que conforman el sistema, sus atributos, operaciones y las relaciones que existen entre ellas, permitiendo visualizar de manera organizada la estructura del sistema que se desea desarrollar.
        .cajon.cajon.C08.color-primario.p-4.mb-0
          p.mb-0(data-aos="fade-down") Su elaboración facilita el análisis y diseño del <em>software</em>, ya que permite representar gráficamente la organización del sistema antes de iniciar la etapa de implementación. Además, constituye una herramienta útil para documentar la estructura de una aplicación y favorecer la comunicación entre los integrantes del equipo de desarrollo.
    p.mb-4(data-aos="fade-down") En un diagrama de clases, cada clase se representa mediante un rectángulo dividido en tres compartimentos:
    .row.justify-content-center.mb-0(data-aos="flip-down")
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/t2/img15.svg", alt="alt").img80.m-auto
          h5.text-center Nombre de la clase
          p Identifica la clase dentro del modelo.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/t2/img16.svg", alt="alt").img80.m-auto
          h5.text-center Atributos
          p Describen las características o propiedades de la clase.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/t2/img17.svg", alt="alt").img80.m-auto
          h5.text-center Operaciones (métodos)
          p Representan las acciones o funciones que la clase puede realizar.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 5.
          span Representación de una clase en un diagrama UML
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/t2/img18.svg', alt='En la figura 5 se evidencia la representación de una clase mediante un diagrama UML, compuesta por el nombre de la clase, sus atributos y las operaciones que describen su comportamiento.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/temas/t2/img19.svg', alt='En la figura 5 se evidencia la representación de una clase mediante un diagrama UML, compuesta por el nombre de la clase, sus atributos y las operaciones que describen su comportamiento.')
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-auto.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t2/img20.svg', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C03.px-4.py-2
          p.mb-0(data-aos="fade-down") La representación gráfica de las clases mediante UML facilita la organización y comprensión de la estructura de un sistema de <em>software</em>, constituyendo un recurso fundamental para el análisis, el diseño y la documentación de aplicaciones orientadas a objetos.
    p.mb-4(data-aos="fade-down") Además de la representación de las clases, UML emplea símbolos para indicar el nivel de visibilidad o acceso de los atributos y las operaciones. Estos símbolos corresponden a los especificadores de acceso que posteriormente se implementan mediante la sintaxis del lenguaje de programación utilizado. Esta notación facilita la interpretación de los diagramas y permite identificar el alcance de cada elemento dentro del modelo.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Notación de visibilidad (especificadores de acceso)
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Símbolo
                th(data-aos="fade-down")(style= "width: 20%") Visibilidad
                th(data-aos="fade-down")(style= "width: 60%") Descripción
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") +
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Pública (public)
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Puede ser utilizada desde cualquier clase del sistema.
              tr
                td(data-aos="fade-down") -
                td(data-aos="fade-down") Privada (private)
                td(data-aos="fade-down") Solo puede utilizarse dentro de la misma clase.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") #
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Protegida (protected)
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Puede utilizarse dentro de la clase y por las clases derivadas.
              tr
                td(data-aos="fade-down") ~
                td(data-aos="fade-down") Paquete (package)
                td(data-aos="fade-down") Puede utilizarse por las clases que pertenecen al mismo paquete.
    p.mb-0(data-aos="fade-down") La utilización de estas convenciones permite interpretar con mayor precisión los diagramas de clases y comprender el nivel de acceso definido para los diferentes elementos que conforman el modelo.
    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Relaciones entre clases
    p.mb-4(data-aos="fade-down") Las relaciones entre clases permiten representar la forma en que los diferentes elementos de un sistema de <em>software</em> se vinculan e interactúan dentro de un modelo orientado a objetos. Estas relaciones facilitan la comprensión de la estructura del sistema y muestran cómo las clases colaboran para cumplir una determinada funcionalidad.
    .bloque-texto-g.bloque-texto-g--inverso.cajon.C09.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/img21.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") En UML, las relaciones se representan mediante líneas y símbolos específicos que indican el tipo de vínculo existente entre las clases. Su correcta utilización favorece la organización del diseño, mejora la comunicación entre los integrantes del equipo de desarrollo y contribuye a la elaboración de modelos más claros y consistentes.
    p.mb-4(data-aos="fade-down") Los principales tipos de relaciones utilizados en los diagramas de clases son los siguientes:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C12.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t2/img22.svg', alt='Imagen decorativa')(style="width: 100%")
            h4.text-center Asociación
            p.mb-0(data-aos="fade-down") Representa un vínculo estructural entre dos o más clases, indicando que existe una relación entre ellas para intercambiar información o colaborar en el cumplimiento de una función.
          .col-xl.col-lg-6.tarjeta.tarjeta--C13.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t2/img23.svg', alt='Imagen decorativa')(style="width: 100%")
            h4.text-center Agregación
            p.mb-0(data-aos="fade-down") Es una forma especial de asociación que expresa una relación de tipo todo-parte, donde los objetos pueden existir de manera independiente del objeto que los agrupa.
          .col-xl.col-lg-6.tarjeta.tarjeta--C14.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t2/img24.svg', alt='Imagen decorativa')(style="width: 100%")
            h4.text-center Composición
            p.mb-0(data-aos="fade-down") También representa una relación todo-parte, pero con una dependencia más fuerte. En este caso, los objetos que conforman la composición dependen del ciclo de vida del objeto principal.
          .col-xl.col-lg-6.tarjeta.tarjeta--C17.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t2/img25.svg', alt='Imagen decorativa')(style="width: 100%")
            h4.text-center Herencia (generalización)
            p.mb-0(data-aos="fade-down") Representa la relación mediante la cual una clase puede heredar atributos y operaciones de otra clase, favoreciendo la reutilización de código y la organización jerárquica del modelo.
    p.mb-4(data-aos="fade-down") Las relaciones entre clases permiten representar de manera organizada la interacción y dependencia entre los diferentes elementos de un sistema, facilitando el análisis, el diseño y la construcción de modelos orientados a objetos con una estructura clara y coherente.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Tipos de relaciones entre clases en UML
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Relación
                th(data-aos="fade-down")(style= "width: 30%") Símbolo UML
                th(data-aos="fade-down")(style= "width: 50%") Característica principal
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Asociación
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Línea continua.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Representa un vínculo entre dos clases.
              tr
                td(data-aos="fade-down") Agregación
                td(data-aos="fade-down") Línea continua con rombo blanco.
                td(data-aos="fade-down") Relación todo-parte con independencia entre los objetos.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Composición
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Línea continua con rombo negro.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Relación todo-parte con dependencia del ciclo de vida.
              tr
                td(data-aos="fade-down") Herencia (generalización)
                td(data-aos="fade-down") Línea continua con flecha de triángulo vacío.
                td(data-aos="fade-down") Una clase hereda atributos y operaciones de otra.
    p.mb-4(data-aos="fade-down") Las relaciones entre clases permiten representar de manera organizada la interacción y dependencia entre los diferentes elementos de un sistema, facilitando el análisis, el diseño y la construcción de modelos orientados a objetos con una estructura clara y coherente.
    .row.bg03.justify-content-center.align-items-center.px-3.mb-0
      .col.col-lg-5.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t2/img26.svg', alt='Imagen decorativa')
      .col.col-lg-5.col-12.order-lg-2.order-2
        .tarjeta.tarjeta--blanca.p-4
          p.mb-4 Ejemplos de relaciones entre clases:
          ul.lista-ul--color.mb-4(data-aos="fade-down")
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Asociación: Aprendiz — Curso
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Agregación: Curso ◇── Módulo
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Composición: Formulario ◆── Campo
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Herencia: Usuario △── Administrador
    separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5 Herramientas CASE para el modelado de #[i <em>software</em>]
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t2/img27.jpg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        p.mb-3(data-aos="fade-down") Las herramientas CASE (Computer-Aided <em>software</em> Engineering) son aplicaciones informáticas que apoyan las diferentes actividades relacionadas con el análisis, diseño, desarrollo y documentación del <em>software</em>. En el modelado orientado a objetos, estas herramientas facilitan la elaboración de diagramas UML mediante interfaces gráficas que permiten representar de forma organizada la estructura y el comportamiento de un sistema.
        .cajon.cajon.C08.color-primario.p-3.mb-0
          p.mb-0(data-aos="fade-down") El uso de herramientas CASE contribuye a mejorar la productividad durante el proceso de desarrollo, favorece la estandarización de los modelos y facilita la actualización de la documentación del proyecto. Además, permiten detectar inconsistencias en los diagramas y mantener una representación organizada de los diferentes componentes del sistema.
    p.mb-4(data-aos="fade-down") Entre las herramientas CASE más utilizadas para el modelado de <em>software</em> se encuentran:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Herramientas CASE para el modelado de <em>software</em>
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Herramienta
                th(data-aos="fade-down")(style= "width: 80%") Características principales
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") StarUML
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Permite crear diferentes tipos de diagramas UML mediante una interfaz gráfica intuitiva y opciones de personalización.
              tr
                td(data-aos="fade-down") Visual Paradigm
                td(data-aos="fade-down") Facilita el modelado UML, el diseño de procesos y la documentación de proyectos de <em>software</em>.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Enterprise Architect
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Ofrece funciones para el modelado, análisis y documentación de sistemas de <em>software</em> de diferentes niveles de complejidad.
              tr
                td(data-aos="fade-down") Astah UML
                td(data-aos="fade-down") Proporciona herramientas para elaborar diagramas UML y favorecer la organización del diseño de aplicaciones.
    p.mb-0(data-aos="fade-down") La selección de una herramienta CASE depende de las necesidades del proyecto, las funcionalidades requeridas y las características del entorno de desarrollo. Independientemente de la herramienta utilizada, todas contribuyen a representar y documentar los modelos de <em>software</em> de manera organizada, facilitando el trabajo colaborativo y la comprensión de la arquitectura del sistema.
</template>
<script>
export default {
  name: 'Tema2',
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
