<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 ¿Qué es un plan de continuidad del negocio?
    
    p.mb-5 Es la integración de diferentes estrategias para mantener la operatividad de los procesos de negocio de la organización. La mayoría de las veces estas suelen sufrir percances relacionados a posibles sabotajes, riesgos ambientales, humanos y tecnológicos. La continuidad del negocio es tan esencial que asegura el prestigio organizacional y la calidad de los servicios prestados. Contar con un plan de continuidad del negocio no es una obligación exigida para las organizaciones, pero sí es un valor agregado que puede representar una ventaja competitiva para las mismas que lo aplican, tal como se evidencia  en los siguientes  ejemplos:

    .BG11.p-4.mb-4(data-aos="zoom-in")
      SlyderA.img05(tipo="b")
        .row.justify-content-center
          .col-md-5.order-md-1.order-2
            .h4 Ejemplo 1
            p Una empresa prestadora de servicios de salud tiene un #[i software] que permite realizar la asignación de citas a los pacientes desde un aplicativo local y otro a través de internet. 
            p El aplicativo que funciona desde internet presenta una falla, ocasionando que los usuarios de la entidad no pueda realizar sus citas médicas desde la comodidad de sus casas. Ahora bien, esto, se podría decir que, no es traumático pero si se analiza desde un punto de vista competitivo para la organización, sí lo es, ya que acerca a los usuarios a la organización de manera cómoda y segura. 
          .col-md-7.col-10.order-md-2.order-1.mb-md-0.mb-4
            img(src='@/assets/curso/tema3/img01.png')
        .row.justify-content-center
          .col-md-5.order-md-1.order-2
            .h4 Ejemplo 2
            p Continuando con el ejemplo anterior, supóngase que en el aplicativo web, los usuarios pueden descargar los resultados de los exámenes realizados para luego presentarlos en su consulta y así acceder a un tratamiento específico. Si este aplicativo falla, tanto los usuarios como los médicos se verían afectados igual, pues tampoco podrán acceder a esta información. 
            p De ahí que sea indispensable conocer de fondo la cobertura y niveles de servicio que puede ofrecer la organización para saber si puede prestar los servicios de acuerdo a las necesidades organizacionales de la empresa.
          .col-md-7.col-10.order-md-2.order-1.mb-md-0.mb-4
            img(src='@/assets/curso/tema3/img02.png')
    
    p La conformación de un plan de continuidad del negocio debe considerar algunos componentes que son esenciales para su implementación y control. A continuación, se examinan cada uno de ellos para ampliar un poco más el panorama referente a estos conceptos:

    AcordionA.mb-5(tipo="a" clase-tarjeta="BG06")
      .row.justify-content-center(titulo="Componente de determinación del alcance")
        .col-md-11
          p Este componente es el de menor duración pero uno de los de mayor importancia puesto que establece los lineamientos que serán incluidos en el plan de continuidad del negocio. 
          p Está acompañado de un análisis específico de las verdaderas necesidades de la organización y contempla los tiempos y actividades a desarrollar en el transcurso del desarrollo del plan de continuidad. Es importante tener en cuenta que establecer los límites de un proceso es esencial para definir las acciones necesarias para su operatividad.
      .row.justify-content-center(titulo="Componente de análisis de la organización")
        .col-md-11
          p Este componente establece el estudio e inventario de cada uno de los departamentos y secciones que tiene la organización: qué procesos realizan, qué tan críticos son los procesos que realiza, quiénes son las personas responsables de velar para que estos ocurran de manera correcta y por último cuáles son los tiempos establecidos para cada organismo.
          p Esta parte determina qué tan complejo es el flujo de información y de procesos que ejecuta la organización. 
          p También se debe determinar el cronograma de reuniones y encuentros para puntualizar temas propios de la ruta a seguir con el plan de contingencia. Este proceso se realiza de manera periódica para que no dé pie a perder el horizonte o los compromisos establecidos en cada reunión del proyecto, y demás contribuye a la interacción entre los miembros del equipo. 
      .row.justify-content-center(titulo="Componente sobre la estrategia de continuidad")
        .col-md-11
          p Está encaminada a lograr la integración correcta y continua de cada proceso. Todo aquello que permita la ejecución correcta de los procesos que ayuden a recuperarlos y establecerlos, se considera una estrategia. El asunto muchas veces no es técnico ni operativo más bien de voluntad. De ahí la constante ratificación en el compromiso real de la administración y del equipo  con los procesos de continuidad del negocio, ya que estos deben trabajar de manera conjunta para lograr el objetivo común:  evitar interrupciones en los procesos de negocio.
          p Un ejemplo particular es un negocio que se dedica a la venta de comidas y le falla el servicio de gas. Esto hace que los clientes que realizaron sus pedidos y que están esperando, empiecen a quejarse y a cancelarlos. Ahora bien, el escenario se complica cuando los pedidos son a través de una plataforma y no se pueden llevar a tiempo. Esta realidad sucede actualmente en los negocios de nuestro país con una frecuencia impresionante, si este negocio evalúa los posibles riesgos y determina la criticidad de cada uno con su respectivo impacto, vería este proceso negativo como una oportunidad de mejora, y por ende, de crecimiento y mejor posicionamiento.
      .row.justify-content-center(titulo="Componente de respuesta a la contingencia")
        .col-md-11
          p En este componente se establecen los medios mediante los cuales se realizará el proceso de recuperación del sistema y de los procesos de negocio. Es considerable que todos estos ya tengan un aval del equipo de contingencias, por tanto ya se les ha realizado la evaluación de riesgo y están incluidos en el plan de continuidad con su respectivo análisis de impacto y criticidad en el proceso de negocio, teniendo en cuenta lo siguiente:
          ul.lista-ul--color
            li 
              i.fas.fa-dot-circle
              | Plan de crisis cuyo objetivo es evitar una toma de decisiones improvisada que pueda empeorar la situación o bien que simplemente no se tomen decisiones.
            li 
              i.fas.fa-dot-circle
              | Planes operativos de recuperación de entornos, que deberán especificar sobre qué entorno se aplican. Hay que tener en cuenta que estos documentos podrán abarcar uno o varios entornos y contendrán información específica de cada uno de ellos. Por ejemplo, un entorno puede ser un ERP, otro el correo electrónico, etc.
            li 
              i.fas.fa-dot-circle
              | Procedimientos técnicos de trabajo, donde se describen las acciones que se han de llevar a la práctica para la gestión y recuperación de un sistema, infraestructura o entorno.
      .row.justify-content-center(titulo="Componente de pruebas y mantenimiento")
        .col-md-11
          p Está diseñado específicamente para la realización de las diferentes pruebas a las cuales se debe someter el plan de continuidad para verificar que cumple con todos los estándares y protocolos necesarios para que al momento de requerir su uso se puedan obtener resultados favorables, que ayuden a la organización a solucionar sus inconvenientes de manera eficiente y efectiva.
          p Así mismo, se debe considerar la actualización y mejora de los procesos incluidos dentro del plan de continuidad, de acuerdo a las pruebas y hallazgos encontrados. Se debe considerar dentro de su mantenimiento si los procesos se encuentran vigentes o  si es necesario agregar algunos que no se están considerando.
      .row.justify-content-center(titulo="Componente de concienciación")
        .col-md-11
          p Este componente es el último a considerar y está relacionado con fomentar las buenas prácticas en los procesos.  Se considera de vital importancia el compromiso de todos los miembros de la organización en velar por el correcto funcionamiento de los procesos de negocio y en la calidad de los servicios que ofrecerá la organización.
          p Se debe buscar la manera de que cada uno de los miembros de la organización se identifique con las políticas que ayuden al bienestar y fluidez de los procesos de negocio de la empresa, pues se sabe que cuando las cosas son impuestas no generan resultados positivos. Hay que encontrar las estrategias necesarias para que los empleados, administrativos y personal operativo se identifiquen y asuman el compromiso de la continuidad del negocio como parte de la cultura organizacional.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1.	Evaluación de planes de continuidad de negocio
    
    .row.justify-content-center.align-items-center.mb-4
      .col-md-7.order-md-1.order-2
        p Esta debe estar enmarcada en realizar una exhaustiva verificación de cada uno de los procesos involucrados en el plan de continuidad del negocio. Comprueba si estos se ajustan a las necesidades del negocio y da respuesta a los problemas que se puedan presentar a lo largo del funcionamiento de los procesos; eso quiere decir, que se deben incluir cada uno de los riesgos que pueden ser ocasionados en los procesos del negocio para generar una evaluación conjunta de cada uno de ellos, su correlación con otros procesos de negocio y si los planes y estrategias anexados sí solucionan dicha problemática.
      .col-md-5.order-md-2.order-1.mb-md-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img03.jpg')
    
    .row.justify-content-center.align-items-center.mb-4
      .col-md-3.col-6.mb-md-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img04.png')
      .col-md-9
        p Ahora bien, para realizar de manera correcta la evaluación del plan de continuidad se deben establecer los escenarios mediante los cuales se realizarán las evaluaciones de los casos que se pueden presentar y que se ven representados en los diferentes riesgos que pueden ocurrir en el ejercicio de las funciones sustantivas de la organización. Estos escenarios pueden sugerir el uso de recursos humanos, tecnológicos y financieros, los cuales pueden ser simulados en ambientes controlados o en escenarios reales para verificar el comportamiento de estos en ambas circunstancias.
        p El uso de los escenarios simulados suele ser mucho más económico que hacerlo en un ambiente natural, puesto que esto requiere que el proceso sea probado en un horario de trabajo y por tanto, se sacrificarán algunos momentos de la producción para realizar su verificación. Un ejemplo de ello se presenta en la siguiente figura:
      
    .h4 Ejemplo: Atención al cliente

    .row.justify-content-center.align-items-center.mb-4
      .col-md-3.col-6.mb-md-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img05.png')
      .col-md-7.mb-4
        .BG10.p-4.mb-4(data-aos="fade-left")
          p La atención al cliente en un ambiente simulado podría ser una prueba en un sistema informático tipo simulador que presente diferentes situaciones en las cuales el personal administrativo, responsable de esta área, debe realizar.
        .row.align-items-center
          .col-11.BG03.p-4
            p.me-5.mb-0 Si se ve, desde un punto de vista real, es necesario realizar la evaluación con el personal en el puesto de trabajo, cómo actúa, cómo realiza los procesos que debe efectuar y cómo utiliza de manera eficiente su tiempo en ese tiempo de prueba.
          .col-2.img06(data-aos="fade-left")
            img(src='@/assets/curso/tema3/img06.png')
      .col-md-10
        p Ahora bien, no es un secreto que los ambientes de prueba reales ofrecen resultados más orientados a la realidad, que en los ambientes de prueba simulados, ya que no podemos simular ciertos factores tales como miedo, eficiencia al resolver inconvenientes y otros propios del quehacer de esta persona en su puesto de trabajo. 
        .row.align-items-center
          .col-11.BG08.p-4
            p.me-5.mb-0 En los planes de continuidad se deben realizar pruebas simuladas donde se expone una situación y se debe ver cómo reacciona el plan de continuidad y las personas responsables del mismo.
          .col-2.img04(data-aos="fade-left")
            img(src='@/assets/curso/tema3/img07.png')

    p Para ver desde un contexto más detallado la importancia de la evaluación de los planes de continuidad del negocio, a continuación, se presentan algunos aspectos para comprender de una manera muy sencilla los aportes que esto genera a los procesos de negocio de la organización (ver figura 5):

    .titulo-sexto.color-secundario(data-aos="fade-right")
      h5 Figura 5
      span Aspectos que aportan a los planes de continuidad

    .row.justify-content-center.align-items-center.mb-4
      .col-md-3.col-6.mb-md-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img08.png')
      .col-md-6(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          h4.mb-1 Objetivos generales
          p.mb-0 - Minimizar las pérdidas.
        .titulo-sexto.color-secundario
          h4.mb-1 Objetivos particulares
          p.mb-1 - Gestión y coordinación global, asignación de responsabilidades.
          p.mb-1 - Activación del Plan de Emergencia.
          p.mb-0 - Minimizar las pérdidas.
        .titulo-sexto.color-acento-botones
          h4.mb-1 Contenido del Plan de contingencia
          p.mb-1 - La naturaleza de la contingencia.
          p.mb-1 - Las repercusiones operativas de la contingencia.
          p.mb-1 - Las respuestas viables.
          p.mb-1 - Las implicaciones financieras de las respuestas.
          p.mb-0 - Cualquier efecto en otro proceso.
      .col-md-6.BG12.p-4(data-aos="zoom-in")
        p.text-bold Cada uno de estos elementos garantizan que el proceso de continuidad del negocio se realice de manera correcta.

    p El proceso de verificación del plan de continuidad debe contemplar la característica de mantener una actualización constante para incluir o sacar los procesos que se deben tener en cuenta en el plan. Algo muy importante es que se genere una cultura de actualización constante de los procesos involucrados en el plan de continuidad, ya que estos pueden cambiar en cualquier momento sea para bien o para mal.

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2.	Características de los planes de continuidad

    p Los planes de continuidad, como se ha expuesto, son de vital importancia para las organizaciones ya que estos se encargan de garantizar que los procesos de negocio sigan prestando sus servicios con calidad y eficiencia. Existen muchas maneras de expresar las diferentes características de un plan de continuidad, el cual tiene como objetivo principal garantizar que una vez suceda un incidente este se pueda solucionar en la mayor brevedad posible para no generar eventos críticos en el negocio. En el siguiente recurso se abordan las diferentes características que tienen los planes de continuidad:

    .row.justify-content-center.align-items-center.mb-5
      .col-md-6.order-md-1.order-2
        LineaTiempoD.color-acento-contenido
          p.text-small(numero="1" titulo="Necesidades de la organización") Una de las características principales de un plan de continuidad del negocio es ajustarse a las necesidades tanto funcionales como de procesos de la organización. Esto se refiere que en algunas ocasiones se vislumbra el plan de continuidad con una cantidad de procesos y componentes que requieren de muchos esfuerzos tanto financieros, tecnológicos y humanos, pudiendo ser un factor que impida que la implementación y diseño del plan se lleve a cabo.<br><br>Por ejemplo, en la adquisición de tecnología, generalmente se compran equipos con características superiores, los cuales nunca llegan a ser utilizados en su máximo desempeño lo que se puede traducir en gastos innecesarios. De ahí la importancia de que los planes de continuidad deban estar conectados con la realidad de la organización.
          p.text-small(numero="2" titulo="Planificación de cada proceso") Es indispensable para cualquier proceso que se realice una adecuada planificación ya que esto garantizará la correcta integración del mismo en la organización. La planificación permite que, de hecho, algunos procesos de otras dependencias de la organización se unan para realizar un proceso integral; en la mayoría de ocasiones, se desconoce el impacto real que puede llegar a tener un proceso pero cuando se unen todos, los impactos de manera conjunta se visualiza a mayor escala de lo que suelen ser.
          p.text-small(numero="3" titulo="Ruta de trabajo") Al establecer el plan de continuidad se traza una ruta de trabajo que contiene las actividades requeridas para darle solución de manera correcta a la problemática que se está presentando. Esto quiere decir que los procesos se llevarán a cabo mucho más organizada y eficiente.
      .col-md-4.col-8.order-md-2.order-1.mb-md-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img09.png')

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3.	Normatividad
    
    p La normatividad permite estandarizar los procesos y acciones que se ejecutan de manera continua en la organización. Cuando se dice que un proceso se lleva a cabo a través de una norma específica se sabe que este utiliza un referente, en la mayoría de los casos internacional, lo que a su vez es referencia para la aplicación de buenas prácticas y mejorar un proceso de negocio o actividad en particular. Así mismo, las normas, de alguna manera, le dan a la empresa el prestigio y reconocimiento no solo a nivel local sino también internacional, ya que se garantiza que todos los procesos que allí se realizan están debidamente documentados y probados.
    p Para que una organización empiece un proceso de certificación debe empezar a mejorar y orientar los procesos que esta maneja hacia el referente de la norma, tal como se evidencia en el ejemplo descrito a continuación:


    .row.justify-content-center.BG15.p-4.mb-5
      .col-md-5.col-10.mb-md-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img15.png')
      .col-md-7.mb-4
        .h4 Una empresa se dedica a la distribución de alimentos, como bien sabemos existen alimentos perecederos y no perecederos, lo que quiere decir que no tienen el mismo tratamiento. 
        p En cuanto a la logística de distribución, su transporte y conservación, se podría decir que la organización realiza la entrega de los productos de una manera empírica y rigiéndose por su experiencia en el mercado. Esta empresa ha tomado de la decisión de tener un contrato con otra compañía para aumentar sus ventas y posicionamiento. Sin embargo, esta trabaja bajo los estándares de normas internacionales.
        p Ante esto, ahora la empresa deberá ajustar sus procesos tales como mejoramiento de la logística de distribución, calidad de los contenedores de la cadena de frío para transportar los productos, esto quiere decir que se debe renovar o mejorar los vehículos, los tiempos de entrega deben ajustarse a los cronogramas planteados, por lo tanto debe tener un plan para la adquisición de nuevos vehículos, que cumplan con la normatividad y otros procesos, que deben ajustar para poder ganar dicho contrato.
      .col-12.BG16.p-4(data-aos="fade-right")
        .row.justify-content-center
          .col-md-2.col-4.mb-md-0.mb-4
            img(src='@/assets/curso/tema3/img16.png')
          .col-md-10
            p Este ejemplo evidencia las modificaciones que tiene que tener una empresa si desea ser competitiva en un mercado, en el que las certificaciones son un requisito para su participación en él; y aunque se sabe que no es de obligatoriedad su implementación para su funcionamiento operativo, sí es fundamental para poder entrar y posicionarse en estos contextos. #[strong Toda empresa que busque trabajar con otra, la cual ya maneja unos estándares, debe estudiar con qué normatividad se está basando para poder participar en sus contrataciones].

    p La norma ISO 22301 es el estándar establecido para la gestión de la continuidad del negocio la cual se ve reflejada en la utilización de mejores prácticas para lograr que una empresa mantenga su operatividad aun sufriendo riesgos e inconvenientes. Esta norma también garantiza las mejores prácticas para poder recuperar los procesos de negocio de manera efectiva y eficiente. La siguiente figura 6 ilustra cómo funciona la gestión de continuidad del negocio:

    .titulo-sexto.color-secundario(data-aos="fade-right")
      h5 Figura 6
      span Gestión de la continuidad del negocio

    .row.justify-content-center.mb-4
      .col-md-8
        figure.mb-4(data-aos="zoom-in")
          img(src='@/assets/curso/tema3/img10.svg')
        .BG01.p-4(data-aos="fade-right")
          p Está basado en las normas británicas las cuales tienen todos los requisitos y requerimientos que debe seguir una compañía para implementar un sistema de gestión de la continuidad del negocio también llamado SGCN.
    
    p La norma ISO 22301 además, ofrece un espectro amplio de trabajo para mantener los procesos funcionales y evitar que la empresa pueda entrar en crisis. A continuación, se expone un poco más sobre este estándar.

    .BG04.p-4.mb-4(data-aos="zoom-in")
      SlyderA.img02(tipo="b")
        .row.justify-content-center
          .col-md-5.order-md-1.order-2
            .h4 ¿Qué ofrece la norma ISO 22301?
            ul.lista-ul--color
              li 
                i.fas.fa-atom
                | Establecer procesos y protocolos para el mejoramiento de la continuidad del negocio.
              li 
                i.fas.fa-atom
                |Mejorar los procesos y aumentar la calidad de los servicios y productos ofrecidos.
              li 
                i.fas.fa-atom
                |Generar tranquilidad y prestigio a la organización.
              li 
                i.fas.fa-atom
                | Mantener un sistema de operatividad del negocio vigente.
          .col-md-7.col-10.order-md-2.order-1.mb-md-0.mb-4
            img(src='@/assets/curso/tema3/img11.png')
        .row.justify-content-center
          .col-md-5.order-md-1.order-2
            .h4 Los beneficios que ofrecen son:
            ul.lista-ul--color
              li 
                i.fas.fa-atom
                | Permite la coordinación entre los empleados.
              li 
                i.fas.fa-atom
                |Identifica los riesgos a los que puede estar expuesta la compañía y de qué manera pueden afectar la continuidad de la empresa.
              li 
                i.fas.fa-atom
                |Contar con las respuestas adecuadas al momento de enfrentar una crisis.
              li 
                i.fas.fa-atom
                |Tener la capacidad para recuperarse rápidamente.
              li 
                i.fas.fa-atom
                |Contribuir a mejorar la reputación.
              li 
                i.fas.fa-atom
                |Generar valor agregado frente a la competencia.
              li 
                i.fas.fa-atom
                |Crear confianza ante los clientes y nuevos prospectos.
          .col-md-7.col-10.order-md-2.order-1.mb-md-0.mb-4
            img(src='@/assets/curso/tema3/img12.png')
        .row.justify-content-center
          .col-md-5.order-md-1.order-2
            .h4 ¿Qué documentos se deben generar bajo la norma?
            ul.lista-ul--color
              li 
                i.fas.fa-atom
                | El alcance que tendrá el plan de continuidad.
              li 
                i.fas.fa-atom
                | Los objetivos del plan de continuidad del negocio.
              li 
                i.fas.fa-atom
                | Perfiles y competencias que deben tener las personas que trabajan en el plan de continuidad.
              li 
                i.fas.fa-atom
                | Cronograma de reuniones y encuentros con las partes interesadas e involucradas en el proceso.
              li 
                i.fas.fa-atom
                | BIA, análisis de impacto del negocio de acuerdo a la criticidad de los procesos a involucrar.
              li 
                i.fas.fa-atom
                | Evaluación de los riesgos que se pueden presentar.
              li 
                i.fas.fa-atom
                | Plan de respuesta ante los incidentes presentados.
              li 
                i.fas.fa-atom
                | Diseño de los planes de continuidad del negocio.
              li 
                i.fas.fa-atom
                | Procesos y procedimientos para la recuperación del negocio.
              li 
                i.fas.fa-atom
                | Auditoría interna.
              li 
                i.fas.fa-atom
                | Acciones de corrección realizadas.
              li 
                i.fas.fa-atom
                | Procesos de mejora continua.
          .col-md-7.col-10.order-md-2.order-1.mb-md-0.mb-4
            img(src='@/assets/curso/tema3/img13.png')
        .row.justify-content-center
          .col-md-5.order-md-1.order-2
            .h4 Diagrama interno de un sistema de continuidad del negocio
            p Permite visualizar los pasos a seguir para mantener de manera operable el sistema en una organización.
            p En caso de ocurrir un incidente, se puede consultar el diagrama de continuidad y se tiene un punto de partida de por dónde empezar a ejecutar las acciones preventivas y correctivas en un orden específico.
          .col-md-7.col-10.order-md-2.order-1.mb-md-0.mb-4
            img(src='@/assets/curso/tema3/img14.svg')

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
