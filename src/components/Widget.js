import React from 'react'
import { WidgetContainer, WidgetContent } from 'elements'

const Widget = ({children, rows, cols, background}) => {
    return (
    <WidgetContainer rows={rows} cols={cols} background={background}>
        <WidgetContent>{children}</WidgetContent>
    </WidgetContainer>
    )
}

export default Widget
