<script lang="jsdoc">
	import {
		sortByDefault,
		sortByHighestPrice,
		sortByLowestPrice,
		sortByCerTag,
		sortByIsPizza,
		sortByNameAsc,
		sortByNameDesc,
		sortByNewTag,
		sortBySurTag,
		activeSort
	} from '../store/sortStore';
	/**
	 * @type {number}
	 */
</script>

<label class="pb-2 text-sm font-medium" for="sort">Sort by</label>
<div class="flex flex-row">
	<button
		class={`mr-4 px-2 py-1 ${
			$activeSort === 'default' ? 'bg-green-500' : 'bg-blue-500'
		} text-white rounded`}
		on:click={sortByDefault}>Category</button
	>
	<button
		class={`mr-4 px-2 py-1 ${
			$activeSort === 'highest' ? 'bg-green-500' : 'bg-blue-500'
		} text-white rounded`}
		on:click={sortByHighestPrice}>Highest price</button
	>
	<button
		class={`mr-4 px-2 py-1 ${
			$activeSort === 'lowest' ? 'bg-green-500' : 'bg-blue-500'
		} text-white rounded`}
		on:click={sortByLowestPrice}>Lowest price</button
	>
	<button
		class={`mr-4 px-2 py-1 ${
			$activeSort === 'is-pizza' ? 'bg-green-500' : 'bg-blue-500'
		} text-white rounded`}
		on:click={sortByIsPizza}>Is pizza</button
	>
	<button
		class={`mr-4 px-2 py-1 ${
			$activeSort === 'new-tag' ? 'bg-green-500' : 'bg-blue-500'
		} text-white rounded`}
		on:click={sortByNewTag}>NEW tag</button
	>
	<button
		class={`mr-4 px-2 py-1 ${
			$activeSort === 'cer-tag' ? 'bg-green-500' : 'bg-blue-500'
		} text-white rounded`}
		on:click={sortByCerTag}>CER tag</button
	>
	<button
		class={`mr-4 px-2 py-1 ${
			$activeSort === 'sur-tag' ? 'bg-green-500' : 'bg-blue-500'
		} text-white rounded`}
		on:click={sortBySurTag}>SUR tag</button
	>
	<button
		class={`mr-4 px-2 py-1 ${
			$activeSort === 'name-asc' ? 'bg-green-500' : 'bg-blue-500'
		} text-white rounded`}
		on:click={sortByNameAsc}>Name asc</button
	>
	<button
		class={`mr-4 px-2 py-1 ${
			$activeSort === 'name-desc' ? 'bg-green-500' : 'bg-blue-500'
		} text-white rounded`}
		on:click={sortByNameDesc}>Name desc</button
	>
</div>

<style></style>
