export class ScheduleRow {
    time: string;
    activity: string;

    constructor(time: string, activity: string) {
        this.time = time;
        this.activity = activity;
    }
}

export const SCHEDULE_ROWS = [
    new ScheduleRow('9:45', 'Registration Opens'),
    new ScheduleRow('10:15', 'First Classes: Golden Oldie, Puppy'),
    new ScheduleRow('11:30', 'Something'),
    new ScheduleRow('12:20', 'Something'),
    new ScheduleRow('13:20', 'Something'),
    new ScheduleRow('14:20', 'Something'),
    new ScheduleRow('15:20', 'Something'),
];
