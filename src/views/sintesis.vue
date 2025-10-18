<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 Este componente analiza los principios universales que sustentan las aplicaciones encargadas de gestionar grandes volúmenes de datos o que poseen lógica compleja, enfocándose en tres objetivos fundamentales que todo sistema eficiente debe alcanzar: confiabilidad, escalabilidad y mantenibilidad. Para alcanzar estos objetivos, se examina el funcionamiento interno de las bases de datos y las diferentes arquitecturas para el procesamiento de datos.

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis del componente formativo Clasificación de datos en modelos de inteligencia artificial, se detalla todo el procedimiento que llevan a cabo los datos, los cuales poseen diferentes tipos, unas bases y un modelado que abarca diversas fases; finalizando con una arquitectura que se divide en tipos y modelos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
