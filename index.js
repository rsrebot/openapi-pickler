var generator = require('resttestsgenerator');

var url = 'https://petstore.swagger.io/v2/swagger.json'

// If generating from local file system
// var fileUrl = require('file-url');
// var url = fileUrl('instagram.json');

var results = generator.generateFromSwagger(JSON.stringify(url), {
	generators: ["Gherkin"]
});

results.then(function(result) {
	if (typeof result == 'object') {
		for (let r of result.results) {
			for (let f of r.files) {
				console.log(f.contents);
			}
		}
	}
});
