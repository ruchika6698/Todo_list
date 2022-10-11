import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    edit:{
        color: 'green'
    },
    delete: {
        color: 'red'
    },
    container:{
        marginTop: '5%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    tableCell:{
        fontWeight: 'bold !important'
    },
    addItem:{
        border: '2px solid red',
        width: '50%',
        borderRadius: '5px',
        margin: '10% 25%', 
        padding: '15px'
    },
    submit:{
        marginTop: '5%'
    }
})
