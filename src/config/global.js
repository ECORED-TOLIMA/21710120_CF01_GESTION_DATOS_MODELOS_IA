export default {
  global: {
    componenteFormativo:
      'Clasificación de datos en modelos de inteligencia artificial',
    descripcionCurso:
      'Este componente tiene como objetivo que los aprendices desarrollen habilidades técnicas para gestionar y transformar datos en conocimiento aplicable, preparándolos para un entorno de inteligencia artificial que se encuentra cada vez más presente en diversas áreas y entornos digitales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-01.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-02.svg'),
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
        titulo: 'Tipos de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Estructurados',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Semiestructurados',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: ' No estructurados',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Bases de datos	',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Clasificación y características',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Modelos de bases de datos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Técnicas de almacenamiento de datos',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Modelado de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: ' Concepto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Principios',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Tipos y técnicas de normalización',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Arquitectura de bases de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: ' Concepto',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Métodos de funcionamiento',
            hash: 't_4_3',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_01_21710120_DU.pdf',
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
      tema: '1. Tipos de datos',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2022). Recursos y herramientas para el análisis efectivo de datos: introducción [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=BP8OeszBSCc',
    },
    {
      tema: '1. Tipos de datos',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2023). Etapas del procesamiento de datos y métodos estadísticos Introducción [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ndzj15PQEVw',
    },
    {
      tema: '3. Modelado de datos',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2023). Modelo de análisis de datos [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=KMRGyi1ZB9k',
    },
  ],
  glosario: [
    {
      termino: 'Almacén de datos',
      significado:
        'sistema optimizado para consultas analíticas y reporte que integra datos históricos de diferentes orígenes, organizados mediante esquemas dimensionales o relacionales para facilitar el análisis y la generación de informes.',
    },
    {
      termino: 'Canalización de Datos',
      significado:
        'secuencia automatizada de procesos para extraer, transformar, validar y cargar datos (ETL/ELT), desde múltiples fuentes hasta el entorno de entrenamiento o producción de modelos de IA.',
    },
    {
      termino: 'Entrenamiento <em>(Training)</em>',
      significado:
        'proceso mediante el cual un algoritmo de aprendizaje automático ajusta los parámetros internos de un modelo utilizando un conjunto de datos específico (datos de entrenamiento). El objetivo es que el modelo aprenda a identificar patrones o realizar la tarea deseada con precisión.',
    },
    {
      termino: 'Gobernanza de Datos',
      significado:
        'conjunto de políticas, procedimientos y responsabilidades que aseguran la calidad, la seguridad, el cumplimiento normativo y la correcta gestión de los datos a lo largo de todo su ciclo de vida.',
    },
    {
      termino: 'Ingeniería de Características',
      significado:
        'conjunto de técnicas para transformar y seleccionar variables derivadas de datos brutos con el fin de mejorar el rendimiento de los modelos de IA. Incluye creación de nuevas características, codificación de categorías y escalado de valores.',
    },
    {
      termino: 'Almacén de Modelo (de IA/ML)',
      significado:
        'modelo computacional inspirado en la estructura y funcionamiento de las redes neuronales biológicas del cerebro. Consiste en nodos interconectados ("neuronas") organizados en capas, que procesan información y aprenden a reconocer patrones complejos.',
    },
    {
      termino: 'Normalización',
      significado:
        'proceso de organizar los datos en tablas conforme a las formas normales para reducir redundancias y evitar anomalías en inserciones, actualizaciones o eliminaciones.',
    },
  ],
  referencias: [
    {
      referencia:
        'Abiteboul, S., Buneman, P. & Suciu, D. (2000). Data on the web: from relations to semistructured data and XML. Morgan Kaufmann.',
    },
    {
      referencia:
        'Codd, E. F. (1970). A relational model of data for large shared data banks. Communications of the ACM, 13(6), 377-387.',
    },
    {
      referencia:
        'Date, C. J. (2006). An introduction to database systems. Pearson Education India.',
    },
    {
      referencia:
        'Elmasri, R. & Navathe, S. B. (2016). Fundamentals of database systems seventh edition.',
    },
    {
      referencia:
        'Gómez, Á. P., Jalca, J. J. R., García, J. G., Sánchez, O. Q., Parrales, K. M. & Merino, J. M. (2017). Fundamentos sobre la gestión de base de datos (23). 3Ciencias.',
    },
    {
      referencia:
        'Kleppmann, M. (2017). Designing data-intensive applications: The big ideas behind reliable, scalable, and maintainable systems. O Reilly Media, Inc.',
    },
    {
      referencia:
        'Kroenke, D. M. (2003). Procesamiento de bases de datos. Pearson educación.',
    },
    {
      referencia:
        'Ozsu, M. T. & Valduriez, P. (2011). Principles of Distributed Database Systems (3rd ed.). Springer.',
    },
    {
      referencia:
        'Robinson, I., Webber, J. & Eifrem, E. (2015). Graph databases: new opportunities for connected data. O Reilly Media, Inc.',
    },
    {
      referencia:
        'Silberschatz, A., Korth, H. F. & Sudarshan, S. (2011). Database system concepts.',
    },
    {
      referencia:
        'Silberschatz, A., Korth, H. F., Sudarshan, S., Pérez, F. S., Santiago, A. I. & Sánchez, A. V. (2002). Fundamentos de bases de datos (11). Ciudad de México, México: McGraw-Hill.',
    },
    {
      referencia:
        'Simsion, G. & Witt, G. (2004). Data modeling essentials. Elsevier.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
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
          nombre: 'Deivis Eduard Ramírez Martínez',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
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
