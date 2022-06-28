import { z } from 'zod';

export const isTiledMapPoint = z.object({
  x: z.number(),
  y: z.number(),
});

export type ITiledMapPoint = z.infer<typeof isTiledMapPoint>;
