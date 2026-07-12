import { NextResponse } from "next/server";
import { Resend } from "resend";
import * as z from "zod";

const previewSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  websiteUrl: z.string().optional(),
  industry: z.string().min(2),
  competitor: z.string().optional(),
});

const resend = new Resend(process.env.RESEND_API_KEY || "re_mock_key");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = previewSchema.parse(body);

    const { name, email, websiteUrl, industry, competitor } = validatedData;
    console.log("New Homepage Preview Lead:", { name, email, websiteUrl, industry, competitor });

    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: "MecbillTech Preview <preview@mecbilltech.com>",
        to: "info@mecbilltech.com",
        subject: `New Free Homepage Design Request: ${name}`,
        html: `
          <h3>Homepage Design Request Details:</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Industry:</strong> ${industry}</p>
          <p><strong>Current Website URL:</strong> ${websiteUrl || "N/A"}</p>
          <p><strong>Top Competitor URL:</strong> ${competitor || "N/A"}</p>
        `,
      });
    }

    return NextResponse.json({ success: true, message: "Lead logged successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.issues }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: "Server error occurred" }, { status: 500 });
  }
}
