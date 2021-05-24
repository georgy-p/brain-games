install:
	npm ci
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
cli:
	node src/cli.js
brain-even:
	node bin/brain-even.js;
