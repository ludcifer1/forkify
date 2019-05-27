import {
   elements
} from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
   elements.searchInput.value = '';
}

export const clearSearchRes = () => {
   elements.searchResList.innerHTML = '';
}

const _limitRecipeTitle = (title, limit = 17) => {
   const newTitle = [];

   const reducer = (acc, cur) => {
      if (acc + cur.length <= limit) {
         newTitle.push(cur);
      }
      return acc + cur.length;
   }


   if (title.length > limit) {
      title.split(' ').reduce(reducer, 0);
      return `${newTitle.join(' ')} ...`;
   }
   return title;
}
const _getEdumamId = (uri) => {
   console.log('recipe ID: ', uri.split('#')[1]);
   return uri.split('#')[1];
};

const _renderRecipe = res => {
   const markup = `
   <li>
      <a class="results__link results__link--active" href="#${_getEdumamId(res.recipe.uri)}">
         <figure class="results__fig">
             <img src="${res.recipe.image}" alt="${res.recipe.label}">
         </figure>
         <div class="results__data">
            <h4 class="results__name"> ${_limitRecipeTitle(res.recipe.label)} </h4>
            <p class="results__author">${res.recipe.source}</p>
         </div>
      </a>
   </li>
   `;
   elements.searchResList.insertAdjacentHTML('beforeend', markup);
}

export const renderResults = recipes => {
   recipes.forEach(_renderRecipe);
}