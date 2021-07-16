import * as tg from 'generic-type-guard';
import { isTiledMapProperty } from './ITiledMapProperty';
import { isTiledMapPoint } from './ITiledMapPoint';
import { isTiledMapText } from './ITiledMapText';

export const isTiledMapObject = new tg.IsInterface()
  .withProperties({
    id: tg.isNumber,
    name: tg.isString,
    type: tg.isString,
    visible: tg.isBoolean,
    x: tg.isNumber,
    y: tg.isNumber,
  })
  .withOptionalProperties({
    ellipse: tg.isBoolean,
    gid: tg.isBoolean,
    height: tg.isNumber,
    point: tg.isBoolean,
    polygon: tg.isArray(isTiledMapPoint),
    polyline: tg.isArray(isTiledMapPoint),
    properties: tg.isArray(isTiledMapProperty),
    rotation: tg.isNumber,
    template: tg.isString,
    text: isTiledMapText,
    width: tg.isNumber,
  })
  .get();

export type ITiledMapObject = tg.GuardedType<typeof isTiledMapObject>;
