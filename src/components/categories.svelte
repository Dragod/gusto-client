<script lang="jsdoc">
	import { onMount } from 'svelte';

	/**
	 * @component Categories
	 * @description Component for catoegories list
	 */

	/**
	 * @type {any[]}
	 */
	let categotryData = [];

	async function fetchCategoryData() {
		const response = await fetch('http://localhost:5000/data/admin/categories');
		categotryData = await response.json();
	}

	onMount(async () => {
		await fetchCategoryData();
	});
</script>

<div class="flex flex-col flex-grow overflow-auto h-full">
	<h1 class="text-2xl font-bold text-gray-800 mb-4 mr-10 p-1">Categories</h1>
	<div class="flex-grow overflow-auto mb-6 h-full">
		<div class="grid grid-cols-5 gap-1 w-full overflow-auto">
			<div class="col-start-1 col-span-3 bg-gray-300 p-2 sticky top-0 font-bold">Category</div>
			<div class="col-start-4 col-span-1 bg-gray-300 p-2 sticky top-0 font-bold">Business id</div>
			<div class="col-start-5 col-span-1 bg-gray-300 p-2 sticky top-0 font-bold">Actions</div>
			{#each categotryData as item, index (index)}
				<div class={`bg-gray-${index % 2 === 0 ? '100' : '200'} col-span-3 p-2`}>
					{item.category_name}
				</div>
				<div class={`bg-gray-${index % 2 === 0 ? '100' : '200'} col-span-1 p-2`}>
					{item.business_id}
				</div>
				<div class={`bg-gray-${index % 2 === 0 ? '100' : '200'} col-span-1 p-2`}>
					<button class="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded">Edit</button>
				</div>
			{/each}
		</div>
	</div>
</div>
