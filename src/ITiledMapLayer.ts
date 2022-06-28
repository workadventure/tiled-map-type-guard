import { z } from 'zod';
import { isTiledMapTileLayer } from './ITiledMapTileLayer';
import { isTiledMapGroupLayer } from './ITiledMapGroupLayer';
import { isTiledMapObjectLayer } from './ITiledMapObjectLayer';
import { isTiledMapImageLayer } from './ITiledMapImageLayer';

export const isTiledMapLayer = z.union([
  isTiledMapTileLayer,
  isTiledMapGroupLayer,
  isTiledMapObjectLayer,
  isTiledMapImageLayer,
]);

export type ITiledMapLayer = z.infer<typeof isTiledMapLayer>;
