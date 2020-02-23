const fs = require('fs');
if (!fs.existsSync('public')) fs.mkdirSync('public');
console.info(`In browser: ${require('os').hostname()}:${require('http').createServer((req, res) => {
	let text = '';
	req.on('data', d => text += d).on('end', () => {
		if (req.url === '/favicon.ico') return res.end('');
		if (text) fs.writeFileSync(req.url.slice(1), text);
		const code = fs.readdirSync('public').reduce((code, name) => {
			const content = fs.readFileSync(`public/${name}`).toString();
			if (name.endsWith('.css')) {
				code.css.push(`<style data-id="${name}">`, `  ${content}`, `</style>`);
			} else if (name.endsWith('.html')) {
				code.html.push(`<!-- start ${name} -->`, content, `<!-- end ${name} -->`);
			} else if (name.endsWith('.js')) {
				code.js.push(`<script data-id="${name}">`, content, `</script>`)
			}
			return code;
		}, {css: [], html: [`<body>`], js: [
			`<script>`,
			`  function code(name, body) {`,
			`    fetch('/public/' + name, {method: 'POST', body}).then(() => location.reload());`,
			`  }`,
			`</script>`
		]});
		res.end(code.css.concat(code.html).concat(code.js).join('\n'));
	});
}).listen('7878').address().port}`);