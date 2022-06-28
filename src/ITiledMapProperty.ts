import { z } from 'zod';

export const isTiledMapProperty = z.object({
  name: z.string(),
  type: z.string(),
  value: z.unknown().optional(),
  propertytype: z.string().optional(),
});

export type ITiledMapProperty = z.infer<typeof isTiledMapProperty>;
