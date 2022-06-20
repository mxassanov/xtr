<template>
  <div class="overflow-x-hidden services-solutions servsol">
    <ServicesSolutions />
    <CasesSwiper order="default" :isLast="false" />
    <ContactWindow order="default" />
  </div>
</template>

<script>
import ServicesSolutions from '@/components/pages/services-solutions/ServicesSolutions.vue'
import ContactWindow from '@/components/shared/ContactWindow'
import CasesSwiper from '@/components/shared/CasesSwiper'

export default {
  name: 'ServicesSolutionsPage',
  layout: 'services',
  components: { ServicesSolutions, ContactWindow, CasesSwiper },
}
</script>