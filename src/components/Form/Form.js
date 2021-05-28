import React, { useEffect, useState } from 'react'
import useStyles from './Styles'
import { Paper, TextField, Button, Typography } from '@material-ui/core'
import FileBase64 from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import { createPost,updatePost } from '../../actions/posts'
 
function Form({ currentId, setCurrentId }) {
    const classes = useStyles();
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFiles: '' })
    const post = useSelector((state) => currentId ? state.posts.find((post)=> post._id === currentId ) : null )



    useEffect(()=>{
        if(post){
            setPostData(post)
        }
    }, [post])
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentId){
            dispatch(updatePost(currentId,postData))
        }else{
        dispatch(createPost(postData))
    }
    clear()
}

    const clear = () => {
        setCurrentId(null)
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFiles: '' })
    }
    return (
        <Paper className={ classes.paper }>
            <form className= { `${classes.root}  ${classes.form}` } noValidate autoComplete='off' onSubmit={handleSubmit} >
                <Typography variant='h6'> { currentId ? `Editing` : `Creating` } Memory </Typography>
                <TextField  name='creator' variant='outlined' label='Creator' value={postData.creator} onChange={(e) => setPostData({ ...postData, creator:e.target.value })}/>
                <TextField  name='title' variant='outlined' label='Title' value={postData.title} onChange={(e) => setPostData({ ...postData, title:e.target.value })}/>
                <TextField  name='message' variant='outlined' label='Message' value={postData.message} onChange={(e) => setPostData({ ...postData, message:e.target.value })}/>
                <TextField  name='tag' variant='outlined' label='Tag' value={postData.tags} onChange={(e) => setPostData({ ...postData, tags:e.target.value.split(',') })}/>
                <div className={classes.fileInput}>
                    <FileBase64 type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFiles: base64 })} />
                </div>
                <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth > Submit </Button>
                <Button  variant='contained' color='secondary' size='small' onClick={clear} fullWidth > Clear Form </Button>
            </form>
        </Paper>
    )
}

export default Form
