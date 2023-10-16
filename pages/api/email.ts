import { sendMail } from "../../service/mailService";
const handler = async (req, res) => {
    try {
        const { method } = req;
        switch (method) {
            case "POST": {
                //Do some thing
                await sendMail(
                    "TEST",
                    "sebastianus.bara@gmail.com",
                    "Contact Form Email"
                );
                res.status(200).send("Success");
                break;
            }
            case "GET": {
                await sendMail(
                    "TEST",
                    "sebastianus.bara@gmail.com",
                    "Contact Form Email"
                );
                res.status(200).send("Success");
                break;
            }
            default:
                res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
                res.status(405).end(`Method ${method} Not Allowed`);
                break;
        }
    } catch (err) {
        res.status(400).json({
            error_code: "api_one",
            message: err.message,
        });
    }
};

export default handler;
