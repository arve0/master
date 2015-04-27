# Abstract
This thesis will go through a semi-automatic method for collecting microscope images of breast tissue micro arrays and how they can be analyzed for a supplement in breast cancer diagnosis. The overall research goal has been to classify cancer degree (I, II or III: does this classification have a name?) based on the fiber structure in the tissue samples. The analysis method discussed is supervised machine learning, where St. Olavs hospital has supplied a dataset of tissue samples at the tumor peripheral from 924 (TODO update excact number) patients.
> ML: Du må legge vekt på de tekniske aspektene som tross alt har tatt mesteparten av tiden så langt...utviklet programvare for mikroskopkommunikasjon, oppretting av prøver, rotasjon...etc.

Pathologists suggest that aggressiveness of a tumor is related to how fiber is aligned at the tumor peripheral. In example straight aligned fibers can be a sign that tumor cells have modified the stroma to promote spreading of cells. The alignment of fibers is a feature which can be extracted by image processing. Since several techniques to extract features is imaginable, supervised machine learning is practical for finding novel approaches.
> ML: Dette passer bedre i introduksjonsdelen. Abstract skal ha svært lite bakgrunn, mest hva som er gjort og hva resultatene var. Hvorfor det er viktig kommer i hovedteksten

Results on the dataset was positive/negative. Details on the result.

A proposal for further research with the same dataset is extracting more features from the images and use equivalent methods to find relationships to the clinic data. IF POSITIVE RESULT: Collecting tissue sample is a part of the standard procedure in breast cancer diagnosis at St. Olavs hospital, and one can do the analysis described in this thesis to further confirm or falsify the result.





# Introduction
With a population just above 5 million [1], Norway diagnoses three thousand women with breast cancer each year [2]. This makes breast cancer the most common kind of cancer, affecting one of every eleventh woman. Luckily the cancer form is often treatable, and in 2012 there was 649 fatalities caused by breast cancer [3]. Diagnosis

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

> ML: En hoveddel i arbeidet har vært automatiseringen av TMA. Skrive noe om TMA og hvorfor automatisert analyse er nødvendig...skal lede opp til en beskrivelse av de tekniske utfordringene som er løst.

# Theory
> ML: I denne delen bør man primært ha med teori som er nødvendig for å forstå det som kommer i metodedelen. Altså ikke skriv for mye her før strukturen og innholdet er mer klart.)

## Tumor stroma
> ML: Tenker kanskje at biologien kan holdes til introduksjonen, ettersom hovedaspektet av oppgaven er teknisk.)

## Image Processing
## Scanning microscope
focal volume
## Nonlinear light interaction


# Method
## Collection of SHG images
- alignment of z-plane
- finding tissues in micro array
- correlation with patient data (sample map and clinic data)
> ML: Kan også skrive om spesifikke aspekter ved mikroskopsystemet som har muliggjort/begrenset/forhindret løsningene. All programvare som er utviklet bør omtales her, eventuelt med mer detaljer i et appendiks)


# Result
> ML: Resultat så langt: Kontroll via Python, segmentering, z-correction





# Discussion
> ML: Hvilke valg har blitt tatt, hva er viktig for neste bruker, hva er begrensninger, utviklingsmuligheter, pros/cons, hvor bra fungerer det....)



# Conclusion
> ML: Automatic imaging and segmentation of TMA has been demonstrated)...and....
