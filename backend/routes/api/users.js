const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");

const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User } = require("../../db/models");

const router = express.Router();

const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  // check('address')
  //   .exists({ checkFalsy: true })
  //   .isLength({ min: 1 })
  //   .withMessage('Please provide an address with at least 4 characters.'),
  // check('username')
  //   .not()
  //   .isEmail()
  //   .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors,
];

// Sign up
router.post(
  '',
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, address, city, state, zip, avatar, baker } = req.body;
    const user = await User.signup({ email, password, address, city, state, zip, avatar, baker });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  }),
);

module.exports = router;