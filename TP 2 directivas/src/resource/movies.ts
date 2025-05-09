export type Pelicula = {
  id: number
  titulo: string
  genero: string
  anio: number
  director: string
  likes: number
  portada: string
}

const movies = [
  {
    id: 1,
    titulo: "The Shawshank Redemption",
    genero: "Drama",
    anio: 1994,
    director: "Frank Darabont",
    likes: 2800000,
    portada: "https://rukminim2.flixcart.com/image/850/1000/k77xx8w0/poster/c/g/t/medium-the-shawshank-redemption-movie-poster-for-room-with-gloss-original-imafphnwmxjkvfjf.jpeg?q=90&crop=false",
  },
  {
    id: 2,
    titulo: "The Godfather",
    genero: "Crime, Drama",
    anio: 1972,
    director: "Francis Ford Coppola",
    likes: 2500000,
    portada: "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 3,
    titulo: "The Dark Knight",
    genero: "Action, Crime, Drama",
    anio: 2008,
    director: "Christopher Nolan",
    likes: 2300000,
    portada: "https://m.media-amazon.com/images/I/A1exRxgHRRL.jpg",
  },
  {
    id: 4,
    titulo: "Forrest Gump",
    genero: "Drama, Romance",
    anio: 1994,
    director: "Robert Zemeckis",
    likes: 2100000,
    portada: "https://i.ebayimg.com/images/g/A8sAAOSwMIphZOs6/s-l1200.jpg",
  },
  {
    id: 5,
    titulo: "Inception",
    genero: "Action, Adventure, Sci-Fi",
    anio: 2010,
    director: "Christopher Nolan",
    likes: 2100000,
    portada: "https://i.ebayimg.com/images/g/LTQAAOSw~gxfU1Rd/s-l1200.jpg",
  },
  {
    id: 6,
    titulo: "Fight Club",
    genero: "Drama",
    anio: 1999,
    director: "David Fincher",
    likes: 2000000,
    portada: "https://m.media-amazon.com/images/I/81D+KJkO4SL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 7,
    titulo: "The Matrix",
    genero: "Action, Sci-Fi",
    anio: 1999,
    director: "The Wachowskis",
    likes: 1900000,
    portada: "https://i5.walmartimages.com/seo/The-Matrix-Poster-Keanu-Reeves-New-24x36_34782a57-6fb5-4d70-b716-a2e7dd2e573b.5ebcc6b21770ab4e95ee2824e43900f6.jpeg",
  },
  {
    id: 8,
    titulo: "The Lord of the Rings: The Return of the King",
    genero: "Action, Adventure, Drama",
    anio: 2003,
    director: "Peter Jackson",
    likes: 1800000,
    portada: "https://m.media-amazon.com/images/M/MV5BMTZkMjBjNWMtZGI5OC00MGU0LTk4ZTItODg2NWM3NTVmNWQ4XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 9,

    titulo: "Pulp Fiction",
    genero: "Crime, Drama",
    anio: 1994,
    director: "Quentin Tarantino",
    likes: 1700000,
    portada: "https://i.ebayimg.com/images/g/YlcAAMXQW7VRFKFG/s-l1200.jpg",
  },
  {
    id: 10,
    titulo: "Schindler's List",
    genero: "Biography, Drama, History",
    anio: 1993,
    director: "Steven Spielberg",
    likes: 1600000,
    portada: "https://i.pinimg.com/736x/16/dc/f0/16dcf03b7244c896d4c149b250913f0f.jpg",
  },
  {
    id: 11,
    titulo: "The Silence of the Lambs",
    genero: "Crime, Drama, Thriller",
    anio: 1991,
    director: "Jonathan Demme",
    likes: 1500000,
    portada: "https://m.media-amazon.com/images/M/MV5BNDdhOGJhYzctYzYwZC00YmI2LWI0MjctYjg4ODdlMDExYjBlXkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 12,
    titulo: "Interstellar",
    genero: "Adventure, Drama, Sci-Fi",
    anio: 2014,
    director: "Christopher Nolan",
    likes: 1400000,
    portada: "https://m.media-amazon.com/images/I/614QSV5M4lL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 13,
    titulo: "Gladiator",
    genero: "Action, Adventure, Drama",
    anio: 2000,
    director: "Ridley Scott",
    likes: 1300000,
    portada: "https://www.itsalldowntown.com/wp-content/uploads/2023/08/Gladiator-poster.jpg",
  },
  {
    id: 14,
    titulo: "The Social Network",
    genero: "Biography, Drama",
    anio: 2010,
    director: "David Fincher",
    likes: 1200000,
    portada: "https://i.pinimg.com/474x/8b/41/e2/8b41e2f169d86d87aa4c543af61d51b7.jpg",
  },
  {
    id: 15,
    titulo: "The Prestige",
    genero: "Drama, Mystery, Sci-Fi",
    anio: 2006,
    director: "Christopher Nolan",
    likes: 1100000,
    portada: "https://i.pinimg.com/736x/4f/4d/fa/4f4dfabe5c46358c8d821bd2716e8186.jpg",
  },
];

export default movies;
