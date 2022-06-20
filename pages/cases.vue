<template>
  <div class="overflow-x-hidden case-page">
    <Header />
    <CaseList />
    <ReviewsList order="default" class="xs:hidden" />
    <ReviewsListXs order="default" class="hidden xs:block" />
    <ContactWindow order="default" />
  </div>
</template>

<script>
import Header from '@/components/pages/cases/Header'
import CaseList from '@/components/pages/cases/CaseList'
import ReviewsList from '@/components/pages/index/ReviewsList'
import ReviewsListXs from '@/components/pages/index/indexMobile/ReviewsListXs'
import ContactWindow from '@/components/shared/ContactWindow'

export default {
  name: 'Cases',
  layout: 'notMain',
  components: { Header, CaseList, ReviewsList, ReviewsListXs, ContactWindow },
}
</script>