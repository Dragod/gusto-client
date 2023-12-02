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
</script>

<button
	class="text-gray-800 mb-4 pt-4 hover:underline {activeButton === 'updateMenu'
		? 'text-green-500 underline'
		: ''}"
	on:click={() => {
		activeButton = 'updateMenu';
		handleRefresh();
	}}
>
	Menu
</button>
<p class="px-2">|</p>
<button
	class="text-gray-800 mb-4 pt-4 hover:underline {activeButton === 'addDish'
		? 'text-green-500 underline'
		: ''}"
	on:click={() => (activeButton = 'addDish')}
>
	Insert dish
</button>
<p class="px-2">|</p>
<button
	class="text-gray-800 mb-4 pt-4 hover:underline {activeButton === 'addRemoveCategory'
		? 'text-green-500 underline'
		: ''}"
	on:click={() => (activeButton = 'addRemoveCategory')}
>
	Categories
</button>
<p class="px-2">|</p>
<button
	class="text-gray-800 mb-4 pt-4 hover:underline {activeButton === 'updateBusiness'
		? 'text-green-500 underline'
		: ''}"
	on:click={() => (activeButton = 'updateBusiness')}
>
	Business
</button>
<p class="px-2">|</p>
<button
	class="text-gray-800 mb-4 pt-4 hover:underline {activeButton === 'tags'
		? 'text-green-500 underline'
		: ''}"
	on:click={() => (activeButton = 'tags')}
>
	Tags
</button>
