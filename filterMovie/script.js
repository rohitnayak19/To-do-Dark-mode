// Sample movie data
const movies = [
    {
        title: "The Shawshank Redemption",
        year: 1994,
        genre: ["Drama"],
        rating: 9.3,
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        poster: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    },
    {
        title: "The Godfather",
        year: 1972,
        genre: ["Crime", "Drama"],
        rating: 9.2,
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    },
    {
        title: "The Dark Knight",
        year: 2008,
        genre: ["Action", "Crime", "Drama"],
        rating: 9.0,
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
    },
    {
        title: "Pulp Fiction",
        year: 1994,
        genre: ["Crime", "Drama"],
        rating: 8.9,
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    },
    {
        title: "Inception",
        year: 2010,
        genre: ["Action", "Adventure", "Sci-Fi"],
        rating: 8.8,
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
    },
    {
        title: "The Matrix",
        year: 1999,
        genre: ["Action", "Sci-Fi"],
        rating: 8.7,
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
    },
    {
        title: "Parasite",
        year: 2019,
        genre: ["Comedy", "Drama", "Thriller"],
        rating: 8.6,
        description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        poster: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg"
    }
];

// DOM elements
const movieList = document.getElementById('movie-list');
const searchInput = document.getElementById('search');
const genreFilter = document.getElementById('genre-filter');
const sortSelect = document.getElementById('sort-by');

// Display movies
function displayMovies(moviesToDisplay) {
    movieList.innerHTML = '';
    
    moviesToDisplay.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        
        movieCard.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <div class="movie-details">
                    <span>${movie.year}</span>
                    <span>⭐ ${movie.rating}</span>
                </div>
                <div class="movie-genres">
                    ${movie.genre.map(g => `<span class="movie-genre">${g}</span>`).join('')}
                </div>
                <p class="movie-description">${movie.description}</p>
            </div>
        `;
        
        movieList.appendChild(movieCard);
    });
}

// Filter and sort movies
function filterAndSortMovies() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedGenre = genreFilter.value;
    const sortValue = sortSelect.value;
    
    let filteredMovies = movies.filter(movie => {
        const matchesSearch = movie.title.toLowerCase().includes(searchTerm) || 
                            movie.description.toLowerCase().includes(searchTerm);
        const matchesGenre = selectedGenre === 'all' || movie.genre.includes(selectedGenre);
        return matchesSearch && matchesGenre;
    });
    
    // Sort movies
    filteredMovies.sort((a, b) => {
        switch(sortValue) {
            case 'title-asc':
                return a.title.localeCompare(b.title);
            case 'title-desc':
                return b.title.localeCompare(a.title);
            case 'year-asc':
                return a.year - b.year;
            case 'year-desc':
                return b.year - a.year;
            case 'rating-asc':
                return a.rating - b.rating;
            case 'rating-desc':
                return b.rating - a.rating;
            default:
                return 0;
        }
    });
    
    displayMovies(filteredMovies);
}

// Event listeners
searchInput.addEventListener('input', filterAndSortMovies);
genreFilter.addEventListener('change', filterAndSortMovies);
sortSelect.addEventListener('change', filterAndSortMovies);

// Initial display
displayMovies(movies);