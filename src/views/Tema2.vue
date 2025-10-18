<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 2
      h1 Bases de datos
    
    .row.justify-content-center.mb-4
      .col-lg-4.col-md-6.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img-01.png', alt='Imagen decorativa')
      .col-lg-8(data-aos="fade-right")
        p Si los datos constituyen el recurso bruto, las bases de datos actúan como las refinerías y los almacenes. Estos son sistemas organizados diseñados para contener, gestionar y proporcionar acceso eficiente a la información. La selección de la base de datos adecuada representa una de las decisiones arquitectónicas más críticas en el diseño de cualquier sistema de #[em software], con implicaciones directas en el rendimiento, la escalabilidad, la fiabilidad y el costo. Es por eso que el manejo de bases de datos siempre ha sido un tema crucial en el ámbito de los sistemas de información. No obstante, en años recientes, la expansión de Internet y el rápido avance de la tecnología relacionada con Internet han convertido el conocimiento sobre tecnología de bases de datos en una de las carreras más emocionantes. (Kroenke, 2003)
        .tarjeta.tarjeta--BGC02.p-3(style="background-color:#DCD8F2")
          .row.justify-content-center.align-items-center
            .col-auto.order-lg-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/icono-01.svg', alt='Imagen decorativa')
            .col-lg-10
              p.mb-0 A medida que las empresas comenzaron a reconocer el valor de la información y el inmenso potencial que los sistemas computacionales ofrecían para organizar y gestionar estos recursos, surgió una fuerte demanda de sistemas de información y un creciente reconocimiento de que la información, como recurso valioso, necesita ser organizada y administrada. (Gómez, et al., 2017)    
      
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Concepto

    p.mb-5 Los sistemas de bases de datos están diseñados para manejar grandes volúmenes de información. La gestión de datos, abarca tanto la creación de estructuras para el almacenamiento de información, como la implementación de mecanismos para su manipulación. Estos sistemas deben garantizar la integridad de la información almacenada, frente a fallos del sistema o intentos de acceso no autorizado. (Gómez, et al., 2017)

    .row.justify-content-center.mb-5
      .col-lg-4.col-md-6.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img-02.png', alt='Imagen decorativa')
      .col-lg-8(data-aos="fade-left")
        .tarjeta.tarjeta--BGC02.p-3.mb-4(style="background-color:#D6CDD9")
          .row.justify-content-center
            .col-lg-11
              p.mb-0 Un Sistema de Gestión de Bases de Datos (SGBD), se compone de un conjunto de datos interconectados y una serie de programas que permiten el acceso a esos datos. Esta colección de datos, comúnmente llamada base de datos, contiene información importante para una empresa. (Silberschatz, et al., 2020)
        .row.justify-content-center
          .col-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/icono-01.svg', alt='Imagen decorativa')
          .col-lg-10
            p.mb-0 Para que el sistema sea efectivo, es esencial que recupere los datos de manera eficiente. Esta necesidad ha llevado al desarrollo de estructuras de datos complejas para representar la información en la base de datos. Normalmente, la arquitectura de un SGBD se divide en tres niveles generales (Gómez, et al., 2017):     
  
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        AcordionA.color-acento-botones(tipo="b" clase-tarjeta="tarjeta tarjeta--C02")
          div(titulo="Nivel físico (interno)")
            p.mb-0 Este es el nivel más básico de abstracción, que detalla cómo se almacenan los datos en realidad. En el nivel físico, se describen minuciosamente las estructuras de datos complejas de bajo nivel.
          div(titulo="Nivel lógico (conceptual)")
            p.mb-0 El siguiente nivel de abstracción más elevado detalla qué datos se guardan en la base de datos y las relaciones que existen entre ellos. De esta manera, la base de datos completa se describe en términos de unas pocas estructuras relativamente simples.
          div(titulo="Nivel de vistas (externo)")
            p.mb-0 En el nivel más elevado de abstracción, se representa solo una parte de la base de datos completa. Esto es lo que el usuario final puede ver del sistema terminado, mostrando únicamente una sección de la base de datos al usuario autorizado para acceder a ella. El sistema tiene la capacidad de ofrecer múltiples vistas para la misma base de datos.
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img-03.png' alt="Imagen decorativa")
         
    p.mb-5 Como se había descrito previamente, un SGBD es un programa que se comunica con los usuarios, las aplicaciones y la propia base de datos para capturar, analizar y administrar los datos. Actúa como una capa de abstracción entre los datos físicos; es decir, la forma en que se almacenan en el disco, y la vista lógica que perciben los usuarios y las aplicaciones. El SGBD se encarga de llevar a cabo tareas esenciales como (Date, 2006):

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.d-none.d-lg-block(data-aos="zoom-in")
        img(src="@/assets/curso/tema2/img-04.png", alt="Imagen decorativa").img400.m-auto
      .col-lg-9(data-aos="fade-left")
        SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-4
              .col-6.col-lg-8
                img(src="@/assets/curso/tema2/icono-02.svg", alt="Imagen decorativa").img100.m-auto
            h4.titulo-1 Definición de datos
            p.mb-0 Proporcionar un lenguaje (como el DDL - Data Definition Language de SQL) para definir el esquema de la base de datos.
          .tarjeta.tarjeta--slyder.p-3
            .row.justify-content-center.mb-4
              .col-6.col-lg-8
                img(src="@/assets/curso/tema2/icono-03.svg", alt="Imagen decorativa").img100.m-auto
            h4.titulo-1 Manipulación de datos
            p.mb-0 Permitir a los usuarios insertar, actualizar, eliminar y consultar datos (usando un lenguaje como el DML - Data Manipulation Language de SQL).
          .tarjeta.tarjeta--slyder.p-3
            .row.justify-content-center.mb-4
              .col-6.col-lg-8
                img(src="@/assets/curso/tema2/icono-04.svg", alt="Imagen decorativa").img100.m-auto
            h4.titulo-1 Control de concurrencia 
            p.mb-0 Gestionar el acceso simultáneo a los datos por parte de múltiples usuarios o procesos para evitar conflictos.
          .tarjeta.tarjeta--slyder.p-3
            .row.justify-content-center.mb-4
              .col-6.col-lg-8
                img(src="@/assets/curso/tema2/icono-05.svg", alt="Imagen decorativa").img100.m-auto
            h4.titulo-1 Seguridad y autorización
            p.mb-0 Controlar quién puede ver y modificar los datos.
          .tarjeta.tarjeta--slyder.p-3
            .row.justify-content-center.mb-4
              .col-6.col-lg-8
                img(src="@/assets/curso/tema2/icono-06.svg", alt="Imagen decorativa").img100.m-auto
            h4.titulo-1 Integridad de datos
            p.mb-0 Asegurar que los datos cumplan con ciertas reglas y restricciones.
          .tarjeta.tarjeta--slyder.p-3
            .row.justify-content-center.mb-4
              .col-6.col-lg-8
                img(src="@/assets/curso/tema2/icono-07.svg", alt="Imagen decorativa").img100.m-auto
            h4.titulo-1 Respaldo y recuperación
            p.mb-0 Proporcionar mecanismos para proteger los datos contra fallos del sistema.
    
    p.mb-5 En la siguiente figura, se presenta cómo se relacionan los componentes de un sistema de base de datos:

    .titulo-sexto.color-acento-contenido.offset-1(data-aos="zoom-in")
      h5 Figura 1.
      span  #[i Componentes de los sistemas de bases de datos ]
    
    .row.justify-content-center.mb-5
      .col-lg-10.desktop(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema2/fig-01.svg', alt='Figura 1 que contiene un esquema que representa cómo se lleva a cabo el proceso de los sistemas de datos, el cual contiene unas herramientas de diseño que apuntan al analista y un tiempo de ejecución relacionado con los usuarios; ambos procesos se dan por medio de programas de aplicación.')
          figcaption Fuente: Kroenke (2003, p26)
      .col-lg-6.movil(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema2/fig-02.svg', alt='Figura 1 que contiene un esquema que representa cómo se lleva a cabo el proceso de los sistemas de datos, el cual contiene unas herramientas de diseño que apuntan al analista y un tiempo de ejecución relacionado con los usuarios; ambos procesos se dan por medio de programas de aplicación.')
    
    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10
        p.mb-0 En síntesis, una base de datos se refiere a la información almacenada, mientras que el Sistema de Gestión de Bases de Datos (SGBD), es el sistema encargado de su administración. En el uso cotidiano, es común emplear el término "base de datos" para referirse tanto al SGBD como a los datos que este contiene.
    
    Separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Clasificación y características

    .row.align-items-center.mb-4
      .col-lg-8
        p Las bases de datos se pueden categorizar de diversas maneras, por su modelo de datos, su propósito específico o su arquitectura de distribución. Algunos de estas categorías son (Kleppmann, 2017): 
        .row
          .col-lg-6.px-2.mb-4
            .tarjeta.tarjeta--BGC02(style="background-color:#FFD6E3")
              .row.justify-content-center.align-items-center
                .col-auto
                  img(src='@/assets/curso/tema2/icono-08.svg', alt='Imagen decorativa')
                .col-9.p-4
                  p.mb-0 #[b Por modelo de datos]
          .col-lg-6.px-2.mb-4
            .tarjeta.tarjeta--BGC02(style="background-color:#FFD6E3")
              .row.justify-content-center.align-items-center
                .col-auto
                  img(src='@/assets/curso/tema2/icono-15.svg', alt='Imagen decorativa')
                .col-9.p-4
                  p.mb-0 #[b Por uso previsto]
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/img-05.png', alt='Imagen decorativa')
    
    p.mb-5 A continuación, se presenta una descripción más completa basada en esta categorización:

    .row.mb-4.ms-0.mt-4
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/ico.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 Clasificación por modelado de datos
    
    p.mb-5 Dentro esta categoría existe dos tipos:

    .row.justify-content-center.mb-4  
      .col-lg-10(data-aos="fade-right")
        ImagenInfografica.color-acento-botones.mb-4.desktop
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/fig-01v1.svg', alt='Imagen decorativa')
          .tarjeta.tarjeta--blanca.p-3(x="39.8%" y="85%" numero="+")(style="background-color:#EAE7FB")
            p.mb-0 Basadas en el modelo relacional, organizan los datos en tablas. Son la opción dominante para datos estructurados. Ejemplos: PostgreSQL, MySQL, Oracle.
          .tarjeta.tarjeta--blanca.p-3(x="60.5%" y="85%" numero="+")(style="background-color:#EAE7FB")
            p.mb-0 Una categoría amplia que abarca todos los modelos que no son primariamente relacionales. Están diseñadas para la flexibilidad y la escala. 
        figure.movil
          img(src='@/assets/curso/tema2/fig-01v2.svg', alt='Imagen decorativa')

    .row.bg-c4.mb-4
      .col-12 
        .p-5
          p.mb-4 Las categorías no relacionales, incluyen: 
            .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
              SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
                .tarjeta.tarjeta--BG05.p-4
                  .row.justify-content-center.mb-4
                    .col-lg-5.col-sm-4.col-6
                      img(src='@/assets/curso/tema2/icono-10.svg' alt='AvatarTop')
                  h4.text-center Documentales
                  p.mb-0 Almacenan datos en documentos (JSON, BSON). Ejemplos: MongoDB, Couchbase.
                .tarjeta.tarjeta--BG05.p-4
                  .row.justify-content-center.mb-4
                    .col-lg-5.col-sm-4.col-6
                      img(src='@/assets/curso/tema2/icono-11.svg' alt='AvatarTop')
                  h4.text-center Clave-valor
                  p.mb-0 El modelo más simple, almacena datos como un diccionario. Ejemplos: Redis, Amazon DynamoDB.
                .tarjeta.tarjeta--BG05.p-4
                  .row.justify-content-center.mb-4
                    .col-lg-5.col-sm-4.col-6
                      img(src='@/assets/curso/tema2/icono-12.svg' alt='AvatarTop')
                  h4.text-center Columnares #[em (Wide-Column)]
                  p.mb-0 <b>Puerta trasera (<em>backdoor</em>)</b>: permite el acceso remoto a un sistema sin autorización, evitando los mecanismos de seguridad. Actúa de forma silenciosa, facilitando el control total por parte del atacante.
                .tarjeta.tarjeta--BG05.p-4
                  .row.justify-content-center.mb-4
                    .col-lg-5.col-sm-4.col-6
                      img(src='@/assets/curso/tema2/icono-13.svg' alt='AvatarTop')
                  h4.text-center Grafos
                  p.mb-0 Optimizadas para almacenar y navegar relaciones entre entidades. Ejemplos: Neo4j, Amazon Neptune.
                .tarjeta.tarjeta--BG05.p-4
                  .row.justify-content-center.mb-4
                    .col-lg-5.col-sm-4.col-6
                      img(src='@/assets/curso/tema2/icono-14.svg' alt='AvatarTop')
                  h4.text-center Series temporales
                  p.mb-0 Especializadas en datos indexados por tiempo. Ejemplos: InfluxDB, TimescaleDB.

    .row.mb-4.ms-0
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/ico.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 Clasificación por uso previsto

    p.mb-4 Esta clasificación tiene también dos tipos:

    .row.justify-content-center.mb-4
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        AcordionA.color-acento-botones(tipo="b" clase-tarjeta="tarjeta tarjeta--C02")
          div(titulo="OLTP <em>(Online Transaction Processing)</em>")
            p.mb-0 Se refiere a sistemas optimizados para manejar un gran volumen de transacciones breves y rápidas, tales como lecturas, inserciones y actualizaciones. Constituyen la columna vertebral de aplicaciones orientadas al usuario, como el comercio electrónico y la banca. Su diseño prioriza la velocidad de escritura y la integridad de los datos. Las bases de datos relacionales son típicamente ejemplos de sistemas OLTP.
          div(titulo="OLAP <em>(Online Analytical Processing)</em>")
            p.mb-0 Se caracteriza por su optimización para consultas complejas que examinan grandes volúmenes de datos históricos. Constituye la base de los sistemas de inteligencia empresarial y almacenes de datos. Este enfoque prioriza la velocidad de lectura y la capacidad de agregación. Las bases de datos columnares son particularmente adecuadas para OLAP.
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img-06.png' alt="Imagen decorativa")

    .row.mb-4
      .col-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/icono-01.svg', alt='Imagen decorativa')
      .col-10.mb-4
        p.mb-0 Independientemente de su tipo (modelado de datos - uso previsto), existen diversas características que determinan la calidad y capacidad de una base de datos, encontrando:

    p.mb-4 #[b Propiedades ACID:] un acrónimo que asegura la fiabilidad de las transacciones. Constituye el estándar de excelencia para las bases de datos OLTP y se explica a continuación:

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
        ImagenInfografica.color-acento-botones.mb-4.desktop
          template(v-slot:imagen)
            figure
              img.mb-4(src='@/assets/curso/tema2/fig-01v01.svg', alt='Imagen decorativa')
          .tarjeta.tarjeta--blanca.p-3(x="32.5%" y="81%" numero="+")(style="background-color:#EAE7FB")
            p Una transacción se ejecuta en su totalidad o no se ejecuta en absoluto, sin estados intermedios. 
          .tarjeta.tarjeta--blanca.p-3(x="44.5%" y="81%" numero="+")(style="background-color:#EAE7FB")
            p Una transacción únicamente puede transformar la base de datos de un estado válido a otro.
          .tarjeta.tarjeta--blanca.p-3(x="56%" y="81%" numero="+")(style="background-color:#EAE7FB")
            p Las transacciones concurrentes no interfieren entre sí, produciendo un resultado equivalente al de una ejecución en serie.
          .tarjeta.tarjeta--blanca.p-3(x="67.5%" y="81%" numero="+")(style="background-color:#EAE7FB")
            p Una vez que una transacción ha sido confirmada, su estado persiste, incluso en caso de un fallo del sistema.       
        figure.movil
          img.mb-4(src='@/assets/curso/tema2/fig-02v02.svg', alt='Imagen decorativa')

        p.mb-5 Otras características en común que tienen las bases de datos son:

        .row.mb-4.ms-0
          .col-auto.bg-c3(data-aos="fade-left")
            .row.align-items-center
              .col-auto.px-0
                figure
                  img(src='@/assets/curso/ico2.svg', alt='', style='width: 5.7px')
              .col
                h3.mb-0 A. Escalabilidad

        p Es la capacidad del sistema para manejar una carga de trabajo creciente. Dentro de los tipos de escalado que se pueden encontrar están:

        ImagenInfografica.color-acento-botones.mb-5.desktop
          template(v-slot:imagen)
            figure
              img.mb-4(src='@/assets/curso/tema2/figura-1.svg', alt='Imagen decorativa')
          .tarjeta.tarjeta--blanca.p-3(x="45%" y="45.4%" numero="+")(style="background-color:#EAE7FB")
            p Distribuye la carga entre múltiples servidores. Es la estrategia de las arquitecturas web modernas y es fundamental en los sistemas NoSQL. 
          .tarjeta.tarjeta--blanca.p-3(x="68%" y="64%" numero="+")(style="background-color:#EAE7FB")
            p Aumenta los recursos de un único servidor (más CPU, RAM, disco). Tiene un límite físico y es costoso.
        figure.movil
          img.mb-4(src='@/assets/curso/tema2/figura-2.svg', alt='Imagen decorativa')

        .row.mb-4.ms-0
          .col-auto.bg-c3(data-aos="fade-left")
            .row.align-items-center
              .col-auto.px-0
                figure
                  img(src='@/assets/curso/ico2.svg', alt='', style='width: 5.7px')
              .col
                h3.mb-0 B. Disponibilidad

        p.mb-5 Hace referencia al porcentaje de tiempo que la base de datos está operativa y disponible para su uso. Los sistemas de alta disponibilidad utilizan técnicas como la replicación para asegurar que no haya un único punto de fallo.

        .row.mb-4.ms-0
          .col-auto.bg-c3(data-aos="fade-left")
            .row.align-items-center
              .col-auto.px-0
                figure
                  img(src='@/assets/curso/ico2.svg', alt='', style='width: 5.7px')
              .col
                h3.mb-0 C. Rendimiento

        p.mb-0 Medido por la latencia (tiempo de respuesta a una consulta) y el #[em throughput] (número de operaciones por segundo).

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Modelos de bases de datos

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-4.col-md-6.col-8.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema2/img-07.png', alt='Imagen decorativa')
      .col-lg-8
        p Debajo de la estructura de la base de datos se halla el modelo de datos, que es un conjunto de herramientas conceptuales utilizadas para describir los datos, sus relaciones, la semántica y las restricciones de consistencia (Silberschatz, et al., 2020). Dicha de forma breve, son las estructuras que facilitan la organización, almacenamiento y gestión de la información. A continuación, se describen los principales modelos utilizados en las bases de datos de acuerdo con Robinson, et al. (2015):
        LineaTiempoD.color-acento-botones.especial
          p(numero="1" titulo="Modelo relacional") Propuesto por Edgar F. Codd en 1970, este modelo transformó la industria. Los datos se organizan en tablas (o "relaciones"), donde cada tabla consiste en una serie de filas (o "tuplas") y columnas (o "atributos"). Las conexiones entre las tablas se logran mediante claves externas #[em (foreign keys),] que son campos que señalan el ID único (clave primaria o #[em primary key]) de una fila en otra tabla. SQL es el lenguaje estándar para interactuar con este modelo. Su principal ventaja es la integridad y consistencia de los datos, garantizadas por las propiedades ACID.  
          p(numero="2" titulo="Modelo de documentos") En lugar de utilizar filas y columnas, se guarda la información en documentos. Un documento es una estructura de datos independiente, generalmente en formato JSON o BSON (JSON binario), que puede ser tan complejo y anidado como se requiera. Toda la información de una entidad (como un usuario y todos sus pedidos) puede estar contenida en un solo documento. Esto elimina la necesidad de realizar JOINs complejos y costosos, lo que permite lecturas extremadamente rápidas. Es altamente flexible, no es necesario que todos los documentos de una colección tengan la misma estructura. Es ideal para catálogos de productos, perfiles de usuario y sistemas de gestión de contenido.
          p(numero="3" titulo="Modelo clave-valor") Este es el modelo NoSQL más básico. Se compone de una extensa tabla #[em hash] en la que cada elemento está asociado a una clave única y un valor. Para la base de datos, el valor es un "blob" opaco; puede ser cualquier cosa, desde una cadena de texto hasta un objeto JSON o una imagen. Son extremadamente rápidos y permiten una escalabilidad horizontal. Se emplean para cachés de alta velocidad (como Redis), almacenamiento de sesiones de usuario y aplicaciones en tiempo real.
          p(numero="4" titulo="Modelo columnar <em>(Wide-Column)</em>") A diferencia de las bases de datos relacionales que almacenan datos por filas, las bases de datos de modelo columnar los almacenan por columnas. Cada fila puede contener un conjunto distinto de columnas. Están optimizadas para agregar valores de una columna específica, a través de millones de filas, lo que las hace ideales para cargas de trabajo de análisis (OLAP). Por ejemplo, para calcular el promedio de ventas de un producto, es necesario leer únicamente la columna "ventas", ignorando todas las demás, lo que resulta en una mayor eficiencia.
          p(numero="5" titulo="Modelo de grafo") Específicamente diseñado para datos en los que las relaciones constituyen el aspecto más crucial de la información. Los datos se representan como nodos (o vértices) y las relaciones entre ellos como aristas (o ejes). Tanto los nodos como las aristas pueden poseer propiedades. Son ideales para aplicaciones como redes sociales, sistemas de recomendación, detección de fraudes y logística. 

    Separador

    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Técnicas de almacenamiento de datos

    .row.align-items-center.mb-5
      .col-xl(data-aos="fade-right")
        .row.mb-4
          .col
            p.mb-0 Los datos se almacenan físicamente en el disco y en la forma en que se hagan tiene un impacto masivo en el rendimiento. De acuerdo a Elmasri & Navathe (2016), suelen clasificarse en: 
        AcordionA.color-acento-botones(tipo="b" clase-tarjeta="tarjeta tarjeta--C02")
          .row(titulo="Almacenamiento orientado a filas")
            .col-12.mb-0.mb-md-0
              p.mb-0 Representa el enfoque tradicional de las bases de datos relacionales (OLTP). En este método, todos los valores de una fila se almacenan de manera contigua en el disco. Es altamente eficiente cuando se requiere recuperar una fila completa, como en el caso de la consulta SELECT * FROM usuarios WHERE id = 123, ya que todos los datos necesarios se leen en una única operación de entrada/salida de disco. No obstante, si solo se necesitan unas pocas columnas de una tabla con un gran número de columnas, este método resulta ineficiente, dado que se deben leer todos los datos de la fila, aunque la mayoría de ellos no sean necesarios.
          .row(titulo="Almacenamiento orientado a columnas")
            .col-12.mb-0.mb-md-0
              p.mb-0 Técnica empleada por las bases de datos analíticas (OLAP). Todos los valores de una misma columna se almacenan de manera contigua en el disco. Presenta dos ventajas significativas para el análisis de datos. En primer lugar, la eficiencia de lectura se ve mejorada. En consultas que solo requieren un subconjunto de columnas, únicamente se accede a los datos de dichas columnas, lo que reduce de manera considerable la entrada/salida de disco. En segundo lugar, se consigue una compresión más eficiente. Debido a que los datos dentro de una misma columna tienden a ser uniformes en cuanto a tipo y rango de valores, pueden comprimirse de manera más eficaz que los datos variados de una fila. Esto no solo reduce el espacio de almacenamiento necesario, sino que también agiliza las consultas, ya que hay menos datos que leer del disco.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/tema2/img-08.png', alt='Imagen decorativa').m-auto

    .row.mb-4.ms-0
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/ico.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 Indexación
  
    p.mb-5 Un índice es una estructura de datos auxiliar que mejora la velocidad de las operaciones de recuperación de datos en una tabla. Funciona de manera similar al índice de un libro: en lugar de leer todo el libro para encontrar un tema, se va al índice, se encuentra el tema y se dirige directamente a la página correcta. Entre los más usados se encuentran: 

    .row.justify-content-center.mb-4
      .col-md-10(data-aos="fade-right")
        TabsC.color-acento-botones.mb-5(data-aos="fade-right")
          .py-3.py-md-4(titulo="Árboles B <em>(B-Trees)</em>")
            .row.justify-content-center.p-4
              .col-lg-6.col-8.mb-lg-0.mb-4
                figure
                  img(src='@/assets/curso/tema2/img-09.svg', alt='Imagen decorativa')
              .col-lg-6
                p.mb-0 Son la estructura de índice más prevalente en las bases de datos relacionales. Esta estructura de árbol se auto-balancea, manteniendo los datos en orden y permitiendo realizar búsquedas, inserciones y eliminaciones de manera eficiente en tiempo logarítmico. Es adecuada tanto para búsquedas directas (WHERE id = 123) como para búsquedas por rango (WHERE edad > 30).
          .py-3.py-md-4(titulo="Índices <em>Hash</em>")
            .row.justify-content-center.p-4
              .col-lg-6.col-8.mb-lg-0.mb-4
                figure
                  img(src='@/assets/curso/tema2/img-10.svg', alt='Imagen decorativa')
              .col-lg-6
                p.mb-0 Crean una tabla hash donde la clave es el valor de la columna indexada y el valor es un puntero a la fila del disco. Son extremadamente rápidos para búsquedas de igualdad exactas, pero no son útiles para búsquedas por rango.
          .py-3.py-md-4(titulo="Índices invertidos")
            .row.justify-content-center.p-4
              .col-lg-6.col-8.mb-lg-0.mb-4
                figure
                  img(src='@/assets/curso/tema2/img-11.svg', alt='Imagen decorativa')
              .col-lg-6
                p.mb-0 Son la base de los motores de búsqueda de texto completo. Crean un mapa desde el contenido (palabras) a su ubicación en los documentos.


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
