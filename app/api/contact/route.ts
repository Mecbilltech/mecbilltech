import { NextResponse } from "next/server";
import { Resend } from "resend";
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  company: z.string().optional(),
  email: z.string().email(),
  budget: z.string().min(1),
  details: z.string().min(10),
});

const resend = new Resend(process.env.RESEND_API_KEY || "re_mock_key");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = contactSchema.parse(body);

    const { name, company, email, budget, details } = validatedData;

    console.log("New Consultation Inquiry Received:", { name, company, email, budget, details });

    // Send email via Resend if API key is set
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: "MecbillTech Portal <inquiry@mecbilltech.com>",
        to: "info@mecbilltech.com",
        subject: `New Consultation Inquiry: ${name}`,
        html: `
          <h3>New Consultation Inquiry Details:</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Company:</strong> ${company || "N/A"}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Estimated Budget:</strong> ${budget}</p>
          <p><strong>Project Details:</strong></p>
          <p>${details}</p>
        `,
      });
    }

    return NextResponse.json({ success: true, message: "Inquiry logged successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.issues }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: "Server error occurred" }, { status: 500 });
  }
}
