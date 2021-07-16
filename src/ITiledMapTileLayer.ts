import * as tg from 'generic-type-guard';
import { isTiledMapProperty } from './ITiledMapProperty';
import { isTiledMapChunk } from './ITiledMapChunk';

export const isTiledMapTileLayer = new tg.IsInterface()
  .withProperties({
    data: tg.isUnion(tg.isString, tg.isArray(tg.isNumber)),
    height: tg.isNumber,
    id: tg.isNumber,
    name: tg.isString,
    opacity: tg.isNumber,
    type: tg.isSingletonString('tilelayer'),
    visible: tg.isBoolean,
    width: tg.isNumber,
  })
  .withOptionalProperties({
    chunks: tg.isArray(isTiledMapChunk),
    compression: tg.isString,
    encoding: tg.isSingletonStringUnion('csv', 'base64'),
    offsetx: tg.isNumber,
    offsety: tg.isNumber,
    parallaxx: tg.isNumber,
    parallaxy: tg.isNumber,
    properties: tg.isArray(isTiledMapProperty),
    startx: tg.isNumber,
    starty: tg.isNumber,
    tintcolor: tg.isString,
    x: tg.isNumber,
    y: tg.isNumber,
  })
  .get();

export type ITiledMapTileLayer = tg.GuardedType<typeof isTiledMapTileLayer>;
