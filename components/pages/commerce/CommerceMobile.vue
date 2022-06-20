<template>
  <div class="overflow-x-hidden">
    <Header order="default" />
    <ToolList order="default" />
    <ReviewsListXs class="hidden xs:block" />
    <ReviewsList order="default" class="xs:hidden" />
    <ContactWindow order="default" />
  </div>
</template>

<script>
import Header from '@/components/pages/commerce/Header.vue'
import ToolList from '@/components/pages/commerce/ToolList.vue'
import ReviewsList from '@/components/pages/index/ReviewsList.vue'
import ReviewsListXs from '@/components/pages/index/indexMobile/ReviewsListXs.vue'
import ContactWindow from '@/components/shared/ContactWindow.vue'
export default {
  name: 'CommerceMobile',
  components: { Header, ToolList, ContactWindow, ReviewsList, ReviewsListXs },
}
</script>