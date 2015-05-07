# Abstract

What to communicate: goal, overview of experiences made, results

This thesis documents work on automatic microscope imaging of breast tumor tissue micro arrays and how the images can be analyzed for a supplement in cancer diagnosis. The overall research goal has been to classify tumor grade (I, II or III) based on the fiber structure in the tissue samples. Supervised machine learning is the method of analysis, where St. Olavs hospital has supplied a dataset of tissue samples at the tumor peripheral from 924 (TODO update excact number) patients.

Automated microscope scanning is in principle straight forward, but the implementation will be dependent on many aspects of the experimental setup. In general, some of the aspects discussed in this thesis are:

- correcting for systematic errors like intensity variations
- create image analysis algorithms that are robust to experimental variations
- verify that metrics reported by the system are the real physical ones
- finding good compromises between time, signal quality and ease of measurement
- scanning mirror- versus stage coordinate system and reliable stitching
- writing cross-platform software

The general aspects listed above are not unique to the experiments and experimental setup, and could potentially be useful for others. But this thesis will also address issues directly associated to tissue micro arrays and the Leica SP8 microscope:

- adjusting z-plane for large area samples with micrometer precision
- working around Leica software limitations

Results on the dataset was positive/negative. Details on the result.

A proposal for further research with the same dataset is extracting more features from the images and use equivalent methods to find relationships to the clinic data. IF POSITIVE RESULT: Collecting tissue sample is a part of the standard procedure in breast cancer diagnosis at St. Olavs hospital, and one can do the analysis described in this thesis to further confirm or falsify the result.





# Introduction

What to communicate: motivation, brief summary of chapters

With a population just above 5 million [1], three thousand women are diagnosed with breast cancer each year [2] in Norway. This makes breast cancer the most common kind of cancer, affecting one of every eleventh woman. Luckily the cancer form is often treatable, and in 2012 there was 649 fatalities caused by breast cancer [3]. The diagnosis is an act of several steps, and currently contains the following at St. Olavs hospital:

- x-ray mammography
- ultra sound screening
- tissue sample(s)

In particular, pathologists suggest that aggressiveness of a tumor is related to how fiber is aligned at the tumor peripheral. In example straight aligned fibers can be a sign that tumor cells have modified the stroma to promote spreading of cells. The alignment of fibers is a feature which can be extracted by image processing. Since several techniques to extract features is imaginable, supervised machine learning is practical for finding novel approaches.

[1]: https://www.ssb.no/befolkning/statistikker/folkemengde
[2]: http://www.stolav.no/Pasient/Pasientforlop/Pasientforlop/Kreftsykdommer/Behandling-av-brystkreft/130731/
[3]: https://www.ssb.no/dodsarsak

From report - may use some of this:
Over three million published articles on pubmed with keyword cancer shows
the huge research effort for understanding, diagnosing and treating cancer
diseases. The research focus is mainly on tumor cells, but a segment of
interest which is increasing is research on tumor stroma as seen in figure
1.1.

Figure 1.1: Amount of published articles by year on different search terms. The search term tumor cells outnumber the others by two orders of magnitude. Note the logarithmic scale on y-axis.

Tumor stroma is the environment of cells, and it can be suppressing
or supporting the function of the tumor cells. It is suggested that in
the development of a tumor, the stroma is changing from being suppressive to
supportive of the tumor cells [TODO REF].

In particular, collagen fiber is known to be altered in the surroundings of
tumor cells under the development towards metastasis. One bio-marker for
collagen fibers, is their alignment at the vincinity of the tumor, which may
predict if a tumor is malignant. The fiber alignment can be used as a
diagnosis tool for malignant tumor, and an article written at NTNU have
studied collagen fiber alignment in a manual qualitative manner.

St. Olav hospital have breast tissue samples from 900 pasients along with
clinical data. In total three samples per pasient, one sample inside, one sample at the boundary and one sample outside the tumor. The samples is laid in a matrix on a glass slide, each glass slide having about 130 samples. As microscope scanning and analysis of such a large data set is not straightforward, this project have explored possibilities for automating the process.

To be specific, this thesis will describe method and results for
- parameters for obtaining quality SHG images
- effective way to scan whole glass slides of 126 samples
- machine learning and correlation to clinical data

-> ML: En hoveddel i arbeidet har vært automatiseringen av TMA. Skrive noe om TMA og hvorfor automatisert analyse er nødvendig...skal lede opp til en beskrivelse av de tekniske utfordringene som er løst.


