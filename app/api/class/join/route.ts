import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default async function POST(req: Request) {
  try {
    const user = await currentUser();
    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const { classId } = await req.json();
    if (!classId) {
      return new NextResponse("Missing classId", { status: 400 });
    }
    const isClassroom = await prisma.classroom.findUnique({
      where: {
        id: classId,
      },
    });
    if (!isClassroom) {
      return new NextResponse("Classroom not found", { status: 404 });
    }

    // joining logic
    await prisma.classIn.create({})
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
