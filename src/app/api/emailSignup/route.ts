import { serverClient } from "@/src/lib/sanity";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		const { email } = await req.json();

		if (!email) {
			return NextResponse.json({ error: "Missing fields" }, { status: 400 });
		}

		const emailSignup = await serverClient.create({
			_type: "emailSignUp",
			email,
		});

		return NextResponse.json({ success: true, emailSignup });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ error: "Failed to signup" }, { status: 500 });
	}
}
