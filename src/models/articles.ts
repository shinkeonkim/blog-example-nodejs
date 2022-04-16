const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const articleSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  }
}, { collection: 'articles'})

const articleModel = model('articles', articleSchema);

export type Article = {
  title: string,
  content: string,
}

module.exports = articleModel;
