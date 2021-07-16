import * as tg from 'generic-type-guard';

export const isTiledMapChunk = new tg.IsInterface()
  .withProperties({
    data: tg.isUnion(tg.isString, tg.isArray(tg.isNumber)),
    height: tg.isNumber,
    width: tg.isNumber,
    x: tg.isNumber,
    y: tg.isNumber,
  })
  .get();

export type ITiledMapChunk = tg.GuardedType<typeof isTiledMapChunk>;
