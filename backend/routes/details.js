const express = require("express");
const Detail = require("../models/detailModel");
const Approval = require("../models/approvalModel");
const Count = require("../models/countmodel");
const OTP = require("../models/OTPModel");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/sendotp", async (req, res) => {
  const otp = Number(Math.floor(Math.random() * 9000) + 1000);
  // console.log(otp);
  const { email } = req.body;
  const user = await OTP.findOne({ email });
  if (user) {
    // console.log("updating OTP");
    await OTP.updateOne({ email: email }, { $set: { otp: otp } });

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL, // generated ethereal email
        pass: process.env.PASS, // generated ethereal password
      },
    });

    var mailOptions = {
      from: process.env.EMAIL,
      to: req.body.email,
      subject: "OTP verification",
      html: `Hello Participant,<br/></br>
      Your registration for the college events at Sona College of Technology is in progress. Please use the One Time Password (OTP) below to complete the registration process:</br></br>
      <b><strong>OTP: ${otp}</strong></b></br></br>
      For any assistance, feel free to contact us at Sona.cse.sympo@gmail.com.<br/></br>
      Best regards,<br/>
      Department of CSE,<br/>
      Sona College of Technology`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.status(400).json(error);
        console.log(error);
      } else {
        console.log("Email sent: ");
        res.json(otp);
      }
    });
    res.status(200);
  } else {
    const detail = await OTP.create({ email, otp });
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL, // generated ethereal email
        pass: process.env.PASS, // generated ethereal password
      },
    });

    var mailOptions = {
      from: process.env.EMAIL,
      to: req.body.email,
      subject: "OTP verification",
      html: `Hello Participant,<br/></br>
      Your registration for the college events at Sona College of Technology is in progress. Please use the One Time Password (OTP) below to complete the registration process:</br></br>
      <b><strong>OTP: ${otp}</strong></b></br></br>
      For any assistance, feel free to contact us at Sona.cse.sympo@gmail.com.<br/></br>
      Best regards,<br/>
      Department of CSE,<br/>
      Sona College of Technology`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.status(400).json(error);
        console.log(error);
      } else {
        console.log("Email sent: ");
        res.json(otp);
      }
    });
  }
});

router.post("/verifyotp", async (req, res) => {
  const { email, otp } = req.body;

  const user = await OTP.findOne({ email });
  console.log("user email: ", user.email);
  console.log("User otp: ", user.otp);
  console.log("VerifyOtp");
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  if (user.otp == otp) {
    // user.otp = null;
    await user.save();
    res.status(200).json({ success: true });
    console.log("OTP verified");
  } else {
    console.log("Wrong otp entered");
    res.status(400).json({ success: false });
  }
});

router.post("/register", async (req, res) => {
  console.log(req.body);
  console.log("register route");

  const {
    name,
    department,
    selectedCollege,
    email,
    number,
    selectedEvents,
    selectedWorkshops,
    selectedYear,
  } = req.body.details;

  const UPI_id = req.body.UPI_id;

  const user = await Approval.findOne({ email });
  console.log("found email");

  // if (!user) {
  try {
    const approval = await Approval.create({
      name,
      department,
      selectedCollege,
      email,
      number,
      selectedEvents,
      selectedWorkshops,
      selectedYear,
      UPI_id,
    });
    if (approval) {
      console.log("Approval created");
    }
    console.log("kkkkk");
    res.json({ success: true });

    // res.status(200);
    console.log("response ok: ");
    // res.status(200).json(detail);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
});

router.post("/download", async (req, res) => {
  console.log(req.body);

  const { email } = req.body;
  Detail.find({ email: email })
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json(err));
});

router.post("/updateUPI", async (req, res) => {
  console.log(req.body);
  const { email, UPI_id } = req.body;
  console.log(email, UPI_id);

  const mes = await Approval.updateOne({ email: email }, { $set: { UPI_id } });
  res.status(200);
  res.json(req.body);

  // const {email } = req.body;
  // Approval.find( { "email": email } )
  // .then(user=>(res.json(user)))
  // .catch(err=>(res.status(400).json(err)));
});

