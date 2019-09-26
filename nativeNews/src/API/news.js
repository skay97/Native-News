import {
    articles_url,
    api_key,
    county_code,
  } from '../config/rest_config';
  
  export async function getArticles(category='general') {
    try {
      let newsArticles = await fetch(
        `${articles_url}?country=${county_code}&category=${category}&apiKey=${api_key}`,
      );
      let result = await newsArticles.json();
  
      return result.articles;
    } catch (error) {
      throw error;
    }
  }
  