import { async } from "regenerator-runtime";

export const state = {
  recipe: {},
};

export const loadRecipe = async (id) => {
  try {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const data = await response.json();
    if (!response.ok) throw new Error(`${data.message} (${response.status})`);

    let { recipe } = data.data;
    state.recipe = {
      cookingTime: recipe.cooking_time,
      id: recipe.id,
      imageUrl: recipe.image_url,
      ingredients: recipe.ingredients,
      publisher: recipe.publisher,
      servings: recipe.servings,
      sourceUrl: recipe.source_url,
      title: recipe.title,
    };
    console.log(state.recipe);
    console.log(state.recipe.imageUrl);
  } catch (err) {
    alert(err);
  }
};
