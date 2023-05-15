const axios = require("axios");
const { Host, apiHost } = require("../config/configuration");
const allemails=require("../public/emails.json");
const nodemailer = require("nodemailer");
const handlebars = require("handlebars")
const fs = require("fs")
const path = require("path")

const nodemailerExpressHandlebars = require("nodemailer-express-handlebars");
require("dotenv").config();

module.exports = {
  getSendMail: async (req, res, next) => {
   

    res.render("send-mails", { pagetitle: "Send Emails", pathMails: "mails" });
  },
  postMail: async (req, res, next) => {
    let transporter = nodemailer.createTransport({
      host: "smtppro.zoho.com",
      port: 465,
     secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    allemails.forEach( function(data,index)  {
   
    const emailTemplateSource = fs.readFileSync(path.join(__dirname, "../views/mailTemplate.hbs"), "utf8")
    const template = handlebars.compile(emailTemplateSource)
    const htmlToSend =template({name:data.name})


    let mailOptions = {
      from: "kitchly.kitchens@reworktechnologies.com",
      to: data.email,
      subject: `Kitchly-Kitchen Setup`,
      html:htmlToSend
    };

    transporter.sendMail(mailOptions, function (err, res) {
      if (err) {
        console.log(err);
      } else {
        console.log(`(${index}) Email sent to ${data.name}`);
      }
    });
});

    res.redirect("/send-mails");
  },
};
