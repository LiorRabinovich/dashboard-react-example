import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import SimpleTable from '../components/SimpleTable';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const cells = [
    { name: 'Dessert (100g serving)', key: 'name' },
    { name: 'Dessert (100g serving)', key: 'calories' },
    { name: 'Dessert (100g serving)', key: 'fat' },
    { name: 'Dessert (100g serving)', key: 'carbs' },
    { name: 'Dessert (100g serving)', key: 'protein' },
];

export default function Subscriptions() {
    return (
        <DefaultLayout title="Subscriptions">
            <SimpleTable cells={cells} rows={rows} />
        </DefaultLayout>
    )
}