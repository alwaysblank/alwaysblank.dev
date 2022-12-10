module.exports = conf => {
	conf.addShortcode("jsonify", function (text) {
		return JSON.stringify(text);
	});
}
