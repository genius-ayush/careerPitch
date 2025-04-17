import { authOptions } from "@/lib/auth-options";
import { prismaClient } from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

type Params = {
  params: {
    id: string;
  };
};

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "unauthorized user" }, { status: 401 });
  }

  const messageId = parseInt(params.id);
  if (isNaN(messageId)) {
    return NextResponse.json({ error: "Invalid message ID" }, { status: 400 });
  }

  try {
    const message = await prismaClient.message.findUnique({
      where: {
        id: messageId,
        email: session.user.email,
      },
    });

    if (!message) {
      return NextResponse.json({ error: "message not found" }, { status: 404 });
    }

    return NextResponse.json(message, { status: 200 });
  } catch (error) {
    console.error("Error fetching message", error);
    return NextResponse.json({ error: "failed to fetch message" }, { status: 400 });
  }
}

export async function PATCH(req: NextRequest, { params }: Params) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized user" }, { status: 401 });
  }

  const messageId = parseInt(params.id);
  if (isNaN(messageId)) {
    return NextResponse.json({ error: "Invalid message ID" }, { status: 400 });
  }

  const body = await req.json();
  const { emailText, linkedInText } = body;

  try {
    const updatedMessage = await prismaClient.message.update({
      where: {
        id: messageId,
        email: session.user.email,
      },
      data: {
        emailText,
        linkedInText,
      },
    });

    return NextResponse.json(updatedMessage, { status: 200 });
  } catch (error) {
    console.error("Error updating message:", error);
    return NextResponse.json({ error: "failed to update message" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: Params) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized user" }, { status: 401 });
  }

  const messageId = parseInt(params.id);
  if (isNaN(messageId)) {
    return NextResponse.json({ error: "Invalid message ID" }, { status: 400 });
  }

  try {
    await prismaClient.message.delete({
      where: {
        id: messageId,
        email: session.user.email,
      },
    });

    return NextResponse.json({ message: "Message deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting message:", error);
    return NextResponse.json({ error: "Failed to delete message" }, { status: 500 });
  }
}
