import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // Parse the JSON data from the request body
    const body = await req.json();

    // Destructure the required fields from the body
    const { name, email, message ,phone} = body;

    // Validate the input
    if (!name || !email || !message || !phone) {
      return new Response(
        JSON.stringify({ success: false, message: "All fields are required." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use your email service (e.g., Gmail, Outlook, etc.)
      auth: {
        user: "websiteemailxx@gmail.com", // Your email address (set in environment variables)
        pass: "kzmi kqsu vztr sjzz", // Your email password or app password
      },
    });

    // Email options
    const mailOptions = {
        from: "websiteemailxx@gmail.com", // sender's email (from request body)
        to: "collabcircle21@gmail.com", // receiver's email
        subject: "Ac Service Enquiry", // email subject
        html: `
        <h1>Regarding AC Service or Maintanance</h1>
        <p><strong>Dear Sir,</strong></p>
          <p>We have received an enquiry from the website.</p>
          <p>Please find the details below:</p>
          <hr />
          <h2>Enquiry Details:</h2>
          <p><strong>Subject:</strong> AC Service or Maintanance</p>
          <hr />
          <h2>Contact Details:</h2>
          <p><strong>Sender Name:</strong> ${name}</p>  
          <p><strong>User Message:</strong> ${message}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
        `, // HTML email body
      };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully." }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    // Handle any errors
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to send email.",
        error: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}