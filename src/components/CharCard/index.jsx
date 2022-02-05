import './style.css'
const CharCard = ({name , url,species,gender})=>{
   return  (
        <div className='container--dados--person'>
            <h4>{name}</h4>
           <img className='img--person' src={url} alt={name}></img>
           <p>Species : {species}</p>
           <p>Gender : {gender}</p>
        </div>
    )

}
export default CharCard