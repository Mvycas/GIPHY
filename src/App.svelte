<script>

	let phrase = '';

let gifs = [];

async function findGIPHY(phrase) {

	const response = await fetch(`/watson`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			text: phrase,
		})
		//add catch block here
	}).then(async (response) => {
		let gifArray = await response.json();

		for (let i in gifArray.data) {
			gifs[i] = gifArray.data[i].images.downsized['url'];
		}
	})
};


</script>


<!-- #### HTML CODE #### -->

<main>
    <head>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
    <body>
       <div class="search">
          <input type="text" class="searchTerm" bind:value = {phrase} placeholder="search for a gif!">
          <button type="submit" class="searchButton" on:click={findGIPHY(phrase)}>
          <i class="fa fa-search"></i>
          </button>
       </div>
       <div class="gif-layout" >
          {#each gifs as gif}
          <img alt="gif" src={gif}/>
          {/each} 
       </div>
    </body>
 </main>


<!-- #### CSS CODE #### -->

<style> main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
}
img{
    width: 100%;
    height: auto;
    border-radius: 1rem;
    margin-bottom: 1rem;
}
.gif-layout{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
    margin-top: 5rem;
}
.search {
    display:flex;
    margin-left: auto;
    margin-right: auto;
    width: 10em;
}
.searchTerm {
    width: 100%;
    position: relative;
    border: 3px solid #00B4CC;
    border-right: none;
    height: 20px;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: #9DBFAF;
    padding-bottom: 0.93rem;
    padding-top: 0.94rem;
}
.searchTerm:focus{
    color: #00B4CC;
}
.searchButton {
    width: 40px;
    height: 36px;
    border: 1px solid #00B4CC;
    background: #00B4CC;
    text-align: center;
    color: #fff;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-size: 20px;
}
@media (min-width: 640px) {
    main {
        max-width: none;
   }
}
</style>