import React,{useState} from "react"
const _ =require('lodash')
export default function Add(){
    const [data,setData] =useState([{isComplete:false,name:"",DOB:"",aadhar:"",mobile:"",Age:""}])
    const localStorageFunction=()=>{
        const filteredData = _.filter(data,{"isComplete":true})

        localStorage.setItem("filteredData",JSON.stringify(filteredData))
    }
    const saveData=(index)=>{
        let tempArr=[...data]
        if(tempArr[index].name && tempArr[index].DOB && tempArr[index].aadhar && tempArr[index].mobile){
        tempArr[index].isComplete=true
        setData(tempArr)
        }
        localStorageFunction()
        
        // console.log(data)
    }
    return(
        <div>
            <div className="add-new">Add New Person</div>

            <div className="table">
            <table>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Aadhar</th>
            <th>Mobile Number</th>
            <th>Age</th>
            <th>Actions</th>
            </table>
            </div>
            
            {
                data.map((item,index)=>{
                    return(
                        <div>
                            {/* <tbody> */}
                            <td><input type="text" value={item.name} onChange={(e)=>{
                                let newArr=[...data]
                                newArr[index].name = e.target.value 
                                newArr[index].isComplete=false
                                setData(newArr)
                                localStorageFunction()
                            }} placeholder="name"/></td>
                            
                            <td><input type="text" value={item.DOB} onChange={(e)=>{
                                let newArr=[...data]
                                newArr[index].DOB = e.target.value 
                                newArr[index].isComplete=false
                                setData(newArr)
                                localStorageFunction()
                            }} placeholder="DOB"/></td>

                            <td><input type="text" value={item.aadhar} onChange={(e)=>{
                                let newArr=[...data]
                                newArr[index].aadhar = e.target.value 
                                newArr[index].isComplete=false
                                setData(newArr)
                                localStorageFunction()
                            }} placeholder="aadhar"/></td>

                            <td><input type="text" value={item.mobile} onChange={(e)=>{
                                let newArr=[...data]
                                newArr[index].mobile = e.target.value 
                                newArr[index].isComplete=false
                                setData(newArr)
                                localStorageFunction()
                            }} placeholder="mobile"/></td>

                            <td><input type="text" value={item.mobile} onChange={(e)=>{
                                let newArr=[...data]
                                newArr[index].mobile = e.target.value 
                                newArr[index].isComplete=false
                                setData(newArr)
                                localStorageFunction()
                            }} placeholder=""/></td>

                            <td><button className="saveBtn" onClick={()=>{
                                saveData(index)
                            }}><u>Save</u></button>
                            <button className="delBtn" onClick={()=>{
                                let newArr=[...data]
                                newArr.splice(index,1)
                                setData(newArr)
                                localStorageFunction()
                            }}><u>Delete</u></button></td>

                            {/* </tbody> */}
                            </div>

                    )

                })
            }
            
           <button className="add" onClick={()=>{
            let newArr=[...data]
            newArr.push({isComplete:false,name:"",DOB:"",aadhar:"",mobile:""})
            setData(newArr)
            console.log(data)
           }}>ADD</button>

        </div>
    )
}

