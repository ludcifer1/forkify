import Search from './models/Search'
import * as searchView from './views/searchView'
import {
   elements,
   renderLoader,
   clearLoader
} from './views/base'


/** GLOBAL STATE
 * - Search Object
 * - Current recipe object
 * - Shopping list object
 * - Linked recipes
 */

const state = {};

const controlSearch = async () => {
   const query = searchView.getInput();
   console.log('index' , query);
   if (query) {
      // NEW SEARCH MODEL TO STATE
      state.search = new Search(query);

      // UI PREPARE
      searchView.clearInput();
      renderLoader(elements.searchRes);
      searchView.clearSearchRes();
      // SEARCH
      await state.search.getResults();
      // RENDER
      clearLoader();
      console.log(state.search.result);
      searchView.renderResults(state.search.result);
   }
}


elements.search.addEventListener('submit', e => {
   e.preventDefault();
   controlSearch();
});