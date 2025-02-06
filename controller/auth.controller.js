const ensureAuthenticated = (req, res, next) => {
    if (req.session.user) {
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

//   const logoutUser = (req, res, next) => {
//     req.logout((err) => {
//       if (err) return next(err);
//       res.redirect("/");
//     });
//   };
const logoutUser = async (req, res) => {
    try {
        req.session.destroy();
        res.redirect('/');
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = {
    ensureAuthenticated,
    renderHomePage,
    renderProfilePage,
    logoutUser,
};
