import {cleanup, render} from "@testing-library/react";
import React from "react";
import CheckBox from "./checkbox";

afterEach(cleanup);

it('correct render components with redux', () => {
    const {getByText} = render(<CheckBox/>)
    const linkElement = getByText(/портфолио/i)
    expect(linkElement).toBeInTheDocument()
})
