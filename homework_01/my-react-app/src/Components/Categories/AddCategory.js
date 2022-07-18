import React, {useState, useCallback} from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { selectCategories } from '../../Store/Categories/selector';
import { addCategoryAction } from '../../Store/Categories/action';



 
export const AddCategory = () => {   
    const item = useSelector(selectCategories);
    console.log("item:",item)
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [title, setTitle] = useState('');

    const onChangeTitle = useCallback((event) => {setTitle(event.target.value)}, [setTitle]);
    
    const onGoBack = useCallback(() => {
        navigate(-1)
    }, [navigate]);

      const onAddCat = useCallback(() =>{
        dispatch(addCategoryAction({
            name: title,
            id: Object.keys(item).length,
        }))
        navigate("/category");
      }, [dispatch, navigate, title, item]);
      
    return(
        <div className = "modalForm">
            <div>
                <p>Назва:</p>
                <input value = {title} onChange = {onChangeTitle}/>
                <button onClick = {() => {onAddCat()}}>Add</button>
                <button onClick = {onGoBack}>Back</button>
            </div>
        </div>
    )
}
