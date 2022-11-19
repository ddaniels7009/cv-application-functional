import React, { useState } from "react";
import '../App.css';

const Education = (props) => {

    const [edu, setEdu] = useState({
        school: 'CSU',
        major: 'CS',
        id: '1'
    });
    const [eduList, setEduList] = useState([]);



    const addToEducation = (e) => {

        setEduList([...eduList, { id: eduList.length, value: edu }]);
        setEdu({...edu, school: 'blank', major: 'blank'})
        //console.log(eduList);
    }

    /*   function ExampleWithManyStates() {
          // Declare multiple state variables!
          const [age, setAge] = useState(42);
          const [fruit, setFruit] = useState('banana');
          const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]); */

    return (
        <div>
            <form>
                <label>School</label>
                <input
                    type="text"
                    onChange={e => setEdu({ ...edu, school: e.target.value })}
                    value={edu.school}
                >
                </input>

                <label>Major</label>
                <input
                    type="text"
                    onChange={e => setEdu({ ...edu, major: e.target.value })}
                    value={edu.major}
                >
                </input>
            </form>
            <button onClick={addToEducation}>Add Education</button>
            <div>
                {eduList.map(item => (
                    <div key={item.id}>
                        <p >{item.value.school}</p>
                        <p >{item.value.major}</p>
                        <button onClick={()=>{
                            setEduList(currentEduList => currentEduList.filter(x => x.id !== item.id))}}></button>
                    </div>
                    
                ))}

            </div>
        </div>
    );
};

export default Education;