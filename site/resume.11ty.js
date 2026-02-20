class Resume {
	data() {
		return {
			permalink: '/resume.json',
		}
	}

	render(data) {
		return JSON.stringify(data.resume);
	}
}

module.exports = Resume;
