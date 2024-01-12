const temp1 = `
The following commits do not follow the [Ammar Commits][cc] rules:
[cc]: https://ammar-sandbox.atlassian.net/wiki/spaces/~640672002/pages/2623465/Tools
`

const temp2 = `
<details>
<summary><b>PR Title/Description Issue</b></summary>
<PLACEHOLDER>
</details>`;
const temp3 = `
<details>
<summary><b>Commits Releted Issue</b></summary>
<DETAILS>
</details>`;
const temp4 = `
--------
You may need to change the PR or [Commit messages][ref] according to [Ammar Standards][cc].
[cc]: https://ammar-sandbox.atlassian.net/wiki/spaces/~640672002/pages/2623465/Tools
[ref]: https://help.github.com/articles/changing-a-commit-message/
[repo]: https://github.com/Ammar-Knowledge/main-bot
`; 

/**
 * Formats array of commits warnings/errors as GitHub comment
 *
 * @param {Array} report
 */
function format(report) {
	if(!report.pr.status && report.commits.length){
		let details = '';
		let message = report.commits.map(c =>`* ${c.sha}=> ${c.title}\n`).join('');
		let pr_error = ` - ✖ Wrong PR Title/Empty Description`;
	
		report.commits.forEach(c => {
			details += `* ${c.sha}=> ${c.title}\n`;
			details += c.errors.map(e => `  - ✖ ${e.message}\n`).join('');
			details += c.warnings.map(w => `  - ⚠ ${w.message}\n`).join('');
		});
		return temp2
		.replace('<PLACEHOLDER>', pr_error)+temp3
		.replace('<DETAILS>', details)+temp4;
	}
	else if(report.commits.length && report.pr.status){
		let details = '';
		let message = report.commits.map(c =>`* ${c.sha}`).join('\n');
		report.commits.forEach(c => {
			details += `* ${c.sha}=> ${c.title}\n`;
			details += c.errors.map(e => `  - ✖ ${e.message}\n`).join('');
			details += c.warnings.map(w => `  - ⚠ ${w.message}\n`).join('');
		});
		return temp3
		.replace('<DETAILS>', details)+temp4;
	}
	else if(!report.commits.length){
		let pr_error = ` - ✖ Wrong PR Title/Empty Description`;
		return temp2
		.replace('<PLACEHOLDER>', pr_error)+temp4;
	}
	

}

module.exports = format;

