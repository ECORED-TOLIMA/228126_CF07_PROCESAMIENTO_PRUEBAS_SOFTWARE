export default {
  global: {
    Name: 'Programación orientada a objetos y modelado de <em><em>software</em></em>',
    Description:
      'Este componente formativo desarrolla capacidades para analizar, diseñar e implementar sistemas de <em>software</em> orientados a objetos mediante UML, favoreciendo la construcción de soluciones modulares, escalables y seguras, preparadas para su implementación en entornos de computación en la nube.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de Programación Orientada a Objetos (POO)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Características de la programación orientada a objetos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Clases y objetos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Atributos y métodos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Entradas y salidas en aplicaciones orientadas a objetos',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Interacción entre objetos',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Modelado y diseño de <i><em>software</em></i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Fundamentos del modelado UML',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Elementos básicos del UML',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Diagramas de clases',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Relaciones entre clases',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo:
              'Herramientas CASE para el modelado de <i><em>software</em></i>',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Estructura e implementación de clases',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Implementación de una clase',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Especificadores de acceso',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Constructores y administración de memoria en Java',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Herencia en la programación orientada a objetos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Principios y beneficios de la herencia',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Herencia simple y múltiple',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Sobrescritura de métodos (<i>override</i>)',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Clases y métodos abstractos',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Constructores en la herencia',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Polimorfismo y reutilización de código',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Principios y beneficios del polimorfismo',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Sobrecarga de métodos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Sobrescritura y polimorfismo',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Aplicación del polimorfismo mediante herencia',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Desarrollo y depuración de aplicaciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Diseño e implementación de algoritmos',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Depuración de programas',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Fallas de sintaxis y fallas de lógica',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Pruebas y corrección de errores',
            hash: 't_6_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228122_CF07_CFA.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Algoritmo',
      significado:
        'Conjunto ordenado y finito de instrucciones que permiten resolver un problema o realizar una tarea específica.',
    },
    {
      termino: 'Atributo',
      significado:
        'Característica o dato que define el estado de un objeto dentro de una clase.',
    },
    {
      termino: 'Clase',
      significado:
        'Plantilla o modelo que define los atributos y métodos que compartirán los objetos creados a partir de ella.',
    },
    {
      termino: 'Constructor',
      significado:
        'Método especial utilizado para inicializar un objeto cuando se crea una instancia de una clase.',
    },
    {
      termino: 'Depuración',
      significado:
        'Proceso de identificación, análisis y corrección de errores presentes en un programa.',
    },
    {
      termino: 'Diagrama de clases',
      significado:
        'Representación gráfica de las clases, sus atributos, métodos y relaciones, utilizada en el modelado UML.',
    },
    {
      termino: 'Encapsulamiento',
      significado:
        'Principio de la programación orientada a objetos que protege los datos de un objeto mediante el control de acceso a sus atributos y métodos.',
    },
    {
      termino: 'Herencia',
      significado:
        'Mecanismo que permite a una clase adquirir atributos y métodos de otra, favoreciendo la reutilización del código.',
    },
    {
      termino: 'Instancia',
      significado:
        'Objeto creado a partir de una clase, con sus propios valores para los atributos definidos.',
    },
    {
      termino: 'Método',
      significado:
        'Conjunto de instrucciones que define una acción o comportamiento que puede realizar un objeto.',
    },
    {
      termino: 'Polimorfismo',
      significado:
        'Capacidad de utilizar una misma referencia para invocar diferentes comportamientos según el tipo de objeto que la implementa.',
    },
    {
      termino: 'Programación Orientada a Objetos (POO)',
      significado:
        'Paradigma de programación basado en la organización del <em>software</em> mediante clases y objetos que interactúan entre sí.',
    },
    {
      termino: 'Sobrecarga de métodos',
      significado:
        'Técnica que permite definir varios métodos con el mismo nombre, pero con diferentes listas de parámetros dentro de una misma clase.',
    },
    {
      termino: 'Sobrescritura de métodos',
      significado:
        'Mecanismo mediante el cual una clase derivada redefine el comportamiento de un método heredado de la clase base.',
    },
    {
      termino: 'UML (Lenguaje Unificado de Modelado)',
      significado:
        'Lenguaje estandarizado que permite representar gráficamente la estructura y el comportamiento de sistemas de <em>software</em> mediante diferentes tipos de diagramas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Booch, G., Rumbaugh, J., & Jacobson, I. (2006). <i>El lenguaje unificado de modelado. Manual de referencia</i> (2.ª ed.). Pearson Educación.',
    },
    {
      referencia:
        'Fowler, M. (2004). <i>UML distilled: A brief guide to the standard object modeling language</i> (3rd ed.). Addison-Wesley.',
    },
    {
      referencia:
        'Larman, C. (2005). <i>Applying UML and patterns: An introduction to object-oriented analysis and design and iterative development</i> (3rd ed.). Prentice Hall.',
    },
    {
      referencia:
        'Object Management Group. (2017). <i>Unified Modeling Language</i> (OMG UML).',
      link: 'https://www.omg.org/spec/UML/2.5.1/PDF',
    },
    {
      referencia: 'Oracle. (s. f.).',
      link: 'https://docs.oracle.com/en/java/',
    },
    {
      referencia:
        'Oracle. (s. f.). <i>Java Language and Virtual Machine Specifications</i>.',
      link: 'https://docs.oracle.com/javase/specs/',
    },
    {
      referencia:
        'Pressman, R. S., & Maxim, B. R. (2020). <i>Ingeniería del <em>software</em>: Un enfoque práctico</i> (9.ª ed.). McGraw-Hill.',
    },
    {
      referencia:
        'Schildt, H. (2022). <i>Java: The complete reference</i> (13th ed.). McGraw-Hill.',
    },
    {
      referencia:
        'Sommerville, I. (2016). <i>Ingeniería de <em>software</em></i> (10.ª ed.). Pearson Educación.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
