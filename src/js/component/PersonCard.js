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
    <React.Fragement>
      {detail ! == undefined ? (
        <div className="card" style={{width: "18rem"}}>
          img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{person.name}</h5>
            <p className="card-text">{detail.properties.eye_color}</p>
            <p className="card-text">{detail.properties.hair_color}</p>
            
          
          </div>

      
        </div>
      )}


    </React.Fragement>
  )
}

export default PersonCard