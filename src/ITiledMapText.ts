import * as tg from 'generic-type-guard';

export const isTiledMapText = new tg.IsInterface()
  .withProperties({
    text: tg.isString,
  })
  .withOptionalProperties({
    bold: tg.isBoolean,
    color: tg.isString,
    fontfamily: tg.isString,
    halign: tg.isSingletonStringUnion('center', 'right', 'justify', 'left'),
    italic: tg.isBoolean,
    kerning: tg.isBoolean,
    pixelsize: tg.isNumber,
    strikeout: tg.isBoolean,
    underline: tg.isBoolean,
    valign: tg.isSingletonStringUnion('center', 'bottom', 'top'),
    wrap: tg.isBoolean,
  })
  .get();

export type ITiledMapText = tg.GuardedType<typeof isTiledMapText>;
