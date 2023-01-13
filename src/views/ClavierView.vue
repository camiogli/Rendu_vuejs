<template>

    <input type="text" v-model="number">
    <div>
        <!--  -->
        <div>
            <button @click="enterNum ('1')">1</button> <button @click="enterNum ('2')">2</button> <button @click="enterNum ('3')">3</button>
        </div>
        <div>
            <button @click="enterNum ('4')">4</button> <button @click="enterNum ('5')">5</button> <button @click="enterNum ('6')">6</button>
        </div>
        <div>
            <button @click="enterNum ('7')">7</button> <button @click="enterNum ('8')">8</button> <button @click="enterNum ('9')">9</button>
        </div>
         <div>
            <button @click="enterNum ('*')">*</button> <button @click="enterNum ('0')">0</button> <button @click="enterNum ('#')">#</button>
        </div>
    </div>
    <button type="submit">Appeler</button>
    <!--<button type="reset">Effacer</button>-->
        
</template>

<script>
export default {
    name: 'ClavierView',
    data () {
        return{
            number: ''
        }
    },
    methods: {
        enterNum (num) {
            this.number+=num
        }
    }
}
</script>

<style>
    
</style>