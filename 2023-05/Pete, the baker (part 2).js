//https://www.codewars.com/kata/5267e5827526ea15d8000708/train/javascript

//Vlad_Georgiev
function getMissingIngredients(recipe, added) {
  let maxPossible = 0;
  const result = {};

  for (const product in recipe) {
    if (added[product]) {
      maxPossible = Math.max(
        Math.ceil(added[product] / recipe[product]),
        maxPossible
      );
    }
  }

  if (maxPossible === 0) {
    return recipe;
  }

  for (const item in recipe) {
    if (!added[item]) {
      result[item] = maxPossible * recipe[item];
    } else if (added[item] < maxPossible * recipe[item]) {
      result[item] = maxPossible * recipe[item] - added[item];
    }
  }

  return result;
}
