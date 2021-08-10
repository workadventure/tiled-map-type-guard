import * as tg from 'generic-type-guard';
import { isTiledMapProperty, ITiledMapProperty } from './ITiledMapProperty';
import { isTiledMapLayer, ITiledMapLayer } from './ITiledMapLayer';
import { TypeGuard } from 'generic-type-guard';
/* eslint-disable @typescript-eslint/ban-types */

export const isTiledMapGroupLayer: TypeGuard<
  object & {
    opacity: number;
    name: string;
    visible: boolean;
    type: 'group';
    layers: ITiledMapLayer[];
  } & Partial<{
      height: number;
      draworder: string;
      id: number;
      offsetx: number;
      offsety: number;
      parallaxx: number;
      parallaxy: number;
      properties: ITiledMapProperty[];
      startx: number;
      starty: number;
      tintcolor: string;
      width: number;
      x: number;
      y: number;
    }>
> = new tg.IsInterface()
  .withProperties({
    name: tg.isString,
    //layers: tg.isTiledMapLayer,
    opacity: tg.isNumber,
    type: tg.isSingletonString('group'),
    layers: tg.isArray(isTiledMapLayer),
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
