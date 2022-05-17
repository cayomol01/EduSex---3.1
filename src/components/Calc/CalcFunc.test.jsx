import React from "react";
import ReactDOM from "react-dom";
import {screen, render, act, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CalcFunc from "./CalcFunc";
import display from "../Display/Display";
import Display from "../Display/Display";

describe("CalcFunc", () => {
    it("substracts positives", async() => {
      render(<Display/>);
      const [addNumber,operate, updateDisplay] = CalcFunc();
      await act(async () => {
        await addNumber(3);
        await addNumber(4);
        await operate("-");
        await addNumber(1);
        await addNumber(2);
        await operate("=");
        expect(screen.getByTestId("Display")).toHaveTextContent(34-12);
      });
    });

    it("substracts negatives", async() => {
        render(<Display/>);
        const display = screen.getByTestId("Display");
        const [addNumber,operate, updateDisplay] = CalcFunc();
        await act(async () => {
            await addNumber(1);
            await addNumber(2);
            await operate("-");
            await addNumber(3);
            await addNumber(4);
            await operate("=");
            expect(display).toHaveTextContent("-22");
        });
    });

  it("multiplication", async() => {
    render(<Display/>);
    const [addNumber,operate, updateDisplay] = CalcFunc();
    await act(async () => {
      await addNumber(3);
      await operate("*");
      await addNumber(2);
      await operate("=");
      expect(screen.getByTestId("Display")).toHaveTextContent(6);
    });
  });

  it("multiplication by zero", async() => {
    render(<Display/>);
    const [addNumber,operate, updateDisplay] = CalcFunc();
    await act(async () => {
      await addNumber(3);
      await operate("*");
      await addNumber(0);
      await operate("=");
      expect(screen.getByTestId("Display")).toHaveTextContent(0);
    });
  });

  it("multiplication by negative", async() => {
    render(<Display/>);
    const [addNumber,operate, updateDisplay] = CalcFunc();
    await act(async () => {
      await addNumber(3);
      await operate("*");
      await addNumber(1);
      await operate("+/-");
      await operate("=");
      expect(screen.getByTestId("Display")).toHaveTextContent(-3);
    });
  });

  it("multiplication two negatives", async() => {
    render(<Display/>);
    const [addNumber,operate, updateDisplay] = CalcFunc();
    await act(async () => {
      await addNumber(3);
      await operate("+/-");
      await operate("*");
      await addNumber(1);
      await operate("+/-");
      await operate("=");
      expect(screen.getByTestId("Display")).toHaveTextContent(3);
    });
  });

  it("division whole", async() => {
    render(<Display/>);
    const [addNumber,operate, updateDisplay] = CalcFunc();
    await act(async () => {
      await addNumber(10);
      await operate("/");
      await addNumber(2);
      await operate("=");
      expect(screen.getByTestId("Display")).toHaveTextContent(5);
    });
  });

  it("division not whole", async() => {
    render(<Display/>);
    const [addNumber,operate, updateDisplay] = CalcFunc();
    await act(async () => {
      await addNumber(1);
      await addNumber(0);
      await operate("/");
      await addNumber(3);
      await operate("=");
      expect(screen.getByTestId("Display")).toHaveTextContent(3.3333333);
    });
  });

  it("division by zero", async() => {
    render(<Display/>);
    const [addNumber,operate, updateDisplay] = CalcFunc();
    await act(async () => {
      await addNumber(1);
      await operate("/");
      await addNumber(0);
      await operate("=");
      expect(screen.getByTestId("Display")).toHaveTextContent("Error");
    });
  });

  it("mod bigger first", async() => {
    render(<Display/>);
    const [addNumber,operate, updateDisplay] = CalcFunc();
    await act(async () => {
      await addNumber(6);
      await operate("%");
      await addNumber(3);
      await operate("=");
      expect(screen.getByTestId("Display")).toHaveTextContent(0);
    });
  });

  it("mod bigger last", async() => {
    render(<Display/>);
    const [addNumber,operate, updateDisplay] = CalcFunc();
    await act(async () => {
      await addNumber(3);
      await operate("%");
      await addNumber(6);
      await operate("=");
      expect(screen.getByTestId("Display")).toHaveTextContent(3);
    });
  });

  it("clean with C", async() => {
    render(<Display/>);
    const [addNumber,operate, updateDisplay] = CalcFunc();
    await act(async () => {
      await addNumber(987654321);
      await operate("C");
      expect(screen.getByTestId("Display")).toHaveTextContent(0);
      await addNumber(1);
      expect(screen.getByTestId("Display")).toHaveTextContent(1);
    });
  });

  it("Float shenanigans", async() => {
    render(<Display/>);
    const [addNumber,operate, updateDisplay] = CalcFunc();
    await act(async () => {
      await operate("C");
      await addNumber(".");
      expect(screen.getByTestId("Display")).toHaveTextContent("0.");
      await addNumber(1);
      expect(screen.getByTestId("Display")).toHaveTextContent("0.1");
      await addNumber(".");
      expect(screen.getByTestId("Display")).toHaveTextContent("0.1");
    });
  });

  it("Big numbers positive", async() => {
    render(<Display/>);
    const [addNumber,operate, updateDisplay] = CalcFunc();
    await act(async () => {
      await operate("C");
      await addNumber("999999999");
      expect(screen.getByTestId("Display")).toHaveTextContent(999999999);
      await operate("+");
      await addNumber("1");
      await operate("=");
      expect(screen.getByTestId("Display")).toHaveTextContent("Error");
    });
  });

  it("Big numbers Negative", async() => {
    render(<Display/>);
    const [addNumber,operate, updateDisplay] = CalcFunc();
    await act(async () => {
      await addNumber("-99999999");
      await operate("-");
      await addNumber("1");
      await operate("=");
      expect(screen.getByTestId("Display")).toHaveTextContent("Error");
    });
  });

  it("Equal", async() => {
    render(<Display/>);
    const [addNumber,operate, updateDisplay] = CalcFunc();
    await act(async () => {
      await operate("=");
      await addNumber("123456789");
      await operate("=");
      await operate("=");
      await operate("+");
      await addNumber("1");
      await operate("=");
      expect(screen.getByTestId("Display")).toHaveTextContent(123456789+1);
    });
  });

  it("Change sign where there is nothing", async() => {
    render(<Display/>);
    const [addNumber,operate, updateDisplay] = CalcFunc();
    await act(async () => {
      await operate("+/-");
      expect(screen.getByTestId("Display")).toHaveTextContent(0);
      await addNumber("0");
      await operate("+/-");
      expect(screen.getByTestId("Display")).toHaveTextContent(0);
      await addNumber("1");
      await operate("+/-");
      expect(screen.getByTestId("Display")).toHaveTextContent(-1);
    });
  });

  it("has more than 9 digits on screen", async() => {
    render(<Display/>);
    const [addNumber,operate, updateDisplay] = CalcFunc();
    await act(async () => {
      for (let i = 0; i < 10; i++) {
        await addNumber(i);
      }
      expect(screen.getByTestId("Display")).toHaveTextContent("012345678");
      await addNumber(9);
      expect(screen.getByTestId("Display")).toHaveTextContent("012345678");
    });
  });

  it("for some reason gets another input", async() => {
    render(<Display/>);
    const [addNumber,operate, updateDisplay] = CalcFunc();
    await act(async () => {
      await operate("A");
      expect(screen.getByTestId("Display")).toHaveTextContent("0");
    });
  });

});
