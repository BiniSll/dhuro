import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { onClose } from '../../redux/features/errorSlice';
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
  const isOpen = useSelector((state) => state.error.isOpen)
  const title = useSelector((state)=> state.error.title);
  const description = useSelector((state)=> state.error.description);


  const handleOnClose = () => {
    dispatch(onClose());
  };

  return (
    <div>
      <Modal
        className="modal"
        open={isOpen}
        onClose={isOpen}
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
