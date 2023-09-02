import React, { useState } from "react";
import Box from "@mui/material/Box";
import DeleteIcon from '@mui/icons-material/Delete';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Grid from "@mui/material/Grid";
import {List ,  Avatar, ListItem, ListItemAvatar, ListItemText, TextField, Typography, ListItemSecondaryAction, IconButton, colors } from "@mui/material";
import styled from "@emotion/styled";
import { grey, red } from '@mui/material/colors';




import { green } from "@mui/material/colors";
const Text = styled(Typography)`
  
color: grey;
font-weight: 600;
font-family:Roboto-200
background-color: grey;

`
const Boxs = styled(Box)`
margin: 15px 5px 5px 10px;

padding: 10px;

`
const Grids = styled(Grid)`

    
height: auto;
min-height: 300px;
  
 
`
const Lists = styled(List)`
border-radius: 10px;
height: auto;
min-height: 45vh;

`
const Form = () => {
  const [remaininglist  ,setre] = useState([])
  const [compete  ,setcom] = useState([])
  const [todo,  settodo ] = useState('');

const [inputerror , setinputerror] = useState("");
  const Handlesubmit = (e) => {
    e.preventDefault();
    console.log("in")
    if(todo!="" && todo.length>3)
    {
      console.log("h")
       const tasklist = {
         id:Math.random(),
         title:todo,

       }
       const list = [...remaininglist]
       list.push(tasklist)

       setre(list);
       settodo("")
    }
  };
  const Handle = (e)=>{
    e.target.value.length <=3 ?setinputerror("write atleast more than 3 charecter") : setinputerror('')
    settodo(e.target.value)}
 const handlecheck = (id)=>{
  
  const list = [...remaininglist]
  
  const complete = [...compete]
  const time = getcurrenttime(new Date())
const idex =  list.findIndex((item)=>item.id === id);
remaininglist[idex].currenttime=time
complete.push(remaininglist[idex])


 
 remaininglist.splice(idex,1)

  setcom(complete);
 

 }
 const handledelete = (id)=>{
   
  const list = [...remaininglist]
  const update = list.filter((item)=>item.id!==id)
  
  setre(update);
   
  

 }
const handledeletec  = (id)=>{
   
  const list = [...compete]
  const update = list.filter((item)=>item.id!==id)
  
  setcom(update);
   
  

 }
const getcurrenttime = (date)=>{
  
      let hour = date.getHours()
      let minute = date.getMinutes()
      let ampm = hour>=12 ? "pm" : "am"

      hour = hour%12;
      hour=hour?hour : 12
      console.log(minute)
      minute = minute < 10 ?"0"+minute : minute

   let time = hour +":"+minute+" "+ampm
return time
    }
  return (
    <Boxs >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <form onSubmit={Handlesubmit}  >
            <Text mb={3}  textAlign={"center"} variant="h5" color={"primary"}>
              React Todo List
            </Text>
            <Grid container  justifyContent={"center"}>
              <Grid item  xs={11} sm={10} lg={8}>
                <TextField
                  id="input"
                  variant="outlined"
                 color="grey"
                  label={"press to add task"}
                  fullWidth={true}
                  value={todo}
                  onChange={(e)=>Handle(e)}
                  error={inputerror ? true:false}
                  helperText={inputerror}
                >
                  {" "}
                </TextField>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item xs={12} sm={12} lg={12} mt={8}>
                   <Grid container spacing={2}>
  
                     <Grid sx={{
                         ml:{xs:0,sm:10 , lg:27},
              
                            }}  item xs={12} sm={4} lg={4} >
  
                         <Lists  sx={{
         
                               height:"auto",
                               backgroundColor:"gray",
                               color:"white"
          

                              }}>
                            <Typography ml={5} fontSize={21}>  Tasks  </Typography>

                        {
                         remaininglist.length>0 ? "":<Typography color={grey} textAlign={"center"}>No any Task is Added</Typography>
                       }


                       {


                        remaininglist.map((item , id)=><ListItem>
                        <ListItemAvatar key={id} >
                          <Avatar  sx={{
                             backgroundColor:"white"
                           ,
                           color:"grey"
                           }}>
                                                      T
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText primary={item.title} />
                           <ListItemSecondaryAction>
                               <IconButton style={{color:green[500]}} onClick={()=>handlecheck(item.id)}>
                                   <TaskAltIcon/>
                               </IconButton>
                               <IconButton style={{color:red[500]}} onClick={()=>handledelete(item.id)}>
                                   <DeleteIcon/>
                               </IconButton>
                           </ListItemSecondaryAction>
                           
                           </ListItem>)
                           }
                           
                                
                              
                            
                            
                          
                                </Lists>

             </Grid>
             <Grid sx={{
              ml:{xs:0,sm:10 },
              
             }} item xs={12} sm={4} lg={4} >
  
      <Lists  sx={{
         
          height:"auto",
          backgroundColor:"gray",
          color:"white"
          

      }}>
        <Typography ml={5} fontSize={21}>  Complete  </Typography>

{
  compete.length>0 ? "":<Typography color={grey} textAlign={"center"}>No any complete Task is Added</Typography>
}


{


   compete.map((item , id)=><ListItem>
   
   <ListItemAvatar key={id} >
     <Avatar  sx={{
        backgroundColor:"white"
      ,
      color:"grey"
      }}>
       C
     </Avatar>
   </ListItemAvatar>
<ListItemText primary={item.title} secondary={item.currenttime}/>
 <ListItemSecondaryAction>
    
     <IconButton style={{color:red[500]}} onClick={()=>handledeletec(item.id)}>
         <DeleteIcon/>
     </IconButton>
 </ListItemSecondaryAction>
 
 </ListItem>)
 }
 
      
    
  
  

      </Lists>

             </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Boxs>
  );
};

export default Form;
