import * as AWS from "aws-sdk";
import MailerError from "../errors";
import { Mailer } from "../Mailer";

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

describe("Basic RPC Tests", () => {

    let mailer: Mailer;

    beforeAll(() => {
        mailer = new Mailer();
    });

    afterAll(() => {
        mailer = undefined;
    });

    it("Should intialize with us-west-2", () => {
        expect(AWS.config.update).toHaveBeenCalledWith({ region: "us-west-2" });
        expect.assertions(1);
    });

    it("Should have a sendEmail function", () => {
        expect(mailer.sendEmail).toBeDefined();
        expect.assertions(1);
    });

});
