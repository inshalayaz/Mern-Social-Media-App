import React from 'react'
import Posts from '../Posts/Posts'
import Form from '../Form/Form'
import { Container, Grow, Grid } from '@material-ui/core'
import useStyles from '../../Styles'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPosts } from '../../actions/posts'

function Home() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null)
  
    useEffect(()=> {
      dispatch(getPosts())
    },[currentId,dispatch])
    return (
        <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justify='space-between' alignItems='stretch' spacing={3} >
            <Grid item xs={12} sm={7} >
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4} >
              <Form currentId={currentId}  setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    )
}

export default Home
