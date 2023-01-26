#!/bin/bash
rm -rf compromyse.github.io/*
bundle exec jekyll build
mv _site/* compromyse.github.io/
