export default {
  global: {
    componenteFormativo:
      'Operación, implementación y mejora continua de un SGCN',
    descripcionCurso:
      'Este componente formativo está orientado al estudio de la implementación y operación de un SGCN, teniendo en cuenta los procesos de mejora continua que se puedan requerir a lo largo de su tiempo de vida.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Planificación y control de operaciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Riesgos disruptivos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Evaluación de riesgos',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '¿Qué es el BIA?',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Medición del impacto de un BIA',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Estrategias y plan de gestión de incidentes',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '¿Qué es un plan de continuidad del negocio?',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Evaluación de planes de continuidad de negocio',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Características de los planes de continuidad',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Normatividad',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: '¿Qué es un centro de datos?',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Riesgos asociados a los centros de datos',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Estrategias para el manejo de un centro de datos',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Monitoreo de procesos de continuidad de negocio',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: '¿Qué es una auditoría interna?',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: '¿Cómo se aplica una auditoría interna a un SGCN?',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Construcción de planes de mejora continua para un SGCN',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'Proceso de certificación de un SGCN',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Proyecto de implantación de un SGCN',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Riesgos al implementar un SGCN',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Problemas frecuentes y solución de problemas',
            hash: 't_6_2',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  complementario: [
    {
      tema: '1.2. Evaluación del riesgo.',
      referencia:
        'Grupo Proikos. (2021). Métodos para evaluar los riesgos. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=qYWBhFbN-zs',
    },
    {
      tema: '2. ¿Qué es el BIA?',
      referencia:
        'INCONTEC. (2017). Seguridad de la sociedad = sistemas de gestión de la continuidad de negocio: directrices para el análisis de impacto en el negocio (BIA).',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000101443',
    },
    {
      tema: '3. ¿Qué es un plan de continuidad del negocio?',
      referencia:
        'Olarte Rojas, A. D. (2017). Propuesta metodológica para la evaluación de la madurez del sistema de gestión de continuidad del negocio en el sector financiero bancario colombiano bajo el enfoque de la norma ISO 22301:2012. SIGNOS 8(1), 31-44.',
      tipo: 'Artículo',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_dialnet_primary_oai_dialnet_unirioja_es_ART0001302199',
    },
    {
      tema: '5.1. ¿Qué es una auditoría interna?',
      referencia:
        'Montes Salazar, C. A., Porras Cuellar, C., Muñoz Valle, R. y Dextre Flores, J. (2017). Auditoría Interna y Gestión Organizacional. Proyecciones, (12).',
      tipo: 'Artículo',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_doaj_primary_oai_doaj_org_article_ffdf450c064a494faa07e01e182d58d8',
    },
    {
      tema: '6. Proyecto de implantación de un SGCN',
      referencia:
        'GlobalSUITE Solutions. (2020). ISO 22301: ¿Cómo implantar un sistema de gestión de continuidad de negocio? [Video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=LTZLxE1UHfE',
    },
  ],
  glosario: [
    {
      termino: 'Certificación',
      significado:
        'Proceso de verificación de un producto o proceso en el cual se realiza la inspección de las actividades que se efectúan en una empresa, las cuales deben estar alineadas con un referente internacional.',
    },
    {
      termino: 'Continuidad',
      significado:
        'Se comprende como el proceso de garantizar que las actividades que se están realizando no pierdan su inercia y ejecución.',
    },
    {
      termino: 'Gestión',
      significado:
        'Proceso de realizar un adecuado uso de los recursos con los que cuenta una organización o persona natural.',
    },
    {
      termino: 'ISO 22301',
      significado:
        'Es una norma internacional que permite la gestión de la continuidad del negocio en las organizaciones.',
    },
    {
      termino: 'Negocio',
      significado:
        'Lugar donde se ofrecen servicios y productos a diferentes clientes o empresas.',
    },
    {
      termino: 'Organización',
      significado:
        'Se entiende como el referente de función que realiza actividades en beneficio de una comunidad o personal.',
    },
    {
      termino: 'Plan',
      significado:
        'Secuencia organizada de acciones para lograr un objetivo común.',
    },
    {
      termino: 'Planificación',
      significado:
        'Proceso que comprende la organización de las diferentes actividades que se llevarán a cabo en un proyecto o proceso a implementar.',
    },
    {
      termino: 'Riesgo',
      significado:
        'Situación que se puede presentar y que en la mayoría de las ocasiones si no se controla a tiempo puede causar traumatismos y problemas en los procesos de negocio de una organización.',
    },
    {
      termino: 'SGCN',
      significado:
        'Es un proceso que permite controlar las acciones que se realizan para garantizar la gestión de los riesgos y la continuidad del negocio.',
    },
    {
      termino: 'Sistema',
      significado:
        'Conjunto de elementos que se utilizan para un fin u objetivo general.',
    },
  ],
  referencias: [
    {
      referencia:
        'GlobalSUITE Solutions. (2020). ISO 22301: ¿Cómo implantar un sistema de gestión de continuidad de negocio? [Video] YouTube.',
      link: 'https://www.youtube.com/watch?v=LTZLxE1UHfE',
    },
    {
      referencia:
        'Grupo Proikos. (2021). Métodos para evaluar los riesgos. [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=qYWBhFbN-zs',
    },
    {
      referencia:
        'ISO 22301 (2019). Sistema de Gestión de Continuidad de Negocio.',
      link: 'https://www.isotools.org/normas/riesgos-y-seguridad/iso-22301/',
    },
    {
      referencia:
        'MinTIC. (2015). Guía para realizar el Análisis de Impacto de Negocios BIA.',
      link:
        'https://www.mintic.gov.co/gestionti/615/articles-5482_G11_Analisis_Impacto.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Dulfran Antonio Montaño Montaño',
        cargo: 'Experto Temático',
        centro: 'Regional Distrito Capital - Centro de diseño y Metrología ',
      },
      {
        nombre: 'Miroslava González Hernández',
        cargo: 'Diseñadora Instruccional',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor Metodológico',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Corrector de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Natalia Maldonado Delgado',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
