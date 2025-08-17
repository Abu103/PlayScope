import { RAWG_API_KEY } from '$env/static/private';
import { error } from '@sveltejs/kit';

export const load = async ({ params, fetch }) => {
  const { slug } = params;


  const res = await fetch(`https://api.rawg.io/api/games?search=${slug}&key=${RAWG_API_KEY}`);

  if (!res.ok) {
    error(res.status, "Error");
  }


  const game = await res.json();

  return {
    game,
    slug
  };
}