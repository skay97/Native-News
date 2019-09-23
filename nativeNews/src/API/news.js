// import axios from 'axios';
import {
    articles_url,
    api_key,
    category,
    county_code,
  } from '../config/rest_config';
  
  export async function getArticles() {
    try {
      let newsArticles = await fetch(
        `${articles_url}?country=${county_code}&category=${category}&apiKey=${api_key}`,
      );
      let result = await newsArticles.json();
    //   articles = null;
  
      return result.articles;
    // return await newsArticles.articles
    } catch (error) {
      throw error;
    }
  }
  