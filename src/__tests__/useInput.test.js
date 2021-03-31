import useInput from "../Components/useHooks/useInput";
import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";

test("test return value useInput hook", () => {
  const { result } = renderHook(() => useInput(""));
  expect(result.current[0].value).toBe("");
  expect(typeof result.current[0].onChange).toBe("function");
  expect(typeof result.current[1]).toBe("function");
});

test("test useInput updating behavior", () => {
  const { result } = renderHook(() => useInput(""));
  act(() => result.current[0].onChange({ target: { value: "hi" } }));
  expect(result.current[0].value).toBe("hi");
  act(() => result.current[1]());
  expect(result.current[0].value).toBe("");
});
