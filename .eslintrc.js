module.exports = {
  root : true,
  env : {
    browser : true,
    node : true
  },
  parserOptions : {
    parser : "@babel/eslint-parser",
    requireConfigFile : false
  },
  extends : [
    "next"
  ],
  plugins : [
  ],
  // add your custom rules here
  rules : {
    quotes : ["error", "double"],
    "key-spacing" : ["error", {
      singleLine : {
        beforeColon : false,
        afterColon : true
      },
      multiLine : {
        beforeColon : true,
        afterColon : true
      }
    }],
    semi : ["error", "always"]
  }
};
