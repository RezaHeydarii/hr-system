import { rest } from "msw";

export const AuthHandlers = [
  rest.post("/api/login", (req, res, ctx) => {
    const { username } = req.body as any;

    return res(
      ctx.json({
        id: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
        username,
        firstName: "ReZa",
        lastName: "Heydari",
      })
    );
  }),
];
