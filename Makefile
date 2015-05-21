PANDOC_SETTINGS=-s \
		--filter pandoc-crossref \
		--filter pandoc-citeproc \
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

tex: latex
latex:
	pandoc thesis.md $(PANDOC_SETTINGS) -o thesis.tex

texpdf:
	pandoc thesis.tex -o thesis.pdf


pdf: thesis.md
	pandoc thesis.md $(PANDOC_SETTINGS) -o thesis.pdf


thesis_web.md: thesis.md
	python web_figures.py

thesis_web.pdf: thesis_web.md
	pandoc thesis_web.md $(PANDOC_SETTINGS) -o thesis_web.pdf

thesis.html: thesis_web.md
	pandoc thesis_web.md -s --toc -o thesis.html
	open thesis.html
