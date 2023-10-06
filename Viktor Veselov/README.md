# Transformer-based Chat Model

## Overview

This repository contains a Transformer-based chat model implemented using TensorFlow and Keras. The model is trained to predict answers based on provided background and question text.

## File Structure

- `ChatBot_architecture_from_scratch.ipynb`: The Python script containing the model and associated functions.

## How to Use

### Setup

1. Install the required Python packages: pandas, numpy, tensorflow, scikit-learn.
   ```bash
   pip install pandas numpy tensorflow scikit-learn
   ```
2. Place your `dataset.csv` file in the same directory as `ChatBot_architecture_from_scratch.ipynb`.

### Run the Model

1. Navigate to the folder containing `ChatBot_architecture_from_scratch.ipynb`.
2. Rename `ChatBot_architecture_from_scratch.ipynb` to `ChatBot_architecture_from_scratch.py`
3. Run the script to train the model and to use the chat function. Optionally, we can proced with that as .ipynb file, however, we recommend to use rename it to `.py` as it make it more straightforward taks and better seuted for this example/tutorial/process.

    ```bash
    python ChatBot_architecture_from_scratch.py
    ```

## Code Explanation

- The script starts by importing necessary modules and loading the dataset.
- A Tokenizer is trained on the text data.
- Text sequences are tokenized and padded.
- The data is split into training and validation sets.
- A Transformer model is created using Keras layers.
- The model is compiled and trained.
- A chat function (`chat()`) uses the trained model to predict answers.

## Customizing the Model

### To Use Different Tokenization

You can replace the Tokenizer with any other tokenization method or library. Make sure to update the `tokenize_and_pad()` function accordingly.

### To Use Different Model Architectures

We can replace the Transformer encoder with other model architectures like LSTM, GRU, or custom layers. Make sure to update the model creation and compilation steps.

## Note

This is a basic example.

