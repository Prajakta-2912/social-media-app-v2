const express = require("express");

const router = express.Router();

const {
    followUser,
    unfollowUser
} = require("../controllers/userController");

router.put("/follow/:id",followUser);

router.put("/unfollow/:id",unfollowUser);

module.exports = router;