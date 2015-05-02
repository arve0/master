# Abstract
This thesis will go through a semi-automatic method for collecting microscope images of breast tissue micro arrays and how they can be analyzed for a supplement in breast cancer diagnosis. The overall research goal has been to classify cancer degree (I, II or III: does this classification have a name?) based on the fiber structure in the tissue samples. The analysis method discussed is supervised machine learning, where St. Olavs hospital has supplied a dataset of tissue samples at the tumor peripheral from 924 (TODO update excact number) patients.

Pathologists suggest that aggressiveness of a tumor is related to how fiber is aligned at the tumor peripheral. In example straight aligned fibers can be a sign that tumor cells have modified the stroma to promote spreading of cells. The alignment of fibers is a feature which can be extracted by image processing. Since several techniques to extract features is imaginable, supervised machine learning is practical for finding novel approaches.

Results on the dataset was positive/negative. Details on the result.

A proposal for further research with the same dataset is extracting more features from the images and use equivalent methods to find relationships to the clinic data. IF POSITIVE RESULT: Collecting tissue sample is a part of the standard procedure in breast cancer diagnosis at St. Olavs hospital, and one can do the analysis described in this thesis to further confirm or falsify the result.





# Introduction
With a population just above 5 million [1], three thousand women are diagnosed with breast cancer each year [2] in Norway. This makes breast cancer the most common kind of cancer, affecting one of every eleventh woman. Luckily the cancer form is often treatable, and in 2012 there was 649 fatalities caused by breast cancer [3]. The diagnosis is an act of several steps, and currently contains the following at St. Olavs hospital:

- x-ray mammography
- ultra sound screening
- tissue sample(s)

In particular, pathologists

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




# Theory
## Tumor stroma
## Image Processing

ORB and Ransac [1]
[1]: https://peerj.com/articles/453/#p-1
## Scanning microscope
focal volume
## Nonlinear light interaction





# Method
## Collection of SHG images
- alignment of z-plane
- finding tissues in micro array
- correlation with patient data (sample map and clinic data)





# Result






# Discussion




# Conclusion
