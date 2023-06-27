<template>
    <Transition name="bounce">
        <div class="card">
            <p class="alcohol-title">{{ cocktail.strDrink }}</p>
            <p class="alcohol-subtitle">{{ cocktail.strCategory }}</p>
            <img :src="cocktail.strDrinkThumb" alt="Image de présentation de l'alcool">
            <div class="desc-container">
                <div v-if="measures">
                    <b>Formats </b>
                    <div class="badge-container">
                        <span class="badge" v-for="measure in measures" :key="measure">{{ measure }}</span>
                    </div>
                </div>
                <div v-if="strIngredients">
                    <b>Ingrédients</b>
                    <p>{{ strIngredients }}</p>
                </div>
                <div>
                    <b>Préparation</b>
                    <p>{{ cocktail.strInstructionsFR ? cocktail.strInstructionsFR : cocktail.strInstructions }}</p>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script>
export default {
    name: 'CocktailCard',
    props: {
        cocktail: {
            type: Object,
            required: true
        },
    },
    data() {
        return {
            strIngredients: '',
            measures: []
        }
    },
    mounted() {
        this.getIngredients();
        this.getMeasures();
    },
    methods: {
        // Get ingredients from each key 'strIngredientX' in object
        getIngredients() {
            for (let i = 1; i <= 15; i++) {
                const ingredientKey = `strIngredient${i}`;
                if (this.cocktail[ingredientKey]) {
                    this.strIngredients += this.cocktail[ingredientKey] + ', ';
                }
            }
            this.strIngredients = this.strIngredients.slice(0, -2);
        },
        getMeasures() {
            for (let i = 1; i <= 15; i++) {
                const measureKey = `strMeasure${i}`;
                if (this.cocktail[measureKey]) {
                    this.measures.push(this.cocktail[measureKey]);
                }
            }
        }
    }
}
</script>

<style scoped>
.card {
    background-color: white;
    border-radius: 25px;
    margin-inline: 1rem;
    padding: 0 2rem 2rem 2rem;
    min-height: 600px;
    width: 300px;
    color: rgb(10, 61, 61);
}

.card .alcohol-title {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 0;
}

.card .alcohol-subtitle {
    font-size: 1.2em;
    font-weight: semi-bold;
    margin-top: 0.2rem;
}

.desc-container {
    text-align: left;
    margin-top: 1rem;
}

.desc-container div b {
    color: rgb(69, 69, 203);
}

.desc-container div p {
    margin-top: 0.2rem;
}

.card img {
    width: 100%;
    height: auto;
    max-height: 300px;
    border-radius: 25px;
}


.badge-container {
    position: relative;
}
.badge {
    display: inline-block;
    background-color: cadetblue;
    padding-inline: .6em;
    padding: .25em .4em;
    margin: .2em;
    white-space: nowrap;
    border-radius: .25rem;
}

.bounce-enter-active {
    animation: bounce-in 0.5s;
}

.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.25);
    }

    100% {
        transform: scale(1);
    }
}
</style>