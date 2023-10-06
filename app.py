from flask import Flask, request, jsonify
from transformers import TFMobileBertForSequenceClassification, MobileBertTokenizer

app = Flask(__name__)

# Load the model
model = TFMobileBertForSequenceClassification.from_pretrained("C:\\Users\\VVesel01\\OneDrive - Kenvue\\Desktop\\Academia")
tokenizer = MobileBertTokenizer.from_pretrained("google/mobilebert-uncased")

@app.route('/ask', methods=['POST'])
def ask():
    question = request.json['question']
    inputs = tokenizer(question, return_tensors='tf')
    outputs = model(**inputs)
    score = outputs.logits[0].numpy()
    return jsonify({'score': score})

if __name__ == '__main__':
    app.run(debug=True)
