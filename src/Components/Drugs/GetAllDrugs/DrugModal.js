import {Modal, Backdrop, Fade, Button} from "@material-ui/core"
import {makeStyles} from '@material-ui/core/styles'
import {useState} from "react"

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    buttonStyles: {
        padding: ' 1rem 3rem',
        color: '#fff',
        backgroundColor: '#000',
        margin: '0 1rem',
        marginBottom: '1rem',
        borderRadius: '8px',
        width: '90%'
    }
  }));
const DrugModal = ({uses, name}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Button className={classes.buttonStyles} onClick={handleOpen}>{name}</Button>
            <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title" style={{textAlign: 'center'}}>{name}:</h2>
            <p id="transition-modal-description">{uses}</p>
          </div>
        </Fade>
      </Modal>
        </div>
    )
}

export default DrugModal
