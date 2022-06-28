import { z } from 'zod';
import { isTiledMapProperty } from './ITiledMapProperty';

export const isTiledMapTerrain = z.object({
  name: z.string(),
  tile: z.number(),
  properties: isTiledMapProperty.array().optional(),
});

export type ITiledMapTerrain = z.infer<typeof isTiledMapTerrain>;
