import * as AWS from "aws-sdk";
import {isNull} from "../utils";
import { MailerInterface } from "./interface";

export class Mailer implements MailerInterface {

    constructor() {
        AWS.config.update({region: "us-west-2"});
    }

    public async sendEmail(subject: string, body: string, to: string[], cc: string[]) {
        const from = "no-reply@offchain.co";
        const params = this.createEmailParams(subject, body, from, to, cc);
        // Create the promise and SES service object
        try {
            const data = await new AWS.SES({apiVersion: "2010-12-01"}).sendEmail(params).promise();
            console.log(data.MessageId);
        } catch (err) {
            console.error(err, err.stack);
        }
        return;
    }

    private isValidEmailArgs(subject: string, body: string, from: string, to: string[], cc: string[]) {
        if (isNull(from) || from === "") { return false; }
        if (isNull(to) || to === []) { return false; }
        return true;
    }

    private createEmailParams(subject: string, body: string, from: string, to: string[], cc: string[])
    : AWS.SES.SendEmailRequest {
        if (!this.isValidEmailArgs(subject, body, from, to, cc)) {
            throw {
                message: "invalid email args"
            };
        }
        const emailSubject = subject || "";
        const emailBody = body || "";
        const emailFrom = from || "";
        const emailTo = to || [];
        const emailCc = cc || [];

        const params = {
            Destination: {/* required */
                CcAddresses: emailCc,
                ToAddresses: emailTo
            },
            Message: {/* required */
                Body: {/* required */
                    Html: {
                        Charset: "UTF-8",
                        Data: emailBody
                    }
                },
                Subject: {
                    Charset: "UTF-8",
                    Data: emailSubject
                }
            },
            Source: emailFrom,
            /* required */
        };
        return params;
    }
}
