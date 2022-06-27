import * as tg from 'generic-type-guard';
import { isArray } from 'generic-type-guard';
import { isTiledMapProperty } from './ITiledMapProperty';

export const isTiledMapTerrain = new tg.IsInterface()
    .withProperties({
        name: tg.isString,
        tile: tg.isNumber,
    })
    .withOptionalProperties({
        properties: isArray(isTiledMapProperty),
    })
    .get();

export type ITiledMapTerrain = tg.GuardedType<typeof isTiledMapTerrain>;
