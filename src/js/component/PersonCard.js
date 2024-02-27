import React from 'react'
import

const PersonCard = ({person}) => {
    useEffect(() => {
        actions.getPerson(person.uid);
    } )

  return (
    <div>PersonCard</div>
  )
}

export default PersonCard