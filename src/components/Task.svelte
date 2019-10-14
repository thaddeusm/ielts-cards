<script>
import Countdown from './Countdown.svelte';
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

export let task;
let stage = 'Prepare';

function startTask() {
	stage = 'Speak';
}

function endTask() {
	stage = 'End';
}

function reset() {
	dispatch('reload')
}
</script>

<style>
@keyframes fade {
	from {opacity: 0;}
	to {opacity: 1;}
}

@media screen and (min-width: 400px) {
	main {
		background: var(--dark-gray);
		margin: 50px;
		padding: 15px 0;
	}
}

.container {
	display: grid;
	padding: 0 20px;
	height: 100%;
	grid-template-rows: 20% 1fr 20%;
	align-items: center;
}

header {
	text-align: center;
}

h3 {
	color: var(--red);
}

h5 {
	color: var(--yellow);
	text-align: center;
	margin: 30px 0;
}

p {
	color: var(--light-gray);
	max-width: 250px;
	margin: 15px auto;
}

footer {
	text-align: center;
}

button {
	border-radius: .5em;
	animation-name: fade;
	animation-duration: 1s;
	animation-timing-function: ease-in-out;
}

.large {
	padding: .4em .8em;
	background: var(--yellow);
	display: block;
	margin: 0 auto;
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
			{stage}
		</h3>
	</header>
	<main>
		<h5>
			{task.prompt}
		</h5>
		{#each task.questions as question}
			<p>{question}</p>
		{/each}
	</main>
	<footer>
		{#if stage == 'End'}
			<button class="large" on:click={reset}>Back</button>
		{:else}
			<button class="large" on:click={reset}>Quit</button>
		{/if}
	</footer>
</div>

{#if stage == 'Prepare'}
	<Countdown seconds="{60}" on:stopped={startTask} />
{:else if stage == 'Speak'}
	<Countdown seconds="{120}" on:stopped={endTask} />
{:else}
	<Countdown pauseCountdown="{true}" />
{/if}