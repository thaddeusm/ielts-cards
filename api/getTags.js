import options from './prompts.json'

const getTags = function() {
	// isolate prompts with matching tag
	let allPrompts = options.prompts
	let tags = []

	for (let i=0; i<allPrompts.length; i++) {
		let prompt = allPrompts[i]

		for (let k=0; k<prompt.tags.length; k++) {
			let tag = prompt.tags[k]

			if (tags.indexOf(tag) == -1) {
				tags.push(tag)
			}
		}
	}

	return tags
}

module.exports = (req, res) => {
	let tags = getTags()

	console.log(tags)

	return res.status(200).json(tags)
}