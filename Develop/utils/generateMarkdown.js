// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'no license') {
        return `
        ![badge](https://img.shields.io/badge/license-${license}-red)`
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== 'no license') {
        return `
        [${license}](https://choosealicense.com/licenses/${license})
        `;
    } else {
        return ' ';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== 'no license') {
        return `
        ## [License](#table-of-contents)
        This project has the following license:
        ${renderLicenseLink(license)}
        `;
    } else {
        return ' ';
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  To install what is necessary for this project, run the following:
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  This project uses the ${data.license} license.
  ## Contributing
  ${data.contribution}
  ## Tests 
  ${data.tests}
  ## Questions
  [Github Profile](https://github.com/${data.userName}/)
  You can reach me at ${data.email}.

`;
}

module.exports = generateMarkdown;
