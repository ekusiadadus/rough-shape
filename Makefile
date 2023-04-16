.phony:

build:
	yarn build

dev:
	yarn dev

preview:
	yarn preview

env:
	export $(cat .env | xargs)

