import * as tg from 'generic-type-guard';
import { isTiledMapFrame } from './ITiledMapFrame';
import { isTiledMapObjectLayer } from './ITiledMapObjectLayer';
import { isTiledMapProperty } from './ITiledMapProperty';
import { isTiledMapTerrain } from './ITiledMapTerrain';

export const isTiledMapTile = new tg.IsInterface()
  .withProperties({
    id: tg.isNumber,
  })
  .withOptionalProperties({
    animation: tg.isArray(isTiledMapFrame),
    image: tg.isString,
    imageheight: tg.isNumber,
    imagewidth: tg.isNumber,
    objectgroup: tg.isArray(isTiledMapObjectLayer),
    probability: tg.isNumber,
    properties: tg.isArray(isTiledMapProperty),
    terrain: tg.isArray(isTiledMapTerrain),
    type: tg.isString,
  })
  .get();

export type ITiledMapTile = tg.GuardedType<typeof isTiledMapTile>;
