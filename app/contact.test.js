const reqest = require("supertest");
const app = require("./api/contact")
const nodemailer = require("nodemailer");
const { describe } = require("node:test");

jest.mock("nodemailer");
const sendMailMock = jest.fn();
nodemailer.createTransport.mockReturnValue({sendMail : sendMailMock})

describe("POST /send-email",()=>{
    it("should send an email successfully", async ()=>{
        sendMailMock.mockResolvedValueOnce({response: "250 Message accepted"});

        const response = await reqest(app)
            .post("/send-email")
            .send({
                firstname:"John",
                lastname:"Doe",
                email:"johnDoe123@gmail.com",
                phonenumber:"02836728192",
                help:"I want to register my children in the local government",
            });
    })
    it("should return 400 if fields are missing", async () => {
        const response = await request(app).post("/send-email").send({});
    
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: "All fields are required." });
      });
    
      it("should return 500 if email fails to send", async () => {
        sendMailMock.mockRejectedValueOnce(new Error("SMTP Error"));
    
        const response = await request(app)
          .post("/send-email")
          .send({
            firstname: "Victor",
            lastname: "Johnson",
            email: "victor@example.com",
            phonenumber: "08123456789",
            help: "I need help with my service.",
          });
    
        expect(response.status).toBe(500);
        expect(response.body).toEqual({ error: "Failed to send email." });
      });
});