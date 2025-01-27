const express = require("express");
const passport = require("passport");
const {
    ensureAuthenticated,
    renderHomePage,
    renderProfilePage,
    logoutUser,
} = require("../controller/auth.controller");

const router = express.Router();

// Home route
router.get("/", renderHomePage);

// Google OAuth routes
router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {
        res.redirect("/profile");
    }
);

// Profile route
router.get("/profile", ensureAuthenticated, renderProfilePage);

// Logout route
router.get("/logout", logoutUser);

module.exports = router;
