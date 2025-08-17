<script lang="ts">
	import { Star } from 'lucide-svelte';
	import { data } from '../lib/data';
	import { goto, replaceState } from '$app/navigation';

	function goToGamePage(gameSlug: string) {
		goto(`/${gameSlug}`, { replaceState: false });
	}

	function getImage(url: string) {
		return url?.replace('/media/games/', '/media/crop/600/400/games/');
	}
</script>

<svelte:head>
	<title>PlayScope | Popular Games</title>
	<meta name="description" content="Browse popular games with ratings, genres, and more." />
	<meta name="keywords" content="games, video games, popular, ratings" />
</svelte:head>


<div class="min-h-screen w-screen bg-gray-900 pt-10 pb-20 lg:pt-35">
	<div class="grid grid-cols-1 gap-5 px-5 md:grid-cols-3 lg:grid-cols-3">
		{#each data.results as game}
			<a
				role="button"
				tabindex="0"
				class="flex w-[95%] flex-col place-self-center rounded-md border-2 border-gray-800 bg-gray-800 pb-5 text-white transition-all delay-10 duration-200 hover:border-[#FACC15] md:min-h-[100px]"
				onclick={() => goToGamePage(game.slug)}
				href={game.slug}
			>
				<img
					src={getImage(game.background_image)}
					alt={game.name}
					class="aspect-auto rounded-t-md object-cover md:aspect-video"
					width="100%"
					height="auto"
					fetchpriority="high"
				/>
				<p class="px-3 py-5 text-start wrap-normal text-white">{game.name}</p>
				<span class="flex items-center gap-1 pl-3"><Star size={15} /> {game.rating}/5</span>
				<!-- <div class="flex flex-wrap gap-2 pt-5 pl-3">
					{#each game.tags as tag, i}
						{#if tag.language == 'eng' && i < 10}
							<span
							class="wrap rounded-sm bg-zinc-600/60 px-2 py-1 text-sm text-nowrap text-neutral-300 backdrop-blur-sm lg:font-extralight"
								>{tag.name}</span
								>
						{/if}
					{/each}
				</div> -->
				<div class="flex flex-wrap gap-2 pt-5 pl-3">
					{#each game.genres as genre}
						<span
							class="wrap rounded-sm bg-zinc-600/60 px-2 py-1 text-sm text-nowrap text-neutral-300 backdrop-blur-sm lg:font-extralight"
							>{genre.name}</span
						>
					{/each}
				</div>
			</a>
		{/each}
	</div>
</div>
