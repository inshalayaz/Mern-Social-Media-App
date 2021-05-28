import React from 'react'
import Post from './Post/Post'
import useStyles from './Styles'
import { Grid, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'
function Posts({setCurrentId}) {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts )
    console.log(posts)
    return (
        <div>
            {
                !posts.length? <CircularProgress /> : 
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {
                        posts.map( post => (
                            <Grid key="_id" xs="12" item sm="6" >
                                <Post post= {post} setCurrentId={setCurrentId} />
                            </Grid>
                        ))
                    }
                </Grid>
            }
        </div>
    )
}

export default Posts
