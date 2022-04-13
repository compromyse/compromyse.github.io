main:
	bundle exec jekyll build
	rm -rf ../compromyse.github.io/*
	mv _site/* ../compromyse.github.io/
	rm -rf _site
	cd ../compromyse.github.io