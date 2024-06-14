document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '1d44e59496a54647b349af0fdd7a271b';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    async function fetchNews() {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            displayNews(data.articles);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    }

    function displayNews(articles) {
        const newsContainer = document.getElementById('news-container');
        newsContainer.innerHTML = '';

        articles.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.classList.add('news-article');

            const articleTitle = document.createElement('h2');
            articleTitle.classList.add('news-title');

            // Create a link element for the article title
            const articleLink = document.createElement('a');
            articleLink.href = article.url; // Use the URL from the API data
            articleLink.textContent = article.title;
            articleLink.classList.add('news-link'); // Add class for styling

            articleTitle.appendChild(articleLink);

            const articleDescription = document.createElement('p');
            articleDescription.classList.add('news-description');
            articleDescription.textContent = article.description;

            articleElement.appendChild(articleTitle);
            articleElement.appendChild(articleDescription);
            newsContainer.appendChild(articleElement);
        });
    }

    fetchNews();
});
