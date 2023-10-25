Feature: User Information Form

    # Invalid is when the border of the field is red
    # Valid is when it has not red border

    Background:
        Given The user opens the form

    Scenario Outline: Check if all the fields are empty
        Then The user should see in the <field> the next content ""
        Examples:
            | field    |
            | name     |
            | surname  |
            | username |
            | id       |

    Scenario: Check if SUBMIT button is disabled initially
        Then The user should see the submit button disabled

    Scenario Outline: Check if all input fields are in uppercase
        When The user enters in the <field> the "<content>"
        Then the <field> should equal to "<result>"
        Examples:
            | field    | content   | result    |
            | name     | MARTINA   | MARTINA   |
            | surname  | CUESTA    | CUESTA    |
            | username | LUMIZOR   | LUMIZOR   |
            | id       | 12345678Z | 12345678Z |
            | name     | martina   | MARTINA   |
            | surname  | cuesta    | CUESTA    |
            | username | lumizor   | LUMIZOR   |
            | id       | 12345678z | 12345678Z |

    Scenario Outline: Check if USERNAME contains NAME
        When The user enters in the name the "<name>"
        And The user enters in the username the "<username>"
        Then the username should be "<result>"
        Examples:
            | name    | username | result  |
            | MARTINA | MARTINA  | invalid |
            | MARTINA | LUMIZOR  | valid   |
            | ANTONIO | TONI     | valid   |
            | TONI    | ANTONIO  | invalid |

    Scenario Outline: Check if NAME contains USERNAME
        When The user enters in the username the "<username>"
        And The user enters in the name the "<name>"
        Then the username should be "<result>"
        Examples:
            | username | name    | result  |
            | MARTINA  | MARTINA | invalid |
            | MARTINA  | CUPIDO  | valid   |
            | ANTONIO  | TONI    | valid   |
            | TONI     | ANTONIO | invalid |

    Scenario Outline: Check if ID format is correct
        When The user selects "<country>" from the country dropdown
        And The user enters in the id the "<id>"
        Then the id should be "<result>"
        Examples:
            | country | id        | result  |
            | Spain   | 12345678Z | valid   |
            | Spain   | 12345678  | invalid |
            | Italy   | MC23096CM | valid   |
            | Italy   | 12345678Z | invalid |

    Scenario Outline: Check if SUBMIT button is enabled when all the fields are in the correct format
        When The user enters in the name the "<name>"
        And The user enters in the surname the "<surname>"
        And The user enters in the username the "<username>"
        And The user selects "<country>" from the country dropdown
        And The user enters in the id the "<id>"
        Then The user should see the submit button enabled
        Examples:
            | name    | surname   | username | country | id        |
            | MARTINA | CUESTA    | LUMIZOR  | Spain   | 12345678Z |
            | ANTONIO | RODRIGUEZ | TONI     | Spain   | 25366610W |
            | ANTONIO | CHAMBILLA | TONI     | Italy   | MC23096CM |

    Scenario Outline: Check if CLEAR button clears all the fields
        When The user enters in the <field> the "<content>"
        And The user clicks on the CLEAR button
        Then the <field> should equal to <empty>
        Examples:
            | field    | content   | empty |
            | name     | MARTINA   |       |
            | surname  | CUESTA    |       |
            | username | LUMIZOR   |       |
            | country  | Spain     |       |
            | id       | 12345678Z |       |

    Scenario Outline: Check if CLEAR button removes red border
        When The user enters in the <field> the "<content>"
        And The user clicks on the CLEAR button
        Then The user should see the <field> without red border
        Examples:
            | field    | content   |
            | name     | MARTINA   |
            | surname  | CUESTA    |
            | username | LUMIZOR   |
            | country  | Spain     |
            | id       | 12345678Z |

    Scenario Outline: Check if new window contains the correct information
        When The user enters in the name the "<name>"
        And The user enters in the surname the "<surname>"
        And The user enters in the username the "<username>"
        And The user enters in the country the "<country>"
        And The user enters in the id the "<id>"
        And The user clicks on the SUBMIT button
        Then The user should see a new window with the next information:
            | field    | content    |
            | name     | <name>     |
            | surname  | <surname>  |
            | username | <username> |
            | country  | <country>  |
            | id       | <id>       |
        Examples:
            | name    | surname | username | country | id        |
            | MARTINA | CUESTA  | LUMIZOR  | Spain   | 12345678Z |

    Scenario Outline: Check if error messages are displayed for username
        When The user enters in the name the <content>
        And  The user enters in the username the <content2>
        Then The user should see in the username the error message <message>

        Examples:

            | content | content2 | message                             |
            | TINA    | MARTINA  | The username can't contain the name |
            | MARTINA |          | The username can't be empty         |

    Scenario Outline: Check if error messages are displayed for name and surname
        When The user enters in the <field> the <content>
        Then The user should see in the <field> the error message <message>

        Examples:
            | field   | content | message                    |
            | name    |         | The name can't be empty    |
            | surname |         | The surname can't be empty |

    Scenario Outline: Check if error messages are displayed for ID
        When The user enters in the id the <content>
        Then The user should see in the id the error message <message>

        Examples:
            | content   | message           |
            | 123456Z   | Invalid ID format |
            | 12345678  | Invalid ID format |
            | 12345678z | Invalid ID format |
            | MC23096CM | Invalid ID format |
            |           | ID can't be empty |