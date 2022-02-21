import { rest } from "msw";

export const AuthHandlers = [
  rest.post("/api/login", (req, res, ctx) => {
    const { username } = req.body as any;
    ctx.delay(1500);
    return res(
      ctx.json({
        id: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
        username,
        firstName: "ReZa",
        lastName: "Heydari",
        token: username,
      })
    );
  }),
  rest.get("/api/user", (req, res, ctx) => {
    const token = req.headers.get("Authorization");
    ctx.delay(1000);
    if (token) {
      return res(
        ctx.json({
          id: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
          username: token.replace("Bearer ", ""),
          firstName: "ReZa",
          lastName: "Heydari",
        })
      );
    } else {
      return res(ctx.status(401));
    }
  }),
];
