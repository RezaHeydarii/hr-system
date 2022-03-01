import { QueryClient, QueryClientProvider } from "react-query";
import { useLogin, useProfile } from ".";
import { renderHook } from "@testing-library/react-hooks";
import { ACCESS_TOKEN_KEY } from "@constants/settings";

import { setLogger } from "react-query";

setLogger({
  log: console.log,
  warn: console.warn,
  error: ()=>{},
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});
const wrapper = ({ children }: any) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("testing login hook", () => {
  const { result } = renderHook(() => useLogin(), { wrapper });

  const [login, { isLoading }] = result.current;

  test("loading should be false at first", () => {
    expect(isLoading).toBe(false);
  });

  test("login should return a token", () => {
    login(
      {
        username: "ReZa",
        password: "123456",
      },
      {
        onSuccess: (data) => {
          expect(data.data.token).toBe("ReZa");
        },
      }
    );
  });
});

describe("getting user information", () => {
  test("hook should return 401 without token", async () => {
    const { result, waitFor } = renderHook(() => useProfile(), { wrapper });

    await waitFor(() => {
      const [, { isError, isSuccess }] = result.current;
      return isSuccess || isError;
    });

    const [data, { isSuccess }] = result.current;
    expect(data?.status).toBe(isSuccess ? 200 : undefined);
  });

  test("hook should return user information", async () => {
    localStorage.setItem(ACCESS_TOKEN_KEY, "reza");
    const { result, waitFor } = renderHook(() => useProfile(), { wrapper });

    await waitFor(() => {
      const [, { isError, isSuccess }] = result.current;
      return isSuccess || isError;
    });

    const [data] = result.current;

    expect(data?.data?.username).toBe("reza");
    localStorage.removeItem("reza");
  });
});
