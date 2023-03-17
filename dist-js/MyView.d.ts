import React from 'react';
import { Person } from './Person';
export declare class MyView extends React.Component<any> {
    person: Person;
    styles: {
        container: {
            flex: number;
            backgroundColor: string;
            alignItems: "center";
            justifyContent: "center";
        };
    };
    constructor(person: Person);
    render(): JSX.Element;
}
