export interface MailerInterface {
    sendEmail(subject: string, body: string, to: string[], cc: string[] );
}
