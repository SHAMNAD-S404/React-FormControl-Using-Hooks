  import React,{useState,useRef} from "react";

  const FormComponent = ()=> {

    const[inputValue,setInput] = useState('')
    const[error,setError] = useState('')

    const inputRef = useRef(null)

    const handleSubmit = (e)=> {
        e.preventDefault()


        if(inputValue.trim()===''){
            setError(`input can't be empty `)
            inputRef.current.focus()
            return;
        }

        console.log('Inpute Value', inputValue);
        setError('')
        
    }

    const handleInputChange =(e)=> {
        setInput(e.target.value)
    }

    return (

        <div style={{textAlign:'center',marginTop:'50px'}}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="inputField"> Enter something :</label>
                    <input type="text"
                    id="inputField" ref={inputRef}
                    value={inputValue} onChange={handleInputChange}
                    style={{marginLeft:'10px', padding:'5px',width:'200px'}} />
                </div>

                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit" style={{ marginTop: '20px', padding: '10px 20px' }}>
                Submit
                </button>

            </form>
        </div>
    )
  }

  export default FormComponent