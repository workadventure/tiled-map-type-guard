import * as tg from 'generic-type-guard';

export const isTiledMapWangTile = new tg.IsInterface()
    .withProperties({
        tileid: tg.isString,
        wangid: tg.isArray(tg.isNumber),
    })
    .get();

export type ITiledMapWangTile = tg.GuardedType<typeof isTiledMapWangTile>;
