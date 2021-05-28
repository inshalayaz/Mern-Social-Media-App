import React, { useState, useEffect } from 'react'
import {Link, useHistory,useLocation } from 'react-router-dom'
import { AppBar, Typography,Toolbar,Button, Avatar } from '@material-ui/core'
import useStyles from './styles'
import memories from '../../Img/memories.png'
import { useDispatch } from 'react-redux'

function NavBar() {
    const classes = useStyles()
    const [user, setUser] = useState( JSON.parse(localStorage.getItem('profile')))
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()

    useEffect(()=>{

        const token = user?.token

        setUser(JSON.parse(localStorage.getItem('profile')))
    // eslint-disable-next-line
    },[location])

    const logout = () =>{
        dispatch({ type:"LOGOUT" })
        history.push('/')
        setUser(null)

    }
    console.log(user)    
    return (
        <AppBar className={classes.appBar} position='static' color='inherit' >
            <div className={classes.brandContainer}>
            <Typography className={classes.heading } component={Link} >Memories</Typography>
            <img className={classes.image} src={memories} alt='memories' height='60' />
            </div>

            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className = {classes.purple} alt={user.result.name} src={user.result.imageUrl} >{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant='h6'>{user.result.givenName}</Typography>
                        <Button variant='contained' className={classes.logout} color='secondary' onClick={logout} > Logout</Button>
                    </div>
                ): (
                    <Button component={Link} to='/auth' variant='contained' color='primary' >Sign In</Button>
                )}
            </Toolbar>


        </AppBar>
    )
}

export default NavBar
