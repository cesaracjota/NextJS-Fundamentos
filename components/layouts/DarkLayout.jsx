
export const DarkLayout = ({ children }) => {
  return (
    <div style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: '10px',
        padding: '10px',
    }}>
        <h1> Dark Layout </h1>
        <div>
            { children }
        </div>
    </div>
  )
}