# Theory

What to communicate: theory and details that are not obvious for understanding the rest of the text

-> ML: I denne delen bør man primært ha med teori som er nødvendig for å forstå det som kommer i metodedelen. Altså ikke skriv for mye her før strukturen og innholdet er mer klart.)

## Image Processing

ORB and Ransac [1]
[1]: https://peerj.com/articles/453/#p-1
## Scanning microscope
focal volume
## Nonlinear light interaction





# Method

What to communicate: experimental setup to reproduce results, limitations/obstacles specific to our experimental setup, brief description of software modules in use

## Collection of SHG images
- alignment of z-plane
- finding tissues in micro array
- correlation with patient data (sample map and clinic data)

## Technical details
### Hardware aspects
- z-plane off by several hundreds of micrometer
  - piezo-holder was tilted
  - samples not necessarily straight, coverslip placement
  - too much tilt: out of focus in one image
  - tolerated tilt and software autofocus: stitching when edge not from same physical area (especially thick samples)
- signal variations and chosen optimum
  - collector 0.55 vs 0.9 when overview vs SHG
  - aperture not adjustable from software, resets when using occular
  - hard to get same conditions every time (might move to discussion: suggest using test sample routine along with image analysis)
- rotation scanning mirror
  - stitch
  - finding angle with image registration / phase correlation
- edge of image, intensity variation
  - zoom
  - correction for overview vs SHG
- HyD shutdown too much light
  - HyD behind mirror might get less light, but still good signal
  - pinhole adjustment for HyD behind mirror to avoid bright spots?
- reported resolution from LAS not same as stage movement
  - use image registration to calculate px-resolution
  - calibration of measurement-equiptment
  - what measurement to trust
- outage and service
  - logging, feedback and communication between researchers
  - service contracts



### Leica software details
The microscope software in use was Leica LAS X version TODO.

- loading template with variable positioned wells not working
  - offset first well will offset all wells
  - Properties/XStartPosition not used
  - no "template-type" property
  - must be loaded in GUI first time
    - through CAM opens GUI dialog "Import?"
- CAM only available after manually loading a template in GUI
  - GUI automation
- loading modified template with same name
- loading templates automatic goes to position and changes objective
  - crashes possible
  - trouble if using imersion objective
- switching between AF / job in GUI will automatically switch objective without warning
  - trouble if using imersion objective
- mix of 0-indexed and 1-index variables
  - files 0 indexed
  - cam 1 indexed
  - xml 1 indexed (TODO: verify)
- GUI hangs if socket is not read
- loading template should omit .xml from filename
  - saving template should not
  - not noted in documentation
  - "templ.xml.xml not found"
- save template does not update with latest changes in GUI
- XML does not read when missing return char "\r"
  - not in XML specification
- z-position in template not read
- z-position from CAM sometimes gives "0" instead of real position
- adjusting x/y-coordinate on USB-control panel moves stage to zero or max position

### Software development
- Separate of concerns
  - modules and code reuse
  - publication of software packages and python ecosystem
- leicacam: talking with microscope
- leicascanningtemplate: modify templates
- leicaexperiment: read, stitch, ome.tif experiments
- microscopestitching: reliable stitching with phase corralation (remove outliers vs median)
- leicaautomator: find regions to scan, unifies all of the above
- python cross platform and compilation
  - heavy c/c++ dependency
  - miniconda
  - wheel packages

Utilities (not specific thesis):
- fijibin: automate fiji/imagej from python
- ipynbcompress: compress images in ipython notebooks


-> ML: Kan også skrive om spesifikke aspekter ved mikroskopsystemet som har muliggjort/begrenset/forhindret løsningene. All programvare som er utviklet bør omtales her, eventuelt med mer detaljer i et appendiks)




# Result
What to communicate: achievements and show-stopper/hard limitations

-> ML: Resultat så langt: Kontroll via Python, segmentering, z-correction





# Discussion
What to communicate:

-> ML: Hvilke valg har blitt tatt, hva er viktig for neste bruker, hva er begrensninger, utviklingsmuligheter, pros/cons, hvor bra fungerer det....)



# Conclusion
What to communicate: brief summary of the result and discussion, advice for further work

-> ML: Automatic imaging and segmentation of TMA has been demonstrated)...and....
