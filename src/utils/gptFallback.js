export const genreMap = {
  action: 28,
  comedy: 35,
  horror: 27,
  romance: 10749,
  thriller: 53,
  drama: 18,
  sci: 878,
  crime: 80,
  documentary: 99,
};

export const getGenreFromQuery = (query) => {
  const q = query.toLowerCase();
  return Object.keys(genreMap).find((key) => q.includes(key));
};