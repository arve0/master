pdf:
	pandoc thesis.md -s \
		--filter pandoc-crossref \
		--template latex_template/pandoc.tex \
		--listings \
		-V fontsize=10pt \
		-V geometry=lmargin=10mm,rmargin=10mm,tmargin=27mm,bmargin=30mm \
		-V classoption=twoside \
		-V papersize=b5paper \
		-V documentclass=book \
		-o thesis.pdf

tex:
	pandoc thesis.md -s \
		--filter pandoc-crossref \
		--template latex_template/pandoc.tex \
		--listings \
		-V fontsize=10pt \
		-V geometry=lmargin=10mm,rmargin=10mm,tmargin=27mm,bmargin=30mm \
		-V classoption=twoside \
		-V papersize=b5paper \
		-V documentclass=book \
		-o thesis.tex

latex: tex
