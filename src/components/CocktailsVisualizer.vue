<template>
    <div class="center">
        <h1>Bonjour !</h1>
        <div v-if="cocktails">
            <p>Voici quelques cocktails que j'aimerais vous proposer.</p>
            <div class="flex-center">
                <CocktailCard v-for="cocktail in cocktails" :key="cocktail.idDrink" :cocktail="cocktail" />
            </div>
        </div>
        <div v-else>
            <p>Je n'ai pas de cocktails à vous proposer pour le moment. Repassez plus tard !</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import CocktailCard from './CocktailCard.vue';

export default {
    name: 'CocktailsVisualizer',
    components: {
        CocktailCard
    },
    mounted() {
        this.getCocktails();
    },
    data() {
        return {
            cocktails: []
        }
    },
    methods: {
        async getCocktails() {
            // AXIOS GET 3 random cocktails
            for (let i = 1; i <= 3; i++) {
                axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php').then(
                    response => {
                        const drink = response.data.drinks[0]
                        this.cocktails.push(drink)
                    }
                )
            }
        }
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

.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
