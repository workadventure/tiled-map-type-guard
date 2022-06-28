import { z } from 'zod';

export const isTiledMapFrame = z.object({
  duration: z.number(),
  tileid: z.number(),
});

export type ITiledMapFrame = z.infer<typeof isTiledMapFrame>;
