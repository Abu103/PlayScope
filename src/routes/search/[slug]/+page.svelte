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

	function getImage(url: string) {
		return url?.replace('/media/games/', '/media/crop/600/400/games/');
	}
</script>

<svelte:head>
	<title>PlayScope | Popular Games</title>
	<meta name="description" content="Browse popular games with ratings, genres, and more." />
	<meta name="keywords" content="games, video games, popular, ratings" />
</svelte:head>

{#if data.game.results.length == 0}
	<div class="min-h-screen">
		<div class="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white">
			<h1 class="animate-bounce text-9xl font-extrabold tracking-widest text-yellow-400">404</h1>

			<p class="mt-4 animate-pulse text-xl text-slate-300">Page Not Found</p>

			<a
				href="/"
				class="animate-fade-in mt-8 rounded bg-yellow-400 px-6 py-2 font-semibold text-slate-900 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-yellow-300"
			>
				Go Home
			</a>
		</div>
	</div>
{/if}

<div class="flex w-full place-self-center bg-gray-900 px-10 pt-0 lg:pt-30">
	<div class="columns-1 gap-4 py-5 sm:columns-2 lg:columns-3">
		{#each data.game.results as item (item.id)}
			<div class=" my-5 flex rounded-sm border-2 hover:rounded-sm hover:border-[#FACC15]">
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
