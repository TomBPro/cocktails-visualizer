<template>
    <Transition name="bounce">
        <div class="card">
            {{ cocktail.strDrink }}
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
        }
    }
}
</script>

<style scoped>
.card {
    background-color: white;
    color: blue;
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
}</style>