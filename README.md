# Petstore API Automated Tests

A REST API automated test suite for the petstore.swagger.io's REST API.

## Implementation Details

1. **Framework**: Jest with TypeScript
2. **HTTP Client**: Axios
3. **Test Cases**:
   - Creating data (POST)
   - Retrieving data (GET)
   - Modifying existing data (PUT)
   - Deleting data (DELETE)
   - Edge cases (invalid IDs, incorrect data formats)

## Test Scenarios

1. Create a new pet
2. Retrieve the created pet
3. Update the pet's information
4. Delete the pet
5. Handle invalid pet ID
6. Handle invalid data format
7. Handle non-existent pet

## Running the Tests

Execute the following command to run the tests:

```bash
npm test
```

## Project Structure

- `src/api/petstore.ts`: API client
- `src/__tests__/petstore.test.ts`: Test cases
- `src/factories/petFactor.ts`: Test data factories

## Reporting

Bugs and issues are documented in the `BUGREPORT.MD` file.
