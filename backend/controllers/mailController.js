import asyncHandler from "express-async-handler"
import nodemailer from "nodemailer"

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const mailControllerFunction = asyncHandler(async (req, res) => {
  let { name, email, message } = req.body

  //   let orderHTML = orderItems.map(
  //     or => `<li>Product: ${or.name}</li> ``<li>Quantity: ${or.qty}</li> `
  //   )

  let smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      type: "OAuth2",
      user: "caltekmailB2021@gmail.com",
      pass: "45654513aB$%^",
      clientId:
        "195989648424-eblsmemmokfa67sptp91t0au6cpqgon7.apps.googleusercontent.com",
      clientSecret: "heKqerSNu0isXT9rIS2QjARc",
      refreshToken:
        "1//04cYE_C2CeXwbCgYIARAAGAQSNwF-L9IrLMQ5dZX9Y1vcqjVx92Tk41rYYVqQksl9Crux6IoZjLWhaNpitkZmoa5wUu39UCKEnfA"
    }
  })

  let mailOptions = {
    from: "caltekmail2021@gmail.com",
    to: "Gabehaus@gmail.com",
    subject: `Portfolio contact message`,
    html: `
        <h3>Name</h3>
        ${name}
        <h3>Email</h3>
        ${email}
        <h3>Message</h3>
        <p>${message}</p>
        `
  }

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error)
      console.log("error: ", error)
    } else {
      res.send("Success")
      console.log("success")
    }

    smtpTransport.close()
  })
})

export { mailControllerFunction }
