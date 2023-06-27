<template>
    <div class="card">
        {{ index }} - {{ cocktail.name }}
    </div>
</template>

<script>
export default {
    name: 'CocktailCard',
    props: {
        cocktail: Object
    }
}
</script>

<style scoped></style>