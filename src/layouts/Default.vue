<template>
  <div>
    <Header/>

    <slot/>
    <Footer/>
  </div>
</template>
<script>
import Header from '@/components/Layout/Header.vue'
import Footer from '@/components/Layout/Footer.vue'
export default {
    components: {
        Header,
        Footer
    }
}
</script>