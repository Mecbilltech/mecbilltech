import { NextResponse } from "next/server";
import * as z from "zod";

const newsletterSchema = z.object({
  email: z.string().email(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = newsletterSchema.parse(body);

    const { email } = validatedData;
    console.log("New Newsletter Subscription Received:", email);

    // Real world implementation would insert this into a DB or mailer service like Mailchimp/Resend

    return NextResponse.json({ success: true, message: "Subscribed successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.issues }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: "Server error occurred" }, { status: 500 });
  }
}
