import * as tg from 'generic-type-guard';

export const isTiledMapProperty = new tg.IsInterface()
  .withProperties({
    name: tg.isString,
    type: tg.isString,
    value: tg.isUnion(
      tg.isUnion(tg.isUnion(tg.isString, tg.isBoolean), tg.isNumber),
      tg.isUndefined,
    ),
  })
  .get();

export type ITiledMapProperty = tg.GuardedType<typeof isTiledMapProperty>;
