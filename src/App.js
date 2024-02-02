import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addLocataireAction,
  updateLocataireAction,
  deleteLocataireAction,
  filtrerLocataireAction,
  clearFilterAction,
} from './Config/actions/locataireActionsCreators';


function App() {

  const villes = useSelector(state => state.villes);
  const locataires = useSelector(state => state.locataires);
  const locatairesFilter = useSelector(state => state.locatairesFilter);
  const dispatch = useDispatch();
  console.log('Locataires:', locataires);

  const listelocatairesmap = locatairesFilter.length > 0 ? locatairesFilter : locataires;

  const indexlocataire = locataires.length;

  const [id, setId] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [ville, setVille] = useState(1);
  const [villeFiltrer, setVilleFiltrer] = useState(1);


  const handleEnregistrer = () => {
    dispatch(addLocataireAction({ id: indexlocataire + 1, nom: nom, prenom: prenom, ville: parseInt(ville) }))
    handleClear()
  }
  const handleClear = () => {
    setNom("")
    setPrenom("")
    setVille(1)
  }
  const handleRemplirForm = (id) => {
    const locataire = locataires.find((u) => u.id === parseInt(id))
    setId(id)
    setNom(locataire.nom)
    setPrenom(locataire.prenom)
    setVille(parseInt(locataire.ville))
  }
  const handleModifier = () => {
    dispatch(updateLocataireAction({ id: id, nom: nom, prenom: prenom, ville: ville }))
    handleClear()
    setId("")
  }
  const handleDelete = (id) => {
    if (window.confirm('Voulez vous vraiment supprimer cet element ?')) {
      dispatch(deleteLocataireAction(id))
    }
  }
  const handleFiltrer = () => {
    dispatch(filtrerLocataireAction(villeFiltrer))
  }
  const handleFiltrerClear = () => {
    dispatch(clearFilterAction())
  }
  return (
    <div className='container my-3'>
      <div>
        <label>Nom</label>
        <input className='form-control' type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
        <label>Prénom</label>
        <input className='form-control' type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
        <label>Ville</label>
        <select value={ville} onChange={(e) => setVille(e.target.value)}>
          {villes.map((ville, i) => <option key={i} value={ville.id}>{ville.nom}</option>)}
        </select>
        {id ? <button className='btn btn-warning  me-2' onClick={() => handleModifier()}>Modifier</button>
          : <button className='btn btn-primary ms-3 me-2' onClick={() => handleEnregistrer()}>Enregister</button>}
        <button className='btn btn-light' onClick={() => handleClear()}>Clear</button>
      </div>
      <div className='my-4'>
        <label>Filtrer par ville</label>
        <select value={villeFiltrer} onChange={(e) => setVilleFiltrer(e.target.value)}>
          {villes.map((ville, i) => <option key={i} value={ville.id}>{ville.nom}</option>)}
        </select>
        <button className='btn btn-info ms-3 me-2' onClick={() => handleFiltrer()}>Filtrer</button>
        <button className='btn btn-light' onClick={handleFiltrerClear}>Clear</button>
      </div>
      <table className='table'>
        <thead>
          <tr>
            <td>Id</td>
            <td>Nom</td>
            <td>Prenom</td>
            <td>Ville</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {listelocatairesmap && listelocatairesmap.map((locataire) => {
            const ville = villes.find((v)=>v.id===parseInt(locataire.ville))

            return (
              <tr key={locataire.id}>
                <td>{locataire.id }</td>
                <td>{locataire.nom }</td>
                <td>{locataire.prenom }</td>
                <td>{ville ? ville.nom : ''}</td>
                <td>
                  <button className='btn btn-warning  me-2' onClick={() => handleRemplirForm(locataire.id)}>Modifier</button>
                  <button className='btn btn-danger' onClick={() => handleDelete(locataire.id)}>Supprimer</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
