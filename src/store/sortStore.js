import { writable, get } from 'svelte/store';

export const dataSort = writable([]);
export const selectedBusiness = writable(1);
export const activeSort = writable('default');

export async function sortByDefault() {
	const business = get(selectedBusiness);
	const response = await fetch(`http://localhost:5000/data/admin/menu?business=${business}`);
	const data = await response.json();
	console.log(data);
	dataSort.set(data);
	activeSort.set('default');
}

export async function sortByHighestPrice() {
	const business = get(selectedBusiness);
	const response = await fetch(
		`http://localhost:5000/data/admin/menu/highest-sort?business=${business}`
	);
	const data = await response.json();
	dataSort.set(data);
	activeSort.set('highest');
}

export async function sortByLowestPrice() {
	const business = get(selectedBusiness);
	const response = await fetch(
		`http://localhost:5000/data/admin/menu/lowest-sort?business=${business}`
	);
	const data = await response.json();
	dataSort.set(data);
	activeSort.set('lowest');
}

export async function sortByIsPizza() {
	const business = get(selectedBusiness);
	const response = await fetch(
		`http://localhost:5000/data/admin/menu/is-pizza?business=${business}`
	);
	const data = await response.json();
	dataSort.set(data);
	activeSort.set('is-pizza');
}

export async function sortByNewTag() {
	const business = get(selectedBusiness);
	const response = await fetch(
		`http://localhost:5000/data/admin/menu/new-sort?business=${business}`
	);
	const data = await response.json();
	dataSort.set(data);
	activeSort.set('new-tag');
}

export async function sortByCerTag() {
	const business = get(selectedBusiness);
	const response = await fetch(
		`http://localhost:5000/data/admin/menu/cer-sort?business=${business}`
	);
	const data = await response.json();
	dataSort.set(data);
	activeSort.set('cer-tag');
}

export async function sortBySurTag() {
	const business = get(selectedBusiness);
	const response = await fetch(
		`http://localhost:5000/data/admin/menu/sur-sort?business=${business}`
	);
	const data = await response.json();
	dataSort.set(data);
	activeSort.set('sur-tag');
}

export async function sortByNameAsc() {
	const business = get(selectedBusiness);
	const response = await fetch(
		`http://localhost:5000/data/admin/menu/name-asc-sort?business=${business}`
	);
	const data = await response.json();
	dataSort.set(data);
	activeSort.set('name-asc');
}

export async function sortByNameDesc() {
	const business = get(selectedBusiness);
	const response = await fetch(
		`http://localhost:5000/data/admin/menu/name-desc-sort?business=${business}`
	);
	const data = await response.json();
	dataSort.set(data);
	activeSort.set('name-desc');
}
