import Note from "../Components/Note/Note";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("Note component test", () => {
  const { getByText, getAllByRole } = render(<Note />);

  const title = getByText(/note taking app/i);
  const [input] = getAllByRole("textbox");
  const [submit] = getAllByRole("button");

  //initial state of the Note Component
  expect(title).toBeInTheDocument();
  expect(input).toHaveValue("");
  expect(submit).toHaveTextContent("Submit");

  //type text into input field
  userEvent.type(input, "First Note");
  //test input value reacted to update
  expect(input).toHaveValue("First Note");
  //dispatch action to reducer to update notes state
  userEvent.click(submit);
  //test notes state's value was rendered
  expect(getByText(/first note/i)).toBeInTheDocument();
  //test input value was cleared
  expect(input).toHaveValue("");
  //test check note functionality
  userEvent.click(getByText("check"));
  expect(getByText("uncheck")).toBeInTheDocument();

  //test remove note functionality
  userEvent.click(getByText("Remove"));
  //check that 'first note' note is removed - getBy throws error if not found so use queryBy
  expect(screen.queryByText(/first note/i)).not.toBeInTheDocument();
});
