import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {fetchData} from './PostHelper/postHelper'
import { likePost, dilikePost } from '../users/Helper/Index';


const useStyles = makeStyles((theme) => ({
    root: {
    maxWidth: 345,
    },
    media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    },
    expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    },
    expandOpen: {
    transform: 'rotate(180deg)',
    },
    avatar: {
    backgroundColor: red[500],
    },
}));

export default function RecipeReviewCard() {

    const [post, setPost] = useState([])

    useEffect(() => {
        fetchData()
        .then((data) =>{
            console.log("my data", data);
            if(data.error){
                // setError(data.error)
                console.log("Errorrr");
                // console.log(error);
            }
            else{
                console.log("Inside else");
                setPost(data)
            }
        })
        .catch(err => console.log(err))
    }, [])

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
    setExpanded(!expanded);
    };

    // const mychk = () =>(console.log(post))
    var mydate

    


    return (

    <div className="posts">
        {post.map(myPost =>(

            // <div>
            //     <h3>{myPost.postTitle}</h3>
            //     <h4>{myPost.postDate}</h4>
            //     <h6>{myPost.textPost}</h6>
            // </div>
            <div className="myAllPosts" > 
        <Card className={classes.root}>
            <CardHeader
            // avatar={
            //     <Avatar aria-label="recipe" className={classes.avatar}>
            //     R
            //     </Avatar>
            // }

            title={myPost.postTitle}
            { ...mydate = myPost.postDate.split('T')}
                subheader={mydate[0]}
            />

            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, sunt.
            </Typography>
            </CardContent>
            <CardActions disableSpacing>
            <IconButton aria-label="like">{myPost.like}
                <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="dislike">{myPost.dislike}
                <ThumbDownIcon />
            </IconButton>
            <IconButton
                className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >
                <ExpandMoreIcon />
            </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <Typography paragraph>
                    {myPost.textPost}
                </Typography>
            </CardContent>
            </Collapse>
        </Card>
        </div>
        ))}
                {/* <Button onClick={() =>{mychk()}}>Cloick</Button> */}
    </div>
    );
}
