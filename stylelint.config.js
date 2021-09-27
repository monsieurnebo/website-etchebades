module.exports = {
  extends : [
    "stylelint-config-standard"
  ],
  plugins : ["stylelint-scss"],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules : {
    // Enable SCSS rules https://github.com/kristerkari/stylelint-scss
    "at-rule-no-unknown" : null,
    "scss/at-rule-no-unknown" : true
  }
};