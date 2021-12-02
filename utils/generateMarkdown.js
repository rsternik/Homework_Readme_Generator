// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  let badges = {

    'GNU LGPLv3': `![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)`,

    'APACHE 2.0': `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`,

    'MPL 2.0': `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`,

    'unlicensed': '',

  }
  return badges[license]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  let licenseUrl = {

    'GNU LGPLv3': `https://www.gnu.org/licenses/gpl-3.0`,

    'APACHE 2.0': `https://opensource.org/licenses/Apache-2.0`,

    'MPL 2.0': `https://opensource.org/licenses/MPL-2.0`,

    'unlicensed': '',

  }
  return licenseUrl[license]
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  return `Licensed using ${license}. More information can be found at ${renderLicenseLink(license)}`

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Table of Contents
  
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contribution](#contribution)
5. [Test](#test)
6. [License](#test)
7. [Github](#github)

${renderLicenseBadge(data.license)}
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Contribution
${data.contribution}
## Test Instructions
${data.test}
## License
${renderLicenseSection(data.license)}
## Github
Checkout my github here ${data.username}
## Contact
If you have any questions please email me at ${data.email}

`;
}

module.exports = generateMarkdown;
