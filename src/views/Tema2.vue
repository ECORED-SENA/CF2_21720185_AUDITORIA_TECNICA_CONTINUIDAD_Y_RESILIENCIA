<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 ¿Qué es el BIA?
    
    p El BIA o análisis de impacto en el negocio (por sus siglas en inglés) es un componente del SGCN que mide el tiempo en el cual un proceso de negocio deja de estar disponible u operable. Su finalidad principal es analizar los procesos que tienen mayor impacto en el negocio desde un punto de vista operativo. Se podría decir que pretende visualizar no solo los riesgos que se pueden presentar en el presente sino también tener una estimación de cómo puede ser su comportamiento en el futuro. 
    p.mb-5 Los tiempos en los cuales el sistema no se encuentra operable están estrechamente relacionados con la naturaleza del negocio, es decir no todos los BIA son iguales para las organizaciones, tal como se evidencia a través de los siguientes dos ejemplos:

    .BG04.p-4.mb-4(data-aos="zoom-in")
      SlyderA.img02(tipo="b")
        .row.justify-content-center
          .col-md-5.order-md-1.order-2
            .h4 Ejemplo 1
            p Una plataforma web de una organización comercializa los productos que esta vende 24 / 7. Es decir, debe tener una disponibilidad casi ininterrumpida en su canal comercial.  Si esta se llegase a encontrar fuera de servicio, los minutos contarían como pérdidas para el negocio. Por está razón, se podría decir que para esta empresa la plataforma web tiene un impacto severo en su servicio y funcionamiento.
          .col-md-7.col-10.order-md-2.order-1.mb-md-0.mb-4
            img(src='@/assets/curso/tema2/img01.png')
        .row.justify-content-center
          .col-md-5.order-md-1.order-2
            .h4 Ejemplo 2
            p Una empresa realiza la publicidad y mercadeo de una compañía que comercializa bebidas refrescantes, cada semana.  Fácilmente se puede deducir que el impacto es muy bajo puesto que su proceso de negocio no es continuo y si llega a ocurrir un incidente tiene tiempo suficiente para poder aplicar estrategias y por ende, recuperar los procesos de negocio que se requieran. Es aquí donde se hace evidente la diferencia entre los niveles de impacto que puede generar un riesgo dentro de la empresa.
          .col-md-7.col-10.order-md-2.order-1.mb-md-0.mb-4
            img(src='@/assets/curso/tema2/img02.png')
    
    p El BIA se debe realizar en todos los procesos que tiene la organización para luego estimar cuál de ellos requiere mayor atención y recursos, los cuales son necesarios para establecer dichos planes de contingencia.

    .row.justify-content-center.mb-5
      .col-md-10
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img03.jpg')})`}"
          )(data-aos="fade-right")
          .bloque-texto-g__texto.p-4
            p.mb-0 Por ejemplo, un negocio tiene problemas constantes de energía. La empresa entonces debe primero realizar un proceso de licitación, luego escoger el proveedor que mejor se ajuste a las necesidades y con la oferta que se tenga, adquirir una planta eléctrica como plan de contingencia y así tener continuidad en el negocio. Esta toma de decisión debe estar justificada en dinero. Es decir, se debe conocer si la inversión es menor a las pérdidas actuales dadas por el suceso y en cuánto tiempo se recuperará. Las organizaciones, entonces, deben garantizar la continuidad de los procesos para funcionar y generar las ganancias trazadas.

    .row.justify-content-center.mb-5
      .col-md-7.order-md-1.order-2
        p El BIA es un proceso dinámico, por tanto, no existe una fórmula mágica en la cual este proceso funcione igual en todas las organizaciones. Cada una debe construir su propio análisis de impacto de acuerdo con los procesos de negocio y necesidades, el cual inicia dando respuesta a las siguientes preguntas: 
        ul.lista-ul
          li 
            i.fas.fa-atom
            | ¿Cuáles son los procesos críticos de negocio? 
          li 
            i.fas.fa-atom
            | ¿Cuál es el impacto que tiene cada riesgo en el negocio? 
          li 
            i.fas.fa-atom
            | ¿Qué recursos se requieren para la implementación del BIA? 
      .col-md-5.order-md-2.order-1.mb-md-0.mb-0(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img04.png')

    .row.mb-4
      .col-auto.BG05.p-2(data-aos="fade-right")
        .h4.mb-0 Sus respuestas permitirán orientar la ruta de trabajo para iniciar su proceso.
    
    p Para un BIA existen diferentes tipos de impactos que se pueden generar, los cuales se deben establecer a partir de un criterio propio para ellos. A continuación, se presentan los diferentes tipos de impactos que se ocasionan en un BIA:
    
    AcordionA.mb-5(tipo="a" clase-tarjeta="BG06")
      .row.justify-content-center(titulo="Impacto operacional")
        .col-md-11
          p Es aquel que por su naturaleza no logra cumplir las expectativas en la calidad del producto o servicio que se desea ofrecer, ocasionando retrasos en algunos procesos del negocio. 
          p Un ejemplo de ello sería una cadena de inventario. No es un secreto que el proceso de llevar inventarios en una organización es fundamental para otros procesos como ventas, facturación y compras; esto quiere decir que si se detiene el proceso de manejo de inventarios,  la empresa tendría de alguna manera que manejar de forma manual este proceso y por tanto, va a requerir mucho esfuerzo de tiempo.  
      .row.justify-content-center(titulo="Impacto económico")
        .col-md-11
          p Esto se ve reflejado en pérdidas en ventas o en sanciones impuestas por incumplimientos ocasionados, por no contar con el sistema operable. En algunas ocasiones, este riesgo puede generar sobre costos en las operaciones y generar una doble pérdida para el mismo. 
          p Siguiendo con el ejemplo de los inventarios (expuesto en el impacto operativo), en el que se tienen problemas en esta área, podrían causar retraso en los pedidos y por ende, los clientes pueden llegar a sugerir que se les devuelva el dinero, cancelarlos o hasta sancionarlos por incumplimiento. Entonces, desde el punto de vista del riesgo de impacto económico, es de tener en consideración todas las causantes que este pueda ocasionar de acuerdo a los procesos que sean soportados con el mismo.
      .row.justify-content-center(titulo="Impacto de reputación")
        .col-md-11
          p Suelen ser mucho más dañinos, en algunas ocasiones, que las pérdidas económicas puesto que esta última genera la problemática una sola vez pero la reputación se puede ver afectada por un alcance mayor.  
          p Por ejemplo, la cadena de suministros o logística de una empresa no puede entregar los productos en las fechas planteadas al cliente, implicando su insatisfacción y pérdida económica, trayendo como consecuencias adicionales la pérdida del cliente y de otros más, al enterarse por parte de él su experiencia. Esto, entonces, causaría una perdida de mayor escala y probablemente le cueste mucho a la organización invertir en publicidad para poder cambiar esa imagen que se proyecta de incumplimiento por parte de la organización.
      .row.justify-content-center(titulo="Impacto legal o contractual")
        .col-md-11
          p Se refiere al momento en el que la empresa interrumpe el proceso de negocio llevando a incumplir un contrato, el cual está estrechamente relacionados con aspectos legales en los que se generan pagos por multas y sanciones. 
          p Este mismo, puede llegar a relacionarse directamente con el impacto de reputación, si la empresa llega a verse  involucrada en un escándalo contractual.
      .row.justify-content-center(titulo="Impacto en el tiempo")
        .col-md-11
          p Este factor se analiza luego de ocurrido el suceso, es decir cuándo se considera que el impacto empieza a realizar pérdidas o compromete la organización en algún proceso.

    p El BIA es una herramienta que brinda la oportunidad de mejorar en los aspectos que realmente lo requiere el negocio y poder alcanzar la mejora continua en todos los aspectos, tanto operativos como administrativos. Por lo que, Para desarrollar efectivamente un plan de continuidad del negocio es importante tener en cuenta las siguientes características:

    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Diseño de estrategia")
        .row.justify-content-center.align-items-center
          .col-md-5.col-10.mb-md-0.mb-4
            img(src='@/assets/curso/tema2/img05.jpg')
          .col-md-6
            h4 Diseño de estrategia
            p Diseñar una estrategia que incluya los impactos ocasionados en el negocio con la finalidad de reducir la inoperatividad del sistema, que como bien se sabe afecta de manera directa las funciones sustantivas de la organización y por lo tanto, deja de generar recursos. Es importante verlo desde el punto de vista de los procesos más críticos, pues las interrupciones que se originen en este harán que la empresa empiece a perder prestigio y posicionamiento.
      .py-3.py-md-4(titulo="Identificación de recursos críticos")
        .row.justify-content-center.align-items-center
          .col-md-5.col-10.mb-md-0.mb-4
            img(src='@/assets/curso/tema2/img06.jpg')
          .col-md-6
            h4 Identificación de recursos críticos
            p Permite verificar cuáles son los puntos críticos de la organización en cuanto a sus procesos y en caso de ocurrir una eventualidad darles prioridad al momento de ejecutarse el SGCN. En este aspecto, se tienen en cuenta los recursos humanos, financieros y tecnológicos para garantizar que se restablezcan en el menor tiempo posible porque son los que generan mayor impacto negativo en la organización.
      .py-3.py-md-4(titulo="Plan de pruebas")
        .row.justify-content-center.align-items-center
          .col-md-5.col-10.mb-md-0.mb-4
            img(src='@/assets/curso/tema2/img07.jpg')
          .col-md-6
            h4 Plan de pruebas
            p Se debe elaborar un plan de pruebas direccionado a la obtención de resultados de los procesos implementados. Como se ha mencionado no solo es importante realizar los planes de contingencia, de acuerdo a los impactos en el negocio, sino crear escenarios que estén orientados a la realidad para probar la efectividad de los mismos. En algunas ocasiones, se cuentan con los planes y con todos los procesos pero se carece de pruebas lo que puede ocasionar que en el momento que se requieran, estos no funcionen de la manera correcta y esperada. 
      .py-3.py-md-4(titulo="Capacitaciones")
        .row.justify-content-center.align-items-center
          .col-md-5.col-10.mb-md-0.mb-4
            img(src='@/assets/curso/tema2/img08.jpg')
          .col-md-6
            h4 Capacitaciones
            p Dentro del plan de contingencia es necesaria la realización de  capacitaciones a las cuales se debe someter el personal encargado para que estén siempre a la vanguardia de los nuevos sucesos que se pueden presentar en el negocio; de hecho, este es un insumo importante para la modificación de los planes de contingencia, ya que cada día salen nuevas vulnerabilidades y riesgos por lo tanto siempre es importante estar alertas.        

    .row.justify-content-center.align-items-center.cajon.color-acento-botones.p-4.mb-4(data-aos="fade-right")
      .col-md-2.col-4.mb-md-0.mb-4
        img.w-75(src='@/assets/curso/tema1/img08.png')
      .col-md-10
        p Los procesos de negocio se ven afectados a diario por diferentes factores los cuales colocan en riesgo su correcto funcionamiento. Es importante establecer las diferentes estrategias para mejorar la confiabilidad de los procesos de negocio, pues al final lo que se busca, con todos estos procesos, es garantizar el funcionamiento, aun ocurriendo inconvenientes en el mismo. 
    
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1.	Medición del impacto de un BIA
    
    p La medición del impacto de negocio tiene varios procesos a realizar los cuales permiten garantizar que se puedan crear acciones correctivas y preventivas para evitar que el negocio sufra inconvenientes en su operatividad. La medición de impacto inicia con la recolección de información. A continuación, se pressentan algunas consideraciones a tener en cuenta para realizar este proceso:

    ImagenInfografica.color-primario.mb-5(data-aos="zoom-in")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema2/img09.svg')
      .BG02.p-3(x="46.8%" y="40.5%")
        .h4.mb-2 Reunir información
        p La organización debe contar con procesos que permitan obtener la información necesaria para dar inicio a una medición del impacto al negocio. Hay que recordar que los procesos que se realizan en la organización están generando información constantemente, la cual involucra a su vez a las personas que están a la cabeza o son las responsables del proceso que generen. Existen varias técnicas  de recolección. Un ejemplo de ellas son: encuestas, entrevistas y talleres.
      .BG02.p-3(x="64%" y="16%")
        .h4.mb-2 Encuesta
        p La información de los impactos causados en la organización se obtiene de una manera correcta entrevistando a las personas involucradas en dichos procesos; en algunas ocasiones, estas personas han realizado procedimientos que han permitido llegar a la solución pero no se sabe porqué no se socializa, en la mayoría de ocasiones, con los interesados del proceso.
      .BG02.p-3(x="70%" y="27.3%")
        .h4.mb-2 Entrevistas
        p Se realiza un conjunto de preguntas a las diferentes secciones de la organización con el fin de indagar sobre los inconvenientes que presentan con respecto al funcionamiento de los procesos de negocio, en sus áreas particulares; de esta manera, se puede generar una base de datos de cómo está funcionando cada proceso de manera individual.
      .BG02.p-3(x="64%" y="40.5%")
        .h4.mb-2 Talleres
        p Permite articular los procesos de acuerdo a cómo se visualizan en la organización; es decir, se pueden colocar de manera conjunta para ver cómo es su interacción y revisar cómo afecta en la continuidad del negocio. Esta estrategia suele dar buenos resultados porque en ocasiones se puede visualizar que no se está trabajando de manera articulada para lograr el objetivo sino que cada proceso está aislado el uno del otro.
      .BG02.p-3(x="59.5%" y="57.5%")
        .h4.mb-2 Evaluar la información recopilada
        p Una vez recopilada la información, de acuerdo a las técnicas mencionadas anteriormente, se debe realizar un proceso riguroso en el cual se examine la información recopilada para realizar la búsqueda de patrones que permitan establecer las diferentes estrategias que pueden ayudar a los procesos de negocio a ser mucho más eficientes y efectivos en la organización. Para realizar una correcta evaluación de los datos se deben tener una consideraciones en cuenta como lo son: su veracidad, calidad y validez. 
      .BG02.p-3(x="87%" y="57.5%")
        .h4.mb-2 Veracidad de la información
        p Para este factor es importante establecer que las preguntas y tipo de instrumentos para la recolección de la información no permite generar ambigüedades en las respuestas que deben proporcionar las personas encuestadas y entrevistadas. En ocasiones, las preguntas que se realizan no permiten que el entrevistado o encuestado sea sincero por temor a represalias o que pueda ser señalado por errores cometidos en los procesos de ejecución de su labor. Por eso, las preguntas deben estar elaboradas de tal manera que la persona sea lo más sincera posible para garantizar que la información sea veraz en la mayoría de sus aspectos.
      .BG02.p-3(x="93%" y="68.3%")
        .h4.mb-2 Calidad de la información
        p Es importante que desde un punto de vista propio, la información pueda ser medida y que tenga una validez desde los factores técnicos y/o operativos; es decir, que no se utilice un lenguaje fuera del contexto técnico propio del proceso. Este acto está ligado a la comprensión de la información y que al momento de utilizarla aporte los insumos necesarios para tomar decisiones acertadas y mejores.
      .BG02.p-3(x="87%" y="79.7%")
        .h4.mb-2 Comprobable
        p Uno de los problemas que surge al momento de solicitar información, sea cual sea el instrumento que se utilice, es que siempre existe un margen en el cual la información puede ser comprobada o validada con datos históricos o recopilados de procesos de seguimiento que sustenten los datos e información suministrada.  Un ejemplo de esto sería un empleado en una entrevista comenta que solo se han generado 2 fallas graves en el centro de datos pero en realidad no lleva un registro sobre esos sucesos presentados; por lo tanto, la información que suministra ayuda al proceso pero pierde trazabilidad y en la mayoría de los casos se termina no usando esta información o desechando porque no es comprobable.
      .BG02.p-3(x="49.3%" y="74.8%")
        .h4.mb-2 Realizar un informe para dar a conocer los hallazgos presentados
        p Para este factor se debe considerar tener en cuenta todos los pasos anteriores ya que estos involucran la necesidad de entregar un documento que permita tener una información filtrada y completamente verídica para poder tomar las decisiones que más convenga al negocio. Este informe debe contener un idioma comprensible para que la alta dirección pueda conocer de manera sencilla todos los hallazgos encontrados y de allí empezar a mirar cuáles serían los posibles planes de contingencia que se deben adoptar para que estos riesgos e inconvenientes sean subsanados en el menor tiempo posible.

    p De igual forma, existen una serie de factores en la conformación del BIA para la medición de los impactos ocasionados al negocio, de acuerdo con MinTIC (2015) y son los mostrados en la siguiente figura 3: 

    .row.justify-content-center.align-items-center.mb-4
      .col-md-10.mb-md-0.mb-4
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 3
          span Factores de un BIA
      .col-md-3.col-10.mb-md-0.mb-4.order-md-1.order-2(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          h5 RPO
        p.mb-5 (#[i Recovery Point Objective]) o punto de recuperación objetivo. Es el rango de tolerancia que la entidad puede tener sobre la pérdida de datos y el evento de desastre.
        .titulo-sexto.color-acento-botones
          h5 WRT
        p.mb-0 (#[i Work Recovery Time]). Es el tiempo invertido en buscar datos perdidos y realizar reparaciones. Se calcula como el tiempo entre la recuperación del sistema y la normalización de los procesos.
      .col-md-4.col-8.mb-md-0.mb-4.order-md-2.order-1(data-aos="zoom-in")
        img(src='@/assets/curso/tema2/img10.png')
      .col-md-3.col-10.order-3.mb-4(data-aos="fade-left")
        .titulo-sexto.color-secundario
          h5 MTD
        p.mb-5 (#[i Maximun Tolerable Downtime]) o tiempo máximo de inactividad tolerable. Es el tiempo en el cual los procesos de negocio se encuentran inoperables luego de que un suceso ocurra.
        .titulo-sexto.color-primario
          h5 RTO
        p.mb-0 (#[i Recovery Time Objective]) o tiempo de recuperación objetivo. Es el tiempo que transcurre cuando sucede un inconveniente y los procesos de negocio se recuperan en su totalidad y vuelven a ser operables de manera correcta en el negocio.
      .col-md-10.BG02.p-4.order-4(data-aos="fade-right")
        p Estos aspectos reflejan las circunstancias en las cuales se puede ver expuesto el negocio cuando un suceso ocurre y este a su vez arroja unos resultados que definen las estrategias a seguir para la recuperación de los procesos de manera completa. No obstante,  cuando se analizan estos conceptos sin valores de proceso acompañándolos no parecen tan ofensivos que cuando se establecen valores numéricos para ver el impacto real que estos podrían tener en el negocio.

    p Ahora bien, luego de la recolección de la información, se inicia el proceso para su realización, el cual se evidencia en el siguiente gráfico, en el que se desarrollará en este punto los dos primeros pasos, críticos para su correcto establecimiento:

    ImagenInfograficaB.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema2/img11.svg')
      .row.justify-content-center.align-items-center.BG07.p-4(x="2.5%" y="40%" tooltip="Identificación de funciones y procesos" numero="+")
        .col-6
          h5 Identificación de funciones y procesos
          p En este paso se deben establecer todos los procesos que se requieren para realizar la misión de la organización.
        .col-6
          img(src='@/assets/curso/tema2/img12.jpg')
      .row.BG07.p-4(x="16.5%" y="40%" tooltip="Evaluación de impactos operacionales" numero="+")
        .h4 Evaluación de impactos operacionales
        p Se pretende evaluar todos los procesos negativos que pueden generar que el proceso de negocio no funcione de manera adecuada. También se define su escala.
        p #[strong Nivel A]: son procesos con carácter crítico. Son aquellos que una vez ocurren no permiten que la organización pueda realizar sus procesos de negocio de manera correcta o no puedan realizarse.
        p #[strong Nivel B]: están integrados a la organización; es decir, se depende mucho de ellos para la ejecución de otros procesos y sin estos la organización no podría operar de manera correcta; sin embargo, la operación no es crítica y puede ser subsanada de una manera sencilla.
        p #[strong Nivel C]: la operación no es parte integral del negocio por lo tanto la afectación para este caso es mínima y puede ser solucionada de manera sencilla sin causar traumatismo en los procesos de negocio.
    
    p.mb-5 Ahora bien, en la siguiente tabla se observa un ejemplo de cómo se deben definir los niveles de criticidad de los procesos de negocio de la organización teniendo en cuenta que algunos de ellos son parte integral del negocio y otros no (ver tabla 3):

    .row.justify-content-center.mb-4
      .col-md-10
        .titulo-sexto.color-secundario.mb-4(data-aos="fade-right")
          h5 Tabla 3
          span Criticidad del proceso en el negocio

        .tabla-a.mb-5(data-aos="zoom-in")
          table
            tbody
              tr
                th(style="background-color: #F7CC54;" colspan="3") Función del negocio
                th(style="background-color: #F7CC54;" colspan="2") Proceso del negocio
                th(style="background-color: #F7CC54;" colspan="2") Nivel de criticidad
                th(style="background-color: #F7CC54;" colspan="2") Tiempos de inactividad (Horas)
                th(style="background-color: #F7CC54;" colspan="3") Especificación
              tr  
                td(colspan="3") Aplicaciones de negocio
                td(colspan="2") Sistema de facturación, inventarios, cartera.
                td(colspan="2") B
                td(colspan="2") 2
                td(colspan="3") Aplicaciones que llevan los procesos de negocio principal de la organización.
              tr
                td(style="background-color: #E8E8E8;" colspan="3") Sistema de almacenamiento
                td(style="background-color: #E8E8E8;" colspan="2") Servidor de base de datos
                td(style="background-color: #E8E8E8;" colspan="2") A
                td(style="background-color: #E8E8E8;" colspan="2") 1
                td(style="background-color: #E8E8E8;" colspan="3") Almacenamiento de los datos.
              tr  
                td(colspan="3") Sitio web
                td(colspan="2") Aplicación de ventas por internet
                td(colspan="2") A
                td(colspan="2") 1
                td(colspan="3") Compras de catálogo por internet.
              tr
                td(style="background-color: #E8E8E8;" colspan="3") Comunicaciones
                td(style="background-color: #E8E8E8;" colspan="2") Uso de telefonía.
                td(style="background-color: #E8E8E8;" colspan="2") C
                td(style="background-color: #E8E8E8;" colspan="2") 3
                td(style="background-color: #E8E8E8;" colspan="3") Llamadas a clientes.

    p En dicha tabla se tiene un claro ejemplo de cómo se establecen los niveles de criticidad de acuerdo con el proceso de negocio. Estos valores pueden cambiar dependiendo de cómo evolucione el proceso en el tiempo, ya que el proceso puede tomar menos relevancia dependiendo del nivel de apropiación de los mismos en la organización. Es válido recordar que los procesos de negocio se deben ver desde un punto de vista integral, pues muchos de ellos se encuentran conectados con otros procesos y, por tal razón, pueden generar mayor afectación dependiendo de qué tan crítico puedan ser.

    .BG03.p-4.mb-4(data-aos="fade-right")
      p.mb-0 De igual forma, se debe tener en cuenta que estos tiempos que se suministran en horas son establecidos de tal manera que la empresa no colapse. Son tiempos tolerables en los cuales no entra en proceso crítico la organización. Es importante que la empresa identifique cuáles son los puntos vulnerables a fallos para evitar que un proceso pueda recaer en criticidad.

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2.	Estrategias y plan de gestión de incidentes

    .row.justify-content-center.align-items-center.mb-4
      .col-md-9.order-md-1.order-2
        p Las estrategias son patrones estructurados de actividades que se diseñan para mantener una ruta específica y así lograr un objetivo propuesto. Sin estrategias, en la mayoría de los casos, se puede llegar al colapso de un proceso. Estas están presentes en cada momento que se llega a cometer errores en el proceso, o por causas que podrían ser naturales o de carácter del mismo, pueden ocasionar las interrupciones en el negocio. Es aquí donde surge la garantía de un plan de gestión de incidentes el cual debe activarse, una vez se requiera, para controlar el suceso que se está presentando. Estos planes deben reflejar las acciones a realizar para corregir el daño o proceso que está perjudicando el correcto funcionamiento del proceso de negocio. Todo esto debe ser realizado con previa planificación. En el siguiente recurso se ejemplifica un poco más sobre lo anteriormente descrito:
      .col-md-3.col-6.order-md-2.order-1.mb-md-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img13.png')

    .row.justify-content-center.mb-4
      .col-md-10.mb-4
        .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
          .col-2.img03
            img(src='@/assets/curso/tema2/img14.png')
          .col-10.BG08.p-4
            p.ms-5.mb-0 El objetivo principal de un plan de gestión de incidentes es identificar los incidentes que se puedan presentar y establecer las acciones necesarias para solucionar en el menor tiempo posible el problema.
        .row.justify-content-center.align-items-center(data-aos="fade-left")
          .col-10.BG09.p-4
            p.me-5.mb-0 Es importante que estos pasos o procesos indicados en el objetivo y que se deben llevar a cabo para la solución del incidente, sean precisos y eficientes, puesto que cada minuto que pasa es fundamental para el negocio.
          .col-2.img04
            img(src='@/assets/curso/tema2/img15.png')
      .col-md-4.col-8(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img16.png')
      .col-md-6
        p En algunos casos, por ejemplo, que la recuperación del proceso depende de la vida de una persona, es cuando más critico se puede visualizar el proceso. 
        p Imaginemos un hospital que presta sus servicios de salud para una población específica en el que se tienen pacientes quienes dependen de que el dispositivo que los mantiene con vida necesite de fluido de energía constante y este sistema principal sufre una avería. 
        .row.align-items-center
          .col-10.BG10.p-4
            p.me-5.mb-0 El plan de gestión de incidentes debe no solo activarse de manera inmediata sino que este debe tener un protocolo a seguir muy estricto porque el tiempo en este caso es fundamental para este proceso de negocio.
          .col-2.img04(data-aos="fade-left")
            img(src='@/assets/curso/tema2/img17.png')

    p.mb-5 Un plan de gestión de incidentes se desarrolla teniendo en cuenta los procesos de negocio que se establezcan en el mismo. En la siguiente figura 4, se presentan cada una de sus etapas: 

    .row.justify-content-center.mb-4
      .col-md-10
        .titulo-sexto.color-secundario.mb-0(data-aos="fade-right")
          h5 Figura 4
          span Etapas de un plan de incidentes
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/img18.svg')
    
    p.mb-5 Estas etapas definen cada proceso en los cuales se deben establecer los protocolos a seguir para la aplicación del plan de gestión de incidentes. A continuación, se detallará cada uno de ellos:

     AcordionA.mb-5(tipo="a" clase-tarjeta="BG06")
      .row.justify-content-center(titulo="Identificación del incidente")
        .col-md-11
          p En este paso se deben identificar todos los incidentes que se pueden presentar en los procesos de negocio. Este proceso es fundamental puesto que en algunas ocasiones se desconocen procesos que pueden también generar traumatismo. Es importante identificar la mayor cantidad de procesos la conexión que tienen con los demás para garantizar una mayor cobertura.
          p La identificación del incidente se debe ingresar la siguiente información:
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span a
              |Título o identificador del incidente.
            li 
              .lista-ol--cuadro__vineta
                span b
              | Descripción.
            li 
              .lista-ol--cuadro__vineta
                span c
              | Fecha.
            li 
              .lista-ol--cuadro__vineta
                span d
              | Nombre de quién gestiona el incidente.
          p Estos datos proporcionados garantizarán que una vez se presente el incidente, se podrá consultar e identificar de una manera más sencilla y eficiente, pues el tiempo de procesamiento y búsqueda de la información entre menor sea, mucho mejor para el proceso.
      .row.justify-content-center(titulo="Clasificación del incidente")
        .col-md-11
          p La clasificación de un incidente se basa principalmente en su descripción. Pues en esta se debe relacionar su naturaleza y lo que ocasiona para poder solucionar correctamente el mismo.  No existe un manual o regla específica para detallar la descripción del incidente pero sí se puede tomar algunas en particular para tener en cuenta:
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span a
              | Contextualizar el incidente en el cual se está trabajando. Por  ejemplo, si el incidente es de aplicaciones, relacionar esa palabra dentro de la descripción del mismo.
            li 
              .lista-ol--cuadro__vineta
                span b
              | Utilizar un lenguaje comprensible para describir el incidente y lenguaje técnico al momento de nombrar algunos componentes relacionados con la naturaleza del mismo.
            li 
              .lista-ol--cuadro__vineta
                span c
              | Precisar al momento de describir el incidente. No es colocar  conceptos o palabras que no lleven a una identificación específica del mismo.
      .row.justify-content-center(titulo="Priorización del incidente")
        .col-md-11
          p Se realiza un diagnóstico de todos los incidentes encontrados al momento de realizar el rastreo inicial de los mismos. Una vez se tienen plenamente identificados se inicia un proceso de priorización, de acuerdo a la incidencia que tienen en el negocio. Es importante que estos procesos se encuentren en un plan de mejora continua donde tengan vigilancia constante para evitar que se puedan presentar incidentes futuros.
          p A continuación se muestra un ejemplo de priorización de incidentes.
          .row.justify-content-center.mb-4
            .col-md-4.col-8.mb-md-0.mb-4
              img(src='@/assets/curso/tema2/img19.png')
            .col-md-8
              p Como se puede observar, cada incidente debe ser priorizado de acuerdo a la incidencia que se genere en el negocio. 
              p Se podría pensar que la telefonía puede estar en la misma priorización de la iluminación pero sucede lo siguiente: la telefonía se puede subsanar mediante el uso de un plan de datos, u otra alternativa, mientras que la iluminación no puede ser reemplazada rápidamente y menos con cualquier elemento. Esto quiere decir que las personas que trabajan en esa oficina deben hacerlo solo de día o en un horario específico por temas de visión, entre otros, por esta razón se le da un punto más de priorización que la telefonía. 
              p De esta manera se estima la priorización de los incidentes que luego deben ser tratados mediante un plan de gestión.
      .row.justify-content-center(titulo="Respuesta al incidente")
        .col-md-11
          p De acuerdo al nivel de priorización, se irán evacuando los incidentes, iniciando por aquellos que  tengan mayor trascendencia en el negocio; es decir, los que se requieren como parte integral del negocio. En algunos casos muchos de esos incidentes deben ser escalados a otros departamentos de acuerdo a la naturaleza del mismo, ocasionando algunos retrasos en la respuesta de los procesos. De ahí la importancia de establecer previamente la dinámica de los procesos y los actores que intervienen en los mismos. 
          p Existen incidentes que requieren un mayor grado de monitoreo y seguimiento por parte de los encargados. Estos casos requieren la asignación de recursos (tecnológicos, humanos o financieros) para lograr un mayor control sobre los mismos. También existen riesgos que son de naturaleza tercerizada y por tanto, su  solución depende de un tercero (como los servicios de internet, por ejemplo), en cuyo caso lo mejor es realizar un estudio de viabilidad al momento de realizar las contrataciones de este tipo y cerciorarse que la empresa que se está contratando cumpla con las expectativas que necesita el negocio, incluida la capacidad de respuesta a los incidentes que se puedan presentar.
      .row.justify-content-center(titulo="Cierre del incidente")
        .col-md-11
          p Esta es la etapa final en la cual culmina el proceso de gestión de incidentes. Aquí se da un diagnóstico de los resultados presentados en el incidente, se recopilan evidencias que sustentan que el incidente fue solucionado de manera correcta y una verificación, mediante pruebas específicas, para demostrar el correcto funcionamiento y atención al mismo. En algunas ocasiones se emite un informe donde se da a conocer los procesos realizados y cómo se llegó a la solución del incidente.
          p En esta etapa conviene guardar cualquier clase de documentación que se haya generado en los pasos anteriores y una posterior  retroalimentación del proceso de manera positiva en la mayoría de los casos, para todos los involucrados. Esto también permite ver, si en algún momento se requiere, procesos anteriores y bases de datos de sucesos. De tal forma que si alguno  se repite, exista ya la solución de este incidente y por ende la ruta de procesos para su solución.








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
