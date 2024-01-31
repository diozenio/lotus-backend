import { Router } from "express";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import {
  AuthUserController,
  CreateUserController,
  DisconnectUserController,
  GetUserController,
  RefreshTokenUserController,
} from "./useCases";

const router = Router();

const createUserController = new CreateUserController();
const authUserController = new AuthUserController();
const refreshTokenUserController = new RefreshTokenUserController();
const getUserController = new GetUserController();
const disconnectUserController = new DisconnectUserController();

router.get("/api", ensureAuthenticated, (request, response) => {
  return response.json({ message: "Hello World" });
});

router.post("/api/auth/users", (request, response) => {
  return createUserController.handle(request, response);
});

router.post("/api/user/info", ensureAuthenticated, (request, response) => {
  return getUserController.handle(request, response);
});

router.post("/api/auth/login", (request, response) => {
  return authUserController.handle(request, response);
});

router.post("/api/auth/logout", ensureAuthenticated, (request, response) => {
  return disconnectUserController.handle(request, response);
});

router.post("/api/auth/refresh", (request, response) => {
  return refreshTokenUserController.execute(request, response);
});

export { router };
