import { z } from 'zod';
import { isTiledMapProperty, ITiledMapProperty } from './ITiledMapProperty';
import { isTiledMapLayer, ITiledMapLayer } from './ITiledMapLayer';

interface TiledMapGroupLayerOptional {
  height: number;
  draworder: string;
  id: number;
  offsetx: number;
  offsety: number;
  parallaxx: number;
  parallaxy: number;
  properties: ITiledMapProperty[];
  startx: number;
  starty: number;
  tintcolor: string;
  width: number;
  x: number;
  y: number;
}

export interface TiledMapGroupLayer extends Partial<TiledMapGroupLayerOptional> {
  opacity: number;
  name: string;
  visible: boolean;
  type: 'group';
  layers: ITiledMapLayer[];
}

export const isTiledMapGroupLayer: z.ZodType<TiledMapGroupLayer> = z.lazy(() =>
  z.object({
    name: z.string(),
    opacity: z.number(),
    type: z.literal('group'),
    layers: isTiledMapLayer.array(),
    visible: z.boolean(),

    height: z.number().optional(),
    draworder: z.string().optional(),
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
  }),
);

export type ITiledMapGroupLayer = z.infer<typeof isTiledMapGroupLayer>;
