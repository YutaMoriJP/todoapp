import noteReducer from "../Components/reducer/noteReducer";

test("testing default case", () => {
  expect(noteReducer([], {})).toEqual([]);
});

test("testing add reducer", () => {
  expect(
    noteReducer([], { type: "add", payload: { value: "first", id: 0 } })
  ).toEqual([{ value: "first", id: 0, done: false }]);
  expect(
    noteReducer([{ value: "first", id: 0, done: false }], {
      type: "add",
      payload: { value: "second", id: 1 },
    })
  ).toEqual([
    { value: "first", id: 0, done: false },
    { value: "second", id: 1, done: false },
  ]);
});

test("testing removeReducer", () => {
  const initial = [
    { value: "first", id: 0, done: false },
    { value: "second", id: 1, done: false },
  ];
  const updated = [{ value: "second", id: 1, done: false }];
  expect(noteReducer(initial, { type: "remove", payload: { id: 0 } })).toEqual([
    { value: "second", id: 1, done: false },
  ]);
  expect(noteReducer(updated, { type: "remove", payload: { id: 1 } })).toEqual(
    []
  );
});

test("testing doneReducer", () => {
  const initial = [{ value: "first", id: 0, done: false }];
  const updated = [{ value: "first", id: 0, done: true }];
  expect(noteReducer(initial, { type: "done", payload: { id: 2 } })).toEqual(
    initial
  );
  expect(noteReducer(initial, { type: "done", payload: { id: 0 } })).toEqual(
    updated
  );
  expect(noteReducer(updated, { type: "done", payload: { id: 0 } })).toEqual(
    initial
  );
});
