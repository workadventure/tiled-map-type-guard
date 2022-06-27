import { z } from 'zod';
import { isTiledMapProperty } from './ITiledMapProperty';
import { isTiledMapTerrain } from './ITiledMapTerrain';
import { isTiledMapGrid } from './ITiledMapGrid';
import { isTiledMapOffset } from './ITiledMapOffset';
import { isTiledMapTile } from './ITiledMapTile';
import { isTiledMapTransformations } from './ITiledMapTransformations';
import { isTiledMapWangSet } from './ITiledMapWangSet';

export const isTiledMapTileset = z.object({
  name: z.string(),
  image: z.string(),

  backgroundcolor: z.string().optional(),
  columns: z.number().optional(),
  fillmode: z.enum(['stretch', 'preserve-aspect-fit']).optional(),
  firstgid: z.number().optional(),
  grid: isTiledMapGrid.optional(),
  id: z.number().optional(),
  imageheight: z.number().optional(),
  imagewidth: z.number().optional(),
  margin: z.number().optional(),
  objectalignment: z.string().optional(),
  properties: isTiledMapProperty.array().optional(),
  source: z.string().optional(),
  spacing: z.number().optional(),
  terrains: isTiledMapTerrain.array().optional(),
  tilecount: z.number().optional(),
  tiledversion: z.string().optional(),
  tileheight: z.number().optional(),
  tileoffset: isTiledMapOffset.optional(),
  tilerendersize: z.enum(['tile', 'grid']).optional(),
  tiles: isTiledMapTile.array().optional(),
  tilewidth: z.number().optional(),
  transformations: isTiledMapTransformations.optional(),
  transparentcolor: z.string().optional(),
  type: z.literal('tileset').optional(),
  version: z.union([z.string(), z.number()]).optional(),
  wangsets: isTiledMapWangSet.array().optional(),
});

export type ITiledMapTileset = z.infer<typeof isTiledMapTileset>;
