<template>
    <div class="div">
        <button class="ripple" @click="toggleRipple()">Click me to Toggle</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "AnimationButton",
    mounted(){
        // Do something
    },
    methods: {
        crossActivate(id){
            const a = id;
            return a;
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
    &:active {
        background-color: #7f15a8;
        background-size: 100%;
        transition: background 0s;
    }
}

button {
    border: none;
    border-radius: 2px;
    padding: 12px 18px;
    font-size: 16px;
    text-transform: uppercase;
    cursor: pointer;
    color: white;
    background-color: #21976f;
    box-shadow: 0 0 4px #999;
    outline: none;
}


</style>