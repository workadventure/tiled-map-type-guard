import * as tg from 'generic-type-guard';
import { isTiledMapProperty } from './ITiledMapProperty';

export const isTiledMapWangColor = new tg.IsInterface()
  .withProperties({
    name: tg.isString,
    color: tg.isString,
    tile: tg.isNumber,
  })
  .withOptionalProperties({
    probability: tg.isNumber,
    properties: tg.isArray(isTiledMapProperty),
  })
  .get();

export type ITiledMapWangColor = tg.GuardedType<typeof isTiledMapWangColor>;
