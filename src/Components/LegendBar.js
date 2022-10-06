function LegendBar({ title, displayedTitle }) {
    const colorSpecs = {
        ground_base: '#D7B7BD',
        impermeable_hard_pavement: '#858585',
        gsi_type_planted_surface: '#008B14',
        gsi_type_paved_surface: '#B5E3EE',
        gsi_depth: '#ECE957',
    };
    return (
        <div>
            <label htmlFor="">{`${displayedTitle}`}</label>
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
