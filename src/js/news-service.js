const API_KEY = '57cac8b7974a445687521e4c2c792a41';
const BASE_URL = 'https://newsapi.org/v2';
const options = {
  headers: {
    Authorization: API_KEY,
  },
};
export default class NewsAPIService {
  constructor() {
    this.query = '';
    this.page = 1;
  }
  fetchArticles() {
    const URL = `${BASE_URL}/everything?q=${this.query}&language=en&pageSize=4&page=${this.page}`;

    return fetch(URL, options)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(({ articles }) => {
        this.page += 1;
        return articles;
      });
  }

  resetPages() {
    this.page = 1;
  }

  get q() {
    return this.query;
  }

  set q(newQuery) {
    this.query = newQuery;
  }
}

// const API_KEY = '4330ebfabc654a6992c2aa792f3173a3';
// const BASE_URL = 'https://newsapi.org/v2';
// const options = {
//   headers: {
//     Authorization: API_KEY,
//   },
// };

// export default class NewsApiService {
//   constructor() {
//     this.searchQuery = '';
//     this.page = 1;
//   }

//   fetchArticles() {
//     const url = `${BASE_URL}/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;

//     return fetch(url, options)
//       .then(response => response.json())
//       .then(({ articles }) => {
//         this.incrementPage();
//         return articles;
//       });
//   }

//   incrementPage() {
//     this.page += 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }

//   get query() {
//     return this.searchQuery;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
// }
