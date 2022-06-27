import * as tg from 'generic-type-guard';

export const isTiledMapTransformations = new tg.IsInterface()
    .withOptionalProperties({
        hflip: tg.isBoolean,
        vflip: tg.isBoolean,
        rotate: tg.isBoolean,
        preferuntransformed: tg.isBoolean,
    })
    .get();

export type ITiledMapTransformations = tg.GuardedType<typeof isTiledMapTransformations>;
