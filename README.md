## Resources
[![GitHub Repo stars](https://img.shields.io/github/stars/your-github-username/your-repo-name?style=social)]([https://github.com/your-github-username/your-repo-name/stargazers](https://github.com/SweatyCrayfish/Ubuntu-Lllama-2/stargazers))
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/your-github-username/your-repo-name/blob/main/LICENSE.md)
[![Watch on YouTube](https://img.shields.io/badge/YouTube-Watch-red?style=social&logo=youtube)](https://youtu.be/NWtYlHZf7RQ?si=k8sC-HetEAbWQcbm)

This is a hyper link to BLUE and ROGUE scores [README.md](https://github.com/SweatyCrayfish/Ubuntu-Lllama-2/blob/main/Final%20Folder/Performance%20and%20Evaluations/README.md)
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
### Folder Descriptions
- **Chatbot Interface** Include interface for chatbot
- **Conclusion**: Contains the final report summarizing the project's outcomes.
- **Dataset**: Includes Jupyter notebooks for initial data analysis and data cleaning.
- **Model Selection**: Houses various Jupyter notebooks detailing the fine-tuning processes for different models.
- **Performance and Evaluation**: Reserved for performance metrics and evaluation results.
Before using this reposatory, for your personal convinience, run `python-package-conda.yml` that creates conda (anaconda) environment and set all dependencies for both Python and Java.

# Question-Answering Chatbot with Arcpolar/Ubuntu_Llama_Chat_7B and SweatyCrayfish/Linux-CodeLlama2

This README outlines the steps to set up a chatbot using the `Arcpolar/Ubuntu_Llama_Chat_7B` model from Hugging Face for a single-turn question-answer dialogue.

## Prerequisites

- Python 3.x
- pip package manager

## Installation

Install the required Python package:

```
pip install transformers
```

## Code Example

Below is a Python script that demonstrates a single interaction between a user and the chatbot. This example for the model's token limit of 1024. </br>
Command downloads Ubuntu_llama_Chat_7B from huggingface
```
from transformers import AutoModelForCausalLM, AutoTokenizer

# Initialize the model and tokenizer
tokenizer = AutoTokenizer.from_pretrained("Arcpolar/Ubuntu_Llama_Chat_7B") #optionally we can use SweatyCrayfish/Linux-CodeLlama2 tokenizer
model = AutoModelForCausalLM.from_pretrained("Arcpolar/Ubuntu_Llama_Chat_7B") #for scripts we recommend to use SweatyCrayfish/Linux-CodeLlama2 for script generating tasks
```
Generate a dialogue history where `user_input` is a question we want to ask our model
```
# Sample dialogue history
dialogue_history = ""

# Sample user input
user_input = "What is Ubuntu?" #we can ask any other questions

# Append user input to dialogue history
dialogue_history += user_input + tokenizer.eos_token

# Tokenize the dialogue history and ensure it does not exceed 1024 tokens
input_ids = tokenizer.encode(dialogue_history, return_tensors='pt')
if len(input_ids[0]) > 1024:
    print("Token limit exceeded. Please shorten the dialogue history.")

# Generate model response
output_ids = model.generate(input_ids, max_length=1024, pad_token_id=tokenizer.eos_token_id)
```
Display model's response
```
# Decode and display model response
generated_output = tokenizer.decode(output_ids[:, input_ids.shape[-1]:][0], skip_special_tokens=True)
print("Bot Response:", generated_output)
```

## Note

The model has a token limit of 1024. Ensure your dialogue history does not exceed this limit for optimal performance.

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
