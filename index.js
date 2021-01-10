console.log("sup ya heathens");

const fs = require("fs");
const inquirer = require("inquirer");
let userData;

inquirer
	.prompt([
		{
			type: "input",
			message: "project name: ",
			name: "title",
		},
		{
			type: "input",
			message: "project description: ",
			name: "description",
		},
		{
			type: "input",
			message: "table of contents",
			name: "toc",
		},
		{
			type: "input",
			message: "installation",
			name: "installation",
		},
		{
			type: "input",
			message: "usage",
			name: "usage",
		},
		{
			type: "credits",
			message: "lisence",
			name: "lisence",
		},
	])
	.then((response) => {
		userData = response;
		const myString = `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<title>READMEwritter</title>
		<meta name="description" content="" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<!-- bootstrap -->
		<link
			rel="stylesheet"
			href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
			integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
			crossorigin="anonymous"
		/>
		<!-- font awesome -->
		<link rel="stylesheet" href="index.css" />
	</head>
	<body>
		<h1>hello cruel world.</h1>
		<h3>is ya girl, dumpster princess.</h3>

		<h1>name: ${userData.title}</h1>
		<h1>location: ${userData.description}</h1>
		<h1>bio: ${userData.installation}</h1>
		<h1>linkedin: ${userData.usage}</h1>
		<h1>github: ${userData.input}</h1>
        <h1>color: ${userData.credits}</h1>
        
        <h1>Project Name:</h1>
        <h3>${userData.credits}</h3>
        <h1>Description:</h1>
        <h3>${userData.credits}</h3>
        <h1>Table of Contents:<h1>
        <h3>${userData.input}</h3>
        <h1>Installation:</h1>
        <h3> ${userData.input}</h3>
        <h1>Usage:</h1>
         ${userData.input}
        <h1>Credits:</h1>
         ${userData.input}
	

		<!-- jquery -->
		<script
			src="https://code.jquery.com/jquery-3.5.1.min.js"
			integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
			crossorigin="anonymous"
		></script>
		<script
			src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
			integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
			crossorigin="anonymous"
		></script>
		<script
			src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
			integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
			crossorigin="anonymous"
		></script>
		<script src="index.js" async defer></script>
	</body>
</html>
`;
		// console.log(userData);

		fs.writeFile("index.html", myString, (err) =>
			err ? console.log(err) : console.log("commit logged!")
		);
	});
