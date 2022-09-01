<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Monitoreo de procesos de continuidad de negocio
    
    p.mb-5 El monitoreo de los planes de continuidad del negocio se realiza con el fin de establecer un proceso de pruebas elaboradas y soportadas bajo unos escenarios específicos para garantizar el correcto funcionamiento y ejecución de los SGCN; pues, como se ha mencionado, de nada sirve crear un excelente plan de continuidad sino se prueba y no se verifica que este funciona de la mejor manera. Existen varios factores a analizar en un proceso de monitoreo de un SGCN, los cuales se mencionan a continuación:

    AcordionA.mb-5(tipo="a" clase-tarjeta="BG06")
      .row.justify-content-center(titulo="Verificación de los objetivos planteados")
        .col-md-3.col-6.mb-md-0.mb-4
          img(src='@/assets/curso/tema5/img01.png')
        .col-md-7
          p Esto es algo de suma importancia puesto que al inicio del plan de continuidad se establecen los objetivos de lo que se quiere lograr y cómo se va a lograr. Al encontrar que hay un factor que no está cumpliendo con su razón de ser, se da por comprendido que las estrategias que se están utilizando no están dando sus frutos como debería ser y por tanto, hay que realizar ajustes para mejorar la situación que se está presentando.
          p El no cumplimiento de los objetivos es motivo de buscar otro enfoque y visión del SGCN.
      .row.justify-content-center(titulo="Reuniones")
        .col-md-3.col-6.mb-md-0.mb-4
          img(src='@/assets/curso/tema5/img02.png')
        .col-md-7
          p Esta estrategia se debe definir desde el principio de la conformación del equipo de trabajo del SGCN y debe seguir un cronograma de reuniones en el cual se trabajen los temas relacionados con el sistema de gestión: qué dificultades ha tenido, si existen cambios alrededor del comportamiento de los procesos que este debe soportar, si se están cumpliendo los tiempos establecidos para dar respuesta a los incidentes ocurridos en el transcurso del tiempo en el cual el sistema ha estado operable y/o si existen cambios a realizar o ajustes de acuerdo al proceso de monitoreo realizado.
          p Estas reuniones deben ser lo más precisas posibles y su función consiste en detectar si existe algún problema y cómo solucionarlo. Esta información se utiliza para plantear los planes de mejora que se deben establecer en el sistema de gestión.
      .row.justify-content-center(titulo="Diseño de escenarios de prueba")
        .col-md-3.col-6.mb-md-0.mb-4
          img(src='@/assets/curso/tema5/img03.png')
        .col-md-7
          p Una manera efectiva de realizar el monitoreo de un SGCN es estar constantemente realizando pruebas para verificar su correcto funcionamiento. Esto implica la creación de escenarios de prueba que permitan verificar los detalles presentados en los procesos de negocio.
          p Es una manera de realizar una verificación constante de cómo se están comportando los planes de contingencia, visualizando, además, los tiempos de respuesta y el actuar del personal, una vez sucede la eventualidad.
          p También funciona para agregar otros componentes que pueden estar causando dificultades y que no se tuvieron en cuenta la primera vez que se diseñó el plan de gestión, permitiendo una actualización del mismo y vigencia para las eventualidades que se puedan presentar.
      .row.justify-content-center(titulo="Comportamiento del plan de gestión")
        .col-md-3.col-6.mb-md-0.mb-4
          img(src='@/assets/curso/tema5/img04.png')
        .col-md-7
          p Para este proceso se debe realizar un análisis y posteriormente un balance con datos históricos del comportamiento del sistema de gestión dentro de los cuales se realizan las siguientes preguntas: ¿El sistema implementado cumple con su objetivo principal? ¿Cuál es el compromiso que tienen los miembros del equipo? ¿Cuáles son los incidentes que más se han presentado? ¿Qué tan eficiente ha sido el SGCN de acuerdo a los riesgos planteados? 
          p Estas preguntas llevan reflexionar si de verdad el sistema de gestión está cumpliendo con las expectativas planteadas en el proceso de identificación de riesgos y planeación, de acuerdo con las necesidades operativas de la organización; y en caso de no ser así, se deben realizar los ajustes necesarios. En el peor de los escenarios optar por desechar el plan e iniciar la implementación de uno nuevo.

    .row.justify-content-center.mb-5
      .col-md-3.col-6.mb-md-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema5/img05.png')
      .col-md-9
        p Al realizar un monitoreo se deben registrar todos los acontecimientos que se presentan. Dicho registro permitirá realizar un balance del comportamiento de un proceso implementado. Se debe recopilar información de pruebas realizadas de acuerdo con las eventualidades presentadas; es decir, documentar cada uno de los sucesos generados declarando, además, la manera en cómo este se solucionó y el tiempo que se tomó la operación en darle solución. Luego, estos tiempos deben ser comparados con los tiempos que se tienen registrados en el proceso y de esta manera corroborar si fue que inicialmente se establecieron mal los tiempos o que el proceso realmente requiere mayor espacio de recuperación o, quizás, falta una herramienta para realizar el proceso de manera mucho más efectiva. Todo lo anterior es la forma en la que se corrobora la información y se mejoran los procesos presentados.
        p El seguimiento que se le realiza a los procesos se debe realizar de una manera específica, tal como se evidencia en la siguiente figura 8:

    .titulo-sexto.color-secundario(data-aos="fade-right")
      h5 Figura 8
      span Proceso de seguimiento

    .row.justify-content-center.mb-4
      .col-md-11(data-aos="fade-right")
        LineaTiempoE.color-acento-contenido
          .row(titulo="Primero" subtitulo="Paso 1")
            .col
              p Primero, se categorizan los sucesos presentados, teniendo en cuenta su naturaleza.  Por ejemplo,  si el incidente presentado tiene que ver con el centro de datos se debe realizar énfasis que el incidente pertenece a la parte tecnológica, ya que al momento de realizar un balance de los sucesos es importante establecer cuántos pertenecen por tecnología, ambientales o humanos, y de esta manera poder llevar un registro mucho más detallado de cada uno de ellos.
          .row(titulo="Segundo" subtitulo="Paso 2")
            .col
              p Luego, se procede a describir cómo fue solucionado, ya que existen procedimientos establecidos para esto pero en algunas ocasiones puede que este proceso requiere de otros pasos adicionales o si, por el contrario, definitivamente no fue de ayuda la ruta planteada para su solución, lo cual podría generar una análisis sobre lo planteado para ajustarlo.
          .row(titulo="Tercero" subtitulo="Paso 3")
            .col
              p Finalmente, se procede a documentarlo. Se debe llevar un registro detallado de los inconvenientes presentados y la manera en cómo se llegó a su solución; en algunas ocasiones, los pasos que se plantean sólo contemplan la ruta de acuerdo a las pruebas realizadas en el momento de la concepción del plan de gestión pero como se ha estudiado, estos procesos pueden llegar a ser dinámicos y este registro de nuevas soluciones va a enriquecer la base de datos que se tenga de estos procesos, permitiendo la existencia de más rutas de acción para tratar los incidentes. 

    p.mb-5 Algunas recomendaciones para tener en cuenta con respecto a la documentación de solución de los incidentes presentados, son:

    .row.justify-content-center.mb-5
      .col-md-4.col-8.mb-md-0.mb-4(data-aos="fade-right")
        .tarjeta--boton.color-acento-contenido.p-4.pb-5
          .row.mb-3
            .col-md-2.col-4
              img(src='@/assets/curso/tema5/img06.png')
          .h4 Lenguaje
          p.mb-5 Utiliza un lenguaje sencillo y práctico para que cualquier persona pueda comprender cuál es el suceso que se presentó, aunque no dejemos de lado el nombre de las palabras técnicas ya que quien esté asignado para realizar la solución pueda consultar dicho concepto, el cual es interesante que esté agregado dentro de un diccionario de conceptos y palabras claves para poderlo identificar.<br><br>
      .col-md-4.col-8.mb-md-0.mb-4(data-aos="zoom-in")
        .tarjeta--boton.color-acento-contenido.p-4.pb-5
          .row.mb-3
            .col-md-2.col-4
              img(src='@/assets/curso/tema5/img07.png')
          .h4 Precisión
          p.mb-5 Ser conciso en lo que se está comentando sobre la solución, ya que en ocasiones se realiza un recorrido innecesario sobre las pautas a seguir en los lineamientos de solución. Se debe tratar de ser más efectivos y que quien vea el procedimiento logre realizarlo en el menor tiempo posible.<br><br><br><br>
      .col-md-4.col-8.mb-md-0.mb-4(data-aos="fade-left")
        .tarjeta--boton.color-acento-contenido.p-4
          .row.mb-3
            .col-md-2.col-4
              img(src='@/assets/curso/tema5/img08.png')
          .h4 Manual de incidentes
          p.mb-0 Este documento contiene un registro de todos los procesos que se llevan a cabo con los incidentes presentados y propone soluciones desde el sentido de la aplicabilidad de pasos y procedimientos para la restauración del sistema. Es importante tener en cuenta que este es un documento técnico por lo tanto el lenguaje y palabras a utilizar deben estar escritas para un profesional o experto en la temática, quien tiene la responsabilidad de ejecutar las acciones allí descritas y en caso de realizar mejoras al procedimiento, hacer los debidos anexos que apliquen.

    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1.	¿Qué es una auditoría interna?
    
    .row.justify-content-center.mb-5
      .col-md-9.order-md-1.order-2
        p Es una actividad independiente y objetiva de aseguramiento y consulta concebida para agregar valor y mejorar las operaciones de una organización. Ayuda a una empresa a cumplir sus objetivos aportando un enfoque sistemático y disciplinar para evaluar y mejorar la eficacia de los procesos de gestión de riesgos, control y gobierno.
        p La auditoría interna está conformada por varias actividades las cuales permiten identificar de manera objetiva e independiente los procesos de negocio y verificar si todos estos se están cumpliendo de manera correcta. La mayoría de las veces va dirigida a realizar la revisión de algunos componentes de un proceso o dependencia de la organización. Sin embargo, si está relacionada con el departamento de contabilidad y la dirección general estos también entran dentro del plan de auditoría para llevar una trazabilidad del proceso.
        p La independencia está establecida por la estructura de la organización y las líneas de reporte. La objetividad se logra mediante una apropiada actitud mental. La actividad de auditoría interna evalúa la exposición al riesgo del gobierno, las operaciones y los sistemas informáticos de la organización, con respecto a lo siguiente:
      .col-md-3.col-6.order-md-2.order-1.mb-md-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema5/img09.png')

    .row.justify-content-center.align-items-center
      .col-md-1.col-2(data-aos="fade-right")
        img(src='@/assets/curso/tema5/img10.png')
      .col-md-9.col-10
        .h4 Eficacia y eficiencia de las operaciones
        p Este aspecto está relacionado con la medición de cómo se están llevando a cabo las operaciones de negocio y/o departamento al cual se le está realizando la revisión. Es importante establecer que una auditoría no es un proceso que se lleva o se realiza al azar sino que está diseñado de manera sistemática para la verificación y cumplimiento de los objetivos del negocio.
      .col-md-10
        hr
    
    .row.justify-content-center.align-items-center
      .col-md-1.col-2(data-aos="fade-right")
        img(src='@/assets/curso/tema5/img11.png')
      .col-md-9.col-10
        .h4 Protección de activos
        p Esto está enfocado a la parte material de los activos de la organización donde se debe verificar la manera y/o forma en que han sido obtenidos y establecer métodos de verificación de estos procesos.
        p Debe contener una documentación donde se registran los hallazgos encontrados y que pueden servir de evidencia para sustentar un mal procedimiento realizado en la empresa y establecer los planes de mejora para superar esta eventualidad.
      .col-md-10
        hr
    
    .row.justify-content-center.align-items-center
      .col-md-1.col-2(data-aos="fade-right")
        img(src='@/assets/curso/tema5/img12.png')
      .col-md-9.col-10
        .h4 Cumplimiento de leyes, regulaciones y contratos
        p Existen muchas regulaciones hoy día con la temática de procesamiento y almacenamiento de la información,  soportado en las leyes y decretos que incluyen regulaciones de la misma. En el caso de los contratos, se debe estipular si estos se realizaron cumpliendo con un riguroso proceso de registro y seguimiento; actividad que se refleja en el proceso de la auditoría.
      .col-md-10
        hr
    
    .row.justify-content-center.align-items-center.mb-4
      .col-md-1.col-2(data-aos="fade-right")
        img(src='@/assets/curso/tema5/img13.png')
      .col-md-9.col-10
        .h4 Confiabilidad e integridad de la información financiera y operativa
        p Es importante destacar que en un proceso de auditoría la información suministrada, por la organización que está siendo evaluada, sea confiable y verificable. En algunas ocasiones, sucede que los datos sufren alteraciones y modificaciones al momento de ser entregados en el proceso de auditoría  para evitar represalias. De hecho, es sancionable entregar información maquillada o modificada en un proceso de auditoría.

    p El auditor interno es una persona que debe tener las competencias y en algunos casos la certificación en el proceso que está revisando o auditando. Muchos procesos de auditoría son relativamente transversales a los procesos de la empresa y por tanto, cualquier persona que conozca la documentación, puede realizar un diagnóstico y posteriormente, un informe sobre los hallazgos encontrados. Sin embargo, cuando se habla sobre un procedimiento específico que requiere de unos conocimientos técnicos y propios, se debe contratar a un profesional certificado y con experiencia en el manejo de dichos procesos.

    .row.justify-content-center.mb-5
      .col-md-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema5/img14.jpg')})`}"
          )(data-aos="fade-right")
          .bloque-texto-g__texto.p-4
            p.mb-0 En ocasiones se contratan personas que tienen los conocimientos pero no la certificación para realizar tal actividad y esto puede perjudicar a la empresa porque si se realiza una auditoría externa, este factor se puede convertir en un hallazgo negativo ya que se debe garantizar que la persona que está realizando dicho proceso cumpla con el perfil y conocimientos para realizarlo.
    
    p Una actividad de auditoría interna eficaz es un valioso recurso para la dirección de la organización y su comité directivo o equivalente, así como para el comité de auditoría, debido a su entendimiento de la organización y su cultura, operaciones y perfil de riesgos. Una actividad de auditoría interna eficaz puede proporcionar aseguramiento a otras partes interesadas, tales como los entes de regulación, empleados, proveedores financieros y accionistas. El siguiente video profundiza un poco más sobre este proceso de monitoreo:

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/-69AgRp3_IA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p Contar con un sistema de control dentro de la gestión de riesgos permite vigilar y monitorear el funcionamiento correcto de los procesos. Existen diferentes tipos de auditorías, pero es la auditoría interna la que se enfoca en el cumplimiento de los objetivos de la organización . 

    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.2.	¿Cómo se aplica una auditoría interna a un SGCN?
    
    .row.justify-content-center.mb-4
      .col-md-10.cajon.color-acento-contenido.p-4(data-aos="fade-right")
        .row.justify-content-center.align-items-center
          .col-md-2.col-4.mb-md-0.mb-4
            img.w-75(src='@/assets/curso/tema1/img02.png')
          .col-md-10
            p.mb-0 La auditoría interna se compone de tres partes, las cuales son el eje central de este proceso dentro de las organizaciones. A continuación, se expone detalladamente cada una de estas:
    
    .row.justify-content-center.mb-4
      .col-md-4.col-8.mb-md-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema5/img15.svg')
      .col-md-8(data-aos="fade-left")
        LineaTiempoD.color-acento-contenido
          p.text-small(numero="1" titulo="Aseguramiento") Este componente se refiere a garantizar que los procesos que son motivo de estudio y verificación se manejen de manera acorde a como está planteado en el plan de auditoría.<br><br>Este proceso debe garantizar la imparcialidad de los involucrados y adicional a ello debe mantener los resultados y procesos que se realizan, de tal manera que esta información sea trazable, medible y comprobable; debido a que esta será utilizada más adelante para soportar las evidencias de los hallazgos encontrados.  
          p.text-small(numero="2" titulo="Objetividad") Este componente debe garantizar que el uso de la información y la interacción con los involucrados no comprometa la veracidad de la información y procesos que se realizan.<br><br>La objetividad también involucra al auditor que está llevando a cabo el proceso puesto que pueden existir intereses que no quieran que cierta información o hallazgos salgan a la luz. Todo esto puede ver comprometido el proceso de la auditoría.
          p.text-small(numero="3" titulo="Visión") Este componente está relacionado con dos aspectos muy importantes: el primero de ellos es la manera en cómo se puede obtener y sacar datos de donde no se encuentran. El segundo aspecto se refiere a cómo se visualizan los procesos, es decir ver más allá de lo que se está entregando en la auditoría. En algunas ocasiones no se entrega la información completa y esta es ocultada para entorpecer o no evidenciar un proceso. El auditor debe tener esa capacidad de poder mediante la información entregada y estudiando los procesos de la organización evidenciar esa información o procesos que no se están incluyendo en la información inicial.<br><br>Siempre es necesario que los involucrados sientan confianza en el proceso, ya que por lo general tiende a causar malestar y rechazo, pues no se como una evaluación que va a permitir mejorar los procesos internos de la compañía sino que los empleados tienen la percepción de que les va evaluar y que posiblemente los hallazgos generarán despidos e inconvenientes en su trabajo.

    p.mb-5 Cuando las empresas empiezan a tener un crecimiento notable, es cuando se hace más necesaria la auditoría interna porque se vuelve casi imposible tener control directo de todas las operaciones. El proceso de aplicación de un plan de auditoría empieza con una iniciativa de la empresa de validar los procesos que está llevando a cabo y verificar si estos se ajustan a los objetivos que tiene la misma. Para ello, se deben realizar los siguientes pasos para poner en marcha dicho proceso:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .BG13.p-4
        .row.justify-content-center.mb-3
          .col-md-4.col-8
            img(src='@/assets/curso/tema5/img16.png')
        p.mb-5 #[strong 01]. Recopilar la información de cada proceso que está incluido en el SGCN.<br><br>
      .BG13.p-4
        .row.justify-content-center.mb-3
          .col-md-4.col-8
            img(src='@/assets/curso/tema5/img17.png')
        p.mb-4 #[strong 02]. Comparar la información que se encuentra en los documentos de proceso con respecto al proceso real.<br><br>
      .BG13.p-4
        .row.justify-content-center.mb-3
          .col-md-4.col-8
            img(src='@/assets/curso/tema5/img18.png')
        p.mb-4 #[strong 03]. Realizar una inspección en los puestos de trabajo y los lugares donde se ejecutan los procesos del SGCN<br><br>
      .BG13.p-4
        .row.justify-content-center.mb-3
          .col-md-4.col-8
            img(src='@/assets/curso/tema5/img19.png')
        p.mb-0 #[strong 04]. Verificar las hojas de vida de las personas encargadas del SGCN para corroborar que cumplen el perfil para llevar a cabo las labores establecidas en el SGCN.
      .BG13.p-4
        .row.justify-content-center.mb-3
          .col-md-4.col-8
            img(src='@/assets/curso/tema5/img20.png')
        p.mb-3 #[strong 05]. Realizar el informe de auditoría donde se documentan los hallazgos encontrados en el proceso de verificación.
      .BG13.p-4
        .row.justify-content-center.mb-3
          .col-md-4.col-8
            img(src='@/assets/curso/tema5/img21.png')
        p.mb-3 #[strong 06]. Sugerir los planes de mejora que debe implementar la organización en los procesos donde se encontraron falencias y problemas asociados.

    .cajon.color-secundario.p-4.mb-4
      .row.justify-content-center(data-aos="fade-right")
        .col-md-1.col-2
          img(src='@/assets/curso/tema5/img22.png')
        .col-md-11.col-10
          p.mb-0 La auditoría debe llevar un sello de certificación hacia una norma y/o estándar como referencia de donde se verifican. Si los procesos y procedimientos establecidos en la organización están ajustados a dicha norma, para el caso de los sistemas de continuidad del negocio la norma establecida es la ISO 22301, el auditor debe establecer, a partir del estándar, los ajustes a dichos procesos y buenas prácticas . 

    separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.3.	Construcción de planes de mejora continua para un SGCN
    
    p La construcción de los planes de mejora continua debe estar conectada a los procesos ejecutados en la auditoría interna ya que estos deben reflejar los resultados obtenidos en los hallazgos allí encontrados. La mejora continua será el resultado de la aplicación de las recomendaciones dadas en el informe de auditoría, las cuales desde el punto de vista del auditor se deben realizar. El siguiente video expone un ejemplo de esto: 

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5 Todo esto es un proceso continuo que requiere de mucha paciencia, compromiso de todos (sobre todo de la alta gerencia para asumir los retos en la planificación de los procesos que se deben llevar a cabo en los planes de mejora) y trabajo en equipo para lograr los resultados esperados. Algunos de los elementos esenciales para desarrollar un sistema de mejora continua en un SGCN son:

    .row.justify-content-center.align-items-center.mb-4
      .col-md-7.order-md-1.order-2
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | El programa de pruebas cubre todas las operaciones del alcance del GCN.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Todos los planes se han probado y de modo realista.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Todo el personal ha participado de forma activa en los ejercicios.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Todas las ubicaciones para la recuperación de actividades y centros de mando se han probado.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Todos los sistemas críticos de recuperación se han probado.
          li 
            .lista-ol--cuadro__vineta
              span 6
            | Toda la recuperación crítica de telecomunicaciones se ha probado.
          li 
            .lista-ol--cuadro__vineta
              span 7
            | Toda la recopilación, recuperación y restauración de información se han probado.
          li 
            .lista-ol--cuadro__vineta
              span 8
            | Todos los proveedores y empresas de servicio subcontratadas críticos se han probado.
          li 
            .lista-ol--cuadro__vineta
              span 9
            | Todos los proveedores de servicios de recuperación se han probado.
          li 
            .lista-ol--cuadro__vineta
              span 10
            | Se ha ensayado la reubicación de toda la plantilla.
      .col-md-3.col-6.order-md-2.order-1.mb-md-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema5/img23.png')

    .row.justify-content-center.align-items-center.mb-4
      .col-md-3.col-6.mb-md-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema5/img24.png')
      .col-md-7
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 11
            | Los diversos planes se corresponden entre sí y se han probado juntos para garantizar su cohesión.
          li 
            .lista-ol--cuadro__vineta
              span 12
            |  Se evalúa cada prueba del programa para garantizar que no expone a la organización a niveles de riesgo inaceptablemente más altos.
          li 
            .lista-ol--cuadro__vineta
              span 13
            | Cada prueba posee una magnitud y complejidad adecuadas para los objetivos de recuperación, perfil de riesgo y nivel de madurez de la GCN en la organización.
          li 
            .lista-ol--cuadro__vineta
              span 14
            | Cada prueba es realista, se planifica de forma cuidadosa y está acordada con las partes interesadas.
          li 
            .lista-ol--cuadro__vineta
              span 15
            | Cada prueba posee objetivos y criterios de éxito claramente definidos que han sido autorizados por la alta dirección.
          li 
            .lista-ol--cuadro__vineta
              span 16
            | Cada prueba genera un informe resumido y análisis posterior.
          li 
            .lista-ol--cuadro__vineta
              span 17
            | Cada ejercicio genera un informe posterior que contiene medidas correctivas y un calendario para su puesta en marcha.

    separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.4. Proceso de certificación de un SGCN
    
    .row.justify-content-center.align-items-center.mb-4
      .col-md-3.col-6.mb-md-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema5/img25.png')
      .col-md-9
        p Para llevar a cabo la certificación de un SGCN se debe establecer, en primera instancia, el plan de continuidad del negocio como una unidad integral de todos los procesos que componen el plan de gestión, el cual a su vez debe estar orientado hacia la ISO 22301.
        p Una certificación es un proceso al cual se somete una empresa o persona para validar los conocimientos y procesos que realiza en una determinada tarea. Uno de los procesos más complejos al momento de certificar un SGCN es que este logre ajustarse a las exigencias que puede tener la norma de certificación, para ello siempre es importante establecer qué pide la norma y cuáles son los recursos que se requieren para implementar el SGCN ajustado a la misma. De tal manera que cuando se solicite el proceso de certificación, se tengan las actividades y procesos adecuados al estándar. A continuación, se presenta su paso a paso: 

    PasosA.color-secundario.mb-5(tipo="n")
      .row.justify-content-center.align-items-center
        .col-md-8.order-md-1.order-2
          h4 Compromiso
          p Primeramente debe existir un compromiso por parte de la empresa o particular en realizar el proceso de certificación. La parte interesada en la certificación debe tener experiencia en el proceso en el cual se realizará la certificación, pues en algunas ocasiones se piden las certificaciones que soporten que la persona o entidad posee la experiencia en la labor o proceso a certificar. Eso se hace para prevenir que en alguna parte del proceso se retire la parte interesada por no contar con los conocimientos o experiencia en la temática a certificar.
        .col-md-4.col-8.order-md-2.order-1.mb-md-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema5/img26.png')
      .row.justify-content-center.align-items-center
        .col-md-4.col-8.mb-md-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema5/img27.png')
        .col-md-8
          h4 Solicitud
          p Se debe realizar una solicitud formal a la empresa o entidad que realizará el proceso de certificación y a su vez se solicitan los documentos que soporten experiencia, conocimientos, entre otros. Estos datos se deben verificar por parte de la entidad que realizará el proceso de certificación y se procede a realizar el registro en el sistema que soporta las certificaciones.
      .row.justify-content-center.align-items-center
        .col-md-8.order-md-1.order-2
          h4 Proceso de estudio
          p Se le concede un tiempo en el cual la empresa o persona debe realizar un proceso de estudio de los conceptos que se certifican y también puede utilizar este tiempo para estudiar y conocer más sobre el proceso. Este tiempo lo estima el estándar de la norma, el cual concede el espacio para preparación del candidato o candidatos a certificar.
        .col-md-4.col-8.order-md-2.order-1.mb-md-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema5/img28.png')
      .row.justify-content-center.align-items-center
        .col-md-4.col-8.mb-md-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema5/img29.png')
        .col-md-8
          h4 Preparación
          p Ofrecer un curso con los conceptos y conocimientos que se incluirán dentro de la norma de certificación. Es decir, la empresa puede ofrecerle a las partes interesadas el curso que les brinde el proceso de aprendizaje sobre los conceptos y procesos a ejecutar, aunque también es independiente y no obligatorio.
      .row.justify-content-center.align-items-center
        .col-md-8.order-md-1.order-2
          h4 Proceso de estudio
          p La parte interesada será evaluada en tres momentos diferentes donde se toman evidencias del proceso. El primer momento es una evaluación escrita, la cual tiene como objetivo medir los conceptos y conocimientos que tiene la parte interesada sobre la aplicación de la norma. Luego, el segundo momento es una evaluación de desempeño en la cual se le coloca una situación en la cual el candidato debe mostrar destrezas en la ejecución de las actividades contempladas en la norma de certificación y debe cumplir el 100% de esa ejecución, y el tercer paso es una evidencia, esta puede ser consecutivo de la actividad de desempeño donde el aspirante entrega un producto y mediante una lista de chequeo se verifica si el producto entregado cumple con los requisitos exigidos por la norma.
        .col-md-4.col-8.order-md-2.order-1.mb-md-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema5/img30.png')
        
    p El proceso de certificación debe pasar por diferentes etapas las cuales deben garantizar que se cumplen todos los requisitos exigidos por la norma. No se puede certificar al candidato si este no cumple al 100% las actividades y proceso de normatividad. Un paso fundamental en el caso de la certificación de un SGCN es la calidad de la documentación establecida; es decir, los soportes de los procesos que se incluyen en un plan de continuidad de negocio, los cuales son:

    .row.justify-content-center.align-items-center.mb-4
      .col-md-7.order-md-1.order-2
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Documento del alcance del plan de continuidad.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Objetivo de la creación del plan de continuidad.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Matriz de riesgo de los sucesos que pueden ocasionar la interrupción de los procesos de negocio.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Matriz de impacto de acuerdo a los riesgos que se pueden presentar en el negocio.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Hojas de vida y perfil de los encargados del proceso de continuidad del negocio.
          li 
            .lista-ol--cuadro__vineta
              span 6
            | Documento de BIA análisis de impacto al negocio.
      .col-md-4.order-md-2.order-1.mb-md-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema5/img31.png')
    
    .row.justify-content-center.align-items-center.mb-4
      .col-md-4.mb-md-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema5/img32.png')
      .col-md-7
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 7
            | Documentar las estrategias del plan de continuidad.
          li 
            .lista-ol--cuadro__vineta
              span 8
            | Documentar los procedimientos que se deben seguir para reanudar el negocio aplicando el plan de continuidad.
          li 
            .lista-ol--cuadro__vineta
              span 9
            | Análisis del contexto de la empresa para establecer un plan de mejora e identificación de posibles riesgos futuros.
          li 
            .lista-ol--cuadro__vineta
              span 10
            | Documentar los resultados objetivos en la aplicación de las pruebas al plan de continuidad.
          li 
            .lista-ol--cuadro__vineta
              span 11
            | Documentar los planes de mejora de acuerdo a las pruebas realizadas al plan de gestión.

    .row.justify-content-center.align-items-center.cajon.color-primario.p-4.mb-4(data-aos="fade-right")
      .col-md-2.col-4.mb-md-0.mb-4
        img.w-75(src='@/assets/curso/tema1/img08.png')
      .col-md-10
        p La inspección es la acción dirigida a aquella organización que desea mostrar responsabilidad asegurando que sus equipos, productos y servicios cumplen con la calidad, la seguridad, el respeto al medio ambiente y las responsabilidades sociales imperativas (ya sean de obligado cumplimiento, voluntarias o propias, basadas en sus propios sistemas, normas o necesidades). La evaluación de la conformidad requiere con frecuencia la realización de ensayos de tipo, de vigilancia o de autocontrol sobre los productos que son objeto de algún tipo de certificación. Utilizando las metodologías analíticas más avanzadas, se realizan análisis fisicoquímicos, microbiológicos y sensoriales en productos alimentarios o productos de cosmética, higiene y detergencia, entre otros.

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
