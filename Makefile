pdf:
	pandoc thesis.md -s -V papersize=b5paper -V documentclass=book -o thesis.pdf

tex:
	pandoc thesis.md -s -V papersize=b5paper -V documentclass=book -o thesis.tex

latex: tex
