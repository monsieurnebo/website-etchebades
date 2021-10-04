module.exports = {
  root : true,
  env : {
    browser : true,
    node : true
  },
  parserOptions : {
    parser : "@typescript-eslint/parser",
    requireConfigFile : false
  },
  plugins: [
    "@typescript-eslint"
  ],
  extends : [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "next"
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
