<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Planificación y control de operaciones

    p Es una estrategia que permite que los SGCN logren los objetivos para los cuales han sido diseñados e implementados: mejorar la confianza y respaldo de los procesos de negocio de la organización. 
    p La planeación es un proceso que permite estructurar de manera organizada y eficiente las actividades que se deben desarrollar para cumplir el objetivo del SGCN. Una buena planificación es la base fundamental del éxito de cualquier proceso empresarial. En el siguiente interactivo se puede apreciar cómo esta se efectúa:

    .row.justify-content-center.align-items-center.mb-4
      .col-md-6.col-10.px-0.mb-md-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img01.svg')
      .col-md-6.BG02.p-4(data-aos="fade-left")
        SlyderA.img01(tipo="b")
          .row
            .col-md-11
              h4 Diagnóstico
              p Realizar un diagnóstico al proceso actual: es necesario conocer el estado actual de cómo la organización está realizando los procesos de continuidad del negocio, dando un punto de partida para establecer los procesos de mejora que se requieren para los procesos de negocio actuales.
          .row
            .col-md-11
              h4 Actividades
              p Listado de acciones: se debe establecer una lista de verificación de los procesos que serán incluidos dentro del SGCN, por decir un ejemplo: bodega, contabilidad, recursos humanos, etc. Hay que definir cuáles son las áreas y procesos de la organización que requieren el plan de continuidad. Luego, se seleccionan cuáles son los procesos críticos y que requieren de atención inmediata para así darles prioridad en una escala de bajo, medio, alto, teniendo en cuenta que los de medio y alto son prioridad inmediata.
          .row
            .col-md-11
              h4 Recursos
              p Asignar recursos: en este componente se debe realizar una análisis para determinar con qué recursos cuenta actualmente la empresa y cuáles se requieren de manera adicional para la implementación y puesta en marcha del SGCN. Este paso es fundamental porque garantiza que los procesos cuenten con lo necesario para su correcto funcionamiento, ya sean  de carácter financiero, humano o tecnológico.

    .BG01.p-4.mb-4(data-aos="fade-right")
      p Uno de los errores más comunes que se puede cometer en la planificación es agregar demasiados procesos sin tener en cuenta los recursos con los que se debe contar para su correcta ejecución. Es importante que la persona que está liderando el proceso realice un diagnóstico inicial para referenciar cuáles son las actividades a tener en cuenta y qué tan alcanzables son con el tiempo que se cuenta.

    .row.justify-content-center.mb-4
      .col-md-10.cajon.color-acento-contenido.p-4(data-aos="fade-right")
        .row.justify-content-center.align-items-center
          .col-md-2.col-4.mb-md-0.mb-4
            img.w-75(src='@/assets/curso/tema1/img02.png')
          .col-md-10
            p.mb-0 Hoy día la planificación lo es todo en una organización, ya que permite aprovechar los recursos de una manera óptima y efectiva. Un mal desarrollo de esta puede arruinar todo un proceso y hasta puede generar inconvenientes de funcionamiento a una organización.
    
    p.mb-5 El proceso de planificación es una de las etapas más importantes de cualquier proyecto o proceso a ejecutar. Existen diversas situaciones que requieren que los procesos no solo lleven parte de la ejecución de los mismos, sino también realicen una monitorización rigurosa para verificar que se esté cumpliendo de manera correcta con lo establecido.

    .row.justify-content-center.mb-5
      .col-md-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img03.jpg')})`}"
          )(data-aos="fade-right")
          .bloque-texto-g__texto.p-4
            p.mb-0 Herramientas, tales como Trello, permiten gestionar cada proceso y saber en qué estado se encuentra en tiempo real.

    .row.justify-content-center.mb-4
      .col-md-9.order-md-1.order-2
        p De igual forma, es importante tener en cuenta que las actividades que se relacionan con los SGCN deben sufrir un cambio en el transcurso del tiempo; es decir, su estado actual puede variar de acuerdo con las necesidades de la organización. Por ello, es indispensable tanto su continuo monitoreo como la asignación de un responsable directo, quien no solo debe realizar un acompañamiento y supervisión de las mismas, sino que debe velar porque el equipo de trabajo cuente con las herramientas necesarias para el desarrollo de sus acciones en el sistema de gestión. 
        p Se debe establecer una ruta de trabajo basada en las actividades a realizar y en los tiempos de ejecución necesarios para las mismas, garantizando que estas se desarrollen con el menor traumatismo posible. No se trata de flexibilizar el trabajo sino comprometer al equipo en la importancia de los tiempos y actividades por cumplir en la organización. No obstante, cuando se ha llegado a un estado tal en que cada persona sabe lo que debe hacer, ya puede ser autónomo en su trabajo y corresponder con los entregables. Los procesos de orientación se utilizarán, entonces, para garantizar la correcta integración de todos los componentes en la organización. 
        p Se recomienda tener en cuenta los siguientes aspectos para tener un control adecuado de la ruta de trabajo:
      .col-md-3.col-6.order-md-2.order-1.mb-md-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img04.png')

    .row.justify-content-center.align-items-center.mb-5
      .col-md-5.col-10.mb-md-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img05.png')
      .col-md-5(data-aos="fade-left")
        LineaTiempoD.color-acento-contenido
          p.text-small(numero="1" titulo="Líder") Nombrar un líder que se encargue de gestionar al personal que realiza las diferentes actividades en la organización.
          p.text-small(numero="2" titulo="Perfil asignado") Nadie puede salirse de su contexto o perfil asignado ya que podría entorpecer el trabajo del otro.
          p.text-small(numero="3" titulo="Controles") Los controles permiten que se cumplan los planes de contingencia y de continuidad del negocio.
          p.text-small(numero="4" titulo="Política de promoción") Asegurar el compromiso de  todos los miembros de la organización con dichos procesos,  a través de una política de promoción.
          p.text-small(numero="5" titulo="Continuar con la vigilancia constante") En ocasiones se generan los procesos cuando inicia todo lo referente a la política pero luego se va dejando de lado hasta que empieza a convertirse en parte de la cultura organizacional y, por tanto, es más complejo lograr que el personal cumpla con dichos compromisos plasmados con miras al mejoramiento continuo de los procesos que la empresa desea implementar.

    .row.justify-content-center.mb-4
      .col-md-10.cajon.color-acento-contenido.p-4(data-aos="fade-right")
        .row.justify-content-center.align-items-center
          .col-md-2.col-4.mb-md-0.mb-4
            img.w-75(src='@/assets/curso/tema1/img02.png')
          .col-md-10
            p Cabe decir que un control adecuado se garantiza cuando se tiene una ruta de trabajo y actividades bien definidas desde el principio. En muchas ocasiones se improvisan actividades y procesos los cuales no estaban en las versiones originales de la ejecución del proceso, trayendo consigo retrasos y problemas de comunicación más adelante y probablemente el fracaso del proyecto o actividades.

    
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1.	Riesgos disruptivos
    
    p.mb-5 Los riesgos disruptivos son situaciones que colocan en riesgo el correcto funcionamiento de los procesos que desarrolla una organización, los cuales pueden ser de carácter natural o artificial. La siguiente figura 2 presenta en cuáles aplican en cada clasificación:

    .row.justify-content-center.mb-4
      .col-md-10
        .titulo-sexto.color-acento-contenido.mb-0(data-aos="fade-right")
          h5 Figura 1
          span Tipos de riesgos
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img06.svg')

    p Dentro de los riesgos naturales existe un grado de incertidumbre puesto que muchos de ellos son impredecibles; es decir, no se sabe con certeza cuándo se pueden presentar y qué afectaciones pueden generar; en cuyo caso es necesario realizar un análisis y/o investigar cuáles son las causales de riesgo que se pudiesen llegar a presentar, para así realizar medidas preventivas y por ende, planes de contingencia que definan los protocolos a seguir para retornar a los procesos de negocio de manera confiable y segura.
    p Ahora bien, de acuerdo con el nicho de negocio que la empresa tiene, así serán las causantes que se deben estudiar para establecer los planes de acción a ejecutar. A continuación, se presenta un ejemplo de una matriz de riesgo y la aplicación de los planes de acción a realizar en caso de que ocurra el incidente, medida en su tiempo de recuperación (ver tabla 1):}

    .row.justify-content-center.mb-4
      .col-md-10
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Tabla 1
          span Ejemplo de matriz de riesgo

        .tabla-a.color-acento-contenido.mb-5(data-aos="zoom-in")
          table
            thead
              tr(style="background-color: #BEE9A8; color: #000")
                th(colspan="12")
                  h4.text-center.mb-0 Matriz de riesgo y contingencia
            tbody
              tr
                th(style="background-color: #F7CC54;" colspan="3") Suceso
                th(style="background-color: #F7CC54;" colspan="2") Frecuencia
                th(style="background-color: #F7CC54;" colspan="2") Tiempo de recuperación
                th(style="background-color: #F7CC54;" colspan="2") Atendido por
                th(style="background-color: #F7CC54;" colspan="3") Observaciones
              tr  
                td(colspan="3") Daño del servidor principal.
                td(colspan="2") Bajo
                td(colspan="2") 30 minutos
                td(colspan="2") Dulfran Montaño, Julio Castaño
                td(colspan="3") Este suceso se ha presentado durante los últimos 5 meses 1 vez.
              tr
                td(style="background-color: #E8E8E8;" colspan="3") Posibles ataques al sitio web por temporada de promociones de productos.
                td(style="background-color: #E8E8E8;" colspan="2") Medio
                td(style="background-color: #E8E8E8;" colspan="2") 1 hora
                td(style="background-color: #E8E8E8;" colspan="2") Dulfran Montaño.
                td(style="background-color: #E8E8E8;" colspan="3") Este suceso se ha presentado 2 veces en el mes.
              tr  
                td(colspan="3") Falla de energía eléctrica.
                td(colspan="2") Alto
                td(colspan="2") 15 minutos
                td(colspan="2") Julio Castaño
                td(colspan="3") Este suceso se ha presentado 15 veces en lo que va corrido del mes.
    
    .row.justify-content-center.align-items-center.cajon.color-primario.p-4.mb-4(data-aos="fade-right")
      .col-md-2.col-4.mb-md-0.mb-4
        img.w-75(src='@/assets/curso/tema1/img02.png')
      .col-md-10
        p Como se puede observar, se deben establecer cuáles son los sucesos que pueden ocurrir y colocar en riesgo la continuidad del negocio. Establecer este tipo de riesgos más que analizar los sucesos y su trazabilidad en la contingencia, permite estudiar la competitividad de una empresa, ya que puede que en algunas regiones sean más susceptibles dichos sucesos que en otras, por ejemplo. De ahí la importancia de establecer, de acuerdo con esas realidades, que no se puede dejar a un lado la ejecución de planes de contingencia para la organización.  

    .row.justify-content-center.mb-4
      .col-md-5.mb-md-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img07.png')
      .col-md-7
        p Desde un contexto mucho más profundo, establecer la matriz de riesgo puede revelar condiciones que no son observables de manera directa dentro de la organización; es decir, al momento de determinar un suceso de riesgo este a su vez puede aportar una visión mucho más amplia de otros hechos que pueden generarse a raíz de este mismo. Es allí donde toma importancia los detalles del análisis y el estudio del nivel de impacto que pueden ocasionar, el cual se mide desde su frecuencia. Sumado a esto, también es fundamental la definición de acciones a realizar, las cuales se visualizan desde los puntos de vista preventivo y correctivo. 
        p En la siguiente tabla 2, continuando con el ejemplo anterior, se ilustra el registro de sucesos presentados y su frecuencia.
    
    .row.justify-content-center.mb-4
      .col-md-10
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Tabla 2
          span Ejemplo de frecuencia de sucesos

        .tabla-a.color-acento-contenido.mb-5(data-aos="zoom-in")
          table
            thead
              tr(style="background-color: #BEE9A8; color: #000")
                th(colspan="12")
                  h4.text-center.mb-0 Matriz de riesgo - frecuencia de sucesos
            tbody
              tr
                th(style="background-color: #F7CC54;" colspan="3") Suceso
                th(style="background-color: #F7CC54;" colspan="2") Impacto
                th(style="background-color: #F7CC54;" colspan="2") Plan de contingencia
                th(style="background-color: #F7CC54;" colspan="2") Responsables
                th(style="background-color: #F7CC54;" colspan="3") Acciones a realizar
              tr  
                td(colspan="3") Daño del servidor principal.
                td(colspan="2") Alto
                td(colspan="2") Activar el servidor de respaldo mientras se restablece el principal.
                td(colspan="2") Dulfran Montaño, Julio Castaño
                td(colspan="3") Se debe realizar la activación del servidor de respaldo que se encuentra en el rack continuo a las ups.
              tr
                td(style="background-color: #E8E8E8;" colspan="3") Posibles ataques al sitio web por temporada de promociones de productos.
                td(style="background-color: #E8E8E8;" colspan="2") Medio
                td(style="background-color: #E8E8E8;" colspan="2") Activar la VPN y un #[i firewall] adicional.
                td(style="background-color: #E8E8E8;" colspan="2") Dulfran Montaño.
                td(style="background-color: #E8E8E8;" colspan="3") Redireccionar todas las conexiones externas a la red de la empresa por la vpn para establecer un canal seguro de comunicación.
              tr  
                td(colspan="3") Falla de energía eléctrica.
                td(colspan="2") Bajo
                td(colspan="2") Encender la planta de energía.
                td(colspan="2") Julio Castaño
                td(colspan="3") Se debe activar la planta eléctrica mientras la ups respalda los equipos. Esta acción se debe realizar en un periodo máximo de 10 minutos que es la autonomía que ofrece la ups.

    .row.justify-content-center.align-items-center.cajon.color-acento-botones.p-4.mb-4(data-aos="fade-right")
      .col-md-2.col-4.mb-md-0.mb-4
        img.w-75(src='@/assets/curso/tema1/img08.png')
      .col-md-10
        p Como se puede observar, se registran todos los eventos o sucesos ocurridos en un determinado periodo de tiempo; esta información es de vital importancia para realizar un seguimiento a todo lo que ocurre en la organización y adicional a ello, cuando se establecen los recursos necesarios para estas eventualidades en el SGCN, se da prioridad a aquellos sucesos que requieren de mayor cuidado y vigilancia.

    p.mb-5 Ahora bien, la medición del impacto de un suceso se mide por su solución. Esta puede ser baja (como en el caso de la falla eléctrica de la tabla), por ejemplo, debido a que se cuenta con la contingencia, pero si se suma la frecuencia o la cantidad de veces que se presentó en un periodo de tiempo muy corto, se puede analizar que a lo mejor ciertos procesos de negocio pudieron estar inoperables por un considerable periodo de tiempo (si se sumaran todos los intervalos). En el siguiente video se profundiza en el ejemplo descrito en las tablas, junto con otros casos, sobre estas mediciones particulares:

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/uqLT1mJG2fk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2.	Evaluación de riesgos
    
    p.mb-5 Los procesos de evaluación de los riesgos establecen los diferentes niveles y exposición que tiene el negocio cuando se llega a presentar un incidente. La evaluación del riesgo debe realizar un proceso de análisis no solo del impacto sino también de la frecuencia en la que el negocio se encuentra expuesta por este suceso, a través de una categorización de acuerdo con el daño que pueden ocasionar; luego, se crean los planes de contingencia para tratarlos.

    .row.justify-content-center.mb-5
      .col-md-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img09.jpg')})`}"
          )(data-aos="fade-right")
          .bloque-texto-g__texto.p-4
            p.mb-0 En una organización pueden existir riesgos que no pueden ser controlados desde el punto de vista técnico o funcional. Por ejemplo, en un terremoto, que puede suceder en cualquier momento, aunque este no ocurra todos los días, se debe contemplar qué posibilidades existen de su frecuencia debido a la zona en donde se encuentre ubicada la organización. En este caso y de acuerdo con esa realidad se deben adecuar las instalaciones y procesos de negocio de acuerdo con ese contexto de la organización. En algunas ocasiones es difícil pensar que algo pueda ocurrir por el simple hecho de que no ha ocurrido en un determinado lapso de tiempo, pero aunque esto pueda ser algo improbable, se debe igual incluir en los planes de contingencia por muy nula que sea su probabilidad de ocurrir.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-3.col-6.mb-md-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img10.png')
      .col-md-9
        p Los riesgos a menudo se pueden ver como posibles causas cuando no se realiza una correcta evaluación de los mismos. Por tanto, la mayoría de veces no se mide por sus consecuencias y el potencial daño que este pueda ocasionar, y lo fuerte que puede resultar para la organización recuperarse de ese suceso infortunado.
        p Establecer una matriz de riesgo permite que la organización tenga un punto de partida para iniciar la creación de la gestión de la continuidad, pues establece una política para la implementación del SGCN y se inicia la apropiación del mismo. Cabe resaltar que los riesgos son, de alguna manera, procesos que se relacionan con los procesos de mejora continua, es decir hoy puede no existir un riesgo, pero mañana puede detectarse y generar causas de detenimiento en los procesos de negocio, por eso la matriz no es fija sino dinámica y debe contemplar la posibilidad de que puedan surgir nuevos riesgos en el transcurso del tiempo.

    .row.justify-content-center.mb-4
      .col-md-10.BG03.p-3.mb-5(data-aos="fade-right")
        .row.justify-content-around.align-items-center
          .col-4.col-sm-3.col-lg-2
            img(src="@/assets/curso/tema1/img11.png")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1 Métodos para evaluar los riesgos 
                p.text-small En este sencillo video se puede comprender los métodos que se implementan para la evaluación de riesgos en un negocio, aunque como se ha comentado no todas las empresas pueden presentar los mismos riesgos. Este recurso también se encuentra en el material complementario. 
              .col-sm-auto
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=qYWBhFbN-zs " target="_blank")
                  span Ver video
                  i.fas.fa-external-link

    p Los niveles de riesgo se miden por el impacto que puedan causar en los procesos de negocio. A continuación, se describen algunos de ellos.

    TabsB.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-4.py-md-5(titulo="Insignificante" :icono="require('@/assets/curso/tema1/img12.png')")
        .row.justify-content-around.align-items-center
          .col-md-8.order-md-1.order-2
            h4 Insignificante
            p Este nivel de riesgo establece aquellos inconvenientes que no detienen los procesos de negocio y que pueden ser controlados con la asignación de pocos recursos. Adicional a ello, no requieren una gran inversión de tiempo y esfuerzo para su solución. Se suelen determinar por cosas a las cuales se les puede dar manejo desde un punto de vista administrativo u operacional.
            p Ahora bien, es importante aclarar que aunque no requieran de una gran atención y se vean como procesos cotidianos del negocio, el detalle con ellos es que pueden ocasionar que otros riesgos de mayor importancia se activen, debido en parte, porque suelen ser acumulativos; pues al no considerarse de mayor importancia, no se controlan a tiempo. 
            p Este tipo de riesgos están ligados con el tiempo, es decir se debe esperar una temporada para realizarles un monitoreo específico y ver si cambian de estado; es decir si no se presentan o se acompañan con otros tipos de riesgos. 
            p Un ejemplo de ello sería un vehículo que tiene las llantas delanteras con bajo nivel de aire, se podría pensar que este problema no impide que el vehículo realice sus recorridos pero esto puede ocasionar que el vehículo no responda bien en una maniobra que debe realizar o en algunos casos daña la alineación del vehículo; por lo tanto, hay que parar el vehículo para realizarle esa revisión y posterior arreglo. Este es un ejemplo de cómo algo que no puede parecer importante puede afectar otros procesos que pueden complicar la situación en algún momento.
          .col-md-3.col-6.order-md-2.order-1.mb-4.mb-md-0
            img(src="@/assets/curso/tema1/img16.png")
      .py-4.py-md-5(titulo="Dañino" :icono="require('@/assets/curso/tema1/img13.png')")
        .row.justify-content-around.align-items-center
          .col-md-8.order-md-1.order-2
            h4 Dañino
            p Es un nivel de riesgo que requiere un tratamiento especial en el sentido de causa efecto directo; es decir, puede ocasionar pérdidas en el negocio y comprometer la imagen corporativa de la organización.
            p Para el tratamiento de este tipo de riesgos se deben establecer métodos que se activen de manera automática. Su manejo debe ser lo más preciso posible, se debe contemplar la posibilidad de crear alertas específicas para diferenciarlo de los demás y realizar un estudio de impacto del mismo para sopesar la inversión que se requiere para poderlo implementar.
          .col-md-3.col-6.order-md-2.order-1.mb-4.mb-md-0
            img(src="@/assets/curso/tema1/img17.png")
      .py-4.py-md-5(titulo="Crítico" :icono="require('@/assets/curso/tema1/img14.png')")
        .row.justify-content-around.align-items-center
          .col-md-8.order-md-1.order-2
            h4 Crítico
            p Es un nivel de riesgo que requiere tener un protocolo de acción bien establecido y maduro. Debe ser probado y contar con un equipo de respuesta inmediata. La mayoría de veces que un tipo de riesgo como este tiene éxito colapsa más de un proceso al tiempo. 
            p Estos suelen suceder de manera no continua pero ocasionan grandes pérdidas en el negocio. Un ejemplo de ello podría ser el daño estructural del techo del centro de datos y que llueva ese día ocasiona una catástrofe prácticamente en los procesos de negocio, ya que primero la estructura es ya un problema que generará en su momento costos de reparación pero los daños a los dispositivos de conectividad, entre otros, ocasionará otras pérdidas, por lo tanto es un daño que generó otro daño. Para  un caso tan particular como este, se tendría que  tener un centro de datos alterno o un servicio #[i cloud] para respaldar los sistemas mientras se restauran los servicios principales del centro de datos. 
            p Un riesgo crítico no solo hay que verlo desde el punto de vista ocasionado de forma principal sino aquellos sucesos que lo acompañan y hacen más compleja su solución.
          .col-md-3.col-6.order-md-2.order-1.mb-4.mb-md-0
            img(src="@/assets/curso/tema1/img18.png")
      .py-4.py-md-5(titulo="Catastrófico" :icono="require('@/assets/curso/tema1/img15.png')")
        .row.justify-content-around.align-items-center
          .col-md-8.order-md-1.order-2
            h4 Catastrófico
            p Es un nivel de riesgo que requiere tener un protocolo de acción bien establecido y maduro. Debe ser probado y contar con un equipo de respuesta inmediata. La mayoría de veces que un tipo de riesgo como este tiene éxito colapsa más de un proceso al tiempo. 
            p Estos suelen suceder de manera no continua pero ocasionan grandes pérdidas en el negocio. Un ejemplo de ello podría ser el daño estructural del techo del centro de datos y que llueva ese día ocasiona una catástrofe prácticamente en los procesos de negocio, ya que primero la estructura es ya un problema que generará en su momento costos de reparación pero los daños a los dispositivos de conectividad, entre otros, ocasionará otras pérdidas, por lo tanto es un daño que generó otro daño. Para  un caso tan particular como este, se tendría que  tener un centro de datos alterno o un servicio #[i cloud] para respaldar los sistemas mientras se restauran los servicios principales del centro de datos. 
            p Un riesgo crítico no solo hay que verlo desde el punto de vista ocasionado de forma principal sino aquellos sucesos que lo acompañan y hacen más compleja su solución.
          .col-md-3.col-6.order-md-2.order-1.mb-4.mb-md-0
            img(src="@/assets/curso/tema1/img19.png")

    .row.justify-content-center.align-items-center.cajon.color-primario.p-4.mb-4(data-aos="fade-right")
      .col-md-2.col-4.mb-md-0.mb-4
        img.w-75(src='@/assets/curso/tema1/img20.png')
      .col-md-10
        p #[i Cloud computing] es un modelo de infraestructura tecnológica que propone el uso de servicios tercerizados que garantizan la continuidad del negocio, teniendo en cuenta que son grandes las compañías que respaldan estos servicios en #[i hardware], #[i software], comunicaciones y energía. Brindan confiabilidad y permiten abaratar los costos de uso de la tecnología, pues no es lo mismo tener un centro de datos donde se debe estar preocupado por la seguridad, por la energía y el mantenimiento de los equipos con los que requiere sostener los procesos de negocio, generando grandes costos e inversión, que con la posibilidad de contratar un servicio en la nube por un precio menor. Además del gran respaldo debido a su centro de datos, que muy seguramente una empresa por sí misma no puede alcanzar. En ese sentido, se vuelve una estrategia más rentable y mejor desde todos los puntos de vista.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
