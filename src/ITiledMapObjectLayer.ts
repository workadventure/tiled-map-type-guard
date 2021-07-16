import * as tg from 'generic-type-guard';
import { isTiledMapProperty } from './ITiledMapProperty';
import { isTiledMapObject } from './ITiledMapObject';

export const isTiledMapObjectLayer = new tg.IsInterface()
  .withProperties({
    name: tg.isString,
    objects: tg.isArray(isTiledMapObject),
    opacity: tg.isNumber,
    type: tg.isSingletonString('objectgroup'),
    visible: tg.isBoolean,
  })
  .withOptionalProperties({
    draworder: tg.isString,
    height: tg.isNumber,
    id: tg.isNumber,
    offsetx: tg.isNumber,
    offsety: tg.isNumber,
    parallaxx: tg.isNumber,
    parallaxy: tg.isNumber,
    properties: tg.isArray(isTiledMapProperty),
    startx: tg.isNumber,
    starty: tg.isNumber,
    tintcolor: tg.isString,
    width: tg.isNumber,
    x: tg.isNumber,
    y: tg.isNumber,
  })
  .get();

export type ITiledMapObjectLayer = tg.GuardedType<typeof isTiledMapObjectLayer>;
