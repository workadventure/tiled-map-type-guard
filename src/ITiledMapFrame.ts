import * as tg from 'generic-type-guard';

export const isTiledMapFrame = new tg.IsInterface()
    .withProperties({
        duration: tg.isNumber,
        tileid: tg.isNumber,
    })
    .get();

export type ITiledMapFrame = tg.GuardedType<typeof isTiledMapFrame>;
