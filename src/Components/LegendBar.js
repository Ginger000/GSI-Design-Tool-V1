function LegendBar({ title }) {
    const colorSpecs = {
        'Ground Base': '#D7B7BD',
        'Impermeable Hard Pavement': '#858585',
        'GSI Type - Planted Surface': '#008B14',
        'GSI Type - Paved Surface': '#B5E3EE',
        'GSI Depth': '#ECE957',
    };
    return (
        <div>
            <label htmlFor="">{`${title}`}</label>
            <div
                style={{
                    backgroundColor: `${colorSpecs[title]}`,
                    height: '7px',
                    width: '60px',
                }}
            ></div>
        </div>
    );
}

export default LegendBar;
