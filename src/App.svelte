<script>
import Countdown from './components/Countdown.svelte';
import Start from './components/Start.svelte';
import Task from './components/Task.svelte';
import { onMount } from "svelte";

let prompt = '';
let tags = [];
$: loaded = prompt !== '';

onMount(async () => {
	const res = await fetch("/api/getTags");
	tags = await res.json();
});

let pauseCountdown = true;

const getRandomPrompt = async () => {
	const res = await fetch("/api/index");
	prompt = await res.json();
}

const getRandomPromptByTag = async (event) => {
	let tag = event.detail;

	let str = `/api/getPromptByTag.js?tag=${tag}`;

	const res = await fetch(str);
	prompt = await res.json();
}

function reset() {
	prompt = '';
}

</script>

<style>

</style>


{#if !loaded}
	<Start on:requestRandom={getRandomPrompt} on:requestByTag={getRandomPromptByTag} {tags} />
{:else}
	<Task task={prompt} on:reload={reset} />
{/if}