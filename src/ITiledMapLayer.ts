import * as tg from 'generic-type-guard';
import { isTiledMapTileLayer } from './ITiledMapTileLayer';
import { isTiledMapGroupLayer } from './ITiledMapGroupLayer';
import { isTiledMapObjectLayer } from './ITiledMapObjectLayer';
import { isTiledMapImageLayer } from './ITiledMapImageLayer';

export const isTiledMapLayer = tg.isUnion(
  isTiledMapTileLayer,
  tg.isUnion(isTiledMapGroupLayer, tg.isUnion(isTiledMapObjectLayer, isTiledMapImageLayer)),
);

export type ITiledMapLayer = tg.GuardedType<typeof isTiledMapLayer>;
