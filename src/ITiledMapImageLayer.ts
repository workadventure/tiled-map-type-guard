import * as tg from 'generic-type-guard';
import { isTiledMapProperty } from './ITiledMapProperty';

export const isTiledMapImageLayer = new tg.IsInterface()
  .withProperties({
    image: tg.isString,
    name: tg.isString,
    opacity: tg.isNumber,
    type: tg.isSingletonString('imagelayer'),
    visible: tg.isBoolean,
  })
  .withOptionalProperties({
    height: tg.isNumber,
    id: tg.isNumber,
    offsetx: tg.isNumber,
    offsety: tg.isNumber,
    parallaxx: tg.isNumber,
    parallaxy: tg.isNumber,
    properties: tg.isArray(isTiledMapProperty),
    repeatx: tg.isBoolean,
    repeaty: tg.isBoolean,
    startx: tg.isNumber,
    starty: tg.isNumber,
    tintcolor: tg.isString,
    class: tg.isString,
    width: tg.isNumber,
    x: tg.isNumber,
    y: tg.isNumber,
  })
  .get();

export type ITiledMapImageLayer = tg.GuardedType<typeof isTiledMapImageLayer>;
