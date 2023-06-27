<template>
    <div class="center">
        <h1>Bonjour !</h1>
        <div v-if="cocktails">
            <p>Voici quelques cocktails que j'aimerais vous proposer.</p>
            <div v-for="cocktail in cocktails" :key="cocktail">
                <CocktailCard props=cocktail />
            </div>
        </div>
        <div v-else>
            <p>Je n'ai pas de cocktails à vous proposer pour le moment. Repassez plus tard !</p>
        </div>
    </div>
</template>

<script>
import CocktailCard from './CocktailCard.vue';

export default {
    name: 'CocktailsVisualizer',
    components: {
        CocktailCard
    },
    props: {
        cocktails: Array
    }
}
</script>

<style scoped>
h1 {
    color: #42b983;
}

.center {
    text-align: center;
}

p {
    font-size: 1.5em;
}
</style>
