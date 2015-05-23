# master thesis in physics
I'm studying Natural Science with Teacher Education at [NTNU](//www.ntnu.no). This is my work on the final thesis.

Read it: [Web](thesis_web.md) / [PDF] (thesis_web.pdf)


# latex setup
To build .tex, .pdf or .html files one needs pandoc >= 1.14 which is not available in binary as of may 2015, and must be installed from [source](https://github.com/jgm/pandoc).

Additional the filters

- [pandoc-crossref](https://github.com/lierdakil/pandoc-crossref)
- [pandoc-citeproc](https://github.com/jgm/pandoc-citeproc)

are required (`cabal install pandoc-crossref pandoc-citeproc`).

For more details on .pdf generation, see the [Makefile](Makefile).

