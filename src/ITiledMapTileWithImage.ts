import { z } from 'zod';
import { ITiledMapTile } from './ITiledMapTile';

export const ITiledMapTileWithImage = ITiledMapTile.and(
  z.object({
    image: z.string(),
    imageheight: z.number().optional(),
    imagewidth: z.number().optional(),
  }),
);

export type ITiledMapTileWithImage = z.infer<typeof ITiledMapTileWithImage>;
