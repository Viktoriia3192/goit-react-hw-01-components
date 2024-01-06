import {Item} from './Statistics.styled'
export const Statistics = ({ title, stats }) => {
    
    return (
        <>
            <section className="statistics">
                <h2 className="title">{ title}</h2>
                <ul className="stat-list">
                    {stats.map(({ id, label, percentage }) => {
                    return (<Item className="item" key={id}>
    <span className="label">{label}</span>
    <span className="percentage">{percentage}</span>
    </Item>  )
                    })}
                </ul>
            </section>
        </>
)

                }
