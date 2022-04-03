import { render, screen } from "@testing-library/react";
import { generatePrint } from "../../tests/utils";
import { Prints } from "./Prints";
import { usePrints } from "../../hooks/fetchPrints";

const mockNavigate = jest.fn();

jest.mock("../../hooks/fetchPrints");
jest.mock("react-router-dom", () => ({
  useParams: () => ({ pageId: "1" }),
  useNavigate: () => ({ navigate: mockNavigate }),
}));

test("expect mutliple print to be rendered", () => {
  const prints = [
    generatePrint({ title: "An intereting print title" }),
    generatePrint({ title: "A descriptive print title" }),
    generatePrint({ title: "A funny print title" }),
    generatePrint({ title: "An amazing print title" }),
  ];

  (usePrints as any).mockImplementation(() => ({
    list: () => {
      return {
        data: {
          records: prints,
          info: {
            pages: 5,
            page: 1,
          },
        },
        status: "success",
      };
    },
  }));

  render(<Prints />);

  expect(screen.getByText(/An intereting print title/i)).toBeInTheDocument();
  expect(screen.getByText(/A descriptive print title/i)).toBeInTheDocument();
  expect(screen.getByText(/A funny print title/i)).toBeInTheDocument();
  expect(screen.getByText(/An amazing print title/i)).toBeInTheDocument();
});

test("shows error message when fails to fetch prints", () => {
  const prints = [
    generatePrint({ title: "An intereting print title" }),
    generatePrint({ title: "A descriptive print title" }),
    generatePrint({ title: "A funny print title" }),
    generatePrint({ title: "An amazing print title" }),
  ];

  (usePrints as any).mockImplementation(() => ({
    list: () => {
      return {
        data: {
          records: prints,
          info: {
            pages: 5,
            page: 1,
          },
        },
        status: "error",
      };
    },
  }));

  render(<Prints />);

  expect(screen.queryByText(/An intereting print title/i)).toBeFalsy();
  expect(screen.queryByText(/A descriptive print title/i)).toBeFalsy();
  expect(screen.queryByText(/A funny print title/i)).toBeFalsy();
  expect(screen.queryByText(/An amazing print title/i)).toBeFalsy();
});

test("shows loading message when fetching prints", () => {
  const prints = [
    generatePrint({ title: "An intereting print title" }),
    generatePrint({ title: "A descriptive print title" }),
    generatePrint({ title: "A funny print title" }),
    generatePrint({ title: "An amazing print title" }),
  ];

  (usePrints as any).mockImplementation(() => ({
    list: () => {
      return {
        data: {
          records: prints,
          info: {
            pages: 5,
            page: 1,
          },
        },
        status: "loading",
      };
    },
  }));

  render(<Prints />);

  expect(screen.queryByText(/An intereting print title/i)).toBeFalsy();
  expect(screen.queryByText(/A descriptive print title/i)).toBeFalsy();
  expect(screen.queryByText(/A funny print title/i)).toBeFalsy();
  expect(screen.queryByText(/An amazing print title/i)).toBeFalsy();
});
