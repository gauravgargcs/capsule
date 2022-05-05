import { Button, Container, Fab, Grid, IconButton, InputAdornment, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import theme from '../utils/thems'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const LoginForm = () => {
	const [showPassword, setShowPassword] = useState(false);
	const handleClickShowPassword = () => setShowPassword(!showPassword);
	const [state , setState]=useState({name:"Joe Blogs" , email:"Joe.blogs@email.com" , role:10 , password:""})
	const validateEmail = (email) => {
		return String(state.email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	};
	console.log(validateEmail() ,"validateEmail" )
	const handleChange =(e)=>{
		setState({
			...state,
			[e.target.name]:e.target.value
		})
	}
	return (
		<Box sx={{
			background: theme.primary.blueMain,
			position: "absolute",
			maxWidth: "100%",
			width: "100%",
			height: "100%",
			overflow:"overlay"
			// padding: "0px 0px 0px 50px"
		}}
		>
			<Grid sx={{ height: "100%", justifyContent: "center", alignItems: "center" ,background:theme.primary.blueMain }} container >
				<Grid item xs={12} md={7.5} sx={{ background: "white", alignSelf: "stretch", p: 5 }}>
					<Box
						sx={{
							textAlign: "right",
							display: "flex",
							justifyContent: "end",
							alignItems: "center"
						}}>
						<Typography sx={{ fontWeight: 700 }}>Step 1 of 3</Typography>
						<div className="dot_wrapper">
							<span className="dot_page"></span>
							<span className="dot_page"></span>
							<span className="dot_page"></span>
						</div>
					</Box>
					<Grid sx={{ justifyContent: "center", alignItems: "center", height: "100%" }} container>
						<Grid item md={6} xs={12}>

							<Grid
								onSubmit={(e) => { e.preventDefault(); console.log("submitted") }}
								component="form"
								item
								sx={{
									'& .MuiTextField-root': { width: "100%" },
								}}
								noValidate
								autoComplete="off"
							>
								<Typography variant='h4' sx={{ fontWeight: 700 }}>Let's set up your account</Typography>

								<Grid xs={12} item sx={{ display: "inline-flex", mt: 5, mb: 5 }}>
									<Typography sx={{ fontWeight: 400 }}>Already have an account? </Typography>
									<Typography sx={{ fontWeight: 500, ml: 1, color: theme.primary.blueMain }}>Sign in </Typography>

								</Grid>
								<Grid container rowSpacing={1}  >

									<Grid sx={{ margin: "7px 0px" }} item xs={12}>

										<TextField
											required
											id="name_text"
											name='name'
											onChange={handleChange}
											value={state.name}
											label="Your Name"
											defaultValue="Joe Blogs"
											type="text"
										/>
									</Grid>
									<Grid sx={{ margin: "7px 0px" }} item xs={12}>

										<TextField
											required
											id="email_text"
											name='email'
											onChange={handleChange}
											value={state.email}
											label="Email Address"
											defaultValue="Joe.blogs@email.com"
											type="email"
										/>
										{state.email !==""&& !/^\S+@\S+\.\S+$/.test(state.email)&&<Typography color="red" variant='caption' >Please enter a valid email address</Typography>}

									</Grid>
									<Grid sx={{ margin: "7px 0px" }} item xs={12}>

										<Select
											required
											fullWidth
											id="role-select"
											name='role'
											onChange={handleChange}
											value={state.role}

										>
											<MenuItem value={10}>Developer</MenuItem>
											<MenuItem value={20}>UI & UX</MenuItem>
											<MenuItem value={30}>QA Testing </MenuItem>
										</Select>
									</Grid>

									<Grid sx={{ margin: "7px 0px" }} item xs={12}>

										<TextField
											label='Password'
											name='password'
											onChange={handleChange}
											variant="outlined"
											value={state.password}
											type={showPassword ? "text" : "password"}
											required

											InputProps={{
												endAdornment: (
													<InputAdornment position="end">
														<IconButton
															aria-label="toggle password visibility"
															onClick={handleClickShowPassword}

														>
															{showPassword ? <VisibilityIcon fontSize='small' /> : <VisibilityOffIcon fontSize='small' />}
														</IconButton>
													</InputAdornment>
												)
											}}
										/>
										{(state.password !==""&& state.password.length<8)&&<Typography variant='caption' color="CaptionText">Minimum of 8 characters</Typography>}
									</Grid>
									<Button type="submit" fullWidth sx={{ background: theme.primary.blueMain, p: 1.5, mt: 4 }} variant="contained">Next</Button>

								</Grid>
							</Grid>

						</Grid>
					</Grid>

				</Grid>
				<Grid container sx={{ justifyContent: "center" }} xs={12} md={3.5}>
					<Grid md={8}>

						<Typography color="white" variant="h4" sx={{ fontWeight: 700, textAlign: "center", mb: 10 }}>Dummy Heading</Typography>
						<Typography color="white" variant="subtitle1" sx={{ fontWeight: 400 }}>Lorem ipsum dolor sit, amet consectetur  aliquam ab quia consectetur veniam iste sequi fugiat. Magnam, recusandae!</Typography>
					</Grid>
				</Grid>
			</Grid>

		</Box >
	)
}

export default LoginForm