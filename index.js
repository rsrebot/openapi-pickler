if (process.argv.length <= 2) {
    console.log("Usage: npm start <url>");
    process.exit(0);
}

var argument = process.argv[2];
var generator = require('resttestsgenerator');

// Either use http/https url or use a fileurl with a relative file path
if (argument.substr(0,4).toLowerCase() == "http") {
  var url = argument
} else {
  var fileUrl = require('file-url');
  var url = fileUrl(argument);
}

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
