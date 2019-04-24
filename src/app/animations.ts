import {
    transition,
    trigger,
    query,
    style,
    animate,
    group
} from '@angular/animations';

export function contentFromLeft(routeNameFrom: string, routeNameTo: string) {
    return transition(`${routeNameFrom} => ${routeNameTo}`, [
        query(':enter, :leave',
            style({ position: 'fixed', width: '100%' }),
            { optional: true }),
        group([
            query(':enter', [
                style({ transform: 'translateX(-100%)' }),
                animate('0.5s ease-in-out',
                    style({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            query(':leave', [
                style({ transform: 'translateX(0%)' }),
                animate('0.5s ease-in-out',
                    style({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]);
}

export function contentFromRight(routeNameFrom: string, routeNameTo: string) {
    return transition(`${routeNameFrom} => ${routeNameTo}`, [
        query(':enter, :leave',
            style({ position: 'fixed', width: '100%' }),
            { optional: true }),
        group([
            query(':enter', [
                style({ transform: 'translateX(100%)' }),
                animate('0.5s ease-in-out',
                    style({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            query(':leave', [
                style({ transform: 'translateX(0%)' }),
                animate('0.5s ease-in-out',
                    style({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]);
}

export const slideInAnimation =
    trigger('routeAnimations', [
        contentFromRight('Home', '*'),
        contentFromRight('DogShow', 'Schedule'),
        contentFromRight('DogShow', 'Classes'),
        contentFromRight('DogShow', 'FindUs'),
        contentFromLeft('DogShow', 'Home'),
        contentFromRight('Schedule', 'Classes'),
        contentFromRight('Schedule', 'FindUs'),
        contentFromLeft('Schedule', 'Home'),
        contentFromLeft('Schedule', 'DogShow'),
        contentFromLeft('Classes', 'Schedule'),
        contentFromLeft('Classes', 'DogShow'),
        contentFromLeft('Classes', 'Home'),
        contentFromRight('Classes', 'FindUs'),
        contentFromLeft('FindUs', '*')
    ]);
