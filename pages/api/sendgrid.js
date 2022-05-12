import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
    const msg = {
        to: 'xiaoyinglu59@gmail.com', // Change to your recipient
        from: 'xy415051@dal.ca', // Change to your verified sender
        subject: req.body.subject,
        text: req.body.message,
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>Email</title>
          <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />        
        </head>
        
        <body>
            <div style="margin-left: 20px;margin-right: 20px;">
                <h3>You've got a new mail from ${req.body.name}, their email is: ✉️${req.body.email} </h3>
                <div style="font-size: 16px;">
                    <p>Message:</p>
                    <p>${req.body.message}</p>
                    <br>
                </div>
            </div>
        </body>
        </html>`,
    }
    sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent');
        return res.status(200).json({ result: "success" });
    })
    .catch((error) => {
        console.error(error);
        return res.status(error.statusCode || 500).json({ error: error.message });
    })
}

export default sendEmail;