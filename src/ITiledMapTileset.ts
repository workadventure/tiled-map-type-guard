import { z } from 'zod';
import { ITiledMapEmbeddedTileset } from './ITiledMapEmbeddedTileset';
import { ITiledMapTilesetReference } from './ITiledMapTilesetReference';
import { ITiledEmbeddedCollectionOfImagesTileset } from './ITiledMapEmbeddedCollectionOfImagesTileset';

export const ITiledMapTileset = z.union([
  ITiledMapEmbeddedTileset,
  ITiledMapTilesetReference,
  ITiledEmbeddedCollectionOfImagesTileset,
]);

export type ITiledMapTileset = z.infer<typeof ITiledMapTileset>;
