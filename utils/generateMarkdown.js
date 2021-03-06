// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license, color) {
  return `![license](https://img.shields.io/badge/license-${license}-${color})`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None"){
    return `\n* [License](#license)`
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None"){
  return `## License
  \nThis project is using the ${license} license`
}
return ""
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {


  return `# ${data.title}

  ${renderLicenseBadge(data.license, data.color)}
  NEED CHOSEN LICENSE IMAGE

  ## Description
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  
  * [Usage](#usage)

    ${renderLicenseLink(data.license)};

  * [Contributing](#contributing)

  * [Guidelines](#guidelines)

  * [Testing](#testing)

  * [Questions](#questions)
  
  ## Installation

  ${data.installation}
  
  ## Usage

  ${data.usage}

${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contribution}

  ## Testing

  ${data.test}

  ## Questions

  Any questions? Email me at ${data.email}.

  You can see more of my work at [!${data.username}](https://github.com/${data.username})

`;
}

module.exports = generateMarkdown;
