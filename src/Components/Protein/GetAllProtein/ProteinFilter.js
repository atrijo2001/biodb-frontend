import React, { useContext, useEffect, useRef } from 'react'
import ProteinContext from "../../../context/ProteinContext/ProteinContext"

const ProteinFilter = () => {
    const proteinContext = useContext(ProteinContext);
    const {filtered, filterProteins, clearFilter} = proteinContext
    const text = useRef('');
    useEffect(()=>{
        if (filtered === null) {
            text.current.value = '';
        }
    })

    const onChange = e => {
        if (text.current.value !== '') {
          filterProteins(e.target.value);
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
        placeholder='Filter Proteins...'
        onChange={onChange}
      />
    </form>
    )
}

export default ProteinFilter
