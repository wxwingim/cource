import React, {FC} from 'react';
import { Card, Container, Stack, Table, Badge } from 'react-bootstrap';


const AppealCommentCard: FC = () => {
    return(
        <Card className="p-3 mb-4 shadow-sm">
            <Card.Body>
                <Card.Text>Комментарий</Card.Text>
                <Card.Text className="text-end text-muted">22.05.2022 12.00</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default AppealCommentCard;