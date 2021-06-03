import asyncHandler from "express-async-handler"
import nodemailer from "nodemailer"
import mg from "nodemailer-mailgun-transport"
// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const mailControllerFunction = asyncHandler(async (req, res) => {
  let { name, email, message } = req.body

  const auth = {
    auth: {
      api_key: "4bfc70a7863df639930b35f87f2eeaa2-1d8af1f4-69939cd8",
      domain: "sandboxf8f929f622dc47c6b6518948e21d4e1d.mailgun.org"
    }
  }

  //   let orderHTML = orderItems.map(
  //     or => `<li>Product: ${or.name}</li> ``<li>Quantity: ${or.qty}</li> `
  //   )

  const nodemailerMailgun = nodemailer.createTransport(mg(auth))

  nodemailerMailgun.sendMail(
    {
      from: "Gabehaus@gmail.com",
      to: "Gabehaus@gmail.com", // An array if you have multiple recipients.
      subject: "Hey you, awesome!",
      text: "Mailgun rocks, pow pow!"
    },
    (err, info) => {
      if (err) {
        console.log(`Pebaw: ${err}`)
      } else {
        console.log(`Response: ${info}`)
      }
    }
  )
})

export { mailControllerFunction }
