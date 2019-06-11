export class ScheduleRow {
    start: string;
    finish: string;
    activity: string;
    cssClass: string;

    constructor(start: string, finish: string, activity: string, cssClass: string = '') {
        this.start = start;
        this.finish = finish;
        this.activity = activity;
        this.cssClass = cssClass;
    }
}

export const SCHEDULE_ROWS = [
    new ScheduleRow('10:15', '-', 'Registration Opens'),
    new ScheduleRow('10:50', '11:00', 'Shutzhund Introduction'),
    new ScheduleRow('11:00', '11:45', 'Golden Oldies, Young Handlers 11-16ys, Young Handlers 6-10ys', 'classesFont'),
    new ScheduleRow('11:55', '12:10', 'Shutzhund Demonstration'),
    new ScheduleRow('12:25', '13:25', 'Cheekiest Puppy, Best Rescue, Waggiest Tail, Best Trick', 'classesFont'),
    new ScheduleRow('13:30', '13:50', 'Terrier Racing Demonstration'),
    new ScheduleRow('13:50', '14:35', 'Handsomest Dog, Prettiest Female, Dog The Judge Would Like To Take Home', 'classesFont'),
    new ScheduleRow('14:40', '15:10', 'Terrier Racing - Open Heats'),
    new ScheduleRow('15:10', '15:30', 'Terrier Racing - Finals')
];
