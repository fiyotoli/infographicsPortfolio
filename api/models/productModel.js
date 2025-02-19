import mongoose from 'mongoose';

// Define the schema for the article
const reactArticleSchema = new mongoose.Schema({
  image: {
    type: Array, // Store the image path (assuming it's a string to be imported from assets)
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

// Create the model based on the schema
const ReactArticle = mongoose.model('ReactArticle', reactArticleSchema);

export default ReactArticle;
