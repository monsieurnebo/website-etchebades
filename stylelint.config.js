module.exports = {
  extends : [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
  ],
  plugins : ["stylelint-scss"],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules : {
    // Enable SCSS rules https://github.com/kristerkari/stylelint-scss
    "at-rule-no-unknown" : null,
    "scss/at-rule-no-unknown" : true,
    // Allow BEM class pattern (see https://gist.github.com/Potherca/f2a65491e63338659c3a0d2b07eee382 )
    "selector-class-pattern" : "^\.[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$",
    "scss/double-slash-comment-empty-line-before" : null
  }
};
