import React from 'react';
import { number } from 'yargs';

function Info({ nom, prénom, age, email }: { nom: string, prénom: string, age: number, email: string }): JSX.Element {
    return (
        <div>
            <p>Nom: {nom}</p>
            <p>Prénom: {prénom}</p>
            <p> DateNaissance: { 0}</p>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
            <p> Telephone: {telephone}</p>
            <p>Adresse: {adresse}</p>
            <p>ObjectifProfessionnel: {ObjectifProfessionnel}</p>
        </div>
    );
}

export default Info;