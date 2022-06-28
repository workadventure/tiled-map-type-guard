import { z } from 'zod';
import { isTiledMapProperty } from './ITiledMapProperty';

export const isTiledMapWangColor = z.object({
  name: z.string(),
  color: z.string(),
  tile: z.number(),

  probability: z.number(),
  properties: isTiledMapProperty.array(),
  type: z.string().optional(),
  class: z.string().optional(),
});

export type ITiledMapWangColor = z.infer<typeof isTiledMapWangColor>;
