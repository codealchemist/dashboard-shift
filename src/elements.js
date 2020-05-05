import styled from 'styled-components'

export const Gap = styled.div`
  margin: 10px;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  position: absolute;
  left: 0;
  top: 0;
`

export const Dashboard = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  gap: 20px;

  ${({ rows, cols }) => {
    let output = ''
    if (rows) output += `grid-template-rows: ${'1fr '.repeat(rows)};`
    if (cols) output += `grid-template-columns: ${'1fr '.repeat(cols)};`
    return output
  }}
`

export const WidgetContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 10px;

  ${({ background }) => {
    if (background) {
      return `
                background: ${background};
            `
    }
  }}

  ${({ rows, cols }) => {
    let output = ''
    if (rows) output += `grid-row: span ${rows};`
    if (cols) output += `grid-column: span ${cols};`
    return output
  }}
`

export const WidgetContent = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  align-items: center;
  justify-content: center;
  font-size: 10em;
`

export const Text = styled.div`
  font-size: 2em;
  margin: 0;

  ${({ color, size, bottom, top, light, bold }) => {
    let output = ''
    if (color) output += `color: ${color} !important;`
    if (size) output += `font-size: ${size}em;`
    if (bottom) output += `position: absolute; bottom: 10px;`
    if (top) output += `position: absolute; top: 10px;`
    if (light) output += `font-weight: 300;`
    if (bold) output += `font-weight: 700;`
    return output
  }}
`

export const Blur = styled.div`
  filter: blur(1px);

  ${({ value }) => {
    if (typeof value !== 'number') return
    return `filter: blur(${value}px);`
  }}
`

export const Outline = styled.div`
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`
