import React from 'react'
import

const PersonCard = ({person}) => {
  const { store, actions } = useContext(Context);
  const [detail, setDetail ] = useState();
  useEffect(() => {
    actions.getPerson(person.uid)
      .then(detailPerson => setDetail(detailPerson));
    }, []);

  return (
    <div>PersonCard</div>
  )
}

export default PersonCard