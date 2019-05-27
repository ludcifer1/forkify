import axios from 'axios';


export default class Search {
   constructor(query) {
      this.query = query;
   }

   async getResults(query) {
      const baseURL = 'https://api.edamam.com'
      const apiAppID = '0d1104b9';
      const apiKey = 'c2ebb1164714b5740ab9cc4a5122f0cb';
      try {
         const res = await axios(`${baseURL}/search?q=${this.query}&app_id=${apiAppID}&app_key=${apiKey}`);
         this.result = res.data.hits;
      } catch (err) {
         alert(err);
      }
   }

}