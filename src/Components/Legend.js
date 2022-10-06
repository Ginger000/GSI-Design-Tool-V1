import LegendBar from './LegendBar';

export default function Legend({ displayedGraphic, legendNames }) {
    const newNames = {};

    for (let name of legendNames) {
        newNames[name.attributes.name_no_change] =
            name.attributes.name_displayed;
    }

    const legends = displayedGraphic.map((item, idx) => {
        return (
            <LegendBar key={idx} title={item} displayedTitle={newNames[item]} />
        );
    });
    return <div style={{ position: 'absolute' }}>{legends}</div>;
}
