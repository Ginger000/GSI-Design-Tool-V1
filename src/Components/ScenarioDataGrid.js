import React, {useState, useEffect} from 'react';
import { DataGrid } from "@mui/x-data-grid";
import Radio from "@mui/material/Radio";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



const ScenarioDataGrid = ({scenarios, depth, loadingRatio, changeTogether}) => {
 
  
  
  const rows = scenarios
  let radioChecked = [rows[0].id]
  const columns = [
    {
      field:"radiobutton",
      headerName:'',
      width:100,
      sortable:false,
      renderCell:(params) => (
        <Radio checked={radioChecked[0] === params.id} value={params.id} />
      )
    },
    // {
    //   field:"id",
    //   headerName:"ID"
    // },
    {
      field:"loadingRatio",
      headerName:"Loading Ratio",
      width: 180,
      valueGetter:(params)=> params.value === 2 ? params.value = 'Direct Infiltration' : params.value
    },
    {
      field:"depth",
      headerName:"Depth"
    },
  ]
  
  

  const [selectionModel, setSelectionModel] = useState(radioChecked)
  radioChecked = selectionModel

  // To reset intial radio button check when has new scenarios
  // useEffect(() => {
  //   setSelectionModel([scenarios[0].id])
  // }, [scenarios]);

  useEffect(()=>{
    // setSelectionModel([scenarios[1].id])
    if(scenarios.length && depth && loadingRatio){
      setSelectionModel([scenarios.filter((s)=>s["depth"]=== depth && s["loadingRatio"]===loadingRatio)[0].id])
    }
  }, [depth, loadingRatio])

  let selectedRow;
  if(rows){
    selectedRow = rows.filter((item) => {
      return item.id === selectionModel[0];
    });
    // if(selectedRow.length){
    //   changeTogether(selectedRow[0].loadingRatio, selectedRow[0].depth)
    // }
    
    console.log("selectedRow", selectedRow)
  }
  

  return (
    <div >
      <br />
    <Typography variant="subtitle2" gutterBottom component={'span'}>
        The data table below prints out all Scenarios of GSI-depth and GSI-loading-ratio combinations that fit your input site conditions.
        <br/>
        By default, we sort all scenarios in the most economic way : we sort ratio first and sort depth if the ratio is same.
        <br/>
        In the prototype visuailization above, we represent the most economic prototype by default.

    </Typography>
      <>
      <DataGrid 
        rows={rows}
        columns={columns}
        autoHeight
        selectionModel={selectionModel}
        onSelectionModelChange={(newSelectionModel) => {
          setSelectionModel(newSelectionModel);
        }}
      />
      {/* <div style={{ marginTop: "40px" }}>
        {selectedRow.length ? `You have selected: ${selectedRow[0].loadingRatio} ${selectedRow[0].depth}` : " "}
        
        
      </div> */}
      </> 
    </div>
    
  ) 
  
};

export default ScenarioDataGrid;
