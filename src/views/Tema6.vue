<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Proyecto de implantación de un SGCN

    .row.justify-content-center.align-items-center.mb-5
      .col-md-3.col-6.mb-md-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema6/img01.png')
      .col-md-9
        p Los SGCN, como se ha explicado, tienen la capacidad de detectar fallas en los sistemas actuales de la organización y poder detectar nuevas amenazas que se puedan presentar en un futuro cercano. Para la implantación de un sistema de gestión de continuidad del negocio se debe tener en cuenta muchos aspectos tales como las personas que estarán involucradas en los procesos que se llevarán a cabo en cada fase del proyecto, teniendo en cuenta sus conocimientos y experiencia en cada una de las actividades que se desarrollan en el mismo. Algunos pasos a considerar en la implantación de un sistema de continuidad del negocio se exponen a continuación:
      
    AcordionA.mb-5(tipo="a" clase-tarjeta="BG06")
      .row.justify-content-center(titulo="Análisis inicial")
        .col-md-11
          p Es el primer estudio de exploración de las necesidades que puedan surgir en el SGCN.  Se realiza una búsqueda de los procesos que demandará el sistema de gestión una vez se encuentre en marcha o listo para ser implementado. En este paso hay que ser muy puntuales en qué es lo que requiere atención primordial y en cuáles de los aspectos de las necesidades del negocio se hará mayor énfasis en el SGCN.
          p Es fundamental en este punto comprometer al equipo de trabajo desde un principio para que cada miembro, de acuerdo a su experiencia y conocimiento, asuma el liderazgo del proceso de manera voluntaria ya que es responsabilidad de cada uno de ellos hacer que el sistema de gestión funcione de la mejor manera posible.
      .row.justify-content-center(titulo="Evaluación y control de los riesgos")
        .col-md-11
          p Teniendo en cuenta que la infraestructura de una organización puede recibir diferentes tipos de ataques informáticos que atentan contra su correcto funcionamiento,  es indispensable dentro de los procesos de un SGCN realizar una constante verificación y evaluación del riesgo, de acuerdo a sus niveles.
          p #[strong Riesgo bajo]: es un riesgo controlable tanto en el tiempo como en el impacto que ocasiona en el negocio. No se considera una amenaza que atente contra la integridad del negocio.
          p #[strong Riesgo medio]: se suelen considerar intermedios porque aunque son riesgos de una mayor escala de valoración, se pueden subsanar. Estos riesgos sí causan que el negocio deje de funcionar, es decir le quitan su operatividad.
          p #[strong Riesgo alto]: es considerada la mayor amenaza de una organización, puesto que está desarrollado por un proceso continuo de riesgos mal controlados y problemas con la política de uso de la información e infraestructura de la organización. Este tipo de riesgo se suele presentar de manera interna sea por empleados que no cumplen con los protocolos o por procedimientos que establece la organización para evitar que estos sucesos ocurran
      .row.justify-content-center(titulo="Análisis de impacto del negocio")
        .col-md-11
          p Para la implantación del sistema de continuidad del negocio se deben considerar los impactos que se pueden ocasionar, de acuerdo a los riesgos asociados al negocio. En este paso se deben considerar todos los posibles riesgos que causen la interrupción de los procesos de negocio; en algunas ocasiones, no se consideran algunos riesgos catalogados en la escala de bajo ya que son cosas que se asumen como riesgos aceptables en el negocio pero lo que no se visualiza que ese riesgo bajo puede ocasionar un problema mayor en un futuro ya que se encuentra conectado con otros riesgos de mayor impacto.
      .row.justify-content-center(titulo="Detección de procesos críticos")
        .col-md-11
          p Es importante tener en cuenta que existen muchos procesos en la implantación del sistema de gestión de la continuidad. Por lo tanto hay que cuántos de ellos cumplen la condición de ser críticos, permitiendo que se atiendan de una manera especial; por ejemplo, no es lo mismo que colapse el sistema de comunicación telefónica que el servidor principal de la organización.

    .BG14.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-md-1.col-2
          img(src='@/assets/curso/tema6/img02.png')
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4 ¿Cómo implantar un sistema de gestión de continuidad de negocio?
              p Los procesos de implantación de un SGCN requieren de un conjunto de actividades organizadas para lograr la integración de cada uno de los procesos que estos soportan. Es importante considerar que todas las actividades deben estar diseñadas para cumplir con el objetivo principal del sistema de gestión y evitar la interrupción de los procesos de negocio que tiene la organización todo esto es esencial para su correcta implantación. En el siguiente video se puede apreciar algunos aspectos a considerar en la implantación de un SGCN. Este recurso también se encuentra en el material complementario.
            .col-sm-auto
              a.anexo.mb-4.mb-lg-0(href="/LTZLxE1UHfE" target="_blank")
                .anexo__texto
                  p Ver video

    p De acuerdo con la norma ISO 22301 en la implantación de un sistema de gestión de la continuidad del negocio se deben considerar estos aspectos:

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Compromiso")
        .row.justify-content-center.align-items-center
          .col-md-5.col-10.mb-4.mb-md-0
            img(src='@/assets/curso/tema6/img03.jpg')
          .col-md-6
            p El compromiso de la dirección en los procesos de un SGCN es fundamental para que los procesos de negocio se realicen de manera correcta en el marco de la eficiencia y de acuerdo a las normatividades y estandarización estipulada. También se debe contar con ese mismo compromiso en la parte financiera, operativa y administrativa.
      .py-3.py-md-4(titulo="Comité de procesos")
        .row.justify-content-center.align-items-center
          .col-md-5.col-10.mb-4.mb-md-0
            img(src='@/assets/curso/tema6/img04.jpg')
          .col-md-6
            p De acuerdo al plan de implementación se debe nombrar un comité que se encargue de velar los diferentes procesos que se llevan a cabo en la implantación del sistema. Esto incluye las diferentes actividades que se van a desarrollar dentro del plan de gestión de la continuidad. 
            p Este comité debe velar también por que exista una comunicación y compromiso de cada una de las dependencias con el proceso y objetivo principal del plan de gestión.
      .py-3.py-md-4(titulo="Actividades de implementación")
        .row.justify-content-center.align-items-center
          .col-md-5.col-10.mb-4.mb-md-0
            img(src='@/assets/curso/tema6/img05.jpg')
          .col-md-6
            p En este paso se deben ejecutar todas las acciones que se programaron desde el diseño y planeación del SGCN. 
            p Es indispensable garantizar que cada uno de los procesos se cumpla de manera correcta y que no se dejen procesos sin cumplir o actividades sin ejecutar ya que se debe realizar todo el proceso para garantizar el resultado esperado.
      .py-3.py-md-4(titulo="Avance de los procesos")
        .row.justify-content-center.align-items-center
          .col-md-5.col-10.mb-4.mb-md-0
            img(src='@/assets/curso/tema6/img06.jpg')
          .col-md-6
            p Los procesos, a medida que se van implementando, se deben ir probando para revisar que sí están cumpliendo con lo requerido en la organización. Es fundamental que una vez se implementa un paso o proceso, se debe verificar.  En caso de no cumplir la satisfacción, se debe reversar el proceso y revisar en qué está fallando y en caso de arrojar los resultados esperados se aprueba y se continúan con las actividades siguientes.
      .py-3.py-md-4(titulo="Identificar los requerimientos")
        .row.justify-content-center.align-items-center
          .col-md-5.col-10.mb-4.mb-md-0
            img(src='@/assets/curso/tema6/img07.jpg')
          .col-md-6
            p En este proceso se debe verificar si los requerimientos establecidos están siendo cumplidos por parte de los integrantes del equipo y también sobre los resultados esperados y que los roles y responsabilidades asociados se estén cumpliendo como está establecido en el plan de gestión.

    separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.1.	Riesgos al implementar un SGCN
    
    p Los riesgos que pueden estar asociados a la implementación de un sistema de gestión del negocio, inicialmente están estrechamente relacionados con los factores humanos. El compromiso de las partes involucradas tiene a ser el principal motivo. A continuación, se exponen algunos riesgos comunes.

    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Falta de compromiso por parte de los involucrados")
        h4 Falta de compromiso por parte de los involucrados
        .row.justify-content-center
          .col-md-5.col-10.mb-md-0.mb-4
            img(src='@/assets/curso/tema6/img08.png')
          .col-md-7
            p Como ya se ha mencionado, el compromiso de los involucrados en el proceso es fundamental para el éxito de la implementación del sistema de gestión de la continuidad del negocio.  
            p Esto implica que todas las partes y personas involucradas en el proceso velen porque todas las actividades y procesos se desarrollen de manera coordinada y coherente con los resultados esperados.
      .tarjeta.color-acento-contenido--borde.p-4(titulo="No contar con el personal calificado")
        h4 No contar con el personal calificado
        .row.justify-content-center
          .col-md-5.col-10.mb-md-0.mb-4
            img(src='@/assets/curso/tema6/img09.png')
          .col-md-7
            p Aunque muchas veces se piensa que los empleados o personas que laboran en una organización son indispensables y que los procesos son los que deben estar como primordial función de la organización, se debe tener en cuenta que contar con personal altamente calificado para realizar las labores que exige la implementación de un SGCN es fundamental para el éxito de la misma. 
            p Las personas son el eje principal de cualquier organización y son aquellas que por medio de la tecnología y de los recursos que se tienen en la organización hacen posible que todo funcione.
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Alto costo de infraestructura")
        h4 Alto costo de infraestructura
        .row.justify-content-center
          .col-md-5.col-10.mb-md-0.mb-4
            img(src='@/assets/curso/tema6/img10.png')
          .col-md-7
            p El factor de costo de infraestructura es una preocupación que se debe analizar en cualquier organización que decida implementar un sistema de gestión de la continuidad del negocio puesto que para la implementación de la misma se requiere de la compra y/o adquisición de equipos y locaciones para realizar estos procesos. Muchas empresas no cuentan con estos recursos lo cual puede crear la situación de que no se realice dicho proceso. El tema de la seguridad y la sostenibilidad de los centros de datos han llevado a muchas empresas en repensar la forma en cómo se almacenan los datos y pueden delegar dichos servicios. 
      .tarjeta.color-acento-contenido--borde.p-4(titulo="<em>Housing</em>")
        h4 #[i Housing]
        .row.justify-content-center
          .col-md-5.col-10.mb-md-0.mb-4
            img(src='@/assets/curso/tema6/img11.png')
          .col-md-7
            p Consiste en el alquiler de espacios dotados de todo lo necesario para la instalación de un centro de datos para que las empresas o particulares puedan instalar sus propios servidores e infraestructura en general. Este espacio tiene un costo de acuerdo a las dimensiones y servicios adicionales que se contraten tales como seguridad, vigilancia, entre otros.
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Colocación")
        h4 Colocación
        .row.justify-content-center
          .col-md-5.col-10.mb-md-0.mb-4
            img(src='@/assets/curso/tema6/img12.png')
          .col-md-7
            p Es un servicio en el cual se le sede a un tercero la administración del centro de datos. Consiste en el mantenimiento preventivo y correctivo por los incidentes o problemas que se puedan presentar. La infraestructura le pertenece a la empresa que está realizando la contratación.

    separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.2. Problemas frecuentes y solución de problemas

    p Una mala planificación o procesos que no se controlan de manera adecuada pueden generar traumatismos e interrupciones en los procesos de negocio y por ende, en el sistema de gestión. Existen ciertos aspectos a considerar como problemas frecuentes y por tanto, posibles soluciones y controles. Se pueden ver a continuación:

    AcordionA.mb-5(tipo="a" clase-tarjeta="BG06")
      .row.justify-content-center.align-items-center(titulo="Interrupciones no planificadas")
        .col-md-1.col-2.mb-md-0.mb-4
          img(src='@/assets/curso/tema6/img13.png')
        .col-md-11.col-10
          p Este aspecto está más relacionado con aquellos riesgos que al momento de realizar la planificación no se tienen en cuenta o por tener una naturaleza de impacto bajo no se le proporciona la atención necesaria que este pueda requerir.  
      .row.justify-content-center.align-items-center(titulo="Ciberataques")
        .col-md-1.col-2.mb-md-0.mb-4
          img(src='@/assets/curso/tema6/img14.png')
        .col-md-11.col-10
          p Este aspecto es complejo desde el punto de vista operativo de la infraestructura. Se debe considerar que es uno de los factores de riesgo a considerar y que pueden generar problemas en la operación y mantenimiento de una infraestructura tecnológica.
          p Se deben implementar políticas de seguridad de la información las cuales se encuentran consagradas en la norma ISO 27001 y que apuntan a todos los lineamientos que se deben tener en cuenta para el control de la seguridad de la información en una organización.
      .row.justify-content-center.align-items-center(titulo="Malas condiciones climatológicas")
        .col-md-1.col-2.mb-md-0.mb-4
          img(src='@/assets/curso/tema6/img15.png')
        .col-md-11.col-10
          p Es importante tener en cuenta que este aspecto se incluye dentro de la planificación del SGCN y que se deben crear las actividades necesarias para que esto se lleve a un feliz término. Sin embargo, esto se convierte, en muchas ocasiones, en algo que no se puede controlar. Por tanto una forma de prevención, siempre estará en la realización de estudios previos.
      .row.justify-content-center.align-items-center(titulo="Interrupciones del fluido eléctrico")
        .col-md-1.col-2.mb-md-0.mb-4
          img(src='@/assets/curso/tema6/img16.png')
        .col-md-11.col-10
          p Cuando se trabaja con tecnología es indispensable que los dispositivos funcionen correctamente. Se trata de proporcionar una alimentación eléctrica correspondiente al voltaje de acuerdo a lo que exige cada dispositivo y su manual de fabricante, como factores de conservación
          p En un plan de SGCN esta problemática se debe abordar realizando un estudio energético orientado a la cantidad de energía requerida, al número de equipos conectados y a las condiciones en las que se suministrará el fluido eléctrico.
      .row.justify-content-center.align-items-center(titulo="Interrupciones del suministro de conectividad")
        .col-md-1.col-2.mb-md-0.mb-4
          img(src='@/assets/curso/tema6/img17.png')
        .col-md-11.col-10
          p Es importante tener en cuenta que para este tipo de inconvenientes se debe contar con planes de respaldo. por ejemplo, algunas empresas optan por dar planes de internet o conectividad a sus empleados para que se mantengan conectados siempre por si, en algún momento llega, a fallar el sistema principal de conectividad de la empresa. También se puede contratar un segundo servicio con otro operador ojala con una tecnología diferente a la que tiene el principal suministro de conectividad. 
      .row.justify-content-center.align-items-center(titulo="Incidentes de salud")
        .col-md-1.col-2.mb-md-0.mb-4
          img(src='@/assets/curso/tema6/img18.png')
        .col-md-11.col-10
          p Este factor está más conectado con los integrantes del equipo de trabajo y todo lo relacionado con seguridad y salud en el trabajo. Uno de los sucesos complejos para un proyecto o implementación de los procesos del SGCN es que el personal clave sufra alguna enfermedad o problema d salud, ya que puede llegar a complicar de una manera sustancial el proceso; por esta razón dentro de la planificación se deben tomar medidas para asumir estos riesgos que, aunque pueden ser controlables en el tiempo, pueden afectar de manera significativa el correcto funcionamiento del SGCN.
      .row.justify-content-center.align-items-center(titulo="Actos de terrorismo")
        .col-md-1.col-2.mb-md-0.mb-4
          img(src='@/assets/curso/tema6/img19.png')
        .col-md-11.col-10
          p El terrorismo se ha tomado un gran numero de actividades en el mundo.  No se le puede mirar solo como ataques específicos a empresas e instalaciones sino también en contra de los miembros del equipo por la labor que desempeña en los procesos de negocio.
          p Ejemplos de ello puede ser que el jefe de seguridad de la información en la empresa sea amenazado para que venda datos o para que dé acceso a los sistemas de información principales de la organización o que un empleado, que se sienta mal dentro de la organización, puede generar un hueco de seguridad que puede afectar de manera significativa el proceso.
          p Es importante implementar desde el SGCN un protocolo que se active cuando alguno de estos sucesos ocurran. Este protocolo debe contener los pasos a seguir y una ruta de prevención con respecto a estos asuntos de seguridad que también pueden estar relacionados con la infraestructura de la empresa la cual se puede ver comprometida por estos actos.

    .row.justify-content-center.align-items-center
      .col-md-7.cajon-b.color-acento-botones.p-3.mb-5(data-aos="fade-right")
        p Estos problemas se presentan en las situaciones en las cuales se requiere de manera inmediata las soluciones. Como bien se ha estipulado, los SGCN son esenciales para el negocio y tanto su diseño, creación y puesta en marcha garantizan la continuidad del negocio, previniendo futuras eventualidades tanto a nivel externo como interno, incluyendo la interacción del equipo de trabajo al momento de su concepción y puesta en marcha. Las soluciones siempre requieren un nivel mayor de comprensión de las diferentes situaciones para poder abordarlas desde los procesos y protocolos implementados por eso siempre es importante estar alerta con todos los sucesos que se puedan presentar en la implementación del SGCN.
      .col-md-3.col-6(data-aos="fade-left")
        img(src='@/assets/curso/tema6/img20.png')

</template>

<script>
export default {
  name: 'Tema6',
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
