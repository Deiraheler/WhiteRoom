<template>
    <HeaderComponent />
    <router-view></router-view>
    <FooterComponent />
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
import FooterComponent from './FooterComponent.vue';

export default {
    name: "MainComponent",
    components: {
        HeaderComponent,
        FooterComponent
    }
};
</script>

<style scoped>

</style>
