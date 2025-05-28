const container = document.getElementById("movie-container");

const fetchMovies = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=ko-KR",
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTllMDg5NTEyN2RmMDEyMTUyODYwOWU1M2NkNjViMiIsIm5iZiI6MTczODI1Mzk2Mi45ODU5OTk4LCJzdWIiOiI2NzliYTY4YWIwMGQzYmFkOTJiZDg5Y2QiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.tvE4Ck92yfRyRlOFiLruabQyQa-O2ZefJ1bYB1lrGmQ",
        },
      }
    );

    if (!response.ok) throw new Error(`HTTP 오류 발생: ${response.status}`);

    const { results } = await response.json();

    results.forEach((movie) => {
      const card = document.createElement("div");
      card.className = "movie_card";
      card.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
        <div class="movie_info">
          <div class="movie_title">${movie.title}</div>
          <div class="movie_vote_average">🤩 ${movie.vote_average}</div>
          <div class="movie_date">${movie.release_date}</div>
        </div>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("에러 발생:", error);
  }
};

fetchMovies();
