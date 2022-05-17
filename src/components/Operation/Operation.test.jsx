import React from "react";
import ReactDOM from "react-dom";
import {screen, render, act, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Operation from "./Operation";
import Number from "../Number/Number";
import Display from "../Display/Display";

describe("Operation", () => {
    it("renders without crashing ReactDOM", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Operation/>, div);
    });

    it("renders component Operation correctly", () => {
        render(<Operation operation={"+"}/>)
    });

    it("renders signs correctly", () => {
        const {getByText} = render(<Operation operation={"+"}/>);
        expect(getByText("+")).toHaveTextContent("+");
    });
});
