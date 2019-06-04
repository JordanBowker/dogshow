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
        contentFromRight('WhatsOn', 'Schedule'),
        contentFromRight('WhatsOn', 'Stalls'),
        contentFromRight('WhatsOn', 'FindUs'),
        contentFromRight('WhatsOn', 'Links'),
        contentFromLeft('WhatsOn', 'Home'),
        contentFromRight('Schedule', 'Stalls'),
        contentFromRight('Schedule', 'FindUs'),
        contentFromRight('Schedule', 'Links'),
        contentFromLeft('Schedule', 'Home'),
        contentFromLeft('Schedule', 'WhatsOn'),
        contentFromLeft('Stalls', 'Schedule'),
        contentFromLeft('Stalls', 'WhatsOn'),
        contentFromLeft('Stalls', 'Home'),
        contentFromRight('Stalls', 'FindUs'),
        contentFromRight('Stalls', 'Links'),
        contentFromLeft('FindUs', 'Schedule'),
        contentFromLeft('FindUs', 'WhatsOn'),
        contentFromLeft('FindUs', 'Home'),
        contentFromLeft('FindUs', 'Stalls'),
        contentFromRight('FindUs', 'Links'),
        contentFromLeft('Links', '*')
    ]);
