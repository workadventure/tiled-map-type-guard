import { z } from 'zod';
import { isTiledMapProperty } from './ITiledMapProperty';
import { isTiledMapPoint } from './ITiledMapPoint';
import { isTiledMapText } from './ITiledMapText';

export const isTiledMapObject = z.object({
  id: z.number(),
  name: z.string(),
  visible: z.boolean(),
  x: z.number(),
  y: z.number(),

  ellipse: z.boolean().optional(),
  gid: z.boolean().optional(),
  height: z.number().optional(),
  point: z.boolean().optional(),
  polygon: isTiledMapPoint.array().optional(),
  polyline: isTiledMapPoint.array().optional(),
  properties: isTiledMapProperty.array().optional(),
  rotation: z.number().optional(),
  template: z.string().optional(),
  text: isTiledMapText.optional(),
  type: z.string().optional(),
  class: z.string().optional(),
  width: z.number().optional(),
});

export type ITiledMapObject = z.infer<typeof isTiledMapObject>;
