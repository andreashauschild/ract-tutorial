import React from 'react';
import './PreviewList.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { connect } from "react-redux";
import unknown from './testbild.png';
import previewReducer from "../../reducers/previewReducer";


const mapStateToProps = state =>{
    console.log(state)
    return {
        data :{
            cameras:state.preview.cameras
        }

    }
}

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: 'white',
        fontSize: 10
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.7) 100%)',
    },
});

const previewList = (props)=>{
    const { classes } = props;
    console.log("------------------------> ",props)
    return (
        <div className={classes.root}>

            <GridList className={classes.gridList} cols={5} cellHeight={100}>
                {props.data.cameras.map(cam => (
                    <GridListTile onClick={()=>console.log('XXXXXXXX')}  key={cam.id} rows={2}>
                        <img src={cam.base64} alt={cam.id} />

                        <GridListTileBar
                            title={cam.id}
                            subtitle={cam.timeStamp}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                                subtitle: classes.title,

                            }}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

previewList.propTypes = {
    classes: PropTypes.object.isRequired,
};
const PreviewList = connect(mapStateToProps)(withStyles(styles)(previewList))

export default PreviewList;
