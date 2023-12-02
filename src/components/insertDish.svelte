<script lang="jsdoc">
	import { toasts } from 'svelte-toasts';
	/**
	 * @type {{name: string, description: string, price: string, isPizza: string, tags: number[], categoryId: string, businessId: string}}
	 */
	let dish = {
		name: '',
		description: '',
		price: '',
		isPizza: '0',
		tags: [],
		categoryId: '',
		businessId: '1'
	};
	async function insertDish() {
		const dishToInsert = { ...dish, tags: dish.tags.join(',') };

		const response = await fetch('http://localhost:5000/data/admin/menu', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(dishToInsert)
		});

		if (response.ok) {
			toasts.success({
				title: 'Insert dish',
				description: 'Dish inserted successfully.',
				type: 'info',
				duration: 6000,
				placement: 'bottom-center'
			});
			// Reset the dish object
			dish = {
				name: '',
				description: '',
				price: '',
				isPizza: '0',
				tags: [],
				categoryId: '',
				businessId: '1'
			};
		} else {
			console.error('Failed to insert dish');
			toasts.error({
				title: 'Insert dish',
				description: 'Failed to insert dish.',
				type: 'error',
				duration: 6000,
				placement: 'bottom-center'
			});
		}
	}
</script>

<h1 class="text-2xl font-bold text-gray-800 mb-4 mr-10 p-1">Insert dish</h1>
<form class="flex-grow overflow-auto mb-6 h-full" on:submit|preventDefault={insertDish}>
	<label for="dish" class="block text-sm font-medium text-gray-700">Name</label>
	<input
		id="dish"
		bind:value={dish.name}
		type="text"
		placeholder="Name of dish"
		class="p-2 mt-1 mb-6 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
	/>
	<label for="description" class="block text-sm font-medium text-gray-700">Description</label>
	<input
		id="description"
		bind:value={dish.description}
		type="text"
		placeholder="Description of dish"
		class="p-2 mt-1 mb-6 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
	/>
	<label for="price" class="block text-sm font-medium text-gray-700">Price</label>
	<input
		id="price"
		bind:value={dish.price}
		type="number"
		placeholder="Price you want to sell the dish for (€)"
		class="p-2 mt-1 mb-6 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
	/>
	<label for="is_pizza" class="block text-sm font-medium text-gray-700"
		>Is this new dish a pizza?</label
	>
	<label class="block">
		<input
			id="is_pizza_no"
			bind:group={dish.isPizza}
			type="radio"
			value="0"
			class="mr-1 font-medium text-gray-700"
		/>
		No
	</label>
	<label class="block">
		<input
			id="is_pizza_yes"
			bind:group={dish.isPizza}
			type="radio"
			value="1"
			class="mr-1 font-medium text-gray-700"
		/>
		Yes
	</label>

	<label for="tags" class="mt-3 block text-sm font-medium text-gray-700">Tags</label>
	<label class="block">
		<input
			id="category_id_nuovo"
			type="checkbox"
			value="1"
			class="mr-1 font-medium text-gray-700"
		/>
		Nuovo
	</label>

	<label class="block">
		<input
			id="category_id_cereali"
			type="checkbox"
			value="2"
			class="mr-1 font-medium text-gray-700"
		/>
		Cereali
	</label>

	<label class="block">
		<input
			id="category_id_surgelato"
			type="checkbox"
			value="3"
			class="mr-1 font-medium text-gray-700"
		/>
		Surgelato
	</label>
	<label for="category_id" class="block text-sm font-medium text-gray-700">Category id</label>
	<input
		id="category_id"
		bind:value={dish.categoryId}
		type="number"
		placeholder="Category id (e.g. 1, 2, etc.)"
		class="p-2 mt-1 mb-6 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
	/>
	<label for="business_id" class="block text-sm font-medium text-gray-700">Business location</label>
	<label class="block">
		<input
			id="business_id_senigallia"
			bind:group={dish.businessId}
			type="radio"
			value="1"
			checked
			class="mr-1 font-medium text-gray-700"
		/>
		Senigallia
	</label>

	<label class="block">
		<input
			id="business_id_trecastelli"
			bind:group={dish.businessId}
			type="radio"
			value="2"
			class="mr-1 font-medium text-gray-700"
		/>
		Trecastelli
	</label>

	<button
		type="submit"
		class="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded block mt-3"
		>Insert dish</button
	>
</form>

<style></style>
