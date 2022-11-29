function Stack({ children, spacing = 2, direction = 'row', wrap = false }) {
  const style = {
    display: 'flex',
    gap: `${spacing * 0.3}px`,
    flexWrap: wrap ? 'wrap' : 'nowrap',
    flexDirection: direction,
  }

  return <div style={style}>{children}</div>
}

export default Stack
