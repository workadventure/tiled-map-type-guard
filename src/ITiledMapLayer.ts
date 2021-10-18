import * as tg from 'generic-type-guard';
import { isTiledMapTileLayer } from './ITiledMapTileLayer';
import { isTiledMapGroupLayer, setIsTiledMapLayer } from './ITiledMapGroupLayer';
import { isTiledMapObjectLayer } from './ITiledMapObjectLayer';
import { isTiledMapImageLayer } from './ITiledMapImageLayer';

export const isTiledMapLayer = tg.isUnion(
  isTiledMapTileLayer,
  tg.isUnion(isTiledMapGroupLayer, tg.isUnion(isTiledMapObjectLayer, isTiledMapImageLayer)),
);

// This is used to break a circular dependency between isTiledMapLayer and isTiledMapGroupLayer
setIsTiledMapLayer(isTiledMapTileLayer);

export type ITiledMapLayer = tg.GuardedType<typeof isTiledMapLayer>;
