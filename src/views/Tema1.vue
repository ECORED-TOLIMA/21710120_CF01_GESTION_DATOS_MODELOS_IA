<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Tipos de datos
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(style="background-color:#DCD8F2")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img-01.png')})`}" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 En su nivel más básico, un dato se define como una representación simbólica (numérica, alfabética, algorítmica, etc.) de un atributo o variable de una entidad. Constituye un hecho bruto, una unidad discreta de información objetiva sobre un evento. Aislado, un dato puede carecer de significado. Por ejemplo, el número "21" es simplemente un número. Sin embargo, al situarlo en un contexto como la edad de un cliente, la cantidad de productos en un carrito de compras o la temperatura en grados Celsius, adquiere significado y se transforma en información. La gestión eficaz de los datos comienza con el reconocimiento de sus diversas formas y estructuras. 

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-4.col-md-6.col-8.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema1/img-02.png', alt='Imagen decorativa')
      .col-lg-8
        p Por otra parte, la inteligencia artificial (IA) y el aprendizaje automático han transformado significativamente la interacción con la tecnología y los datos. No obstante, el rendimiento y la eficacia de cualquier modelo de IA dependen de manera crítica de la calidad, estructura y gestión de los datos que lo sustentan. Un modelo sofisticado con datos mal gestionados generará resultados deficientes, un principio conocido como #[em garbage in, garbage out] o GIGO por sus siglas en inglés.
        p.mb-0 El principio GIGO es un concepto esencial en la gestión de datos que indica una conexión directa entre la calidad de los datos introducidos y la calidad de los resultados obtenidos. En términos sencillos, esto significa que, si se ingresan datos de baja calidad o incorrectos en un sistema, inevitablemente se obtendrán resultados igualmente deficientes o erróneos. Surge en los inicios de la computación, cuando los programadores advirtieron que los computadores, por muy avanzadas que fueran, solo podían procesar la información que recibían. Si dicha información era incorrecta, incompleta o inconsistente, los resultados reflejarían esas deficiencias, independientemente de la calidad del procesamiento o de los algoritmos empleados.
      
    .row.justify-content-center.mb-4
      .col-10(data-aos="fade-right")
        .row.justify-content-center.cajon.C01.p-4(style="background-color:#DCD8F2")
          .col-lg-9.order-lg-1.order-2.px-4
            p.mb-0 Las consecuencias de no tener en cuenta este principio pueden ser serias y costosas. En el mundo empresarial, tomar decisiones basadas en datos incorrectos puede llevar a estrategias equivocadas, pérdidas económicas y oportunidades extraviadas. Este principio es un argumento claro que evidencia la importancia de tener buenos datos que serán utilizados en el entrenamiento de un modelo de IA.
          .col-lg-3.col-md-4.col-6.order-lg-2.order-1.mb-lg-0.mb-4.px-0
            figure
              img(src='@/assets/curso/tema1/img-03.svg', alt='Imagen decorativa')  
    
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Estructurados

    p Los datos estructurados son la forma más ordenada de información. Se distinguen por seguir un esquema fijo y preestablecido, donde cada componente ocupa una posición específica y tiene un tipo de dato claramente definido. Esta disposición en forma de tabla, facilita en gran medida su procesamiento, búsqueda y análisis. De forma breve, se podría afirmar que son aquellos que se adhieren a un modelo de datos predefinido y altamente organizado. Los datos estructurados son, sin duda, el tipo de datos más desarrollado y tradicionalmente más sencillo de gestionar y analizar por las máquinas. La característica principal de los datos estructurados es que su formato, tipo y longitud están predefinidos en una estructura rígida, conocida como "esquema". Un ejemplo de esto es una hoja de cálculo: cada columna está diseñada para contener un tipo específico de información (nombre, fecha, cantidad, etc.) y cada fila representa un registro único que se ajusta a dicha estructura.
    p.mb-5 Dentro de las características principales de este tipo de dato se tiene (Silberschatz, et al., 2011):

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-xl-3.col-lg-8.mb-xl-0.mb-4
        .crd.crd--grayGrad(data-aos="fade-right")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema1/icono-01.svg", alt="Imagen decorativa").img90.m-auto
          h4.text-center Esquema predefinido
          p.mb-0 La estructura (campos, tipos de datos) se define antes de que se introduzcan los datos. Esto se conoce #[em como schema-on-write.]
      .col-xl-3.col-lg-8.mb-xl-0.mb-4
        .crd.crd--grayGrad(data-aos="flip-right")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema1/icono-02.svg", alt="Imagen decorativa").img90.m-auto
          h4.text-center Formato tabular
          p.mb-0 Generalmente se organizan en tablas con filas y columnas.
      .col-xl-3.col-lg-8.mb-xl-0.mb-4
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema1/icono-03.svg", alt="Imagen decorativa").img90.m-auto
          h4.text-center Tipos de datos definidos
          p.mb-0 Cada columna está restringida a tipos de datos específicos, como #[em INTEGER, VARCHAR, DATE, BOOLEAN, etc.]
      .col-xl-3.col-lg-8.mb-xl-0.mb-4
        .crd.crd--grayGrad(data-aos="fade-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema1/icono-04.svg", alt="Imagen decorativa").img90.m-auto
          h4.text-center Facilidad de consulta
          p.mb-0 Su naturaleza organizada los hace ideales para ser consultados, procesados y analizados, mediante lenguajes de consulta estructurados, siendo SQL #[em (Structured Query Language)] el estándar de facto.

    p.mb-5 Utilizar datos estructurados tiene ventajas como:

    .row.justify-content-center.mb-5
      .col-lg-3.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/icono-05.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#B9B1E5")
            h4.text-center.mt-5(style="color:#12263F") Eficiencia en consultas
            p.text-center.mb-0(style="color:#12263F") Facilitan búsquedas rápidas y precisas mediante el uso de lenguajes como SQL.
      .col-lg-3.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/icono-06.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#B9B1E5")
            h4.text-center.mt-5(style="color:#12263F") Integridad de datos
            p.text-center.mb-0(style="color:#12263F") Los esquemas rígidos aseguran la consistencia y minimizan los errores.
      .col-lg-3.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/icono-07.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#B9B1E5")
            h4.text-center.mt-5(style="color:#12263F") Análisis estadístico
            p.text-center.mb-0(style="color:#12263F") Son ideales para realizar cálculos matemáticos y análisis cuantitativos.
      .col-lg-3.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/icono-08.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#B9B1E5")
            h4.text-center.mt-5(style="color:#12263F") Compatibilidad
            p.text-center.mb-0(style="color:#12263F") Ofrecen amplia compatibilidad con herramientas de análisis tradicionales.

    .row
      .col-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/icono-01.svg', alt='Imagen decorativa')
      .col-10.mb-4
        p.mb-0 Algunos ejemplos de este tipo de datos son las bases de datos relacionales, las hojas de cálculo, archivos CSV, sistemas ERP, datos de transacciones financieras. Sin embargo, estos datos presentan algunas limitaciones como:

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/icono-09.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#B9B1E5")
            h4.text-center.mt-5(style="color:#12263F") Rigidez
            p.text-center.mt-4.mb-0(style="color:#12263F") La modificación de la estructura requiere cambios significativos en el sistema. 
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/icono-10.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#B9B1E5")
            h4.text-center.mt-5(style="color:#12263F") Escalabilidad limitada
            p.text-center.mt-4.mb-0(style="color:#12263F") Pueden volverse ineficientes con grandes volúmenes de datos. 
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/icono-11.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#B9B1E5")
            h4.text-center.mt-5(style="color:#12263F") Falta de flexibilidad
            p.text-center.mt-4.mb-0(style="color:#12263F") Dificultan el almacenamiento de información que no se ajusta al esquema predefinido.

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
        .p-4.bg-c5
          .row.align-items-center
            .col-lg-auto.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/icono-12.svg', alt='', style='width: 60px').m-auto
            .col-lg
              p.mb-0 #[b Ejemplo:] Tabla de Empleados ID | Nombre | Edad | Departamento | Salario 1 | Ana López | 28 | #[em Marketing] | 45000 2 | Juan Pérez| 35 | IT | 55000 3 | María García| 42 | Ventas | 48000

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Semiestructurados
    
    p Los datos semiestructurados representan un punto medio entre la rigidez de los datos estructurados y la flexibilidad de los no estructurados. Estos datos incorporan elementos organizativos como etiquetas, metadatos o jerarquías, pero no requieren un esquema fijo para todos los elementos. Por consiguiente, estos datos no se ajustan a un esquema formal y rígido como el de una base de datos relacional, pero incorporan etiquetas, metadatos o marcadores que separan los elementos semánticos y permiten una organización jerárquica. Esto les otorga un grado de auto-descripción y flexibilidad que los datos estructurados no poseen. La estructura no está definida en un esquema externo, sino que se encuentra contenida dentro de los propios datos. Considerando un documento que contiene información sobre una persona, este, en lugar de tener columnas fijas, podría disponer de etiquetas que describen cada pieza de información.
    p.mb-5 Al igual que los datos estructurados, los datos semiestructurados presentan unas características que ayudan a diferenciarlos de los otros tipos de datos, entre las cuales se encuentran:

    .row.justify-content-center.mb-5
      .col-8.col-lg.bg-c2.m-2(data-aos="fade-right")
        .p-4
          figure.mb-4
            img(src='@/assets/curso/tema1/icono-13.svg', style="width: 50px" ,alt='')
          h4 Auto-descriptivos
          p.mb-0 Incorporan información sobre su propia estructura mediante metadatos.  
      .col-8.col-lg.bg-c2.m-2(data-aos="fade-left")
        .p-4
          figure.mb-4
            img(src='@/assets/curso/tema1/icono-14.svg', style="width: 50px" ,alt='')
          h4 Flexibilidad controlada 
          p.mb-0 Permiten variaciones en la estructura sin comprometer la organización.       
      .col-8.col-lg.bg-c2.m-2(data-aos="fade-right")
        .p-4
          figure.mb-4
            img(src='@/assets/curso/tema1/icono-15.svg', style="width: 50px" ,alt='')
          h4 Intercambiabilidad
          p.mb-0 Facilitan el intercambio de datos entre diversos sistemas y plataformas.  
      .col-8.col-lg.bg-c2.m-2(data-aos="fade-left")
        .p-4
          figure.mb-4
            img(src='@/assets/curso/tema1/icono-16.svg', style="width: 50px" ,alt='')
          h4 Escalabilidad
          p.mb-0 Se adaptan de manera más eficiente a los cambios en los requisitos de datos.

    p.mb-5 Los datos semiestructurados suelen ser aplicados en tareas y actividades como:

    .row.align-items-center.mb-5
      .col-xl
        AcordionA.color-acento-botones(tipo="b" clase-tarjeta="tarjeta tarjeta--C02")
          .row(titulo="Desarrollo web")
            .col-12.mb-0.mb-md-0
              p.mb-0 En el ámbito del desarrollo web, JSON es esencial para las APIs REST y la comunicación entre servicios.
          .row(titulo="Configuración de sistemas")
            .col-12.mb-0.mb-md-0
              p.mb-0 En cuanto a la configuración de sistemas, XML se utiliza para gestionar archivos de configuración complejos. Para el intercambio de datos, se emplean formatos estándar que facilitan la comunicación entre aplicaciones.
          .row(titulo="Almacenamiento de <em>logs</em>")
            .col-12.mb-0.mb-md-0
              p.mb-0 En el almacenamiento de #[em logs,] se requiere una estructura que permita un análisis adecuado, pero que también ofrezca flexibilidad para diferentes tipos de eventos.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/tema1/img-04.png', alt='Imagen decorativa').m-auto

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-10
        .row.justify-content-center.align-items-center.tarjeta.tarjeta--C01.p-3(style="background-color:#FFEBF1")
          .col-lg-8.order-lg-1.order-2.px-4
            .row.justify-content-center
              p Algunos ejemplos de este tipo de datos son:
              ul.lista-ul--color.lista-ul.mb-0
                li.mb-0
                  i.fas.fa-robot(style="color:#523DBF")
                  p.mb-0 Archivos XML.  
                li.mb-0
                  i.fas.fa-robot(style="color:#523DBF")
                  p.mb-0 JSON.
                li.mb-0
                  i.fas.fa-robot(style="color:#523DBF")
                  p.mb-0 HTML.
                li.mb-0
                  i.fas.fa-robot(style="color:#523DBF")
                  p.mb-0 Correos electrónicos.
                li.mb-0
                  i.fas.fa-robot(style="color:#523DBF")
                  p.mb-0 #[em Logs] de servidores.
                li.mb-0
                  i.fas.fa-robot(style="color:#523DBF")
                  p.mb-0 Documentos con metadatos.
          .col-lg-4.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4.px-0
            figure
              img(src='@/assets/curso/tema1/img-05.svg', alt='Imagen decorativa')  

    p.mb-5 A continuación, se presentan ejemplos típicos de dos de estos tipos de datos (Abiteboul, et al., 2000): 
    
    TabsC.color-acento-botones.mb-5(data-aos="fade-right")
      .py-3.py-md-4(titulo="JSON(JavaScript Object Notation)")
        .row.justify-content-center.p-4
          .col-lg-6.order-lg-1.order-2
              p El formato predominante para la comunicación entre servicios web (APIs) y para bases de datos de documentos es el JSON. Un objeto JSON que describe a un usuario podría incluir campos básicos como "nombre" y "email". Sin embargo, otro usuario dentro de la misma colección podría contener campos adicionales, como "perfiles_sociales" (que es un objeto anidado), sin necesidad de modificar ninguna estructura predefinida.
              p.mb-0 Ejemplo:
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            .tarjeta.fondo_code
              br
              br
              .row.justify-content-center.align-items-center
                .col-12.p-5 
                  p.mb-0 &lbrace;
                  p.mb-0 "empleado": &lbrace; "id": 1,
                  p.mb-0 "nombre": "Ana López",
                  p.mb-0 "edad": 28,
                  p.mb-0 "departamento": "Marketing",
                  p.mb-0 "habilidades": ["SEO", "Redes Sociales", "Analytics"] &lbrace; 
                  p.mb-5 &rbrace; 

      .py-3.py-md-4(titulo="XML (eXtensible Markup Language)")
        .row.justify-content-center.p-4
          .col-lg-6.order-lg-1.order-2
            p Durante un período prolongado, fue considerado el estándar para el intercambio de datos. Emplea etiquetas personalizadas para definir tanto la estructura como los elementos de los datos. Su uso es ampliamente reconocido en archivos de configuración, documentos de ofimática (como .docx) y en la industria editorial.
            p.mb-0 Ejemplo:
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            .tarjeta.fondo_code
              br
              br
              br
              .row.justify-content-center.align-items-center
                .col-12.p-5 
                  p.mb-0 &lt;usuario id="usr123"&gt;
                  p.mb-0 &lt;nombre&gt;Ana Pérez&lt;/nombre&gt;
                  p.mb-0 &lt;email&gt;ana.perez@example.com&lt;/email&gt;
                  p.mb-0 &lt;activa&gt;true&lt;/activa&gt;
                  p.mb-0 &lt;pedidos&gt;
                  p.mb-0 &lt;pedido id="ped001"&gt;
                  p.mb-0 &lt;total&gt;49.99&lt;/total&gt;
                  p.mb-0 &lt;/pedido&gt;
                  p.mb-0 &lt;pedido id="ped002"&gt;
                  p.mb-0 &lt;total&gt;120.50&lt;/total&gt;
                  p.mb-0 &lt;/pedido&gt;
                  p.mb-0 &lt;/pedidos&gt;
                  p.mb-0 &lt;/usuario&gt;
                  
    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
        .p-4.bg-c5
          .row.align-items-center
            .col-lg-auto.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/icono-12.svg', alt='', style='width: 60px').m-auto
            .col-lg
              p.mb-0 #[b Los datos semiestructurados son el lenguaje de la web moderna y de las aplicaciones que necesitan interactuar entre sí de forma flexible y escalable.]

    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 No estructurados

    .row.justify-content-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        .row.mb-4
          .col-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/img-08.svg', alt='Imagen decorativa')
          .col
            p Los datos no estructurados constituyen la mayor parte de la información generada digitalmente. Estos datos carecen de un formato predefinido y requieren técnicas avanzadas de procesamiento para extraer información valiosa.
            p.mb-0 Debido a su naturaleza este tipo de datos presenta complejidad al momento de procesarlos. Dentro de las complejidades que se generan se pueden encontrar:
        .tarjeta.tarjeta--BGC01.p-3.mb-0(style="background-color:#FFEBF1")
          .row.justify-content-center.align-items-center.mb-2
            .col-auto.mb-4
              figure
                img(src='@/assets/curso/tema1/img-10.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              p.mb-0 #[b Análisis de texto]
              p.mb-0 Requiere el uso de procesamiento de lenguaje natural (NLP) para la extracción de significado. 
          .row.justify-content-center.align-items-center.mb-2
            .col-auto.mb-4
              figure
                img(src='@/assets/curso/tema1/img-11.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              p.mb-0 #[b Reconocimiento de patrones]
              p.mb-0 Las imágenes y videos requieren la aplicación de algoritmos de visión computacional. 
          .row.justify-content-center.align-items-center.mb-2
            .col-auto.mb-4
              figure
                img(src='@/assets/curso/tema1/img-12.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              p.mb-0 #[b Minería de datos]
              p.mb-0 Se emplean técnicas de aprendizaje automático para descubrir patrones ocultos. 
          .row.justify-content-center.align-items-center.mb-0
            .col-auto.mb-4
              figure
                img(src='@/assets/curso/tema1/img-13.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              p.mb-0 #[b Contextualización]
              p.mb-0 La interpretación está fuertemente influenciada por el contexto y el dominio.
      .col-lg-4.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img-09.png', alt='Imagen decorativa')

    Separador
    
    p.mb-5 El manejo de los datos no estructurados, aunque implica las complejidades señaladas previamente, tiene un valor empresarial:

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/icono-17.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#B9B1E5")
            h4.text-center.mt-5(style="color:#12263F") Perspectivas profundas
            p.text-center.mb-0(style="color:#12263F") Ofrecen información detallada sobre comportamientos, opiniones y tendencias. 
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/icono-18.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#B9B1E5")
            h4.text-center.mt-5(style="color:#12263F") Ventaja competitiva
            p.text-center.mb-0(style="color:#12263F") Las empresas que procesan estos datos de manera efectiva obtienen ventajas significativas.  
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/icono-19.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#B9B1E5")
            h4.text-center.mt-5(style="color:#12263F") Innovación
            p.text-center.mb-0(style="color:#12263F") Facilitan nuevos tipos de análisis y aplicaciones previamente imposibles.

    p.mb-5 Casos comunes de este tipo de datos se pueden encontrar en: documentos de texto, imágenes, videos, audio, redes sociales, presentaciones, PDF.

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .p-4.bg-c5
          .row.align-items-center
            .col-lg-auto.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/icono-12.svg', alt='', style='width: 60px').m-auto
            .col-lg
              p.mb-0 #[b Ejemplo aplicado:]
              p.mb-0 #[b Reseña de producto "Compré este producto la semana pasada y estoy muy satisfecho. La calidad es excelente y el envío fue rápido. Lo recomiendo totalmente. El precio es un poco alto, pero vale la pena por la durabilidad".] <i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>

    .tarjeta.tarjeta--BG02.p-md-5.p-4.mb-5(data-aos="fade-right")
      SlyderA.color-acento-botones(tipo="b")
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Archivos de texto
            p.mb-0 El cuerpo de correos electrónicos, documentos de Word, archivos PDF, publicaciones en redes sociales, comentarios en #[em blogs], respuestas de encuestas abiertas.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema1/img-14.png', alt='Imagen decorativa')
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Contenido multimedia
            p.mb-0 Imágenes (JPEG, PNG), archivos de audio (MP3, WAV) y archivos de video (MP4, AVI). Cada uno de estos archivos es un #[em blob] binario de datos desde la perspectiva de una base de datos tradicional.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema1/img-15.png', alt='Imagen decorativa')
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Datos de sensores y #[em logs]
            p.mb-0 Los registros #[em (logs)] generados por servidores, aplicaciones y redes, así como los datos crudos provenientes de sensores del Internet de las Cosas (IoT), a menudo se presentan como un flujo continuo de texto sin formato.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema1/img-16.png', alt='Imagen decorativa')
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Imágenes médicas
            p.mb-0 Radiografías, resonancias magnéticas y tomografías, son datos no estructurados de vital importancia en el sector de la salud.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema1/img-17.png', alt='Imagen decorativa')

    p.mb-5 En la siguiente tabla se presenta un comparativo de los datos tratado en esta sección:

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 1.
          i Comparativo tipos de datos
        .tabla-a.color-acento-contenido.mb-5
          table(data-aos="zoom-in"  alt="")
            thead
              tr(data-aos="fade-right")
                th Aspecto
                th Estructurados
                th Semiestructurados
                th No estructurados
            tbody
              tr(data-aos="fade-right")
                td #[b Organización]
                td Altamente organizado, formato rígido.
                td Parcialmente organizado, flexible.
                td Sin organización formal.
              tr(data-aos="fade-right")
                td #[b Almacenamiento]
                td Bases de datos relacionales.
                td NoSQL, almacenes de documentos.
                td #[em Data lakes,] sistemas de archivos.
              tr(data-aos="fade-right")
                td #[b Procesamiento]
                td SQL, herramientas tradicionales.
                td APIs, #[em parsers] especializados.
                td IA, ML, procesamiento de lenguaje natural.
              tr(data-aos="fade-right")
                td #[b Velocidad de análisis]
                td Rápido y eficiente.
                td Moderado.
                td Lento, requiere preprocesamiento.
              tr(data-aos="fade-right")
                td #[b Escalabilidad]
                td Limitada por esquema fijo.
                td Alta flexibilidad. 
                td Muy alta, pero compleja.
              tr(data-aos="fade-right")
                td #[b Casos de uso]
                td Transacciones, reportes financieros.
                td APIs web, configuraciones.
                td Análisis de sentimientos, reconocimiento.

    .row
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img-18.png')

      .col-lg-8(data-aos="fade-right")
        p Se puede concluir que, la gestión moderna de datos requiere un enfoque híbrido que combine los tres tipos de datos. Las arquitecturas de datos actuales, como los #[em data lakes], permiten almacenar y procesar todos estos tipos de datos de manera integrada.
        .p-3.mb-4(style="background-color:#DCD8F2;")
          .row
            .col-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src='@/assets/curso/tema1/icono-20.svg')
            .col(style="place-self:center;")
              p.mb-0 Las tecnologías de inteligencia artificial y el aprendizaje automático están revolucionando la capacidad de obtener valor de datos no estructurados, mientras que los sistemas NoSQL han mejorado considerablemente el manejo de datos semiestructurados.
        p.mb-0 La elección del tipo de dato y las tecnologías relacionadas, debe estar basada en los objetivos específicos del negocio, los recursos disponibles, así como en los requisitos de rendimiento y escalabilidad de cada organización.

</template>

<script>
export default {
  name: 'Tema1',
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
