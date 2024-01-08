import {Statistic, Title, List, Item, Label, Percentage} from './Statistics.styled'
export const Statistics = ({ title, stats }) => {
    
    return (
        <>
            <Statistic className="statistics">
                {title && <Title className="title">{title}</Title>}
                <List className="stat-list">
                    {stats.map(({ id, label, percentage }) => {
                    return (<Item className="item" key={id}>
    <Label className="label">{label}</Label>
    <Percentage className="percentage">{percentage}</Percentage>
    </Item>  )
                    })}
                </List>
            </Statistic>
        </>
)

                }
