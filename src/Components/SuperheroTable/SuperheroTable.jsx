import React from 'react';
import './SuperheroTable.css';

const SuperheroTable = (props) => {
    const rows = props.heroes.map((hero) => {
        return <tr key={hero.superheroId}>
            <td>{hero.superheroId}</td><td>{hero.name}</td><td>{hero.primaryAbility}</td><td>{hero.secondaryAbility}</td></tr> 
    })

    return (
        <div>
            <table>
                <tr>
                    <th>ID</th><th>Name</th><th>Prim. Ability</th><th>Secon. Ability</th>
                </tr>
                {rows}
            </table>
        </div>
    )
}

export default SuperheroTable;