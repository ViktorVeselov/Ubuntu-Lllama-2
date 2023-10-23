# Repository Overview

This repository contains all the essential components and final results of our project. The primary contents are organized in the `Final Folder`.

## Directory Structure

```
.github
├── workflows
│   └── python-package-conda.yml
Final Folder
├── Chatbot Interface
│   └── Gradio_Chatbot.ipynb #Bin
├── Conclusion
│   └── Final Report.doc #Bin/Isaack/Viktor
├── Dataset
│   ├── Data_Analysis_and_Trivial_Modeling.ipynb #Viktor
│   └── Data_Cleanup.ipynb #Isaack
├── Model Selection
│   ├── Final_Linux_CodeLlama_2__Fine_tuning_v2.ipynb #Viktor
│   ├── Llama_2_Fine_tuning_v2.1.ipynb #Bin
│   ├── Photos.jpeg
│   ├── QLora _1.jpeg
│   ├── Team6_Advanced_Chatbot Desigin.ipynb #Isaack
│   └── flan_t5_fine_tune.ipynb
└── Performance and Evaluation
│   ├── Llama 2 Models BLEU and ROUGE Metrics.xlsx
│   └── Performance and Evaluation.docx
LICENCE.md
```
Before using this reposatory, for your personal convinience, run `python-package-conda.yml` that creates conda (anaconda) environment and set all dependencies for both Python and Java.
### Folder Descriptions
- **Chatbot Interface** Include interface for chatbot
- **Conclusion**: Contains the final report summarizing the project's outcomes.
- **Dataset**: Includes Jupyter notebooks for initial data analysis and data cleaning.
- **Model Selection**: Houses various Jupyter notebooks detailing the fine-tuning processes for different models.
- **Performance and Evaluation**: Reserved for performance metrics and evaluation results.

# Disclaimer
<b>Ubuntu_Llama_Chat_7B </b><br>
Ubuntu_Llama_Chat_7B is a fine-tuned model based on Llama 2 Chat 7b base model and fine-tuned on the data set Ubuntu Dialogue Corpus <br>
<br>

## Acknowledgments

### Base Model: Llama-2-7b-chat-hf
- We utilized the Llama2 Chat 7b model as the base model for our project. The model was obtained from [meta-llama/Llama-2-2b-chat-hf](https://huggingface.co/meta-llama/Llama-2-7b-chat-hf).
- Special thanks to [AI at Meta](https://ai.meta.com/llama/) for providing the model and the community around it for the support.
- License: A custom commercial license is available at: https://ai.meta.com/resources/models-and-libraries/llama-downloads/.

### Fine-Tune Dataset
- The fine-tuning was performed on [Ubuntu Dialogue Corpus](https://www.kaggle.com/datasets/rtatman/ubuntu-dialogue-corpus) dataset, which was crucial for achieving the results.
- The dataset is provided under [Apache License, 2.0](https://www.apache.org/licenses/LICENSE-2.0) license. We thank [Ryan Lowe, Nissan Pow , Iulian V. Serban, and Joelle Pineau](http://www.sigdial.org/workshops/conference16/proceedings/pdf/SIGDIAL40.pdf) for making the dataset publicly available.
- Ryan Lowe, Nissan Pow, Iulian V. Serban and Joelle Pineau, "The Ubuntu Dialogue Corpus: A Large Dataset for Research in Unstructured Multi-Turn Dialogue Systems", SIGDial 2015. URL: http://www.sigdial.org/workshops/conference16/proceedings/pdf/SIGDIAL40.pdf
