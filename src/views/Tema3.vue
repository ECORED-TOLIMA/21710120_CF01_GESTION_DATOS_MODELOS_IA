<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 3
      h1 Modelado de datos
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(style="background-color:#DCD8F2")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img-01.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 El proceso de crear una representación visual o un esquema que define las estructuras de datos, sus interrelaciones, sus atributos y las normas que los rigen constituyen una de las fases más críticas en el diseño de un sistema de información. Un modelo de datos bien elaborado asegura la consistencia, la calidad y la usabilidad de la información a largo plazo. Este proceso actúa como un puente entre los requisitos del negocio y la implementación técnica en una base de datos.

    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Concepto

    .row.justify-content-center.mb-5
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        p El modelado de datos constituye un proceso de abstracción que se inicia con la recopilación de los requisitos de información del mundo real, los cuales se traducen progresivamente en una estructura formal comprensible para una base de datos. Un modelo de datos bien diseñado debe garantizar la integridad de la información. 
        .tarjeta.tarjeta--BGC02.p-4.mb-4(style="background-color:#DCD8F2")
          p.mb-0 Asimismo, establece las normas y limitaciones para asegurar que solo se guarden datos correctos. Al minimizar la redundancia se evita la repetición innecesaria de datos, lo que ahorra espacio y previene discrepancias. También, optimiza el rendimiento si se cuenta con una estructura lógica bien diseñada para realizar consultas de manera más rápida y eficiente. Por último, facilita la comunicación ofreciendo un lenguaje común para que los analistas de negocio, desarrolladores y administradores de bases de datos puedan discutir y comprender los requisitos de información. (Simsion & Witt, 2004)
        p.mb-0 El proceso de modelado generalmente se divide en tres fases:
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img-02.svg', alt='Imagen decorativa')

    .row.justify-content-center.mb-4
      .col-lg-4.col-sm-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/icono-01.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#B9B1E5")
            h4.text-center.mt-5(style="color:#12263F") 1. Modelo conceptual
            p.text-center.mb-0(style="color:#12263F") Es el nivel más alto de abstracción. Describe las entidades principales, las relaciones y los atributos de interés para el negocio, sin entrar en detalles técnicos. Se centra en el "qué". Un diagrama Entidad-Relación (ERD) es el artefacto típico de esta fase.
      .col-lg-4.col-sm-8.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/icono-02.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#B9B1E5")
            h4.text-center.mt-5(style="color:#12263F") 2. Modelo lógico
            p.text-center.mb-0(style="color:#12263F") Traduce el modelo conceptual a una estructura más detallada, pero todavía independiente del SGBD específico que se utilizará. Define los tipos de datos, las claves primarias y externas, y las relaciones con mayor precisión. Aquí es donde se aplican las técnicas de normalización.
      .col-lg-4.col-sm-8.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/icono-03.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#B9B1E5")
            h4.text-center.mt-5(style="color:#12263F") 3. Modelo físico
            p.text-center.mb-0(style="color:#12263F") Es la implementación real del modelo lógico en un SGBD concreto. Describe cómo se construirán los datos en la base de datos, incluyendo la definición exacta de las tablas, los nombres de las columnas, los tipos de datos específicos del SGBD, los índices, las particiones y otras características de almacenamiento.

    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Principios 

    p.mb-5 Un modelado de datos eficaz se basa en varios principios fundamentales: 

    .row.justify-content-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        LineaTiempoD.color-acento-botones.especial
          p.mb-0(numero="1" titulo="Claridad y simplicidad") El modelo debe ser comprensible para todas las partes interesadas. Es esencial evitar nombres de tablas y columnas que resulten crípticos. La simplicidad no implica una falta de detalle, sino la eliminación de complejidades innecesarias.
          p.mb-0(numero="2" titulo="Completitud") El modelo debe capturar todos los requisitos de datos pertinentes al problema que se está abordando, sin omitir entidades o atributos significativos.
          p.mb-0(numero="3" titulo="No redundancia (normalización)") La información no debe almacenarse repetidamente sin necesidad. En ocasiones, se introduce deliberadamente redundancia controlada por razones de rendimiento (desnormalización), pero esta debe ser una decisión consciente y justificada. 
          p.mb-0(numero="4" titulo="Flexibilidad y extensibilidad") El modelo debe poseer la capacidad de evolucionar. Dado que los requisitos empresariales están sujetos a cambios, el modelo de datos debe ser capaz de adaptarse a nuevos tipos de información o a nuevas relaciones sin necesidad de una reestructuración masiva.
          p.mb-0(numero="5" titulo="Integridad") El modelo debe establecer las reglas que aseguren la corrección y consistencia de los datos. Esto incluye la definición de claves primarias, claves externas, restricciones de unicidad y reglas de validación.
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img-03.png' alt="Imagen decorativa")

    p.mb-5 Los bloques de construcción básicos de un modelo de datos (especialmente en el modelado relacional) son:

    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/icono-04.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#B9B1E5")
            h4.text-center.mt-5(style="color:#12263F") Entidad
            p.text-center.mb-0(style="color:#12263F") Se refiere a un objeto o concepto del mundo real del cual deseamos guardar información, como #[b Cliente, Producto o Pedido.] En el modelo físico, se transforma en una tabla. 
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/icono-05.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#B9B1E5")
            h4.text-center.mt-5(style="color:#12263F") Atributo
            p.text-center.mb-0(style="color:#12263F") Es una propiedad o característica de una entidad, por ejemplo, en la entidad #[b Cliente,] los atributos pueden incluir Nombre, Email y FechaDeNacimiento. Estos se convierten en columnas dentro de una tabla. 
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/icono-06.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#B9B1E5")
            h4.text-center.mt-5(style="color:#12263F") Relación
            p.text-center.mb-0(style="color:#12263F") Explica cómo se vinculan dos o más entidades entre sí, como cuando un #[b Cliente] realiza un #[b Pedido.] Las relaciones poseen cardinalidad, que puede ser uno a uno, uno a muchos, o muchos a muchos.

    Separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Tipos y técnicas de normalización

    .row.justify-content-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img-04.png', alt='Imagen decorativa')
      .col-lg-9(data-aos="fade-left")
        p La normalización constituye un proceso sistemático destinado a organizar las columnas y tablas en una base de datos relacional, con el fin de minimizar la redundancia de datos. Su objetivo es descomponer tablas grandes y complejas en tablas más pequeñas y bien estructuradas, además de definir las relaciones entre ellas. Este proceso contribuye a eliminar las anomalías de datos que pueden surgir durante las operaciones de inserción, actualización o eliminación.
        p Hay diversas "formas normales" (FN o NF), cada una con un conjunto de reglas más riguroso que la anterior. En la práctica, la mayoría de las bases de datos OLTP bien estructuradas logran alcanzar la Tercera Forma Normal (3FN). (Codd, 1970).
        p.mb-0 En la siguiente figura se presenta la relación de crear formales:

    .titulo-sexto.color-acento-contenido.offset-1(data-aos="zoom-in")
      h5 Figura 2.
      span  #[i Relación de formales ]
    
    .row.justify-content-center.mb-4
      .col-lg-10.desktop(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema3/fig-01.svg', alt='Figura 2 que contiene la asociación de los diferentes niveles de formales y su respectiva ubicación.')
          figcaption Fuente: Kroenke (2003, p.128)
      .col-lg-6.movil(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema3/fig-02.svg', alt='Figura 2 que contiene la asociación de los diferentes niveles de formales y su respectiva ubicación.')

    p.mb-5 De acuerdo a lo anterior, a continuación, se detallan las formas más frecuentes: 

    .row.justify-content-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        AcordionA.color-acento-botones(tipo="b" clase-tarjeta="tarjeta tarjeta--C02")
          .row(titulo="Primera Forma Normal (1FN)")
            .col-12.mb-0.mb-md-0
              p.mb-0 Una tabla está en 1FN si todos sus atributos contienen valores atómicos (indivisibles) y cada fila es única. Esto significa que no puede haber grupos de repetición o arreglos en una columna. Por ejemplo, una columna teléfonos que contenga "555-1234, 555-5678" viola la 1FN. Para solucionar esto se crea una tabla separada para la información repetida. En el ejemplo de los teléfonos, se crearía una tabla #[b TelefonosCliente] con las columnas #[b IDCliente] y #[b Teléfono,] donde cada número de teléfono ocupa una fila separada.
          .row(titulo="Segunda Forma Normal (2FN)")
            .col-12.mb-0.mb-md-0
              p.mb-0 La tabla debe estar en 1FN. Todos los atributos que no forman parte de la clave primaria deben depender funcionalmente de la clave primaria completa. Esta regla solo es relevante para tablas con claves primarias compuestas (formadas por más de una columna). Si un atributo depende solo de una parte de la clave compuesta, debe moverse a una tabla separada. Considere una tabla #[b DetallesPedido] con la clave primaria #[b (IDPedido, IDProducto).] Si la tabla contiene la columna #[b DescripcionProducto,] este atributo viola la 2FN porque #[b DescripcionProducto] depende solo de IDProducto, no de la clave completa. Para solucionar esto se mueve #[b DescripcionProducto] a la tabla #[b Productos,] donde #[b IDProducto] es la clave primaria.
          .row(titulo="Tercera Forma Normal (3FN)")
            .col-12.mb-0.mb-md-0
              p.mb-0 La tabla debe estar en 2FN. Ningún atributo no clave debe tener una dependencia transitiva de la clave primaria. Una dependencia transitiva ocurre cuando un atributo no clave depende de otro atributo no clave, que a su vez depende de la clave primaria. Por ejemplo, considere una tabla Empleados con las columnas #[b IDEmpleado] (clave), #[b NombreEmpleado, IDDepartamento] y #[b NombreDepartamento.] Aquí, NombreDepartamento depende de #[b IDDepartamento,] y #[b IDDepartamento] depende de #[b IDEmpleado.] Esto es una dependencia transitiva. Si el nombre de un departamento cambia, habría que actualizarlo en cada registro de empleado de ese departamento, lo que puede causar inconsistencias. Para solucionar esto se crea una tabla separada #[b Departamentos] con #[b IDDepartamento] y #[b NombreDepartamento.] La tabla #[b Empleados] solo contendrá la clave externa #[b IDDepartamento.]
      .col-lg-4.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img-05.png', alt='Imagen decorativa')

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .p-4.bg-c5
          .row.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema1/icono-12.svg', alt='', style='width: 60px').m-auto
            .col-9
              p.mb-0 #[b Alcanzar la 3FN, suele ofrecer un buen equilibrio entre la disminución de la redundancia y la complejidad del modelo. Existen formas normales más avanzadas (como BCNF, 4FN, 5FN) para abordar anomalías más sutiles, pero son menos frecuentes en la práctica. Por otro lado, la desnormalización es el proceso opuesto, donde se introduce intencionalmente redundancia para mejorar el rendimiento de lectura al evitar JOINs costosos. Es una técnica común en sistemas OLAP y almacenes de datos.]

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
