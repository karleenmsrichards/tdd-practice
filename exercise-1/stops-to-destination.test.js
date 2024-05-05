const calculateStopsToDestination = require("./stops-to-destination")

// https://jestjs.io/docs/getting-started
// https://jestjs.io/docs/expect

// Run tests with: npm test -- stops-to-destination.test.js


describe("stops to destination", () => {
    // if there is no start or end destination
    test('should throw error if starting destination is not provided', () => {
        expect(() => calculateStopsToDestination()).toThrow();
    });
    
    // check number of stops from Morden to Balham
    test('should return the number of stops from Morden to Balham', () => {
        expect(calculateStopsToDestination("Morden","Balham")).toBe(5);
    });
    
    // check number of stops from Balham to Morden
    test('should return the number of stops from Balham to Morden', () => {
        expect(calculateStopsToDestination("Balham","Morden")).toBe(5);
    });
    
    //  check if start is not a stop
    test('should throw error if start is not a destination', () => {
        expect(() => calculateStopsToDestination("Manchester","Bank")).toThrow();
    });

      //  check if end is not a stop
    test('should throw error if end is not a destination', () => {
        expect(() => calculateStopsToDestination("Kennington","Victoria")).toThrow();
    });
  });
