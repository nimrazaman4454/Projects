from flask import Flask, render_template, request, jsonify
from keras.models import load_model
from keras.preprocessing import image
import numpy as np
import os
from PIL import Image

app = Flask(__name__)
model = load_model('Resnet50L.h5')

# Define class names
class_names = ['No Impairment', 'Very Mild', 'Mild', 'Moderate']

def preprocess(img):
    img = img.resize((224, 224))
    img = image.img_to_array(img)
    img = np.expand_dims(img, axis=0)
    img = img / 255.0
    return img

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400

    file = request.files['image']
    img = Image.open(file.stream).convert("RGB")
    processed = preprocess(img)
    prediction = model.predict(processed)
    pred_class = class_names[np.argmax(prediction)]

    return jsonify({'prediction': pred_class})

if __name__ == '__main__':
    app.run(debug=True)
