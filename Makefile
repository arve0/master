PANDOC_SETTINGS=-s --filter pandoc-crossref \
		--template latex_template/pandoc.tex \
		--listings \
		--toc \
		-V fontsize=10pt \
		-V geometry=lmargin=10mm,rmargin=10mm,tmargin=27mm,bmargin=30mm \
		-V classoption=twoside \
		-V papersize=b5paper \
		-V documentclass=book



default: thesis_web.pdf
	open thesis_web.pdf

pdf:
	pandoc thesis.md $(PANDOC_SETTINGS) -o thesis.pdf

tex:
	pandoc thesis.md $(PANDOC_SETTINGS) -o thesis.tex

latex: tex


thesis_web.md: thesis.md
	python web_figures.py

thesis_web.pdf: thesis_web.md
	pandoc thesis_web.md $(PANDOC_SETTINGS) -o thesis_web.pdf
