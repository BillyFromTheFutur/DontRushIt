import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ username: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.user.create({
        data: {
          id: ctx.session.user.id,
        },
      });
    }),
});
