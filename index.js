

const fs = require("fs");
const inquirer = require("inquirer");
let userData;

inquirer
	.prompt([
		{
			type: "input",
			message: "Project Name: ",
			name: "title",
		},
		{
			type: "input",
			message: "Project Description: ",
			name: "description",
		},
		{
			type: "input",
			message: "Table of Contents",
			name: "toc",
		},
		{
			type: "input",
			message: "Installation: ",
			name: "installation",
		},
		{
			type: "input",
			message: "Usage: ",
			name: "usage",
		},
		{
			type: "credits",
			message: "Lisence: ",
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
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link 
         href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap"
         rel="stylesheet">
		<link rel="stylesheet" href="index.css" />
	</head>
    <body>
        <h2><b>Project Name:</b></h2>
        <p>${userData.title}</p>
        <h2><b>Description:</b></h2>
        <p>${userData.description}</p>
        <h2><b>Table of Contents:</b></h2>
        <p>${userData.toc}</p>
        <h2><b>Installation:</b></h2>
        <p>${userData.installation}</p>
        <h2><b>Usage:</b></h2>
        <p>${userData.usage}</p>
        <h2><b>Credits:</b></h2>
        <p>${userData.credits}</p>
        <h2><b>Lisence:</b></h2>
        <p>${userData.lisence}</p>
	

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

		fs.writeFile("README.html", myString, (err) =>
			err ? console.log(err) : console.log("commit logged!")
		);
	});
