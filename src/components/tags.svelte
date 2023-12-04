<script lang="jsdoc">
	import { onMount } from 'svelte';

	/**
	 * @type {any[]}
	 */
	let tags = [];

	onMount(async () => {
		const res = await fetch('http://localhost:5000/data/admin/tags');
		tags = await res.json();
	});
</script>

<div class="flex flex-col overflow-auto">
	<h1 class="text-2xl font-bold text-gray-800 mb-4 mr-10 p-1">Business</h1>
	<div class="flex overflow-auto mb-6">
		<div class="grid grid-cols-6 gap-1 w-full overflow-auto">
			<div class="col-start-1 col-span-1 bg-gray-300 p-2 sticky top-0 font-bold">Tag</div>
			<div class="col-start-2 col-span-4 bg-gray-300 p-2 sticky top-0 font-bold">Description</div>
			<div class="col-start-6 col-span-1 bg-gray-300 p-2 sticky top-0 font-bold">Action</div>
			{#each tags as tag (tag.id)}
				<div class="col-start-1 col-span-1 p-2">{tag.tag_name}</div>
				<div class="col-start-2 col-span-4 p-2">{tag.description}</div>
				<div class="col-start-6 col-span-1 p-2">
					<button class="w-5 h-5 ml-4" type="button" aria-label="Edit">
						<svg
							width="100%"
							height="100%"
							viewBox="0 0 247 261"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							xml:space="preserve"
							style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-miterlimit:2;"
						>
							<g transform="matrix(1,0,0,1,-1457.35,-619.85)">
								<g transform="matrix(4.16667,0,0,4.16667,0,0)">
									<path
										d="M398,193.06L398,206.478C398,207.871 396.855,209 395.444,209L354.556,209C353.145,209 352,207.871 352,206.478L352,157.827C352,157.492 352.135,157.171 352.374,156.935L358.015,151.369C358.254,151.133 358.579,151 358.918,151L395.444,151C396.855,151 398,152.129 398,153.522L398,165.201"
										style="fill:none;stroke:rgb(61,62,68);stroke-width:2px;"
									/>
								</g>
								<g transform="matrix(4.16667,0,0,4.16667,0,0)">
									<path
										d="M362,155L362,161L356,161"
										style="fill:none;stroke:rgb(61,62,68);stroke-width:2px;stroke-linejoin:round;"
									/>
								</g>
								<g transform="matrix(4.16667,0,0,4.16667,0,0)">
									<path
										d="M380.572,200.938L372,204L375.062,195.428L401.238,169.251C402.845,167.645 405.38,167.576 406.902,169.098C408.424,170.62 408.355,173.156 406.749,174.762L380.572,200.938Z"
										style="fill:none;stroke:rgb(61,62,68);stroke-width:2px;stroke-linejoin:round;"
									/>
								</g>
								<g transform="matrix(4.16667,0,0,4.16667,0,0)">
									<path
										d="M400.269,170.221L405.779,175.731"
										style="fill:none;stroke:rgb(61,62,68);stroke-width:2px;stroke-linejoin:round;"
									/>
								</g>
								<g transform="matrix(4.16667,0,0,4.16667,0,0)">
									<path
										d="M398.33,172.16L403.841,177.67"
										style="fill:none;stroke:rgb(61,62,68);stroke-width:2px;stroke-linejoin:round;"
									/>
								</g>
								<g transform="matrix(4.16667,0,0,4.16667,0,0)">
									<path
										d="M376.031,194.458L381.542,199.969"
										style="fill:none;stroke:rgb(61,62,68);stroke-width:2px;stroke-linejoin:round;"
									/>
								</g>
								<g transform="matrix(4.16667,0,0,4.16667,0,0)">
									<path
										d="M360,172L386,172"
										style="fill:none;stroke:rgb(61,62,68);stroke-width:2px;stroke-linejoin:round;"
									/>
								</g>
								<g transform="matrix(4.16667,0,0,4.16667,0,0)">
									<path
										d="M360,182L378,182"
										style="fill:none;stroke:rgb(61,62,68);stroke-width:2px;stroke-linejoin:round;"
									/>
								</g>
							</g>
						</svg>
					</button>
				</div>
			{/each}
		</div>
	</div>
</div>

<style></style>
