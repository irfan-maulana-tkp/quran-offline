<script lang="ts">
	import { run } from 'svelte/legacy';

	import SearchInput from '$lib/SearchInput.svelte';
	import SurahCard from '$lib/SurahCard.svelte';
	import type { SurahInfo } from '../data/surah-info';

	interface Props {
		originSurahInfo: SurahInfo;
	}

	let { originSurahInfo }: Props = $props();

	let searchText = $state('');
	let filteredSurahInfo: SurahInfo = $state(originSurahInfo);
	const noSpecialChars = (str: string) => str.replace(/[^a-zA-Z0-9 ]/g, '');

	const handleSearchChange = (e: Event) => {
		const target = e.target as HTMLInputElement;
		searchText = target?.value || '';
	};

	run(() => {
		if (searchText.length > 1) {
			let result: SurahInfo = {};

			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			for (const [_, surah] of Object.entries(originSurahInfo)) {
				if (
					noSpecialChars(surah.latin.toLowerCase()).indexOf(
						noSpecialChars(searchText.toLowerCase())
					) >= 0 ||
					noSpecialChars(surah.translation.toLowerCase()).indexOf(
						noSpecialChars(searchText.toLowerCase())
					) >= 0
				) {
					result[surah.index] = surah;
				}
			}

			filteredSurahInfo = result;
		} else {
			filteredSurahInfo = originSurahInfo;
		}
	});
</script>

<div class="px-4 flex flex-col gap-2">
	<SearchInput {searchText} onChange={handleSearchChange} />

	{#each Object.entries(filteredSurahInfo) as [_, item] (item.latin)}
		<SurahCard surah={item} />
	{/each}
</div>
