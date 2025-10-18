<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 4
      h1 Arquitectura de bases de datos
    
    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10
        .row.justify-content-center.align-items-center.tarjeta.tarjeta--BG08.p-lg-0.p-4(style="background-color:#DCD8F2")
          .col-lg-3.col-md-6.col-8.mb-lg-0.mb-4.px-0
            img(src='@/assets/curso/tema4/img-01.png', alt='Imagen decorativa')
          .col-lg-9.mb-md-0.px-4
            p.mb-0 La arquitectura de una base de datos se refiere al diseño integral del sistema que la sustenta. No se limita únicamente al Sistema de Gestión de Bases de Datos (SGBD), sino que abarca la integración del #[em hardware], el #[em software], las redes y las estrategias de distribución de datos para satisfacer los requisitos de rendimiento, disponibilidad, escalabilidad y seguridad de una aplicación.
           

    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Concepto

    .row.justify-content-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        .row.mb-4
          .col
            p.mb-0 La arquitectura de una base de datos constituye el esquema que detalla la organización, interconexión y gestión de los diversos componentes de un sistema de datos. Una arquitectura bien diseñada busca equilibrar objetivos que frecuentemente están en conflicto:
        .tarjeta.tarjeta--BGC01.p-3.mb-0(style="background-color:#FFEBF1")
          .row.justify-content-center.align-items-center.mb-2
            .col-auto.mb-4
              figure
                img(src='@/assets/curso/tema4/icono-01.svg', alt='Imagen decorativa')
            .col-10
              p.mb-0 #[b Rendimiento frente a costo]
              p.mb-0 Un sistema que ofrece un rendimiento extremadamente alto puede necesitar #[em hardware] de alto costo. 
          .row.justify-content-center.align-items-center.mb-2
            .col-auto.mb-4
              figure
                img(src='@/assets/curso/tema4/icono-02.svg', alt='Imagen decorativa')
            .col-10
              p.mb-0 #[b Consistencia frente a disponibilidad]
              p.mb-0 En los sistemas distribuidos, asegurar una consistencia rigurosa en todos los nodos puede comprometer la disponibilidad si la red presenta fallos (Teorema CAP). 
          .row.justify-content-center.align-items-center.mb-2
            .col-auto.mb-4
              figure
                img(src='@/assets/curso/tema4/icono-03.svg', alt='Imagen decorativa')
            .col-10
              p.mb-0 #[b Seguridad frente a usabilidad]
              p.mb-0 Controles de seguridad excesivamente estrictos pueden complicar el acceso legítimo a la información.
      .col-lg-4.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img-02.png', alt='Imagen decorativa')

    .row.mb-4
      .col-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/icono-01.svg', alt='Imagen decorativa')
      .col-10
        p.mb-0 La elección de una arquitectura depende críticamente de la naturaleza de la aplicación. Un #[em blog] personal con pocos visitantes, tiene requisitos arquitectónicos radicalmente diferentes a los de un sistema de comercio electrónico global o una plataforma de redes sociales.

    Separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Tipos

    p.mb-5 Las arquitecturas de bases de datos han evolucionado desde sistemas monolíticos y centralizados hasta ecosistemas distribuidos y elásticos en la nube. De acuerdo con Özsu & Valduriez (2011), se clasifican en:

    .row.justify-content-center.mb-4
      .col-lg-3.col-md-6.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema4/img-03.png', alt='Imagen decorativa')
      .col-lg-9.mb-md-0.order-lg-2.order-2(data-aos="fade-left")
        LineaTiempoD.color-acento-botones.especial
          p(numero="1" titulo="Arquitectura centralizada") Tanto los datos como el SGBD se encuentran en un solo servidor o clúster en una ubicación específica. Los usuarios y las aplicaciones acceden a este punto central. Es sencillo de administrar, ofrece alta seguridad (ya que solo hay un punto que proteger) y garantiza la consistencia de los datos. Sin embargo, presenta la desventaja de ser un único punto de fallo. La capacidad de escalar está limitada por el servidor (escalado vertical). La latencia puede ser elevada para usuarios que se encuentran a gran distancia geográfica. Se suele usar en pequeñas y medianas empresas, aplicaciones departamentales.
          p(numero="2" titulo="Arquitectura descentralizada") Se caracteriza por la presencia de múltiples bases de datos autónomas, cada una con su propio Sistema de Gestión de Bases de Datos (SGBD) y datos, que pueden estar ubicadas en diferentes localizaciones. No comparten un control centralizado y tienen la capacidad de operar de manera independiente. Un ejemplo de este tipo de sistemas es aquellos basados en la tecnología #[em blockchain.] Como desventaja se tiene que la consistencia global de los datos es muy difícil de lograr.
          p(numero="3" titulo="Arquitectura distribuida") Se refiere a un sistema de base de datos dividido físicamente en múltiples servidores (nodos), ubicados en diferentes localizaciones. Los nodos se comunican mediante una red y colaboran para ofrecer una vista unificada de los datos. Este paradigma predomina en aplicaciones a gran escala. Sus ventajas incluyen alta escalabilidad (permite añadir nodos para gestionar mayor carga), alta disponibilidad (si un nodo falla, otros asumen su función) y baja latencia (los datos pueden ubicarse cerca de usuarios). Como desventaja, presenta mayor complejidad de gestión, y garantizar la consistencia entre nodos es un desafío técnico (consistencia eventual vs. fuerte). Se suele aplicar en aplicaciones web globales, redes sociales, IoT, Big Data.
          p(numero="4" titulo="Arquitectura en la Nube (DBaaS - Database as a Service)") Es una forma de arquitectura distribuida donde un proveedor de la nube (como Amazon Web Services, Google Cloud o Microsoft Azure) gestiona la infraestructura de la base de datos. El cliente simplemente consume la base de datos como un servicio a través de una API o un panel de control. Permite una gran elasticidad (se puede escalar hacia arriba o hacia abajo bajo demanda), pago por uso, gestión simplificada (el proveedor se encarga de los parches, respaldos, etc.), alta disponibilidad y durabilidad incorporadas, sin embargo, dentro de sus desventajas se tiene la dependencia de un proveedor, preocupaciones sobre la seguridad y soberanía de los datos para ciertas industrias. Su aplicación se ve en #[em startups] hasta grandes empresas que buscan agilidad y reducir la carga operativa.
  
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 Métodos de funcionamiento

    p.mb-5 En las arquitecturas distribuidas, hay dos métodos esenciales para dividir y manejar los datos entre los nodos (Kleppmann, 2017):

    .row.mb-4.ms-0
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/ico.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 A. Replicación

    p.mb-5 Implica el mantenimiento de copias idénticas de los datos en múltiples nodos, principalmente para asegurar una alta disponibilidad y mejorar el rendimiento de lectura. En caso de que el nodo principal (maestro) falle, una de las réplicas (esclavo) puede ser promovida para asumir su función, minimizando así el tiempo de inactividad. Además, las solicitudes de lectura pueden distribuirse entre las réplicas para evitar la sobrecarga del maestro. Dentro de los modelos en esta arquitectura se tiene a los modelos:

    TabsC.color-acento-botones.mb-5(data-aos="fade-right")
      .py-3.py-md-4(titulo="Maestro-Esclavo")
        .row.justify-content-center.p-4
          .col-lg-6.col-8.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema4/img-04.png', alt='Imagen decorativa')
          .col-lg-6
            p.mb-0 Todas las operaciones de escritura se realizan en el nodo maestro, el cual posteriormente propaga los cambios a los nodos esclavos. Las operaciones de lectura pueden llevarse a cabo desde cualquier nodo. Este modelo es el más comúnmente utilizado. 
      .py-3.py-md-4(titulo="Multi-Maestro")
        .row.justify-content-center.p-4
          .col-lg-6.col-8.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema4/img-05.png', alt='Imagen decorativa')
          .col-lg-6
            p.mb-0 Varios nodos tienen la capacidad de aceptar escrituras. Este enfoque es beneficioso para aplicaciones distribuidas geográficamente, ya que reduce la latencia de escritura; sin embargo, introduce una considerable complejidad en la resolución de conflictos de escritura, especialmente cuando dos usuarios modifican simultáneamente el mismo dato en diferentes nodos maestros.

    p.mb-5 Es importante tener presente que en este tipo de método de funcionamiento puede haber un pequeño retraso entre el momento en que se escribe en el maestro y el momento en que la escritura se refleja en los esclavos. Leer desde un esclavo podría devolver datos obsoletos, un concepto conocido como consistencia eventual.

    .row.mb-4.ms-0
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/ico.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 B. Particionamiento o fragmentación

    .row.mb-5
      .col-lg-8(data-aos="fade-right")
        p La base de datos se divide en particiones más pequeñas, llamadas #[em shards,] y cada #[em shard] es almacena en un nodo diferente. Cada nodo es responsable de un subconjunto de los datos. Cuando una base de datos se vuelve demasiado grande para un solo servidor o el volumen de escrituras es demasiado alto, el particionamiento permite distribuir la carga entre muchos servidores. Para crear las particiones se suelen utilizar estrategias como:
        .row
          .col-lg-6.px-4.mb-lg-0.mb-4
            .row.justify-content-center.bg-11.p-3.h-100(style="background-color:#DCD8F2; border-radius:20px")
              figure
                img.mb-2(src="@/assets/curso/tema4/icono-04.svg", alt="", style="width: 60px")
              p.mb-0 #[b Basado en rango]
              p.mb-0 Se asignan rangos de la clave de particionamiento a diferentes #[em shards] (p.ej., usuarios con ID de 1 a 1,000,000 en el shard 1; 1,000,001 a 2,000,000 en el shard 2).
          .col-lg-6.px-4.mb-lg-0.mb-4
            .row.justify-content-center.bg-11.p-3.h-100(style="background-color:#DCD8F2; border-radius:20px")
              figure
                img.mb-2(src="@/assets/curso/tema4/icono-05.svg", alt="", style="width: 50px")
              p.mb-0 #[b Basado en #[em hash]]
              p.mb-0 Se aplica una función #[em hash] a la clave de particionamiento y el resultado determina en qué #[em shard] se almacenan los datos. Esto distribuye los datos de manera más uniforme, pero dificulta las consultas por rango.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img-06.png', alt='', style="width: 400px").m-auto
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(style="background-color:#DCD8F2")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img-07.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 La complejidad de las consultas abarca múltiples #[em shards.] El enrutamiento de consultas se vuelve más complicado y las operaciones de #[em JOIN] entre #[em shards] pueden ser muy ineficientes. El re-particionamiento #[em (re-sharding)] cuando se agregan nuevos nodos, también es una operación delicada.

    .row.mb-4
      .col-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/icono-01.svg', alt='Imagen decorativa')
      .col-10
        p.mb-0 En la práctica, las arquitecturas a gran escala, suelen integrar tanto la replicación como el particionamiento. Cada #[em shard] o partición de datos, se replica en múltiples nodos para asegurar tanto la escalabilidad como la alta disponibilidad. Este enfoque es comúnmente adoptado por la mayoría de las grandes bases de datos NoSQL y los servicios de bases de datos en la nube.


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
