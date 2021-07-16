import * as tg from 'generic-type-guard';

export const isTiledMapPoint = new tg.IsInterface()
  .withProperties({
    x: tg.isNumber,
    y: tg.isNumber,
  })
  .get();

export type ITiledMapPoint = tg.GuardedType<typeof isTiledMapPoint>;
