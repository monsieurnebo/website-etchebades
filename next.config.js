module.exports = {
  distDir : "dist",
  sassOptions : {
    // Prepend style before entry point
    // see https://github.com/vercel/next.js/pull/12277
    prependData : `
      @import "./style/variables.scss";
    `
  }
};
