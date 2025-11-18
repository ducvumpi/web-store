// app/api/chat/route.ts
import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
    const { message } = await req.json();

    if (!message) return NextResponse.json({ error: "Message is required" }, { status: 400 });

    try {
        const apiKey = process.env.MISTRAL_API_KEY;

        const response = await axios.post(
            "https://api.mistral.ai/v1/chat/completions",
            {
                model: "mistral-medium-latest",
                messages: [{ role: "user", content: message }],
            },
            { headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" } }
        );

        const reply = response.data?.choices?.[0]?.message?.content || "";
        return NextResponse.json({ reply });
    } catch (err: any) {
        console.error(err.response?.data || err.message);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
