import React from 'react'

const PersonCard = ({person}) => {
    useEffect(() => {
        actions.getPerson(person.uid);
    } )

  return (
    <div>PersonCard</div>
  )
}

export default PersonCard