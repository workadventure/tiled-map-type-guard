import { z } from 'zod';

export const isTiledMapOffset = z.object({
  x: z.number(),
  y: z.number(),
});

export type ITiledMapOffset = z.infer<typeof isTiledMapOffset>;
