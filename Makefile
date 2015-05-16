PANDOC_SETTINGS=-s --filter pandoc-crossref \
		--template latex_template/pandoc.tex \
		--listings \
		-V fontsize=10pt \
		-V geometry=lmargin=10mm,rmargin=10mm,tmargin=27mm,bmargin=30mm \
		-V classoption=twoside \
		-V papersize=b5paper \
		-V documentclass=book \



default: web

pdf:
	pandoc thesis.md $(PANDOC_SETTINGS) -o thesis.pdf

tex:
	pandoc thesis.md $(PANDOC_SETTINGS) -o thesis.tex

latex: tex


web-figures:
	python web_figures.py

web: web-figures
	pandoc thesis_web.md $(PANDOC_SETTINGS) -o thesis_web.pdf
