// TODO: add types
// See https://www.typescriptlang.org/docs/handbook/2/functions.html#function-type-expressions
// type ReqResFunction = (req: , res: ) => Promise ?

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
export default function initMiddleware(middleware) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}
