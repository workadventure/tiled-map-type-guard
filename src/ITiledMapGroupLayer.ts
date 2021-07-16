import * as tg from 'generic-type-guard';
import { isTiledMapProperty } from './ITiledMapProperty';

export const isTiledMapGroupLayer = new tg.IsInterface()
  .withProperties({
    name: tg.isString,
    //layers: tg.isTiledMapLayer,
    opacity: tg.isNumber,
    type: tg.isSingletonString('group'),
    visible: tg.isBoolean,
  })
  .withOptionalProperties({
    height: tg.isNumber,
    draworder: tg.isString,
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

export type ITiledMapGroupLayer = tg.GuardedType<typeof isTiledMapGroupLayer>;
