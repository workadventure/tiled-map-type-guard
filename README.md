# Tiled map type guards

![Github Actions](https://github.com/workadventure/tiled-map-type-guard/workflows/Release/badge.svg) [![codecov](https://codecov.io/gh/workadventure/tiled-map-type-guard/branch/main/graph/badge.svg?token=UCCA6D6JCB)](https://codecov.io/gh/workadventure/tiled-map-type-guard)

When working with [Tiled](https://www.mapeditor.org/) maps, it can be useful to have property defined types in Typescript.

This package contains a set of interfaces that map the [Tiled map JSON format](https://doc.mapeditor.org/en/stable/reference/json-map-format/).

Moreover, this package comes with [Zod type guards](https://github.com/colinhacks/zod) that will allow
you to actually **check** that the JSON file ou are reading is actually a well-formed Tiled map.

Available interfaces:

- `ITiledMap`
- `ITiledMapLayer`
  - `ITiledMapGroupLayer`
  - `ITiledMapImageLayer`
  - `ITiledMapObjectLayer`
    - `ITiledMapObject`
      - `ITiledMapText`
      - `ITiledMapPoint`
  - `ITiledMapTileLayer`
- `ITiledMapTileset`
  - `ITiledMapTile`
    - `ITiledMapWangColor`
    - `ITiledMapWangSet`
    - `ITiledMapWangTile`
- `ITiledMapChunk`
- `ITiledMapFrame`
- `ITiledMapGrid`
- `ITiledMapOffset`
- `ITiledMapProperty`
- `ITiledMapTerrain`
- `ITiledMapTransformations`

Usage:

```ts
// This will throw an error if "data" is not matching the type ITiledMap
const map: ITiledMap = ITiledMap.parse(data);
```
