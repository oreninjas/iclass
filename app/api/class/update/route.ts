import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const user = await currentUser();
    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { classId, title } = await request.json();
    if (!classId || !title) {
      return new NextResponse("Missing classId or title", { status: 400 });
    }

    let isClassroomOwner = await prisma.classroom.findUnique({
      where: {
        id: classId,
        createdBy: user.id,
      },
    });
    if (!isClassroomOwner) {
      return new NextResponse("Forbidden", { status: 403 });
    }
    const updatedClassroom = await prisma.classroom.update({
      where: { id: classId },
      data: { title },
    });
    return NextResponse.json(updatedClassroom);
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
