<script lang="jsdoc">
	/**
	 * @type {any[]}
	 */
	export let dataSort = [];
	let activeSort = 'default';

	async function sortByDefault() {
		const response = await fetch('http://localhost:5000/data/admin/menu');
		dataSort = await response.json();
		activeSort = 'default';
	}

	async function sortByHighestPrice() {
		const response = await fetch('http://localhost:5000/data/admin/menu/highest-sort');
		dataSort = await response.json();
		activeSort = 'highest';
	}

	async function sortByLowestPrice() {
		const response = await fetch('http://localhost:5000/data/admin/menu/lowest-sort');
		dataSort = await response.json();
		activeSort = 'lowest';
	}

	async function sortByIsPizza() {
		const response = await fetch('http://localhost:5000/data/admin/menu/is-pizza');
		dataSort = await response.json();
		activeSort = 'is-pizza';
	}

	async function sortByNewTag() {
		const response = await fetch('http://localhost:5000/data/admin/menu/new-sort');
		dataSort = await response.json();
		activeSort = 'new-tag';
	}

	async function sortByCerTag() {
		const response = await fetch('http://localhost:5000/data/admin/menu/cer-sort');
		dataSort = await response.json();
		activeSort = 'cer-tag';
	}

	async function sortBySurTag() {
		const response = await fetch('http://localhost:5000/data/admin/menu/sur-sort');
		dataSort = await response.json();
		activeSort = 'sur-tag';
	}

	async function sortByNameAsc() {
		const response = await fetch('http://localhost:5000/data/admin/menu/name-asc-sort');
		dataSort = await response.json();
		activeSort = 'name-asc';
	}

	async function sortByNameDesc() {
		const response = await fetch('http://localhost:5000/data/admin/menu/name-desc-sort');
		dataSort = await response.json();
		activeSort = 'name-desc';
	}
</script>

<label class="pr-2" for="sort">Sort by</label>
<button
	class={`mr-4 px-2 py-1 ${
		activeSort === 'default' ? 'bg-green-500' : 'bg-blue-500'
	} text-white rounded`}
	on:click={sortByDefault}>Category</button
>
<button
	class={`mr-4 px-2 py-1 ${
		activeSort === 'highest' ? 'bg-green-500' : 'bg-blue-500'
	} text-white rounded`}
	on:click={sortByHighestPrice}>Highest price</button
>
<button
	class={`mr-4 px-2 py-1 ${
		activeSort === 'lowest' ? 'bg-green-500' : 'bg-blue-500'
	} text-white rounded`}
	on:click={sortByLowestPrice}>Lowest price</button
>
<button
	class={`mr-4 px-2 py-1 ${
		activeSort === 'is-pizza' ? 'bg-green-500' : 'bg-blue-500'
	} text-white rounded`}
	on:click={sortByIsPizza}>Is pizza</button
>
<button
	class={`mr-4 px-2 py-1 ${
		activeSort === 'new-tag' ? 'bg-green-500' : 'bg-blue-500'
	} text-white rounded`}
	on:click={sortByNewTag}>NEW tag</button
>
<button
	class={`mr-4 px-2 py-1 ${
		activeSort === 'cer-tag' ? 'bg-green-500' : 'bg-blue-500'
	} text-white rounded`}
	on:click={sortByCerTag}>CER tag</button
>
<button
	class={`mr-4 px-2 py-1 ${
		activeSort === 'sur-tag' ? 'bg-green-500' : 'bg-blue-500'
	} text-white rounded`}
	on:click={sortBySurTag}>SUR tag</button
>
<button
	class={`mr-4 px-2 py-1 ${
		activeSort === 'name-asc' ? 'bg-green-500' : 'bg-blue-500'
	} text-white rounded`}
	on:click={sortByNameAsc}>Name asc</button
>
<button
	class={`mr-4 px-2 py-1 ${
		activeSort === 'name-desc' ? 'bg-green-500' : 'bg-blue-500'
	} text-white rounded`}
	on:click={sortByNameDesc}>Name desc</button
>

<style></style>
