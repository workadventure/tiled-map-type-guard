import * as tg from 'generic-type-guard';
import { isTiledMapProperty } from './ITiledMapProperty';
import { isTiledMapWangColor } from './ITiledMapWangColor';
import { isTiledMapWangTile } from './ITiledMapWangTile';

export const isTiledMapWangSet = new tg.IsInterface()
  .withProperties({
    name: tg.isString,
    tile: tg.isNumber,
  })
  .withOptionalProperties({
    colors: tg.isArray(isTiledMapWangColor),
    properties: tg.isArray(isTiledMapProperty),
    wangtiles: tg.isArray(isTiledMapWangTile),
  })
  .get();

export type ITiledMapWangSet = tg.GuardedType<typeof isTiledMapWangSet>;
