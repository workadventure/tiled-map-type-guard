# Tiled map type guard

![Github Actions](https://github.com/workadventure/tiled-map-type-guard/workflows/Release/badge.svg) [![codecov](https://codecov.io/gh/workadventure/tiled-map-type-guard/branch/main/graph/badge.svg?token=UCCA6D6JCB)](https://codecov.io/gh/workadventure/tiled-map-type-guard)

When working with [Tiled](https://www.mapeditor.org/) maps, it can be useful to have property defined types in Typescript.

This package contains a set of interfaces that map the [Tiled map JSON format](https://doc.mapeditor.org/en/stable/reference/json-map-format/).

Moreover, this package comes with [type guards](https://www.typescriptlang.org/docs/handbook/advanced-types.html) that will allow
you to actually **check** that the JSON file ou are reading is actually a well-formed Tiled map.

Available interfaces:

- `ITiledMap` (typeguard `isTiledMap`)
- `ITiledMapLayer` (typeguard `isTiledMapLayer`)
  - `ITiledMapGroupLayer` (typeguard `isTiledMapGroupLayer`)
  - `ITiledMapImageLayer` (typeguard `isTiledMapImageLayer`)
  - `ITiledMapObjectLayer` (typeguard `isTiledMapObjectLayer`)
    - `ITiledMapObject` (typeguard `isTiledMapObject`)
      - `ITiledMapText` (typeguard `isTiledMapText`)
      - `ITiledMapPoint` (typeguard `isTiledMapPoint`)
  - `ITiledMapTileLayer` (typeguard `isTiledMapTileLayer`)
- `ITiledMapTileset` (typeguard `isTiledMapTileset`)
  - `ITiledMapTile` (typeguard `isTiledMapTile`)
    - `ITiledMapWangColor` (typeguard `isTiledMapWangColor`)
    - `ITiledMapWangSet` (typeguard `isTiledMapWangSet`)
    - `ITiledMapWangTile` (typeguard `isTiledMapWangTile`)
- `ITiledMapChunk` (typeguard `isTiledMapChunk`)
- `ITiledMapFrame` (typeguard `isTiledMapFrame`)
- `ITiledMapGrid` (typeguard `isTiledMapGrid`)
- `ITiledMapOffset` (typeguard `isTiledMapOffset`)
- `ITiledMapProperty` (typeguard `isTiledMapProperty`)
- `ITiledMapTerrain` (typeguard `isTiledMapTerrain`)
- `ITiledMapTransformations` (typeguard `isTiledMapTransformations`)
