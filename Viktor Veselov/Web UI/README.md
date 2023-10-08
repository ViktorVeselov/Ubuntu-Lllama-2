# Chatbot with Scoring Feature

## Overview

This repository contains a Flask-based chatbot that uses a machine learning model to score user text. The frontend is built using HTML, CSS, and JavaScript. The backend is implemented in Python using Flask and the Transformers library.

## File Structure

- `index.html`: The HTML file for the frontend.
- `style.css`: The CSS file for styling the frontend.
- `script.js`: The JavaScript file for frontend logic.
- `app.py`: The Python Flask app for the backend.

## How to Use

### Frontend

1. Open the `index.html` file in a web browser.

### Backend

1. Navigate to the folder containing `app.py`.
2. Run `pip install Flask transformers` to install the required packages.
3. Run `python app.py` to start the Flask app.

## How to Attach Different Models

### General Steps

1. Import the model and tokenizer from the Transformers library.
2. Load the model and tokenizer using `.from_pretrained()` method.
3. In the Flask route, use the loaded model and tokenizer to process the user input and return the result.

### Using Llama-2

```python
from transformers import AutoModelForSequenceClassification, AutoTokenizer

model = AutoModelForSequenceClassification.from_pretrained("your-llama-2-model-path")
tokenizer = AutoTokenizer.from_pretrained("your-llama-2-model-path")
```

### Using BERT

```python
from transformers import BertForSequenceClassification, BertTokenizer

model = BertForSequenceClassification.from_pretrained("bert-base-uncased")
tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
```

### Using Other High-Performing Models

We can generally use the `AutoModelForSequenceClassification` and `AutoTokenizer` classes to load any model available in the Transformers library.

```python
from transformers import AutoModelForSequenceClassification, AutoTokenizer

model = AutoModelForSequenceClassification.from_pretrained("your-model-path")
tokenizer = AutoTokenizer.from_pretrained("your-model-path")
```

Replace `"your-model-path"` with the path to your model or the name of a publicly available model.

---

