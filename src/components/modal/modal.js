import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { onError } from '../../features/errorSlice';
import "./modal.scss";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #ccc',
  borderRadius: '15px',
  boxShadow: 24,
  p: 4,
};

export const BasicModal = () => {
  const dispatch = useDispatch();
  const title = useSelector((state)=> state.error.title);
  const description = useSelector((state)=> state.error.description);

  const [open, setOpen] = useState(true);

  const handleOnClose = () => {
    setOpen(false);
    dispatch(onError({ statusText: null, data: null }));
  };

  useEffect(()=>{
    if(title === null && description === null){
      setOpen(false);
    }else{
      setOpen(true)
    }
  }, [title, description]);

  return (
    <div>
      <Modal
        className="modal"
        open={open}
        onClose={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {description}
          </Typography>
          <Button className="btn-close-modal" sx={{position: "sticky", right: 0, borderRadius: '15px'}} onClick={handleOnClose}>X</Button>
        </Box>
      </Modal>
    </div>
  );
}
