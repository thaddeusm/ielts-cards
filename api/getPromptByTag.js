import options from './prompts.json'

const getRandomOptionByTag = function(tagChoice) {
	// isolate prompts with matching tag
	let allPrompts = options.prompts
	let matches = []

	for (let i=0; i<allPrompts.length; i++) {
		let prompt = allPrompts[i]

		let found = false
		for (let k=0; k<prompt.tags.length; k++) {
			let tag = prompt.tags[k]

			if (tag == tagChoice) {
				found = true
				break
			}
		}

		if (found) {
			matches.push(prompt)
			break
		}
	}

	let randomNum = Math.floor(Math.random() * matches.length)

	return matches[randomNum]
}

module.exports = (req, res) => {
	let tag = req.query.tag

	let option = getRandomOptionByTag(tag)

	return res.status(200).json(option)
}