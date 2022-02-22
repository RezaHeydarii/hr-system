import { AuthHandlers } from "./handlers/auth";
import { CandidateHandlers } from "./handlers/candidate";

export const handlers = [...AuthHandlers,...CandidateHandlers];
