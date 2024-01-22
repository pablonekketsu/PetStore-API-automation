# Pet Store Testing

This project contains automated tests for the Pet Store API using Cypress.

## Setup

Before running the tests, make sure you have Node.js and Cypress installed.

npm install


# Test Execution

To run the tests, use the following command:

npx cypress open


This will open the Cypress interface, where you can select and run the tests.

# Code Description

The included code performs end-to-end testing on the Pet Store API. Here is a summary of the functions and tests:

    - addPet: Adds a new pet via a POST request.
    - editPet: Updates an existing pet via a PUT request.
    - searchByStatus: Performs a search for pets by status via a GET request.

# Tests

    - Add a new pet: Adds a new pet and verifies that the pet has been added successfully.
    - Search by ID: Searches for a pet by its ID and verifies that the information is correct.
    - Update the pet: Updates the information of a pet and verifies that the update is successful.
    - Search by status: Performs a search for pets by status and verifies that the updated pet is in the list.

# Additional Notes

The URLs and sample data are pre-defined to simplify the code.
Ensure you have a stable internet connection before running the tests.