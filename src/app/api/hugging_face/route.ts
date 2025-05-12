import {HfInference} from "@huggingface/inference";
import {NextResponse} from "next/server";

const huggingFace = new HfInference(process.env.HUGGINGFACE_API_KEY);

export async function POST(req: Request) {
    try {
        const {text} = await req.json()
        const result = await huggingFace.textClassification({
            model: "distilbert-base-uncased-finetuned-sst-2-english",
            inputs: text,
        })
        return NextResponse.json(result, { status: 200 });
    } catch (err) {
        const error = err as { response?: { status?: number; data?: { error?: string } } };
        return NextResponse.json(
            error.response?.data ?? {error: "Unknown error"},
            {status: error.response?.status ?? 400} // Ensure correct structure
        );
    }
}