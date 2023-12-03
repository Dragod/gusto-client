<script>
	import { modalStore, closeModal } from '../store/modal';
	import { fade } from 'svelte/transition';

	let isOpen = false;
	let title = '';
	let message = '';
	let yesCallback = () => {};
	let noCallback = () => {};

	modalStore.subscribe(
		({ isOpen: open, title: ttl, message: msg, yesCallback: yes, noCallback: no }) => {
			isOpen = open;
			title = ttl;
			message = msg;
			yesCallback = yes;
			noCallback = no;
		}
	);
</script>

{#if isOpen}
	<div class="modal" transition:fade={{ duration: 200 }}>
		<div class="modal-content">
			<div class="flex flex-row justify-end items-center">
				<h2 class="flex flex-1 text-center text-1xl font-semibold text-gray-800">{title}</h2>
				<button class="close" on:click={closeModal}>X</button>
			</div>
			<hr class="border-t border-gray-300 my-2" />
			<p class="text-sm text-gray-700 py-4">{@html message}</p>
			<div class="flex justify-end">
				<button
					class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
					on:click={() => {
						noCallback();
						closeModal();
					}}>No</button
				>
				<button
					class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 ml-3 rounded"
					on:click={() => {
						yesCallback();
						closeModal();
					}}>Yes</button
				>
			</div>
		</div>
	</div>
{/if}

<style>
	.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1;
	}

	.modal-content {
		background-color: white;
		padding: 20px;
		border-radius: 10px;
		width: 80%;
		max-width: 500px;
	}
</style>
