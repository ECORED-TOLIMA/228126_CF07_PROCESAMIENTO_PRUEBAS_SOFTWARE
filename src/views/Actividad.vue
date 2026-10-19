<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la comprensión de los conceptos fundamentales de la programación orientada a objetos, el modelado de <em>software</em>, la implementación de clases en Java, la herencia, el polimorfismo y las prácticas básicas para el desarrollo, depuración y validación de aplicaciones.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es una característica de la programación orientada a objetos?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ejecutar instrucciones sin utilizar clases.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Organizar el <em>software</em> mediante objetos que representan entidades del problema.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar el uso de métodos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reemplazar los algoritmos por diagramas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos fundamentales de la programación orientada a objetos y su aplicación en el desarrollo, implementación y depuración de aplicaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'En programación orientada a objetos, una clase corresponde a:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un objeto en ejecución.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una variable global.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un algoritmo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un modelo que define atributos y métodos para crear objetos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos fundamentales de la programación orientada a objetos y su aplicación en el desarrollo, implementación y depuración de aplicaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: '¿Qué representa un objeto?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una instancia creada a partir de una clase.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Un método de una clase.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un compilador.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un algoritmo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos fundamentales de la programación orientada a objetos y su aplicación en el desarrollo, implementación y depuración de aplicaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de los siguientes elementos almacena las características de un objeto?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los métodos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los atributos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Los parámetros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los constructores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos fundamentales de la programación orientada a objetos y su aplicación en el desarrollo, implementación y depuración de aplicaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: 'Los métodos de una clase permiten:',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Declarar variables.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Crear diagramas UML.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Definir las acciones o comportamientos de los objetos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reemplazar los atributos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos fundamentales de la programación orientada a objetos y su aplicación en el desarrollo, implementación y depuración de aplicaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: '¿Cuál es el propósito principal del UML?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Compilar programas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ejecutar aplicaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Administrar bases de datos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Modelar y representar el diseño del <em>software</em>.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos fundamentales de la programación orientada a objetos y su aplicación en el desarrollo, implementación y depuración de aplicaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: 'Un diagrama de clases permite representar principalmente:',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las clases, sus atributos, métodos y relaciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Los errores del programa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La ejecución del compilador.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los resultados de una prueba.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos fundamentales de la programación orientada a objetos y su aplicación en el desarrollo, implementación y depuración de aplicaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Qué función cumplen las herramientas CASE?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reemplazar el lenguaje Java.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Apoyar el modelado y diseño del <em>software</em>.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Corregir automáticamente todos los errores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ejecutar únicamente diagramas UML.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos fundamentales de la programación orientada a objetos y su aplicación en el desarrollo, implementación y depuración de aplicaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Cuál es la función principal de un constructor en Java?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar objetos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Declarar atributos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Inicializar un objeto cuando es creado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Ejecutar el programa principal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos fundamentales de la programación orientada a objetos y su aplicación en el desarrollo, implementación y depuración de aplicaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Cuál de los siguientes es un especificador de acceso en Java?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'import',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'return',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'static',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'public',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos fundamentales de la programación orientada a objetos y su aplicación en el desarrollo, implementación y depuración de aplicaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: 'La herencia permite:',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reutilizar atributos y métodos de una clase existente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar el uso de objetos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reemplazar los constructores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar la programación orientada a objetos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos fundamentales de la programación orientada a objetos y su aplicación en el desarrollo, implementación y depuración de aplicaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            'En Java, la herencia entre clases se implementa mediante la palabra reservada:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'implements',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'import',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'extends',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'package',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos fundamentales de la programación orientada a objetos y su aplicación en el desarrollo, implementación y depuración de aplicaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: 'La sobrescritura de métodos consiste en:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Declarar varios métodos con nombres diferentes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Redefinir en una clase derivada un método heredado de la clase base.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Crear varias clases con el mismo nombre.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar métodos heredados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos fundamentales de la programación orientada a objetos y su aplicación en el desarrollo, implementación y depuración de aplicaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: '¿Cuál es el propósito de una clase abstracta?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crear objetos directamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reemplazar todas las clases concretas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar la herencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Servir como base para otras clases que implementan su comportamiento.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos fundamentales de la programación orientada a objetos y su aplicación en el desarrollo, implementación y depuración de aplicaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: 'El polimorfismo permite que:',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Todos los objetos ejecuten exactamente el mismo comportamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo exista una clase en el programa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una misma referencia pueda representar diferentes objetos relacionados por herencia.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Se eliminen los constructores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos fundamentales de la programación orientada a objetos y su aplicación en el desarrollo, implementación y depuración de aplicaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: 'La sobrecarga de métodos ocurre cuando:',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Existen varios métodos con el mismo nombre y diferentes parámetros.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Un método cambia su nombre.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se elimina un método heredado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Dos clases tienen el mismo atributo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos fundamentales de la programación orientada a objetos y su aplicación en el desarrollo, implementación y depuración de aplicaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Cuál es el objetivo principal de la depuración de programas?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crear diagramas UML.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Identificar y corregir errores durante el desarrollo de la aplicación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reemplazar el compilador.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diseñar algoritmos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos fundamentales de la programación orientada a objetos y su aplicación en el desarrollo, implementación y depuración de aplicaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: 'Una falla de sintaxis se caracteriza porque:',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Produce un resultado incorrecto, aunque el programa funcione.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo aparece después de ejecutar el programa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Incumple las reglas del lenguaje e impide la compilación o ejecución.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Ocurre únicamente en programas orientados a objetos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos fundamentales de la programación orientada a objetos y su aplicación en el desarrollo, implementación y depuración de aplicaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: '¿Qué permiten verificar las pruebas de <em>software</em>?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El tamaño del código fuente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El número de clases creadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La velocidad del compilador.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que la aplicación funcione de acuerdo con los resultados esperados.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos fundamentales de la programación orientada a objetos y su aplicación en el desarrollo, implementación y depuración de aplicaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'Después de corregir un error en una aplicación, lo más recomendable es:',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar el algoritmo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Crear una nueva clase.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Ejecutar nuevamente las pruebas para verificar la corrección realizada.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cambiar el lenguaje de programación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos fundamentales de la programación orientada a objetos y su aplicación en el desarrollo, implementación y depuración de aplicaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
