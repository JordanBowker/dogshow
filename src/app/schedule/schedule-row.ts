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
    new ScheduleRow('10:45', '10:55', 'Shutzhund Introduction'),
    new ScheduleRow('11:00', '12:00', 'Golden Oldies, Young Handlers 11-16ys, Young Handlers 6-10ys, Cheekiest Puppy', 'classesFont'),
    new ScheduleRow('12:00', '12:15', 'Heads and Tails Guide Dogs Fund Raiser'),
    new ScheduleRow('12:20', '13:10', 'Shutzhund Demonstration & Have A Go'),
    new ScheduleRow('13:15', '14:15', 'Best Rescue, Waggiest Tail, Best Trick, Dog The Judge Would Like To Take Home', 'classesFont'),
    new ScheduleRow('14:30', '15:30', 'Handsomest Non-Pedigree Dog, Prettiest Non-Pedigree Female, Handsomest Pedigree Dog, Prettiest Pedigree Female', 'classesFont'),
];
