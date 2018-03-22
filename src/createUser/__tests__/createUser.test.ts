import RPCError from "../errors";

/** Mock out web3 and aws-sdk instance */
jest.mock("../../db", () => {
    const mockDb = jest.fn().mockImplementation(() => ({}));
    return mockDb;
});

jest.mock("aws-sdk", () => {
    return {
        config: {
            update: jest.fn()
        },
        SES: jest.fn().mockImplementation(() => {
            return {
                sendEmail: jest.fn()
            };
        })
    };
});

describe("Basic API Tests", () => {

    // beforeEach(() => {});

    // afterEach(() => {});

    it("Should have be able to run a test", () => {
        expect.assertions(0);
    });

});
