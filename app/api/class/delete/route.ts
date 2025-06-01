import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default async function DELETE(request: Request) {
  try {
    const user = await currentUser();
    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { classId } = await request.json();
    if (!classId) {
      return new NextResponse("Missing classId", { status: 400 });
    }
    const isClassroomOwner = await prisma.classroom.findUnique({
      where: {
        id: classId,
      },
    });
    // if it's not the owner or if the classroom doesn't exist
    if (!isClassroomOwner || isClassroomOwner.createdBy !== user.id) {
      return new NextResponse("Forbidden", { status: 403 });
    }
    await prisma.classroom.delete({
      where: { id: classId },
    });
    return NextResponse.json("Classroom deleted successfully", { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
