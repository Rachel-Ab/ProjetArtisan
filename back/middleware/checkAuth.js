export const checkAuth = (req, res, next) => {
    req.session.user ? next() : res.redirect("/");
  };