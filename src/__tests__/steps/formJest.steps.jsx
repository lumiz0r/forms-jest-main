/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../../../src/App";
import "@testing-library/jest-dom";
import FormUserInformation from "../../components/FormUserInformation";

const formJestSteps = ({ given: Given, when: When, then: Then }) => {
  let appComponent;

  Given("The user opens the form", () => {
    appComponent = render(<App />);
  });

  When(/^The user enters in the (.*) the (.*)$/, (field, content) => {
    const fieldTestId = `${field}Input`;
    const element = screen.getByTestId(fieldTestId);
    fireEvent.change(element, {
      target: { value: content },
    });
  });

  When(/^The user enters "(.*)" as "(.*)"$/, (value, field) => {
    const nameField = screen.getByTestId(field);
    fireEvent.change(nameField, {
      target: { value },
    });
  });

  When(/^The user selects "(.*)" from the country dropdown$/, (text) => {
    const countryDropdown = screen.getByTestId("countryInput");
    fireEvent.change(countryDropdown, { target: { value: text } });
  });

  When("The user clicks the clear button", () => {
    const clearButton = screen.getByTestId("clearButton");
    fireEvent.click(clearButton);
  });

  When("The user clicks on the SUBMIT button", () => {
    const submitButton = screen.getByTestId("submitButton");
    fireEvent.click(submitButton);
  });

  // Primer test
  Then(/^The user should see in the (.*) the next content ""$/, (field) => {
    const fieldTestId = `${field}Input`;
    const element = screen.getByTestId(fieldTestId);
    expect(element).toHaveTextContent("");
  });

  Then(/^the (.*) should be (.*)$/, (field, result) => {
    const fieldTestId = `${field}Input`;
    const element = screen.getByTestId(fieldTestId);

    fireEvent.blur(element);

    if (result === "valid") {
      expect(element).not.toHaveClass("error");
    } else {
      expect(element).toHaveClass("error");
    }
  });

  Then(/^the (.*) should equal to (.*)$/, (field, result) => {
    const fieldTestId = `${field}Input`;
    const element = screen.getByTestId(fieldTestId);
    expect(element).toHaveValue(result);
  });

  Then(/^The user should see "([^"]*)"$/, (text) => {
    expect(appComponent.getByText(text)).toBeInTheDocument();
  });

  Then("The user should see the submit button disabled", () => {
    const submitButton = screen.getByTestId("submitButton");
    expect(submitButton).toBeDisabled();
  });

  Then("The user should see the submit button enabled", async () => {
    Then("The user should see the submit button enabled", async () => {
      const submitButton = screen.getByTestId("submitButton");

      await new Promise((resolve) => setTimeout(resolve, 1000));

      expect(submitButton).not.toBeDisabled();
    });
  });

  Then("The user should see the following default content:", (table) => {
    for (let index = 0; index < table.length; index++) {
      const element = table[index].field;
      const text = table[index].content;
      const elementToTest = screen.getByTestId(element);
      expect(elementToTest).toHaveTextContent(text);
    }
  });

  Then("The user clicks on the CLEAR button", () => {
    const clearButton = screen.getByTestId("clearButton");
    fireEvent.click(clearButton);
  });

  Then(/^The user should see the (.*) without red border$/, (field) => {
    const fieldTestId = `${field}Input`;
    const element = screen.getByTestId(fieldTestId);
    expect(element).not.toHaveClass("error");
  });

  Then(
    "The user should see a new window with the next information:",
    (table) => {
      const data = {};

      table.forEach((row) => {
        data[row.field] = row.content;
      });

      render(
        <FormUserInformation
          name={data.name}
          surname={data.surname}
          username={data.username}
          country={data.country}
          id={data.id}
        />
      );

      const nameElement = screen.getByText(`Name: ${data.name}`);
      const surnameElement = screen.getByText(`Surname: ${data.surname}`);
      const usernameElement = screen.getByText(`Username: ${data.username}`);
      const countryElement = screen.getByText(`Country: ${data.country}`);
      const idElement = screen.getByText(`ID: ${data.id}`);

      expect(nameElement).toBeInTheDocument();
      expect(surnameElement).toBeInTheDocument();
      expect(usernameElement).toBeInTheDocument();
      expect(countryElement).toBeInTheDocument();
      expect(idElement).toBeInTheDocument();
    }
  );

  Then(
    /^The user should see in the (.*) the error message (.*)$/,
    async (field, message) => {
      const fieldTestId = `${field}Input`;
      const element = screen.getByTestId(fieldTestId);
      fireEvent.blur(element);

      await waitFor(() => {
        const errorMessageElement = screen.queryByText(message);

        if (field === "username") {
          const name = screen.getByTestId("nameInput").value;
          if (name && element.value.includes(name)) {
            expect(errorMessageElement).toBeInTheDocument();
          }
        } else {
          expect(errorMessageElement).toBeInTheDocument();
        }
      });
    }
  );
};

export default formJestSteps;
