<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { goto } from '$app/navigation';

	let { children } = $props();
	let inputValue: string = $state('');

	function gotoHome() {
		goto('/', { replaceState: false });
	}

	function handleInputSubmit(event: SubmitEvent) {
		event.preventDefault();
		console.log('INSIDE');

		goto(`/search/${inputValue}`, { replaceState: false });
		inputValue = '';
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div
	class="z-40 overflow-hidden md:block lg:fixed lg:top-0 lg:w-full lg:bg-black/80 lg:px-5 lg:py-7 lg:text-lg lg:text-white lg:backdrop-blur-sm"
>
	<div class="flex items-center justify-between gap-3">
		<div class="flex items-center gap-10">
			<a class="logo w-fit max-w-2xs " onclick={gotoHome} href="/">
				<svg
					viewBox="0 0 240 60"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					style="width: 100%; height: 100%; display: block;"
				>
					<!-- Removed background rect for transparency -->

					<!-- Controller Icon -->
					<g transform="translate(20, 15)">
						<rect width="30" height="30" rx="6" fill="#FACC15" />
						<circle cx="10" cy="10" r="3" fill="#0F172A" />
						<circle cx="20" cy="10" r="3" fill="#0F172A" />
						<rect x="12" y="18" width="6" height="6" fill="#0F172A" />
					</g>

					<!-- Site Name Text -->
					<text
						x="60"
						y="38"
						font-family="Segoe UI, Arial, sans-serif"
						font-size="20"
						fill="#f1f1f1"
						font-weight="600"
						class="hidden lg:block"
					>
						PlayScope
					</text>
				</svg>
			</a>
			<form onsubmit={handleInputSubmit}>
				<input
					class=" w-fit rounded-full px-3 py-1  outline-2 outline-offset-0 outline-yellow-300 focus-visible:outline-[#FACC15] lg:min-w-md"
					type="text"
					placeholder="Search"
					bind:value={inputValue}
				/>
			</form>
		</div>
		<ul class="flex gap-7">
			<li class="flex place-self-center rounded-sm px-2 py-1 hover:bg-[#FACC15] hover:text-black">
				<a href="/" aria-label={'Home'} onclick={gotoHome}>Home</a>
			</li>
			<li class="flex place-self-center rounded-sm px-3 py-2 hover:bg-[#FACC15] hover:text-black">
				Catalog
			</li>
			<li class="flex place-self-center rounded-sm px-3 py-2 hover:bg-[#FACC15] hover:text-black">
				About us
			</li>
			<li class="flex place-self-center rounded-sm px-3 py-2 hover:bg-[#FACC15] hover:text-black">
				Contact
			</li>
		</ul>
	</div>
</div>
{@render children?.()}

<style>
	ul > li:hover {
		/* background-image: radial-gradient(cyan,lightseagreen,salmon); */
		/* border-radius: 8px; */
		/* padding: 0.5rem 0.75rem; */
		transition: all 0.3s linear;
		cursor: pointer;
	}
</style>
