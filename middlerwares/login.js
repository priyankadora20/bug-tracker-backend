const login = (req, res, next) => {
    let data = req.body;
    if (req.method === "POST") {
    if (data.email && data.password) {
    if (
    typeof (data.email === "string") &&
    typeof (data.password === "string")
        ) {
          next();
        } else {
          res.send("failed");
        }
      } else {
        res.send("entre the missing one");
      }
    } else {
      next();
    }
  };
  
  module.exports = { login };
  