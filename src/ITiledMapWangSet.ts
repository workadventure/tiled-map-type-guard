import { z } from 'zod';
import { isTiledMapProperty } from './ITiledMapProperty';
import { isTiledMapWangColor } from './ITiledMapWangColor';
import { isTiledMapWangTile } from './ITiledMapWangTile';

export const isTiledMapWangSet = z.object({
  name: z.string(),
  tile: z.number(),

  colors: isTiledMapWangColor.array().optional(),
  properties: isTiledMapProperty.array().optional(),
  wangtiles: isTiledMapWangTile.array().optional(),
});

export type ITiledMapWangSet = z.infer<typeof isTiledMapWangSet>;
