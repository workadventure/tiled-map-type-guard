import * as tg from 'generic-type-guard';

export const isTiledMapGrid = new tg.IsInterface()
    .withProperties({
        width: tg.isNumber,
        height: tg.isNumber,
        orientation: tg.isSingletonStringUnion('orthogonal', 'isometric'),
    })
    .get();

export type ITiledMapGrid = tg.GuardedType<typeof isTiledMapGrid>;
