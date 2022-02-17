function BandMembers(props) {
    return Object.keys(props.instruments).map(member => {
        const instrument = props.instruments[member];
        return (
            <p className={instrument}>{member}</p>
        )
    })
}

export default BandMembers;
