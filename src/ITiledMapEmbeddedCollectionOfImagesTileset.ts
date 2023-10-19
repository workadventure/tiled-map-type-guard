import { z } from 'zod';
import { ITiledMapEmbeddedTileset } from './ITiledMapEmbeddedTileset';
import { ITiledMapTileWithImage } from './ITiledMapTileWithImage';

export const ITiledEmbeddedCollectionOfImagesTileset = ITiledMapEmbeddedTileset.omit({
  image: true,
  tiles: true,
}).and(
  z.object({
    tiles: z.array(ITiledMapTileWithImage).optional(),
  }),
);

export type ITiledEmbeddedCollectionOfImagesTileset = z.infer<
  typeof ITiledEmbeddedCollectionOfImagesTileset
>;
