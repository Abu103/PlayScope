import { RAWG_API_KEY } from '$env/static/private';

export async function load({ params, fetch }) {
  const { slug } = params;

  const res = await fetch(`https://api.rawg.io/api/games/${slug}?key=${RAWG_API_KEY}`);
  const game = await res.json();

  return {
    game
  };
}