## Analysis of Text Generation Metrics

### Overview

This are results and comparisons of BLEU and ROUGE.

### BLEU Score Analysis

BLEU (Bilingual Evaluation Understudy) is used for evaluating the quality of machine-generated translations against a set of reference translations.

- **Cleaned Data**: `BLEU Score = 0.0046`
- **Not Cleaned Data**: `BLEU Score = 0.0058`

#### Observations:

The BLEU score is marginally higher for the not cleaned data, although both scores are low, indicating room for improvement.

### ROUGE Score Analysis

ROUGE (Recall-Oriented Understudy for Gisting Evaluation) evaluates the quality of summaries by comparing them to reference summaries.

#### ROUGE-1

- **Cleaned Data**: `F-measure Mid = 0.0601`
- **Not Cleaned Data**: `F-measure Mid = 0.0575`

#### ROUGE-2

- **Cleaned Data**: `F-measure Mid = 0.0073`
- **Not Cleaned Data**: `F-measure Mid = 0.0088`

#### ROUGE-L

- **Cleaned Data**: `F-measure Mid = 0.0467`
- **Not Cleaned Data**: `F-measure Mid = 0.0475`

#### Observations:

The F-measure is slightly higher for the not cleaned data in ROUGE-2 and ROUGE-L metrics, indicating minor advantages.

### Summary

Both cleaned and not cleaned data show similar performance across BLEU and ROUGE metrics, with the not cleaned data having a slight edge. Nonetheless, the scores are low, suggesting there is much room for improvement.
