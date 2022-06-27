import * as tg from 'generic-type-guard';
import { isTiledMapProperty } from './ITiledMapProperty';
import { isTiledMapTerrain } from './ITiledMapTerrain';
import { isTiledMapGrid } from './ITiledMapGrid';
import { isTiledMapOffset } from './ITiledMapOffset';
import { isTiledMapTile } from './ITiledMapTile';
import { isTiledMapTransformations } from './ITiledMapTransformations';
import { isTiledMapWangSet } from './ITiledMapWangSet';

export const isTiledMapTileset = new tg.IsInterface()
  .withProperties({
    name: tg.isString,
    image: tg.isString,
  })
  .withOptionalProperties({
    backgroundcolor: tg.isString,
    columns: tg.isNumber,
    fillmode: tg.isSingletonStringUnion('stretch', 'preserve-aspect-fit'),
    firstgid: tg.isNumber,
    grid: isTiledMapGrid,
    id: tg.isNumber,
    imageheight: tg.isNumber,
    imagewidth: tg.isNumber,
    margin: tg.isNumber,
    objectalignment: tg.isString,
    properties: tg.isArray(isTiledMapProperty),
    source: tg.isString,
    spacing: tg.isNumber,
    terrains: tg.isArray(isTiledMapTerrain),
    tilecount: tg.isNumber,
    tiledversion: tg.isString,
    tileheight: tg.isNumber,
    tileoffset: isTiledMapOffset,
    tilerendersize: tg.isSingletonStringUnion('tile', 'grid'),
    tiles: tg.isArray(isTiledMapTile),
    tilewidth: tg.isNumber,
    transformations: isTiledMapTransformations,
    transparentcolor: tg.isString,
    type: tg.isSingletonString('tileset'),
    version: tg.isUnion(tg.isString, tg.isNumber),
    wangsets: tg.isArray(isTiledMapWangSet),
  })
  .get();

export type ITiledMapTileset = tg.GuardedType<typeof isTiledMapTileset>;
