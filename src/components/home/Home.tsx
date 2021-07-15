import React, { Fragment } from 'react'

const data = [
    {
        "event": "10 000m",
        "group": "MS",
        "athletes": [
            {
                "name": "Ola Matre",
                "club": "Oslostudentenes Idrettslag"
            },
            {
                "name": "Fredrik Fyksen Lund",
                "club": "Oslostudentenes Idrettslag"
            }
        ]
    },
    {
        "event": "10 000m",
        "group": "KS",
        "athletes": []
    }
]

export const Home = (): JSX.Element => {

    return (
        <div>
            <table style={{width: '100%'}}>
                <tr>
                    <th>Klasse</th>
                    <th>Øvelse</th>
                </tr>
                {data?.map((element) => {
                    return (
                        <Fragment>
                            <tr>
                                <th>{element.group}</th>
                                <th>{element.event}</th>
                            </tr>
                            <tr>
                                <th colSpan={2}>
                                    <table style={{width: '100%'}}>
                                        <tr>
                                            <th>Navn</th>
                                            <th>Klubb</th>
                                        </tr>
                                        {element.athletes?.map((athlete) => {
                                            return (
                                                <tr>
                                                    <th>{athlete.name}</th>
                                                    <th>{athlete.club}</th>
                                                </tr>
                                            )
                                        })}
                                    </table>
                                </th>
                            </tr>
                        </Fragment>
                    )
                })}
            </table>
        </div>
    )
}