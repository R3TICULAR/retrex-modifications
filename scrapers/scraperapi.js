// For this example you need the node-fetch npm packages: `npm i node-fetch`
import fetch from 'node-fetch';
import { JSDOM } from 'jsdom'; // You need to install jsdom: `npm i jsdom`

const API_KEY = 'aa1aa98c153ebaf1b04a89015e61731a';
const BASE_URL = 'https://api.scraperapi.com/?api_key=' + API_KEY + '&render=true&url=';

async function fetchAndParse(url) {
  try {
    const response = await fetch(BASE_URL + encodeURIComponent(url));
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const text = await response.text();
    const dom = new JSDOM(text);
    const document = dom.window.document;

    // Extract the required information from the document
    // For example, extracting the title of the page
    const title = document.querySelector('title').textContent;
    console.log(`Title of ${url}:`, title);

    // Add more extraction logic here as needed

  } catch (error) {
    console.error(`There has been a problem with fetching ${url}:`, error);
  }
}

fetch('https://api.scraperapi.com/?api_key=aa1aa98c153ebaf1b04a89015e61731a&url=https%3A%2F%2Fra.co%2Fevents%2Fus%2Fbaltimore&render=true')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.text(); // Get the raw response text
  })
  .then(text => {
    try {
      const data = JSON.parse(text); // Attempt to parse the text as JSON
      console.log(data);
    } catch (error) {

      // Parse the HTML text using DOMParser
      const dom = new JSDOM(text);
      const document = dom.window.document;
      
      // Extract all href attribute values from anchor elements
      const hrefs = Array.from(document.querySelectorAll('a, span a')).map(a => a.href);

      const filteredHrefs = hrefs.filter(href => href.includes('ra.co/events'));

      // Remove duplicates by converting to a Set and back to an array
      const uniqueFilteredHrefs = Array.from(new Set(filteredHrefs));
      console.log('Unique filtered hrefs:', uniqueFilteredHrefs);

      // Fetch and parse each URL
      //uniqueFilteredHrefs.forEach(url => fetchAndParse(url));

    }
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });