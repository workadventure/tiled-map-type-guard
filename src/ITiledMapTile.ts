import { z } from 'zod';
import { isTiledMapFrame } from './ITiledMapFrame';
import { isTiledMapObjectLayer } from './ITiledMapObjectLayer';
import { isTiledMapProperty } from './ITiledMapProperty';
import { isTiledMapTerrain } from './ITiledMapTerrain';

export const isTiledMapTile = z.object({
  id: z.number(),

  animation: isTiledMapFrame.array().optional(),
  image: z.string().optional(),
  imageheight: z.number().optional(),
  imagewidth: z.number().optional(),
  x: z.number().optional(),
  y: z.number().optional(),
  width: z.number().optional(),
  height: z.number().optional(),
  objectgroup: isTiledMapObjectLayer.array().optional(),
  probability: z.number().optional(),
  properties: isTiledMapProperty.array().optional(),
  class: z.string().optional(),
  terrain: isTiledMapTerrain.array().optional(),
  type: z.string().optional(),
});

export type ITiledMapTile = z.infer<typeof isTiledMapTile>;
