const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/");
  };
  
  const renderHomePage = (req, res) => {
    res.render("index", { user: req.user });
  };
  
  const renderProfilePage = (req, res) => {
    res.render("profile", { user: req.user });
  };
  
  const logoutUser = (req, res, next) => {
    req.logout((err) => {
      if (err) return next(err);
      res.redirect("/");
    });
  };
  
  module.exports = {
    ensureAuthenticated,
    renderHomePage,
    renderProfilePage,
    logoutUser,
  };
  