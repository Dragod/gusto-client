<script lang="jsdoc">
	/**
	 * @component navButtons
	 * @description
	 *  Component that renders the navigation buttons for the app.
	 *  This component is used in the header component.
	 * @example
	 *  <navButtons />
	 */

	export let activeButton = 'updateMenu';
	/**
	 * @type {any[]}
	 */
	let data = [];

	async function fetchData() {
		try {
			const response = await fetch('http://localhost:5000/data/admin/menu');
			if (!response.ok) {
				throw new Error('Failed to fetch data');
			}
			data = await response.json();
		} catch (error) {
			console.error(error);
		}
	}

	async function handleRefresh() {
		await fetchData();
	}

	const buttons = [
		{ state: 'updateMenu', label: 'Menu', refresh: true },
		{ state: 'addDish', label: 'Insert New' },
		{ state: 'addRemoveCategory', label: 'Categories' },
		{ state: 'updateBusiness', label: 'Business' },
		{ state: 'tags', label: 'Tags' }
	];
</script>

{#each buttons as { state, label, refresh }}
	<button
		class="text-gray-800 mb-4 pt-4 hover:underline {activeButton === state
			? 'text-green-500 underline cursor-default'
			: 'cursor-pointer'}"
		on:click={() => {
			activeButton = state;
			if (refresh) handleRefresh();
		}}
	>
		{label}
	</button>
	<p class="px-2">|</p>
{/each}
