main:
	bundle exec jekyll build
	bash -c "rm -rf ../compromyse.github.io/\!("CNAME")"
	mv _site/* ../compromyse.github.io/
	rm -rf _site
	cd ../compromyse.github.io