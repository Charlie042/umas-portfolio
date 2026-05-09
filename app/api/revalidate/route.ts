import {
  revalidateSanityDocumentType,
  sanityTypeRevalidationMap,
} from "@/lib/sanity-revalidate";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

type WebhookPayload = {
  _type: string;
};

// Allow GET requests for testing
export async function GET() {
  return NextResponse.json({
    message: "Revalidation webhook is active",
    timestamp: Date.now(),
    env: {
      hasSecret: !!process.env.SANITY_REVALIDATE_SECRET,
    },
  });
}

export async function POST(req: NextRequest) {
  try {
    const secret = process.env.SANITY_REVALIDATE_SECRET;

    if (!secret) {
      console.error("SANITY_REVALIDATE_SECRET is not set");
      return new Response(
        JSON.stringify({
          message:
            "Server configuration error: SANITY_REVALIDATE_SECRET not set",
        }),
        { status: 500 }
      );
    }

    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      req,
      secret
    );

    if (!isValidSignature) {
      const message = "Invalid signature";
      console.error(message, { body });
      return new Response(JSON.stringify({ message, isValidSignature, body }), {
        status: 401,
      });
    }

    if (!body?._type) {
      const message = "Bad Request";
      return new Response(JSON.stringify({ message, body }), { status: 400 });
    }

    const config = sanityTypeRevalidationMap[body._type];

    revalidateSanityDocumentType(body._type);

    if (config) {
      console.log(
        `Revalidated tag: ${config.tag} and paths: ${config.paths.join(
          ", "
        )} for type: ${body._type}`
      );
    } else {
      console.log(`Revalidated all tags and paths for type: ${body._type}`);
    }

    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
      tag: config?.tag || "all",
      paths: config?.paths || [],
    });
  } catch (err: any) {
    console.error(err);
    return new Response(err.message, { status: 500 });
  }
}
