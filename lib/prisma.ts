// src/lib/prisma.ts (or just lib/prisma.ts)

import { PrismaClient } from '@prisma/client';

// 1. Declare a global variable to store the PrismaClient instance
// This is to prevent multiple instances of PrismaClient in development (due to Next.js hot-reloading)
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

// In production, always create a new instance
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
}
// In development, reuse the existing global instance if it exists, otherwise create one
else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;