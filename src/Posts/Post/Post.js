import React from 'react'
import useStyles from './Styles'
import { Card, CardMedia, CardContent, CardActions, Button, Typography } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHoriz from '@material-ui/icons/MoreHoriz'
import moment from 'moment'
import {useDispatch} from 'react-redux'

import { deletePost, likePost } from '../../actions/posts'

function Post({post, setCurrentId}) {
    const dispatch = useDispatch()
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFiles} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant='h6'> { post.creator } </Typography>
                <Typography variant='body2'> { moment(post.createdAt).fromNow() } </Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: 'white' }} size='small' onClick={() => setCurrentId(post._id) } >
                    <MoreHoriz fontSize="default" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant='body2' color='textSecondary' > {post.tags.map( tag => `#${tag}`)} </Typography>
            </div>
                <Typography className={classes.title} variant='h5' gutterBottom >{post.title}</Typography>
            <CardContent>
                <Typography className={classes.message} variant='body2' color='textSecondary' component='p' >{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size='small' color='primary' onClick={()=> dispatch(likePost(post._id)) } >
                    <ThumbUpAltIcon fontSize='small' />
                    Like {post.likeCount}
                </Button>
                <Button size='small' color='secondary' onClick={()=> dispatch(deletePost(post._id)) } >
                    <DeleteIcon fontSize='small' />
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post
