import jwt from "jsonwebtoken";
import { errorHandler } from "./errorHandler.js";

export const checkAuthentication = (req, res, next) => {
  const token = req.cookies.auth_token;
  if (!token)
    return next(errorHandler(401, "You do not have an access token."));

  jwt.verify(token, process.env.JWT_SECRET_KEY, (error, userInfo) => {
    if (error) return next(errorHandler(403, "Invalid access token."));
    req.user = userInfo;
    next();
  });
};

export const checkAuthorization = (req, res, next) => {
  checkAuthentication(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(errorHandler(403, "You do not have priviledges to edit."));
    }
  });
};

export const checkAdmin = (req, res, next) => {
  checkAuthentication(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(errorHandler(403, "You do not have admin priviledges."));
    }
  });
};