router.post("/registersona", async (req, res) => {
  console.log(req.body);
  console.log("register route");

  const {
    name,
    department,
    selectedCollege,
    email,
    number,
    selectedEvents,
    selectedWorkshops,
    selectedYear,
  } = req.body;

  const user = await Detail.findOne({ email });
  // console.log("user: ", user);
  let workshop = selectedWorkshops;
  const a = await Count.findOne({ _id: "65c9f395fde61a170c9bff55" });
  let uiuxc = a.uiux;
  let cyberc = a.cyber;
  let flutterc = a.flutter;
  let webc = a.web;
  console.log("");

  if (user) {
    console.log(email);
    // let workshop=selectedWorkshops;
    try {
      // console.log(typeof (user.selectedEvents));

      if (user.selectedWorkshops == "false") {
        if (workshop == "uiux") {
          if (uiuxc >= 100) {
            res.json({ msgg: "UIUX workshop is filled", flag: false });
            return;
          }
          await Count.updateOne(
            { _id: "65c9f395fde61a170c9bff55" },
            { $inc: { uiux: 1 } }
          );
        } else if (workshop == "flutter") {
          if (flutterc > 100) {
            res.json({ msgg: "Flutter workshop is filled", flag: false });
            return;
          }
          await Count.updateOne(
            { _id: "65c9f395fde61a170c9bff55" },
            { $inc: { flutter: 1 } }
          );
        } else if (workshop == "web_development") {
          if (webc > 100) {
            res.json({
              msgg: "Web Development workshop is filled",
              flag: false,
            });
            return;
          }
          await Count.updateOne(
            { _id: "65c9f395fde61a170c9bff55" },
            { $inc: { web: 1 } }
          );
        } else if (workshop == "cyber_security") {
          if (cyberc > 100) {
            res.json({
              msgg: "Cyber_Security workshop is filled",
              flag: false,
            });
            return;
          }
          await Count.updateOne(
            { _id: "65c9f395fde61a170c9bff55" },
            { $inc: { cyber: 1 } }
          );
        }

        const mes = await Detail.updateOne(
          { email: email },
          { $set: { selectedWorkshops: selectedWorkshops } }
        );
      }
      if (user.selectedEvents == "false") {
        const mes = await Detail.updateOne(
          { email: email },
          { $set: { selectedEvents: selectedEvents } }
        );
      }
      //
      // if (user.selectedWorkshops != "false") {
      //   return res.json({
      //     msgg: "You have already registerd for workshops",
      //     flag: false,
      //   });
      // }
      //

      if (user.selectedEvents == "true" && user.selectedWorkshops != "false") {
        return res.json({
          msgg: "You have already registerd for both events and workshop",
          flag: false,
        });
      }
    } catch (e) {
      console.log(e);
    }

    res.status(200).json({
      msgg: "Successfully registered! You will receive a confirmation mail shortly",
      flag: true,
    });
  } else {
    try {
      if (workshop == "uiux") {
        if (uiuxc > 100) {
          // console.log("Count exceeded");

          return res.json({ msgg: "UIUX workshop is filled", flag: false });
        }
        await Count.updateOne(
          { _id: "65c9f395fde61a170c9bff55" },
          { $inc: { uiux: 1 } }
        );
      } else if (workshop == "flutter") {
        if (flutterc > 100) {
          res.json({ msgg: "Flutter workshop is filled", flag: false });
          return;
        }
        await Count.updateOne(
          { _id: "65c9f395fde61a170c9bff55" },
          { $inc: { flutter: 1 } }
        );
      } else if (workshop == "web_development") {
        if (webc > 100) {
          res.json({ msgg: "Web Development workshop is filled", flag: false });
          return;
        }
        await Count.updateOne(
          { _id: "65c9f395fde61a170c9bff55" },
          { $inc: { web: 1 } }
        );
      } else if(workshop=='cyber_security'){
        if (cyberc > 100) {
          res.json({ msgg: "Cyber_Security workshop is filled", flag: false });
          return;
        }
        await Count.updateOne(
          { _id: "65c9f395fde61a170c9bff55" },
          { $inc: { cyber: 1 } }
        );
      }
      const approval = await Detail.create({
        name,
        department,
        selectedCollege,
        email,
        number,
        selectedEvents,
        selectedWorkshops,
        selectedYear,
      });
      // let workshop=selectedWorkshops;
      if (approval) console.log("Approval created");

      res.status(200).json({
        msgg: "Successfully registered! You will receive a confirmation mail shortly",
        flag: true,
      });

      // res.status(200);
      // res.status(200).json(detail);
    } catch (error) {
      // console.log(error.message);
      res.status(400).json({ error: error.message });
    }
  }
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL, // generated ethereal email
      pass: process.env.PASS, // generated ethereal password
    },
  });

  var mailOptions = {
    from: process.env.EMAIL,
    to: req.body.email,
    subject: "THREADS_24",
    html: `
      <html>
    <head>
      
    </head>
    <body>
    <h3>Dear ${name},<h3><br></br>

      <div>We are delighted to confirm that your information has been successfully verified on our website. As a result, we are pleased to provide you with access to <b>download your ID card <b>from our platform. Please ensure to keep your ID card safe and secure.</div>
      
      <p>At Sona College of Technology, we prioritize the accuracy and security of our members' information. Be assured that we have taken all necessary steps to safeguard your privacy and confidentiality.</p>
      
      <p>Thank you for opting to join our event and workshop. We anticipate further collaboration with you in the future.</p>
      
      <p>Best regards,</p>
      <p>Thread'24</p>
      <p>Department of Computer Science Engineering</p>
      <p>Sona College of Technology</P>
    </body>
  </html>
      
      `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.status(400).json(error);
      console.log(error);
    } else {
      console.log("Email sent: ");
    }
  });
});

module.exports = router;
