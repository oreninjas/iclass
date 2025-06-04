import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export async function POST(req: Request) {
  try {
    const user = await currentUser();
    const { title } = await req.json();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const classroom = await prisma.classroom.create({
      data: { title, createdBy: user.id },
    });

    await prisma.classIn.create({
      data: {
        userId: user.id,
        classId: classroom.id,
        role: "TEACHER",
      },
    });

    return NextResponse.json(
      { message: "Class created successfully", id: classroom.id },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
