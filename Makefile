PANDOC_SETTINGS=-s \
		--filter pandoc-crossref \
		--filter pandoc-citeproc \
		--template latex_template/pandoc.tex \
		-V graphics \
		-V fontsize=10pt \
		-V classoption=twoside \
		-V papersize=b5paper \
		-V documentclass=book
HTML_SETTINGS=-s \
	      --filter pandoc-crossref \
	      --filter pandoc-citeproc \
	      --toc
WEB_SETTINS=-V geometry=lmargin=15mm,rmargin=15mm,tmargin=27mm,bmargin=30mm \

default: thesis_web.pdf
	open thesis_web.pdf

tex: latex
latex:
	pandoc thesis.md $(PANDOC_SETTINGS) -o thesis.tex

texpdf: thesis_web.tex
	pdflatex -interaction=batchmode thesis_web.tex
	open thesis_web.pdf


pdf: thesis.md
	pandoc thesis.md $(PANDOC_SETTINGS) -o thesis.pdf

thesis_web.tex: thesis_web.md
	pandoc thesis_web.md $(PANDOC_SETTINGS) -o thesis_web.tex

thesis_web.md: thesis.md
	python web_figures.py

thesis_web.pdf: thesis_web.md
	pandoc thesis_web.md $(PANDOC_SETTINGS) -o thesis_web.pdf

html: thesis_web.md
	pandoc thesis_web.md $(HTML_SETTINGS) thesis.html
	open thesis.html
