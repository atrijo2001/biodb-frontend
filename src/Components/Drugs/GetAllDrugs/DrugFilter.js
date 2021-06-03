import React, { useContext, useEffect, useRef } from 'react'
import DrugContext from "../../../context/DrugsContext/DrugsContext"

const DrugFilter = () => {
    const drugContext = useContext(DrugContext);
    const {filtered, filterDrugs, clearFilter} = drugContext
    const text = useRef('');
    useEffect(()=>{
        if (filtered === null) {
            text.current.value = '';
        }
    })

    const onChange = e => {
        if (text.current.value !== '') {
          filterDrugs(e.target.value);
          console.log(filtered)
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
        placeholder='Filter Drugs...'
        onChange={onChange}
      />
    </form>
    )
}

export default DrugFilter
