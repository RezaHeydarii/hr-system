import { rest } from "msw";
import fakeDb from "./fakeDb.json";

let MyDb = fakeDb;

const Logger = [
  {
    user: "Reza Heydari",
    candidateId: "1",
    type: "log",
    text: "0989223738410 to 0989223738411",
    editedField: "phone",
    date: new Date().toISOString(),
  },
  {
    user: "Reza Heydari",
    candidateId: "2",
    type: "log",
    text: "0989223738410 to 0989223738411",
    date: new Date().toISOString(),
    editedField: "phone",
  },
];

export const CandidateHandlers = [
  rest.get("/api/candidate", (req, res, ctx) => {
    const token = req.headers.get("Authorization");
    if (!token) return res(ctx.status(401));
    ctx.delay(3000);
    return res(ctx.json(MyDb));
  }),

  rest.get("/api/candidate/:id", (req, res, ctx) => {
    const token = req.headers.get("Authorization");
    if (!token) return res(ctx.status(401));
    ctx.delay(1500);
    const { id } = req.params;
    const data = MyDb.find((f) => f.id.toString() === id);
    if (data) {
      return res(ctx.json(data));
    }
    return res(ctx.status(404));
  }),

  rest.patch("/api/candidate/:id", (req, res, ctx) => {
    const token = req.headers.get("Authorization");
    if (!token) return res(ctx.status(401));
    const { id } = req.params;
    const data = MyDb.find((f) => f.id.toString() === id);
    if (data) {
      const { body } = req;
      MyDb = MyDb.map((c) => {
        if (c.id === data.id && body) {
          Object.entries(body).forEach(([key, value]) => {
            //@ts-ignore
            if (c[key])
              Logger.push({
                user: token.replace("Bearer ", ""),
                candidateId: id as string,
                type: "log",
                //@ts-ignore
                text: `${c[key]} to ${value}`,
                date: new Date().toISOString(),
                editedField: key,
              });
          });
          //@ts-ignore
          return { ...c, ...body, updatedAt: new Date().toISOString() };
        } else return c;
      });
      //@ts-ignore
      return res(
        //@ts-ignore
        ctx.json({ ...data, ...body, updatedAt: new Date().toISOString() })
      );
    }
    return res(ctx.status(404));
  }),

  rest.get("/api/candidate/logs/:id", (req, res, ctx) => {
    const token = req.headers.get("Authorization");
    if (!token) return res(ctx.status(401));
    const { id } = req.params;
    return res(ctx.json(Logger.filter((l) => l.candidateId === id)));
  }),
  
  rest.post("/api/candidate/comment/:id", (req, res, ctx) => {
    const token = req.headers.get("Authorization");
    if (!token) return res(ctx.status(401));
    const { id } = req.params;
    const { comment } = req.body as any;
    const newComment = {
      user: "Reza Heydari",
      candidateId: id as string,
      type: "comment",
      //@ts-ignore
      text: comment,
      date: new Date().toISOString(),
      editedField: "comment",
    };
    Logger.push(newComment);

    return res(ctx.json(newComment));
  }),
];
