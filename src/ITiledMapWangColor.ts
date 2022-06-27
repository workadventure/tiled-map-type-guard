import { z } from 'zod';
import { isTiledMapProperty } from './ITiledMapProperty';

export const isTiledMapWangColor = z.object({
  name: z.string(),
  color: z.string(),
  tile: z.number(),

  probability: z.number(),
  properties: isTiledMapProperty.array(),
});

export type ITiledMapWangColor = z.infer<typeof isTiledMapWangColor>;
