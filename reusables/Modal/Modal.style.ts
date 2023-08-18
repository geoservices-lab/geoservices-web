const styles = {
  modal: {
    zIndex: 100,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  modalOverlay: {
    zIndex: 101,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'black',
    opacity: 0.7
  },
  modalContent: {
    zIndex: 102,
    position: 'fixed',
    background: 'white',
    width: 800,
    minHeight: 200,
    maxHeight: 600,
    overflowY: 'scroll',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: 40,
    borderRadius: 12,
  },
  modalTitle: {
    fontSize: 24,
    marginBottom: 15
  },
  modalDesc: {
    fontSize: 15,
    lineHeight: 1.5,
    marginTop: 15
  },
  modalImageContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20
  },
  modalImage: {
    width: '47%',
    marginBottom: 20,
    marginRight: 20
  }
};

export default styles;
