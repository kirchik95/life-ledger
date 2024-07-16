// @ts-nocheck
const postCssCustomMedia = require('postcss-custom-media');
const postCssCustomProperties = require('postcss-custom-properties');
const postCssImport = require('postcss-import');
const postCssNesting = require('postcss-nesting');
const postCssGlobalData = require('@csstools/postcss-global-data');

module.exports = {
  plugins: [
    postCssImport(),
    postCssNesting(),
    postCssCustomProperties(),
    postCssGlobalData({
      files: ['./src/core/styles/media.css'],
    }),
    postCssCustomMedia(),
  ],
};
