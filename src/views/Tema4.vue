<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 ¿Qué es un centro de datos?
    
    p Los centros de datos son espacios dedicados donde reposan los dispositivos que se encargan del procesamiento y almacenamiento de la información, los cuales deben ser utilizados mediante unos protocolos y procedimientos específicos para que la información y los dispositivos que allí se encuentran no sean alterados en el proceso de uso y mantenimiento.

    .row.justify-content-center.mb-5
      .col-md-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/img01.jpg')})`}"
          )(data-aos="fade-right")
          .bloque-texto-g__texto.p-4
            p.mb-0 Los centros de datos deben encontrarse en lugares aislados y resguardados donde deben tener unas medidas de seguridad para que solo el personal autorizado y con los conocimientos técnicos de su operatividad sean quienes tengan acceso de acuerdo con los protocolos de acceso de los mismos.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-md-3.col-6.mb-md-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema4/img02.png')
      .col-md-9
        .cajon-b.color-acento-botones.p-3.mb-5
          p En algunas organizaciones no se tiene mucho en cuenta el tema de los centros de datos, puesto que si bien son importantes en las organizaciones, requieren de un presupuesto propio para su mantenimiento y cuidado. Muchas empresas optan por no tener centros de datos, sino que dedican un espacio que probablemente no es el más adecuado para su instalación. Uno de los dispositivos más protegidos y resguardado es el servidor los cuales pueden ser de aplicaciones, de bases de datos, de #[i backups], entre otros y en algunas ocasiones solo se cuenta con un equipo al cual cualquier persona de la organización puede acceder.
          p.mb-0 Ahora bien, la normatividad frente al manejo de la información, y para el caso de los centros de datos se deben mantener unos protocolos estrictos para el procesamiento y resguardo de la misma; teniendo en cuenta que la información hoy día es un activo importante para el negocio. Por lo tanto, se debe garantizar que los dispositivos donde esta se almacena y procesa se encuentren en óptimas condiciones y bajo los protocolos y sitios adecuados.

    .row.justify-content-center.mb-5
      .col-md-10
        .bloque-texto-g.color-primario.img07.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/img03.jpg')})`}"
          )(data-aos="fade-left")
          .bloque-texto-g__texto.p-4
            p.mb-0 La información tiene que estar resguardada en ambientes donde no corra peligros de corrupción de datos y pérdida de la misma. Los centros de datos son, entonces, como las bóvedas donde se almacenan los dispositivos encargados del procesamiento y almacenamiento de la información bajo medidas de seguridad apropiadas.

    p Los centros de datos (#[i Data Center]) son demandados y requeridos por las compañías que manejan y procesan grandes cantidades de información. Su diseño y las medidas de seguridad están concebidos para garantizar la disponibilidad del servicio ante cualquier imprevisto, ya sea un desastre natural o una acción provocada por el hombre. Los centros de datos deben contar con varios elementos para la instalación de los dispositivos que allí se colocan, tal como se aprecia a continuación:
    
     .row.justify-content-center.align-items-center.mb-5
      .col-md-5.col-10.mb-md-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema4/img04.png')
      .col-md-5
        LineaTiempoD.color-acento-contenido
          p.text-small(numero="1" titulo="Servidores y <em>racks</em>") Los servidores están dispuestos en bastidores, que pueden colocarse de diversas maneras dentro del centro de datos, ya sea para su aislamiento o para optimizar el proceso de enfriamiento.
          p.text-small(numero="2" titulo="Conectividad") El equipo está conectado al Internet de la red del centro de datos, permitiendo a los usuarios acceder a entornos en la nube y a otras plataformas en línea.
          p.text-small(numero="3" titulo="Potencia o fuente de alimentación") Los centros de datos suelen tener electricidad redundante, es decir, ininterrumpida. Asimismo, suelen contar con un sistema de generadores diesel para proporcionar una fuente eléctrica fiable en el sitio, en caso de que los servicios públicos de suministro sufran un corte energético.
          p.text-small(numero="4" titulo="Sistemas de enfriamiento") Debido a que los equipos de computación llegan a crear una cantidad considerable de calor, se dispone de sistemas de refrigeración para eliminar el aire caliente acumulado y evitar el sobrecalentamiento. Así  el aire frío fluye a través de los estantes, disipando el calor creado por el equipo.
          p.text-small(numero="5" titulo="SAI (Sistema de Alimentación Ininterrumpida)") Es un dispositivo que gracias a sus baterías y elementos almacenadores de energía, puede proporcionar energía eléctrica por un tiempo limitado y durante un apagón eléctrico, a todos los dispositivos que tenga conectados.
          p.text-small(numero="6" titulo="Router") Dispositivo que proporciona conectividad a nivel de red. Su función principal es enviar paquetes de datos de una red a otra.
          p.text-small(numero="7" titulo="Switch") Es un dispositivo digital de interconexión de equipos. Su función es interconectar dos o más segmentos de red, de forma parecida a los puentes de red.
      .col-12.BG12.p-4(data-aos="fade-right")
        p.text-bold Los #[i data centers] están siempre sometidos a un constante control del espacio y temperatura para que todo esté siempre en óptimas condiciones. Además cuentan con una protección contra incendios, es por ello que ninguno de sus componentes está hecho con material inflamable como cartón o papel.
    
    p Los centros de datos requieren de muchos cuidados tanto en su operatividad como en su mantenimiento. De ahí la importancia de contar con personal y un análisis de los recursos necesarios para su implementación. Un error muy común que se comete es diseñar un centro de datos futurista y cargado de la última tecnología sin estar orientado a la realidad de la organización tanto en espacio como en costos. Regularmente se diseñan para el uso más no para el mantenimiento. Es como adquirir un vehículo solo concentrado en su precio pero no en su mantenimiento, es decir el precio lo pagas una sola vez pero el mantenimiento se debe seguir realizando en la vida útil; esto mismo que aplica para un centro de datos. Se debe ver no una inversión inicial sino una inversión que requiere un alto costo de mantenimiento y costos de operación. En la siguiente figura 7 se presentan otros aspectos a tener en cuenta:

    .titulo-sexto.color-secundario(data-aos="fade-right")
      h5 Figura 7
      span Aspectos de la implementación de un #[i data center]
    
    .row.justify-content-center.mb-4
      .col-md-10.BG07-1.p-4
        .row.justify-content-center
          .col-md-3.col-6.mb-md-0.mb-4(data-aos="fade-right")
            img(src='@/assets/curso/tema4/img04.png')
          .col-md-9
            p Un #[i Data Center] es un área o una sección donde se alojan y mantienen diversos sistemas de tecnología de la información (TI) y almacenes de datos, los  cuales pueden contener mainframes, servidores y bases de datos. 
            p Independientemente de si el #[i Data Center] es grande o pequeño, todas las personas que ingresen en estas unidades deben estar perfectamente identificadas y contar con los conocimientos necesarios por si surge algún contratiempo, ya sea provocado o natural.
            p.mb-0 Asimismo, se deben tener en cuenta las medidas organizativas necesarias en el Centro de Datos: acceso controlado y verificado del personal, video vigilancia, control y regulación de  la temperatura del lugar, entre otras medidas no menos importantes como los sistemas de monitoreo, los cuales controlan la temperatura, la humedad, el consumo de energía entre otros factores ambientales.

    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1.	Riesgos asociados a los centros de datos
    
    p Hoy día existen muchos elementos de seguridad tanto a nivel físico como lógico. Los centros de datos se pueden ver afectados tanto por la afectación de un terremoto como por un ataque informático dirigido. En ambas situaciones el riesgo se ve desde el punto de vista de daños asociados, aunque pueden existir diferentes tipos de afectación. 
    p La seguridad es una de las causantes de mayor perdida y daños a la información. Los ataques informáticos, en la mayoría de veces están dirigidos a ocasionar daños particulares, dentro de los cuales se encuentra el robo de información. Las compañías que se encargan de velar porque esto no suceda sufren en algunas ocasiones demandas por la exposición que sufren los datos al ser robados, expuestos o compartidos sin permiso de los dueños. En el siguiente recurso se desarrolla en qué consisten los principales riesgos:

    
    .row.justify-content-center.mb-4
      .col-md-5.col-10
        figure.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema4/img06.svg')
        .BG02.p-4(data-aos="fade-right")
          p Dentro de los ataques informáticos más frecuentes a este tipo de infraestructuras son los de clasificación #[i ransomware], el cual se trata de secuestrar la información que se encuentra en los sistemas de almacenamiento y luego cobran para devolverla o no divulgarla, lo que es algo bastante complejo ya que puede generar inconvenientes de orden público, afectación en la reputación de las personas y hasta temas como discriminación, entre otros. 
          p.mb-0 A lo largo del mundo se han presentado muchos ataques de este tipo que han colocado hasta gobiernos y organizaciones en la mirada mundial.  De ahí la gran responsabilidad de resguardar y mantener los centros de datos con las medidas necesarias de seguridad para que esto no suceda. 
      .col-md-5.col-10
        figure.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema4/img07.svg')
        .BG02.p-4(data-aos="fade-left")
          p Otro aspecto que se debe tener en cuenta es el tema de los problemas ambientales. Un terremoto o inundación es algo devastador para un centro de datos. Es una pérdida invaluable para la organización y no solo por los elementos físicos sino lógicos, los cuales por supuesto están relacionados con la información que allí está almacenada.
          p De ahí la importancia de  realizar, previo a la instalación de un centro de datos, estudios topográficos, de suelos, del clima, precipitaciones, entre otros, para mitigar la probabilidad de que alguna de estas situaciones se puedan presentar.
          p Algunas empresas optan por realizar un proceso llamado colocation, el cual consiste en alquilar un espacio adecuado, luego de tener todos los estudios antes mencionados, para que la empresa pueda instalar sus dispositivos allí, fuera de las instalaciones de la empresa. Estos servicios son ofrecidos por empresas encargadas de crear los espacios adecuados para los centros de datos y realizan un contrato de uso a quienes requieran resguardar su centro de datos en esos sitios. 
          p Otro de los servicios que se ofrecen para este tipo de situaciones es el #[i housing] pero este solo ofrece alojamiento virtual; es decir, los equipos le pertenecen a la empresa dueña del centro de dato y quien desea subcontratar el servicio tiene acceso remoto al mismo junto a los equipos que haya adquirido en arrendamiento. Este servicio tiene un costo mucho menor al de colocation y es una alternativa viable para aquellas pequeñas empresas que no pueden costear una infraestructura física, y sí se pueden centran más en los procesos de negocio misionales de la organización.

    p Los centros de datos deben contener cinco elementos que les permiten realizar un correcto funcionamiento, los cuales son:

    AcordionA.mb-5(tipo="a" clase-tarjeta="BG06")
      .row.justify-content-center(titulo="Computación")
        .col-md-3.col-6.mb-md-0.mb-4
          img(src='@/assets/curso/tema4/img08.png')
        .col-md-7
          p Es proporcionada (en su mayoría) por servidores de alta gama y se compone por la memoria y la potencia, que es justamente lo que propicia la ejecución de las aplicaciones del CPD.
      .row.justify-content-center(titulo="Seguridad")
        .col-md-3.col-6.mb-md-0.mb-4
          img(src='@/assets/curso/tema4/img09.png')
        .col-md-7
          p Es un elemento fundamental en un #[i data center], ya que su principal objetivo es garantizar que la información de una empresa no tenga fugas o sufra ante diferentes situaciones como robos de información, accesos no autorizados, desastres naturales, incendios, entre otras.
      .row.justify-content-center(titulo="Almacenamiento")
        .col-md-3.col-6.mb-md-0.mb-4
          img(src='@/assets/curso/tema4/img10.png')
        .col-md-7
          p Toda la información y los datos de una empresa se almacenan dentro del CPD en diferentes soportes. Estos pueden ser cintas, unidades de estado sólido o múltiples copias de seguridad. Muchas grandes empresas optan por un procesado de datos en la nube para la recuperación de desastres y copias de seguridad. Y aunque la nube puede ser la fuente principal de almacenamiento, los gastos de transportar datos totalmente en esta modalidad suelen ser menos rentables que un almacenamiento local.
      .row.justify-content-center(titulo="Redes")
        .col-md-3.col-6.mb-md-0.mb-4
          img(src='@/assets/curso/tema4/img11.png')
        .col-md-7
          p Este elemento se refiere a las interconexiones entre los componentes del #[i data center] y el entorno exterior en el que se encuentra. Esto incluye enrutadores, conmutadores, controladores de entrega de aplicaciones, entre otros más.
      .row.justify-content-center(titulo="<em>Software</em> de análisis")
        .col-md-3.col-6.mb-md-0.mb-4
          img(src='@/assets/curso/tema4/img12.png')
        .col-md-7
          p Es un elemento que proporciona seguridad de los datos y facilidad de uso. Una de las funciones más populares es el análisis predictivo, el cual cumple el objetivo de analizar los datos actuales de una empresa para hacer predicciones inteligentes para el futuro.

    p Un centro de datos requiere de diferentes capas de seguridad que protejan la infraestructura de amenazas externas o intrusiones, y aunque la zona de alojamiento de un #[i data center] debe contar con videovigilancia y un control de acceso y seguridad perimetral; también es vital garantizar las cuatro áreas de seguridad primordiales siguientes:

    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Seguridad perimetral")
        h4 Seguridad perimetral
        .row.justify-content-center
          .col-md-5.col-10.mb-md-0.mb-4
            img(src='@/assets/curso/tema4/img13.png')
          .col-md-7
            p Esta capa o área de protección tiene tres objetivos esenciales: detener, detectar y demorar. Este tipo de seguridad puede ir desde barreras físicas como bardas o cercas o tácticas internas más sofisticadas para evitar ciberataques, por ejemplo, un ataque de denegación de servicio (DDoS). 
            p Esta primera área contiene todo lo necesario para salvaguardar el centro de datos.
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Seguridad en instalaciones")
        h4 Seguridad en instalaciones
        .row.justify-content-center
          .col-md-5.col-10.mb-md-0.mb-4
            img(src='@/assets/curso/tema4/img14.png')
          .col-md-7
            p A diferencia de la seguridad perimetral, la seguridad en instalaciones se refiere a toda aquella protección más cercana a los #[i data centers]. Esto se da mediante la restricción del acceso a la zona de alojamiento para evitar que alguien pueda causar algún daño accidental o intencional.
            p Las instalaciones requieren de sistemas de identificación y métodos de verificación para que ninguna persona ajena al control y mantenimiento del centro de datos pueda tener acceso.
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Seguridad en sala de ordenadores")
        h4 Seguridad en sala de ordenadores
        .row.justify-content-center
          .col-md-5.col-10.mb-md-0.mb-4
            img(src='@/assets/curso/tema4/img15.png')
          .col-md-7
            p Esta área de seguridad se encarga de restringir el acceso al centro de datos por medio de múltiples métodos de verificación y monitoreo de accesos no autorizados. De igual forma, esta capa asegura la redundancia energética y la de comunicación.
            p La seguridad en la sala de ordenadores puede ir desde lo más simple que es el uso de contraseñas hasta gran tecnología como la autenticación biométrica.
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Seguridad de <em>racks</em>")
        h4 Seguridad de <em>racks</em>
        .row.justify-content-center
          .col-md-5.col-10.mb-md-0.mb-4
            img(src='@/assets/curso/tema4/img16.png')
          .col-md-7
            p Esta es la última área o capa de seguridad que busca minimizar las amenazas internas que pueden causar alguna fuga de información por parte de alguien interno de la empresa. 
            p Un ejemplo de ello es el caso de la compañía Garmin, la cual sufrió un ataque en donde los asaltantes pidieron 10.000.000 USD de «rescate» por liberar el cifrado de su operación. Por lo tanto, la seguridad de <em>racks</em> no debe pasarse por alto, pues cualquier incidente por errores o de causa intencional significa grandes pérdidas financieras.
            p Para asegurar la protección de esta área se recomiendan sistemas de bloqueo electrónico, biométricos y videovigilancia.

    .row.justify-content-center.mb-4
      .col-md-10
        .row.justify-content-center.align-items-center.cajon.color-acento-contenido.p-4(data-aos="fade-right")
          .col-md-2.col-4.mb-md-0.mb-4
            img.w-75(src='@/assets/curso/tema1/img08.png')
          .col-md-10
            p Un centro de datos tiene muchos factores que pueden afectar su correcto funcionamiento y colocar en riesgo la información que allí se resguarda por eso es importante implementar estrategias las cuales incluyen #[i hardware] y #[i software] para mejorar los niveles de seguridad de los mismos .

    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2.	Estrategias para el manejo de un centro de datos  

    p Los centros de datos, como se ha mencionado, son esenciales para los procesos de negocio de las organizaciones y permiten resguardar los datos de una manera adecuada. A continuación, se exponen algunas estrategias que se deben tener en cuenta para que los centros de datos funcionen correctamente:

    AcordionA.mb-5(tipo="a" clase-tarjeta="BG06")
      .row.justify-content-center(titulo="Considera que la ubicación lo es todo")
        .col-md-11
          p Para que un centro de datos funcione correctamente y su seguridad no se vea amenazada debe estar ubicado en un área especial dentro de una empresa. Su localización debe cumplir con requisitos tanto técnicos como geográficos que sirvan para que esta red de sistemas pueda expandirse en el futuro.
          p Por ejemplo, Amazon cuenta con tres #[i data centers] en España, ya que su ubicación geográfica reduce la latencia y ofrece la posibilidad de almacenar datos muy sensibles.
          p Además de esto, un centro de datos debe estar completamente fuera de zonas con riesgo de inundaciones o donde los sismos sean muy recurrentes. También debe contar con acceso a energía eléctrica y conectividad a internet de alta calidad.
      .row.justify-content-center(titulo="Busca tener una optimización de control ambiental")
        .col-md-11
          p Un #[i data center] también requiere de algunas optimizaciones en el espacio en que estará instalado, ya que tiene rangos específicos de temperatura y humedad. Un nivel de humedad relativa ambiente del 45 % al 50 % es el más adecuado para garantizar su funcionamiento. Esto, debido a las siguientes razones:
          ul.lista-ul--color
            li 
              i.fas.fa-dot-circle
              | Ayuda a proteger los sistemas informáticos frente a problemas de corrosión.
            li 
              i.fas.fa-dot-circle
              | Ofrece un margen temporal de funcionamiento mayor en caso de algún fallo en el sistema de control.
          p Las descargas electroestáticas pueden ser muy comunes en zonas con humedad relativa debajo del 35 %; además, resultan más difíciles de eliminar y los problemas y consecuencias pueden ser algo graves.
          p En cuanto a la temperatura adecuada, para un centro de datos, esta debe tener un intervalo entre 21º y 23º C. De esta manera su funcionamiento es óptimo y facilita que los niveles de humedad se mantengan seguros.
      .row.justify-content-center(titulo="Piensa en contar con un control de mantenimiento eficaz")
        .col-md-11
          p El mantenimiento de un CPD ayuda a eliminar las interrupciones en su servicio, garantiza su buen funcionamiento, evita caídas y las pérdidas económicas que estos fallos pueden llegar a representar. Por eso para implementar un centro de datos empresarial se requiere de una buena estrategia de mantenimiento que cumpla con lo siguiente:
          ul.lista-ul--color
            li 
              i.fas.fa-dot-circle
              p #[strong Mínima de fallos]: el objetivo primordial del mantenimiento es coordinar, supervisar y garantizar el funcionamiento del CPD. Esto, a través del control de climatización, refrigeración, electricidad, infraestructura de comunicaciones, seguridad y control de accesos y sostenibilidad.
            li 
              i.fas.fa-dot-circle
              p #[strong Regulación y calidad]: las operaciones de mantenimiento de un #[i data center] empresarial requiere de regulaciones y normativas que aseguren los más altos estándares de calidad. Estos pueden ir desde reglamentos de seguridad de climatización hasta extinción de incendios.
            li 
              i.fas.fa-dot-circle
              p #[strong Personal calificado]: no cualquiera puede realizar un servicio de mantenimiento a un #[i data center]. Este personal debe estar calificado con certificaciones de capacitación y formado por las últimas tendencias en CPD.

      .row.justify-content-center(titulo="Respaldos eléctricos")
        .col-md-11
          p Aunque no es un secreto, se sabe que los dispositivos electrónicos funcionan con la electricidad pero siendo un poco más exactos no con cualquier tipo de energía eléctrica es energía regulada que permite que el dispositivo no sufra cambios bruscos en los voltajes y alimentación eléctrica, ya que esto puede afectar no solo su funcionamiento sino que, en muchas ocasiones, causa que el equipo se dañe y se considere como parte de las pérdidas de la organización.
          p Es necesario como una buena estrategia que el centro de datos cuente con un respaldo eléctrico, de acuerdo a un estudio eléctrico, que garantice que el suministro de energía sea acorde a la cantidad de equipos que se tienen instalados, teniendo en cuenta los voltajes y que el suministro eléctrico llegue de la manera adecuada a los dispositivos para evitar que estos sufran averías o se dañen de manera permanente.

    p Es importante muchos aspectos a considerar en el uso y mantenimiento de un centro de datos, entre estos la aplicación de las siguientes recomendaciones que se deben considerar para un centro de datos altamente disponible y que permita ejecutar los procesos de negocio de la manera más efectiva:

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Optimización de espacios")
        .row.justify-content-center
          .col-md-6.col-10.mb-4.mb-md-0
            img(src='@/assets/curso/tema4/img17.jpg')
          .col-md-6
            p Es fundamental establecer los espacios para la instalación de los dispositivos que serán necesarios para el procesamiento y almacenamiento de los datos e información que allí estarán. Adicional a ello, se debe planificar la iluminación, sistema de enfriamiento, redes eléctricas, voltajes requeridos y capacidad energética, de acuerdo a la cantidad de equipos que se instalarán. 
            p Todo este proceso debe ser llevado a cabo por diferentes profesionales en las áreas necesarias del centro de datos.  
      .py-3.py-md-4(titulo="Medición de los datos")
        .row.justify-content-center
          .col-md-6.col-10.mb-4.mb-md-0
            img(src='@/assets/curso/tema4/img18.jpg')
          .col-md-6
            p Este paso sugiere realizar un cálculo para estimar la potencia requerida de cada elemento que interactuará en el centro de datos. Por ejemplo, la refrigeración es fundamental para mantener los dispositivos a una temperatura adecuada para que estos no se sobrecalientan y sufran averías.
            p Todos los dispositivos de acuerdo a la recomendación del fabricante vienen con unas especificaciones de temperatura y humedad para que funcione correctamente, las cuales no se pueden pasar por alto, sobre todo al momento de realizar el cálculo de las tolerancias del centro de datos. 
            p En el caso de la temperatura, por ejemplo, se debe considerar cuántos equipos se instalarán y cuánta es la potencia del sistema de refrigeración para mantenerlos a una temperatura adecuada. Este mismo paso se debe aplicar a todos los demás dispositivos y procesos que manejara el centro de datos.
      .py-3.py-md-4(titulo="Realización de pruebas")
        .row.justify-content-center
          .col-md-6.col-10.mb-4.mb-md-0
            img(src='@/assets/curso/tema4/img18.jpg')
          .col-md-6
            p Este aspecto requiere de la creación de escenarios tanto simulados como reales para garantizar los mejores resultados al momento de implementar un centro de datos. 
            p Se utiliza generalmente #[i software] especializado, que mediante el uso de herramientas CAD y específicas de los procesos, permiten analizar y realizar las correcciones necesarias para mejorar el rendimiento del centro de datos.

    .row.justify-content-center.mb-4
      .col-md-10
        .row.justify-content-center.align-items-center.cajon.color-secundario.p-4(data-aos="fade-right")
          .col-md-2.col-4.mb-md-0.mb-4
            img.w-75(src='@/assets/curso/tema1/img08.png')
          .col-md-10
            p.mb-0 Es importante establecer procesos, estudios y pruebas para garantizar el correcto funcionamiento y rendimiento de un centro de datos . 

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
