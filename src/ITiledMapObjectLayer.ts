import { z } from 'zod';
import { isTiledMapProperty } from './ITiledMapProperty';
import { isTiledMapObject } from './ITiledMapObject';

export const isTiledMapObjectLayer = z.object({
  name: z.string(),
  objects: isTiledMapObject.array(),
  opacity: z.number(),
  type: z.literal('objectgroup'),
  visible: z.boolean(),

  draworder: z.string().optional(),
  height: z.number().optional(),
  id: z.number().optional(),
  offsetx: z.number().optional(),
  offsety: z.number().optional(),
  parallaxx: z.number().optional(),
  parallaxy: z.number().optional(),
  properties: isTiledMapProperty.array().optional(),
  startx: z.number().optional(),
  starty: z.number().optional(),
  tintcolor: z.string().optional(),
  width: z.number().optional(),
  x: z.number().optional(),
  y: z.number().optional(),
});

export type ITiledMapObjectLayer = z.infer<typeof isTiledMapObjectLayer>;
