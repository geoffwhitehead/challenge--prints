import { fireEvent, render, screen } from "@testing-library/react";
import { PrintCard } from "./PrintCard";
import { generatePrint } from "../../tests/utils";

test("expect card header fields to be rendered", () => {
  const print = generatePrint();
  render(<PrintCard print={print} />);
  expect(
    screen.getByText(/A Paraleytic Woman - dated a very long time ago/i)
  ).toBeInTheDocument();
  expect(
    screen.getByText(/James McArdell, Thomas Hudson/i)
  ).toBeInTheDocument();
});

test("expect card body fields to be rendered", () => {
  const print = generatePrint();
  render(<PrintCard print={print} />);
  //rank
  expect(screen.getByText(/9999999999999/i)).toBeInTheDocument();
  // description
  expect(screen.getByText(/This is a description./i)).toBeInTheDocument();
  // provenance
  expect(
    screen.getByText(
      /John Witt Randall, bequest; to Belinda Lull Randall, his sister, gift; to Harvard University, 1892/i
    )
  ).toBeInTheDocument();
  // culture
  expect(screen.getByText(/British culture/i)).toBeInTheDocument();
  // technique
  expect(screen.getByText(/Mezzotint technique/i)).toBeInTheDocument();
});

test("expect author 1 to be rendered", () => {
  const print = generatePrint();
  render(<PrintCard print={print} />);

  fireEvent(
    screen.getByTestId("author-button"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  expect(screen.getByText(/a1 Artist/i)).toBeInTheDocument();
  expect(screen.getByText(/a1 London/i)).toBeInTheDocument();
  expect(screen.getByText(/a1 male/i)).toBeInTheDocument();
  expect(screen.getByText(/a1 c. 1729 - 1765/i)).toBeInTheDocument();
});

test("expect author 2 to be rendered", () => {
  const print = generatePrint();
  render(<PrintCard print={print} />);

  fireEvent(
    screen.getByTestId("author-button"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  expect(screen.getByText(/a2 Artist after/i)).toBeInTheDocument();
  expect(screen.getByText(/a2 Devon, England/i)).toBeInTheDocument();
  expect(screen.getByText(/a2 unknown/i)).toBeInTheDocument();
  expect(screen.getByText(/a2 1701 - 1779/i)).toBeInTheDocument();
});
