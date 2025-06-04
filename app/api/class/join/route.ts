import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const user = await currentUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { classId } = await req.json();
    if (!classId) {
      return NextResponse.json({ error: "Missing classId" }, { status: 400 });
    }

    const classroom = await prisma.classroom.findUnique({
      where: { id: classId },
    });
    if (!classroom) {
      return NextResponse.json({ error: "Classroom not found" }, { status: 404 });
    }

    // Check existing enrollment (composite primary key on [classId, userId])
    const enrollment = await prisma.classIn.findUnique({
      where: {
        classId_userId: {
          classId,
          userId: user.id,
        },
      },
    });
    if (enrollment) {
      return NextResponse.json(
        { error: "Already enrolled in this classroom" },
        { status: 400 }
      );
    }

    await prisma.classIn.create({
      data: {
        classId,
        userId: user.id,
      },
    });

    return NextResponse.json(
      { message: "Successfully joined classroom" },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
