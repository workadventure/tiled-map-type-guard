import { z } from 'zod';

export const isTiledMapTransformations = z.object({
  hflip: z.boolean().optional(),
  vflip: z.boolean().optional(),
  rotate: z.boolean().optional(),
  preferuntransformed: z.boolean().optional(),
});

export type ITiledMapTransformations = z.infer<typeof isTiledMapTransformations>;
