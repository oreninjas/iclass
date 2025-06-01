import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default async function POST(req: Request) {
  try {
    const user = await currentUser();
    const { title } = await req.json();

    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    let classroom = await prisma.classroom.create({
      data: { title, createdBy: user.id },
    });

    await prisma.classIn.create({
      data: {
        userId: user.id,
        classId: classroom.id,
        role: "TEACHER",
      },
    });

    return new NextResponse("Class created successfully", { status: 201 });
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
