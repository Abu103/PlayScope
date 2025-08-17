<script lang="ts">
	import type { PageProps } from './$types';
	import { goto } from '$app/navigation';

	// 1. Use the $props rune to get data from your `load` function.
	let { data }: PageProps = $props();

	// 2. You can access `data.game` directly in the template.
	// For debugging, use an $effect to log data when it changes.
	$effect(() => {
		if (data.game && data.game.results) {
			console.log('Game results loaded:', data.game.results);
		}
	});

	function gotoPage(slug: string) {
		goto(`/${slug}`, { replaceState: false });
	}

	function getImage(url:string) {
		return url?.replace('/media/games/', '/media/crop/600/400/games/');
	}
</script>


<svelte:head>
	<title>PlayScope | Popular Games</title>
	<meta name="description" content="Browse popular games with ratings, genres, and more." />
	<meta name="keywords" content="games, video games, popular, ratings" />
</svelte:head>

<div class="flex place-self-center bg-gray-900 px-10 pt-0 lg:pt-30 w-full">
	<div class="columns-1 gap-4  py-5 sm:columns-2 lg:columns-3">
		{#each data.game.results as item (item.id)}
			<div class=" flex my-5 rounded-sm hover:border-[#FACC15] border-2 hover:rounded-sm">
				<a
					href={`/${item.slug}`}
					onclick={() => {
						gotoPage(item.slug);
					}}
					class=" h-fit break-inside-avoid rounded-sm bg-gray-900 p-3"
				>
					{#if item.background_image}
						<img src={getImage(item.background_image)} alt={item.name} class="rounded-sm" />
					{/if}
					<p class="pt-3 text-lg font-semibold text-white">{item.name}</p>
				</a>
			</div>
		{/each}
	</div>
</div>
