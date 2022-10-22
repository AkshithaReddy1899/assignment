const obj = [
	{
		id: 0,
		image: './assets/unsplash_3Sf_G9m0gcQ.svg',
		profile_picture: './assets/unsplash_FjvXUeYf1AA.svg',
		name: 'Lambiyan',
		owner: 'Pallav Bajjuri',
		price: '5,73,000', 
	},
	{
		id: 1,
		image: './assets/unsplash_3Sf_G9m0gcQ.svg',
		profile_picture: './assets/unsplash_FjvXUeYf1AA.svg',
		name: 'Lambiyan',
		owner: 'Pallav Bajjuri',
		price: '5,73,000', 
	},
	{
		id: 2,
		image: './assets/unsplash_3Sf_G9m0gcQ.svg',
		profile_picture: './assets/unsplash_FjvXUeYf1AA.svg',
		name: 'Lambiyan',
		owner: 'Pallav Bajjuri',
		price: '5,73,000', 
	},
	{
		id: 3,
		image: './assets/unsplash_3Sf_G9m0gcQ.svg',
		profile_picture: './assets/unsplash_FjvXUeYf1AA.svg',
		name: 'Lambiyan',
		owner: 'Pallav Bajjuri',
		price: '5,73,000', 
	}
]


obj.forEach((ele, i) => {
	const projectsContainer = document.getElementById('projects');

	const projectCard = document.createElement('li');

	projectCard.innerHTML = `<li key=${ele.id}>
	<div class="w-72 h-80 bg-stone-900 rounded-3xl flex flex-col justify-center items-center m-2 text-xs leading-4">
	<img src=${ele.image} alt="project" />
	<div class="flex flex-row justify-center items-center mr-16 pt-3 ml-6 w-full">
		<img src=${ele.profile_picture} alt="profile" class="mr-4" />
		<p class="flex flex-col justify-center items-start">
			<span >${ele.name}</span>
			<span class="opacity-30">Owned by - ${ele.owner}</span>
		</p>
	</div>
	<div class="flex flex-row justify-between items-center w-11/12 px-4 text-xs rounded-xl py-2 mt-4 bg-black">
		<p>Price - INR${ele.price}</p>
		<button type="button" class="project-button">Buy now</button>
	</div>
</div></li>`
projectsContainer.appendChild(projectCard);
})
