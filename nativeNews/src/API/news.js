import {
    articles_url,
    api_key,
    category,
    county_code,
  } from '../config/rest_config';
  
  export async function getArticles() {
    try {
      let articles = await fetch(
        `${articles_url}?country=${county_code}&category=${category}&apiKey=${api_key}`,
      );
      console.log('articles1:' + JSON.stringify(articles));
      let result = await articles.json();
      articles = null;
  
      return result.articles;
    } catch (error) {
      throw error;
    }
  }
  