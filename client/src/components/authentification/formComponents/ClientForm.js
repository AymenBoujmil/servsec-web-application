import React from 'react'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { TextField } from '@material-ui/core';
import { IconButton, InputAdornment, Input, Select , InputLabel} from '@material-ui/core';
import FileUpload from '../../Profile/Forms/FileUpload';

function ClientForm({formData,showPassword,handleShowPassword,handlechange ,governorate,isUpdate}) {

    var governorateOptions=[];
    var cityOptions=[];
    governorate.map((value,key)=>
    {
        governorateOptions.push({value:value.name , label:value.name});
        if (value.name===formData.address.governorate)
        {
            value.cities.map((value)=>cityOptions.push({value:value , label:value}))
        }
           
    });

    const handleDatetype=(e) =>
    {
        e.target.type='date';
    }

    const handleTexttype=(e) =>
    {
        e.target.type='text';
    
    }

    return (
        <div>
            <div style={{display:'flex',flexDirection:'row'}}>        
                    <div className="col-md-6 form-group p_star">
                    <TextField
                    fullWidth
                    label="firstname" 
                    type="text" 
                    variant="filled"
                    name="firstname" 
                    id="firstname"  
                    value={formData.firstname} 
                    required 
                    title="First name" 
                    placeholder="First name"  
                    onChange={handlechange}  />
                </div>
                <div className="col-md-6 form-group p_star">
                    <TextField
                    fullWidth
                    label="Last name" 
                    type="text" 
                    variant="filled"
                    name="lastname" 
                    id="lastname" 
                    value={formData.lastname} 
                    required 
                    title="Last name" 
                    placeholder="Last name"  
                    onChange={handlechange} />
                </div>
            </div>
            <div style={{display:'flex',flexDirection:'row'}}>        
                <div className="col-md-6 form-group p_star" style={{paddingBottom:'25px'}}>
                    <TextField 
                        fullWidth
                        label="Birthday"
                        type="text" 
                        variant="filled" 
                        name="date" 
                        id="date" 
                        value={formData.date} 
                        placeholder="Birthday" 
                        title="Birthday" 
                        onFocus={handleDatetype} 
                        onBlur={handleTexttype} 
                        required  
                        onChange={handlechange} 
                        max='2005-01-01'  />
                </div>
                <div className="col-md-6 form-group p_star">
                    <TextField 
                        fullWidth
                        label="Phone number"
                        type="number" 
                        variant="filled"
                        min="0"
                        name="phone" 
                        id="phone" 
                        value={formData.phone} 
                        required 
                        placeholder="phone number" 
                        title="phone number"  
                        onChange={handlechange}  />
                </div>
            </div>
        
            <div className="col-md-12 form-group p_star">
                <InputLabel className="col-md-12 form-group p_star" >Address : </InputLabel>
            </div> 
            <div className="col-md-12 form-group p_star" style={{ display: 'flex', flexDirection: 'row', paddingTop: '25px',justifyContent:'space-between'}}>
                <div className="col-md-4">
                    <InputLabel htmlFor="governorate">Governorate</InputLabel>
                    <Select
                        fullWidth
                        style={{paddingRight:'10px'}}
                        variant="outlined"
                        required
                        value={formData.address.governorate}
                        onChange={handlechange}
                        inputProps={{
                            name: 'governorate',
                            id: 'governorate',
                        }}
                        >
                        {
                            governorateOptions.map((option) =>(
                                <option value={option.value}>{option.label}</option>
                            ))
                        }
                    </Select>
                </div>
                <div className="col-md-4">
                    <InputLabel htmlFor="city">City</InputLabel>
                    <Select
                        fullWidth
                        variant="outlined"
                        required
                        value={formData.address.city}
                        onChange={handlechange}
                        inputProps={{
                            name: 'city',
                            id: 'city',
                        }}
                        >
                        {
                            cityOptions.map((option) =>(
                                <option value={option.value}>{option.label}</option>
                            ))
                        }
                    </Select>
                </div>
                <div className="col-md-4">
                    <TextField 
                    label="street"
                    type="text" 
                    variant="filled"
                    name="street" 
                    id="street" 
                    value={formData.address.street} 
                    required 
                    placeholder="Street" 
                    title="Street"  
                    onChange={handlechange}  />
                </div>
              </div>
            { isUpdate ? (
               null
            ):(
                <div style={{paddingTop:'25px'}} className="col-md-12 form-group p_star">
                    <input type="email" className="form-control" name="email" id="email" value={formData.email} required placeholder="Email"  title="Email" onChange={handlechange}  />
                </div>
            
            )}
            
            {isUpdate ? (
                <div>
                    <div style={{display:'flex',flexDirection:'row',paddingTop:'25px'}}    >
                        <div className="col-md-4 form-group p_star" style={{display:'flex',flexDirection:'row'}}>
                            <Input type={showPassword ? 'text' : 'password'}  className="form-control" value={formData.oldPassword} id="oldPassword" name="oldPassword"  placeholder="current password" title="current password" onChange={handlechange} 
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton onClick={handleShowPassword}>
                                {showPassword ? ( <VisibilityOff /> ) : ( <Visibility />) }
                                </IconButton>
                            </InputAdornment>
                            }   
                            />
                        </div>
                        <div className="col-md-4 form-group p_star" >
                            <Input type={showPassword ? 'text' : 'password'} className="form-control"  value={formData.password} id="password" name="password"  placeholder="New password" title="New password" onChange={handlechange} />
                        </div>
                        <div className="col-md-4 form-group p_star" >
                            <Input type={showPassword ? 'text' : 'password'}  className="form-control"  value={formData.confirmPassword} id="confirmPassword" name="confirmPassword"  placeholder="confirm password" title="confirm password" onChange={handlechange} />
                        </div>
                    </div>
                    <div style={{paddingTop:'25px'}} className="col-md-12 form-group p_star">
                        <InputLabel htmlFor="bio">Biography</InputLabel>
                        <textarea  rows="5" cols="33" className="form-control" name="bio" id="bio" value={formData.bio} required placeholder="Tell everyone about yourself ..."  title="Biography" onChange={handlechange}  />
                    </div>
                </div>
            ) : (
                <div>
                    <div className="col-md-12 form-group p_star" style={{display:'flex',flexDirection:'row'}}>
                    <Input type={showPassword ? 'text' : 'password'}  required className="form-control" value={formData.password} id="password" name="password"  placeholder="current password" title="password" onChange={handlechange} 
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword}>
                        {showPassword ? ( <VisibilityOff /> ) : ( <Visibility />) }
                        </IconButton>
                    </InputAdornment>
                    }   
                    />
                    </div>
                    <div className="col-md-12 form-group p_star" >
                        <Input type={showPassword ? 'text' : 'password'}  required className="form-control"  value={formData.confirmPassword} id="confirmPassword" name="confirmPassword"  placeholder="confirm password" title="confirm password" onChange={handlechange} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default ClientForm
