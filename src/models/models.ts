export interface AthleteEntry extends Athlete {
    sb: string,
    pb: string
}

export interface Athlete {
    name: string,
    club: string
}

export interface StartList {
    event: string,
    group: string,
    date: Date,
    athletes: Athlete[]
}