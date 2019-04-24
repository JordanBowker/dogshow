export class ScheduleRow {
    start: string;
    finish: string;
    activity: string;

    constructor(start: string, finish: string, activity: string) {
        this.start = start;
        this.finish = finish;
        this.activity = activity;
    }
}

export const SCHEDULE_ROWS = [
    new ScheduleRow('10:15', '-', 'Registration Opens'),
    new ScheduleRow('10:50', '11:00', 'Shutzhund Introduction'),
    new ScheduleRow('11:00', '11:45', 'Classes: Golden Oldies, Young Handlers 11-16ys, Young Handlers 6-10ys'),
    new ScheduleRow('11:55', '12:10', 'Shutzhund Demonstration'),
    new ScheduleRow('12:25', '13:25', 'Classes: Cheekiest Puppies, Best Rescue, Waggiest Tail, Best Trick'),
    new ScheduleRow('13:30', '13:50', 'Terrier Racing Demonstration'),
    new ScheduleRow('13:50', '14:35', 'Classes: Handsomest Dog, Prettiest Female, Dog The Judge Wants To Take Home'),
    new ScheduleRow('14:40', '15:10', 'Terrier Racing - Open Demo'),
    new ScheduleRow('15:10', '15:30', 'Terrier Racing - Finals')
];
