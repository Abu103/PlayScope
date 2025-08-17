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
        goto(`/${slug}`, {replaceState:false})
    }
</script>

<div class="bg-gray-900 px-5 pt-0">
	<div class="columns-1 gap-4 bg-gray-900 py-10 sm:columns-2 lg:columns-3">
		{#each data.game.results as item (item.id)}
			<a
				href={`/${item.slug}`}
				onclick={() => {
					gotoPage(item.slug);
				}}
				class="my-4 h-fit break-inside-avoid rounded-sm bg-gray-800 p-3"
			>
				{#if item.background_image}
					<img src={item.background_image} alt={item.name} class="rounded-sm" />
				{/if}
				<p class="pt-3 text-lg font-semibold text-white">{item.name}</p>
			</a>
		{/each}
	</div>
</div>
