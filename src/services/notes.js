import Api from './api';

const NotesService = {
    index: () => Api.get('/notes', {
        headers: { 'token': localStorage.getItem('token') }
    })
}

export default NotesService;