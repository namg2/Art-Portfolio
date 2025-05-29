const fs = require('fs');
const movieInfo = require('movie-info');

const personalData = [
    {
      "title": "Brother Bear",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "Animal Farm",
      "year_watched": 2023,
      "rating": null,
      "year": "1954"
    },
    {
      "title": "The Nun II",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "American Psycho",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "Forrest Gump",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "Missing",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "The Boy in the Striped Pajamas",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "A Clockwork Orange",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "One Flew Over the Cuckoo's Nest",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "The Lovely Bones",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "The Nun",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "Believe Me: The Abduction of Lisa McVey",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "Hacksaw Ridge",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "The Social Network",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "Come and See",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "M3GAN",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "One Piece Film: Red",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "The Super Mario Bros. Movie",
      "year_watched": 2023,
      "rating": 2
    },
    {
      "title": "12 Angry Men",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "Legally Blonde",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "To Kill a Mockingbird",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "Jujutsu Kaisen 0",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "Interstellar",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "Searching",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "The Girl Who Escaped: The Kara Robinson Story",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "Death of a Salesman",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "Cruella",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "L\u00e9on: The Professional",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "The Godfather",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "Spider-Man",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "Spider-Man 2",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "Spider-Man 3",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "The Amazing Spider-Man",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "The Amazing Spider-Man 2",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "Spider-Man: Into the Spider-Verse",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "Selena",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "The Shining",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "Superhero Movie",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "Girl in the Basement",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "The Karate Kid",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "Scream",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "The Sixth Sense",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "The 40-Year-Old Virgin",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "Titanic",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "The Exorcist",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "Psycho",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "The Blair Witch Project",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "Halloween",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "The Usual Suspects",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "The Matrix",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "Scary Movie",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "Uptown Girls",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "Primal Fear",
      "year_watched": 2023,
      "rating": 10
    },
    {
      "title": "WALL\u00b7E",
      "year_watched": 2023,
      "rating": null
    },
    {
      "title": "Kung Fu Panda",
      "year_watched": 2024,
      "rating": null
    },
    {
      "title": "Stand and Deliver",
      "year_watched": 2024,
      "rating": null
    },
    {
      "title": "The Stanford Prison Experiment",
      "year_watched": 2024,
      "rating": 2
    },
    {
      "title": "(500) Days of Summer",
      "year_watched": 2024,
      "rating": null
    },
    {
      "title": "Willy Wonka & the Chocolate Factory",
      "year_watched": 2024,
      "rating": null
    },
    {
      "title": "Dear Audrey",
      "year_watched": 2024,
      "rating": null
    },
    {
      "title": "Girl, Interrupted",
      "year_watched": 2024,
      "rating": null
    },
    {
      "title": "Super Size Me",
      "year_watched": 2024,
      "rating": null
    },
    {
      "title": "Super Size Me 2: Holy Chicken!",
      "year_watched": 2024,
      "rating": null
    },
    {
      "title": "Monsters, Inc.",
      "year_watched": 2024,
      "rating": null
    },
    {
      "title": "A Bug's Life",
      "year_watched": 2024,
      "rating": null
    },
    {
      "title": "Fight Club",
      "year_watched": 2024,
      "rating": 10
    },
    {
      "title": "Lolita",
      "year_watched": 2024,
      "rating": null
    },
    {
      "title": "Rosemary's Baby",
      "year_watched": 2024,
      "rating": null
    },
    {
      "title": "The Platform",
      "year_watched": 2025,
      "rating": null
    },
    {
      "title": "Final Destination",
      "year_watched": 2025,
      "rating": null
    },
    {
      "title": "Society of the Snow",
      "year_watched": 2025,
      "rating": null
    },
    {
      "title": "Apollo 13",
      "year_watched": 2025,
      "rating": 6,
      "year": "1954"
    },
    {
      "title": "The Truman Show",
      "year_watched": 2025,
      "rating": 8
    },
    {
      "title": "Anastasia",
      "year_watched": 2025,
      "rating": 5,
      "link":"https://m.media-amazon.com/images/I/41IvvGPA-3L._AC_UF894,1000_QL80_.jpg"
    },
    {
      "title": "Pocahontas",
      "year_watched": 2025,
      "rating": 9
    },
    {
      "title": "Heathers",
      "year_watched": 2025,
      "rating": 9
    },
    {
      "title": "Good Will Hunting",
      "year_watched": 2025,
      "rating": 10
    },
    {
      "title": "Project X",
      "year_watched": 2025,
      "rating": 8
    },
    {
      "title": "The Departed",
      "year_watched": 2025,
      "rating": 8
    },
    {
      "title": "The Shawshank Redemption",
      "year_watched": 2025,
      "rating": 10
    },
    {
      "title": "Chicago",
      "year_watched": 2025,
      "rating": 8
    },
    {
      "title": "Spirit: Stallion of the Cimarron",
      "year_watched": 2025,
      "rating": 6
    },
    {
      "title": "Dinosaur",
      "year_watched": 2025,
      "rating": null
    }
  ]

const movieData = [];

function formatDate(dateStr) {
    if (!dateStr) return null;
    const date = new Date(dateStr);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  
async function fetchMovies() {
  for (const i in personalData) {
    const movie = personalData[i]
    try {
      let info = await movieInfo(movie.title);
      if (movie.year) {
        info = await movieInfo(movie.title, movie.year);
      }
      let link = info.imageBase+info.poster_path
      if(!info.poster_path){
        link = movie.link
      }
      if (info.title == "Anastasia"){
        console.log(info)
      }
      movieData.push({
          title: info.title,
          description: info.overview || null,
          rating: movie.rating,
          image: link || null,
          release_date: formatDate(info.release_date) || null,
          year_watched: movie.year_watched
      });
    } catch (err) {
      console.error(`Failed to fetch data for "${movie[0]}":`, err.message);
    }
  }

  fs.writeFileSync('movies.json', JSON.stringify(movieData, null, 2));
  console.log('Movie data saved to movies.json');
}

fetchMovies();