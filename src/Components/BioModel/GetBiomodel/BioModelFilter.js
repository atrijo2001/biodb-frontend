import {useRef, useEffect, useContext} from "react";
import BioModelContext from "../../../context/BioModelContext/BioModelContext"

const BioModelFilter = () => {
    const biomodelContext = useContext(BioModelContext);
    const {filtered, filterBiomodels, clearFilter} = biomodelContext
    const text = useRef('');
    useEffect(()=>{
        if (filtered === null) {
            text.current.value = '';
        }
    })

    const onChange = e => {
        if (text.current.value !== '') {
          filterBiomodels(e.target.value);
        } else {
          clearFilter();
        }
      };
    return (
      <form>
      <input
      style={{width: '100%',
              padding: '12px 20px',
              margin: '8px 0',
              borderRadius: '12px'}}
        ref={text}
        type='text'
        placeholder='Filter...'
        onChange={onChange}
      />
    </form>
    )
}

export default BioModelFilter
