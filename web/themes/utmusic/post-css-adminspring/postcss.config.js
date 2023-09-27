// const autoPrefixer = require('autoprefixer');
// https://github.com/ledniy/postcss-prepend-selector
const prepend = require('prepend-selector-postcss')({
  // requiured
  selector: '.adminspring-preview ',
  
  // optional can be omitted
  exclude: [':root '],
  
  // optional can be omitted
  // excludePart: ['.grid-'],
  
  // optional can be omitted -> body{some unwanted global reset stuff}  -> body .selector{some unwanted global reset stuff}
  // appendTo:['body'],
  
  // optional can be omitted -> Prefixing special selectors with a string that not exists in html tags to prevent using "body" - selector
  // body{some unwanted global reset stuff}  -> i_had_made_invalid_body{some unwanted global reset stuff}
  
  // makeInvalid: {
  //     selectors:     ['body'],
  //     invalidPrefix: 'i_had_made_invalid_'
  // }
})

module.exports = {
  plugins: [
    prepend],
};
