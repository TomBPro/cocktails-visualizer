import CocktailCard from '@/components/CocktailCard.vue';
import { shallowMount } from '@vue/test-utils';

describe('CocktailCard', () => {
  const cocktail = {
    strDrink: 'Mojito',
    strCategory: 'Cocktail',
    strDrinkThumb: 'mojito.jpg',
    strIngredient1: 'Rum',
    strIngredient2: 'Mint',
    strMeasure1: '2 oz',
    strMeasure2: '6 leaves',
    strInstructions: 'Instructions',
  };

  it('renders cocktail information correctly', () => {
    const wrapper = shallowMount(CocktailCard, {
      propsData: {
        cocktail: cocktail,
      },
    });
    expect(wrapper.find('.alcohol-title').text()).toBe('Mojito');
    expect(wrapper.find('.alcohol-subtitle').text()).toBe('Cocktail');
    expect(wrapper.find('img').attributes('src')).toBe('mojito.jpg');
  });

  it('formats Ingredients correctly', () => {
    const wrapper = shallowMount(CocktailCard, {
      propsData: {
        cocktail: cocktail,
      },
    });

    expect(wrapper.vm.strIngredients).toBe('Rum, Mint');
  });

  it('formats Measures correctly', () => {
    const wrapper = shallowMount(CocktailCard, {
      propsData: {
        cocktail: cocktail,
      },
    });

    expect(wrapper.vm.measures).toEqual(['2 oz', '6 leaves']);
  });
});