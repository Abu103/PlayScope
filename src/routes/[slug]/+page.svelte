<script lang="ts">
	import Spinner from '$lib/components/Spinner.svelte';

	export let data;
	const { game } = data;
	console.log(game.platforms);

</script>

{#await game}
	<Spinner />
{:then game}
	<div class="flex min-h-screen min-w-screen flex-col bg-black/80 pt-0 pb-10 text-white lg:pt-30">
		<div class="px-3">
			<h1 class="px-5 py-8 text-2xl lg:text-5xl font-bold">
				{game.name}
			</h1>
			<div class="flex flex-col lg:flex-row">
				<div class="flex h-full w-full place-content-center items-center place-self-center px-5">
					<img
						src={game.background_image}
						alt={game.name}
						class="items-centers order-1 w-full rounded-md"
						loading="lazy"
					/>
				</div>
				<div
					class="flex w-9/10 grow flex-wrap place-content-center items-center gap-2 pt-10 pl-5 lg:flex-row lg:pt-0"
				>
					{#each game.tags as tag, i}
						{#if i < 10}
							<p
								class="wrap h-fit w-fit rounded-sm bg-[#FACC15] px-2 py-1 text-sm text-nowrap text-black backdrop-blur-sm lg:font-extralight"
							>
								{tag.name}
							</p>
						{/if}
					{/each}
				</div>
			</div>
			<p class="mx-5 my-10 border-l-5 border-[#FACC15] bg-[#FACC1533] px-5 py-5 text-white">
				<i>
					{@html game.description}
				</i>
			</p>
			<div class="w-11/12">
				{#each game.platforms as platform}
					{#if platform.platform.name == 'PC'}
						<p class="px-5 pb-5">{@html platform.requirements.minimum}</p>
						<p class="px-5">{@html platform.requirements.recommended}</p>
					{/if}
				{/each}
			</div>
		</div>
		<div class="h-1/2 overflow-scroll">
			{#each game.short_screenshots as ss}
				<img src={ss.images} alt={ss.id} />
			{/each}
		</div>
	</div>
{/await}
