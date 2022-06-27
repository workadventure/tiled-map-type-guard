import * as tg from 'generic-type-guard';
import { isTiledMapProperty, ITiledMapProperty } from './ITiledMapProperty';
import type { ITiledMapLayer } from './ITiledMapLayer';
import { TypeGuard } from 'generic-type-guard';
/* eslint-disable @typescript-eslint/ban-types */

let circularDependencyBreaker: TypeGuard<unknown> = tg.isNumber;
export const setIsTiledMapLayer = (newFunction: TypeGuard<unknown>): void => {
    circularDependencyBreaker = newFunction;
};

export const isTiledMapGroupLayer: TypeGuard<
    object & {
        opacity: number;
        name: string;
        visible: boolean;
        layers: ITiledMapLayer[];
        type: 'group';
    } & Partial<{
            height: number;
            draworder: string;
            id: number;
            class: string;
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
        }>
> = new tg.IsInterface()
    .withProperties({
        name: tg.isString,
        opacity: tg.isNumber,
        layers: tg.isArray((param): param is ITiledMapLayer => circularDependencyBreaker(param)),
        visible: tg.isBoolean,
        type: tg.isSingletonString('group'),
    })
    .withOptionalProperties({
        height: tg.isNumber,
        draworder: tg.isString,
        id: tg.isNumber,
        offsetx: tg.isNumber,
        offsety: tg.isNumber,
        parallaxx: tg.isNumber,
        parallaxy: tg.isNumber,
        properties: tg.isArray(isTiledMapProperty),
        startx: tg.isNumber,
        starty: tg.isNumber,
        tintcolor: tg.isString,
        width: tg.isNumber,
        class: tg.isString,
        x: tg.isNumber,
        y: tg.isNumber,
    })
    .get();

export type ITiledMapGroupLayer = tg.GuardedType<typeof isTiledMapGroupLayer>;
