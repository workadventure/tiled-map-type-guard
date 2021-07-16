import * as tg from 'generic-type-guard';

export const isTiledMapOffset = new tg.IsInterface()
  .withProperties({
    x: tg.isNumber,
    y: tg.isNumber,
  })
  .get();

export type ITiledMapOffset = tg.GuardedType<typeof isTiledMapOffset>;
