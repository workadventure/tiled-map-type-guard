import { z } from 'zod';
import { isTiledMapProperty } from './ITiledMapProperty';
import { isTiledMapChunk } from './ITiledMapChunk';

export const isTiledMapTileLayer = z.object({
  data: z.union([z.string(), z.number().array()]),
  height: z.number(),
  id: z.number(),
  name: z.string(),
  opacity: z.number(),
  type: z.literal('tilelayer'),
  visible: z.boolean(),
  width: z.number(),

  chunks: isTiledMapChunk.array().optional(),
  compression: z.string().optional(),
  encoding: z.enum(['csv', 'base64']).optional(),
  offsetx: z.number().optional(),
  offsety: z.number().optional(),
  parallaxx: z.number().optional(),
  parallaxy: z.number().optional(),
  properties: isTiledMapProperty.array().optional(),
  startx: z.number().optional(),
  starty: z.number().optional(),
  tintcolor: z.string().optional(),
  class: z.string().optional(),
  x: z.number().optional(),
  y: z.number().optional(),
});

export type ITiledMapTileLayer = z.infer<typeof isTiledMapTileLayer>;
