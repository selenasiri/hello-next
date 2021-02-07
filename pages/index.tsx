// Styled-JSX (CSS in JS)

function Heading(props) {
  const variables = Math.random() > 0.5 ? 'red' : 'blue'
  return (
   <div>
      <h1>{props.heading}</h1>
      <style jsx global>
          {`
            h1 {
              color: ${variables};
            }
          `}
      </style>
    </div> 
  )   
}

export default function Home() {
  return (
    <div>
      <Heading heading="Heading" />
      <h1>Here</h1>
    </div>
  )
  
}
