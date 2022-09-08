const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "0e06bdaa475f13b06beb4de9fbd2a6d4",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
