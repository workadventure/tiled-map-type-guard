import * as tg from 'generic-type-guard';
import { isTiledMapProperty } from './ITiledMapProperty';
import { isTiledMapLayer } from './ITiledMapLayer';
import { isTiledMapTileset } from './ITiledMapTileset';

export const isTiledMap = new tg.IsInterface()
    .withProperties({
        layers: tg.isArray(isTiledMapLayer),
        tiledversion: tg.isString,
        tilesets: tg.isArray(isTiledMapTileset),
        type: tg.isSingletonString('map'),
    })
    .withOptionalProperties({
        backgroundcolor: tg.isString,
        compressionlevel: tg.isNumber,
        height: tg.isNumber,
        hexsidelength: tg.isNumber,
        infinite: tg.isBoolean,
        nextlayerid: tg.isNumber,
        nextobjectid: tg.isNumber,
        orientation: tg.isSingletonStringUnion('orthogonal', 'isometric', 'staggered', 'hexagonal'),
        parallaxoriginx: tg.isNumber,
        parallaxoriginy: tg.isNumber,
        properties: tg.isArray(isTiledMapProperty),
        renderorder: tg.isSingletonStringUnion('right-down', 'right-up', 'left-down', 'left-up'),
        staggeraxis: tg.isSingletonStringUnion('x', 'y'),
        staggerindex: tg.isSingletonStringUnion('odd', 'even'),
        tileheight: tg.isNumber,
        tilewidth: tg.isNumber,
        class: tg.isString,
        version: tg.isUnion(tg.isString, tg.isNumber),
        width: tg.isNumber,
    })
    .get();

export type ITiledMap = tg.GuardedType<typeof isTiledMap>;
