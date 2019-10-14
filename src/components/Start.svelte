<script>
import Countdown from './Countdown.svelte';
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

export let tags = [];

function requestPrompt() {
	dispatch('requestRandom');
}
</script>

<style>
@keyframes fade {
	from {opacity: 0;}
	to {opacity: 1;}
}

.container {
	display: grid;
	border: 10px solid var(--gray);
	min-height: 100%;
	grid-template-rows: 30% 10% 1fr;
	align-items: center;
}

header {
	text-align: center;
}

h3 {
	color: var(--white);
}

h5 {
	color: var(--light-gray);
	margin: 20px 0;
}

main {
	
}

footer {
	text-align: center;
	margin-bottom: 40px;
}

button {
	animation-name: fade;
	animation-duration: 1s;
	animation-timing-function: ease-in-out;
}

.large {
	padding: .4em .8em;
	background: var(--yellow);
	display: block;
	margin: 0 auto;
	border-radius: .5em;
}

.small {
	margin: 15px;
	background: none;
	color: var(--yellow);
}
</style>

<div class="container">
	<header>
		<h3>
			IELTS Speaking
		</h3>
		<h5>
			Task 2 Practice
		</h5>
	</header>
	<main>
		<button class="large" on:click={requestPrompt}>Random</button>
	</main>
	<footer>
		{#each tags as tag}
			<button class="small" on:click={() => dispatch('requestByTag', tag)}>{tag}</button>
		{/each}
	</footer>
</div>