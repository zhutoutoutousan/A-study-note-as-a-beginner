<template>
    <div class="ripple">
        <button @click="toggleRipple()">Click me to Toggle</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    mounted(){
        // Do something
    },
    methods: {
        toggleRipple(){
            // Do something
        }
    }
})
</script>

<style lang="scss" scoped>
.ripple {
    background-position: center;
    &:hover {
        background: #3086cc radial-gradient(circle, transparent 2%, #47a7f3 3%) center/15000%;
    }
}
</style>